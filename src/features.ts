import { parseDocument, isMap, isScalar } from "yaml";
import { diagnostic, location, type Diagnostic, type Result, type Span } from "./language/diagnostics.js";
import { parseFormula, parsePrelude } from "./language/parser.js";
import { checkFormula, checkPrelude, type CheckedPrelude, type Environment } from "./language/checker.js";
import type { CheckedFormula, Expr, LogicClass, Parameter, Type, TypedExpr } from "./language/ast.js";
import { formulaBlocks, pageEnvironment, type PageSource } from "./library.js";

/**
 * Setup features: case-file header blocks that are not rule lines. A feature with `domain: play-state` is
 * stated over the player's entries and defines one play predicate, such as `visible`, by an explicit
 * definition. See spec/play-state.md.
 */
export interface FeatureRequirement { formula: TypedExpr; message: string }
export interface CompiledFeature {
  file: string;
  name: string;
  /** The case-file header key that declares the feature. */
  header: string;
  /** The play predicate the feature defines. */
  defines: string;
  parameters: Parameter[];
  environment: Environment;
  formula: CheckedFormula;
  requires: FeatureRequirement[];
}
interface FrontMatter { metadata: Record<string, unknown>; field: (name: string) => Span }

const order: LogicClass[] = ["first-order", "with aggregates", "existential"];

/** Every name an expression reaches, following the bodies of shared terms. */
function reaches(node: Expr, environment: Environment, found = new Set<string>(), visited = new Set<string>()): Set<string> {
  if (node.kind === "name" && node.value !== undefined) {
    found.add(node.value);
    const term = Object.hasOwn(environment.terms, node.value) ? environment.terms[node.value] : undefined;
    if (term && !visited.has(node.value)) {
      visited.add(node.value);
      for (const part of [term.body, term.requires]) if (part) reaches(part, environment, found, visited);
    }
  }
  for (const child of node.children) reaches(child, environment, found, visited);
  return found;
}

/** Whether the formula is `∀c∈C: P(c) ↔ φ` with P not reachable from φ: an explicit definition, never a fixed point. */
function definitionProblem(ast: TypedExpr, defines: string, environment: Environment): string | undefined {
  const shape = `Write it as ∀c∈C: ${defines}(c) ↔ …, a definition of ${defines} from the entries and the page's parameters.`;
  if (ast.kind !== "quantifier" || ast.value !== "forall" || !ast.hasDomain || ast.binders?.length !== 1 || ast.children[0].kind !== "name" || ast.children[0].value !== "C") return `This formula must define ${defines} for every cell. ${shape}`;
  const body = ast.children[1], variable = ast.binders[0].name;
  if (body.kind !== "binary" || body.value !== "iff") return `This formula must define ${defines} for every cell. ${shape}`;
  const [left, right] = body.children;
  if (left.kind !== "call" || left.children[0].value !== defines || left.children.length !== 2 || left.children[1].kind !== "name" || left.children[1].value !== variable) return `The left side must be ${defines}(${variable}). ${shape}`;
  if (reaches(right, environment).has(defines)) return `${defines} appears on the right side, directly or through a shared term, so the definition would be circular. Define ${defines} from the entries alone; lighting a cell must not fire anything by itself.`;
}

/** The evaluator for a feature's `requires` formulas supports this fragment: booleans, names, present/unwrap, members, quantifiers over lists and the connectives. */
const supportedKinds = new Set(["boolean", "name", "unary", "binary", "call", "member", "quantifier", "number", "literal"]);
function unsupported(node: Expr): Expr | undefined {
  const ok = supportedKinds.has(node.kind)
    && (node.kind !== "unary" || node.value === "not")
    && (node.kind !== "binary" || ["and", "or", "implies", "iff", "=", "!="].includes(node.value!))
    && (node.kind !== "quantifier" || (node.hasDomain === true && node.binders?.length === 1))
    && (node.kind !== "call" || (node.children[0].kind === "name" && ["present", "unwrap"].includes(node.children[0].value!) && node.children.length === 2));
  if (!ok) return node;
  return node.kind === "call" ? unsupported(node.children[1]) : node.children.map(unsupported).find(Boolean);
}

type Value = boolean | number | string | undefined | Value[] | { [field: string]: Value };
function evaluate(node: Expr, scope: Map<string, Value>): Value {
  switch (node.kind) {
    case "boolean": return node.value === "true";
    case "number": case "literal": return node.kind === "number" ? Number(node.value) : node.value;
    case "name": if (!scope.has(node.value!)) throw new Error(`${node.value} has no value`); return scope.get(node.value!);
    case "member": { const base = evaluate(node.children[0], scope); return base && typeof base === "object" && !Array.isArray(base) ? base[node.value!] : undefined; }
    case "call": {
      const argument = evaluate(node.children[1], scope);
      return node.children[0].value === "present" ? argument !== undefined : argument;
    }
    case "unary": return !evaluate(node.children[0], scope);
    case "binary": {
      const left = () => evaluate(node.children[0], scope), right = () => evaluate(node.children[1], scope);
      switch (node.value) {
        case "and": return !!left() && !!right();
        case "or": return !!left() || !!right();
        case "implies": return !left() || !!right();
        case "iff": return !!left() === !!right();
        case "=": return JSON.stringify(left()) === JSON.stringify(right());
        default: return JSON.stringify(left()) !== JSON.stringify(right());
      }
    }
    case "quantifier": {
      const items = evaluate(node.children[0], scope);
      const list = Array.isArray(items) ? items : [];
      const test = (item: Value) => !!evaluate(node.children[1], new Map(scope).set(node.binders![0].name, item));
      return node.value === "forall" ? list.every(test) : list.some(test);
    }
    default: throw new Error(`${node.kind} is not supported in a requirement`);
  }
}

function frontMatter(page: PageSource): FrontMatter | undefined {
  const match = /^(?:﻿)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(page.text);
  if (!match) return;
  const start = match[0].indexOf(match[1]);
  const doc = parseDocument(match[1], { uniqueKeys: true });
  const metadata = doc.toJS({ maxAliasCount: 0 }) as Record<string, unknown>;
  const field = (name: string) => {
    const pair = isMap(doc.contents) ? doc.contents.items.find(item => isScalar(item.key) && item.key.value === name) : undefined;
    const node = pair?.value ?? pair?.key;
    return location(page, start + (node?.range?.[0] ?? 0), start + (node?.range?.[1] ?? 0));
  };
  return { metadata, field };
}

/**
 * Compiles a `document: feature` page that declares `domain: play-state`. `definable` lists the play predicates
 * a feature may define (the prelude front matter key feature_predicates); the others, such as `known` and
 * `correct`, are fixed by the shared definitions.
 */
export function compileFeature(page: PageSource, prelude: CheckedPrelude, definable: readonly string[]): Result<CompiledFeature> {
  const diagnostics: Diagnostic[] = [];
  const front = frontMatter(page);
  if (!front) return { diagnostics: [diagnostic("E_SIGNATURE_REQUIRED", location(page, 0, 0), "Start this feature page with a --- header declaring its domain, header key and the predicate it defines.")] };
  const { metadata, field } = front;
  const header = metadata.header, defines = metadata.defines;
  if (metadata.domain !== "play-state") return { diagnostics: [diagnostic("E_HEADER_TYPE", field("domain"), "A feature with formulas declares domain: play-state.")] };
  if (typeof header !== "string" || !/^[a-z][\w-]*$/.test(header)) diagnostics.push(diagnostic("E_SIGNATURE_REQUIRED", field("header"), "Name the case-file header key this feature reads, for example header: fog."));
  const target = typeof defines === "string" && Object.hasOwn(prelude.environment.terms, defines) ? prelude.environment.terms[defines] : undefined;
  if (typeof defines !== "string") diagnostics.push(diagnostic("E_SIGNATURE_REQUIRED", field("defines"), "Name the play predicate this feature defines, for example defines: visible."));
  else if (!definable.includes(defines)) diagnostics.push(diagnostic("E_PLAY_DEFINITION", field("defines"), `${defines} is fixed by the shared definitions, and a feature cannot redefine it. A feature can define ${definable.join(", ")}.`));
  else if (!target || !prelude.environment.play?.has(defines) || target.kind !== "primitive" || target.parameters.length !== 1 || target.parameters[0].type.name !== "cell" || target.result.name !== "boolean")
    diagnostics.push(diagnostic("E_PLAY_DEFINITION", field("defines"), `${defines} is not a play predicate of one cell that a feature can define; use one declared with play primitive in the shared definitions.`));
  const blocks = formulaBlocks(page);
  const declarationBlocks = blocks.filter(block => block.language === "openrules"), formulaOnly = blocks.filter(block => block.language === "text");
  if (!formulaOnly.length) diagnostics.push(diagnostic("E_FORMULA_REQUIRED", location(page, 0, 0), "Add the feature's definition in a fenced text block."));
  if (formulaOnly.length > 1) diagnostics.push(diagnostic("E_PLAY_DEFINITION", location(formulaOnly[1], 0, formulaOnly[1].text.length), "A feature gives one definition; join the formulas with ∧."));
  const unclosed = blocks.find(block => !block.closed);
  if (unclosed) diagnostics.push(diagnostic("E_FORMULA_SYNTAX", location(unclosed, unclosed.text.length, unclosed.text.length), "Close the formula block with the same backticks or tildes that opened it."));
  if (diagnostics.length) return { diagnostics };

  const declarations = [];
  for (const block of declarationBlocks) {
    const parsed = parsePrelude(block.text, block);
    diagnostics.push(...parsed.diagnostics);
    if (parsed.value) declarations.push(...parsed.value);
  }
  if (diagnostics.length) return { diagnostics };
  const extended = declarations.length ? checkPrelude(declarations, prelude) : { value: prelude, diagnostics: [] as Diagnostic[] };
  diagnostics.push(...extended.diagnostics);
  if (!extended.value) return { diagnostics };
  const page_ = pageEnvironment(page, extended.value.environment, true);
  diagnostics.push(...page_.diagnostics);
  if (!page_.value) return { diagnostics };
  const environment = page_.value.environment;

  const parsed = parseFormula(formulaOnly[0].text, formulaOnly[0]);
  diagnostics.push(...parsed.diagnostics);
  let formula: CheckedFormula | undefined;
  if (parsed.value) {
    const checked = checkFormula(parsed.value, environment, "play");
    diagnostics.push(...checked.diagnostics);
    formula = checked.value;
    const problem = formula && definitionProblem(formula.ast, defines as string, environment);
    if (problem) diagnostics.push(diagnostic("E_PLAY_DEFINITION", location(formulaOnly[0], 0, formulaOnly[0].text.trimEnd().length), problem));
  }
  const classMatch = /Class:\s*\*\*([^*]+)\*\*/.exec(page.text);
  if (formula && !diagnostics.length) {
    const strongest = order[order.indexOf(formula.logicClass)];
    if (!classMatch || classMatch[1] !== strongest) diagnostics.push(diagnostic("E_LOGIC_CLASS", location(page, classMatch?.index ?? 0, (classMatch?.index ?? 0) + (classMatch?.[0].length ?? 0)), `This formula belongs to the ${strongest} class; write Class: **${strongest}**. on the page.`));
  }

  const requires: FeatureRequirement[] = [];
  const raw = metadata.requires ?? [];
  if (!Array.isArray(raw)) diagnostics.push(diagnostic("E_HEADER_TYPE", field("requires"), "Write requires as a list of entries, each with a formula and a message."));
  else for (const entry of raw) {
    const item = entry as { formula?: unknown; message?: unknown };
    if (!item || typeof item.formula !== "string" || typeof item.message !== "string" || !item.message.trim()) { diagnostics.push(diagnostic("E_HEADER_TYPE", field("requires"), "Give each requirement a formula and the message setters see when it fails.")); continue; }
    const requirement = parseFormula(item.formula, { file: page.file });
    const failed = requirement.value ? unsupported(requirement.value) : undefined;
    if (!requirement.value) { diagnostics.push(...requirement.diagnostics.map(d => ({ ...d, span: field("requires") }))); continue; }
    if (failed) { diagnostics.push(diagnostic("E_LANGUAGE_LIMIT", field("requires"), "A requirement can use booleans, parameter names, present, unwrap, member access, not/and/or/implies/iff, = and ≠, and ∀/∃ over a list or set.")); continue; }
    const checked = checkFormula(requirement.value, environment);
    diagnostics.push(...checked.diagnostics.map(d => ({ ...d, span: field("requires") })));
    if (checked.value) requires.push({ formula: checked.value.ast, message: item.message });
  }
  if (diagnostics.length || !formula) return { diagnostics };
  return { value: { file: page.file, name: String(metadata.name ?? header), header: header as string, defines: defines as string, parameters: page_.value.parameters, environment, formula, requires }, diagnostics: [] };
}

interface Board { rows?: number; cols?: number }
type Decoded = { value: Value } | { error: string };
const cellText = /^r([1-9]\d*)c([1-9]\d*)$/;

function decodeCell(raw: unknown, board: Board, onGrid: boolean): Decoded {
  let row: number, col: number;
  if (typeof raw === "string" && cellText.test(raw)) { const m = cellText.exec(raw)!; row = Number(m[1]); col = Number(m[2]); }
  else if (typeof raw === "number" && Number.isInteger(raw) && raw >= 0) {
    if (!board.cols) return { error: `${raw} is a row-major number, which needs the board size; write the cell as r1c1 or declare the board size` };
    row = Math.floor(raw / board.cols) + 1; col = raw % board.cols + 1;
  } else return { error: `${JSON.stringify(raw)} is not a cell; write it as r1c1` };
  if (onGrid && ((board.rows && row > board.rows) || (board.cols && col > board.cols))) return { error: `r${row}c${col} is outside the ${board.rows}×${board.cols} grid` };
  // Formulas count rows and columns from zero.
  return { value: { row: row - 1, col: col - 1 } };
}

function decode(raw: unknown, type: Type, environment: Environment, board: Board, name: string): Decoded {
  const resolved = environment.types && Object.hasOwn(environment.types, type.name) ? environment.types[type.name] : type;
  const inner = resolved.args?.[0];
  switch (resolved.name) {
    case "cell": return decodeCell(raw, board, true);
    case "optional": return raw === undefined || raw === null ? { value: undefined } : decode(raw, inner!, environment, board, name);
    case "set": case "list": case "path": {
      if (!Array.isArray(raw)) return { error: `${name} must be a list` };
      const out: Value[] = [];
      for (const [index, item] of raw.entries()) {
        const decoded = decode(item, inner!, environment, board, `${name}[${index + 1}]`);
        if ("error" in decoded) return decoded;
        out.push(decoded.value);
      }
      return { value: resolved.name === "set" ? [...new Map(out.map(item => [JSON.stringify(item), item])).values()] : out };
    }
    case "record": {
      const fields = resolved.fields ?? {};
      // A record of a row and a column is a board coordinate, written like a cell but allowed off the grid.
      if (Object.keys(fields).sort().join() === "col,row" && Object.values(fields).every(f => f.name === "position")) return decodeCell(raw, board, false);
      if (!raw || typeof raw !== "object" || Array.isArray(raw)) return { error: `${name} must be a block of fields` };
      const out: Record<string, Value> = {};
      for (const key of Object.keys(raw)) if (!(key in fields)) return { error: `${name} has an unknown field ${key}` };
      for (const [key, fieldType] of Object.entries(fields)) {
        const decoded = decode((raw as Record<string, unknown>)[key], fieldType, environment, board, `${name}.${key}`);
        if ("error" in decoded) return decoded;
        out[key] = decoded.value;
      }
      return { value: out };
    }
    case "boolean": return typeof raw === "boolean" ? { value: raw } : { error: `${name} must be true or false` };
    case "number": case "position": case "digit": case "value": return typeof raw === "number" ? { value: raw } : { error: `${name} must be a number` };
    case "enum": return typeof raw === "string" && resolved.members?.includes(raw) ? { value: raw } : { error: `${name} must be one of ${resolved.members?.join(", ")}` };
    default: return { error: `${name} has a type that a case header cannot hold` };
  }
}

export interface FeatureBlockContext { metadata: Record<string, unknown>; field: (name: string) => Span; board: Board }

/**
 * Checks the case-file header blocks that belong to features: decodes each against its page's parameter
 * types, evaluates its requirements, and rejects a case that declares two features defining one predicate.
 */
export function checkFeatureBlocks(features: CompiledFeature[], context: FeatureBlockContext): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  const defined = new Map<string, string>();
  for (const feature of features) {
    const block = context.metadata[feature.header];
    if (block === undefined) continue;
    const here = context.field(feature.header);
    const first = defined.get(feature.defines);
    if (first) { diagnostics.push(diagnostic("E_FEATURE_CONFLICT", here, `A case can have one feature that decides what is ${feature.defines}, and ${first} already does. Remove either ${first} or ${feature.header}.`)); continue; }
    defined.set(feature.defines, feature.header);
    if (!block || typeof block !== "object" || Array.isArray(block)) { diagnostics.push(diagnostic("E_HEADER_TYPE", here, `Write ${feature.header} as a block of named fields.`)); continue; }
    const known = new Set(feature.parameters.map(parameter => parameter.name));
    const unknown = Object.keys(block).find(key => !known.has(key));
    if (unknown) { diagnostics.push(diagnostic("E_HEADER_TYPE", here, `${feature.header} has no field ${unknown}; its fields are ${[...known].join(", ")}.`)); continue; }
    const scope = new Map<string, Value>();
    let broken = false;
    for (const parameter of feature.parameters) {
      const raw = (block as Record<string, unknown>)[parameter.name];
      const resolved = feature.environment.types && Object.hasOwn(feature.environment.types, parameter.type.name) ? feature.environment.types[parameter.type.name] : parameter.type;
      // A missing set or list is empty; a missing optional is absent; anything else is required.
      const fallback = raw === undefined && ["set", "list", "path"].includes(resolved.name) ? [] : raw;
      if (fallback === undefined && resolved.name !== "optional") { diagnostics.push(diagnostic("E_HEADER_TYPE", here, `Add the ${parameter.name} field to ${feature.header}.`)); broken = true; break; }
      const decoded = decode(fallback, parameter.type, feature.environment, context.board, `${feature.header}.${parameter.name}`);
      if ("error" in decoded) { diagnostics.push(diagnostic("E_HEADER_TYPE", here, `${decoded.error}.`)); broken = true; break; }
      scope.set(parameter.name, decoded.value);
    }
    if (broken) continue;
    for (const requirement of feature.requires) if (!evaluate(requirement.formula, scope)) diagnostics.push(diagnostic("E_FEATURE_REQUIRES", here, requirement.message));
  }
  return diagnostics;
}

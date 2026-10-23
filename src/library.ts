import { markdownBlocks } from "./rules-blocks.js";
import { declareRuleLine, type LineDeclaration } from "./rule-lines.js";
import { isAlias, isMap, isScalar, parseDocument, visit } from "yaml";
import { diagnostic, location, type Diagnostic, type Result, type Span, type Source } from "./language/diagnostics.js";
import { parseFormula, parseIdentifier, parsePrelude, parseType } from "./language/parser.js";
import { checkDeclaredType, checkFormula, checkPrelude, type CheckedPrelude, type Environment } from "./language/checker.js";
import type { CheckedFormula, LogicClass, Parameter, Type } from "./language/ast.js";

export interface PageSource { file: string; text: string }
export interface FormulaBlock extends Source { language: string; closed: boolean }
export interface CompiledPage { file: string; parameters: Parameter[]; formulas: CheckedFormula[]; line?: LineDeclaration }
export interface TypedLibrary { prelude: CheckedPrelude; pages: CompiledPage[] }

function metadataMessage(code: string, text: string, offset: number): string {
  const line = text.slice(text.lastIndexOf("\n", offset - 1) + 1).split(/\r?\n/, 1)[0];
  const field = /^\s*([\w-]+)\s*:/.exec(line)?.[1];
  const thing = field ? `the ${field} field` : "this header field";
  switch (code) {
    case "DUPLICATE_KEY": return `${field ?? "This header field"} appears twice; keep just one entry for it.`;
    case "BAD_INDENT": return `Check the indentation and closing brackets around ${thing}; nested fields must be indented together.`;
    case "BLOCK_AS_IMPLICIT_KEY": return `Check ${thing}: a field's value cannot also be the name of another field.`;
    case "MULTILINE_IMPLICIT_KEY": return `Keep the name of ${thing} on one line, followed by a colon.`;
    case "BLOCK_IN_FLOW": return `Use either indented fields or a single bracketed list around ${thing}; do not mix the two forms.`;
    case "MISSING_CHAR": return `A closing quote or bracket is missing around ${thing}; close each quote and bracket you open.`;
    case "BAD_DQ_ESCAPE": return `A quoted value in ${thing} contains an unsupported backslash escape; use a supported escape or single quotes.`;
    default: return `The header cannot be read around ${thing}; check its names, colons, quotes and brackets.`;
  }
}

export function formulaBlocks(page: PageSource): FormulaBlock[] {
  return markdownBlocks(page.text).filter(block => ["text", "openrules"].includes(block.language)).map(block => ({
    file: page.file, text: block.text, document: page.text, offset: block.offset, language: block.language, closed: block.closed,
  }));
}
export function compilePrelude(page: PageSource): Result<CheckedPrelude> {
  const blocks = formulaBlocks(page);
  if (!blocks.length) return { diagnostics: [diagnostic("E_SIGNATURE_REQUIRED", location({ ...page }, 0, 0), "Put the shared definitions in a fenced openrules block, with a type declared for each input and term.")] };
  const declarations = []; const diagnostics: Diagnostic[] = [];
  for (const block of blocks) {
    if (!block.closed) { diagnostics.push(diagnostic("E_FORMULA_SYNTAX", location(block, block.text.length, block.text.length), "Close the formula block with the same backticks or tildes that opened it.")); continue; }
    const parsed = parsePrelude(block.text, block);
    diagnostics.push(...parsed.diagnostics); if (parsed.value) declarations.push(...parsed.value);
  }
  if (diagnostics.length) return { diagnostics };
  return checkPrelude(declarations);
}
export function pageEnvironment(page: PageSource, environment: Environment, feature = false): Result<{ environment: Environment; parameters: Parameter[] }> {
  const symbols = Object.assign(Object.create(null), environment.symbols) as Record<string, Type>;
  const diagnostics: Diagnostic[] = [];
  const front = /^(?:\uFEFF)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(page.text);
  if (!front) return { diagnostics: [diagnostic("E_SIGNATURE_REQUIRED", location(page, 0, 0), "Start this rule page with a --- header declaring the types of its parameters.")] };
  const doc = parseDocument(front[1], { uniqueKeys: true });
  if (doc.errors.length) return { diagnostics: doc.errors.map(error => diagnostic("E_FORMULA_SYNTAX", location(page, (front[0].indexOf(front[1]) + (error.pos?.[0] ?? 0))), metadataMessage(error.code, front[1], error.pos?.[0] ?? 0), `${error.code}: ${error.message}`)) };
  const aliases: Diagnostic[] = [];
  visit(doc, (_, node) => { if (isAlias(node)) aliases.push(diagnostic("E_FORMULA_SYNTAX", location(page, front[0].indexOf(front[1]) + (node.range?.[0] ?? 0), front[0].indexOf(front[1]) + (node.range?.[1] ?? 0)), "Write each header value directly; references to other header values using *name are not supported.")); });
  if (aliases.length) return { diagnostics: aliases };
  let value: unknown;
  try { value = doc.toJS({ maxAliasCount: 0 }); }
  catch { return { diagnostics: [diagnostic("E_FORMULA_SYNTAX", location(page, front[0].indexOf(front[1]), front[0].indexOf(front[1])), "Write each header value directly; references to other header values using *name are not supported.")] }; }
  if (!value || typeof value !== "object" || Array.isArray(value)) return { diagnostics: [diagnostic("E_SIGNATURE_REQUIRED", location(page, 0, 0), "Write the header as named fields, such as kind: thermometer, rather than a list or single value.")] };
  const metadata = value as Record<string, unknown>;
  const parameters = metadata.parameters ?? {};
  const declarations: Parameter[] = [];
  if (!parameters || typeof parameters !== "object" || Array.isArray(parameters)) return { diagnostics: [diagnostic("E_SIGNATURE_REQUIRED", location(page, 0, 0), "Write parameters as named fields, each with its own type, rather than a list or single value.")] };
  for (const [name, parameter] of Object.entries(parameters)) {
    const mapping = doc.get("parameters", true);
    const key = isMap(mapping) ? mapping.items.find(pair => isScalar(pair.key) && pair.key.value === name)?.key : undefined;
    const offset = front[0].indexOf(front[1]) + (isScalar(key) ? key.range?.[0] ?? 0 : 0);
    const span = location(page, offset, front[0].indexOf(front[1]) + (isScalar(key) ? key.range?.[1] ?? name.length : name.length));
    const identifier = parseIdentifier(name);
    if (!identifier.value || identifier.value !== name) { diagnostics.push(diagnostic("E_FORMULA_SYNTAX", span, `The parameter name ${name} cannot be used in formulas; start it with a letter, use only letters, digits or underscores, and avoid formula keywords.`)); continue; }
    const emptyWhen = parameter && typeof parameter === "object" && "empty_when" in parameter ? parameter.empty_when : undefined;
    if (emptyWhen !== undefined && (typeof emptyWhen !== "string" || emptyWhen === name || !Object.hasOwn(parameters, emptyWhen))) diagnostics.push(diagnostic("E_SIGNATURE_REQUIRED", span, "empty_when must name another parameter on this page."));
    const allowEmpty = parameter && typeof parameter === "object" && "allow_empty" in parameter ? parameter.allow_empty : undefined;
    if (allowEmpty !== undefined && typeof allowEmpty !== "boolean") diagnostics.push(diagnostic("E_SIGNATURE_REQUIRED", span, "allow_empty must be a boolean."));
    const shared = parameter && typeof parameter === "object" && "shared" in parameter ? parameter.shared : undefined;
    if (shared !== undefined && (!shared || typeof shared !== "object" || !("role" in shared) || !("type" in shared) || !["construct","read","conjoin"].includes(String(shared.role)) || !["route","network","partition","selection","choice","assignment","value","symbol"].includes(String(shared.type)))) diagnostics.push(diagnostic("E_SIGNATURE_REQUIRED", span, "shared must declare a construct, read or conjoin role and a shared answer type."));
    const rawType = parameter && typeof parameter === "object" && "type" in parameter ? parameter.type : undefined;
    if (typeof rawType !== "string") { diagnostics.push(diagnostic("E_SIGNATURE_REQUIRED", span, `Declare a type for the parameter ${name}, such as cell, number or path<cell>.`)); continue; }
    if ((Object.hasOwn(symbols, name) || Object.hasOwn(environment.terms, name)) && (feature || !environment.play?.has(name))) { diagnostics.push(diagnostic("E_NAME_SHADOW", span, `The parameter ${name} reuses a shared name; choose another parameter name.`)); continue; }
    const parsed = parseType(rawType, { file: page.file });
    // A metadata type is located at its declaring key rather than a synthetic string.
    const checked = parsed.value ? checkDeclaredType(parsed.value, environment, span) : parsed;
    diagnostics.push(...checked.diagnostics.map(error => ({ ...error, message: `For parameter ${name}: ${error.message}`, span })));
    if (parsed.value && !checked.diagnostics.length) { symbols[name] = parsed.value; declarations.push({ name, type: parsed.value, span }); }
  }
  // A rule page may name a parameter after a play-domain word (skyscraper counts the digits that are visible): the parameter wins, and rules never see the play name.
  return { value: { environment: { ...environment, symbols, play: new Set([...(environment.play ?? [])].filter(name => !declarations.some(d => d.name === name))) }, parameters: declarations }, diagnostics };
}

/** Shared classification check for library pages and embedded case formulas. */
export function checkLogicClass(formulas: CheckedFormula[], declared: unknown, span: Span): Diagnostic[] {
  const strongest = formulas.reduce<LogicClass>((current, formula) => current === "existential" || formula.logicClass === "existential" ? "existential" : current === "with aggregates" || formula.logicClass === "with aggregates" ? "with aggregates" : "first-order", "first-order");
  return declared === strongest ? [] : [diagnostic("E_LOGIC_CLASS", span, `This formula belongs to the ${strongest} class; write Class: **${strongest}** on the rule page.`)];
}

export function compilePage(page: PageSource, prelude: CheckedPrelude): Result<CompiledPage> {
  const blocks = formulaBlocks(page); const diagnostics: Diagnostic[] = [];
  const formulas: CheckedFormula[] = [];
  if (!blocks.length) diagnostics.push(diagnostic("E_FORMULA_REQUIRED", location(page, 0, 0), "Add the rule's formula in a fenced text or openrules block."));
  const environment = pageEnvironment(page, prelude.environment);
  diagnostics.push(...environment.diagnostics);
  for (const block of blocks) {
    if (!block.closed) { diagnostics.push(diagnostic("E_FORMULA_SYNTAX", location(block, block.text.length, block.text.length), "Close the formula block with the same backticks or tildes that opened it.")); continue; }
    const parsed = parseFormula(block.text, block);
    diagnostics.push(...parsed.diagnostics);
    if (!parsed.value || !environment.value) continue;
    const checked = checkFormula(parsed.value, environment.value.environment);
    diagnostics.push(...checked.diagnostics);
    if (checked.value) formulas.push(checked.value);
  }
  const classMatch = /Class:\s*\*\*([^*]+)\*\*/.exec(page.text);
  if (formulas.length && !diagnostics.length) {
    diagnostics.push(...checkLogicClass(formulas, classMatch?.[1], location(page, classMatch?.index ?? 0, (classMatch?.index ?? 0) + (classMatch?.[0].length ?? 0))));
  }
  const compiled: CompiledPage = { file: page.file, parameters: environment.value?.parameters ?? [], formulas };
  if (!diagnostics.length) {
    const contract = compilePageContract(page, prelude);
    diagnostics.push(...contract.diagnostics);
    if (contract.value?.line) compiled.line = contract.value.line;
  }
  return { ...(diagnostics.length ? {} : { value: compiled }), diagnostics };
}
/** Compile the parsed input contract without requiring or inventing a formula. */
export function compilePageContract(page: PageSource, prelude: CheckedPrelude): Result<CompiledPage> {
  const environment = pageEnvironment(page, prelude.environment);
  if (!environment.value || environment.diagnostics.length) return {diagnostics: environment.diagnostics};
  const compiled: CompiledPage = {file: page.file, parameters: environment.value.parameters, formulas: []};
  const diagnostics: Diagnostic[] = [];
  const front = /^(?:\uFEFF)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(page.text)!;
  const doc = parseDocument(front[1]);
  const node = doc.get("parameters", true);
  const start = front[0].indexOf(front[1]);
  const declaration = declareRuleLine(doc.toJS(), compiled, prelude, location(page, start + ((isMap(node) ? node.range?.[0] : 0) ?? 0), start + ((isMap(node) ? node.range?.[1] : 0) ?? 0)));
  diagnostics.push(...declaration.diagnostics);
  if (declaration.value) compiled.line = declaration.value;
  if (diagnostics.length) return {diagnostics};
  return {value: compiled, diagnostics: []};
}
export function compileLibrary(pages: PageSource[], preludePage: PageSource): Result<TypedLibrary> {
  const prelude = compilePrelude(preludePage);
  if (!prelude.value) return { diagnostics: prelude.diagnostics };
  const compiled = pages.map(page => compilePage(page, prelude.value!));
  const diagnostics = compiled.flatMap(page => page.diagnostics);
  return diagnostics.length ? { diagnostics } : { value: { prelude: prelude.value, pages: compiled.map(page => page.value!) }, diagnostics };
}

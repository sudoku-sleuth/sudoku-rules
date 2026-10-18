import { declarationParameters, type DeclarationAST } from "../declarations.js";
import { parameterGrammar, type CaseBoard } from "../case-values.js";
import { semanticParameters } from "./declaration.js";
import { declarationLibrary } from "../declaration-library.js";
import { readHeader, checkCaseReferences } from "../documents.js";
import { declarationRegistry } from "./registry.js";
import type { Cell, SemanticFile, SemanticIssue, SemanticSource } from "./types.js";

export interface Instance {
  ast: DeclarationAST; kind: string; negated: boolean; parameters: Record<string, unknown>; cells?: Cell[];
  condition?: { unless: boolean; predicate: string };
  source: SemanticSource;
}
export interface ReadFile { instances: Instance[]; metadata: Record<string, unknown>; issues: SemanticIssue[]; extras: { kind: string; source: SemanticSource; reason: string }[] }
const root = "https://rules.sudoku-sleuth.com/";
function instanceIdentity(ast: DeclarationAST, kind: string, negated: boolean): string {
  const url = /^https?:/.test(kind) ? kind : `${root}${kind}.md`;
  const primary = parameterGrammar(declarationLibrary.parameters?.get(url)).primary;
  return JSON.stringify([kind, negated, declarationParameters(ast, primary), ast.arguments?.map(a => a.value),
    ast.condition && [ast.condition.unless, ast.condition.predicate.value]], (_, value) =>
    value && typeof value === 'object' && !Array.isArray(value)
      ? Object.fromEntries(Object.entries(value).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)) : value);
}
/** Reads the published instance grammar; decoding of unsupported families remains deferred. */
export function readSemanticFile(file: SemanticFile, board?: CaseBoard): ReadFile {
  const result: ReadFile = { instances: [], metadata: {}, issues: [], extras: [] };
  const header = readHeader(file);
  if (!header.value) { result.issues.push(...header.diagnostics); return result; }
  const { metadata, field } = header.value;
  result.metadata = metadata;
  const referenceCheck = checkCaseReferences(file, {
    kinds: new Set(Object.keys(declarationRegistry)),
    urls: declarationLibrary.urls,
    lines: declarationLibrary.lines,
    parameters: declarationLibrary.parameters,
  }, board);
  result.issues.push(...referenceCheck.diagnostics);
  if (result.issues.length) return result;
  if (metadata.negate !== undefined && metadata.negate !== "all") result.issues.push({ code: "E_SEMANTIC_HEADER", message: "negate must be all when supplied.", span: field("negate") });
  // Board data is supplied through the typed API, never silently ignored in a header.
  const envelope = new Set(["format", "title", "setter", "source", "case", "library", "status", "flags", "negate"]);
  for (const key of Object.keys(metadata)) if (!envelope.has(key)) result.extras.push({
    kind: `header:${key}`, source: { kind: `header:${key}`, span: field(key) },
    reason: key === "board" || key === "givens" ? "Supply board data through BoardContext; header board data is not decoded." : `The ${key} header's semantic meaning is not lowered.`,
  });
  const counts = new Map<string, Instance[]>(), ids = new Map<string, string>();
  for (const ast of referenceCheck.value?.declarations ?? []) {
    const span = ast.span;
    const problem = (message: string) => result.issues.push({code:"E_SEMANTIC_LINE",message,span});
    const instance = ast.instance ? ast.instance.value : undefined;
    const negated = (metadata.negate === "all") !== (ast.negations.length % 2 === 1);
    const reference = ast.kind.value;
    let kind = reference;
    if (/^https?:/.test(reference)) {
      if(reference.startsWith(root) && /^[a-z0-9-]+\.md$/.test(reference.slice(root.length))) kind=reference.slice(root.length,-3);
    } else if (!reference.startsWith("#") && metadata.library !== root) kind=new URL(`${reference}.md`,String(metadata.library)).href;
    if (instance !== undefined) {
      const identity = instanceIdentity(ast, kind, negated);
      if (ids.has(instance) && ids.get(instance) !== identity) problem(`The instance ID ${instance} names different declarations.`);
      ids.set(instance, identity);
    }
    const source: SemanticSource = {span,kind,...(instance !== undefined?{instance}:{})};
    const parsed: Instance = {ast,kind,negated,parameters:Object.create(null),source};
    if(ast.cells) parsed.cells=ast.cells.value as Cell[];
    if(ast.condition) parsed.condition={unless:ast.condition.unless,predicate:ast.condition.predicate.value};
    const unsupported = !Object.hasOwn(declarationRegistry,kind) || declarationRegistry[kind as keyof typeof declarationRegistry].status === "unsupported";
    if (!unsupported) parsed.parameters=semanticParameters(ast);
    result.instances.push(parsed);
    const prior=counts.get(kind)??[];prior.push(parsed);counts.set(kind,prior);
  }
  for (const group of counts.values()) if (group.some(i => i.source.instance === undefined) && new Set(group.map(i => instanceIdentity(i.ast, i.kind, i.negated))).size > 1) {
    result.issues.push({ code: "E_SEMANTIC_LINE", message: "Repeated kinds need distinct instance IDs.", span: group.find(i => i.source.instance === undefined)!.source.span });
  }
  return result;
}


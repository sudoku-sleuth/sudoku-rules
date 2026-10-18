import { rulesBlocks, ruleDeclaration } from "../rules-blocks.js";
import { readHeader, checkCaseReferences } from "../documents.js";
import { location } from "../language/diagnostics.js";
import { declarationRegistry } from "./registry.js";
import type { Cell, SemanticFile, SemanticIssue, SemanticSource } from "./types.js";

export interface Instance {
  kind: string; negated: boolean; parameters: Record<string, unknown>; cells?: Cell[];
  condition?: { unless: boolean; predicate: string };
  source: SemanticSource;
}
export interface ReadFile { instances: Instance[]; metadata: Record<string, unknown>; issues: SemanticIssue[]; extras: { kind: string; source: SemanticSource; reason: string }[] }
const root = "https://rules.sudoku-sleuth.com/";
// Balanced JSON values retain nested relation and cell lists as one token.
function tokensOf(text: string): string[] {
  const tokens: string[] = [];
  let start = 0, depth = 0, quoted = false, escaped = false;
  for (let i = 0; i <= text.length; i++) {
    const c = text[i];
    if (!quoted && depth === 0 && (c === undefined || /\s/.test(c))) {
      if (i > start) tokens.push(text.slice(start, i));
      start = i + 1;
    } else if (quoted) {
      if (escaped) escaped = false;
      else if (c === "\\") escaped = true;
      else if (c === '"') quoted = false;
    } else if (c === '"') quoted = true;
    else if (c === "[" || c === "{") depth++;
    else if (c === "]" || c === "}") depth--;
  }
  if (quoted || depth !== 0) throw Error("This line contains an incomplete JSON value.");
  return tokens;
}

/** Reads the published instance grammar; decoding of unsupported families remains deferred. */
export function readSemanticFile(file: SemanticFile): ReadFile {
  const result: ReadFile = { instances: [], metadata: {}, issues: [], extras: [] };
  const header = readHeader(file);
  if (!header.value) { result.issues.push(...header.diagnostics); return result; }
  const { metadata, offset, field } = header.value;
  result.metadata = metadata;
  const referenceCheck = checkCaseReferences(file, {
    kinds: new Set(Object.keys(declarationRegistry)),
    urls: new Set(Object.keys(declarationRegistry).map(kind => `${root}${kind}.md`)),
  });
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
  const parsedBlocks = rulesBlocks(file.text, offset);
  for (const block of parsedBlocks.blocks) {
    let at = block.start;
    for (const raw of block.text.match(/[^\n]*(?:\n|$)/g) ?? []) {
      if (!raw) continue;
      const text = raw.trim();
      const declaration = ruleDeclaration(raw);
      if (declaration) {
        const span = location(file, at + raw.indexOf(text), at + raw.indexOf(text) + text.length);
        const problem = (message: string) => result.issues.push({ code: "E_SEMANTIC_LINE", message, span });
        let tokens: string[];
        try { tokens = tokensOf(declaration.tail); } catch { problem("This line contains an incomplete JSON value."); at += raw.length; continue; }
        const instance = declaration.instance;
        if (instance) { if (ids.has(instance) && ids.get(instance) !== text) problem(`The instance ID ${instance} names different declarations.`); ids.set(instance, text); }
        const negated = (metadata.negate === "all") !== declaration.negated;
        const reference = declaration.reference;
        let kind = reference;
        if (/^https?:/.test(reference)) {
          if (reference.startsWith(root) && /^[a-z0-9-]+\.md$/.test(reference.slice(root.length))) kind = reference.slice(root.length, -3);
          else kind = reference;
        } else if (!reference.startsWith("#") && metadata.library !== root) {
          // A kind at another root does not acquire this library's interpretation by spelling.
          kind = new URL(`${reference}.md`, String(metadata.library)).href;
        }
        const source: SemanticSource = { span, kind, ...(instance ? { instance } : {}) };
        const parsed: Instance = { kind, negated, parameters: Object.create(null) as Record<string, unknown>, source };
        if (tokens.length >= 2 && ["if", "unless"].includes(tokens[tokens.length - 2])) {
          const predicate = tokens.pop()!; const unless = tokens.pop() === "unless";
          if (!["uniform", "distinct", "connected"].includes(predicate)) problem(`Unknown condition ${predicate}.`);
          parsed.condition = { unless, predicate };
        }
        if (tokens[0] && /^r\d+c\d+(?:[-,]r\d+c\d+)*$/.test(tokens[0])) parsed.cells = tokens.shift()!.split(/[-,]/) as Cell[];
        if (kind === "sudoku") parsed.parameters.size = tokens.shift();
        if (kind === "pair" && ["difference", "at-least", "ratio", "sum", "less", "multiple", "shift"].includes(tokens[0])) {
          const op = tokens.shift()!;
          const relation: Record<string, unknown> = { op };
          if (["difference", "at-least", "ratio", "sum"].includes(op)) {
            try { relation.value = JSON.parse(tokens.shift() ?? ""); } catch { problem("Supply a whole-number relation value."); }
          }
          parsed.parameters.relation = relation;
        }
        if (kind === "kropki" && ["white", "black"].includes(tokens[0])) parsed.parameters.colour = tokens.shift();
        const unsupported = !Object.hasOwn(declarationRegistry, kind) || declarationRegistry[kind as keyof typeof declarationRegistry].status === "unsupported";
        while (tokens.length && !unsupported) {
          const name = tokens.shift()!, value = tokens.shift();
          if (Object.hasOwn(parsed.parameters, name)) problem(`The ${name} parameter appears twice.`);
          if (value === undefined) { problem(`Supply a value for ${name}.`); break; }
          try { parsed.parameters[name] = JSON.parse(value); }
          catch { if (/^r[1-9]\d*c[1-9]\d*$/.test(value)) parsed.parameters[name] = value; else problem(`Write ${name} as a JSON value.`); }
        }
        result.instances.push(parsed);
        const prior = counts.get(kind) ?? []; prior.push(parsed); counts.set(kind, prior);
      }
      at += raw.length;
    }
  }
  if (parsedBlocks.unclosed) result.issues.push({ code: "E_SEMANTIC_LINE", message: "Close the rules fence.", span: location(file, file.text.length, file.text.length) });
  if (!parsedBlocks.blocks.length) result.issues.push({ code: "E_SEMANTIC_LINE", message: "Add a fenced rules block.", span: location(file, offset, offset) });
  for (const group of counts.values()) if (group.some(i => !i.source.instance) && new Set(group.map(i => JSON.stringify([i.kind, i.negated, i.cells, i.parameters, i.condition]))).size > 1) {
    result.issues.push({ code: "E_SEMANTIC_LINE", message: "Repeated kinds need distinct instance IDs.", span: group.find(i => !i.source.instance)!.source.span });
  }
  return result;
}

import type { DeclarationTail } from "./declarations.js";
import { markdownBlocks } from "./rules-blocks.js";
import { isAlias, isSeq, parseDocument, stringify, visit } from "yaml";
import { diagnostic, location, type Diagnostic, type Span } from "./language/diagnostics.js";
import { parseFormula, parseType } from "./language/parser.js";
import { checkParameterAST, object, type CaseBoard, type CaseParameters } from "./case-values.js";
import { pageEnvironment, checkLogicClass, type PageSource } from "./library.js";
import { checkFormula, type CheckedPrelude } from "./language/checker.js";

export interface CaseBlock { language: string; text: string; offset: number; end: number }
/** Only top-level fences count; examples nested in a Markdown fence are prose. */
export function caseBlocks(page: PageSource): CaseBlock[] {
  return markdownBlocks(page.text).flatMap(block => block.closed ? [block] :
    ["rules", "custom-rules"].includes(block.language) ? [{ language: "unclosed", text: "", offset: block.offset, end: block.end }] : []);
}
export function headingSlug(text: string): string {
  return text.trim().toLowerCase().replace(/[^\p{L}\p{N}_\s-]/gu, "").replace(/\s/g, "-");
}
export interface CustomDefinition { url: string; id?: string; metadata: Record<string, unknown>; fields: Record<string, Span>; parameters: Record<string, unknown>; types?: CaseParameters["types"]; span: Span }
export function readCustomDefinitions(page: PageSource, blocks: CaseBlock[], kinds: Set<string> = new Set(), prelude?: CheckedPrelude, libraryUrls: Set<string> = new Set()): { definitions: Map<string, CustomDefinition>; diagnostics: Diagnostic[] } {
  const definitions = new Map<string, CustomDefinition>(), diagnostics: Diagnostic[] = [];
  const add = (span: Span, message: string) => diagnostics.push(diagnostic("E_CUSTOM_DEFINITION", span, message));
  const headings = [...page.text.matchAll(/^ {0,3}(#{1,6})\s+(.+?)\s*#*\s*$/gm)].filter(m => !blocks.some(b => m.index! >= b.offset && m.index! < b.end));
  const slugs = new Set<string>();
  const sections = headings.map((m, i) => {
    const base = headingSlug(m[2]); let slug = base, n = 0;
    while (slugs.has(slug)) slug = `${base}-${++n}`;
    slugs.add(slug);
    return { slug, start: m.index!, end: headings.slice(i + 1).find(next => next[1].length <= m[1].length)?.index ?? page.text.length };
  });
  for (const block of blocks) {
    const span = location(page, block.offset, block.offset + block.text.length);
    if (block.language === "unclosed") { add(span, "Close each rules or custom-rules fence."); continue; }
    if (block.language !== "custom-rules") continue;
    const doc = parseDocument(block.text, { uniqueKeys: true });
    let alias = false; visit(doc, (_, node) => { if (isAlias(node)) alias = true; });
    if (doc.errors.length || alias) { add(span, "Write custom definitions as YAML with unique keys and no aliases."); continue; }
    const entries: unknown = doc.toJS({ maxAliasCount: 0 });
    if (!Array.isArray(entries)) { add(span, "Write custom-rules as a list of complete definitions."); continue; }
    for (const [index, entry] of entries.entries()) {
      const node = isSeq(doc.contents) ? doc.contents.items[index] : undefined;
      const fields: Record<string, Span> = {};
      if (node && "items" in node) for (const pair of node.items as {key?: {value?: unknown}; value?: {range?: readonly number[]}}[]) {
        const range = pair.value?.range;
        if (range) fields[String(pair.key?.value)] = location(page, block.offset + range[0], block.offset + range[1]);
      }
      if (!object(entry)) { add(span, "Each custom definition must be a named mapping."); continue; }
      const required = ["name", "parameters", "definition", "maths", "example"];
      const allowed = [...required, "url", "id", "class"];
      if (Object.keys(entry).some(k => !allowed.includes(k)) || required.some(k => k === "parameters" ? !object(entry[k]) : typeof entry[k] !== "string" || !String(entry[k]).trim())) { add(span, "A custom definition needs name, parameters, definition, maths and example, with an id or url; each must be complete; parameters must be a mapping."); continue; }
      if (entry.id !== undefined && (typeof entry.id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id))) { add(fields.id ?? span, "Use lowercase letters and digits with single hyphens for a local rule id."); continue; }
      if (typeof entry.id === "string" && kinds.has(entry.id)) { add(fields.id ?? span, `Local rule #${entry.id} collides with a library kind; choose another id.`); continue; }
      const url = entry.id !== undefined ? `#${entry.id}` : entry.url as string;
      if (entry.url !== undefined && (typeof entry.url !== "string" || !/^https:\/\/[^\s?#]+\.md$/.test(entry.url) && !(entry.id === undefined && entry.url.startsWith("#")))) { add(fields.url ?? span, "Use an HTTPS Markdown URL for publication."); continue; }
      if (typeof url !== "string") { add(span, "A custom definition needs an id or url."); continue; }
      if (!/^#[a-z0-9\p{L}][\p{L}\p{N}_-]*$/u.test(url) && !/^https:\/\/[^\s?#]+\.md$/.test(url)) { add(span, "Use a section fragment such as #weighted-triple or an HTTPS Markdown URL for a custom definition."); continue; }
      if (url.startsWith("#") && kinds.has(url.slice(1))) { add(span, `Local rule ${url} collides with a library kind; choose another id.`); continue; }
      if (typeof entry.url === "string" && !entry.url.startsWith("#") && libraryUrls.has(entry.url)) { add(fields.url ?? span, "A custom URL cannot replace a library page."); continue; }
      if (entry.id === undefined && url.startsWith("#") && !sections.some(s => s.slug === url.slice(1) && block.offset > s.start && block.end <= s.end)) { add(span, `${url} must name the heading whose section contains this complete custom definition.`); continue; }
      if (definitions.has(url) || [...definitions.values()].some(d => entry.url !== undefined && d.metadata.url === entry.url)) { add(span, `Define ${url} once.`); continue; }
      if (Object.values(entry.parameters as object).some(v => typeof v === "string" ? !v.trim() : !object(v) || typeof v.description !== "string" || !v.description.trim())) { add(span, "Describe every custom parameter, including its scope and order where needed."); continue; }
      const definition = { url, id: typeof entry.id === "string" ? entry.id : undefined, metadata: entry, fields, parameters: entry.parameters as Record<string, unknown>, types: prelude?.environment.types, span };
      definitions.set(url, definition);
      if (prelude) diagnostics.push(...checkCustomFormula(page, definition, prelude));
    }
  }
  return { definitions, diagnostics };
}

export function customParameterContract(definition: CustomDefinition): CaseParameters {
  const parameters = Object.fromEntries(Object.entries(definition.parameters).map(([name, raw]) => {
    const declared = object(raw) && typeof raw.type === "string" ? parseType(raw.type).value : undefined;
    return [name, { type: declared ?? (["cells", "line"].includes(name) ? {name: "path", args: [{name: "cell"}]} : undefined), required: !object(raw) || raw.default === undefined || /^Required\b/.test(String(raw.default)) }];
  }));
  return {parameters: {element: {type: {name: "string"}, required: false}, ...parameters, kind: {type: undefined, required: false}}, types: definition.types ?? {}};
}

export function checkCustomParameters(ast: DeclarationTail, span: Span, definition: CustomDefinition, board: CaseBoard): Diagnostic[] {
  return checkParameterAST(ast, span, customParameterContract(definition), board);
}

/** Reuse the library environment, formula compiler and classification check. */
export function checkCustomFormula(page: PageSource, definition: CustomDefinition, prelude: CheckedPrelude): Diagnostic[] {
  const {metadata, fields, span} = definition;
  const environment = pageEnvironment({file: page.file, text: `---\n${stringify({parameters: metadata.parameters})}---\n`}, prelude.environment);
  const diagnostics = environment.diagnostics.map(error => ({...error, span: fields.parameters ?? span}));
  const maths = String(metadata.maths);
  // Parse the YAML-decoded value directly: Markdown fences in a scalar are not
  // new blocks, and a scalar cannot supply classification or metadata.
  const parsed = parseFormula(maths, {file: page.file});
  const checked = parsed.value && environment.value ? checkFormula(parsed.value, environment.value.environment) : undefined;
  for (const error of [...parsed.diagnostics, ...checked?.diagnostics ?? []]) {
    let target = fields.maths ?? span;
    const raw = page.text.slice(target.start.offset, target.end.offset);
    const at = raw.indexOf(maths);
    // Escaped and folded values point to their complete authored scalar.
    if (at >= 0) target = location(page, target.start.offset + at + error.span.start.offset, target.start.offset + at + error.span.end.offset);
    diagnostics.push({...error, span: target});
  }
  if (checked?.value && !diagnostics.length) {
    diagnostics.push(...checkLogicClass([checked.value], metadata.class ?? "first-order", fields.class ?? fields.maths ?? span).map(error => ({...error, message: error.message.replace(/write Class: \*\*([^*]+)\*\* on the rule page/, 'set class: $1 in this custom definition')})));
  }
  return diagnostics;
}

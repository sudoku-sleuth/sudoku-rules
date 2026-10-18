import type { DeclarationTail } from "./declarations.js";
import { markdownBlocks } from "./rules-blocks.js";
import { isAlias, parseDocument, visit } from "yaml";
import { diagnostic, location, type Diagnostic, type Span } from "./language/diagnostics.js";
import { parseType } from "./language/parser.js";
import { checkParameterAST, object, type CaseBoard, type CaseParameters } from "./case-values.js";
import type { PageSource } from "./library.js";

export interface CaseBlock { language: string; text: string; offset: number; end: number }
/** Only top-level fences count; examples nested in a Markdown fence are prose. */
export function caseBlocks(page: PageSource): CaseBlock[] {
  return markdownBlocks(page.text).flatMap(block => block.closed ? [block] :
    ["rules", "custom-rules"].includes(block.language) ? [{ language: "unclosed", text: "", offset: block.offset, end: block.end }] : []);
}
export function headingSlug(text: string): string {
  return text.trim().toLowerCase().replace(/[^\p{L}\p{N}_\s-]/gu, "").replace(/\s/g, "-");
}
export interface CustomDefinition { url: string; parameters: Record<string, unknown>; span: Span }
export function readCustomDefinitions(page: PageSource, blocks: CaseBlock[]): { definitions: Map<string, CustomDefinition>; diagnostics: Diagnostic[] } {
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
    for (const entry of entries) {
      if (!object(entry)) { add(span, "Each custom definition must be a named mapping."); continue; }
      const fields = ["url", "name", "parameters", "definition", "maths", "example"];
      if (Object.keys(entry).some(k => !fields.includes(k)) || fields.some(k => k === "parameters" ? !object(entry[k]) : typeof entry[k] !== "string" || !String(entry[k]).trim())) { add(span, "A custom definition needs only url, name, parameters, definition, maths and example, each complete; parameters must be a mapping."); continue; }
      const url = entry.url as string;
      if (!/^#[a-z0-9\p{L}][\p{L}\p{N}_-]*$/u.test(url) && !/^https:\/\/[^\s?#]+\.md$/.test(url)) { add(span, "Use a section fragment such as #weighted-triple or an HTTPS Markdown URL for a custom definition."); continue; }
      if (url.startsWith("#") && !sections.some(s => s.slug === url.slice(1) && block.offset > s.start && block.end <= s.end)) { add(span, `${url} must name the heading whose section contains this complete custom definition.`); continue; }
      if (definitions.has(url)) { add(span, `Define ${url} once.`); continue; }
      if (Object.values(entry.parameters as object).some(v => typeof v === "string" ? !v.trim() : !object(v) || typeof v.description !== "string" || !v.description.trim())) { add(span, "Describe every custom parameter, including its scope and order where needed."); continue; }
      if (Object.values(entry.parameters as object).some(v => object(v) && v.type !== undefined && (typeof v.type !== "string" || !parseType(v.type).value))) { add(span, "Use a valid type for each typed custom parameter."); continue; }
      definitions.set(url, { url, parameters: entry.parameters as Record<string, unknown>, span });
    }
  }
  return { definitions, diagnostics };
}

export function customParameterContract(definition: CustomDefinition): CaseParameters {
  const parameters = Object.fromEntries(Object.entries(definition.parameters).map(([name, raw]) => {
    const declared = object(raw) && typeof raw.type === "string" ? parseType(raw.type).value : undefined;
    return [name, { type: declared ?? (["cells", "line"].includes(name) ? {name: "path", args: [{name: "cell"}]} : undefined), required: !object(raw) || raw.default === undefined || /^Required\b/.test(String(raw.default)) }];
  }));
  return {parameters: {...parameters, kind: {type: undefined, required: false}}, types: {}};
}

export function checkCustomParameters(ast: DeclarationTail, span: Span, definition: CustomDefinition, board: CaseBoard): Diagnostic[] {
  return checkParameterAST(ast, span, customParameterContract(definition), board);
}

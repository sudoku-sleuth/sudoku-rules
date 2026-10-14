import { readHeader } from "../documents.js";
import { diagnostic, type Diagnostic } from "../language/diagnostics.js";
import type { PageSource } from "../library.js";
import { readingLibrary, type PageReading, type ReadingLibrary, type Variant } from "./library.js";
import { readCase } from "./read.js";
import { builtins, formats, isCellList, isNestedCells, parsePlaceholders, splitExpr, type WhenCase } from "./template.js";

export const readingChecks = ["E_READING_FIELD", "E_READING_PLACEHOLDER", "E_READING_PARAMETER", "E_READING_EXAMPLE"] as const;

/** Named conditions are a closed list; each has a test. A new need is a pull request. */
export const namedConditions = ["isHouse", "housesStandAlone", "exceptsAreMarked", "standardBoard", "triggersOnGivens", "neverFire", "underFog", "hiddenGivens"] as const;
const props = ["first", "last", "length", "min", "max", "op", "value"];
const variantKeys = ["when", "family", "heading", "name", "noun", "one", "many", "short", "item", "item_over", "list", "spoiler", "silent", "relation", "join", "notes", "spoiler_notes", "terms"];
const pageKeys = ["group_by", "terms", "parts", "variants", "header"];

/** What a header reading may name. */
const headerFields: Record<string, string[]> = {
  givens: ["givens", "cell", "digit"],
  board: ["rows", "cols", "symbols", "regions"],
  fog: ["initiallyLit", "links", "trigger", "lights"],
};

const isObject = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v);

interface Context { names: Set<string>; conditionValues: Set<string>; parts: Set<string>; mentioned: Set<string> }

function templates(variant: Variant): string[] {
  const items = typeof variant.item === "string" ? [variant.item] : (variant.item ?? []).map(i => i.text ?? "");
  return [variant.heading, variant.one, variant.many, variant.short, variant.join?.note, ...items, ...(variant.notes ?? []).map(n => n.text), ...(variant.spoiler_notes ?? []).map(n => n.text)].filter((t): t is string => typeof t === "string");
}

function whenNames(when: unknown, found: string[] = []): string[] {
  if (!isObject(when)) return found;
  for (const [key, value] of Object.entries(when)) {
    if (key === "same" && Array.isArray(value)) found.push(...value.map(String));
    else if (key !== "condition") found.push(key);
  }
  return found;
}

function checkTemplate(text: string, ctx: Context, problems: string[], where: string) {
  for (const { expr } of parsePlaceholders(text)) {
    const { head, props: p, format, part } = splitExpr(expr);
    if (part !== undefined) {
      if (!ctx.parts.has(part)) problems.push(`${where}: {${expr}} names a part that does not exist`);
      continue;
    }
    if (!head) { problems.push(`${where}: {${expr}} is empty`); continue; }
    ctx.mentioned.add(head);
    if (!ctx.names.has(head) && !(builtins as readonly string[]).includes(head) && !ctx.conditionValues.has(head)) problems.push(`${where}: {${expr}} is not a declared parameter or built-in`);
    for (const x of p) if (!props.includes(x)) problems.push(`${where}: {${expr}} uses the unknown property ${x}`);
    if (format && !(formats as readonly string[]).includes(format)) problems.push(`${where}: {${expr}} uses the unknown format ${format}`);
  }
}

function checkReading(reading: PageReading, ctx: Context, problems: string[], where: string, allowHeader: boolean) {
  for (const key of Object.keys(reading)) if (!pageKeys.includes(key)) problems.push(`${where}: unknown reading field ${key}`);
  if (reading.header && !allowHeader) problems.push(`${where}: only the sudoku page declares header readings`);
  if (reading.terms !== undefined && (!Array.isArray(reading.terms) || reading.terms.some(t => typeof t !== "string" || !t.trim()))) problems.push(`${where}: terms must be a list of words`);
  for (const name of reading.group_by ?? []) { ctx.mentioned.add(name); if (!ctx.names.has(name)) problems.push(`${where}: group_by names ${name}, which is not declared`); }
  for (const [name, cases] of Object.entries(reading.parts ?? {})) {
    if (!Array.isArray(cases)) { problems.push(`${where}: part ${name} must be a list`); continue; }
    for (const c of cases as WhenCase[]) { for (const n of whenNames(c.when)) { ctx.mentioned.add(n); if (!ctx.names.has(n)) problems.push(`${where}: part ${name} asks about ${n}, which is not declared`); } checkTemplate(c.text ?? "", ctx, problems, `${where} part ${name}`); }
  }
  const variants = reading.variants ?? [];
  if (reading.variants !== undefined && !Array.isArray(reading.variants)) { problems.push(`${where}: variants must be a list`); return; }
  variants.forEach((entry, i) => {
    const here = `${where} variant ${i + 1}`;
    if (!isObject(entry)) { problems.push(`${here} must be a mapping`); return; }
    const variant = entry as Variant;
    for (const key of Object.keys(variant)) if (!variantKeys.includes(key)) problems.push(`${here}: unknown field ${key}`);
    if (!variant.silent && !variant.join && !variant.one && !variant.short) problems.push(`${here}: needs a one sentence`);
    if (variant.when !== undefined && !isObject(variant.when)) problems.push(`${here}: when must be a mapping`);
    for (const n of whenNames(variant.when)) { ctx.mentioned.add(n); if (!ctx.names.has(n)) problems.push(`${here}: when asks about ${n}, which is not declared`); }
    const condition = (variant.when as Record<string, unknown> | undefined)?.condition;
    for (const c of [condition, ...(variant.notes ?? []).map(n => n.when?.condition), ...(variant.spoiler_notes ?? []).map(n => n.when?.condition)]) if (typeof c === "string" && !(namedConditions as readonly string[]).includes(c)) problems.push(`${here}: ${c} is not a named condition`);
    if (variant.item_over) { ctx.mentioned.add(variant.item_over); if (!ctx.names.has(variant.item_over)) problems.push(`${here}: item_over names ${variant.item_over}, which is not declared`); }
    for (const t of templates(variant)) checkTemplate(t, ctx, problems, here);
    if (variant.spoiler) {
      // The words outside a spoiler part must not name what the part hides.
      const open = [variant.heading, variant.one, variant.many, variant.short, ...(variant.notes ?? []).map(n => n.text)].filter((t): t is string => typeof t === "string");
      for (const t of open)
        for (const { expr } of parsePlaceholders(t)) {
          const { head } = splitExpr(expr);
          if (head === "items" || head === "trigger" || head === "lights" || head === variant.item_over)
            problems.push(`${here}: a spoiler variant's sentence uses {${expr}}, which names what the spoiler hides; put it in item or spoiler_notes`);
        }
    } else if (variant.spoiler_notes?.length) problems.push(`${here}: spoiler_notes need a spoiler variant`);
    for (const n of [...(variant.notes ?? []), ...(variant.spoiler_notes ?? [])]) for (const k of whenNames(n.when)) ctx.mentioned.add(k);
    for (const item of Array.isArray(variant.item) ? variant.item : []) for (const k of whenNames(item.when)) ctx.mentioned.add(k);
  });
}

/** Checks every page's `reading` block: fields, placeholders, parameters named, and that the page's own Example reads in full. */
export function lintReadings(pages: PageSource[], library?: ReadingLibrary): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  const built = library ? { value: library, diagnostics: [] as Diagnostic[] } : readingLibrary(pages);
  if (!built.value) return built.diagnostics;
  const lib = built.value;
  for (const page of pages) {
    const header = readHeader(page).value;
    if (!header) continue;
    const m = header.metadata;
    const kind = typeof m.kind === "string" ? m.kind : undefined;
    const hasReading = isObject(m.reading);
    if (!hasReading && m.type_readings === undefined && m.predicate_readings === undefined) continue;
    const span = header.field(hasReading ? "reading" : m.type_readings !== undefined ? "type_readings" : "predicate_readings");
    const problems: string[] = [];
    if (m.document === "prelude") {
      if (m.type_readings !== undefined && !isObject(m.type_readings)) problems.push("type_readings must be a mapping");
      if (m.predicate_readings !== undefined && !isObject(m.predicate_readings)) problems.push("predicate_readings must be a mapping");
    }
    if (hasReading) {
      const reading = m.reading as PageReading;
      const declared: Record<string, unknown> = isObject(m.parameters) ? m.parameters : {};
      const params = Object.keys(declared);
      const types = Object.fromEntries(params.map(n => [n, String((declared[n] as { type?: string } | undefined)?.type ?? "")]));
      if (m.alias_of !== undefined || m.aliasOf !== undefined) problems.push("an alias page has no reading; it reads as its target");
      const base: Context = { names: new Set(params), conditionValues: new Set(["neverFire", "hiddenGivens"]), parts: new Set(Object.keys(reading.parts ?? {})), mentioned: new Set() };
      checkReading(reading, base, problems, kind ?? "page", kind === "sudoku");
      for (const [name, sub] of Object.entries(reading.header ?? {})) {
        if (!isObject(sub)) { problems.push(`header ${name} must be a mapping`); continue; }
        const fields = headerFields[name];
        if (!fields) { problems.push(`header ${name} is not a known header`); continue; }
        const ctx: Context = { names: new Set(fields), conditionValues: new Set(["neverFire", "hiddenGivens"]), parts: new Set(Object.keys(sub.parts ?? {})), mentioned: new Set() };
        checkReading(sub as PageReading, ctx, problems, `header ${name}`, false);
      }
      if (m.document === "feature") {
        const ctx: Context = { names: new Set(headerFields.fog), conditionValues: new Set(["neverFire", "hiddenGivens"]), parts: new Set(Object.keys(reading.parts ?? {})), mentioned: new Set() };
        problems.length = 0;
        checkReading(reading, ctx, problems, "fog", false);
      } else if (kind && !problems.length) {
        const unmentioned = params.filter(n => !isCellList(types[n]) && !isNestedCells(types[n]) && !base.mentioned.has(n));
        for (const n of unmentioned) diagnostics.push(diagnostic("E_READING_PARAMETER", span, `The reading of ${kind} never uses the parameter ${n}; use it in a sentence, a variant condition or group_by.`));
      }
      if (!problems.length && reading.variants?.length) {
        const example = /^````markdown\r?\n([\s\S]*?)^````/m.exec(page.text)?.[1];
        if (example) {
          const read = readCase(example, lib);
          if (!read.rows.length || !read.complete) diagnostics.push(diagnostic("E_READING_EXAMPLE", span, `The Example on ${kind ?? "this page"} must read in full from its reading${read.problems?.length ? `: ${read.problems.join("; ")}` : ""}.`));
        }
      }
    }
    for (const problem of problems) diagnostics.push(diagnostic(/\{[^}]*\}/.test(problem) ? "E_READING_PLACEHOLDER" : "E_READING_FIELD", span, `Check the reading: ${problem}.`));
  }
  return diagnostics;
}

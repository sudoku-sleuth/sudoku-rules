import { compilePublicLibrary, readHeader } from "../documents.js";
import type { Result } from "../language/diagnostics.js";
import type { PageSource } from "../library.js";
import type { LineDeclaration } from "../rule-lines.js";
import { isCellList, type TypeReadings, type WhenCase } from "./template.js";

export interface Variant {
  when?: Record<string, unknown>;
  /** Variants of one family share a row. */
  family?: string;
  heading?: string;
  /** The mark's name inside a family row or a joined note: X, V, white. */
  name?: string;
  /** Plural noun for the "Show the N …" list. */
  noun?: string;
  one?: string;
  many?: string;
  short?: string;
  /** The sentence without counts or cells, for what is left visible when the clues sit behind fog. */
  rule?: string;
  item?: string | WhenCase[];
  /** Iterate this list parameter instead of the instances when listing. */
  item_over?: string;
  /** `always` lists even one instance. */
  list?: "always" | "never";
  /** The list is a spoiler part; the text says what opening it reveals. */
  spoiler?: string;
  /** Read, but say nothing. */
  silent?: boolean;
  /** The PairRelation this variant stands for, for negatives that join its group. */
  relation?: Record<string, unknown>;
  join?: { kinds: string[]; note: string };
  notes?: WhenCase[];
  /** Notes shown inside a spoiler list, for facts about its lines. */
  spoiler_notes?: WhenCase[];
  terms?: string[];
}

export interface PageReading {
  group_by?: string[];
  terms?: string[];
  parts?: Record<string, WhenCase[]>;
  variants?: Variant[];
  header?: Record<string, PageReading>;
}

export interface KindEntry {
  /** The kind as the page declares it. */
  kind: string;
  /** The definition this page reads as: the target of an alias, else itself. */
  canonical: string;
  name: string;
  url: string;
  /** Declared parameter types, as written, in declaration order. */
  types: Record<string, string>;
  order: string[];
  /** Parameters holding the rule's cells. */
  cellParams: string[];
  line?: LineDeclaration;
  reading?: PageReading;
}

export interface FeaturePage { slug: string; name: string; url: string; reading?: PageReading }

export interface ReadingLibrary {
  kinds: Map<string, KindEntry>;
  features: Map<string, FeaturePage>;
  typeReadings: TypeReadings;
  predicateReadings: Record<string, string>;
  /** The entry for a kind name or a full Markdown URL, resolving aliases. */
  entry(kind: string): KindEntry | undefined;
  declarationOf(kind: string): LineDeclaration | undefined;
}

const object = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v);

/** Compiles the library pages, then collects the reading blocks. Returns the compile diagnostics when a page is invalid. */
export function readingLibrary(pages: PageSource[]): Result<ReadingLibrary> {
  const compiled = compilePublicLibrary(pages);
  if (!compiled.value) return { diagnostics: compiled.diagnostics };
  const kinds = new Map<string, KindEntry>();
  const features = new Map<string, FeaturePage>();
  const byUrl = new Map<string, string>();
  let typeReadings: TypeReadings = {};
  let predicateReadings: Record<string, string> = {};
  const raw = new Map<string, Record<string, unknown>>();
  for (const page of pages) {
    const header = readHeader(page).value;
    if (!header) continue;
    const m = header.metadata;
    if (m.document === "prelude") {
      if (object(m.type_readings)) typeReadings = m.type_readings as TypeReadings;
      if (object(m.predicate_readings)) predicateReadings = m.predicate_readings as Record<string, string>;
    } else if (m.document === "feature") {
      const slug = String(m.url).replace(/^.*\//, "").replace(/\.md$/, "");
      features.set(slug, { slug, name: String(m.name), url: String(m.url), ...(object(m.reading) ? { reading: m.reading as PageReading } : {}) });
    } else if (typeof m.kind === "string") raw.set(m.kind, m);
  }
  const declarations = compiled.value.registry.lines ?? new Map<string, LineDeclaration>();
  for (const [kind, m] of raw) {
    const alias = (m.alias_of ?? m.aliasOf) as string | undefined;
    const target = alias ? raw.get(alias) : m;
    if (!target) continue;
    const parameters = object(target.parameters) ? target.parameters : {};
    const types: Record<string, string> = {};
    for (const [name, p] of Object.entries(parameters)) types[name] = object(p) && typeof p.type === "string" ? p.type : "";
    const order = Object.keys(types);
    const entry: KindEntry = {
      kind, canonical: alias ?? kind, name: String(target.name), url: String(m.url), types, order,
      cellParams: order.filter(name => isCellList(types[name])),
      ...(declarations.get(String(target.url)) ? { line: declarations.get(String(target.url))! } : {}),
      ...(object(target.reading) ? { reading: target.reading as PageReading } : {}),
    };
    kinds.set(kind, entry);
    byUrl.set(String(m.url), kind);
  }
  const library: ReadingLibrary = {
    kinds, features, typeReadings, predicateReadings,
    entry(kind) {
      const key = byUrl.get(kind) ?? kind;
      const found = kinds.get(key);
      return found ? kinds.get(found.canonical) ?? found : undefined;
    },
    declarationOf(kind) { return library.entry(kind)?.line; },
  };
  return { value: library, diagnostics: [] };
}

import type { PageReading, ReadingLibrary } from "./library.js";
import type { Alignment, CaseReading } from "./types.js";

/**
 * Pairing setter sentences with readings. Deterministic: a sentence names a rule through
 * the `terms` of a page or variant, matched as whole words. No network, no model.
 *
 * A term is words separated by spaces. `*` stands for any one word. A leading `=` makes the
 * match case-sensitive. A term that is a single word of one or two letters, or begins
 * with `~`, is weak: it pairs a sentence with rows but never shows a sentence as naming a rule the file lacks.
 */
const split = (text: string): string[] => text.split(/[^\p{L}\p{N}'’]+/u).filter(Boolean);

interface Term { words: string[]; exact: boolean; weak: boolean }

function parseTerm(term: string): Term {
  const exact = term.startsWith("=");
  const tilde = term.startsWith("~");
  const words = (exact || tilde ? term.slice(1) : term).trim().split(/\s+/).filter(Boolean).map(w => (exact ? w : w.toLowerCase()));
  return { words, exact, weak: tilde || (words.length === 1 && words[0].length <= 2) };
}

export function termMatches(sentence: string, term: string): boolean {
  const t = parseTerm(term);
  if (!t.words.length) return false;
  const original = split(sentence);
  const hay = t.exact ? original : original.map(w => w.toLowerCase());
  for (let i = 0; i + t.words.length <= hay.length; i++) {
    if (t.words.every((w, j) => w === "*" || hay[i + j] === w)) return true;
  }
  return false;
}

const pageTerms = (page: PageReading | undefined): string[] => page?.terms ?? [];
const variantTerms = (page: PageReading | undefined, vi: number): string[] => page?.variants?.[vi]?.terms ?? [];

/** Pairs the sentences of the setter's rules with the rows of a reading, and finds sentences naming a rule the file does not have. */
export function align(sentences: readonly string[], reading: CaseReading, library: ReadingLibrary): Alignment {
  const rowTerms = reading.rows.map(row => {
    const page = row.header ? library.features.get(row.kind)?.reading : library.entry(row.kind)?.reading;
    return [...new Set([...row.kinds.flatMap(k => pageTerms(library.entry(k)?.reading)), ...pageTerms(page), ...(row.variants ?? []).flatMap(vi => variantTerms(page, vi))])];
  });
  const named: { kind: string; terms: string[] }[] = [];
  for (const entry of library.kinds.values()) {
    if (entry.canonical !== entry.kind || !entry.reading) continue;
    named.push({ kind: entry.kind, terms: [...pageTerms(entry.reading), ...(entry.reading.variants ?? []).flatMap(v => v.terms ?? [])] });
  }
  for (const feature of library.features.values()) if (feature.reading) named.push({ kind: feature.slug, terms: [...pageTerms(feature.reading), ...(feature.reading.variants ?? []).flatMap(v => v.terms ?? [])] });

  const have = new Set(reading.kinds);
  const pairs: Alignment["pairs"] = [];
  const missing: Alignment["missing"] = [];
  const paired = new Set<number>();
  sentences.forEach((sentence, i) => {
    const rows = rowTerms.flatMap((terms, r) => (terms.some(t => termMatches(sentence, t)) ? [r] : []));
    if (rows.length) { pairs.push({ sentence: i, rows }); rows.forEach(r => paired.add(r)); }
    const strong = named.filter(n => n.terms.some(t => !parseTerm(t).weak && termMatches(sentence, t))).map(n => n.kind);
    const any = named.filter(n => n.terms.some(t => termMatches(sentence, t))).map(n => n.kind);
    if (strong.length && !any.some(k => have.has(k))) missing.push({ sentence: i, kinds: strong });
  });
  return { pairs, unpaired: reading.rows.map((_, r) => r).filter(r => !paired.has(r)), missing };
}

import { partText } from "./template.js";
import type { CaseReading, ItemList, ReadingRow } from "./types.js";

/** The sentence of a row as plain text. Cells are written as `r2c3`. */
export function rowText(row: ReadingRow): string {
  const body = [partText(row.sentence), ...(row.notes ?? []).map(partText)].filter(Boolean).join(" ");
  return row.asWritten ? row.heading : body ? `${row.heading}. ${body}` : row.heading;
}

/** The lines of a list as text. A spoiler list gives none unless asked, so no caller shows them by accident. */
export function itemLines(items: ItemList, withSpoilers = false): string[] {
  return items.spoiler && !withSpoilers ? [] : items.lines.map(partText);
}

/** The reading without its spoiler parts: what may appear in metadata, structured data or a social card. */
export function publicReading(reading: CaseReading): CaseReading {
  return { ...reading, rows: reading.rows.map(({ items, ...row }) => (items && !items.spoiler ? { ...row, items } : row)) };
}

/** The button text for a list: "Show the 6 thermometers", "Show the pair", "Show the 13 fog links: reveals part of the puzzle". */
export function itemsLabel(items: ItemList): string {
  // One item: the plural word loses its s ("pairs" to "pair", "clues under fog" to "clue under fog").
  const what = items.count === 1 ? items.noun.replace(/s( under fog)?$/, "$1") : `${items.count} ${items.noun}`;
  return `Show the ${what}${items.spoiler ? `: ${items.spoiler}` : ""}`;
}

/**
 * A plain-text copy of a reading, for the copy button, reports and golden tests.
 * `ruleLines` are the case's exact lines; a spoiler list is marked, never inlined.
 */
export function readingText(reading: CaseReading, ruleLines: readonly string[] = []): string {
  const out: string[] = [];
  for (const row of reading.rows) {
    out.push(row.asWritten ? `Shown as written: ${row.heading}` : rowText(row));
    if (row.items) {
      out.push(`  ${itemsLabel(row.items)}`, ...(row.items.spoiler ? [] : [`    ${itemLines(row.items).join(" · ")}`]));
    }
    if (ruleLines.length && row.lines.length) {
      const nonBlank = ruleLines.filter(l => l.trim());
      const exact = row.lines.map(i => nonBlank[i]).filter(Boolean);
      out.push(`  Lines: ${exact.length > 2 ? `${exact[0]} … (${exact.length} lines)` : exact.join(" | ")}`);
    }
  }
  return out.join("\n");
}

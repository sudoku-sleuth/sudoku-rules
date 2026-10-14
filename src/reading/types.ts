/** Bump when the stored shape of a reading changes. Hosts compare it to rebuild stale readings. */
export const READING_FORMAT = 1;

/**
 * A piece of a reading sentence: text, or cells shown as chips. `cells` holds the cells joined by commas
 * (`r1c2,r1c3`); `join` is how the page writes them: a path (`r1c2-r1c3`) by default, a comma list, or "a, b and c".
 */
export type Part = string | { cells: string; join?: "list" | "and" };

export interface ItemList {
  /** Plural noun for "Show the N …" (pairs, thermometers). */
  noun: string;
  count: number;
  /** One entry per instance, in file order. */
  lines: Part[][];
  /** What opening the list reveals; when set the list is a spoiler part. */
  spoiler?: string;
  /** Sentences that belong inside a spoiler part because they describe its lines. */
  notes?: Part[][];
}

/** One group of rule lines, read as one sentence. */
export interface ReadingRow {
  /** Rule kind, or `fog`, `givens`, `board` for header rows. */
  kind: string;
  /** Every kind read in this row (family merges and joined negatives). */
  kinds: string[];
  heading: string;
  /** Kind of the rule page the heading links to. */
  link?: string;
  sentence: Part[];
  /** Further sentences that belong under the first (closing notes). */
  notes?: Part[][];
  items?: ItemList;
  /** Indices of the covered rule lines, 0-based, in the order of the case file's rule lines. */
  lines: number[];
  /** True for rows built from header data (givens, board, fog). */
  header?: boolean;
  /** True when the group could not be read and shows as written. */
  asWritten?: boolean;
  /** Fog files: the line is stated in the rules, not drawn on the board. */
  stated?: boolean;
  /** Indices of the page variants read in this row, so pairing can use their `terms`. */
  variants?: number[];
}

export interface CaseReading {
  format: number;
  rows: ReadingRow[];
  /** Distinct canonical kinds in the file (and `fog` when declared), for pairing. */
  kinds: string[];
  /** Number of rule lines in the file. */
  lineCount: number;
  /** True when every rule line and header item has a reading. */
  complete: boolean;
  /** Why something shows as written, for reports; never shown on the page. */
  problems?: string[];
}

export interface Alignment {
  /** Sentences with the rows they pair with, in sentence order. Unmatched sentences are omitted. */
  pairs: { sentence: number; rows: number[] }[];
  /** Rows no sentence paired with. */
  unpaired: number[];
  /** Sentences that name a library kind the file lacks (and no kind the file has). */
  missing: { sentence: number; kinds: string[] }[];
}

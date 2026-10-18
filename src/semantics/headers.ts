import { groups, key } from "./board.js";
import type { ReadFile } from "./reader.js";
import type { CanonicalBoard, Cell } from "./types.js";

/** Header board fields must agree with the caller's resolved context. */
export function checkBoardHeaders(read: ReadFile, board: CanonicalBoard): void {
  const decodeGivens = (raw: unknown): CanonicalBoard["givens"] => {
    let values: { cell: Cell; digit: number }[];
    if (Array.isArray(raw)) values = raw as typeof values;
    else if (typeof raw === "string" && raw.length === board.rows * board.cols && /^[.0-9]+$/.test(raw)) values = [...raw].flatMap((d, i) => d === "." ? [] : [{ cell: `r${Math.floor(i / board.cols) + 1}c${i % board.cols + 1}` as Cell, digit: Number(d) }]);
    else if (typeof raw === "string" && /^(?:r[1-9]\d*c[1-9]\d*=-?\d+\s*)+$/.test(raw)) values = [...raw.matchAll(/(r[1-9]\d*c[1-9]\d*)=(-?\d+)/g)].map(m => ({ cell: m[1] as Cell, digit: Number(m[2]) }));
    else throw Error("Write givens as cell/digit records, a digit grid with dots, or r1c1=1 entries.");
    if (values.some(v => !v || !board.activeCells.includes(v.cell) || !Number.isSafeInteger(v.digit) || !board.alphabet.includes(v.digit)) || new Set(values.map(v => v.cell)).size !== values.length) throw Error("Header givens must assign one alphabet digit to each stated active cell.");
    return values.map(({ cell, digit }) => ({ cell, digit })).sort((a,b) => a.cell < b.cell ? -1 : a.cell > b.cell ? 1 : 0);
  };
  const decodeGroups = (raw: unknown): Cell[][] => {
    if (!Array.isArray(raw) || raw.some(g => !Array.isArray(g) || g.some(c => !board.activeCells.includes(c)))) throw Error("Write regions and houses as lists of active-cell lists.");
    return groups(raw);
  };
  const retained: ReadFile["extras"] = [];
  for (const extra of read.extras) {
    const raw = read.metadata[extra.kind.slice(7)];
    try {
      if (extra.kind === "header:board") {
        if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw Error("Write board as named fields.");
        const fields = raw as Record<string, unknown>;
        if (Object.keys(fields).some(k => !["rows", "cols", "symbols", "activeCells", "regions", "givens", "houses"].includes(k))) {
          retained.push({ ...extra, reason: "Board header contains unknown fields or multiple-board data." }); continue;
        }
        for (const [name, value] of Object.entries(fields)) {
          const resolved = name === "symbols" ? board.alphabet : name === "regions" ? board.regions : name === "houses" ? board.houses : name === "givens" ? board.givens : name === "activeCells" ? board.activeCells : board[name as "rows" | "cols"];
          const decoded = ["regions", "houses"].includes(name) ? decodeGroups(value) : name === "givens" ? decodeGivens(value) : name === "activeCells" && Array.isArray(value) ? [...value].sort() : value;
          if (key(decoded) !== key(resolved)) throw Error(`Header board ${name} disagrees with BoardContext.`);
        }
      } else if (extra.kind === "header:givens") {
        if (key(decodeGivens(raw)) !== key(board.givens)) throw Error("Header givens disagree with BoardContext.");
      } else if (extra.kind === "header:regions") {
        // Top-level extra regions assert houses, unlike board.regions geometry.
        const houses = decodeGroups(raw);
        if (houses.some(h => !board.houses.some(b => key(h) === key(b)))) throw Error("Supply each top-level extra region as an explicit BoardContext house.");
      } else { retained.push(extra); continue; }
    } catch (error) { read.issues.push({ code: "E_SEMANTIC_BOARD", span: extra.source.span, message: (error as Error).message }); }
  }
  read.extras = retained;
}

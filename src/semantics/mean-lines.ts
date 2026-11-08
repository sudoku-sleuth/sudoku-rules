import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { cellListOrder, cellOrder, key } from "./board.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most cell occurrences a mean-lines expansion may write into its sum equations. */
const maxWork = 1_000_000;

/**
 * Mean lines: every listed line has the same average printed digit. Lines are ordered lists, so a cell listed twice in a line counts at
 * each occurrence. Two lines A and B have the same average exactly when |B| times the total of A equals |A| times the total of B, which
 * is one sum equation in which each cell of A is written |B| times and each cell of B is written |A| times. An empty line is
 * compared with nothing (both sides are zero), so empty lines are left out. The remaining lines are sorted, repeats are dropped, and
 * every one is compared with the first, so the order the lines and their cells are listed in does not matter. No
 * lines, or only one nonempty line, hold. Equal sums with the same groups compare equal when every line has the same length.
 */
export function lowerMeanLines(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const raw = semanticDeclaration(ast).parameters.lines;
  if (!Array.isArray(raw) || raw.some(l => !Array.isArray(l) || l.some(c => !board.activeCells.includes(c)))) throw Error("Supply lines as lists of active board cells.");
  // Which line the others are compared with must not depend on how they are listed: sort each line, then the lines, and drop repeats.
  const lines = [...new Map((raw as Cell[][]).filter(l => l.length).map(l => [key([...l].sort(cellOrder)), [...l].sort(cellOrder) as Cell[]])).entries()]
    .map(([, l]) => l).sort(cellListOrder);
  const work = lines.slice(1).reduce((sum, l) => sum + 2 * lines[0].length * l.length, 0);
  if (work > maxWork) throw new UnsupportedSemantics("Finite mean-lines expansion exceeds 1,000,000 cell occurrences for this declaration.");
  const times = (cells: Cell[], n: number): Cell[] => cells.flatMap(c => Array<Cell>(n).fill(c));
  const first = lines[0];
  return all(lines.slice(1).map((line): Formula => ({ op: "SumEqual", channel: "D", left: times(first, line.length), right: times(line, first.length) })));
}

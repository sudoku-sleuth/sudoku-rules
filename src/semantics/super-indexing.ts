import { cellAt, cellOrder, coordinates } from "./board.js";
import { all } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/**
 * Super indexing: a digit d in row r and column c needs the digit r in row c and column d, and the digit c in row d and column r,
 * with rows, columns and digits all counted from one. Every active cell is held to this, so the result is a conjunction over the
 * active cells of an exact disjunction over the digits d: the cell holds d, the cell (c, d) holds r and the cell (d, r) holds c. A
 * digit that is not a whole number from 1 to the board size, a partner cell that is not active, or a row or column number outside
 * the alphabet gives no disjunct; a partner that is the cell itself must agree with it. A board with unequal rows and columns can
 * never meet the clue. Printed digits only.
 */
export function lowerSuperIndexing(board: CanonicalBoard): Formula {
  if (board.rows !== board.cols) return { op: "Any", children: [] };
  const active = new Set<Cell>(board.activeCells);
  const digits = board.alphabet.filter(d => Number.isSafeInteger(d) && d >= 1 && d <= board.rows);
  return all(board.activeCells.map((cell): Formula => {
    const [r, c] = coordinates(cell);
    const cases: Formula[] = [];
    for (const d of digits) {
      const partners: [Cell, number][] = [[cell, d], [cellAt(c, d), r], [cellAt(d, r), c]];
      if (partners.some(([partner, held]) => !active.has(partner) || !board.alphabet.includes(held))) continue;
      const needs = new Map<Cell, number>();
      for (const [partner, held] of partners) needs.set(partner, needs.get(partner) ?? held);
      if (partners.some(([partner, held]) => needs.get(partner) !== held)) continue;
      cases.push(all([...needs].sort(([x], [y]) => cellOrder(x, y)).map(([partner, held]): Formula => ({ op: "Allowed", channel: "D", cell: partner, values: [held] }))));
    }
    return { op: "Any", children: cases };
  }));
}

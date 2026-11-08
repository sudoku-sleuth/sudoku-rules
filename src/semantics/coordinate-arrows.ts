import type { DeclarationAST } from "../declarations.js";
import { cellAt } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

const never: Formula = { op: "Any", children: [] };

/**
 * Coordinate arrows: each arrow's base digit a is a row and its tip digit b a column, counted from one, and the cell at row a and
 * column b holds a + b. Every arrow must also name a different coordinate pair than every other arrow, so no two arrows share both
 * their base digit and their tip digit. An arrow is an exact disjunction over the base and tip digits (a, b) that name an active
 * cell and whose sum is in the alphabet: the base holds a, the tip holds b and the named cell holds a + b. Where two of those
 * cells are the same cell they must agree. Two arrows with the same base cell and the same tip cell can never differ, and an
 * arrow that does not list exactly two cells can never be met. Distinctness is a disjunction of two pair tables. Printed digits only.
 */
export function lowerCoordinateArrows(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const raw = semanticDeclaration(ast).parameters.arrows;
  if (!Array.isArray(raw) || raw.some(a => !Array.isArray(a))) throw Error("Supply the arrows as lists of cells.");
  const arrows = raw as Cell[][];
  if (arrows.some(a => a.length !== 2)) return never;
  const active = new Set<Cell>(board.activeCells);
  const digits = board.alphabet.filter(d => Number.isSafeInteger(d) && d >= 1);
  const only = (cell: Cell, value: number): Formula => ({ op: "Allowed", channel: "D", cell, values: [value] });
  const names = ([base, tip]: Cell[]): Formula => {
    const cases: Formula[] = [];
    for (const a of digits.filter(d => d <= board.rows)) for (const b of digits.filter(d => d <= board.cols)) {
      const target = cellAt(a, b);
      if (!active.has(target) || !board.alphabet.includes(a + b)) continue;
      const needs = new Map<Cell, number>();
      let agree = true;
      for (const [cell, held] of [[base, a], [tip, b], [target, a + b]] as [Cell, number][]) {
        if (needs.has(cell) && needs.get(cell) !== held) agree = false;
        needs.set(cell, held);
      }
      if (agree) cases.push(all([...needs].sort(([x], [y]) => x < y ? -1 : 1).map(([cell, held]) => only(cell, held))));
    }
    return { op: "Any", children: cases };
  };
  const differ = (x: Cell, y: Cell): Formula[] => x === y ? [] : [pair(board, x, y, (p, q) => p !== q)];
  const distinctPairs: Formula[] = [];
  for (let i = 0; i < arrows.length; i++) for (let j = i + 1; j < arrows.length; j++) {
    distinctPairs.push({ op: "Any", children: [...differ(arrows[i][0], arrows[j][0]), ...differ(arrows[i][1], arrows[j][1])] });
  }
  return all([...arrows.map(names), ...distinctPairs]);
}

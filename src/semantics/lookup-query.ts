import { all, pair } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** A cell, or a number known to be the cell's printed digit. */
export type Operand = Cell | number;
/** The relation from the looked-up number to the target number. */
export type Test = (looked: number, target: number) => boolean;

/**
 * One bounded lookup: the printed digit v of the index cell, plus `offset`, is a one-based position along `cells`, and the cell at
 * that position stands in `test` to the target. A position that is not a whole number from 1 to the length of the list names no
 * cell, so the lookup misses. `firstMatch` also requires every earlier cell of the list not to stand in `test` to the target.
 */
export interface Lookup {
  cells: Cell[]; index: Cell; target: Operand; test: Test;
  offset?: number; firstMatch?: boolean;
}

const never: Formula = { op: "Any", children: [] };
const allowed = (cell: Cell, values: number[], board: CanonicalBoard): Formula =>
  values.length === board.alphabet.length ? all([]) : values.length ? { op: "Allowed", channel: "D", cell, values } : never;

/** `test(a, b)` for two operands, each a cell or a known number: a constant, one Allowed, or one Pair table. */
export function related(a: Operand, b: Operand, board: CanonicalBoard, test: Test): Formula {
  if (typeof a === "number" && typeof b === "number") return test(a, b) ? all([]) : never;
  if (typeof a === "number") return allowed(b as Cell, board.alphabet.filter(v => test(a, v)), board);
  if (typeof b === "number") return allowed(a, board.alphabet.filter(v => test(v, b)), board);
  if (a === b) return allowed(a, board.alphabet.filter(v => test(v, v)), board);
  return pair(board, a, b, test);
}

/**
 * The lookup holds: an exact disjunction over the alphabet digits v of the index cell that name a position. Inside a branch the
 * index cell is known to hold v, so it is read as that number wherever it also appears as the looked-up or target cell.
 */
export function lookupHit(q: Lookup, board: CanonicalBoard): Formula {
  const offset = q.offset ?? 0;
  const known = (operand: Operand, v: number): Operand => operand === q.index ? v : operand;
  const branches: Formula[] = [];
  for (const v of board.alphabet) {
    const position = v + offset;
    if (!Number.isSafeInteger(position) || position < 1 || position > q.cells.length) continue;
    const target = known(q.target, v);
    branches.push(all([
      { op: "Allowed", channel: "D", cell: q.index, values: [v] },
      related(known(q.cells[position - 1], v), target, board, q.test),
      ...(q.firstMatch ? q.cells.slice(0, position - 1).map(c => related(known(c, v), target, board, (x, y) => !q.test(x, y))) : []),
    ]));
  }
  return { op: "Any", children: branches };
}

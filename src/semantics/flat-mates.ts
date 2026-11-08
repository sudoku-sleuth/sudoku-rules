import type { DeclarationAST } from "../declarations.js";
import { cellAt, coordinates } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/**
 * Flat mates: every cell holding the marked digit has the stated above digit in the active cell immediately above it, or the stated
 * below digit in the active cell immediately below it. One conjunct per active cell, each a disjunction: the cell holds some other
 * digit, or the cell above holds `above`, or the cell below holds `below`. A neighbour that is off the board or inactive offers no
 * alternative, and an alternative whose digit is outside the alphabet can never hold, so it is omitted. A cell with no alternative
 * left can never hold the digit. A marked digit outside the alphabet is never held, so every cell passes. Printed digits only.
 */
export function lowerFlatMates(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  for (const name of ["digit", "above", "below"]) if (typeof p[name] !== "number" || !Number.isFinite(p[name])) throw Error(`The ${name} must be a number.`);
  const digit = p.digit as number, above = p.above as number, below = p.below as number;
  if (!board.alphabet.includes(digit)) return all([]);
  const active = new Set<Cell>(board.activeCells);
  const only = (cell: Cell, values: number[]): Formula => ({ op: "Allowed", channel: "D", cell, values });
  const others = board.alphabet.filter(d => d !== digit);
  return all(board.activeCells.map((cell): Formula => {
    const [row, col] = coordinates(cell);
    const up = cellAt(row - 1, col), down = cellAt(row + 1, col);
    const alternatives: Formula[] = [];
    if (others.length) alternatives.push(only(cell, others));
    if (active.has(up) && board.alphabet.includes(above)) alternatives.push(only(up, [above]));
    if (active.has(down) && board.alphabet.includes(below)) alternatives.push(only(down, [below]));
    return { op: "Any", children: alternatives };
  }));
}

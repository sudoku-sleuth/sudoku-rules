import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

const none: Formula = { op: "Any", children: [] };

/**
 * Split pea: the printed digits strictly between the two end cells of the line add up to the two end digits read as a two-digit
 * decimal number, in either order. Each end digit must be a decimal digit from 0 to 9, and a line of fewer than two cells never
 * holds. With ends a and b the sum is 10a+b or a+10b, so the result is the end restrictions with a disjunction of two linear sum
 * equations; the interior counts once per occurrence, the empty interior of a two-cell line totals zero, and the same cell may be
 * both ends. Reversing the line swaps the two equations, so it compares equally.
 */
export function lowerSplitPea(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const cells = semanticDeclaration(ast).cells ?? [];
  if (cells.length < 2) return none;
  const first = cells[0], last = cells[cells.length - 1], interior = cells.slice(1, -1);
  const digits = board.alphabet.filter(d => d >= 0 && d <= 9);
  const ends = [...new Set([first, last])].map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values: digits }));
  const times = (cell: Cell, n: number): Cell[] => Array<Cell>(n).fill(cell);
  const equation = (tens: Cell, units: Cell): Formula => ({ op: "SumEqual", channel: "D", left: interior, right: [...times(tens, 10), units] });
  return all([...ends, { op: "Any", children: [equation(first, last), equation(last, first)] }]);
}

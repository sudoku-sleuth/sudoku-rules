import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/**
 * Numbered room: the first cell's printed digit k is a one-based position along the ordered cells, and the cell at position k holds
 * the stated digit. A first digit that is not a whole number from 1 to the length of the list names no cell, so the clue is not met.
 * The result is an exact disjunction over the alphabet symbols k that can index the list: the first cell holds k and cell k holds the
 * digit. For k = 1 both conditions fall on the first cell. A cell listed twice is read at each position, and a digit outside the
 * alphabet can never be held.
 */
export function lowerNumberedRoom(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = instance.cells ?? [];
  if (typeof p.digit !== "number" || !Number.isFinite(p.digit)) throw Error("The digit must be a number.");
  const digit = p.digit;
  const only = (cell: typeof cells[number], value: number): Formula => ({ op: "Allowed", channel: "D", cell, values: [value] });
  if (!board.alphabet.includes(digit)) return { op: "Any", children: [] };
  const extents = board.alphabet.filter(k => Number.isSafeInteger(k) && k >= 1 && k <= cells.length);
  return { op: "Any", children: extents.map(k => all([only(cells[0], k), only(cells[k - 1], digit)])) };
}

import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/**
 * Counting circles: every digit that appears in the circles appears in exactly that many circles. For a circle cell c and a
 * digit d, c=d implies that exactly d circle cells hold d; so for each alphabet digit d the number of circle cells holding d is
 * 0 or d. With n circles, a digit d that is not a whole number from 1 to n can never be the count of a nonempty set of cells,
 * so it is excluded from every circle exactly. A digit d from 1 to n is absent, or held by exactly d circles: CountAtLeast d
 * and not CountAtLeast d+1 (the second term is omitted when d = n, where it is always false). Printed digits only.
 */
export function lowerCountingCircles(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const cells = semanticDeclaration(ast).cells ?? [];
  const circles = sortedCells(cells);
  if (circles.length !== cells.length) throw new UnsupportedSemantics("Counting circles that list a cell more than once are not lowered; the whole instance remains uncovered.");
  const n = circles.length;
  const holds = (digit: number, count: number): Formula => ({ op: "CountAtLeast", channel: "D", cells: circles, digit, count });
  return all(board.alphabet.map((d): Formula => {
    if (!Number.isInteger(d) || d < 1 || d > n) return { op: "Not", child: holds(d, 1) };
    return { op: "Any", children: [{ op: "Not", child: holds(d, 1) }, all([holds(d, d), ...(d < n ? [{ op: "Not", child: holds(d, d + 1) } as Formula] : [])])] };
  }));
}

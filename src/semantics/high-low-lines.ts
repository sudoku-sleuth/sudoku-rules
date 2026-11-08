import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import type { CanonicalBoard, Formula } from "./types.js";

/**
 * High-low lines: every printed digit of the line lies in 1 to 5, or every printed digit lies in 5 to 9. Five belongs to both ranges,
 * digits may repeat, and the cells are a set, so order and repeated listings do not matter. The result is a disjunction of two ranges,
 * each a restriction of every cell to the alphabet digits in it; the ranges are the fixed numbers 1 to 5 and 5 to 9, whatever the
 * board's alphabet.
 */
export function lowerHighLowLines(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const cells = [...new Set(semanticDeclaration(ast).cells ?? [])].sort();
  const within = (low: number, high: number): Formula => ({
    op: "All",
    children: cells.map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values: board.alphabet.filter(d => d >= low && d <= high) })),
  });
  return { op: "Any", children: [within(1, 5), within(5, 9)] };
}

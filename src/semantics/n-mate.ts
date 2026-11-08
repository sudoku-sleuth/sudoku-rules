import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, distinct, sumTotal } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/**
 * N mate: the clue digit n is a one-based position along the ray, and the clue digit plus the digit at that position equals the
 * total of the cage, whose digits are all different. A clue digit that is not a whole number from 1 to the ray length names no cell,
 * so the clue is not met. The cage is a set, so a cell written twice counts once. The result is Distinct over the cage and an exact
 * disjunction over the clue digit n and the digit v at position n: the clue cell holds n, the ray cell holds v and the cage totals
 * n + v. When the ray cell at position n is the clue cell itself, v must equal n. Printed digits only.
 */
export function lowerNMate(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  if (typeof p.cell !== "string" || !Array.isArray(p.ray) || !Array.isArray(p.cage)) throw Error("Supply the clue cell, the ray and the cage.");
  const clue = p.cell as Cell, ray = p.ray as Cell[], cage = sortedCells(p.cage as Cell[]);
  const only = (cell: Cell, value: number): Formula => ({ op: "Allowed", channel: "D", cell, values: [value] });
  const cases: Formula[] = [];
  for (const n of board.alphabet) {
    if (!Number.isSafeInteger(n) || n < 1 || n > ray.length) continue;
    for (const v of board.alphabet) {
      if (ray[n - 1] === clue && v !== n) continue;
      cases.push(all([only(clue, n), ...(ray[n - 1] === clue ? [] : [only(ray[n - 1], v)]), sumTotal(cage, n + v, "D")]));
    }
  }
  return all([distinct(cage), { op: "Any", children: cases }]);
}

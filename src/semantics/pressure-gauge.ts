import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { classCount } from "./class-count.js";
import { semanticDeclaration } from "./declaration.js";
import { UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most atoms the digit cases of one gauge may write. */
const maxAtoms = 200_000;

/**
 * Pressure gauge, on printed digits. The clue cell holds a digit n, and exactly n of the listed neighbours are larger than n for
 * a low gauge, or smaller than n for a high gauge. The neighbours are a set, and the clue cell itself is never larger or smaller
 * than itself, so it counts for nothing. The result is an exact disjunction over the alphabet digits n: the clue cell holds n and
 * exactly n neighbours hold a digit of the class above (or below) n. A digit that is not a whole number from zero to the number
 * of neighbours has no such count and gives no case.
 */
export function lowerPressureGauge(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  if (p.type !== "low" && p.type !== "high") throw Error('Choose type "low" or "high".');
  if (typeof p.cell !== "string") throw Error("Supply the clue cell.");
  if (!Array.isArray(p.neighbours) || p.neighbours.some(c => typeof c !== "string")) throw Error("Supply the neighbours as a list of cells.");
  const cell = p.cell as Cell, listed = p.neighbours as Cell[];
  for (const c of [cell, ...listed]) if (!board.activeCells.includes(c)) throw Error("A clue or neighbour cell must be an active board cell.");
  const neighbours = sortedCells(listed).filter(c => c !== cell);
  let atoms = 0;
  const spend = (n: number) => { atoms += n; if (atoms > maxAtoms) throw new UnsupportedSemantics("A gauge that needs more than 200,000 count terms is not lowered; the whole instance remains uncovered."); };
  const cases: Formula[] = [];
  for (const n of board.alphabet) {
    if (!Number.isSafeInteger(n) || n < 0 || n > neighbours.length) continue;
    const members = board.alphabet.filter(d => p.type === "low" ? d > n : d < n);
    cases.push({ op: "All", children: [{ op: "Allowed", channel: "D", cell, values: [n] }, classCount(neighbours, members, n, true, board.alphabet, spend)] });
  }
  return { op: "Any", children: cases };
}

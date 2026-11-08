import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most cell constraints the start positions of one declaration may write. */
const maxAtoms = 200_000;

/**
 * Ordered block, on printed digits. The listed digits appear as a run of consecutive listed cells, in exactly that order, from
 * some starting position. The cells are read as listed, so a cell written twice is read at each place. More digits than cells
 * leave no starting position, so nothing holds. The result is an exact disjunction over the starting positions, each case
 * allowing every cell of the run only its digit; a start that asks one cell for two different digits is dropped, and a digit
 * outside the alphabet allows no value.
 */
export function lowerOrderedBlock(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), digits = instance.parameters.digits;
  if (!Array.isArray(digits) || digits.some(d => typeof d !== "number" || !Number.isFinite(d))) throw Error("Supply digits as a list of numbers.");
  const cells = instance.cells ?? [];
  const starts = Math.max(0, cells.length - digits.length + 1);
  if (starts * Math.max(1, digits.length) > maxAtoms) throw new UnsupportedSemantics("A block that needs more than 200,000 cell constraints is not lowered; the whole instance remains uncovered.");
  const branches = new Map<string, Formula>();
  for (let p = 0; p < starts; p++) {
    const wanted = new Map<Cell, number>();
    let clash = false;
    digits.forEach((d: number, i: number) => {
      const cell = cells[p + i];
      if (wanted.has(cell) && wanted.get(cell) !== d) clash = true;
      wanted.set(cell, d);
    });
    if (clash) continue;
    const branch = all([...wanted].map(([cell, d]): Formula => ({ op: "Allowed", channel: "D", cell, values: board.alphabet.filter(v => v === d) })));
    branches.set(JSON.stringify(branch), branch);
  }
  return { op: "Any", children: [...branches.values()] };
}

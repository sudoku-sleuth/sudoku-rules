import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, distinct, sumTotal, UnsupportedSemantics } from "./primitives.js";
import { sortedCells } from "./board.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a vault's cross-pair inequalities may charge. */
const maxWork = 1_000_000;

/**
 * Vault: no printed digit of a cell occurs in any listed neighbour, and when a sum is stated the printed digits of the cells
 * add up to it. Repetition inside the vault is allowed. Cells and neighbours are read as sets, so order and repeated listings do
 * not matter. The result is one inequality for every cell and neighbour pair, with a total over the cells when a sum is stated.
 * Cells and neighbours that overlap, a neighbour that is not an active board cell, a sum that is not a safe integer and a
 * cross-pair expansion past 1,000,000 combinations are not lowered. Only printed digits are read, so no value channel applies.
 */
export function lowerVault(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = sortedCells(instance.cells ?? []);
  if (!Array.isArray(p.neighbours)) throw Error("Supply neighbours as a list of cells.");
  if (p.sum !== undefined && (typeof p.sum !== "number" || !Number.isFinite(p.sum))) throw Error("The vault sum must be a number.");
  if (p.neighbours.some(c => !board.activeCells.includes(c as Cell))) throw new UnsupportedSemantics("A vault with a neighbour that is not an active board cell is not lowered; the whole instance remains uncovered.");
  const neighbours = sortedCells(p.neighbours as Cell[]);
  if (neighbours.some(c => cells.includes(c))) throw new UnsupportedSemantics("A vault whose cells and neighbours overlap is not lowered; the whole instance remains uncovered.");
  if (typeof p.sum === "number" && !Number.isSafeInteger(p.sum)) throw new UnsupportedSemantics("A vault sum that is not a safe integer is not lowered; the whole instance remains uncovered.");
  if (cells.length * neighbours.length * board.alphabet.length ** 2 > maxWork) throw new UnsupportedSemantics("Finite vault expansion exceeds 1,000,000 value combinations for this declaration.");
  return all([
    ...cells.flatMap(a => neighbours.map(b => distinct([a, b]))),
    ...(typeof p.sum === "number" ? [sumTotal(cells, p.sum, "D")] : []),
  ]);
}

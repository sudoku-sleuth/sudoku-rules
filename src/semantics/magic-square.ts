import type { DeclarationAST } from "../declarations.js";
import { key } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a magic square expansion may charge. */
const maxWork = 1_000_000;
const base = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];
const turn = (m: number[][]) => m[0].map((_, c) => m.map(row => row[c]).reverse());
/**
 * The nine digits 1 to 9, once each, in row order of a square whose three rows, three columns and two diagonals all total 15.
 * There are exactly eight: the one square up to rotation and reflection.
 */
export const magicSquares: number[][] = (() => {
  const found = new Map<string, number[]>();
  let m = base;
  for (let i = 0; i < 4; i++, m = turn(m)) for (const s of [m, m.map(row => [...row].reverse())]) found.set(key(s.flat()), s.flat());
  return [...found.values()];
})();

/**
 * Magic square: at least one listed place holds the digits 1 to 9 once each, in a square whose rows, columns and both
 * diagonals add up to 15. A place is nine cells in row order; a place with another number of cells, or with a cell listed twice,
 * can never hold the digits once each and adds no case. Each place is an exact disjunction over the eight magic squares, each
 * case allowing exactly one digit at every cell, and the declaration is the disjunction over the places. A board alphabet
 * without all of 1 to 9 leaves no case. Printed digits only.
 */
export function lowerMagicSquare(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const raw = semanticDeclaration(ast).parameters.places;
  if (!Array.isArray(raw) || raw.some(p => !Array.isArray(p) || p.some(c => !board.activeCells.includes(c as Cell)))) throw Error("Supply places as lists of active board cells.");
  const places = raw as Cell[][];
  const usable = places.filter(p => p.length === 9 && new Set(p).size === 9);
  if (usable.length * magicSquares.length * 9 > maxWork) throw new UnsupportedSemantics("Finite magic square expansion exceeds 1,000,000 value combinations for this declaration.");
  const possible = [1, 2, 3, 4, 5, 6, 7, 8, 9].every(d => board.alphabet.includes(d));
  const cases = possible ? usable.flatMap(place => magicSquares.map((digits): Formula => ({ op: "All", children: place.map((cell, i): Formula => ({ op: "Allowed", channel: "D", cell, values: [digits[i]] })) }))) : [];
  return { op: "Any", children: cases };
}

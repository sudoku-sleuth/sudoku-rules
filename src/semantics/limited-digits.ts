import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/** Most digit subsets a limited-digits expansion may enumerate. */
const maxSubsets = 10_000;
const none: Formula = { op: "Any", children: [] };

/**
 * Limited digits: the marked cells hold at most `max` different printed digits. Occurrences of a cell add no new digit, so the
 * cells are read as a set, and only the whole part of `max` matters. A limit below one allows no digit at all, so no assignment
 * holds; a limit of at least the number of cells or of alphabet digits asks nothing. A limit of one makes every pair of cells equal.
 * Otherwise the result is an exact disjunction over the subsets of that many alphabet digits, each leaving every cell allowed only
 * the digits of the subset; a smaller support is covered by any larger subset that contains it.
 */
export function lowerLimitedDigits(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), max = instance.parameters.max;
  if (typeof max !== "number" || !Number.isFinite(max)) throw Error("The limit must be a number.");
  const cells = sortedCells(instance.cells ?? []);
  const limit = Math.floor(max);
  if (limit < 1) return none;
  if (limit >= cells.length || limit >= board.alphabet.length) return all([]);
  if (limit === 1) {
    if (cells.length * (cells.length - 1) / 2 * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite pair expansion exceeds 1,000,000 value combinations for this declaration.");
    return all(cells.flatMap((a, i) => cells.slice(i + 1).map(b => pair(board, a, b, (x, y) => x === y))));
  }
  let subsets = 1;
  for (let i = 1; i <= limit; i++) {
    subsets = subsets * (board.alphabet.length - limit + i) / i;
    if (subsets > maxSubsets) throw new UnsupportedSemantics("A limit that needs more than 10,000 digit subsets is not lowered; the whole instance remains uncovered.");
  }
  const chosen: number[][] = [];
  const walk = (from: number, picked: number[]) => {
    if (picked.length === limit) { chosen.push(picked); return; }
    for (let i = from; i < board.alphabet.length; i++) walk(i + 1, [...picked, board.alphabet[i]]);
  };
  walk(0, []);
  return { op: "Any", children: chosen.map(values => all(cells.map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values })))) };
}

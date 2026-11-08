import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, distinct, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/** Most finite value combinations a sum-free cage expansion may charge. */
const maxWork = 1_000_000;

/**
 * Sum free cage: the digits of the cage cells (a set) all differ, and adding any two of them, a digit to itself included, and
 * taking the remainder on division by `modulus` never gives a digit of the cage. Remainders are never negative. A modulus below
 * one or one that is not a whole number makes the declaration false.
 * The condition depends only on which digits the cage holds, and the cells hold n different digits, so those digits are an
 * n-element set of the alphabet that is sum free in this sense. The result is Distinct on the cells and an exact disjunction,
 * over the sum-free n-element sets T of alphabet digits, of Allowed on every cell for the digits of T. A cage with more cells than
 * the alphabet has digits has no such set. Printed digits only.
 */
export function lowerSumFreeCage(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const modulus = instance.parameters.modulus;
  if (typeof modulus !== "number" || !Number.isFinite(modulus)) throw Error("The modulus must be a number.");
  const cells = sortedCells(instance.cells ?? []);
  const none: Formula = { op: "Any", children: [] };
  if (!Number.isInteger(modulus) || modulus < 1) return none;
  if (!Number.isSafeInteger(modulus)) throw new UnsupportedSemantics("A modulus that is not a safe integer is not lowered; the whole instance remains uncovered.");
  const n = cells.length, a = board.alphabet.length;
  if (n > a) return none;
  let combinations = 1;
  for (let i = 1; i <= n; i++) combinations = combinations * (a - n + i) / i;
  if (Math.round(combinations) * n > maxWork) throw new UnsupportedSemantics("Finite sum free expansion exceeds 1,000,000 value combinations for this declaration.");
  const rem = (x: number) => ((x % modulus) + modulus) % modulus;
  const sumFree = (set: number[]) => set.every(x => set.every(y => !set.includes(rem(x + y))));
  const cases: Formula[] = [];
  const pick = (from: number, chosen: number[]) => {
    if (chosen.length === n) { if (sumFree(chosen)) cases.push(all(cells.map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values: chosen })))); return; }
    for (let i = from; i < a; i++) pick(i + 1, [...chosen, board.alphabet[i]]);
  };
  pick(0, []);
  return all([distinct(cells), { op: "Any", children: cases }]);
}

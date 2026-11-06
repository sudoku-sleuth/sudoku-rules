import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, sumTotal, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Largest total weight of repeated bulb occurrences, and largest count of partial-arrow leaves. */
const maxOccurrences = 1_000_000;
const maxLeaves = 100_000;

/**
 * Arrow: the shaft sums to the bulb. A complete one-cell arrow compares effective values (V on both sides,
 * converted to D by the caller once the value domain is resolved). Every other arrow reads printed digits.
 * A bulb of several cells is the decimal number of its digits in the supplied order, written as a sum in which
 * a cell worth 10^k appears 10^k times, with each bulb digit restricted to 0..9.
 */
export function lowerArrow(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const shaft = instance.cells ?? [];
  if (p.partial !== undefined && typeof p.partial !== "boolean") throw Error("partial must be true or false.");
  const bulb = p.bulb;
  if (!Array.isArray(bulb) || bulb.some(c => !board.activeCells.includes(c as Cell))) throw Error("Supply a bulb as a list of active board cells.");
  const cells = bulb as Cell[];
  if (!cells.length) return { op: "Any", children: [] };
  if (cells.length === 1 && p.partial !== true) return { op: "SumEqual", channel: "V", left: [...shaft], right: [cells[0]] };
  // Weight of each distinct bulb cell: 10^(n-1-i) summed over its positions; a single cell reads its digit directly.
  const weights = new Map<Cell, number>();
  cells.forEach((c, i) => weights.set(c, (weights.get(c) ?? 0) + (cells.length === 1 ? 1 : 10 ** (cells.length - 1 - i))));
  const digits = cells.length === 1 ? board.alphabet : board.alphabet.filter(d => d >= 0 && d <= 9);
  const restrict: Formula[] = cells.length === 1 ? [] : [...weights.keys()].map(cell => ({ op: "Allowed", channel: "D", cell, values: digits }));
  if (p.partial !== true) {
    const total = [...weights.values()].reduce((a, b) => a + b, 0);
    if (total > maxOccurrences) throw new UnsupportedSemantics("A bulb whose decimal weights exceed 1,000,000 cell occurrences is not lowered; the whole instance remains uncovered.");
    const right = [...weights].flatMap(([cell, weight]) => Array<Cell>(weight).fill(cell));
    return all([...restrict, { op: "SumEqual", channel: "D", left: [...shaft], right }]);
  }
  // Partial: bulb minus the visible shaft sum is a sum of a nonempty list of alphabet digits. The remainders are
  // enumerated over the finite bulb values; this needs nonnegative integer symbols and a shaft of distinct cells.
  if (board.alphabet.some(d => !Number.isSafeInteger(d) || d < 0)) throw new UnsupportedSemantics("A partial arrow on an alphabet with negative or non-integer symbols is not lowered; the whole instance remains uncovered.");
  if (new Set(shaft).size !== shaft.length) throw new UnsupportedSemantics("A partial arrow whose shaft repeats a cell is not lowered; the whole instance remains uncovered.");
  const owners = [...weights];
  // Refuse before enumerating: the readings are the alphabet choices for each distinct bulb cell.
  if (digits.length ** owners.length > maxLeaves) throw new UnsupportedSemantics("A partial arrow with more than 100,000 bulb readings is not lowered; the whole instance remains uncovered.");
  let bulbValues: { assignment: number[]; value: number }[] = [{ assignment: [], value: 0 }];
  for (const [, weight] of owners) bulbValues = bulbValues.flatMap(x => digits.map(d => ({ assignment: [...x.assignment, d], value: x.value + d * weight })));
  const top = bulbValues.reduce((m, x) => Math.max(m, x.value), 0);
  // Sums of nonempty lists of alphabet digits, up to the largest bulb value.
  const reachable = new Set<number>();
  for (let t = 0; t <= top; t++) if (board.alphabet.some(d => d <= t && (d === t || reachable.has(t - d)))) reachable.add(t);
  const lowest = board.alphabet.reduce((m, x) => Math.min(m, x), Infinity), highest = board.alphabet.reduce((m, x) => Math.max(m, x), -Infinity);
  const least = shaft.length * lowest, most = shaft.length * highest;
  let leaves = 0;
  const branches: Formula[] = [];
  for (const { assignment, value } of bulbValues) {
    const totals = [...reachable].map(r => value - r).filter(s => s >= least && s <= most).sort((a, b) => a - b);
    if (!totals.length) continue;
    leaves += totals.length;
    if (leaves > maxLeaves) throw new UnsupportedSemantics("A partial arrow with more than 100,000 finite value combinations is not lowered; the whole instance remains uncovered.");
    branches.push(all([
      ...owners.map(([cell], i): Formula => ({ op: "Allowed", channel: "D", cell, values: [assignment[i]] })),
      { op: "Any", children: totals.map(s => sumTotal(shaft, s, "D")) },
    ]));
  }
  return { op: "Any", children: branches };
}

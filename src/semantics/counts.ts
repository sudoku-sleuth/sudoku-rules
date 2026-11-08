import { all } from "./primitives.js";
import type { Cell, Formula } from "./types.js";

/**
 * Exactly `count` of the listed cells hold `digit` on printed digits. The cells are read as listed, so a cell listed twice
 * counts twice. A count that is not a whole number from zero up is never met, and a digit outside the alphabet is held by no
 * cell, so only a count of zero is met. Otherwise at least `count` hold it and, below the number of cells, not `count + 1`.
 */
export function exactCount(cells: Cell[], digit: number, count: number, alphabet: readonly number[]): Formula {
  if (!Number.isSafeInteger(count) || count < 0) return { op: "Any", children: [] };
  if (!alphabet.includes(digit)) return { op: count === 0 ? "All" : "Any", children: [] };
  const atLeast = (n: number): Formula => ({ op: "CountAtLeast", channel: "D", cells, digit, count: n });
  if (count === 0) return { op: "Not", child: atLeast(1) };
  return all([atLeast(count), ...(count < cells.length ? [{ op: "Not", child: atLeast(count + 1) } as Formula] : [])]);
}

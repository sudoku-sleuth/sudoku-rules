import { exactCount } from "./counts.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import { sortedCells } from "./board.js";
import type { Cell, Formula } from "./types.js";

/** Most holder sets listed for one class count over one list of cells. */
const maxChoices = 5_000;
const none: Formula = { op: "Any", children: [] };

/** The ways to pick `count` of the positions 0..n-1, in order. */
function choose(n: number, count: number): number[][] {
  const out: number[][] = [];
  const walk = (from: number, picked: number[]) => {
    if (picked.length === count) { out.push(picked); return; }
    for (let i = from; i <= n - (count - picked.length); i++) walk(i + 1, [...picked, i]);
  };
  walk(0, []);
  return out;
}

/**
 * The number of listed cells, counted as listed, whose printed digit is in `members` is `count` (or at least `count`).
 * A class with no alphabet digit holds no cell and one with every alphabet digit holds all of them; a single digit is an exact
 * count. Otherwise the result is a disjunction over which positions are the holders: each holder is Allowed the class and, when
 * the count is exact, every other cell the rest of the alphabet. A cell listed twice is one holder or none.
 */
export function classCount(cells: Cell[], members: number[], count: number, exact: boolean, alphabet: readonly number[], spend: (atoms: number) => void): Formula {
  const inside = alphabet.filter(d => members.includes(d)), outside = alphabet.filter(d => !members.includes(d));
  const n = cells.length;
  if (count > n) return none;
  if (!inside.length) return count === 0 || !exact && count <= 0 ? all([]) : none;
  if (!outside.length) return exact ? (count === n ? all([]) : none) : all([]);
  if (inside.length === 1) return exact ? exactCount(cells, inside[0], count, alphabet) : { op: "CountAtLeast", channel: "D", cells, digit: inside[0], count };
  if (!exact && count === 0) return all([]);
  let size = 1;
  for (let i = 1; i <= Math.min(count, n - count); i++) size = size * (n - Math.min(count, n - count) + i) / i;
  if (size > maxChoices) throw new UnsupportedSemantics("A class count that needs more than 5,000 choices of holders is not lowered; the whole instance remains uncovered.");
  const choices = choose(n, count);
  spend(choices.length * n);
  const branches = new Map<string, Formula>();
  for (const holders of choices) {
    const held = new Set(holders.map(i => cells[i]));
    // A cell listed twice holds the class at both places or neither.
    if (exact && cells.some((c, i) => held.has(c) && !holders.includes(i))) continue;
    const parts = sortedCells(cells).filter(c => exact || held.has(c)).map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values: held.has(cell) ? inside : outside }));
    const branch = all(parts);
    branches.set(JSON.stringify(branch), branch);
  }
  return { op: "Any", children: [...branches.values()] };
}


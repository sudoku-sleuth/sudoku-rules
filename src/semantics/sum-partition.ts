import type { DeclarationAST } from "../declarations.js";
import { cellOrder, key } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a sum partition expansion may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };

/**
 * Sum partition: segments are nonempty consecutive intervals of the ordered line, each adding up to the total on the stated channel
 * (and, with `repeats` false, holding different values). Cover mode needs every position in some such interval, and intervals may
 * overlap. Partition mode needs the whole line cut into adjacent such intervals. With `loop` intervals may cross the last-to-first
 * join; a closed partition is a partition of some rotation of the line, which is a nonempty set of cuts around the cycle.
 *
 * Each interval is an exact total (with Distinct when repeats is false) over its cells, so an interval depends only on its cell set.
 * Cover is a conjunction over positions of a disjunction over the intervals holding that position; a partition is the disjunction
 * over every way of cutting the line into intervals. Intervals whose length cannot reach the total with the board's digits are left
 * out, because their totals are false. A cell listed twice is not lowered, and neither is a total that is not a safe integer. A total
 * that is not a whole number is never met.
 */
export function lowerSumPartition(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = instance.cells ?? [];
  if (typeof p.total !== "number" || !Number.isFinite(p.total)) throw Error("The total must be a number.");
  if (p.mode !== "cover" && p.mode !== "partition") throw Error('Choose mode "cover" or "partition".');
  if (p.repeats !== undefined && typeof p.repeats !== "boolean") throw Error("repeats must be true or false.");
  if (p.loop !== undefined && typeof p.loop !== "boolean") throw Error("loop must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const total = p.total, repeats = p.repeats !== false, closed = p.loop === true, channel = p.channel === "V" ? "V" : "D";
  if (new Set(cells).size !== cells.length) throw new UnsupportedSemantics("A sum partition that lists a cell more than once is not lowered; the whole instance remains uncovered.");
  if (Number.isInteger(total) && !Number.isSafeInteger(total)) throw new UnsupportedSemantics("A sum partition total that is not a safe integer is not lowered; the whole instance remains uncovered.");
  if (!Number.isInteger(total)) return none;
  const n = cells.length, size = board.alphabet.length;
  const ascending = [...board.alphabet].sort((a, b) => a - b);
  /** Whether k cells can reach the total: k distinct values, or any values when repeats is allowed. */
  const reachable = (k: number): boolean => {
    if (!repeats && k > size) return false;
    const low = repeats ? k * ascending[0] : ascending.slice(0, k).reduce((s, d) => s + d, 0);
    const high = repeats ? k * ascending[size - 1] : ascending.slice(size - k).reduce((s, d) => s + d, 0);
    return low <= total && total <= high;
  };
  let work = 0;
  const charge = (amount: number) => { work += amount; if (work > maxWork) throw new UnsupportedSemantics("Finite sum-partition expansion exceeds 1,000,000 value combinations for this declaration."); };
  const atoms = new Map<string, Formula>();
  /** The interval over these cells holds the total, with different values when repeats is false. */
  const interval = (members: Cell[]): Formula => {
    const id = key([...members].sort(cellOrder));
    let atom = atoms.get(id);
    if (!atom) {
      const sorted = [...members].sort(cellOrder) as Cell[];
      atom = all([
        { op: "SumTotal", channel, cells: sorted, total },
        ...(repeats || sorted.length < 2 ? [] : [{ op: "Distinct", channel, collection: "set", cells: sorted } as Formula]),
      ]);
      atoms.set(id, atom);
    }
    return atom;
  };
  const intervalCost = (k: number) => k + (repeats ? 0 : k * (k - 1) / 2 * size ** 2);
  const lengths = Array.from({ length: n }, (_, i) => i + 1).filter(reachable);
  if (p.mode === "cover") {
    // Cover: every position lies in some interval; a closed line also has intervals across the join.
    const windows: { members: Cell[]; positions: number[] }[] = [];
    const seen = new Set<string>();
    for (const k of lengths) for (let s = 0; s < (closed ? n : n - k + 1); s++) {
      // Building a window costs its length, whether or not it repeats an earlier one.
      charge(k + 1);
      const positions = Array.from({ length: k }, (_, j) => (s + j) % n);
      const id = key([...positions].sort((a, b) => a - b));
      if (seen.has(id)) continue;
      seen.add(id);
      windows.push({ members: positions.map(i => cells[i]), positions });
    }
    return all(cells.map((_, i): Formula => {
      const holders = windows.filter(w => w.positions.includes(i));
      charge(1 + holders.reduce((sum, w) => sum + intervalCost(w.positions.length), 0));
      return { op: "Any", children: holders.map(w => interval(w.members)) };
    }));
  }
  // Partition: cut the line into adjacent intervals, trying only intervals that can reach the total.
  const options: Formula[] = [];
  const range = (from: number, to: number) => Array.from({ length: to - from }, (_, i) => from + i);
  const cuts = (start: number, from: number, chosen: number[][]): void => {
    charge(1);
    // The last interval of a closed partition also takes the cells before the first cut.
    const last = [...range(from, n), ...(closed ? range(0, start) : [])];
    if (reachable(last.length)) {
      const parts = [...chosen, last];
      charge(parts.reduce((sum, part) => sum + intervalCost(part.length), 0));
      options.push(all(parts.map(part => interval(part.map(i => cells[i])))));
    }
    for (const k of lengths) {
      if (from + k >= n) break;
      cuts(start, from + k, [...chosen, range(from, from + k)]);
    }
  };
  // A closed partition starts at its first cut; the open partition is the case where that cut is the start of the line.
  for (let start = 0; start < (closed ? n : 1); start++) cuts(start, start, []);
  return { op: "Any", children: options };
}

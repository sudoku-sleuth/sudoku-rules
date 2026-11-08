import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, distinct, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most search nodes a modifier choice may visit. */
const maxNodes = 500_000;
/** Most feasible modified sets listed when their digits must differ. */
const maxSets = 2_000;

/**
 * Value modifier, on printed digits. Some set M of board cells is modified: each `exactly` group holds `count` cells of M, each
 * `atMostOne` group at most one, and with `distinct` the digits on M differ. The factor and offset only change the values that
 * other declarations read, so this lowers the choice of M alone and the caller admits it only when no other declaration reads
 * values. Cells outside the group lists never need modifying, so M is a feasible choice inside the cells of the `exactly` groups.
 * Without `distinct` the declaration asks nothing when some choice is feasible and cannot hold otherwise. With `distinct` it is
 * a disjunction, over the feasible choices, of Distinct on the chosen cells.
 */
export function lowerValueModifier(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  for (const name of ["factor", "offset"]) if (typeof p[name] !== "number" || !Number.isFinite(p[name])) throw Error(`The ${name} must be a number.`);
  if (typeof p.distinct !== "boolean") throw Error("distinct must be true or false.");
  const groupsOf = (raw: unknown, what: string): Cell[][] => {
    if (!Array.isArray(raw) || raw.some(g => !Array.isArray(g) || g.some(c => typeof c !== "string"))) throw Error(`Supply ${what} as lists of cells.`);
    // Only board cells can be modified, so a group counts the board cells it holds.
    return (raw as Cell[][]).map(g => sortedCells(g.filter(c => board.activeCells.includes(c))));
  };
  const exactly = groupsOf(p.exactly, "exactly"), most = groupsOf(p.atMostOne, "atMostOne");
  const none: Formula = { op: "Any", children: [] };
  const count = p.count;
  if (typeof count !== "number" || !Number.isFinite(count)) throw Error("The count must be a number.");
  if (exactly.length && (!Number.isSafeInteger(count) || count < 0)) return none;
  const universe = sortedCells(exactly.flat());
  const chosen = new Array<number>(exactly.length).fill(0), left = exactly.map(g => g.length), taken = new Array<number>(most.length).fill(0);
  const inExactly = universe.map(c => exactly.flatMap((g, i) => g.includes(c) ? [i] : []));
  const inMost = universe.map(c => most.flatMap((g, i) => g.includes(c) ? [i] : []));
  const found: Cell[][] = [];
  const picked: Cell[] = [];
  let nodes = 0, overflow = false;
  /** True once the search can stop: a first set is enough without `distinct`, and too many sets are given up on. */
  const walk = (at: number): boolean => {
    if (++nodes > maxNodes) throw new UnsupportedSemantics("A modifier choice that needs a search of more than 500,000 steps is not lowered; the whole instance remains uncovered.");
    if (at === universe.length) {
      if (chosen.some(n => n !== count)) return false;
      found.push([...picked]);
      if (!p.distinct) return true;
      if (found.length > maxSets) { overflow = true; return true; }
      return false;
    }
    for (const i of inExactly[at]) left[i]--;
    // Leave the cell unmodified when every group it belongs to can still reach the count.
    if (inExactly[at].every(i => chosen[i] + left[i] >= count) && walk(at + 1)) { for (const i of inExactly[at]) left[i]++; return true; }
    // Modify the cell when no group is full and no at-most-one group has its cell.
    let stop = false;
    if (inExactly[at].every(i => chosen[i] < count) && inMost[at].every(i => taken[i] < 1)) {
      for (const i of inExactly[at]) chosen[i]++;
      for (const i of inMost[at]) taken[i]++;
      picked.push(universe[at]);
      stop = walk(at + 1);
      picked.pop();
      for (const i of inMost[at]) taken[i]--;
      for (const i of inExactly[at]) chosen[i]--;
    }
    for (const i of inExactly[at]) left[i]++;
    return stop;
  };
  walk(0);
  if (overflow) throw new UnsupportedSemantics("A modifier with more than 2,000 feasible choices of modified cells is not lowered when digits must differ; the whole instance remains uncovered.");
  if (!found.length) return none;
  if (!p.distinct) return all([]);
  return { op: "Any", children: found.map(cells => distinct(cells)) };
}

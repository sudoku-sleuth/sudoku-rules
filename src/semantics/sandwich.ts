import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, sumTotal, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a sandwich expansion may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };

/** The cell list and numeric sum shared by the selected-stretch lowerings; a repeated cell or an unsafe integer sum is not lowered. */
function stretchInput(ast: DeclarationAST, kind: string): { cells: Cell[]; sum: number; parameters: Record<string, unknown> } {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = instance.cells ?? [];
  const sum = p.sum;
  if (typeof sum !== "number" || !Number.isFinite(sum)) throw Error("The sum must be a number.");
  if (new Set(cells).size !== cells.length) throw new UnsupportedSemantics(`A ${kind} that lists a cell more than once is not lowered; the whole instance remains uncovered.`);
  if (Number.isInteger(sum) && !Number.isSafeInteger(sum)) throw new UnsupportedSemantics(`A ${kind} sum that is not a safe integer is not lowered; the whole instance remains uncovered.`);
  return { cells, sum, parameters: p };
}

/**
 * X-sum: a counted prefix of the cell list, read from the clue end, adds up to the sum on printed digits. A stated count fixes the prefix
 * length; otherwise the first cell's digit gives it. The count must name a nonempty prefix within the list, so a count outside it, or a
 * first digit outside 1 to the list length, can never be met. The digit-indexed form is an exact disjunction over the extents k the
 * alphabet allows: the first cell holds k and the first k cells total the sum. A non-integer sum is never met.
 */
export function lowerXSum(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const { cells, sum, parameters: p } = stretchInput(ast, "x-sum");
  const n = cells.length;
  let count: number | undefined;
  if (p.count !== undefined) {
    if (typeof p.count !== "number" || !Number.isFinite(p.count)) throw Error("count must be a number.");
    if (!Number.isSafeInteger(p.count)) throw new UnsupportedSemantics("An x-sum count that is not a whole number is not lowered; the whole instance remains uncovered.");
    count = p.count;
  }
  const prefix = (k: number): Formula => sumTotal(cells.slice(0, k), sum, "D");
  if (!Number.isInteger(sum)) return none;
  if (count !== undefined) return count >= 1 && count <= n ? prefix(count) : none;
  const extents = board.alphabet.filter(k => Number.isSafeInteger(k) && k >= 1 && k <= n);
  return { op: "Any", children: extents.map(k => all([{ op: "Allowed", channel: "D", cell: cells[0], values: [k] }, prefix(k)])) };
}

/**
 * Sandwich: the cells strictly between the first two crust occurrences, counted from the clue, add up to the sum, on printed digits.
 * With the default crusts (the lowest and highest board symbols) the first occurrence of each is found; when both occur the digits
 * strictly between them sum to the clue, and when either is missing no sum is required. With custom crusts the sum is taken between
 * the first two occurrences of any crust digit, and a clue with fewer than two such occurrences requires nothing. `endpointOccurrences`
 * applies to the default crusts only: "exactly-one" needs each to occur exactly once and "at-most-one" at most once.
 * The result is an exact disjunction over the positions of those first occurrences; a cell list that visits a cell twice is not lowered.
 */
export function lowerSandwich(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const { cells, sum, parameters: p } = stretchInput(ast, "sandwich");
  const n = cells.length;
  const mode = p.endpointOccurrences === undefined ? "none" : p.endpointOccurrences;
  if (typeof mode !== "string" || !["none", "exactly-one", "at-most-one"].includes(mode)) throw Error('endpointOccurrences must be "none", "exactly-one" or "at-most-one".');
  let crusts: number[] | undefined;
  if (p.crusts !== undefined) {
    if (!Array.isArray(p.crusts) || p.crusts.some(d => !Number.isSafeInteger(d))) throw Error("crusts must be a list of digits.");
    crusts = p.crusts;
  }
  const { alphabet } = board;
  // The block formula reads the first and last symbol of the board's ordered alphabet, which is ascending on every board the library accepts.
  const lowest = alphabet[0], highest = alphabet[alphabet.length - 1];
  const first = crusts ? [...new Set(crusts)].filter(d => alphabet.includes(d)) : [lowest, highest];
  // Worst case: one disjunct per pair of positions, each restricting up to n cells and totalling the cells between.
  if ((n + 1) ** 2 * (n * alphabet.length + n + 1) > maxWork) throw new UnsupportedSemantics("Finite sandwich expansion exceeds 1,000,000 value combinations for this declaration.");
  const only = (cell: Cell, values: number[]): Formula => ({ op: "Allowed", channel: "D", cell, values });
  const outside = (set: number[]) => alphabet.filter(d => !set.includes(d));
  /** The digits strictly between positions i < j add up to the sum; a non-integer sum is never met. */
  const between = (i: number, j: number): Formula => {
    const inner = cells.slice(i + 1, j);
    if (!Number.isInteger(sum)) return none;
    return inner.length ? sumTotal(inner, sum, "D") : sum === 0 ? all([]) : none;
  };
  const notIn = (positions: number[], set: number[]) => positions.map(t => only(cells[t], outside(set)));
  const range = (from: number, to: number) => Array.from({ length: Math.max(0, to - from) }, (_, k) => from + k);
  const at = (t: number, set: number[]) => only(cells[t], set);
  const disjuncts: Formula[] = [];
  if (crusts) {
    // Fewer than two crust cells: nothing is required.
    disjuncts.push(all(notIn(range(0, n), first)));
    for (let i = 0; i < n; i++) {
      disjuncts.push(all([...notIn(range(0, i), first), at(i, first), ...notIn(range(i + 1, n), first)]));
      for (let j = i + 1; j < n; j++) disjuncts.push(all([...notIn(range(0, i), first), at(i, first), ...notIn(range(i + 1, j), first), at(j, first), between(i, j)]));
    }
    return { op: "Any", children: disjuncts };
  }
  if (lowest === highest) throw new UnsupportedSemantics("Default crusts on a one-symbol alphabet are not lowered; the whole instance remains uncovered.");
  const unique = mode !== "none";
  // The first occurrence of one endpoint at position t, or none; with a policy no other cell holds it.
  const state = (digit: number, t: number | undefined): Formula[] => t === undefined
    ? notIn(range(0, n), [digit])
    : [...notIn(range(0, t), [digit]), at(t, [digit]), ...(unique ? notIn(range(t + 1, n), [digit]) : [])];
  const places = (required: boolean) => required ? range(0, n) : [undefined, ...range(0, n)];
  for (const i of places(mode === "exactly-one")) for (const j of places(mode === "exactly-one")) {
    if (i !== undefined && i === j) continue;
    const sandwich = i !== undefined && j !== undefined ? [between(Math.min(i, j), Math.max(i, j))] : [];
    disjuncts.push(all([...state(lowest, i), ...state(highest, j), ...sandwich]));
  }
  return { op: "Any", children: disjuncts };
}

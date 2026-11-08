import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, sumTotal, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/** Most finite value combinations a run sum expansion may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };

/**
 * Run sum: a position of the cell list counts when the position before it or the position after it holds a printed digit that differs
 * by exactly one; the counted positions' digits add up to the sum, each position counted once.
 * Whether each adjacent pair differs by one is a pattern of n-1 yes/no answers, and the counted positions follow from the pattern. The
 * result is an exact disjunction over the patterns: a pair table for every adjacent pair saying it does or does not differ by one, and an
 * exact total over the counted cells. Patterns whose counted cells cannot reach the sum with the board's digits are left out, because
 * their totals are false. Nothing counted totals zero. A sum that is not a whole number is never met. A cell listed twice, a sum
 * that is not a safe integer and expansions past 1,000,000 value combinations are not lowered. The selected-stretch block this rule binds
 * is not lowered by this change; the rule is lowered on its own.
 */
export function lowerRunSum(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const cells = instance.cells ?? [], sum = instance.parameters.sum;
  if (typeof sum !== "number" || !Number.isFinite(sum)) throw Error("The sum must be a number.");
  if (new Set(cells).size !== cells.length) throw new UnsupportedSemantics("A run sum that lists a cell more than once is not lowered; the whole instance remains uncovered.");
  if (Number.isInteger(sum) && !Number.isSafeInteger(sum)) throw new UnsupportedSemantics("A run sum that is not a safe integer is not lowered; the whole instance remains uncovered.");
  if (!Number.isInteger(sum)) return none;
  const n = cells.length, edges = Math.max(n - 1, 0);
  const { alphabet } = board, low = Math.min(...alphabet), high = Math.max(...alphabet);
  if (2 ** edges * Math.max(edges, 1) * alphabet.length ** 2 > maxWork) throw new UnsupportedSemantics("Finite run-sum expansion exceeds 1,000,000 value combinations for this declaration.");
  const one = (x: number, y: number) => (BigInt(x) > BigInt(y) ? BigInt(x) - BigInt(y) : BigInt(y) - BigInt(x)) === 1n;
  const differing = Array.from({ length: edges }, (_, k) => pair(board, cells[k], cells[k + 1], one));
  const level = Array.from({ length: edges }, (_, k) => pair(board, cells[k], cells[k + 1], (x, y) => !one(x, y)));
  const branches: Formula[] = [];
  for (let pattern = 0; pattern < 2 ** edges; pattern++) {
    const near = (k: number) => k >= 0 && k < edges && (pattern >> k & 1) === 1;
    const counted = cells.filter((_, i) => near(i - 1) || near(i));
    if (counted.length ? sum < counted.length * low || sum > counted.length * high : sum !== 0) continue;
    branches.push(all([
      ...Array.from({ length: edges }, (_, k) => near(k) ? differing[k] : level[k]),
      counted.length ? sumTotal(counted, sum, "D") : all([]),
    ]));
  }
  return { op: "Any", children: branches };
}

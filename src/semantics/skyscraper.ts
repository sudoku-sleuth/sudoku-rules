import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/** Most finite value combinations a skyscraper expansion may charge. */
const maxWork = 1_000_000;

/**
 * Skyscraper: along the ordered cells, a position is visible when its value is strictly greater than every earlier value on the
 * ray (the first position always is), and the number of visible positions equals `visible`. A cell listed twice is read at each
 * occurrence, so a later copy never exceeds an earlier one. The result is an exact disjunction over which positions are records.
 * For a set of k record positions p0 = 0 < p1 < ... each record is strictly above the previous record, and every other position is
 * at most the last record before it. Each assignment has exactly one record set, so the cases are exclusive and exhaustive.
 * A count outside 1..length cannot be met. The channel is left as written; the caller converts V to D.
 */
export function lowerSkyscraper(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = instance.cells ?? [];
  const n = cells.length;
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  if (typeof p.visible !== "number" || !Number.isFinite(p.visible)) throw Error("visible must be a number.");
  if (!Number.isInteger(p.visible) || p.visible < 0) throw Error("visible must be a whole number of at least zero.");
  if (!Number.isSafeInteger(p.visible)) throw new UnsupportedSemantics("A visible count that is not a safe integer is not lowered; the whole instance remains uncovered.");
  const channel = p.channel === "V" ? "V" : "D";
  const k = p.visible;
  if (k < 1 || k > n) return { op: "Any", children: [] };
  const unit = board.alphabet.length ** 2;
  // Choose which of positions 1..n-1 join position 0 as records: C(n-1, k-1) cases of n-1 pair tables each.
  let cases = 1;
  for (let i = 1; i < k; i++) cases = cases * (n - i) / i;
  if (Math.round(cases) * (n - 1) * unit > maxWork) throw new UnsupportedSemantics("Finite skyscraper expansion exceeds 1,000,000 value combinations for this declaration.");
  const relation = (a: number, b: number, test: (x: number, y: number) => boolean): Formula => ({ ...pair(board, cells[a], cells[b], test), channel } as Formula);
  const branches: Formula[] = [];
  const choose = (next: number, records: number[]) => {
    if (records.length === k) {
      const terms: Formula[] = [];
      let last = 0, r = 0;
      for (let i = 1; i < n; i++) {
        if (r + 1 < records.length && records[r + 1] === i) { terms.push(relation(last, i, (x, y) => x < y)); last = i; r++; }
        else terms.push(relation(i, last, (x, y) => x <= y));
      }
      branches.push(all(terms));
      return;
    }
    for (let i = next; i < n; i++) if (n - i >= k - records.length) choose(i + 1, [...records, i]);
  };
  choose(1, [0]);
  return { op: "Any", children: branches };
}

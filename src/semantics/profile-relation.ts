import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a profile comparison may charge. */
const maxWork = 1_000_000;
const present = (cells: Cell[], digit: number): Formula => ({ op: "CountAtLeast", channel: "D", cells, digit, count: 1 });
/** Exactly k of the listed occurrences hold the digit. */
const exactly = (cells: Cell[], digit: number, k: number): Formula => {
  const atLeast = (count: number): Formula => ({ op: "CountAtLeast", channel: "D", cells, digit, count });
  return all([...(k > 0 ? [atLeast(k)] : []), ...(k < cells.length ? [{ op: "Not", child: atLeast(k + 1) } as Formula] : [])]);
};
function cellList(raw: unknown, board: CanonicalBoard): Cell[] {
  if (!Array.isArray(raw) || raw.some(c => !board.activeCells.includes(c as Cell))) throw Error("Supply lists of active board cells.");
  return raw as Cell[];
}
const binomial = (n: number, k: number): number => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };
function* subsets(items: number[], size: number, from = 0, chosen: number[] = []): Generator<number[]> {
  if (chosen.length === size) { yield chosen; return; }
  for (let i = from; i < items.length; i++) yield* subsets(items, size, i + 1, [...chosen, items[i]]);
}

/**
 * Profile relation, on printed digits. Without `maximumShared` the two cell lists hold the same profile of digits. Each side is a
 * list of occurrences, so a cell listed twice counts twice. With `multiset` true (the default) every digit occurs as often on
 * the left as on the right: the lists must have the same length, and each digit is an exact disjunction over the number of
 * occurrences k that both sides hold. With `multiset` false every digit is present on both sides or on neither.
 * With `maximumShared` m, the groups (the left and right lists when `groups` is absent; `multiset` plays no part) are compared
 * pairwise: two groups share at most m distinct digits, repeated occurrences counting once. That is the negation, for every set of
 * m+1 alphabet digits, of all of them being present in both groups.
 * The V channel stays uncovered, and so does expansion beyond 1,000,000 value combinations.
 */
export function lowerProfileRelation(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  const left = cellList(p.left, board), right = cellList(p.right, board);
  if (p.multiset !== undefined && typeof p.multiset !== "boolean") throw Error("multiset must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const groups = p.groups === undefined ? undefined : (() => { if (!Array.isArray(p.groups)) throw Error("Supply groups as lists of cells."); return p.groups.map(g => cellList(g, board)); })();
  if (p.maximumShared !== undefined && (!Number.isSafeInteger(p.maximumShared) || (p.maximumShared as number) < 0)) throw Error("maximumShared must be a nonnegative whole number.");
  if (p.channel === "V") throw new UnsupportedSemantics("The V channel of a profile relation is not lowered; the whole instance remains uncovered.");
  const alphabet = board.alphabet;
  const tooBig = () => new UnsupportedSemantics("Finite profile expansion exceeds 1,000,000 value combinations for this declaration.");
  if (p.maximumShared !== undefined) {
    const m = p.maximumShared as number;
    const inputs = (groups ?? [left, right]).map(sortedCells);
    if (m + 1 > alphabet.length) return all([]);
    const pairs = inputs.length * (inputs.length - 1) / 2;
    const size = binomial(alphabet.length, m + 1);
    if (pairs * size * (m + 1) > maxWork) throw tooBig();
    const children: Formula[] = [];
    for (let i = 0; i < inputs.length; i++) for (let j = i + 1; j < inputs.length; j++)
      for (const chosen of subsets(alphabet, m + 1)) children.push({ op: "Not", child: all(chosen.flatMap(n => [present(inputs[i], n), present(inputs[j], n)])) });
    return all(children);
  }
  const l = [...left].sort(), r = [...right].sort();
  if (p.multiset === false) {
    const sets = [sortedCells(left), sortedCells(right)];
    if (alphabet.length * (sets[0].length + sets[1].length) > maxWork) throw tooBig();
    return all(alphabet.map((n): Formula => ({ op: "Any", children: [all([present(sets[0], n), present(sets[1], n)]), all([{ op: "Not", child: present(sets[0], n) }, { op: "Not", child: present(sets[1], n) }])] })));
  }
  // The digits all come from the alphabet, so equal counts for every digit need equal lengths.
  if (l.length !== r.length) return { op: "Any", children: [] };
  if (alphabet.length * (l.length + 1) * 2 * l.length > maxWork) throw tooBig();
  return all(alphabet.map((n): Formula => ({ op: "Any", children: Array.from({ length: l.length + 1 }, (_, k) => all([exactly(l, n, k), exactly(r, n, k)])) })));
}

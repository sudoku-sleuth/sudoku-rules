import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a between or lockout expansion may charge. */
const maxWork = 1_000_000;

/**
 * Endpoint range on printed digits: the interior `line` is compared with the two `ends`.
 * Between (outside false, gap 0): every interior digit lies strictly between the end digits, so equal ends leave no possible interior digit.
 * Lockout (outside true): the end digits differ by at least `gap` and every interior digit lies strictly below both ends or strictly above both.
 * Both are an exact disjunction on which end holds the smaller digit (and, for lockout, on equal ends), each case built from ordered Pair relations.
 * A line that touches an end cell or repeats a cell, an ends list that is not two different cells, and a gap that is not a safe integer are not lowered.
 */
export function lowerEndpointRange(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const lockout = instance.kind === "lockout";
  const ends = p.ends;
  if (!Array.isArray(ends) || ends.some(c => typeof c !== "string")) throw Error("ends must be a list of cells.");
  for (const c of ends as Cell[]) if (!board.activeCells.includes(c)) throw Error(`${c} is not an active board cell.`);
  let gap = 0;
  if (lockout) {
    if (typeof p.gap !== "number" || !Number.isFinite(p.gap)) throw Error("The gap must be a number.");
    if (!Number.isSafeInteger(p.gap)) throw new UnsupportedSemantics("A lockout gap that is not a safe integer is not lowered; the whole instance remains uncovered.");
    gap = p.gap;
  }
  const line = instance.cells ?? [];
  if (ends.length !== 2 || ends[0] === ends[1]) throw new UnsupportedSemantics(`The ends of a ${instance.kind} that are not two different cells are not lowered; the whole instance remains uncovered.`);
  const [a, b] = ends as [Cell, Cell];
  if (new Set([...line, a, b]).size !== line.length + 2) throw new UnsupportedSemantics(`A ${instance.kind} whose line repeats a cell or touches an end is not lowered; the whole instance remains uncovered.`);
  if ((line.length + 1) * board.alphabet.length ** 2 > maxWork) throw new UnsupportedSemantics("Finite endpoint expansion exceeds 1,000,000 value combinations for this declaration.");
  const less = (x: Cell, y: Cell): Formula => pair(board, x, y, (s, t) => s < t);
  const any = (children: Formula[]): Formula => ({ op: "Any", children });
  if (!lockout) {
    // lo < c < hi for every interior cell, in each order of the ends; equal ends match neither case.
    const inside = (lo: Cell, hi: Cell) => all(line.flatMap(c => [less(lo, c), less(c, hi)]));
    return any([inside(a, b), inside(b, a)]);
  }
  const outside = (lo: Cell, hi: Cell) => all([
    pair(board, lo, hi, (s, t) => s < t && t - s >= gap),
    ...line.map(c => any([less(c, lo), less(hi, c)])),
  ]);
  return any([
    outside(a, b), outside(b, a),
    // Equal ends close the interval to a point: the gap must allow a difference of zero and no interior digit may equal it.
    all([pair(board, a, b, (s, t) => s === t && gap <= 0), ...line.map(c => pair(board, c, a, (s, t) => s !== t))]),
  ]);
}

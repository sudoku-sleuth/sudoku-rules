import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { classCount } from "./class-count.js";
import { semanticDeclaration } from "./declaration.js";
import { moveRelation, moves } from "./extremum.js";
import { UnsupportedSemantics } from "./primitives.js";
import { holds, relation } from "./relations.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most atoms the origin cases of one declaration may write. */
const maxAtoms = 200_000;
const none: Formula = { op: "Any", children: [] };

/**
 * Neighbour count, on printed digits. The neighbours are the cells of `scope` one `move` from the origin, and the origin itself
 * only when `includeSelf` is true and it is in scope. A neighbour counts once when the origin's digit and its own digit meet at
 * least one relation, with the origin first. The count is `total`, or the origin's own digit, and with `exhaustive` it is also
 * every neighbour. The result is an exact disjunction over the origin's digit x: the origin holds x, and the other neighbours
 * hold a digit that x relates to in exactly the needed number, written as the exact class count of Digit Profile. The origin
 * counts for itself when x relates to x. A count that no digit can meet has no case.
 */
export function lowerNeighbourCount(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  if (typeof p.cell !== "string") throw Error("Supply the origin cell.");
  if (!Array.isArray(p.scope) || p.scope.some(c => typeof c !== "string")) throw Error("Supply the scope as a list of cells.");
  if (!Array.isArray(p.relations)) throw Error("Supply a list of relations.");
  const move = p.move === undefined ? "orthogonal" : p.move;
  if (typeof move !== "string" || !moves.includes(move)) throw Error("Choose an orthogonal, diagonal, king, knight or bishop move.");
  for (const name of ["includeSelf", "exhaustive"]) if (p[name] !== undefined && typeof p[name] !== "boolean") throw Error(`${name} must be true or false.`);
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  if (p.channel === "V") throw new UnsupportedSemantics("A neighbour count that reads effective values is not lowered; the whole instance remains uncovered.");
  if (p.total !== undefined && (typeof p.total !== "number" || !Number.isFinite(p.total))) throw Error("The total must be a number.");
  if (p.total !== undefined && !Number.isSafeInteger(p.total)) throw new UnsupportedSemantics("A total that is not a whole number is not lowered; the whole instance remains uncovered.");
  const origin = p.cell as Cell, scope = p.scope as Cell[];
  for (const c of [origin, ...scope]) if (!board.activeCells.includes(c)) throw new UnsupportedSemantics("An origin or scope cell that is not an active board cell is not lowered; the whole instance remains uncovered.");
  const relations = (p.relations as unknown[]).map(relation);
  const selected = sortedCells(scope).filter(d => moveRelation(move, origin, d) || p.includeSelf === true && d === origin);
  const others = selected.filter(d => d !== origin);
  const hasSelf = selected.length !== others.length;
  let atoms = 0;
  const spend = (n: number) => { atoms += n; if (atoms > maxAtoms) throw new UnsupportedSemantics("A neighbour count that needs more than 200,000 count terms is not lowered; the whole instance remains uncovered."); };
  const cases: Formula[] = [];
  for (const x of board.alphabet) {
    const related = (y: number) => relations.some(r => holds(r, x, y));
    const needed = (p.total === undefined ? x : p.total as number) - (hasSelf && related(x) ? 1 : 0);
    const exhaustive = p.exhaustive === true;
    // Every neighbour matching also means the count is the number of neighbours.
    if (exhaustive && ((hasSelf && !related(x)) || (p.total === undefined ? x : p.total as number) !== selected.length)) continue;
    const count = exhaustive ? others.length : needed;
    if (!Number.isSafeInteger(count) || count < 0) continue;
    const members = board.alphabet.filter(related);
    cases.push({ op: "All", children: [{ op: "Allowed", channel: "D", cell: origin, values: [x] }, classCount(others, members, count, true, board.alphabet, spend)] });
  }
  return cases.length ? { op: "Any", children: cases } : none;
}

import type { DeclarationAST } from "../declarations.js";
import { coordinates, sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { moveRelation, moves } from "./extremum.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import { holds, relation } from "./relations.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a relation-scope expansion may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };

/**
 * Relation scope. Every selected pair of cells, taken in increasing row-major order, satisfies at least one listed relation
 * (or, with `negative` true, none of them). A pair is selected when both cells are in `cells`, they differ, they are one `move`
 * apart unless `mode` is "all", and, for mode "incident", at least one of them is an anchor. Pairs listed in `except` are
 * undirected and drop out. An exception that is not a pair of cells makes the whole declaration false.
 * Positive scope is one Pair table per selected pair holding the union of the relations; negative scope is one Pair table per
 * selected pair and relation, as for the negative block. The channel is left as written; the caller converts V to D.
 */
export function lowerRelationScope(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const scope = sortedCells(instance.cells ?? []);
  if (!Array.isArray(p.relations)) throw Error("Supply a list of relations.");
  const relations = [...new Map(p.relations.map(raw => { const r = relation(raw); return [JSON.stringify([r.op, r.value]), r]; })).values()];
  const mode = p.mode === undefined ? "moves" : p.mode;
  if (mode !== "all" && mode !== "moves" && mode !== "incident") throw Error('Choose mode "all", "moves" or "incident".');
  const move = p.move === undefined ? "orthogonal" : p.move;
  if (typeof move !== "string" || !moves.includes(move)) throw Error("Choose an orthogonal, diagonal, king, knight or bishop move.");
  if (p.negative !== undefined && typeof p.negative !== "boolean") throw Error("negative must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const cellList = (raw: unknown, what: string): Cell[] => {
    if (!Array.isArray(raw) || raw.some(c => typeof c !== "string")) throw Error(`Supply ${what} as a list of cells.`);
    return raw as Cell[];
  };
  const anchors = new Set(p.anchors === undefined ? [] : cellList(p.anchors, "anchors"));
  if (p.except !== undefined && !Array.isArray(p.except)) throw Error("Supply except as a list of cell lists.");
  const except = ((p.except ?? []) as unknown[]).map(e => cellList(e, "each exception"));
  if (except.some(e => e.length !== 2)) return none;
  const exempt = new Set(except.filter(([a, b]) => a !== b).map(([a, b]) => [a, b].sort().join(",")));
  const channel = p.channel === "V" ? "V" : "D";
  const negative = p.negative === true;
  const order = (a: Cell, b: Cell) => { const [ar, ac] = coordinates(a), [br, bc] = coordinates(b); return ar - br || ac - bc; };
  const ordered = [...scope].sort(order);
  const unit = board.alphabet.length ** 2;
  let work = 0;
  const nodes: Formula[] = [];
  const emit = (test: (x: number, y: number) => boolean, a: Cell, b: Cell) => {
    work += unit;
    if (work > maxWork) throw new UnsupportedSemantics("Finite relation-scope expansion exceeds 1,000,000 value combinations for this declaration.");
    nodes.push({ ...pair(board, a, b, test), channel } as Formula);
  };
  ordered.forEach((a, i) => ordered.slice(i + 1).forEach(b => {
    if (mode !== "all" && !moveRelation(move, a, b)) return;
    if (mode === "incident" && !anchors.has(a) && !anchors.has(b)) return;
    if (exempt.has([a, b].sort().join(","))) return;
    if (negative) for (const r of relations) emit((x, y) => !holds(r, x, y), a, b);
    else emit((x, y) => relations.some(r => holds(r, x, y)), a, b);
  }));
  return all(nodes);
}

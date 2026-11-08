import type { DeclarationAST } from "../declarations.js";
import { coordinates, sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations an extremum expansion may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };
export const moves = ["orthogonal", "diagonal", "king", "knight", "bishop"];

/** The published moveRelation on two active cells. */
export function moveRelation(move: string, a: Cell, b: Cell): boolean {
  const [ar, ac] = coordinates(a), [br, bc] = coordinates(b);
  const dr = Math.abs(ar - br), dc = Math.abs(ac - bc);
  switch (move) {
    case "orthogonal": return dr + dc === 1;
    case "diagonal": return dr === 1 && dc === 1;
    case "king": return dr + dc === 1 || dr === 1 && dc === 1;
    case "knight": return dr === 1 && dc === 2 || dr === 2 && dc === 1;
    default: return a !== b && dr === dc;
  }
}

/**
 * Extremum and neighbour extremum. Each marked cell a is strictly below (min) or above (max) every cell of its neighbour set:
 * the explicit `neighbours` when given, else the cells one move away, outside the marked set when `boundary` is true (the default).
 * A marked cell listed among its own explicit neighbours can never satisfy the comparison. With `exhaustive` true each unmarked cell
 * also has a cell one move away that is strictly below it (min) or above it (max), marked or not; explicit neighbours and `boundary`
 * play no part there. The result is a conjunction of ordered Pair tables, with a disjunction of them for each unmarked cell.
 * The channel is left as written; the caller converts V to D.
 */
export function lowerExtremum(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  return lowerExtremumOf(instance.cells ?? [], instance.parameters, board);
}

/** The extremum of already-read marked cells and parameters; the aliases that bind it call this with their bound settings. */
export function lowerExtremumOf(markedCells: Cell[], p: Record<string, unknown>, board: CanonicalBoard): Formula {
  const marked = sortedCells(markedCells);
  if (p.type !== "min" && p.type !== "max") throw Error('Choose type "min" or "max".');
  if (typeof p.exhaustive !== "boolean") throw Error("exhaustive must be true or false.");
  if (p.boundary !== undefined && typeof p.boundary !== "boolean") throw Error("boundary must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const move = p.neighbourhood === undefined ? "orthogonal" : p.neighbourhood;
  if (typeof move !== "string" || !moves.includes(move)) throw Error("Choose an orthogonal, diagonal, king, knight or bishop move.");
  let explicit: Cell[] | undefined;
  if (p.neighbours !== undefined) {
    if (!Array.isArray(p.neighbours) || p.neighbours.some(c => !board.activeCells.includes(c as Cell))) throw Error("Supply neighbours as active board cells.");
    explicit = sortedCells(p.neighbours as Cell[]);
  }
  const channel = p.channel === "V" ? "V" : "D";
  const below = p.type === "min";
  const boundary = p.boundary !== false;
  const side = new Set(marked);
  const cells = board.activeCells;
  const unit = board.alphabet.length ** 2;
  let work = 0;
  const charge = () => {
    work += unit;
    if (work > maxWork) throw new UnsupportedSemantics("Finite extremum expansion exceeds 1,000,000 value combinations for this declaration.");
  };
  /** The value at `low` is strictly below the value at `high`, on the declared channel. */
  const less = (low: Cell, high: Cell): Formula => {
    charge();
    return { ...pair(board, low, high, (x, y) => x < y), channel } as Formula;
  };
  const nodes: Formula[] = [];
  for (const a of marked) {
    const neighbours = explicit ?? cells.filter(b => moveRelation(move, a, b) && (!boundary || !side.has(b)));
    for (const b of neighbours) nodes.push(b === a ? none : below ? less(a, b) : less(b, a));
  }
  if (p.exhaustive) for (const a of cells) {
    if (side.has(a)) continue;
    nodes.push({ op: "Any", children: cells.filter(b => moveRelation(move, a, b)).map(b => below ? less(b, a) : less(a, b)) });
  }
  return all(nodes);
}

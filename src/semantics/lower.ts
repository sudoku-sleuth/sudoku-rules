import { lineFields, lowerLine } from "./lines.js";
import { holds, relation } from "./relations.js";
import { cellAt, coordinates, groups, key, sortedCells, standardHouses } from "./board.js";
import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

export { all, distinct, pair, UnsupportedSemantics } from "./primitives.js";
import { all, distinct, pair, UnsupportedSemantics } from "./primitives.js";
function digitList(raw: unknown, board: CanonicalBoard): number[] {
  if (!Array.isArray(raw) || raw.some(d => !Number.isSafeInteger(d) || !board.alphabet.includes(d))) throw Error("Supply a digit list drawn from the board alphabet.");
  return raw;
}
const fields: Record<string, string[]> = {
  ...lineFields,
  pair: ["relation"], kropki: ["colour"], quadruple: ["digits"], outside: ["digits"],
  negative: ["relations", "except", "within", "direction"],
  cage: ["total", "sum", "repeats"], killer: ["total", "sum", "repeats"],
  sudoku: ["size"], unique: [], clone: [], diagonal: ["direction"], "anti-knight": [], "anti-king": [],
  "scoped-move": ["move", "relation", "digits"], "allowed-digits": ["digits"], "parity-cells": ["parity"],
};
export function validateCells(ast: DeclarationAST, board: CanonicalBoard): void {
  const instance=semanticDeclaration(ast);
  for (const cell of instance.cells ?? []) if (!board.activeCells.includes(cell)) throw Error(`${cell} is not an active board cell.`);
}
/** Validate completely before wrapping with negation or a condition. */
export function lower(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance=semanticDeclaration(ast);
  const { kind, parameters: p } = instance;
  const allowed = fields[kind];
  if (!allowed) throw Error(`No lowering for ${kind}.`);
  for (const name of Object.keys(p)) if (!allowed.includes(name)) throw Error(`${kind} has no parameter ${name}.`);
  validateCells(ast, board);
  const needsCells = Object.hasOwn(lineFields, kind) || ["unique", "clone", "allowed-digits", "parity-cells", "cage", "killer", "pair", "kropki", "quadruple", "outside"].includes(kind);
  if (needsCells && !instance.cells?.length) throw Error(`${kind} needs a nonempty cell list.`);
  if (!needsCells && instance.cells) throw Error(`${kind} does not take a cell list.`);
  if (Object.hasOwn(lineFields, kind)) return lowerLine(ast, board);
  const cells = sortedCells(instance.cells ?? []);
  const checkPairExpansion = () => {
    if (cells.length * (cells.length - 1) / 2 * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite pair expansion exceeds 1,000,000 value combinations for this declaration.");
  };
  if (instance.condition && !cells.length) throw Error("A condition needs a nonempty primary cell list.");
  switch (kind) {
    case "pair": case "kropki": {
      if (instance.cells!.length !== 2) throw Error(`${kind} requires exactly two cell positions.`);
      if (kind === "kropki" && (typeof p.colour !== "string" || !["white", "black"].includes(p.colour))) throw Error("Choose white or black.");
      const r = relation(kind === "pair" ? p.relation : { op: p.colour === "white" ? "difference" : "ratio", value: p.colour === "white" ? 1 : 2 });
      return { ...pair(board, instance.cells![0], instance.cells![1], (a,b) => holds(r,a,b)), channel: "V" } as Formula;
    }
    case "quadruple": case "outside": {
      const digits = digitList(p.digits, board);
      const positions = kind === "quadruple" ? cells : [...instance.cells!].sort();
      return all([...new Set(digits)].map(digit => ({ op: "CountAtLeast", channel: "D", cells: positions, digit, count: digits.filter(d => d === digit).length })));
    }
    case "negative": {
      if (!Array.isArray(p.relations)) throw Error("Supply a list of relations.");
      const relations = [...new Map(p.relations.map(raw => { const r = relation(raw); return [key([r.op, r.value]), r]; })).values()];
      const cellGroups = (raw: unknown): Cell[][] => {
        if (!Array.isArray(raw) || raw.some(g => !Array.isArray(g) || g.some(c => !board.activeCells.includes(c)))) throw Error("Supply lists of active board cells.");
        return raw;
      };
      const except = cellGroups(p.except);
      if (except.some(g => g.length !== 2)) throw Error("Every exception needs exactly two cells.");
      const within = p.within === undefined ? undefined : cellGroups(p.within);
      if (p.direction !== undefined && (typeof p.direction !== "string" || !["horizontal", "vertical"].includes(p.direction))) throw Error("Choose horizontal or vertical.");
      const nodes: Formula[] = [];
      const ordered = [...board.activeCells].sort((a,b) => { const [ar,ac] = coordinates(a), [br,bc] = coordinates(b); return ar-br || ac-bc; });
      ordered.forEach((a,i) => ordered.slice(i+1).forEach(b => {
        const [ar,ac] = coordinates(a), [br,bc] = coordinates(b);
        if (Math.abs(ar-br)+Math.abs(ac-bc) !== 1 || p.direction === "horizontal" && ar !== br || p.direction === "vertical" && ac !== bc || within && !within.some(g => g.includes(a) && g.includes(b)) || except.some(g => g.includes(a) && g.includes(b))) return;
        for (const r of relations) {
          if ((nodes.length+1)*board.alphabet.length**2 > 1_000_000) throw new UnsupportedSemantics("Finite negative expansion exceeds 1,000,000 value combinations.");
          nodes.push(pair(board,a,b,(x,y) => !holds(r,x,y)));
        }
      }));
      return all(nodes);
    }
    case "sudoku": {
      if (p.size !== "9x9") throw Error("The sudoku definition requires 9x9; supply nonstandard board houses through BoardContext and unique declarations.");
      if (board.rows !== 9 || board.cols !== 9 || board.activeCells.length !== 81 || board.alphabet.join() !== "1,2,3,4,5,6,7,8,9") throw Error("sudoku 9x9 requires a complete 9x9 board with ordered alphabet 1–9.");
      if (board.regions.length && key(board.regions) !== key(groups(standardHouses().slice(18)))) throw Error("sudoku 9x9 requires standard 3x3 primary regions.");
      return all(standardHouses().map(distinct));
    }
    case "cage": case "killer": {
      if (p.repeats !== undefined && typeof p.repeats !== "boolean") throw Error("repeats must be true or false.");
      if (p.total !== undefined && p.sum !== undefined) throw Error("Use total once; sum is its alias.");
      const total = p.total !== undefined ? p.total : p.sum;
      if (total !== undefined && (typeof total !== "number" || !Number.isFinite(total))) throw Error("The cage total must be a number.");
      if (total !== undefined) throw new UnsupportedSemantics("Cage value totals are not lowered; the whole cage remains uncovered.");
      if (p.repeats === true) return all([]);
      checkPairExpansion();
      return distinct(cells);
    }
    case "unique": checkPairExpansion(); return distinct(cells);
    case "clone": checkPairExpansion(); return all(cells.flatMap((a, i) => cells.slice(i + 1).map(b => pair(board, a, b, (x, y) => x === y))));
    case "diagonal": {
      if (typeof p.direction !== "string" || !["main", "anti"].includes(p.direction)) throw Error('Choose direction "main" or "anti".');
      return distinct(board.activeCells.filter(c => { const [r, col] = coordinates(c); return p.direction === "main" ? r === col : r + col === board.cols + 1; }));
    }
    case "allowed-digits": {
      const values = digitList(p.digits, board);
      return all(cells.map(cell => ({ op: "Allowed", channel: "D", cell, values })));
    }
    case "parity-cells": {
      if (typeof p.parity !== "string" || !["odd", "even"].includes(p.parity)) throw Error('Choose parity "odd" or "even".');
      const values = board.alphabet.filter(d => Math.abs(d % 2) === (p.parity === "odd" ? 1 : 0));
      return all(cells.map(cell => ({ op: "Allowed", channel: "V", cell, values })));
    }
    default: {
      const move = kind === "anti-knight" ? "knight" : kind === "anti-king" ? "king" : p.move;
      if (typeof move !== "string" || !["knight", "king", "orthogonal", "bishop"].includes(move)) throw Error("Choose a knight, king, orthogonal or bishop move.");
      if (kind === "scoped-move" && (typeof p.relation !== "string" || !["same", "consecutive"].includes(p.relation))) throw Error('Choose relation "same" or "consecutive".');
      const digits = kind === "scoped-move" ? digitList(p.digits, board) : board.alphabet;
      const nodes: Formula[] = [];
      board.activeCells.forEach((a, i) => board.activeCells.slice(i + 1).forEach(b => {
        const [ar, ac] = coordinates(a), [br, bc] = coordinates(b);
        const dr = Math.abs(ar - br), dc = Math.abs(ac - bc);
        const edge = move === "knight" ? dr * dc === 2 : move === "king" ? Math.max(dr, dc) === 1 : move === "orthogonal" ? dr + dc === 1 : dr === dc;
        if (edge && (nodes.length + 1) * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite move expansion exceeds 1,000,000 value combinations for this declaration.");
        if (edge) nodes.push(pair(board, a, b, (x, y) => !(digits.includes(x) || digits.includes(y)) || (p.relation === "consecutive" ? Math.abs(x - y) !== 1 : x !== y)));
      }));
      return all(nodes);
    }
  }
}
export function condition(ast: DeclarationAST, base: Formula, board: CanonicalBoard, negated = ast.negations.length % 2 === 1): Formula {
  const instance={...semanticDeclaration(ast),negated};
  if (instance.negated) base = { op: "Not", child: base };
  const cond = instance.condition;
  if (!cond) return base;
  const cells = instance.cells!;
  let predicate: Formula;
  if (cond.predicate === "distinct") predicate = (Object.hasOwn(lineFields, instance.kind) || ["allowed-digits", "outside", "pair", "kropki"].includes(instance.kind)) ? { op: "Distinct", channel: "D", collection: "list", cells } : distinct(cells);
  else if (cond.predicate === "connected") {
    const reached = new Set<Cell>([cells[0]]);
    let changed = true;
    while (changed) { changed = false; for (const c of cells) if (!reached.has(c)) {
      const [r, col] = coordinates(c);
      if ([cellAt(r - 1, col), cellAt(r + 1, col), cellAt(r, col - 1), cellAt(r, col + 1)].some(n => reached.has(n))) { reached.add(c); changed = true; }
    } }
    predicate = { op: reached.size === new Set(cells).size ? "All" : "Any", children: [] };
  } else throw Error("Uniform conditions require the shared shading interpretation.");
  // P -> R = not(P) or R; unless first complements P.
  if (cond.unless) predicate = { op: "Not", child: predicate };
  return { op: "Any", children: [{ op: "Not", child: predicate }, base] };
}

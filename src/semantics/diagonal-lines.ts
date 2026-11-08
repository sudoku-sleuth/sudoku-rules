import type { DeclarationAST } from "../declarations.js";
import { cellAt, key } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import { digitClasses } from "./window-classes.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a diagonal-lines expansion may charge. */
const maxWork = 1_000_000;

/**
 * Diagonal lines: every maximal board diagonal at least as long as `minLength` (and never shorter than three cells) either stays in
 * one digit class or has every class exactly once in each window of as many consecutive cells as there are classes. The classes are
 * the stated system's: parity (two classes), remainders modulo 3, or the equal thirds of the ordered alphabet, which needs a size that
 * is a multiple of three. The diagonals are the maximal down-right rays that start on the top row or the left column and the maximal
 * down-left rays that start on the top row or the right column, taken over the whole board.
 * Each covered diagonal is a disjunction of one constant-class conjunction per class that holds a digit and one conjunction of pair
 * tables, one per window, saying the window's classes differ. A board with an inactive cell is not lowered.
 */
export function lowerDiagonalLines(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  if (p.classes !== "parity" && p.classes !== "mod3" && p.classes !== "entropy") throw Error("classes must be parity, mod3 or entropy.");
  if (typeof p.minLength !== "number" || !Number.isFinite(p.minLength)) throw Error("minLength must be a number.");
  const classes = digitClasses(p.classes, board.alphabet);
  if (board.activeCells.length !== board.rows * board.cols) throw new UnsupportedSemantics("A board with an inactive cell is not lowered for diagonal lines; the whole instance remains uncovered.");
  const classOf = new Map<number, number>();
  classes.forEach((digits, index) => digits.forEach(d => classOf.set(d, index)));
  // A diagonal of n cells is covered when n is at least the larger of three and minLength.
  const shortest = Math.max(3, Math.ceil(p.minLength));
  const rays = new Map<string, Cell[]>();
  const walk = (row: number, col: number, step: number) => {
    const ray: Cell[] = [];
    for (let r = row, c = col; r <= board.rows && c >= 1 && c <= board.cols; r++, c += step) ray.push(cellAt(r, c));
    if (ray.length >= shortest) rays.set(key(ray), ray);
  };
  for (let c = 1; c <= board.cols; c++) { walk(1, c, 1); walk(1, c, -1); }
  for (let r = 2; r <= board.rows; r++) { walk(r, 1, 1); walk(r, board.cols, -1); }
  let work = 0;
  const charge = (n: number) => { work += n; if (work > maxWork) throw new UnsupportedSemantics("Finite diagonal-lines expansion exceeds 1,000,000 value combinations for this declaration."); };
  const size = classes.length;
  return all([...rays.values()].map((ray): Formula => {
    const constant = classes.map((values): Formula => all(ray.map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values }))));
    charge(ray.length * board.alphabet.length * size);
    const windows: Formula[] = [];
    for (let start = 0; start + size <= ray.length; start++) {
      const members = ray.slice(start, start + size);
      members.forEach((a, i) => members.slice(i + 1).forEach(b => { charge(board.alphabet.length ** 2); windows.push(pair(board, a, b, (x, y) => classOf.get(x) !== classOf.get(y))); }));
    }
    return { op: "Any", children: [...constant, all(windows)] };
  }));
}

import type { DeclarationAST } from "../declarations.js";
import { cellAt } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import { digitClasses } from "./window-classes.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a class-pattern expansion may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };
const any = (children: Formula[]): Formula => ({ op: "Any", children });

/** The remainder of a digit modulo m, never negative. */
const remainder = (x: number, m: number): number => Number((BigInt(x) % BigInt(m) + BigInt(m)) % BigInt(m));

function position(raw: unknown, name: string, fallback?: number): number | undefined {
  if (raw === undefined) return fallback;
  if (typeof raw !== "number" || !Number.isInteger(raw) || raw < 0) throw Error(`${name} must be a whole number of at least 0.`);
  if (!Number.isSafeInteger(raw)) throw new UnsupportedSemantics(`A ${name} that is not a safe integer is not lowered; the whole instance remains uncovered.`);
  return raw;
}

/**
 * Class pattern: windows of cells are compared by the class of their printed digits. A class is the remainder modulo `modulus`
 * (never negative) or, for `entropy`, one of the three equal thirds of the ordered alphabet, which needs an alphabet whose size is a
 * multiple of three. With `fixedClass` the other settings are not read: every listed cell reads, on `channel`, a remainder modulo
 * `modulus` equal to it. Otherwise a modulus below one never holds, and a scope of cells is checked by `mode`: `distinct` (all
 * classes different, counting every occurrence), `same` (one shared class) or `cover` (every class present). The scopes are
 * - `line`: every window of `length` consecutive cells (wrapping on a closed line, which needs `length` cells), plus the whole line when
 *   it is open with two cells; `length` below two never holds, and a line shorter than a window has none;
 * - `cells`: the whole supplied list;
 * - `squares`: each two-by-two square of the board, as a set of cells.
 * Distinct is explicit pair tables, same a disjunction over the classes that hold a digit, and cover a conjunction over the classes
 * (false when the modulus has a class holding no digit). A network of explicit `edges`, an entropy alphabet that is not a multiple of
 * three, a square with an inactive cell and expansions past 1,000,000 value combinations are not lowered.
 */
export function lowerClassPattern(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const line = instance.cells ?? [];
  const classification = p.classification ?? "residue", geometry = p.geometry ?? "line", mode = p.mode ?? "distinct";
  if (classification !== "residue" && classification !== "entropy") throw Error('classification must be "residue" or "entropy".');
  if (geometry !== "line" && geometry !== "cells" && geometry !== "squares") throw Error('geometry must be "line", "cells" or "squares".');
  if (mode !== "distinct" && mode !== "same" && mode !== "cover") throw Error('mode must be "distinct", "same" or "cover".');
  if (p.loop !== undefined && typeof p.loop !== "boolean") throw Error("loop must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const modulus = position(p.modulus, "modulus", 3)!, length = position(p.length, "length", 3)!, fixed = position(p.fixedClass, "fixedClass");
  const { alphabet } = board;
  if (!alphabet.length) throw new UnsupportedSemantics("A board with no symbols is not lowered for class patterns; the whole instance remains uncovered.");
  if (fixed !== undefined) {
    if (modulus < 1) return none;
    const values = alphabet.filter(d => remainder(d, modulus) === fixed);
    return all([...new Set(line)].sort().map((cell): Formula => ({ op: "Allowed", channel: p.channel === "V" ? "V" : "D", cell, values })));
  }
  if (modulus < 1) return none;
  if (geometry === "line" && p.edges !== undefined) throw new UnsupportedSemantics("The edges parameter of class-pattern is not lowered; the whole instance remains uncovered.");
  // The classes that hold at least one alphabet digit, and how many classes there are in all.
  const groups = new Map<number, number[]>();
  if (classification === "entropy") digitClasses("entropy", alphabet).forEach((digits, index) => groups.set(index, digits));
  else if (modulus === 2) digitClasses("parity", alphabet).forEach((digits, index) => digits.length && groups.set(index, digits));
  else if (modulus === 3) digitClasses("mod3", alphabet).forEach((digits, index) => digits.length && groups.set(index, digits));
  else for (const d of alphabet) groups.set(remainder(d, modulus), [...groups.get(remainder(d, modulus)) ?? [], d]);
  const classes = classification === "entropy" ? 3 : modulus;
  const classOf = new Map<number, number>();
  for (const [index, digits] of groups) for (const d of digits) classOf.set(d, index);
  let work = 0;
  const charge = (n: number) => { work += n; if (work > maxWork) throw new UnsupportedSemantics("Finite class-pattern expansion exceeds 1,000,000 value combinations for this declaration."); };
  const scope = (members: Cell[], unique: boolean): Formula => {
    const cells = unique ? [...new Set(members)].sort() as Cell[] : members;
    if (mode === "distinct") {
      const tests: Formula[] = [];
      cells.forEach((a, i) => cells.slice(i + 1).forEach(b => { charge(alphabet.length ** 2); tests.push(pair(board, a, b, (x, y) => classOf.get(x) !== classOf.get(y))); }));
      return all(tests);
    }
    charge(cells.length * alphabet.length + 1);
    const only = [...new Set(cells)].sort() as Cell[];
    if (mode === "same") return cells.length ? any([...groups.values()].map(values => all(only.map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values }))))) : all([]);
    // Cover: every class holds a digit on some cell; a class no digit belongs to can never be covered.
    if (groups.size < classes) return none;
    return all([...groups.values()].map(values => any(only.map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values })))));
  };
  if (geometry === "cells") return scope(line, false);
  if (geometry === "squares") {
    const active = new Set(board.activeCells);
    const squares: Formula[] = [];
    for (let r = 1; r < board.rows; r++) for (let c = 1; c < board.cols; c++) {
      const members = [cellAt(r, c), cellAt(r, c + 1), cellAt(r + 1, c), cellAt(r + 1, c + 1)];
      if (members.some(cell => !active.has(cell))) throw new UnsupportedSemantics("A two-by-two square that includes an inactive cell is not lowered; the whole instance remains uncovered.");
      squares.push(scope(members, true));
    }
    return all(squares);
  }
  if (length < 2) return none;
  const n = line.length, closed = p.loop === true;
  const windows: Formula[] = [];
  for (let start = 0; start < (closed ? (n >= length ? n : 0) : Math.max(n - length + 1, 0)); start++) windows.push(scope(Array.from({ length }, (_, j) => line[(start + j) % n]), false));
  if (!closed && n === 2) windows.push(scope(line, false));
  return all(windows);
}

import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { selfCounts } from "./counting-circles.js";
import { classCount } from "./class-count.js";
import { semanticDeclaration } from "./declaration.js";
import { all, distinct, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most atoms the class counts of one declaration may write. */
const maxAtoms = 200_000;
const none: Formula = { op: "Any", children: [] };

/**
 * Digit profile, on printed digits. Each listed class (a set of numbers; classes may overlap) holds its stated number of the
 * listed cells, exactly or at least. With `windowLength` the counts apply to every full window of that many cells instead, and
 * `loop` adds the windows that wrap round; a window longer than the list adds no condition. `exhaustive` allows only digits of
 * some class, `selfCount` makes every occurring digit occur as often as its value, and `repeats` false makes the listed digits
 * differ (a cell listed twice then cannot hold). Maximum distinct values, balanced class pairs and sum-free supports stay
 * uncovered, as does the effective-value channel.
 */
export function lowerDigitProfile(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = instance.cells ?? [];
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  if (p.channel === "V") throw new UnsupportedSemantics("A profile that reads effective values is not lowered; the whole instance remains uncovered.");
  for (const name of ["exhaustive", "selfCount", "loop", "repeats"]) if (p[name] !== undefined && typeof p[name] !== "boolean") throw Error(`${name} must be true or false.`);
  if (p.comparison !== undefined && p.comparison !== "exact" && p.comparison !== "at-least") throw Error('Choose comparison "exact" or "at-least".');
  if (!Array.isArray(p.classes) || p.classes.some(c => !Array.isArray(c) || c.some(n => typeof n !== "number" || !Number.isFinite(n)))) throw Error("Supply classes as lists of numbers.");
  if (!Array.isArray(p.counts) || p.counts.some(n => typeof n !== "number" || !Number.isFinite(n))) throw Error("Supply counts as numbers.");
  if (p.maximumDistinct !== undefined) throw new UnsupportedSemantics("A bound on the number of different values is not lowered by Digit Profile; the whole instance remains uncovered.");
  if (p.sumFree !== undefined) throw new UnsupportedSemantics("A sum-free support is not lowered; the whole instance remains uncovered.");
  if (p.balancePairs !== undefined && (!Array.isArray(p.balancePairs) || p.balancePairs.length)) throw new UnsupportedSemantics("Balanced class pairs are not lowered; the whole instance remains uncovered.");
  const classes = p.classes as number[][], counts = p.counts as number[];
  if (classes.length !== counts.length || counts.some(n => n < 0)) return none;
  if (counts.some(n => !Number.isSafeInteger(n))) throw new UnsupportedSemantics("A class count that is not a whole number is not lowered; the whole instance remains uncovered.");
  const exact = p.comparison !== "at-least";
  let atoms = 0;
  const spend = (n: number) => { atoms += n; if (atoms > maxAtoms) throw new UnsupportedSemantics("A profile that needs more than 200,000 class-count terms is not lowered; the whole instance remains uncovered."); };
  const nodes: Formula[] = [];
  if (p.repeats === false) {
    if (new Set(cells).size !== cells.length) return none;
    if (cells.length * (cells.length - 1) / 2 * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite pair expansion exceeds 1,000,000 value combinations for this declaration.");
    nodes.push(distinct(cells));
  }
  if (p.selfCount === true) nodes.push(selfCounts(cells, board.alphabet));
  const profile = (window: Cell[]) => classes.map((members, i) => classCount(window, members, counts[i], exact, board.alphabet, spend));
  if (p.windowLength === undefined) nodes.push(...profile(cells));
  else {
    const k = p.windowLength;
    if (typeof k !== "number" || !Number.isFinite(k)) throw Error("The window length must be a number.");
    if (k < 1) return none;
    if (!Number.isSafeInteger(k)) throw new UnsupportedSemantics("A window length that is not a whole number is not lowered; the whole instance remains uncovered.");
    const n = cells.length;
    const starts = p.loop === true ? (n >= k ? n : 0) : Math.max(0, n - k + 1);
    for (let s = 0; s < starts; s++) nodes.push(...profile(Array.from({ length: k }, (_, t) => cells[(s + t) % n])));
  }
  if (p.exhaustive === true) {
    const values = board.alphabet.filter(d => classes.some(c => c.includes(d)));
    nodes.push(...sortedCells(cells).map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values })));
  }
  return all(nodes);
}

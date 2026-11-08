import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a local sequence expansion may charge. */
const maxWork = 1_000_000;
/** Largest recurrence coefficient lowered; a coefficient becomes that many cell occurrences in a sum equation. */
const maxCoefficient = 1000;
const none: Formula = { op: "Any", children: [] };

/**
 * Local sequence: successive cells follow one of three sequences on the stated channel.
 * - transitions: every adjacent ordered pair of values is one of the listed `allowed` pairs.
 * - divisors: every value is a nonzero integer divisor of the next.
 * - recurrence: each cell after the first two equals `a` times the cell two before plus `b` times the cell before.
 * A closed sequence also tests the last-to-first pair and needs at least three cells, otherwise it is false, as is any
 * transitions list holding an entry that is not a pair. A closed recurrence is rejected, as the case check rejects it. The pair modes are one explicit pair table for each adjacent pair, so a repeated
 * cell is read at each occurrence. The recurrence is one sum equation for each three consecutive cells, with whole-number
 * coefficients up to 1000 written as repeated occurrences; a one- or two-cell line has no such triple and holds. A coefficient that is
 * not a whole number of at most that size stays uncovered.
 */
export function lowerLocalSequence(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = instance.cells ?? [];
  const mode = p.mode;
  if (mode !== "transitions" && mode !== "divisors" && mode !== "recurrence") throw Error('Choose mode "transitions", "divisors" or "recurrence".');
  if (p.loop !== undefined && typeof p.loop !== "boolean") throw Error("loop must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const channel = p.channel === "V" ? "V" : "D", closed = p.loop === true, n = cells.length;
  for (const name of ["a", "b"]) if (p[name] !== undefined && (typeof p[name] !== "number" || !Number.isFinite(p[name]))) throw Error(`${name} must be a number.`);
  const allowed = p.allowed ?? [];
  if (!Array.isArray(allowed) || allowed.some(entry => !Array.isArray(entry) || entry.some(x => typeof x !== "number" || !Number.isFinite(x)))) throw Error("Supply allowed as a list of lists of numbers.");
  if (mode === "recurrence" && closed) throw Error("Recurrence mode requires loop false.");
  if (closed && n < 3) return none;
  if (mode === "recurrence") {
    const a = (p.a ?? 1) as number, b = (p.b ?? 1) as number;
    if (!Number.isInteger(a) || !Number.isInteger(b) || Math.abs(a) > maxCoefficient || Math.abs(b) > maxCoefficient) throw new UnsupportedSemantics(`A recurrence coefficient that is not a whole number of at most ${maxCoefficient} is not lowered; the whole instance remains uncovered.`);
    const times = (cell: Cell, count: number): Cell[] => Array<Cell>(Math.max(count, 0)).fill(cell);
    // c = a*x + b*y, with a negative term moved to the side of c.
    return all(cells.slice(0, Math.max(n - 2, 0)).map((x, i): Formula => {
      const y = cells[i + 1], c = cells[i + 2];
      return { op: "SumEqual", channel, left: [c, ...times(x, -a), ...times(y, -b)], right: [...times(x, a), ...times(y, b)] };
    }));
  }
  if (mode === "transitions" && (allowed as number[][]).some(entry => entry.length !== 2)) return none;
  const pairs: [Cell, Cell][] = [];
  for (let i = 0; i < n - 1; i++) pairs.push([cells[i], cells[i + 1]]);
  if (closed) pairs.push([cells[n - 1], cells[0]]);
  if (pairs.length * board.alphabet.length ** 2 > maxWork) throw new UnsupportedSemantics("Finite local-sequence expansion exceeds 1,000,000 value combinations for this declaration.");
  const test = mode === "divisors"
    ? (x: number, y: number) => x !== 0 && BigInt(y) % BigInt(x) === 0n
    : (x: number, y: number) => (allowed as number[][]).some(([from, to]) => from === x && to === y);
  return all(pairs.map(([a, b]) => ({ ...pair(board, a, b, test), channel }) as Formula));
}

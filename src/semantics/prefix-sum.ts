import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, sumTotal, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Channel, Formula } from "./types.js";

/** Most finite value combinations a prefix sum expansion may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };

/**
 * Prefix sum: the cells of the ray, read from the clue, up to the first stopping cell add up to the total on the stated channel. A
 * stopping cell is one that reads the `target` on the channel (`stop` "target"), holds a listed crust digit (`stop` "crust", always a
 * printed digit) or is a given of the board (`stop` "given"). The stopping cell is part of the prefix only when `include` is true, and
 * a ray with no stopping cell fails. An empty prefix totals zero.
 * The result is an exact disjunction over the position of the first stopping cell: the cells before it hold none of the stopping
 * values, it holds one of them, and the prefix adds up to the total. A target of `absent`, a target or crust list that no alphabet
 * digit meets, and a ray with no given make the rule false. A total that is not a whole number is never met. A ray that lists a cell
 * twice and a total that is not a safe integer are not lowered.
 */
export function lowerPrefixSum(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = instance.cells ?? [];
  if (p.stop !== "target" && p.stop !== "given" && p.stop !== "crust") throw Error('stop must be "target", "given" or "crust".');
  if (typeof p.total !== "number" || !Number.isFinite(p.total)) throw Error("The total must be a number.");
  if (p.include !== undefined && typeof p.include !== "boolean") throw Error("include must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  if (p.target !== undefined && (typeof p.target !== "number" || !Number.isFinite(p.target))) throw Error("target must be a number.");
  const crusts = p.crusts ?? [];
  if (!Array.isArray(crusts) || crusts.some(d => !Number.isSafeInteger(d))) throw Error("crusts must be a list of digits.");
  if (new Set(cells).size !== cells.length) throw new UnsupportedSemantics("A prefix sum that lists a cell more than once is not lowered; the whole instance remains uncovered.");
  if (Number.isInteger(p.total) && !Number.isSafeInteger(p.total)) throw new UnsupportedSemantics("A prefix sum total that is not a safe integer is not lowered; the whole instance remains uncovered.");
  const total = p.total, channel: Channel = p.channel === "V" ? "V" : "D", include = p.include === true, n = cells.length;
  if (n * (n * board.alphabet.length + 1) > maxWork) throw new UnsupportedSemantics("Finite prefix-sum expansion exceeds 1,000,000 value combinations for this declaration.");
  // The sum of the cells before the stop, and the stopping cell when included.
  const prefix = (stop: number): Formula => {
    const part = cells.slice(0, include ? stop + 1 : stop);
    if (!Number.isInteger(total)) return none;
    return part.length ? sumTotal(part, total, channel) : total === 0 ? all([]) : none;
  };
  if (p.stop === "given") {
    const stop = cells.findIndex(c => board.givens.some(g => g.cell === c));
    return stop < 0 ? none : prefix(stop);
  }
  // A crust is a printed digit, so its tests stay on D when the sum reads effective values.
  const testChannel: Channel = p.stop === "crust" ? "D" : channel;
  const stops = board.alphabet.filter(d => p.stop === "target" ? p.target !== undefined && d === p.target : (crusts as number[]).includes(d));
  const others = board.alphabet.filter(d => !stops.includes(d));
  const allowed = (cell: Cell, values: number[]): Formula => ({ op: "Allowed", channel: testChannel, cell, values });
  const branches: Formula[] = [];
  cells.forEach((cell, stop) => {
    if (!stops.length || (stop > 0 && !others.length)) return;
    branches.push(all([...cells.slice(0, stop).map(c => allowed(c, others)), allowed(cell, stops), prefix(stop)]));
  });
  return { op: "Any", children: branches };
}

import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import { sortedCells } from "./board.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/**
 * Double arrow: the line's values add up to the sum of the two end values, in the selected channel (D by default).
 * With `repeats` false the values of the ends and the line, taken together, must also differ (Distinct). The caller converts
 * channel V to D once the effective-value domain is resolved. Ends that are not two cells make the published relation
 * unsatisfiable; they, a repeated cell under `repeats` false, and a distinctness expansion past 1,000,000 combinations are not lowered.
 */
export function lowerDoubleArrow(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  if (p.repeats !== undefined && typeof p.repeats !== "boolean") throw Error("repeats must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const ends = p.ends;
  if (!Array.isArray(ends) || ends.some(c => !board.activeCells.includes(c as Cell))) throw Error("Supply ends as a list of active board cells.");
  const line = instance.cells ?? [];
  if (ends.length !== 2) throw new UnsupportedSemantics("A double arrow whose ends are not two cells is not lowered; the whole instance remains uncovered.");
  const channel = p.channel === "V" ? "V" : "D";
  const both = [...(ends as Cell[]), ...line];
  const sum: Formula = { op: "SumEqual", channel, left: [...line], right: [...(ends as Cell[])] };
  if (p.repeats !== false) return sum;
  if (new Set(both).size !== both.length) throw new UnsupportedSemantics("A double arrow with repeats false that lists a cell more than once is not lowered; the whole instance remains uncovered.");
  if (both.length * (both.length - 1) / 2 * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite pair expansion exceeds 1,000,000 value combinations for this declaration.");
  return all([{ op: "Distinct", channel, collection: "set", cells: sortedCells(both) }, sum]);
}

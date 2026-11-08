import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/** Most finite value combinations a permitted-totals expansion may charge. */
const maxWork = 1_000_000;

/**
 * Cage totals: the effective values of the cage cells (a set) add up to one of the listed totals. The result is an exact
 * disjunction of a sum over the cells for each listed total, read on the V channel; the caller converts V to D when the
 * effective-value domain is resolved and leaves the declaration uncovered when it is not. A total that is not a whole number
 * can never equal a sum of whole-number values, so it adds no case; the order and repeats of the list do not matter, and a
 * total no sum of alphabet digits can reach is dropped when the formula is canonicalised. Perfect Square Cages and Perfect Cube
 * Cages read as this rule with the same parameters.
 */
export function lowerCageTotals(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const raw = instance.parameters.totals;
  if (!Array.isArray(raw) || raw.some(t => typeof t !== "number" || !Number.isFinite(t))) throw Error("Supply the totals as a list of numbers.");
  const cells = sortedCells(instance.cells ?? []);
  const whole = [...new Set((raw as number[]).filter(t => Number.isInteger(t)))].sort((x, y) => x - y);
  if (whole.some(t => !Number.isSafeInteger(t))) throw new UnsupportedSemantics("A cage total that is not a safe integer is not lowered; the whole cage remains uncovered.");
  if (whole.length * cells.length > maxWork) throw new UnsupportedSemantics("Finite totals expansion exceeds 1,000,000 value combinations for this declaration.");
  return { op: "Any", children: whole.map((total): Formula => ({ op: "SumTotal", channel: "V", cells, total })) };
}

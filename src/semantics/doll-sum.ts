import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, sumTotal, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/** Most finite value combinations a doll sum expansion may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };

/**
 * Doll sum: for every listed total, some two positions of the cell list have printed digits that add up to it, and the printed digits
 * strictly between those positions add up to it as well. The total is therefore the endpoint sum and the interior sum together.
 * Each total is an exact disjunction over the pairs of positions i < j of the endpoint total and the interior total (an empty
 * interior totals zero), and the rule is the conjunction over the distinct totals; no totals hold. A total that is not a whole number
 * can never be met, so the rule is false. A cell list that repeats a cell and a total that is not a safe integer are not lowered. The
 * block this rule binds, selected stretch, is lowered only for this selection.
 */
export function lowerDollSum(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const cells = instance.cells ?? [], sums = instance.parameters.sums;
  if (!Array.isArray(sums) || sums.some(s => typeof s !== "number" || !Number.isFinite(s))) throw Error("Supply sums as a list of numbers.");
  if (new Set(cells).size !== cells.length) throw new UnsupportedSemantics("A doll sum that lists a cell more than once is not lowered; the whole instance remains uncovered.");
  const totals = [...new Set(sums as number[])].sort((a, b) => a - b);
  if (totals.some(s => Number.isInteger(s) && !Number.isSafeInteger(s))) throw new UnsupportedSemantics("A doll sum total that is not a safe integer is not lowered; the whole instance remains uncovered.");
  const n = cells.length;
  if (totals.length * n * n * (n + 1) / 2 > maxWork) throw new UnsupportedSemantics("Finite doll-sum expansion exceeds 1,000,000 value combinations for this declaration.");
  return all(totals.map((total): Formula => {
    if (!Number.isInteger(total)) return none;
    const pairs: Formula[] = [];
    for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) {
      const inner = cells.slice(i + 1, j);
      pairs.push(all([sumTotal([cells[i], cells[j]], total, "D"), inner.length ? sumTotal(inner, total, "D") : total === 0 ? all([]) : none]));
    }
    return { op: "Any", children: pairs };
  }));
}

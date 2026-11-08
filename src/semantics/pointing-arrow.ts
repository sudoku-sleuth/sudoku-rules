import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { lookupHit, type Lookup } from "./lookup-query.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/**
 * Pointing arrow: the clue cell's printed digit k is a one-based position along the ray, and the cell there stands in the stated
 * relation to a target. `greater` needs the cell there to exceed the clue digit, `less` to be below it, `source` to equal the
 * printed digit of the `source` cell, and `first-five` to hold 5 with no 5 earlier on the ray. A clue digit that is not a whole
 * number from 1 to the ray length names no cell, so the clue is not met; `source` without a source cell can never be met.
 * Each is one bounded lookup, an exact disjunction over the alphabet digits k, read on printed digits.
 */
export function lowerPointingArrow(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  if (typeof p.cell !== "string") throw Error("Supply the clue cell.");
  if (!Array.isArray(p.ray)) throw Error("Supply the ray.");
  const base = { cells: p.ray as Cell[], index: p.cell as Cell };
  let lookup: Lookup;
  switch (p.target) {
    case "greater": lookup = { ...base, target: base.index, test: (looked, target) => target < looked }; break;
    case "less": lookup = { ...base, target: base.index, test: (looked, target) => looked < target }; break;
    case "source":
      if (typeof p.source !== "string") return { op: "Any", children: [] };
      lookup = { ...base, target: p.source as Cell, test: (looked, target) => looked === target };
      break;
    case "first-five": lookup = { ...base, target: 5, test: (looked, target) => looked === target, firstMatch: true }; break;
    default: throw Error('Choose target "greater", "less", "source" or "first-five".');
  }
  return lookupHit(lookup, board);
}

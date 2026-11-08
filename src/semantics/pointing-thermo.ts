import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { lookupHit } from "./lookup-query.js";
import { all, pair } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/**
 * Pointing thermo: the printed digits strictly increase from the bulb (the first cell) to the tip (the last), and the tip digit k is
 * a one-based position along the ray whose cell holds the bulb digit. A tip digit that is not a whole number from 1 to the ray
 * length names no cell, so the clue is not met. The increase is one ordered pair table per adjacent pair of the line, and a cell
 * written twice in a row can never increase. The pointing is one bounded lookup, an exact disjunction over the alphabet digits k;
 * on a one-cell line the tip and the bulb are the same cell. Printed digits only.
 */
export function lowerPointingThermo(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const line = instance.cells ?? [];
  if (!Array.isArray(instance.parameters.ray)) throw Error("Supply the ray.");
  const rise: Formula[] = [];
  for (let i = 0; i + 1 < line.length; i++) {
    rise.push(line[i] === line[i + 1] ? { op: "Any", children: [] } : pair(board, line[i], line[i + 1], (a, b) => a < b));
  }
  const point = lookupHit({ cells: instance.parameters.ray as Cell[], index: line[line.length - 1], target: line[0], test: (looked, target) => looked === target }, board);
  return all([...rise, point]);
}

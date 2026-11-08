import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { exactCount } from "./counts.js";
import { semanticDeclaration } from "./declaration.js";
import { all } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/**
 * Look and say: each listed digit occurs exactly the stated number of times in the marked cells, on printed digits. Unlisted
 * digits are free and the clue adds no sum or distinctness. The cells are a set. A digit listed twice must meet both counts,
 * so two different counts for one digit cannot hold, and the order of the entries does not matter.
 */
export function lowerLookAndSay(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), raw = instance.parameters.counts;
  if (!Array.isArray(raw) || raw.some(e => !e || typeof e !== "object" || Array.isArray(e) || typeof e.digit !== "number" || typeof e.count !== "number" || !Number.isFinite(e.digit) || !Number.isFinite(e.count))) throw Error("Supply counts as records with a digit and a count.");
  const cells = sortedCells(instance.cells ?? []);
  return all((raw as { digit: number; count: number }[]).map(({ digit, count }) => exactCount(cells, digit, count, board.alphabet)));
}

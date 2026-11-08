import type { DeclarationAST } from "../declarations.js";
import { key, sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, sumTotal, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

const unsupported = (message: string) => new UnsupportedSemantics(`${message}; the whole instance remains uncovered.`);

/**
 * Cage expressions: every cage total (the printed digits of its cell set added up) equals its expression, with one whole number
 * for each letter shared by every expression, and different values for different letters when `distinct` is true.
 * Lowered when every expression is a single letter or a single number, which need no search for the letters' values:
 * - a cage stated as a number has that total (SumTotal); a number that is not a whole number is undefined, so the declaration is
 *   false;
 * - the cages stated with one letter have equal totals (SumEqual against the first of them, in cell order);
 * - with `distinct`, two letters differ when the first cages of the two letters have different totals (a negated SumEqual).
 * A cage is a set of cells, so a cell listed twice counts once. Letters are nonnegative whole numbers, so an alphabet with a
 * negative digit, where a total can be negative, stays uncovered, as does any expression built with +, -, *, / or ^. Printed digits only.
 */
export function lowerCageExpressions(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  if (typeof p.distinct !== "boolean") throw Error("distinct must be true or false (cage-expressions).");
  const raw = p.cages;
  if (!Array.isArray(raw)) throw Error("cages must be a list of records, each with cells and an expression.");
  const totals: Formula[] = [];
  const byLetter = new Map<string, Cell[][]>();
  let defined = true;
  for (const item of raw) {
    if (!item || typeof item !== "object" || Array.isArray(item)) throw Error("Each cage must be a record with cells and an expression.");
    const { cells: listed, expression } = item as { cells: unknown; expression: { op?: unknown; name?: unknown; value?: unknown } };
    if (!Array.isArray(listed) || listed.some(c => !board.activeCells.includes(c as Cell))) throw Error("The cells of each cage must be a list of active board cells.");
    const cells = sortedCells(listed as Cell[]);
    if (expression.op === "number") {
      if (typeof expression.value !== "number" || !Number.isFinite(expression.value)) throw Error("A number in an expression must be a finite number.");
      if (!Number.isInteger(expression.value)) defined = false;
      else if (!Number.isSafeInteger(expression.value)) throw unsupported("A number that is not a safe whole number is not lowered");
      else totals.push(sumTotal(cells, expression.value, "D"));
    } else if (expression.op === "letter") {
      if (typeof expression.name !== "string") throw Error("A letter in an expression needs a text name.");
      byLetter.set(expression.name, [...(byLetter.get(expression.name) ?? []), cells]);
    } else throw unsupported("An expression built with arithmetic operators is not lowered");
  }
  if (!defined) return { op: "Any", children: [] };
  if (byLetter.size && board.alphabet.some(d => d < 0)) throw unsupported("A letter on an alphabet with a negative digit is not lowered, since letters are nonnegative");
  const letters = [...byLetter.keys()].sort();
  const sets = letters.map(l => byLetter.get(l)!.sort((a, b) => key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0));
  const equal = (a: Cell[], b: Cell[]): Formula => ({ op: "SumEqual", channel: "D", left: a, right: b });
  const same = sets.flatMap(group => group.slice(1).map(cells => equal(group[0], cells)));
  const different = p.distinct ? sets.flatMap((a, i) => sets.slice(i + 1).map((b): Formula => ({ op: "Not", child: equal(a[0], b[0]) }))) : [];
  return all([...totals, ...same, ...different]);
}

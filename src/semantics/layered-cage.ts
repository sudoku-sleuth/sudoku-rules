import type { DeclarationAST } from "../declarations.js";
import { coordinates, sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/** Most finite value combinations a layered cage expansion may charge. */
const maxWork = 1_000_000;

/**
 * Layered cage: a cell is upper when its printed digit is in `upper`. Cells in one row are all upper or all lower, and every
 * row holding an upper cell lies above every row holding a lower one. The rule constrains each unordered pair of marked
 * cells alone: cells in one row have the same class; when the rows differ, the cell in the lower row (the larger row number)
 * may not be upper while the cell in the upper row is not. Each pair is a Pair table over the alphabet. Listed digits outside
 * the alphabet match nothing; the order and repetition of the list do not matter. A cell listed twice is one cell. Printed
 * digits only.
 */
export function lowerLayeredCage(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const upper = instance.parameters.upper;
  if (!Array.isArray(upper) || upper.some(d => !Number.isSafeInteger(d))) throw Error("Supply the upper digits as a list of whole numbers.");
  const cells = sortedCells(instance.cells ?? []);
  if (cells.length * (cells.length - 1) / 2 * board.alphabet.length ** 2 > maxWork) throw new UnsupportedSemantics("Finite pair expansion exceeds 1,000,000 value combinations for this declaration.");
  const isUpper = (d: number) => (upper as number[]).includes(d);
  const nodes: Formula[] = [];
  // Rows are compared as numbers: the string order of cell names puts r10c1 before r2c1, so list order says nothing about rows.
  cells.forEach((a, i) => cells.slice(i + 1).forEach(b => {
    const [ra] = coordinates(a), [rb] = coordinates(b);
    nodes.push(pair(board, a, b, (x, y) => {
      if (ra === rb) return isUpper(x) === isUpper(y);
      // The cell in the lower row (larger row number) may not be upper while the cell above is not.
      return ra < rb ? isUpper(x) || !isUpper(y) : isUpper(y) || !isUpper(x);
    }));
  }));
  return all(nodes);
}

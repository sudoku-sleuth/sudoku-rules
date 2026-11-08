import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { cellAt, coordinates } from "./board.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/**
 * A marked cell holds a one-based position k along an ordered line, and the cell at position k holds `value`. This is an exact
 * disjunction over the alphabet symbols k that can index the line (whole numbers from 1 to its length); a marked cell holding any
 * other symbol names no cell, and a `value` outside the alphabet can never be held. Both conditions are read on the printed digits.
 */
export function indexedPosition(marked: Cell, line: Cell[], value: number, board: CanonicalBoard): Formula {
  const only = (cell: Cell, held: number): Formula => ({ op: "Allowed", channel: "D", cell, values: [held] });
  if (!board.alphabet.includes(value)) return { op: "Any", children: [] };
  const positions = board.alphabet.filter(k => Number.isSafeInteger(k) && k >= 1 && k <= line.length);
  return { op: "Any", children: positions.map(k => all([only(marked, k), only(line[k - 1], value)])) };
}

/**
 * Numbered room: the first cell's printed digit k is a one-based position along the ordered cells, and the cell at position k holds
 * the stated digit. A first digit that is not a whole number from 1 to the length of the list names no cell, so the clue is not met.
 * The result is an exact disjunction over the alphabet symbols k that can index the list: the first cell holds k and cell k holds the
 * digit. For k = 1 both conditions fall on the first cell. A cell listed twice is read at each position, and a digit outside the
 * alphabet can never be held.
 */
export function lowerNumberedRoom(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = instance.cells ?? [];
  if (typeof p.digit !== "number" || !Number.isFinite(p.digit)) throw Error("The digit must be a number.");
  return indexedPosition(cells[0], cells, p.digit, board);
}

/**
 * Index: with axis "column", a marked cell in column k holding digit d means the cell at position d of its row holds k; with axis
 * "row", a marked cell in row k holding digit d means the cell at position d of its column holds k. Positions and the number k are
 * one-based. Each marked cell is the numbered-room case with its own row or column as the line and its column or row number as the
 * digit, and the declaration holds when every marked cell does. A position past the line or a number outside the alphabet is not
 * met; a marked cell may index itself. The line is the whole row or column of the board, so a line with an inactive cell stays
 * uncovered. The declaration is a set of cells, so a cell written twice counts once.
 */
export function lowerIndex(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  if (p.axis !== "row" && p.axis !== "column") throw Error('Choose axis "row" or "column".');
  const active = new Set(board.activeCells);
  const marked = [...new Set(instance.cells ?? [])].sort();
  const children = marked.map(cell => {
    const [row, col] = coordinates(cell);
    const line = p.axis === "column" ? Array.from({ length: board.cols }, (_, i) => cellAt(row, i + 1)) : Array.from({ length: board.rows }, (_, i) => cellAt(i + 1, col));
    if (line.some(c => !active.has(c))) throw new UnsupportedSemantics("An index line that crosses an inactive cell is not lowered; the whole instance remains uncovered.");
    return indexedPosition(cell, line, p.axis === "column" ? col : row, board);
  });
  return all(children);
}

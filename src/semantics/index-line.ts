import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { indexedPosition } from "./numbered-room.js";
import { all } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/**
 * Index line: a digit X in position N of the ordered line means the digit in position X is N. Each position N is the numbered-room
 * case on the whole line with N as the digit, and the declaration holds when every position does. A digit that is not a whole number
 * from 1 to the length of the line names no position, so the clue is not met. As the page requires, a line of fewer than 2 or more
 * than 16 cells, or one that repeats a cell, is invalid input. The result is exact on printed digits.
 */
export function lowerIndexLine(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const line = semanticDeclaration(ast).cells ?? [];
  if (new Set(line).size !== line.length) throw Error("An index line may not repeat a cell.");
  if (line.length < 2 || line.length > 16) throw Error("An index line needs 2 to 16 cells.");
  return all(line.map((cell, i) => indexedPosition(cell, line, i + 1, board)));
}

import type { DeclarationAST } from "../declarations.js";
import { cellAt } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/**
 * Window classes: every two-by-two window of the board contains a digit of every class of the stated class system.
 * Parity classes are the remainders 0 and 1 modulo 2, mod3 classes the remainders 0, 1 and 2 modulo 3 (remainders are never
 * negative), and entropy classes the equal thirds of the ordered alphabet, which needs an alphabet whose size is a positive
 * multiple of three. Classes come from the board's own alphabet.
 * The result is the conjunction, over every window and every class, of a disjunction over the window's cells of membership in the
 * class's digits. A class with no digit in the alphabet gives an empty disjunction. A window that holds an inactive cell is not
 * lowered, and a board with fewer than two rows or columns has no windows.
 */
export function lowerWindowClasses(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const { parameters: p } = semanticDeclaration(ast);
  if (p.classes !== "parity" && p.classes !== "mod3" && p.classes !== "entropy") throw Error("classes must be parity, mod3 or entropy.");
  const alphabet = board.alphabet;
  let classes: number[][];
  if (p.classes === "entropy") {
    if (alphabet.length % 3 !== 0) throw new UnsupportedSemantics("Entropy classes need an alphabet whose size is a multiple of three; the whole instance remains uncovered.");
    const third = alphabet.length / 3;
    classes = [0, 1, 2].map(k => alphabet.slice(k * third, (k + 1) * third));
  } else {
    const modulus = p.classes === "parity" ? 2 : 3;
    classes = Array.from({ length: modulus }, (_, k) => alphabet.filter(d => ((d % modulus) + modulus) % modulus === k));
  }
  const active = new Set(board.activeCells);
  const clauses: Formula[] = [];
  for (let r = 1; r < board.rows; r++) for (let c = 1; c < board.cols; c++) {
    const window = [cellAt(r, c), cellAt(r, c + 1), cellAt(r + 1, c), cellAt(r + 1, c + 1)];
    if (window.some(cell => !active.has(cell))) throw new UnsupportedSemantics("A two-by-two window that includes an inactive cell is not lowered; the whole instance remains uncovered.");
    for (const values of classes) clauses.push({ op: "Any", children: window.map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values })) });
  }
  return all(clauses);
}

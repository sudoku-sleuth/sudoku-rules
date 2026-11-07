import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, distinct, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Formula } from "./types.js";

/** Most finite value combinations an equality cage expansion may charge. */
const maxWork = 1_000_000;

/**
 * Equality cage: the digits of the cage differ, none is the middle value (|alphabet|+1)/2, and the number of low odd digits
 * equals the number of high even digits while the number of low even digits equals the number of high odd digits. A digit is low
 * when it is below the middle value and high when it is above it; the middle value is compared as a number, so an even alphabet
 * has none to forbid. Parity is numeric, so negative odd digits are odd and zero is even. Printed digits only.
 * The result is Distinct on the cells and an exact disjunction over the assignments of one of the four classes to every cell with
 * balanced counts, each restricting every cell to its class. A cage of odd size cannot balance and lowers to an empty disjunction.
 */
export function lowerEqualityCage(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const cells = instance.cells ?? [];
  const n = cells.length;
  if (new Set(cells).size !== n) throw new UnsupportedSemantics("An equality cage that lists a cell more than once is not lowered; the whole instance remains uncovered.");
  const sorted = [...cells].sort();
  const twiceMiddle = board.alphabet.length + 1;
  const odd = (d: number) => Math.abs(d % 2) === 1;
  const lowOdd = board.alphabet.filter(d => 2 * d < twiceMiddle && odd(d));
  const highEven = board.alphabet.filter(d => 2 * d > twiceMiddle && !odd(d));
  const lowEven = board.alphabet.filter(d => 2 * d < twiceMiddle && !odd(d));
  const highOdd = board.alphabet.filter(d => 2 * d > twiceMiddle && odd(d));
  const none: Formula = { op: "Any", children: [] };
  if (n % 2 === 1) return none;
  // Class vectors with a low odd and a high even cells, b low even and b high odd cells: n!/(a!a!b!b!) of them.
  const factorial = (k: number) => { let f = 1; for (let i = 2; i <= k; i++) f *= i; return f; };
  let vectors = 0;
  for (let a = 0; 2 * a <= n; a++) {
    const b = (n - 2 * a) / 2;
    vectors += factorial(n) / (factorial(a) ** 2 * factorial(b) ** 2);
    if (vectors * n * board.alphabet.length > maxWork) throw new UnsupportedSemantics("Finite equality cage expansion exceeds 1,000,000 value combinations for this declaration.");
  }
  const classes = [lowOdd, highEven, lowEven, highOdd];
  const branches: Formula[] = [];
  const assign = (index: number, picked: number[]) => {
    if (index === n) {
      const count = (k: number) => picked.filter(x => x === k).length;
      if (count(0) === count(1) && count(2) === count(3)) branches.push(all(picked.map((k, i): Formula => ({ op: "Allowed", channel: "D", cell: sorted[i], values: classes[k] }))));
      return;
    }
    for (let k = 0; k < 4; k++) if (classes[k].length) assign(index + 1, [...picked, k]);
  };
  assign(0, []);
  return all([distinct(sorted), { op: "Any", children: branches }]);
}

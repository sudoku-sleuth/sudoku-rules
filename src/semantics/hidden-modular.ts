import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations a hidden-modular expansion may charge. */
const maxWork = 1_000_000;
/** Most cell constraints the spans of one declaration may write. */
const maxAtoms = 200_000;
const mod3 = (d: number) => ((d % 3) + 3) % 3;

/**
 * Hidden modular, on printed digits. The span of the listed cells (positions a to b, counted as listed) is chosen by the clue:
 * `to-max` runs from the first cell to the first occurrence of the largest alphabet symbol, `between-ends` between the first
 * occurrences of the smallest and largest alphabet symbols, and `first-x` over as many cells as the first cell's digit says.
 * An end that never occurs, or a first digit outside 1 to the number of cells, selects no span, so nothing holds. Every three
 * consecutive cells of the span then have three different remainders modulo 3. The span follows from the digits, so the result
 * is an exact disjunction over where the span ends (for between-ends, over where both ends first occur), each case fixing those
 * cells to their end digits, the earlier cells to anything else, and the triples to different remainders.
 */
export function lowerHiddenModular(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), extent = instance.parameters.extent;
  if (extent !== "to-max" && extent !== "between-ends" && extent !== "first-x") throw Error('Choose extent "to-max", "between-ends" or "first-x".');
  const cells = instance.cells ?? [];
  const n = cells.length, alphabet = board.alphabet;
  const low = alphabet[0], high = alphabet[alphabet.length - 1];
  const spans = extent === "between-ends" ? n * n : n;
  if (spans * (n + 1) > maxAtoms) throw new UnsupportedSemantics("A hidden-modular list with more than 200,000 span cells is not lowered; the whole instance remains uncovered.");
  let work = 0;
  const triples = new Map<string, Formula>();
  /** Three consecutive cells starting at s have three different remainders modulo 3. */
  const triple = (s: number): Formula => {
    // Every use of a triple is written out again in the normal form, so every use is charged.
    work += 3 * alphabet.length ** 2;
    if (work > maxWork) throw new UnsupportedSemantics("Finite hidden-modular expansion exceeds 1,000,000 value combinations for this declaration.");
    const hit = triples.get(String(s));
    if (hit) return hit;
    const [x, y, z] = [cells[s], cells[s + 1], cells[s + 2]];
    const made = all([[x, y], [x, z], [y, z]].map(([p, q]) => pair(board, p, q, (u, v) => mod3(u) !== mod3(v))));
    triples.set(String(s), made);
    return made;
  };
  const span = (a: number, b: number): Formula[] => Array.from({ length: Math.max(0, b - 1 - a) }, (_, k) => triple(a + k));
  const allowed = (cell: Cell, values: number[]): Formula => ({ op: "Allowed", channel: "D", cell, values });
  /** The first occurrence of `digit` is at position i. */
  const first = (digit: number, i: number): Formula[] => [allowed(cells[i], [digit]), ...cells.slice(0, i).map(c => allowed(c, alphabet.filter(d => d !== digit)))];
  const branches: Formula[] = [];
  if (extent === "to-max") for (let b = 0; b < n; b++) branches.push(all([...first(high, b), ...span(0, b)]));
  else if (extent === "first-x") for (const x of alphabet) {
    if (Number.isInteger(x) && x >= 1 && x <= n) branches.push(all([allowed(cells[0], [x]), ...span(0, x - 1)]));
  } else for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    // One digit has one first occurrence; two different end digits cannot first occur at one place.
    if ((low === high) !== (i === j)) continue;
    branches.push(all([...first(low, i), ...(i === j ? [] : first(high, j)), ...span(Math.min(i, j), Math.max(i, j))]));
  }
  return { op: "Any", children: branches };
}

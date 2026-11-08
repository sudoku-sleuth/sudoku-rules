import type { DeclarationAST } from "../declarations.js";
import { cellAt, coordinates } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Channel, Formula } from "./types.js";

/** Most finite value combinations a mirrored-pairs expansion may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };
const gap = (x: number, y: number): bigint => BigInt(x) > BigInt(y) ? BigInt(x) - BigInt(y) : BigInt(y) - BigInt(x);

/** The block's parameters as the formula reads them. */
interface Mirrored {
  geometry: "line" | "rotation"; mode: "equal" | "equal-sum" | "allowed-sum" | "equal-difference";
  channel: Channel; sums: number[]; centre: "when-odd" | "ignore" | "required";
}

/**
 * Mirrored pairs: opposite positions of a line, or opposite cells of the half-turned board, are compared on the stated channel.
 * - equal: paired values are equal.
 * - equal-sum: every pair of the line has one common sum.
 * - allowed-sum: every pair's sum is one of `sums`.
 * - equal-difference: on a line with an odd number of cells, every pair's absolute difference is the value of the centre cell.
 * On a line of n cells, position i pairs with position n-1-i for i below n/2; the centre of an odd line pairs with itself. A centre of
 * `required` is false for an even line, and a centre of `required` or `when-odd` makes each pair's sum on an odd line equal the centre
 * value; both apply to the two sum modes only, and `ignore` leaves the centre free. Equal-difference is false for a half-turned board,
 * an even line and an empty line. On the board, a cell pairs with the cell at the half-turned position (row r and column c pair with
 * rows+1-r and cols+1-c); the centre cell of an odd-by-odd board pairs with itself, so allowed-sum limits it to the values whose double
 * is a listed sum. A board with an active cell whose half-turned partner is inactive is not lowered. Cells are read at each occurrence.
 */
export function lowerMirroredPairs(m: Mirrored, line: Cell[], board: CanonicalBoard): Formula {
  const { alphabet } = board, { channel } = m;
  let work = 0;
  const charge = (n: number) => { work += n; if (work > maxWork) throw new UnsupportedSemantics("Finite mirrored-pairs expansion exceeds 1,000,000 value combinations for this declaration."); };
  const edge = (a: Cell, b: Cell, test: (x: number, y: number) => boolean): Formula => {
    charge(alphabet.length ** 2);
    return { ...pair(board, a, b, test), channel } as Formula;
  };
  const listed = new Set(m.sums.filter(Number.isInteger).map(s => BigInt(s)));
  const total = (x: number, y: number) => listed.has(BigInt(x) + BigInt(y));
  if (m.geometry === "rotation") {
    if (m.mode === "equal-difference") return none;
    const active = new Set(board.activeCells);
    const nodes: Formula[] = [];
    for (const cell of board.activeCells) {
      const [r, c] = coordinates(cell);
      const partner = cellAt(board.rows + 1 - r, board.cols + 1 - c);
      if (!active.has(partner)) throw new UnsupportedSemantics("A half-turn partner that is an inactive cell is not lowered; the whole instance remains uncovered.");
      if (cell < partner) nodes.push(edge(cell, partner, m.mode === "equal" ? (x, y) => x === y : total));
      else if (cell === partner && m.mode !== "equal") nodes.push({ op: "Allowed", channel, cell, values: alphabet.filter(x => total(x, x)) });
    }
    return all(nodes);
  }
  const n = line.length, half = Math.floor(n / 2), odd = n % 2 === 1;
  const pairs = Array.from({ length: half }, (_, i): [Cell, Cell] => [line[i], line[n - 1 - i]]);
  if (m.mode === "equal-difference") {
    if (!odd) return none;
    const centre = line[half];
    const differences = [...new Set(alphabet.flatMap(x => alphabet.map(y => gap(x, y))))].sort((x, y) => x < y ? -1 : x > y ? 1 : 0);
    if (!pairs.length) return all([]);
    return { op: "Any", children: differences.map(d => all([
      { op: "Allowed", channel, cell: centre, values: alphabet.filter(v => BigInt(v) === d) },
      ...pairs.map(([a, b]) => edge(a, b, (x, y) => gap(x, y) === d)),
    ])) };
  }
  if (m.mode === "equal") return all(pairs.map(([a, b]) => edge(a, b, (x, y) => x === y)));
  const sumOf = ([a, b]: [Cell, Cell]): Cell[] => [a, b];
  return all([
    ...(m.mode === "equal-sum" ? pairs.slice(1).map((p): Formula => ({ op: "SumEqual", channel, left: sumOf(pairs[0]), right: sumOf(p) })) : pairs.map(([a, b]) => edge(a, b, total))),
    ...(m.centre === "required" && !odd ? [none] : []),
    ...(m.centre !== "ignore" && odd ? pairs.map((p): Formula => ({ op: "SumEqual", channel, left: sumOf(p), right: [line[half]] })) : []),
  ]);
}

/** Read the mirrored-pairs block, or one of its named rules (rotational sums, ziffer lines) with the block's parameters bound. */
export function lowerMirroredPairsDeclaration(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const line = instance.cells ?? [];
  const bound = instance.kind === "rotational-sums" ? { geometry: "rotation", mode: "allowed-sum", channel: "D", centre: "ignore", sums: p.sums }
    : instance.kind === "ziffer-lines" ? { geometry: "line", mode: "equal-difference", channel: "D", centre: "required", sums: [] }
    : { geometry: p.geometry ?? "line", mode: p.mode ?? "equal", channel: p.channel ?? "D", centre: p.centre ?? "ignore", sums: p.sums ?? [] };
  if (bound.geometry !== "line" && bound.geometry !== "rotation") throw Error('Choose geometry "line" or "rotation".');
  if (!["equal", "equal-sum", "allowed-sum", "equal-difference"].includes(bound.mode as string)) throw Error("Choose a mode: equal, equal-sum, allowed-sum or equal-difference.");
  if (bound.channel !== "D" && bound.channel !== "V") throw Error('Choose channel "D" or "V".');
  if (!["when-odd", "ignore", "required"].includes(bound.centre as string)) throw Error('centre must be "when-odd", "ignore" or "required".');
  if (!Array.isArray(bound.sums) || bound.sums.some(s => typeof s !== "number" || !Number.isFinite(s))) throw Error("Supply sums as a list of numbers.");
  return lowerMirroredPairs(bound as unknown as Mirrored, line, board);
}

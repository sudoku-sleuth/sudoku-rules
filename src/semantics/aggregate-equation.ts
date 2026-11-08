import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, sumTotal, UnsupportedSemantics } from "./primitives.js";
import { holds, relation, type Relation } from "./relations.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most disjuncts an aggregate comparison may expand to. */
const maxBranches = 20_000;
/** Most value combinations an enumeration may examine before it is abandoned. */
const maxWork = 1_000_000;
/** Most occurrences a weighted equation may repeat a cell. */
const maxOccurrences = 10_000;

type Operation = "sum" | "product" | "count";
interface Operand { cells: Cell[]; operation: Operation; repeats: boolean; start?: number; length?: number }
interface Weighted { operand: Operand; coefficient: number; power: number }
/** The block's parameters, with every default filled in. */
export interface Equation { left: Weighted[]; right: Weighted[]; leftOperation: "sum" | "product"; rightOperation: "sum" | "product"; relation: Relation }

/** A side's value: a whole-number combination of cell digits, or a coefficient times a product of distinct cell digits, each plus a constant. */
type Value = { kind: "affine"; weights: Map<Cell, number>; constant: number } | { kind: "product"; coefficient: number; cells: Cell[]; constant: number };
const none: Formula = { op: "Any", children: [] };
const unsupported = (message: string) => new UnsupportedSemantics(`${message}; the whole instance remains uncovered.`);
function safe(n: number, what: string): number {
  if (!Number.isSafeInteger(n)) throw unsupported(`${what} that leaves the safe whole numbers is not lowered`);
  return n;
}
function wholeNumber(raw: unknown, what: string): number {
  if (typeof raw !== "number" || !Number.isFinite(raw)) throw Error(`The ${what} must be a number.`);
  if (!Number.isInteger(raw)) throw unsupported(`A ${what} that is not a whole number is not lowered`);
  return safe(raw, `A ${what}`);
}
function readOperand(raw: unknown, board: CanonicalBoard): Operand {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw Error("Supply each operand as a record.");
  const o = raw as Record<string, unknown>;
  if (!Array.isArray(o.cells) || o.cells.some(c => !board.activeCells.includes(c as Cell))) throw Error("Supply operand cells as active board cells.");
  if (o.channel !== "D" && o.channel !== "V") throw Error('Choose channel "D" or "V".');
  if (o.channel === "V") throw unsupported("The V channel of an aggregate operand is not lowered");
  if (typeof o.operation !== "string" || !["sum", "product", "count", "decimal"].includes(o.operation)) throw Error("Choose an operand operation.");
  if (o.operation === "decimal") throw unsupported("A decimal operand is not lowered");
  if (typeof o.repeats !== "boolean") throw Error("repeats must be true or false.");
  for (const field of ["stop", "target", "crusts", "include"]) if (o[field] !== undefined) throw unsupported(`The ${field} field of an aggregate operand (a stopping prefix) is not lowered`);
  for (const field of ["start", "length"]) if (o[field] !== undefined && !Number.isSafeInteger(o[field])) throw Error(`The ${field} of an operand must be a whole number.`);
  return { cells: o.cells as Cell[], operation: o.operation as Operation, repeats: o.repeats, ...(o.start !== undefined ? { start: o.start as number } : {}), ...(o.length !== undefined ? { length: o.length as number } : {}) };
}
function readTerms(raw: unknown, board: CanonicalBoard): Weighted[] {
  if (!Array.isArray(raw)) throw Error("Supply a list of weighted operands.");
  return raw.map(item => {
    if (!item || typeof item !== "object" || Array.isArray(item)) throw Error("Supply each term as a record.");
    const t = item as Record<string, unknown>;
    if (!Number.isSafeInteger(t.power) || (t.power as number) < 0) throw Error("The power of a term must be a nonnegative whole number.");
    return { operand: readOperand(t.operand, board), coefficient: wholeNumber(t.coefficient, "coefficient"), power: t.power as number };
  });
}
function readOperation(raw: unknown): "sum" | "product" {
  if (raw === undefined) return "sum";
  if (raw !== "sum" && raw !== "product") throw Error('Choose operation "sum" or "product".');
  return raw;
}
export function readEquation(p: Record<string, unknown>, board: CanonicalBoard): Equation {
  return { left: readTerms(p.left, board), right: readTerms(p.right, board), leftOperation: readOperation(p.leftOperation), rightOperation: readOperation(p.rightOperation), relation: relation(p.relation ?? { op: "difference", value: 0 }) };
}

/** The cells an operand reads, or undefined when its slice runs outside the list. */
function slice(o: Operand): Cell[] | undefined {
  const start = o.start ?? 0, length = o.length ?? o.cells.length - start;
  return start < 0 || length < 0 || start + length > o.cells.length ? undefined : o.cells.slice(start, start + length);
}
const constant = (k: number): Value => ({ kind: "affine", weights: new Map(), constant: safe(k, "A value") });
const isConstant = (v: Value): boolean => v.kind === "affine" && v.weights.size === 0;
const affine = (cells: Cell[], coefficient: number): Value => {
  const weights = new Map<Cell, number>();
  for (const c of cells) weights.set(c, safe((weights.get(c) ?? 0) + coefficient, "A weight"));
  for (const [c, w] of weights) if (w === 0) weights.delete(c);
  return { kind: "affine", weights, constant: 0 };
};
/** coefficient * aggregate^power for one term. A power of zero gives the coefficient, as the constant operand in the block's definition needs. */
function termValue(t: Weighted, cells: Cell[]): Value {
  const { coefficient: c, power } = t;
  if (power === 0) return constant(c);
  const { operation } = t.operand;
  const n = cells.length;
  if (operation === "count") return constant(c * safe(n ** power, "A power"));
  if (n === 0) return constant(operation === "sum" ? 0 : c);
  if (n === 1 || operation === "sum") {
    if (power !== 1) throw unsupported("A power above one of an aggregate that varies is not lowered");
    return affine(cells, c);
  }
  if (power !== 1) throw unsupported("A power above one of an aggregate that varies is not lowered");
  return { kind: "product", coefficient: c, cells, constant: 0 };
}
function add(a: Value, b: Value): Value {
  if (isConstant(a)) return { ...b, constant: safe(a.constant + b.constant, "A value") };
  if (isConstant(b)) return add(b, a);
  if (a.kind === "product" || b.kind === "product") throw unsupported("A product operand beside another varying term is not lowered");
  const weights = new Map(a.weights);
  for (const [c, w] of b.weights) { const n = safe((weights.get(c) ?? 0) + w, "A weight"); if (n) weights.set(c, n); else weights.delete(c); }
  return { kind: "affine", weights, constant: safe(a.constant + b.constant, "A value") };
}
function scale(v: Value, factor: number): Value {
  if (v.kind === "product") return { ...v, coefficient: safe(v.coefficient * factor, "A coefficient"), constant: safe(v.constant * factor, "A value") };
  if (factor === 0) return constant(0);
  return { kind: "affine", weights: new Map([...v.weights].map(([c, w]) => [c, safe(w * factor, "A weight")])), constant: safe(v.constant * factor, "A value") };
}
function multiply(a: Value, b: Value): Value {
  if (isConstant(a)) return scale(b, a.constant);
  if (isConstant(b)) return scale(a, b.constant);
  throw unsupported("A product of two varying terms is not lowered");
}
function sideValue(terms: Weighted[], operation: "sum" | "product", cellsOf: Map<Weighted, Cell[]>): Value {
  let value: Value = constant(operation === "sum" ? 0 : 1);
  for (const t of terms) value = (operation === "sum" ? add : multiply)(value, termValue(t, cellsOf.get(t)!));
  return value;
}

/** Sums that n distinct cells can take together, each with the cells' digits drawn from the alphabet. */
function reachableSums(n: number, board: CanonicalBoard): number[] {
  let sums = new Set<number>([0]);
  for (let i = 0; i < n; i++) {
    const next = new Set<number>();
    for (const s of sums) for (const d of board.alphabet) next.add(s + d);
    if (next.size * board.alphabet.length > maxWork) throw unsupported("Finite sum expansion exceeds 1,000,000 value combinations");
    sums = next;
  }
  return [...sums].sort((a, b) => a - b);
}
interface Entry { value: number; condition: Formula }
/** Every value a side can take, each with the formula that fixes it. Undefined when the side is not a constant or a multiple of one sum. */
function entries(v: Value, board: CanonicalBoard): Entry[] | undefined {
  if (v.kind === "product") return undefined;
  if (isConstant(v)) return [{ value: v.constant, condition: all([]) }];
  const weights = [...v.weights.values()];
  if (weights.some(w => w !== weights[0])) return undefined;
  const cells = sortedCells([...v.weights.keys()]);
  return reachableSums(cells.length, board).map(s => ({ value: safe(weights[0] * s + v.constant, "A value"), condition: sumTotal(cells, s, "D") }));
}
function disjunction(pairs: Iterable<[Entry, Entry]>, test: (a: number, b: number) => boolean): Formula {
  const branches: Formula[] = [];
  let work = 0;
  for (const [a, b] of pairs) {
    if (++work > maxWork) throw unsupported("Finite comparison expansion exceeds 1,000,000 value combinations");
    if (!test(a.value, b.value)) continue;
    if (branches.length >= maxBranches) throw unsupported("A comparison with more than 20,000 cases is not lowered");
    branches.push(all([a.condition, b.condition]));
  }
  return { op: "Any", children: branches };
}
function* cross<T, U>(a: T[], b: U[]): Generator<[T, U]> { for (const x of a) for (const y of b) yield [x, y]; }

/** Weighted cells with a constant: sum of w*cell = k. */
function linearEquation(weights: Map<Cell, number>, k: number, board: CanonicalBoard): Formula {
  const net = [...weights].sort(([a], [b]) => a < b ? -1 : 1);
  if (!net.length) return k === 0 ? all([]) : none;
  if (net.reduce((n, [, w]) => n + Math.abs(w), 0) > maxOccurrences) throw unsupported("An equation that repeats cells more than 10,000 times is not lowered");
  if (k === 0) return { op: "SumEqual", channel: "D", left: net.flatMap(([c, w]) => w > 0 ? Array<Cell>(w).fill(c) : []), right: net.flatMap(([c, w]) => w < 0 ? Array<Cell>(-w).fill(c) : []) };
  const first = net[0][1];
  if (net.every(([, w]) => w === first)) return k % first === 0 ? sumTotal(net.map(([c]) => c), k / first, "D") : none;
  if (net.every(([, w]) => Math.abs(w) === 1)) {
    const positive = net.filter(([, w]) => w > 0).map(([c]) => c), negative = net.filter(([, w]) => w < 0).map(([c]) => c);
    const sum = (cells: Cell[]): Entry[] => reachableSums(cells.length, board).map(value => ({ value, condition: sumTotal(cells, value, "D") }));
    return disjunction(cross(sum(positive), sum(negative)), (p, n) => p - n === k);
  }
  throw unsupported("Weighted cells with differing weights beside a nonzero constant are not lowered");
}
/** coefficient * product of the distinct cells' digits + constant = target. */
function productEquation(v: Value & { kind: "product" }, target: number, board: CanonicalBoard): Formula {
  const rest = target - v.constant;
  if (v.coefficient === 0) return rest === 0 ? all([]) : none;
  if (rest % v.coefficient !== 0) return none;
  const want = BigInt(rest / v.coefficient);
  const cells = v.cells;
  if (new Set(cells).size !== cells.length) throw unsupported("A product operand that lists a cell more than once is not lowered");
  if (want === 0n) return { op: "Any", children: board.alphabet.includes(0) ? cells.map((cell): Formula => ({ op: "Allowed", channel: "D", cell, values: [0] })) : [] };
  const branches: Formula[] = [];
  const chosen: number[] = [];
  let work = 0;
  const walk = (i: number, product: bigint) => {
    if (++work > maxWork) throw unsupported("Finite product expansion exceeds 1,000,000 value combinations");
    if (i === cells.length) {
      if (product !== want) return;
      if (branches.length >= maxBranches) throw unsupported("A product with more than 20,000 cases is not lowered");
      branches.push(all(cells.map((cell, k): Formula => ({ op: "Allowed", channel: "D", cell, values: [chosen[k]] }))));
      return;
    }
    for (const d of board.alphabet) {
      const next = product * BigInt(d);
      // Every digit is a whole number, so a partial product that does not divide the target can never reach it.
      if (next === 0n || want % next !== 0n) continue;
      chosen[i] = d;
      walk(i + 1, next);
    }
  };
  walk(0, 1n);
  return { op: "Any", children: branches };
}
const isEqual = (r: Relation) => r.op === "difference" && r.value === 0;

/**
 * Aggregate equation: two expressions over aggregates of cell digits are compared. Each side sums or multiplies its terms; a
 * term is a whole-number coefficient times an aggregate (sum, product or count of an operand's cells, after an optional
 * start and length slice) raised to a nonnegative power, and a power of zero leaves the coefficient. Printed digits only.
 * Every operand must be valid: a slice that leaves its list, or a repeats-false operand whose digits are not all different,
 * makes the declaration false. The comparison is then lowered by what the two sides are:
 * - sums and constants with the equal relation become one linear equation (SumEqual, or SumTotal beside a constant);
 * - other relations enumerate the values of each side as a multiple of one sum or a constant, an exact disjunction of the
 *   related pairs, each branch fixing the sums with SumTotal;
 * - a coefficient times a product of distinct cells against a constant enumerates the digit assignments with that product.
 * Everything else stays uncovered with a typed reason.
 */
export function lowerEquation(e: Equation, board: CanonicalBoard): Formula {
  const cellsOf = new Map<Weighted, Cell[]>();
  const valid: Formula[] = [];
  for (const t of [...e.left, ...e.right]) {
    const cells = slice(t.operand);
    if (!cells) return none;
    cellsOf.set(t, cells);
    if (!t.operand.repeats && cells.length > 1) valid.push({ op: "Distinct", channel: "D", collection: "list", cells });
  }
  const left = sideValue(e.left, e.leftOperation, cellsOf), right = sideValue(e.right, e.rightOperation, cellsOf);
  const r = e.relation;
  let comparison: Formula;
  if (r.op === "shift") throw unsupported("The shift relation on aggregate values is not lowered");
  if (isEqual(r)) {
    if (left.kind === "affine" && right.kind === "affine") {
      const net = new Map(left.weights);
      for (const [c, w] of right.weights) { const n = safe((net.get(c) ?? 0) - w, "A weight"); if (n) net.set(c, n); else net.delete(c); }
      comparison = linearEquation(net, right.constant - left.constant, board);
    } else if (left.kind === "product" && isConstant(right)) comparison = productEquation(left, right.constant, board);
    else if (right.kind === "product" && isConstant(left)) comparison = productEquation(right, left.constant, board);
    else throw unsupported("A product operand compared with a varying expression is not lowered");
  } else {
    const a = entries(left, board), b = entries(right, board);
    if (!a || !b) throw unsupported("A relation other than equality between expressions that are not a constant or a multiple of one sum is not lowered");
    comparison = disjunction(cross(a, b), (x, y) => holds(r, x, y));
  }
  return all([...valid, comparison]);
}

/** Aggregate equation, written out. */
export function lowerAggregateEquation(ast: DeclarationAST, board: CanonicalBoard): Formula {
  return lowerEquation(readEquation(semanticDeclaration(ast).parameters, board), board);
}
const term = (cells: Cell[], operation: Operation, repeats: boolean, coefficient: number, power: number): Weighted => ({ operand: { cells, operation, repeats }, coefficient, power });
/**
 * Product cage binds the block with one product operand on the left and the product as a constant on the right: the digits
 * multiply to the product, and differ when `distinct`. The cells are a set.
 */
export function lowerProductCage(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const { product, distinct } = instance.parameters;
  if (typeof distinct !== "boolean") throw Error("distinct must be true or false.");
  return lowerEquation({
    left: [term(sortedCells(instance.cells ?? []), "product", !distinct, 1, 1)], right: [term([], "count", true, wholeNumber(product, "product"), 0)],
    leftOperation: "sum", rightOperation: "sum", relation: { op: "difference", value: 0 },
  }, board);
}
/**
 * Cage pair binds the block with the sums of the two cages (sets) on either side, repeats allowed. Any other number of cages
 * binds empty sums and the impossible difference of minus one, so the declaration is false.
 */
export function lowerCagePair(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const { cages, relation: raw } = semanticDeclaration(ast).parameters;
  if (!Array.isArray(cages) || cages.some(c => !Array.isArray(c) || c.some(x => !board.activeCells.includes(x as Cell)))) throw Error("Supply cages as lists of active board cells.");
  const two = cages.length === 2;
  const sets = two ? (cages as Cell[][]).map(sortedCells) : [[], []];
  return lowerEquation({
    left: [term(sets[0], "sum", true, 1, 1)], right: [term(sets[1], "sum", true, 1, 1)],
    leftOperation: "sum", rightOperation: "sum", relation: two ? relation(raw) : { op: "difference", value: -1 },
  }, board);
}

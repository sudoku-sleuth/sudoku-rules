import type { DeclarationAST } from "../declarations.js";
import { cellOrder, sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, distinct, sumTotal, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most sums or digit readings of one operand that are enumerated. */
const maxReadings = 100_000;
/** Most terms of the pairwise difference constraints between operands. */
const maxDifferences = 20_000;
const none: Formula = { op: "Any", children: [] };
const properties = ["prime", "composite", "power", "divisible", "places"];

interface Operand { cells: Cell[]; operation: "sum" | "decimal"; repeats: boolean }
/** One way an operand can read: the number it gives and the constraint on its cells that produces it. */
interface Branch { value: bigint; formula: Formula; reversed?: bigint }

/** Deterministic Miller–Rabin: the first thirteen primes as bases decide every integer below 3,317,044,064,679,887,385,961,981. */
const primeBases = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n];
const largestPrime = 3_317_044_064_679_887_385_961_980n;
export const isPrime = (n: bigint): boolean => {
  if (n < 2n) return false;
  for (const p of primeBases) if (n % p === 0n) return n === p;
  if (n > largestPrime) throw new UnsupportedSemantics("A number above 3.3 * 10^24 is not tested for primality; the whole instance remains uncovered.");
  let d = n - 1n, s = 0;
  while (d % 2n === 0n) { d /= 2n; s++; }
  const power = (base: bigint, exponent: bigint): bigint => { let result = 1n; for (base %= n; exponent; exponent /= 2n, base = base * base % n) if (exponent % 2n) result = result * base % n; return result; };
  for (const a of primeBases) {
    let x = power(a, d);
    if (x === 1n || x === n - 1n) continue;
    let passed = false;
    for (let r = 1; r < s; r++) { x = x * x % n; if (x === n - 1n) { passed = true; break; } }
    if (!passed) return false;
  }
  return true;
};
/** Whether n is the k-th power of a nonnegative integer, by exact integer search for the root. */
const root = (n: bigint, k: number): boolean => {
  if (n < 0n) return false;
  // The root has at most ceil(bits / k) bits.
  let low = 0n, high = 1n << BigInt(Math.ceil(n.toString(2).length / k));
  while (low < high) {
    const mid = (low + high) / 2n;
    if (mid ** BigInt(k) < n) low = mid + 1n; else high = mid;
  }
  return low ** BigInt(k) === n;
};
/** The numeric property of an integer. `argument` is a whole number whenever the property reads it. */
function hasProperty(n: bigint, property: string, argument: number): boolean {
  switch (property) {
    case "prime": return isPrime(n);
    case "composite": return n > 1n && !isPrime(n);
    case "power": return argument >= 1 && root(n, argument);
    case "divisible": return Number.isInteger(argument) && argument !== 0 && n % BigInt(argument) === 0n;
    default: return argument >= 1 && n >= 0n && (argument === 1 || n >= 10n ** BigInt(argument - 1)) && n < 10n ** BigInt(argument);
  }
}

function operandOf(raw: unknown, board: CanonicalBoard): Operand | undefined {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw Error("Supply an aggregate operand record.");
  const o = raw as Record<string, unknown>;
  if (!Array.isArray(o.cells) || o.cells.some(c => typeof c !== "string")) throw Error("Supply the operand cells as a list of cells.");
  if (o.channel !== "D") throw new UnsupportedSemantics("An operand that reads effective values is not lowered; the whole instance remains uncovered.");
  if (o.operation !== "sum" && o.operation !== "decimal") throw new UnsupportedSemantics("An operand that is a product or a count is not lowered; the whole instance remains uncovered.");
  if (typeof o.repeats !== "boolean") throw Error("repeats must be true or false.");
  if (o.stop !== undefined) throw new UnsupportedSemantics("An operand with an answer-dependent stopping prefix is not lowered; the whole instance remains uncovered.");
  for (const field of ["start", "length"]) if (o[field] !== undefined && !Number.isSafeInteger(o[field])) throw new UnsupportedSemantics(`An operand ${field} that is not a whole number is not lowered; the whole instance remains uncovered.`);
  const cells = o.cells as Cell[];
  if (cells.some(c => !board.activeCells.includes(c))) throw new UnsupportedSemantics("An operand cell that is not an active board cell is not lowered; the whole instance remains uncovered.");
  const start = o.start === undefined ? 0 : o.start as number;
  const length = o.length === undefined ? cells.length - start : o.length as number;
  // A slice outside the cell list makes the operand invalid, so nothing satisfies it.
  if (start < 0 || length < 0 || start + length > cells.length) return undefined;
  return { cells: cells.slice(start, start + length), operation: o.operation, repeats: o.repeats };
}

/**
 * Number property. Each operand, the digit sum of its cells or the decimal number their printed digits spell in order, passes
 * a test on that number: a numeric property, or a remainder modulo the argument. Every possible reading of the operand is
 * listed, so the operand is an exact disjunction over the numbers that pass: a total for a sum, a digit assignment for a decimal.
 * An operand is exactly its list of cells, so a reading of 0 to 9 digits is required for a decimal, and `repeats` false makes
 * the digits differ. `allowed` restricts the forward number and `distinct` makes the forward numbers of the operands different;
 * `reverse` also accepts the reversed decimal reading for the property, never for `allowed` or `distinct`.
 * The block and its remainder-cage and unique-primes aliases share this lowering. Alternating paths, effective-value channels,
 * products, counts and stopping prefixes stay uncovered.
 */
export function lowerNumberProperty(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  let raws: unknown[];
  let property = "divisible", argument: unknown = 2, remainder: unknown, reverse = false, allowed: unknown, different = false;
  if (instance.kind === "remainder-cage") {
    if (typeof p.distinct !== "boolean") throw Error("distinct must be true or false.");
    raws = [{ cells: sortedCells(instance.cells ?? []), channel: "D", operation: "sum", repeats: !p.distinct }];
    if (p.modulus === undefined || p.remainder === undefined) throw Error("Supply a modulus and a remainder.");
    argument = p.modulus; remainder = p.remainder;
  } else if (instance.kind === "unique-primes") {
    if (!Array.isArray(p.groups) || p.groups.some(g => !Array.isArray(g))) throw Error("Supply groups as lists of cells.");
    raws = (p.groups as unknown[]).map(cells => ({ cells, channel: "D", operation: "decimal", repeats: true }));
    property = "prime"; allowed = p.allowed; different = true;
  } else {
    if (p.alternating !== undefined && typeof p.alternating !== "boolean") throw Error("alternating must be true or false.");
    if (p.alternating === true) throw new UnsupportedSemantics("An alternating path check is not lowered by Number Property; the whole instance remains uncovered.");
    if (typeof p.property !== "string" || !properties.includes(p.property)) throw Error("Choose a property: prime, composite, power, divisible or places.");
    for (const name of ["reverse", "distinct"]) if (p[name] !== undefined && typeof p[name] !== "boolean") throw Error(`${name} must be true or false.`);
    if (p.operands !== undefined && !Array.isArray(p.operands)) throw Error("Supply operands as a list of operand records.");
    if (p.operands === undefined && p.operand === undefined) throw Error("Supply an operand.");
    raws = (p.operands ?? [p.operand]) as unknown[];
    property = p.property; remainder = p.remainder; reverse = p.reverse === true; allowed = p.allowed; different = p.distinct === true;
    if (p.argument !== undefined) argument = p.argument;
  }
  if (typeof argument !== "number" || !Number.isFinite(argument)) throw Error("The argument must be a number.");
  if (remainder !== undefined && (typeof remainder !== "number" || !Number.isFinite(remainder))) throw Error("The remainder must be a number.");
  if (allowed !== undefined && (!Array.isArray(allowed) || allowed.some(n => typeof n !== "number" || !Number.isFinite(n)))) throw Error("Supply allowed as a list of numbers.");
  const modulo = remainder !== undefined;
  // Arguments that are not whole numbers are read by real arithmetic, which is not lowered.
  if ((modulo || property === "power" || property === "places") && argument >= 1 && !Number.isSafeInteger(argument)) throw new UnsupportedSemantics("An argument that is not a whole number is not lowered; the whole instance remains uncovered.");
  // An exponent or digit count past 64 reaches no number this lowering lists.
  if (!modulo && (property === "power" || property === "places") && argument > 64) throw new UnsupportedSemantics("An exponent or digit count above 64 is not lowered; the whole instance remains uncovered.");
  const permitted = allowed === undefined ? undefined : new Set((allowed as number[]).filter(Number.isSafeInteger).map(BigInt));
  const passes = (n: bigint): boolean => modulo
    ? argument >= 1 && Number.isSafeInteger(remainder) && ((n % BigInt(argument)) + BigInt(argument)) % BigInt(argument) === BigInt(remainder as number)
    : hasProperty(n, property, argument as number);
  const operands = raws.map(raw => operandOf(raw, board));
  // Reverse reading applies to decimal operands only.
  if (reverse && raws.some(raw => (raw as { operation?: unknown }).operation !== "decimal")) return none;
  if (operands.some(o => o === undefined)) return none;
  const wanted = (b: Branch): boolean => (permitted === undefined || permitted.has(b.value)) && (passes(b.value) || !modulo && reverse && b.reversed !== undefined && passes(b.reversed));

  const results: { extra: Formula[]; branches: Branch[]; always?: boolean }[] = [];
  for (const operand of operands as Operand[]) {
    const { cells } = operand;
    const repeated = new Set(cells).size !== cells.length;
    if (operand.operation === "sum") {
      if (operand.repeats === false && repeated) return none;
      if (repeated) throw new UnsupportedSemantics("A sum over a cell listed twice is not lowered; the whole instance remains uncovered.");
      const unique = sortedCells(cells);
      const low = Math.min(...board.alphabet) * unique.length || 0, high = Math.max(...board.alphabet) * unique.length || 0;
      if (high - low + 1 > maxReadings) throw new UnsupportedSemantics("A sum with more than 100,000 possible totals is not lowered; the whole instance remains uncovered.");
      const branches: Branch[] = [];
      for (let total = low; total <= high; total++) branches.push({ value: BigInt(total), formula: sumTotal(unique, total, "D") });
      const kept = branches.filter(wanted);
      // Every total that the cells can reach passes, so the test asks nothing of the cells.
      results.push({ extra: operand.repeats ? [] : [distinct(unique)], branches: kept, always: kept.length === branches.length });
    } else {
      const digits = board.alphabet.filter(d => d >= 0 && d <= 9);
      if (digits.length ** cells.length > maxReadings) throw new UnsupportedSemantics("A decimal with more than 100,000 digit readings is not lowered; the whole instance remains uncovered.");
      const branches: Branch[] = [];
      const walk = (read: number[]) => {
        if (read.length < cells.length) { for (const d of digits) walk([...read, d]); return; }
        if (!operand.repeats && new Set(read).size !== read.length) return;
        const at = new Map<Cell, number>();
        for (let i = 0; i < cells.length; i++) if (at.get(cells[i]) !== undefined && at.get(cells[i]) !== read[i]) return; else at.set(cells[i], read[i]);
        const number = (list: number[]) => list.reduce((n, d) => n * 10n + BigInt(d), 0n);
        branches.push({ value: number(read), reversed: number([...read].reverse()),
          formula: all([...at].sort(([x], [y]) => cellOrder(x, y)).map(([cell, d]): Formula => ({ op: "Allowed", channel: "D", cell, values: [d] }))) });
      };
      walk([]);
      results.push({ extra: [], branches: branches.filter(wanted) });
    }
  }
  const nodes: Formula[] = results.flatMap(r => [...r.extra, r.always ? all([]) : { op: "Any", children: r.branches.map(b => b.formula) } as Formula]);
  if (different) {
    let work = 0;
    results.forEach((a, i) => results.slice(i + 1).forEach(b => {
      const byValue = new Map(b.branches.map(x => [x.value, x.formula]));
      for (const x of a.branches) {
        const other = byValue.get(x.value);
        if (other === undefined) continue;
        if (++work > maxDifferences) throw new UnsupportedSemantics("More than 20,000 pairwise difference terms between operands are not lowered; the whole instance remains uncovered.");
        nodes.push({ op: "Not", child: all([x.formula, other]) });
      }
    }));
  }
  return all(nodes);
}

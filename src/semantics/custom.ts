import { customDefinitionContract, customParameterTypes, type CustomDefinition } from "../custom-definitions.js";
import type { DeclarationAST } from "../declarations.js";
import { instanceInputs } from "../evaluator/inputs.js";
import { numericInput } from "../evaluator/interpreter.js";
import type { Expr, Type } from "../language/ast.js";
import type { CheckedPrelude } from "../language/checker.js";
import { arithmetic, compare, exact, floor, printExact, rational, type Rational } from "../language/exact.js";
import { cellOrder } from "./board.js";
import { lowerDiagonalSum } from "./lower.js";
import { sumTotal, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/**
 * Lowering of a case's own definition. The definition's checked formula is read with the instance's parameters bound, as the
 * public evaluator reads it, but cell digits stay symbolic: `D(c)` is a linear form over the board's cells and a comparison of
 * linear forms becomes the finite primitive that states it. Everything that does not involve a cell digit is computed exactly.
 * Quantifiers, aggregates and shared terms expand over finite collections. A definition outside this fragment is refused with
 * one of the reasons below, never approximated.
 */
export const customRefusals = {
  unchecked: "The definition's formula did not pass the checker, so it has no finite meaning",
  effectiveValue: "The definition reads the effective value V, which needs the file's value bindings resolved",
  unbounded: "The definition quantifies over a domain with no finite enumeration",
  witness: "The definition chooses a shared witness (a subset, list, partition or numbered choice) that is not enumerated",
  recursion: "The definition reaches a shared term that calls itself",
  nonlinear: "The definition combines cell digits in a way that is not a linear form",
  relation: "The definition relates three or more cells in a way with no finite primitive",
  collected: "The definition collects or counts conditions on cell digits",
  primitive: "The definition uses a shared primitive that has no finite lowering",
  answer: "The definition reads a shared answer (a route, selection, shading, network or value map)",
  expansion: "The definition's finite expansion is too large",
  undefined: "The definition is undefined for these inputs",
} as const;
export type CustomRefusal = keyof typeof customRefusals;
export class CustomUnsupported extends UnsupportedSemantics {
  constructor(readonly refusal: CustomRefusal, detail?: string) {
    super(`${customRefusals[refusal]}${detail ? ` (${detail})` : ""}; the whole instance remains uncovered.`);
  }
}
const refuse = (refusal: CustomRefusal, detail?: string): never => { throw new CustomUnsupported(refusal, detail); };

/** Most evaluation steps one instance may spend. */
const maxSteps = 1_500_000;
/** Most totals of a sum that are tried one by one. */
const maxTotals = 20_000;
/** Most occurrences repeated into one sum equation. */
const maxOccurrences = 100_000;
const maxDepth = 64;

/** A sum of weighted cell digits plus a constant. Every weight is nonzero. */
class Lin { constructor(readonly terms: ReadonlyMap<Cell, Rational>, readonly constant: Rational) {} }
/** A function of one linear form, applied to the exact value the form takes. */
class Img { constructor(readonly inner: Lin, readonly apply: (value: Rational) => Rational) {} }
/** A Boolean that depends on cell digits. */
class Sym { constructor(readonly formula: Formula) {} }
/** The number of cells, among those listed, that hold one digit, plus a constant. */
class Tally { constructor(readonly cells: readonly Cell[], readonly digit: number, readonly constant: Rational) {} }
class SetV { constructor(readonly items: Value[]) {} }
class Lazy {
  private value: Value | undefined; private done = false;
  constructor(private readonly read: () => Value) {}
  get(): Value { if (!this.done) { this.value = this.read(); this.done = true; } return this.value; }
}
type Fn = (...args: Value[]) => Value;
type Value = Rational | string | boolean | undefined | Lin | Img | Sym | Tally | SetV | Value[] | Fn | { [field: string]: Value };
type Scope = Record<string, Value | Lazy>;

const zero = exact("0"), one = exact("1");
const isRational = (v: unknown): v is Rational => !!v && typeof v === "object" && "numerator" in v && "denominator" in v;
const isRecord = (v: unknown): v is { [field: string]: Value } =>
  !!v && typeof v === "object" && !Array.isArray(v) && !isRational(v) && !(v instanceof Lin || v instanceof Img || v instanceof Sym || v instanceof Tally || v instanceof SetV);
const isNumeric = (v: Value): v is Rational | Lin | Img => isRational(v) || v instanceof Lin || v instanceof Img;
const isTruth = (v: Value): v is boolean | Sym => typeof v === "boolean" || v instanceof Sym;
const none = (): Formula => ({ op: "Any", children: [] });
const everything = (): Formula => ({ op: "All", children: [] });
const asFormula = (v: boolean | Sym): Formula => v instanceof Sym ? v.formula : v ? everything() : none();
const truth = (v: Value): boolean | Sym => { if (!isTruth(v)) throw Error("Expected a Boolean."); return v; };
const lin = (v: Rational | Lin): Lin => v instanceof Lin ? v : new Lin(new Map(), v);
/** A linear form with no cells is its constant. */
function plain(l: Lin): Rational | Lin {
  const terms = new Map([...l.terms].filter(([, w]) => w.numerator !== 0n));
  return terms.size ? new Lin(terms, l.constant) : l.constant;
}
function addLin(a: Lin, b: Lin, sign: 1n | -1n): Rational | Lin {
  const terms = new Map(a.terms);
  for (const [cell, w] of b.terms) terms.set(cell, arithmetic("+", terms.get(cell) ?? zero, sign === 1n ? w : arithmetic("-", zero, w)));
  return plain(new Lin(terms, arithmetic(sign === 1n ? "+" : "-", a.constant, b.constant)));
}
function scaleLin(a: Lin, factor: Rational): Rational | Lin {
  return plain(new Lin(new Map([...a.terms].map(([cell, w]) => [cell, arithmetic("*", w, factor)])), arithmetic("*", a.constant, factor)));
}
const img = (v: Lin | Img): Img => v instanceof Img ? v : new Img(v, x => x);
const gcd = (a: bigint, b: bigint): bigint => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; };
const lcm = (a: bigint, b: bigint): bigint => a / gcd(a, b) * b;

function key(v: Value): string {
  if (isRational(v)) return printExact(v);
  if (Array.isArray(v)) return `[${v.map(key).join(",")}]`;
  if (v instanceof SetV) return `{${v.items.map(key).sort().join(",")}}`;
  if (v instanceof Lin || v instanceof Img || v instanceof Sym || v instanceof Tally) return refuse("collected", "a cell digit used as a member of a collection or compared with a collection");
  if (isRecord(v)) return `{${Object.entries(v).filter(([, x]) => x !== undefined).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([k, x]) => `${JSON.stringify(k)}:${key(x)}`).join(",")}}`;
  return JSON.stringify(v) ?? "absent";
}
const setOf = (items: Value[]): SetV => new SetV([...new Map(items.map(item => [key(item), item])).values()]);
function members(v: Value): Value[] {
  if (Array.isArray(v)) return v;
  if (v instanceof SetV) return v.items;
  throw Error("Expected a collection.");
}
function exactNumber(v: Value): Rational {
  if (isRational(v)) return v;
  return refuse("nonlinear", "a cell digit used where an exact number is required");
}

/** Converts a decoded parameter to the value its declared type names. */
function typed(raw: unknown, type: Type, types: Record<string, Type>): Value {
  const alias = Object.hasOwn(types, type.name) ? types[type.name] : undefined;
  if (alias) return typed(raw, alias, types);
  if (raw === undefined || raw === null) return undefined;
  if (["number", "position", "value", "digit"].includes(type.name)) return numericInput(raw as number);
  if (type.name === "set") return setOf((raw as unknown[]).map(item => typed(item, type.args![0], types)));
  if (["list", "path", "collection"].includes(type.name)) return (raw as unknown[]).map(item => typed(item, type.args![0], types));
  if (type.name === "optional") return typed(raw, type.args![0], types);
  if (type.name === "record") return Object.fromEntries(Object.entries(type.fields!).map(([name, t]) => [name, typed((raw as Record<string, unknown>)[name], t, types)]));
  return raw as Value;
}

class Lowering {
  private steps = 0;
  private readonly cells: Cell[];
  private readonly alphabet: Rational[];
  private readonly global: Scope;
  private readonly stack: string[] = [];
  constructor(private readonly board: CanonicalBoard, private readonly prelude: CheckedPrelude, private readonly limit = maxSteps) {
    this.cells = [...board.activeCells].sort(cellOrder);
    this.alphabet = board.alphabet.map(d => exact(String(d)));
    this.global = {
      C: setOf(this.cells), 𝔄: this.alphabet, rows: exact(String(board.rows)), cols: exact(String(board.cols)),
      Regions: setOf(board.regions.map(region => setOf([...region].sort(cellOrder)))),
    };
  }
  private spend(): void { if (++this.steps > this.limit) refuse("expansion", `more than ${this.limit.toLocaleString("en")} evaluation steps`); }

  /** The Boolean a definition's formula states for these parameters. */
  run(formula: Expr, parameters: Scope): Formula {
    const value = this.evaluate(formula, { ...this.global, ...parameters });
    if (!isTruth(value)) throw Error("A definition's formula must state a condition.");
    return asFormula(value);
  }

  private resolve(scope: Scope, name: string): Value {
    const value = scope[name];
    return value instanceof Lazy ? value.get() : value;
  }
  private get terms() { return this.prelude.environment.terms; }

  private face(cell: Value): Value {
    if (typeof cell !== "string" || !this.board.activeCells.includes(cell as Cell)) return refuse("undefined", `${String(cell)} is not an active board cell`);
    return new Lin(new Map([[cell as Cell, one]]), zero);
  }

  private primitive(name: string, args: Value[]): Value {
    switch (name) {
      case "face": return this.face(args[0]);
      case "effective": return refuse("effectiveValue");
      case "toValue": return args[0];
      case "row": return exact(String(Number(/r(\d+)/.exec(String(args[0]))![1]) - 1));
      case "col": return exact(String(Number(/c(\d+)/.exec(String(args[0]))![1]) - 1));
      case "cellIndex": return exact(String(this.cells.indexOf(args[0] as Cell)));
      case "boardCell": return `r${exactNumber(args[0]).numerator + 1n}c${exactNumber(args[1]).numerator + 1n}`;
      case "orderedCells": return Array.isArray(args[0]) ? [...args[0]] : [...members(args[0])].sort((a, b) => cellOrder(a as Cell, b as Cell));
      case "some": return args[0];
      case "absent": return undefined;
      case "present": return args[0] !== undefined;
      case "unwrap": if (args[0] === undefined) throw Error("Missing optional value."); return args[0];
      case "alphabetPosition": return exact(String(this.alphabet.findIndex(d => key(d) === key(args[0]))));
      case "minimumDigit": case "minimumValue": return members(args[0]).reduce((a, b) => compare(exactNumber(a), exactNumber(b)) <= 0 ? a : b);
      case "maximumDigit": case "maximumValue": return members(args[0]).reduce((a, b) => compare(exactNumber(a), exactNumber(b)) >= 0 ? a : b);
      case "givenDigit": {
        const given = this.board.givens.find(g => g.cell === args[0]);
        return given ? exact(String(given.digit)) : undefined;
      }
      case "relationSpec": return { op: args[0], value: args[1] };
      case "clueHolds": case "selectionAnswer": case "choiceAnswer": case "assignmentAnswer": case "valueAnswer": case "symbolAnswer":
      case "routeAnswer": case "routeClosed": case "networkAnswer": case "partitionAnswer":
        return refuse("answer", name);
      default: return refuse("primitive", name);
    }
  }

  private call(name: string, args: Value[]): Value {
    const term = this.terms[name];
    if (term.kind === "primitive") return this.primitive(name, args);
    if (name === "allDifferent") return this.allDifferent(args[0], args[1] as Fn);
    if (this.stack.includes(name)) return refuse("recursion", name);
    if (this.stack.length >= maxDepth) return refuse("expansion", `shared terms nested more than ${maxDepth} deep`);
    this.stack.push(name);
    try {
      // A shared term sees its own arguments and the board, never its caller's locals.
      return this.evaluate(term.body as unknown as Expr, { ...this.global, ...Object.fromEntries(term.parameters.map((p, i) => [p.name, args[i]])) });
    } finally { this.stack.pop(); }
  }

  /** Every two different positions give different results, which may be cell-digit expressions. */
  private allDifferent(collection: Value, f: Fn): Value {
    const items = members(collection);
    const results = items.map(item => f(item));
    const parts: Value[] = [];
    for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) { this.spend(); parts.push(this.compareValues("!=", results[i], results[j])); }
    return this.all(parts);
  }
  /** How many of these conditions hold. Conditions on cell digits count the cells that hold one digit. */
  private count(conditions: Value[]): Value {
    let total = 0n, digit: number | undefined;
    const cells: Cell[] = [];
    for (const condition of conditions) {
      const verdict = truth(condition);
      if (verdict === true) { total++; continue; }
      if (verdict === false) continue;
      const f = verdict.formula;
      if (f.op !== "Allowed") return refuse("collected", "a count of conditions that are not a single digit at a cell");
      if (f.values.length === this.board.alphabet.length) { total++; continue; }
      if (!f.values.length) continue;
      if (f.values.length > 1 || (digit !== undefined && digit !== f.values[0])) return refuse("collected", "a count of cells that hold different digits");
      digit = f.values[0];
      cells.push(f.cell);
    }
    return cells.length ? new Tally(cells, digit!, exact(String(total))) : exact(String(total));
  }
  private all(parts: Value[]): Value {
    const formulas: Formula[] = [];
    for (const part of parts) {
      const verdict = truth(part);
      if (verdict === false) return false;
      if (verdict instanceof Sym) formulas.push(verdict.formula);
    }
    return formulas.length ? new Sym({ op: "All", children: formulas }) : true;
  }
  private any(parts: Value[]): Value {
    const formulas: Formula[] = [];
    for (const part of parts) {
      const verdict = truth(part);
      if (verdict === true) return true;
      if (verdict instanceof Sym) formulas.push(verdict.formula);
    }
    return formulas.length ? new Sym({ op: "Any", children: formulas }) : false;
  }
  private not(v: Value): Value { const t = truth(v); return t instanceof Sym ? new Sym({ op: "Not", child: t.formula }) : !t; }

  private evaluate(node: Expr, scope: Scope): Value {
    this.spend();
    const child = (i: number) => this.evaluate(node.children[i], scope);
    switch (node.kind) {
      case "number": return exact(node.value!);
      case "literal": return node.value;
      case "boolean": return node.value === "true";
      case "name": {
        const name = node.value!;
        if (Object.hasOwn(scope, name)) return this.resolve(scope, name);
        if (name === "H" || name === "ValuedRuleMeanings") return refuse("answer", name === "H" ? "the shaded cells" : "the value-rule meanings");
        if (name === "ℤ") return refuse("unbounded", "the integers");
        if (!Object.hasOwn(this.terms, name)) throw Error(`Unknown name ${name}.`);
        return (...args: Value[]) => this.call(name, args);
      }
      case "call": {
        const fn = child(0);
        if (typeof fn !== "function") throw Error("Expected a function.");
        return fn(...node.children.slice(1).map((_, i) => this.evaluate(node.children[i + 1], scope)));
      }
      case "member": { const record = child(0); if (!isRecord(record)) throw Error("Expected a record."); return record[node.value!]; }
      case "index": {
        const list = members(child(0)), position = exactNumber(child(1));
        if (position.denominator !== 1n || position.numerator < 0n || position.numerator >= BigInt(list.length)) return refuse("undefined", "a position outside the collection");
        return list[Number(position.numerator)];
      }
      case "unary": return this.unary(node.value!, child(0));
      case "binary": return this.binary(node, scope);
      case "set": return setOf(node.children.map((_, i) => child(i)));
      case "interval": {
        const a = exactNumber(child(0)), b = exactNumber(child(1));
        if (a.denominator !== 1n || b.denominator !== 1n || b.numerator - a.numerator > 100_000n) return refuse("expansion", "an interval of more than 100,000 positions");
        const values: Value[] = [];
        for (let i = a.numerator; i < b.numerator + (node.inclusive ? 1n : 0n); i++) values.push(exact(String(i)));
        return setOf(values);
      }
      case "lambda": return (...args: Value[]) => this.evaluate(node.children[0], { ...scope, ...Object.fromEntries(node.binders!.map((b, i) => [b.name, args[i]])) });
      case "conditional": {
        const condition = truth(child(0));
        if (typeof condition === "boolean") return condition ? child(1) : child(2);
        const yes = child(1), no = child(2);
        if (!isTruth(yes) || !isTruth(no)) return refuse("nonlinear", "a choice between cell-digit expressions made by a condition on cell digits");
        return this.any([this.all([condition, yes]), this.all([this.not(condition), no])]);
      }
      case "let": return this.evaluate(node.children[1], { ...scope, [node.binders![0].name]: new Lazy(() => child(0)) });
      case "image": case "comprehension": {
        const values = members(child(0)), result: Value[] = [];
        for (const item of values) {
          const local = { ...scope, [node.binders![0].name]: item };
          if (node.kind === "comprehension") {
            const verdict = truth(this.evaluate(node.children[1], local));
            if (verdict instanceof Sym) return refuse("witness", "a set chosen by a condition on cell digits");
            if (verdict) result.push(item);
          } else {
            const filter = node.children[2] ? truth(this.evaluate(node.children[2], local)) : true;
            if (filter instanceof Sym) return refuse("witness", "a set chosen by a condition on cell digits");
            if (filter) result.push(this.evaluate(node.children[1], local));
          }
        }
        return node.value === "list" ? result : setOf(result);
      }
      case "quantifier": case "aggregate": return this.bind(node, scope);
    }
  }

  private unary(op: string, v: Value): Value {
    if (op === "not") return this.not(v);
    if (op === "magnitude") {
      if (Array.isArray(v) || v instanceof SetV) return exact(String(members(v).length));
      return this.apply(v, x => ({ numerator: x.numerator < 0n ? -x.numerator : x.numerator, denominator: x.denominator }));
    }
    if (op === "floor") return this.apply(v, x => exact(String(floor(x))));
    if (op === "-") return this.apply(v, x => arithmetic("-", zero, x), l => scaleLin(l, exact("-1")));
    return v;
  }
  /** Applies a function of one number to a plain number, or defers it to the cell digits it reads. */
  private apply(v: Value, f: (x: Rational) => Rational, exactly?: (l: Lin) => Rational | Lin): Value {
    if (isRational(v)) return f(v);
    if (v instanceof Lin) return exactly ? exactly(v) : new Img(v, f);
    if (v instanceof Img) { const g = v.apply; return new Img(v.inner, x => f(g(x))); }
    if (v instanceof Tally) return refuse("collected", "a function of a count of cells");
    throw Error("Expected a number.");
  }

  private binary(node: Expr, scope: Scope): Value {
    const op = node.value!;
    const child = (i: number) => this.evaluate(node.children[i], scope);
    if (op === "and") { const l = truth(child(0)); return l === false ? false : this.all([l, child(1)]); }
    if (op === "or") { const l = truth(child(0)); return l === true ? true : this.any([l, child(1)]); }
    if (op === "implies") { const l = truth(child(0)); return l === false ? true : this.any([this.not(l), child(1)]); }
    const left = child(0);
    if (op === "iff") {
      const l = truth(left), r = truth(child(1));
      return this.all([this.any([this.not(l), r]), this.any([this.not(r), l])]);
    }
    const right = child(1);
    switch (op) {
      case "=": case "!=": case "<": case "<=": case ">": case ">=": return this.compareValues(op, left, right);
      case "in": case "notin": return this.membership(op === "in", left, right);
      case "subset": return members(left).every(item => members(right).some(other => key(item) === key(other)));
      case "intersect": return setOf(members(left).filter(item => members(right).some(other => key(item) === key(other))));
      case "union": return setOf([...members(left), ...members(right)]);
      default: return this.arith(op, left, right);
    }
  }

  private arith(op: string, a: Value, b: Value): Value {
    if (isRational(a) && isRational(b)) return arithmetic(op, a, b);
    if (a instanceof Tally && isRational(b) && (op === "+" || op === "-")) return new Tally(a.cells, a.digit, arithmetic(op, a.constant, b));
    if (b instanceof Tally && isRational(a) && op === "+") return new Tally(b.cells, b.digit, arithmetic(op, a, b.constant));
    if (a instanceof Tally || b instanceof Tally) return refuse("collected", `${op} on a count of cells`);
    if (!isNumeric(a) || !isNumeric(b)) throw Error("Expected numbers.");
    const symbolic = (v: Value) => v instanceof Lin || v instanceof Img;
    if (symbolic(a) && symbolic(b)) {
      if ((op === "+" || op === "-") && a instanceof Lin && b instanceof Lin) return addLin(a, b, op === "+" ? 1n : -1n);
      return refuse("nonlinear", `${op} of two cell-digit expressions`);
    }
    if (b instanceof Lin || b instanceof Img) {
      // A plain number on the left of a cell-digit expression.
      const r = a as Rational;
      if (b instanceof Lin && op === "+") return addLin(lin(r), b, 1n);
      if (b instanceof Lin && op === "-") return addLin(lin(r), b, -1n);
      if (b instanceof Lin && op === "*") return scaleLin(b, r);
      return this.apply(b, x => arithmetic(op, r, x));
    }
    const r = b as Rational;
    if (a instanceof Lin && op === "+") return addLin(a, lin(r), 1n);
    if (a instanceof Lin && op === "-") return addLin(a, lin(r), -1n);
    if (a instanceof Lin && op === "*") return scaleLin(a, r);
    if (a instanceof Lin && op === "/") { if (r.numerator === 0n) return refuse("undefined", "division by zero"); return scaleLin(a, arithmetic("/", one, r)); }
    return this.apply(a, x => arithmetic(op, x, r));
  }

  private membership(inside: boolean, left: Value, right: Value): Value {
    const items = members(right);
    if (left instanceof Lin || left instanceof Img) {
      if (items.some(item => !isRational(item))) return refuse("collected", "a cell digit tested against a collection of cell digits");
      if (items.length === 1) return this.compareValues(inside ? "=" : "!=", left, items[0]);
      const wanted = new Set(items.map(key));
      return this.relate(img(left), x => wanted.has(printExact(x)) === inside);
    }
    if (left instanceof Tally) {
      if (items.some(item => !isRational(item))) return refuse("collected", "a count of cells tested against a collection of cell digits");
      const wanted = new Set(items.map(key));
      return this.relateTally(left, n => wanted.has(printExact(n)) === inside);
    }
    if (left instanceof Sym) return refuse("collected", "a condition used as a member of a collection");
    return items.some(item => key(item) === key(left)) === inside;
  }

  private compareValues(op: string, a: Value, b: Value): Value {
    const test = (c: number) => op === "=" ? c === 0 : op === "!=" ? c !== 0 : op === "<" ? c < 0 : op === "<=" ? c <= 0 : op === ">" ? c > 0 : c >= 0;
    if (isRational(a) && isRational(b)) return test(compare(a, b));
    if (a instanceof Tally || b instanceof Tally) {
      const [tally, other, flip] = a instanceof Tally ? [a, b, false] as const : [b as Tally, a, true] as const;
      if (!isRational(other)) return refuse("collected", "a count of cells compared with a cell-digit expression");
      return this.relateTally(tally, n => test(flip ? compare(other, n) : compare(n, other)));
    }
    if (isTruth(a) && isTruth(b) && (a instanceof Sym || b instanceof Sym)) {
      if (op !== "=" && op !== "!=") throw Error("Booleans have no order.");
      const same = this.all([this.any([this.not(a), b]), this.any([this.not(b), a])]);
      return op === "=" ? same : this.not(same);
    }
    if (!isNumeric(a) || !isNumeric(b)) {
      if (op !== "=" && op !== "!=") throw Error("Expected numbers.");
      return (key(a) === key(b)) === (op === "=");
    }
    const hint = op === "=" ? "eq" : op === "!=" ? "ne" : undefined;
    if (a instanceof Img || b instanceof Img) {
      if (isRational(b)) { const f = (a as Img).apply; return this.relate(a as Img, x => test(compare(f(x), b))); }
      if (isRational(a)) { const f = (b as Img).apply; return this.relate(b as Img, x => test(compare(a, f(x)))); }
      return this.relateMany([img(a as Lin | Img), img(b as Lin | Img)], ([x, y]) => test(compare(x, y)));
    }
    const difference = addLin(lin(a), lin(b), -1n);
    if (isRational(difference)) return test(compare(difference, zero));
    return this.relate(new Img(difference, x => x), x => test(compare(x, zero)), hint, true);
  }

  /**
   * The condition that the value of `x` passes `test`. A single cell becomes its allowed digits; a sum of equal-signed cells becomes
   * an exact disjunction over its totals; two cells become an explicit pair table; an equation between cells is a sum equation.
   */
  private relate(x: Img, test: (value: Rational) => boolean, hint?: "eq" | "ne", identity = false): Value {
    const form = x.inner, f = x.apply;
    const passes = (value: Rational): boolean => {
      try { return test(f(value)); } catch (error) { return refuse("undefined", (error as Error).message); }
    };
    const support = [...form.terms].sort(([a], [b]) => cellOrder(a, b));
    const k = form.constant;
    const at = (digits: Rational[]) => support.reduce((sum, [, w], i) => arithmetic("+", sum, arithmetic("*", w, digits[i])), k);
    if (support.length === 1) {
      const [[cell]] = support;
      return new Sym({ op: "Allowed", channel: "D", cell, values: this.board.alphabet.filter((_, i) => passes(at([this.alphabet[i]]))) });
    }
    const sign = support.every(([, w]) => w.numerator > 0n) ? 1n : support.every(([, w]) => w.numerator < 0n) ? -1n : 0n;
    // Integer weights over a common denominator: value = k + (sign * common / scale) * sum(unit * digit).
    const scale = support.reduce((n, [, w]) => lcm(n, w.denominator), 1n);
    const weights = support.map(([, w]) => (w.numerator < 0n ? -w.numerator : w.numerator) * (scale / w.denominator));
    const common = weights.reduce(gcd, 0n);
    const units = weights.map(w => w / common);
    if (sign !== 0n && this.board.alphabet.every(Number.isSafeInteger)) {
      const lo = Math.min(...this.board.alphabet), hi = Math.max(...this.board.alphabet);
      const low = units.reduce((n, u) => n + Number(u) * lo, 0), high = units.reduce((n, u) => n + Number(u) * hi, 0);
      if (high - low + 1 > maxTotals) return refuse("expansion", `more than ${maxTotals.toLocaleString("en")} totals of a sum`);
      const accepted: number[] = [], rejected: number[] = [];
      for (let s = low; s <= high; s++) {
        const value = arithmetic("+", k, arithmetic("*", rational(sign * common, scale), exact(String(s))));
        (passes(value) ? accepted : rejected).push(s);
      }
      if (!accepted.length) return false;
      if (!rejected.length) return true;
      const cells = support.map(([cell]) => cell);
      if (units.every(u => u === 1n)) {
        const totals = (list: number[]): Formula => list.length === 1 ? sumTotal(cells, list[0], "D") : { op: "Any", children: list.map(s => sumTotal(cells, s, "D")) };
        return new Sym(accepted.length <= rejected.length ? totals(accepted) : { op: "Not", child: totals(rejected) });
      }
      if (support.length > 2) {
        if (accepted.length !== 1) return refuse("relation", "a weighted sum of three or more cells compared with a range of totals");
        const listed = support.flatMap(([cell], i) => Array<Cell>(Number(units[i])).fill(cell));
        return new Sym(lowerDiagonalSum({ sum: accepted[0], channel: "D", repeats: true }, listed, this.board));
      }
    }
    if (support.length === 2) {
      const [[a], [b]] = support;
      const table: [number, number][] = [];
      this.board.alphabet.forEach((p, i) => this.board.alphabet.forEach((q, j) => { if (passes(at([this.alphabet[i], this.alphabet[j]]))) table.push([p, q]); }));
      return new Sym({ op: "Pair", channel: "D", cells: [a, b], table });
    }
    if (identity && (hint === "eq" || hint === "ne") && k.numerator === 0n) {
      const left: Cell[] = [], right: Cell[] = [];
      let occurrences = 0;
      for (const [cell, w] of support) {
        const times = (w.numerator < 0n ? -w.numerator : w.numerator) * (scale / w.denominator);
        occurrences += Number(times);
        if (occurrences > maxOccurrences) refuse("expansion", `more than ${maxOccurrences.toLocaleString("en")} occurrences in a sum equation`);
        (w.numerator > 0n ? left : right).push(...Array<Cell>(Number(times)).fill(cell));
      }
      const equation: Formula = { op: "SumEqual", channel: "D", left, right };
      return new Sym(hint === "eq" ? equation : { op: "Not", child: equation });
    }
    return refuse("relation", `${support.length} cells`);
  }

  /** The condition that the number of listed cells holding the digit passes `test`: runs of accepted counts, each a lower and an upper bound. */
  private relateTally(tally: Tally, test: (value: Rational) => boolean): Value {
    const cells = [...tally.cells].sort(cellOrder), n = cells.length;
    const accepted: boolean[] = [];
    for (let t = 0; t <= n; t++) accepted.push(test(arithmetic("+", tally.constant, exact(String(t)))));
    if (accepted.every(x => !x)) return false;
    if (accepted.every(x => x)) return true;
    const atLeast = (count: number): Formula => ({ op: "CountAtLeast", channel: "D", cells, digit: tally.digit, count });
    // Maximal runs of equal verdicts, each as "at least lo and fewer than hi + 1".
    const runs = (want: boolean): [number, number][] => {
      const found: [number, number][] = [];
      for (let t = 0; t <= n; t++) if (accepted[t] === want) { if (found.length && found[found.length - 1][1] === t - 1) found[found.length - 1][1] = t; else found.push([t, t]); }
      return found;
    };
    const band = ([lo, hi]: [number, number]): Formula => {
      const parts: Formula[] = [];
      if (lo > 0) parts.push(atLeast(lo));
      if (hi < n) parts.push({ op: "Not", child: atLeast(hi + 1) });
      return parts.length === 1 ? parts[0] : { op: "All", children: parts };
    };
    const yes = runs(true), no = runs(false);
    const union = (list: [number, number][]): Formula => list.length === 1 ? band(list[0]) : { op: "Any", children: list.map(band) };
    return new Sym(yes.length <= no.length ? union(yes) : { op: "Not", child: union(no) });
  }

  /** A comparison of several functions of cell digits that together read at most two cells. */
  private relateMany(parts: Img[], test: (values: Rational[]) => boolean): Value {
    const cells = [...new Set(parts.flatMap(part => [...part.inner.terms.keys()]))].sort(cellOrder);
    if (cells.length > 2) return refuse("relation", `${cells.length} cells in one comparison of functions of cell digits`);
    const holds = (digits: Rational[]): boolean => {
      try {
        return test(parts.map(({ inner, apply }) => apply([...inner.terms].reduce((sum, [cell, w]) => arithmetic("+", sum, arithmetic("*", w, digits[cells.indexOf(cell)])), inner.constant))));
      } catch (error) { return refuse("undefined", (error as Error).message); }
    };
    if (cells.length === 1) return new Sym({ op: "Allowed", channel: "D", cell: cells[0], values: this.board.alphabet.filter((_, i) => holds([this.alphabet[i]])) });
    const table: [number, number][] = [];
    this.board.alphabet.forEach((p, i) => this.board.alphabet.forEach((q, j) => { if (holds([this.alphabet[i], this.alphabet[j]])) table.push([p, q]); }));
    return new Sym({ op: "Pair", channel: "D", cells: [cells[0], cells[1]], table });
  }

  /** Quantifiers and aggregates expand over a finite domain. */
  private bind(node: Expr, scope: Scope): Value {
    const binders = node.binders!;
    const domain = node.hasDomain ? members(this.evaluate(node.children[0], scope)) : undefined;
    const body = node.children[node.hasDomain ? 1 : 0];
    const finite = (type: Type): Value[] => {
      const alias = this.prelude.environment.types?.[type.name];
      if (alias) return finite(alias);
      if (type.name === "cell") return this.cells;
      if (type.name === "digit") return this.alphabet;
      if (type.name === "boolean") return [false, true];
      if (type.name === "enum" || type.name === "literal") return type.members ?? [];
      if (type.name === "optional") return [undefined, ...finite(type.args![0])];
      if (["set", "list", "path"].includes(type.name)) return refuse("witness", `a ${type.name} of ${type.args?.[0] ? type.args[0].name : "values"}`);
      return refuse("unbounded", type.name);
    };
    const values = (binder: (typeof binders)[number]): Value[] => domain ?? (binder.type ? finite(binder.type) : refuse("unbounded", "an unannotated variable"));
    const results: Value[] = [];
    const visit = (i: number, bound: Scope): void => {
      if (i === binders.length) { results.push(this.evaluate(body, bound)); return; }
      for (const item of values(binders[i])) { this.spend(); visit(i + 1, { ...bound, [binders[i].name]: item }); }
    };
    visit(0, scope);
    if (node.kind === "quantifier") return node.value === "forall" ? this.all(results) : this.any(results);
    if (node.value === "count") return this.count(results);
    let total: Value = exact(node.value === "product" ? "1" : "0");
    for (const result of results) total = this.arith(node.value === "product" ? "*" : "+", total, result);
    return total;
  }
}

/** The parameters an instance supplies, each converted to the type its definition declares. */
function parametersOf(definition: CustomDefinition, ast: DeclarationAST, prelude: CheckedPrelude): Scope {
  const contract = customDefinitionContract(definition, prelude);
  const inputs = instanceInputs(ast, contract);
  const types = prelude.environment.types ?? {};
  // The checker's own parameter types, so a parameter the contract cannot type (one named kind) still converts.
  const declared = customParameterTypes(definition, prelude);
  return Object.fromEntries(Object.keys(definition.parameters).map(name => {
    const type = declared[name] ?? contract.parameters[name]?.type;
    return [name, type ? typed(inputs[name], type, types) : inputs[name] as Value];
  }));
}

/**
 * The finite formula of one instance of a case's own definition, over the given board. Throws CustomUnsupported, naming
 * what is missing, when the definition leaves the finite fragment.
 */
export function lowerCustom(definition: CustomDefinition, ast: DeclarationAST, board: CanonicalBoard, prelude: CheckedPrelude, steps = maxSteps): Formula {
  if (!definition.checked) return refuse("unchecked");
  try {
    return new Lowering(board, prelude, steps).run(definition.checked.ast as unknown as Expr, parametersOf(definition, ast, prelude));
  } catch (error) {
    if (error instanceof UnsupportedSemantics) throw error;
    return refuse("undefined", (error as Error).message);
  }
}

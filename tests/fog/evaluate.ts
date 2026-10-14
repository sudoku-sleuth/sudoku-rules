// A small evaluator for checked play-state formulas over one finite board. It runs the fog page's own
// formula, so the fixtures in this folder test the definition and not a second implementation of it.
import type { TypedExpr } from "../../src/language/ast";
import type { CompiledFeature } from "../../src/features";
import type { Environment } from "../../src/language/checker";

export interface FogFixture {
  name: string; description: string; rows: number; cols: number;
  initiallyLit: string[]; links?: { trigger: string[]; lights: string[] }[];
  givens?: Record<string, number>; answer?: Record<string, number>;
  /** Set on a fixture the format must reject; the text is what the checker says. */
  rejected?: string;
  steps: { entries: Record<string, number>; lit: string[] }[];
}
type Value = boolean | number | undefined | Value[] | { [field: string]: Value };
const key = (value: Value) => JSON.stringify(value);
const ref = (cell: string) => { const m = /^r(\d+)c(\d+)$/.exec(cell)!; return { row: Number(m[1]) - 1, col: Number(m[2]) - 1 }; };
const name = (cell: { row: number; col: number }) => `r${cell.row + 1}c${cell.col + 1}`;
export const order = (cells: Iterable<string>) => [...new Set(cells)].sort((a, b) => ref(a).row - ref(b).row || ref(a).col - ref(b).col);

interface Structure { fixture: FogFixture; entries: Record<string, number>; environment: Environment }

function evaluate(node: TypedExpr, scope: Map<string, Value>, s: Structure): Value {
  const go = (child: TypedExpr, extra?: [string, Value]) => evaluate(child, extra ? new Map(scope).set(extra[0], extra[1]) : scope, s);
  const [a, b, c] = node.children;
  switch (node.kind) {
    case "boolean": return node.value === "true";
    case "number": return Number(node.value);
    case "literal": return node.value as unknown as Value;
    case "name": {
      if (scope.has(node.value!)) return scope.get(node.value!);
      if (node.value === "C") return Array.from({ length: s.fixture.rows * s.fixture.cols }, (_, i) => ({ row: Math.floor(i / s.fixture.cols), col: i % s.fixture.cols }));
      if (node.value === "answered") return s.fixture.answer !== undefined;
      throw new Error(`${node.value} has no value`);
    }
    case "member": { const base = go(a) as Record<string, Value>; return base[node.value!]; }
    case "unary": { const v = go(a); if (node.value === "not") return !v; if (node.value === "-") return -(v as number); if (node.value === "magnitude") return Array.isArray(v) ? v.length : Math.abs(v as number); throw new Error(`unary ${node.value}`); }
    case "conditional": return go(a) ? go(b) : go(c);
    case "binary": {
      switch (node.value) {
        case "and": return !!go(a) && !!go(b);
        case "or": return !!go(a) || !!go(b);
        case "implies": return !go(a) || !!go(b);
        case "iff": return !!go(a) === !!go(b);
        case "=": return key(go(a)) === key(go(b));
        case "!=": return key(go(a)) !== key(go(b));
        case "in": return (go(b) as Value[]).some(item => key(item) === key(go(a)));
      }
      const x = go(a) as number, y = go(b) as number;
      switch (node.value) {
        case "<": return x < y; case "<=": return x <= y; case ">": return x > y; case ">=": return x >= y;
        case "+": return x + y; case "-": return x - y; case "*": return x * y;
      }
      throw new Error(`binary ${node.value}`);
    }
    case "quantifier": {
      if (!node.hasDomain) throw new Error("quantifier without a domain");
      const domain = go(a) as Value[];
      const test = (item: Value) => !!go(b, [node.binders![0].name, item]);
      return node.value === "forall" ? domain.every(test) : domain.some(test);
    }
    case "call": {
      const callee = a.value!;
      const args = node.children.slice(1).map(arg => go(arg));
      const term = Object.hasOwn(s.environment.terms, callee) ? s.environment.terms[callee] : undefined;
      if (term?.body) return evaluate(term.body as TypedExpr, new Map(term.parameters.map((p, i) => [p.name, args[i]])), s);
      const cell = args[0] as { row: number; col: number };
      switch (callee) {
        case "present": return args[0] !== undefined;
        case "unwrap": return args[0];
        case "row": return cell.row;
        case "col": return cell.col;
        case "entry": return s.entries[name(cell)];
        case "givenDigit": return s.fixture.givens?.[name(cell)];
        case "face": return s.fixture.answer?.[name(cell)];
        case "known": return s.fixture.answer?.[name(cell)] !== undefined;
      }
      throw new Error(`${callee} has no meaning here`);
    }
  }
  throw new Error(`${node.kind} is not supported`);
}

/** The cells the feature's formula makes visible for these entries. */
export function visibleCells(feature: CompiledFeature, fixture: FogFixture, entries: Record<string, number>): string[] {
  const structure: Structure = { fixture, entries, environment: feature.environment };
  const definition = feature.formula.ast;
  // ∀c∈C: visible(c) ↔ φ(c): evaluate φ at each cell.
  const body = definition.children[1].children[1];
  const variable = definition.binders![0].name;
  const parameters = new Map<string, Value>([
    ["initiallyLit", fixture.initiallyLit.map(ref)],
    ["links", fixture.links ? fixture.links.map(link => ({ trigger: link.trigger.map(ref), lights: link.lights.map(ref) })) : undefined],
  ]);
  const cells = Array.from({ length: fixture.rows * fixture.cols }, (_, i) => ({ row: Math.floor(i / fixture.cols), col: i % fixture.cols }));
  return order(cells.filter(cell => evaluate(body, new Map(parameters).set(variable, cell), structure)).map(name));
}

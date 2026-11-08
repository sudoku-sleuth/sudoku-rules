import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const four = [1, 2, 3, 4];
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
const [a, b, c, d] = cells;
const boardOf = (alphabet: number[], n = 4): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, alphabet = four, n = 4) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(alphabet, n));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const letter = (name: string) => ({ op: "letter", name });
const num = (value: number) => ({ op: "number", value });
const cage = (list: Cell[], expression: object) => ({ cells: list, expression });
const rule = (cages: object[], distinct = false) => `cage-expressions cages ${JSON.stringify(cages)} distinct ${distinct}`;

function holds(f: Formula, v: Record<string, number>): boolean {
  switch (f.op) {
    case "All": return f.children.every(x => holds(x, v));
    case "Any": return f.children.some(x => holds(x, v));
    case "Not": return !holds(f.child, v);
    case "Pair": return f.table.some(([x, y]) => x === v[f.cells[0]] && y === v[f.cells[1]]);
    case "Allowed": return f.values.includes(v[f.cell]);
    case "Distinct": return new Set(f.cells.map(q => v[q])).size === f.cells.length;
    case "CountAtLeast": return f.cells.filter(q => v[q] === f.digit).length >= f.count;
    case "SumEqual": return f.left.reduce((n, q) => n + BigInt(v[q]), 0n) === f.right.reduce((n, q) => n + BigInt(v[q]), 0n);
    case "SumTotal": return f.cells.reduce((n, q) => n + BigInt(v[q]), 0n) === BigInt(f.total);
  }
}
function form(rules: string, alphabet = four, n = 4) { const r = nf(rules, alphabet, n); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
function reason(rules: string, alphabet = four): string {
  const r = nf(rules, alphabet);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  const found = r.normalForm!.coverage.filter(x => x.status === "unsupported");
  expect(found).toHaveLength(1);
  return (found[0] as { reason: string }).reason;
}
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(rule([cage([a], letter("A")), cage([b], letter("A"))]));
  const loaded = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2]]}\n---${body(rule([cage([a], letter("A"))]))}` });
  // Evaluating once here loads the evaluator too, so the timed tests below measure only their own work.
  evaluate({ ...loaded.value!.rules[0], finite: undefined }, { digits: {} });
}, 30000);

test("cages that share a letter have equal totals", () => {
  const f = form(rule([cage([a], letter("A")), cage([b, c], letter("A"))]));
  expect(holds(f, at(3, 1, 2))).toBe(true);
  expect(holds(f, at(3, 1, 3))).toBe(false);
  const three = form(rule([cage([a], letter("A")), cage([b], letter("A")), cage([c], letter("A"))]));
  expect(holds(three, at(2, 2, 2))).toBe(true);
  expect(holds(three, at(2, 2, 3))).toBe(false);
});

test("a cage stated as a number has that total; a letter alone is any total", () => {
  const f = form(rule([cage([a, b], num(5))]));
  expect(holds(f, at(2, 3))).toBe(true);
  expect(holds(f, at(2, 2))).toBe(false);
  const free = form(rule([cage([a, b], letter("A"))]));
  expect(holds(free, at(1, 4))).toBe(true);
  expect(holds(free, at(4, 4))).toBe(true);
  const tied = form(rule([cage([a], letter("A")), cage([b], num(3)), cage([c], letter("A"))]));
  expect(holds(tied, at(1, 3, 1))).toBe(true);
  expect(holds(tied, at(1, 3, 2))).toBe(false);
});

test("distinct gives different letters different totals, and the same letter stays equal", () => {
  const f = form(rule([cage([a], letter("A")), cage([b], letter("B"))], true));
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(2, 2))).toBe(false);
  const without = form(rule([cage([a], letter("A")), cage([b], letter("B"))], false));
  expect(holds(without, at(2, 2))).toBe(true);
  const same = form(rule([cage([a], letter("A")), cage([b], letter("A")), cage([c], letter("B"))], true));
  expect(holds(same, at(1, 1, 2))).toBe(true);
  expect(holds(same, at(1, 1, 1))).toBe(false);
  expect(holds(same, at(1, 2, 3))).toBe(false);
  expect(form(rule([cage([a], letter("A")), cage([a], letter("B"))], true))).toEqual({ op: "Any", children: [] });
});

test("a number that is not a whole number is undefined, so the declaration is false", () => {
  expect(form(rule([cage([a], num(1.5))]))).toEqual({ op: "Any", children: [] });
  const negative = form(rule([cage([a], num(-1))]), [-2, -1, 0, 1]);
  expect(holds(negative, at(-1))).toBe(true);
  expect(holds(negative, at(1))).toBe(false);
});

test("equivalent spellings compare as equal", () => {
  eq(rule([cage([a], letter("A")), cage([b], letter("A"))]), rule([cage([b], letter("A")), cage([a], letter("A"))]));
  eq(rule([cage([a], letter("A")), cage([b], letter("A"))]), rule([cage([a], letter("X")), cage([b], letter("X"))]));
  eq(rule([cage([a, b], letter("A")), cage([c], letter("A"))]), rule([cage([b, a], letter("A")), cage([c], letter("A"))]));
  eq(rule([cage([a], letter("A")), cage([b], letter("B"))], true), rule([cage([b], letter("A")), cage([a], letter("B"))], true));
  eq(rule([cage([a], letter("A")), cage([b], letter("A"))]), `equal-sums groups ${JSON.stringify([[a], [b]])}`);
  eq(rule([cage([a, b], num(5))]), `cage ${a}-${b} total 5 repeats true`);
});

test("near misses compare as different", () => {
  differs(rule([cage([a], letter("A")), cage([b], letter("A"))]), rule([cage([a], letter("A")), cage([b], letter("B"))]));
  differs(rule([cage([a], letter("A")), cage([b], letter("B"))]), rule([cage([a], letter("A")), cage([b], letter("B"))], true));
  differs(rule([cage([a], letter("A")), cage([b], letter("A"))]), rule([cage([a], letter("A")), cage([c], letter("A"))]));
  differs(rule([cage([a, b], num(5))]), rule([cage([a, b], num(6))]));
  differs(rule([cage([a], num(2))]), rule([cage([a], letter("A"))]));
  differs(rule([cage([a], letter("A")), cage([b], letter("A"))]), `not ${rule([cage([a], letter("A")), cage([b], letter("A"))])}`);
});

test("combinations left uncovered keep a typed reason", () => {
  expect(reason(rule([cage([a], { op: "+", left: letter("A"), right: num(1) })]))).toContain("arithmetic operators");
  expect(reason(rule([cage([a], letter("A"))]), [-1, 0, 1])).toContain("negative digit");
  expect(reason(rule([cage([a], num(1e20))]))).toContain("safe whole number");
});

function differential(n: number, symbols: number[], entries: string[]): number {
  let seen = 0, sampled = 0;
  const used = cells.slice(0, n);
  const board = boardOf(symbols, n);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect([text, r.normalForm!.coverage.filter(x => x.kind !== "sudoku" && x.status !== "lowered")]).toEqual([text, []]);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    // The evaluator runs the lowered formula itself when a rule has one, so it is switched off to compare with the published definition.
    const published = { ...compiled.value!.rules[0], finite: undefined };
    let satisfied = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const verdict = evaluate(published, { digits: values });
        expect([text, JSON.stringify(values), verdict.status]).not.toEqual([text, JSON.stringify(values), "undecided"]);
        const expected = verdict.status === "holds";
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        // The rule reads printed digits, so effective values that differ from them change nothing.
        if (++sampled % 4 === 0) expect(evaluate(published, { digits: values, values: Object.fromEntries(Object.entries(values).map(([k, x]) => [k, 2 * x])) }).status === "holds").toBe(expected);
        if (expected) satisfied++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    seen += satisfied;
  }
  return seen;
}

test("the lowered formula and the published definition agree on shared letters and numbers", () => {
  expect(differential(3, [1, 2, 3], [
    rule([cage([a], letter("A")), cage([b, c], letter("A"))]), rule([cage([a], letter("A")), cage([b], letter("A")), cage([c], letter("A"))]),
    rule([cage([a, b], num(4)), cage([c], letter("A"))]), rule([cage([a], num(2)), cage([b], letter("A")), cage([c], letter("A"))]),
    `not ${rule([cage([a], letter("A")), cage([b], letter("A"))])}`, rule([cage([a], num(1.5))]),
  ])).toBeGreaterThan(0);
});

test("a cell listed twice in a cage counts once, in the lowering and in the published definition", () => {
  eq(rule([cage([a, a, b], letter("A")), cage([c], letter("A"))]), rule([cage([b, a], letter("A")), cage([c], letter("A"))]));
  eq(rule([cage([a, b], num(3)), cage([c, c], num(2))]), rule([cage([b, a], num(3)), cage([c], num(2))]));
  differs(rule([cage([a, a], num(2))]), rule([cage([a], num(4))]));
  expect(differential(3, [1, 2, 3], [
    rule([cage([a, a, b], letter("A")), cage([c], letter("A"))]), rule([cage([a, b], num(3)), cage([c, c], num(2))]),
    rule([cage([a, a], num(2)), cage([b, c, b], letter("A"))], true), rule([cage([c, a, c], letter("A")), cage([b, b], letter("B"))], true),
  ])).toBeGreaterThan(0);
});

test("the lowered formula and the published definition agree on distinct letters", () => {
  expect(differential(3, [1, 2, 3], [
    rule([cage([a], letter("A")), cage([b], letter("B"))], true), rule([cage([a], letter("A")), cage([b], letter("A")), cage([c], letter("B"))], true),
    rule([cage([a, b], letter("A")), cage([c], letter("B"))], true), rule([cage([a], letter("A")), cage([a], letter("B"))], true),
    rule([cage([a], letter("A")), cage([b], letter("B")), cage([c], letter("C"))], true), rule([cage([a], letter("A")), cage([b], letter("B")), cage([c], letter("C"))], false),
  ])).toBeGreaterThan(0);
  expect(differential(3, [0, 1, 2], [rule([cage([a, b], letter("A")), cage([c], letter("B"))], true)])).toBeGreaterThan(0);
});

test("the lowered formula and the published definition agree on number cages over a negative alphabet", () => {
  expect(differential(3, [-1, 0, 1], [rule([cage([a], num(-1)), cage([b, c], num(0))]), rule([cage([a, b], num(-2)), cage([c], num(0))]), rule([cage([a, b], num(-1))]), rule([cage([a], num(-2))]), `not ${rule([cage([a, b], num(-2))])}`])).toBeGreaterThan(0);
});

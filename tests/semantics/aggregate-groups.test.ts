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
const groups = (g: Cell[][], extra = "") => `aggregate-groups groups ${JSON.stringify(g)}${extra}`;

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
function reason(rules: string): string {
  const r = nf(rules);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  const found = r.normalForm!.coverage.filter(x => x.status === "unsupported");
  expect(found).toHaveLength(1);
  return (found[0] as { reason: string }).reason;
}
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(groups([[a], [b]]));
  const loaded = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2]]}\n---${body(groups([[a], [b]]))}` });
  // Evaluating once here loads the evaluator too, so the timed tests below measure only their own work.
  evaluate({ ...loaded.value!.rules[0], finite: undefined }, { digits: {} });
}, 30000);

test("sums: every group has the same total, and a cell listed twice counts twice", () => {
  const f = form(groups([[a, b], [c]]));
  expect(holds(f, at(1, 2, 3))).toBe(true);
  expect(holds(f, at(1, 2, 2))).toBe(false);
  const twice = form(groups([[a, a], [b]]));
  expect(holds(twice, at(2, 4))).toBe(true);
  expect(holds(twice, at(2, 2))).toBe(false);
  const empty = form(groups([[a], []]));
  expect(holds(empty, at(1))).toBe(false);
  expect(form(groups([[], []]))).toEqual({ op: "All", children: [] });
  expect(form(groups([[a]]))).toEqual({ op: "All", children: [] });
});

test("count: every group has the same number of cells", () => {
  expect(form(groups([[a, b], [c, d]], ' operation "count"'))).toEqual({ op: "All", children: [] });
  expect(form(groups([[a, b], [c]], ' operation "count"'))).toEqual({ op: "Any", children: [] });
  const repeated = form(groups([[a, a], [b, c]], ' operation "count"'));
  expect(holds(repeated, at(1, 2, 3))).toBe(true);
});

test("mean: the groups have the same average, and an empty group constrains nothing", () => {
  const f = form(groups([[a, b], [c]], ' operation "mean"'));
  expect(holds(f, at(1, 3, 2))).toBe(true);
  expect(holds(f, at(1, 3, 3))).toBe(false);
  const three = form(groups([[a, b], [c], [d, d]], ' operation "mean"'));
  expect(holds(three, at(1, 3, 2, 2))).toBe(true);
  expect(holds(three, at(1, 3, 2, 3))).toBe(false);
  const empty = form(groups([[a], [], [b]], ' operation "mean"'));
  expect(holds(empty, at(2, 2))).toBe(true);
  expect(holds(empty, at(2, 3))).toBe(false);
  expect(form(groups([[], []], ' operation "mean"'))).toEqual({ op: "All", children: [] });
});

test("product: single cells and empty groups, or groups that list the same cells", () => {
  const f = form(groups([[a], [b]], ' operation "product"'));
  expect(holds(f, at(2, 2))).toBe(true);
  expect(holds(f, at(2, 3))).toBe(false);
  const withEmpty = form(groups([[a], []], ' operation "product"'));
  expect(holds(withEmpty, at(1))).toBe(true);
  expect(holds(withEmpty, at(2))).toBe(false);
  expect(form(groups([[], []], ' operation "product"'))).toEqual({ op: "All", children: [] });
  expect(form(groups([[a, b], [b, a]], ' operation "product"'))).toEqual({ op: "All", children: [] });
});

test("repeats false requires the digits within each group to differ", () => {
  const f = form(groups([[a, b], [c]], " repeats false"));
  expect(holds(f, at(1, 2, 3))).toBe(true);
  expect(holds(f, at(2, 2, 4))).toBe(false);
  const listedTwice = form(groups([[a, a], [b]], " repeats false"));
  expect(holds(listedTwice, at(2, 4))).toBe(false);
  eq(groups([[a, b], [c]], " repeats true"), groups([[a, b], [c]]));
});

test("loop and combine change nothing without a line, and the default operation is sum", () => {
  eq(groups([[a, b], [c]], " loop true combine true"), groups([[a, b], [c]]));
  eq(groups([[a, b], [c]], ' operation "sum"'), groups([[a, b], [c]]));
});

test("the equal sums rule and the same sets of cells compare as equal", () => {
  eq(groups([[a, b], [c]]), `equal-sums groups ${JSON.stringify([[a, b], [c]])}`);
  eq(groups([[a, b], [c]], " repeats false"), `equal-sums groups ${JSON.stringify([[b, a], [c]])} repeats false`);
  eq(groups([[a, b], [c], [d]]), groups([[c], [d], [b, a]]));
  eq(groups([[a], [b]], ' operation "mean"'), groups([[a], [b]]));
});

test("near misses compare as different", () => {
  differs(groups([[a, b], [c]]), groups([[a, b], [d]]));
  differs(groups([[a, b], [c]]), groups([[a, b], [c]], " repeats false"));
  differs(groups([[a, b], [c]]), groups([[a, a], [c]]));
  differs(groups([[a, b], [c]]), groups([[a, b], [c]], ' operation "mean"'));
  differs(groups([[a, b], [c]]), groups([[a, b], [c], [d]]));
  differs(groups([[a, b], [c, d]], ' operation "count"'), groups([[a, b], [c]], ' operation "count"'));
  differs(groups([[a], [b]], ' operation "product"'), groups([[a], [c]], ' operation "product"'));
  differs(groups([[a, b], [c]]), `not ${groups([[a, b], [c]])}`);
});

test("combinations left uncovered keep a typed reason", () => {
  expect(reason(groups([[a, b], [c]], ` line ${JSON.stringify([a, b, c])}`))).toContain("runs of a line");
  expect(reason(groups([[a, b], [c]], ' channel "V"'))).toContain("V channel");
  expect(reason(groups([[a, b], [c, d]], ' operation "product"'))).toContain("more than one cell");
  expect(reason(groups([[a, b], [c]], ' operation "product"'))).toContain("more than one cell");
});

test("a group beyond the expansion bounds stays uncovered", () => {
  const many = Array.from({ length: 200 }, (_, i) => `r1c${i + 1}` as Cell);
  const board: BoardContext = { rows: 1, cols: 200, activeCells: many, alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9] };
  const run = (rules: string) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
  const pairs = run(groups([many, [many[0]]], " repeats false"));
  expect(pairs.normalForm!.coverage[0]).toMatchObject({ kind: "aggregate-groups", status: "unsupported", reason: expect.stringContaining("1,000,000") });
  const long = run(groups([many, many.slice(0, 100)], ' operation "mean"'));
  expect(long.normalForm!.coverage[0]).toMatchObject({ kind: "aggregate-groups", status: "unsupported", reason: expect.stringContaining("10,000") });
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
    const rule = { ...compiled.value!.rules[0], finite: undefined };
    let satisfied = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const expected = evaluate(rule, { digits: values }).status === "holds";
        // The rule reads printed digits, so effective values that differ from them change nothing.
        if (++sampled % 4 === 0) expect(evaluate(rule, { digits: values, values: Object.fromEntries(Object.entries(values).map(([k, x]) => [k, 2 * x])) }).status === "holds").toBe(expected);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
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

test("the lowered formula and the published definition agree on sums", () => {
  expect(differential(4, [1, 2, 3], [groups([[a, b], [c]]), groups([[a, a], [b, c], [d]]), groups([[a], [], [b]])])).toBeGreaterThan(0);
});

test("the lowered formula and the published definition agree on repeats false, counts and negation", () => {
  expect(differential(4, [1, 2, 3], [groups([[a, b], [c]], " repeats false"), groups([[a, a], [b]], " repeats false"), groups([[a, b], [c, d]], ' operation "count"'), groups([[a, b], [c]], ' operation "count"'), `not ${groups([[a, b], [c]])}`])).toBeGreaterThan(0);
});

test("the lowered formula and the published definition agree on means", () => {
  expect(differential(4, [1, 2, 3], [groups([[a, b], [c]], ' operation "mean"'), groups([[a, b], [c], [d, d]], ' operation "mean"'), groups([[a], [], [b]], ' operation "mean"'), groups([[a, a, b], [c, d]], ' operation "mean"')])).toBeGreaterThan(0);
});

test("the lowered formula and the published definition agree on products", () => {
  expect(differential(4, [1, 2, 3], [groups([[a], [b]], ' operation "product"'), groups([[a], []], ' operation "product"'), groups([[a, b], [b, a]], ' operation "product"'), groups([[a], [b], []], ' operation "product" repeats false')])).toBeGreaterThan(0);
  expect(differential(3, [0, 1, 2, 3], [groups([[a, b], [c]], ' operation "mean"'), groups([[a], [b]], ' operation "product"')])).toBeGreaterThan(0);
});

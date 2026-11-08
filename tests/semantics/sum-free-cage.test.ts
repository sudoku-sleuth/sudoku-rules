import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
const [a, b, c, d] = cells;
const boardOf = (alphabet: number[], n = 4): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, alphabet = nine, n = 4) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(alphabet, n));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const free = (list: Cell[], modulus: number) => `sum-free-cage ${list.join("-")} modulus ${modulus}`;

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
function form(rules: string, alphabet = nine, n = 4) { const r = nf(rules, alphabet, n); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(free([a, b], 10));
  const loaded = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2]]}\n---${body(free([a, b], 10))}` });
  evaluate({ ...loaded.value!.rules[0], finite: undefined }, { digits: { r1c1: 1, r1c2: 3 } });
}, 30000);

test("the page example: 1 and 3 modulo 10 are sum free, 1 and 2 are not", () => {
  const f = form(free([a, b], 10));
  expect(holds(f, at(1, 3))).toBe(true);
  expect(holds(f, at(3, 1))).toBe(true);
  expect(holds(f, at(1, 2))).toBe(false);
  // A digit added to itself counts.
  expect(holds(f, at(2, 4))).toBe(false);
  // Digits that repeat are not a cage.
  expect(holds(f, at(3, 3))).toBe(false);
});

// The published definition, written out directly: distinct digits, and no sum of two of them (one with itself included) leaves a cage digit as its remainder.
const reference = (digits: number[], modulus: number) => new Set(digits).size === digits.length && digits.every(x => digits.every(y => !digits.includes((((x + y) % modulus) + modulus) % modulus)));

test("a digit added to itself is checked even in a one-cell cage", () => {
  // Only zero is its own double modulo any modulus above zero.
  const f = form(free([a], 10), [0, 1, 2, 5]);
  expect(holds(f, at(0))).toBe(false);
  expect(holds(f, at(5))).toBe(true);
  expect(holds(f, at(1))).toBe(true);
});

test("a small modulus wraps the sums", () => {
  const f = form(free([a, b], 3));
  expect(holds(f, at(1, 4))).toBe(true);
  expect(holds(f, at(3, 6))).toBe(true);
  expect(holds(f, at(1, 2))).toBe(false);
  expect(holds(f, at(2, 5))).toBe(true);
  const seven = form(free([a, b, c], 7));
  expect(holds(seven, at(3, 5, 6))).toBe(false);
  for (const x of nine) for (const y of nine) for (const z of nine) expect(holds(seven, at(x, y, z))).toBe(reference([x, y, z], 7));
});

test("a modulus of one makes every remainder zero, and a bad modulus is false", () => {
  const one = form(free([a, b], 1), [0, 1, 2]);
  expect(holds(one, at(1, 2))).toBe(true);
  expect(holds(one, at(0, 2))).toBe(false);
  expect(form(free([a, b], 0))).toEqual({ op: "Any", children: [] });
});

test("negative digits take a nonnegative remainder", () => {
  const f = form(free([a, b], 5), [-4, -1, 1, 2]);
  for (const x of [-4, -1, 1, 2]) for (const y of [-4, -1, 1, 2]) expect(holds(f, at(x, y))).toBe(reference([x, y], 5));
  expect(holds(f, at(-1, 2))).toBe(reference([-1, 2], 5));
});

test("a cage with more cells than digits, and a repeated cell, behave as sets", () => {
  expect(form(free([a, b, c], 10), [1, 2])).toEqual({ op: "Any", children: [] });
  eq(`sum-free-cage ${a}-${b}-${a} modulus 10`, free([a, b], 10));
});

test("order and the cell order do not matter; near misses differ", () => {
  eq(free([a, b], 10), free([b, a], 10));
  differs(free([a, b], 10), free([a, b], 9));
  differs(free([a, b], 10), free([a, c], 10));
  differs(free([a, b], 10), free([a, b, c], 10));
  differs(free([a, b], 10), `unique ${a}-${b}`);
  differs(free([a, b], 10), `not ${free([a, b], 10)}`);
  differs(free([a, b], 10), free([a, b], 11));
});

test("a modulus beyond the safe integers stays uncovered", () => {
  const r = nf(free([a, b], 1e20));
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage[0]).toMatchObject({ kind: "sum-free-cage", status: "unsupported", reason: expect.stringContaining("safe integer") });
});

test("a cage beyond the expansion bound stays uncovered", () => {
  const many = Array.from({ length: 32 }, (_, i) => `r1c${i + 1}` as Cell);
  const board: BoardContext = { rows: 1, cols: 32, activeCells: many, alphabet: Array.from({ length: 64 }, (_, i) => i + 1) };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(free(many, 100))}` }, board);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage[0]).toMatchObject({ kind: "sum-free-cage", status: "unsupported", reason: expect.stringContaining("1,000,000") });
});

function differential(n: number, symbols: number[], entries: string[]): number {
  let seen = 0, rows = 0;
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
        const expected = evaluate(published, { digits: values }).status === "holds";
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        // The rule reads printed digits, so effective values that differ from them change nothing.
        if (++rows % 4 === 0) expect(evaluate(published, { digits: values, values: Object.fromEntries(Object.entries(values).map(([k, x]) => [k, 2 * x])) }).status === "holds").toBe(expected);
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

test("the lowered formula and the published definition agree on cages of one to three cells", () => {
  expect(differential(3, [1, 2, 3], [free([a, b, c], 7), free([a], 6)])).toBeGreaterThan(0);
});

test("the lowered formula and the published definition agree on pairs, and under negation", () => {
  expect(differential(2, [1, 2, 3, 4, 5], [free([a, b], 3), `not ${free([a, b], 10)}`])).toBeGreaterThan(0);
});

test("the lowered formula and the published definition agree with zero, a modulus of one, and negative digits", () => {
  expect(differential(2, [0, 1, 2, 3], [free([a, b], 4), free([a], 2), free([a, b], 1)])).toBeGreaterThan(0);
  expect(differential(2, [-3, -1, 2, 4], [free([a, b], 5), free([a], 8)])).toBeGreaterThan(0);
});

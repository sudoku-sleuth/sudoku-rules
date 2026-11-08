import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const grid = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${(i % cols) + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[]): BoardContext => ({ rows, cols, activeCells: grid(rows, cols), alphabet, regions: [grid(rows, cols)] });
const nf = (rules: string, rows = 2, cols = 2, alphabet = nine) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(rows, cols, alphabet));
const eq = (x: string, y: string, rows = 2, cols = 2) => expect(compare(nf(x, rows, cols), nf(y, rows, cols)).status).toBe("equivalent");
const differs = (x: string, y: string, rows = 2, cols = 2) => { const r = compare(nf(x, rows, cols), nf(y, rows, cols)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const layered = (cells: string, upper: string) => `layered-cage ${cells} upper [${upper}]`;

function holds(f: Formula, v: Record<string, number>): boolean {
  switch (f.op) {
    case "All": return f.children.every(x => holds(x, v));
    case "Any": return f.children.some(x => holds(x, v));
    case "Not": return !holds(f.child, v);
    case "Pair": return f.table.some(([x, y]) => x === v[f.cells[0]] && y === v[f.cells[1]]);
    case "Allowed": return f.values.includes(v[f.cell]);
    case "Distinct": return new Set(f.cells.map(c => v[c])).size === f.cells.length;
    case "CountAtLeast": return f.cells.filter(c => v[c] === f.digit).length >= f.count;
    case "SumEqual": return f.left.reduce((n, c) => n + BigInt(v[c]), 0n) === f.right.reduce((n, c) => n + BigInt(v[c]), 0n);
    case "SumTotal": return f.cells.reduce((n, c) => n + BigInt(v[c]), 0n) === BigInt(f.total);
  }
}
function form(rules: string, rows = 2, cols = 2, alphabet = nine) { const r = nf(rules, rows, cols, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (rows: number, cols: number, ...v: number[]) => Object.fromEntries(v.map((x, i) => [grid(rows, cols)[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(layered("r1c1-r2c1", "2,4"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2, r2c1, r2c2]]}\n---${body(layered("r1c1-r2c1", "2"))}` });
}, 30000);

test("an upper digit must sit above a lower digit in another row", () => {
  const f = form(layered("r1c1-r2c1", "2,4,6,8"));
  expect(holds(f, at(2, 2, 2, 0, 1, 0))).toBe(true);
  expect(holds(f, at(2, 2, 1, 0, 2, 0))).toBe(false);
  expect(holds(f, at(2, 2, 2, 0, 4, 0))).toBe(true);
  expect(holds(f, at(2, 2, 1, 0, 3, 0))).toBe(true);
});

test("cells in one row share a layer", () => {
  const f = form(layered("r1c1-r1c2", "2,4"), 1, 2);
  expect(holds(f, at(1, 2, 2, 4))).toBe(true);
  expect(holds(f, at(1, 2, 1, 3))).toBe(true);
  expect(holds(f, at(1, 2, 2, 1))).toBe(false);
  expect(holds(f, at(1, 2, 3, 4))).toBe(false);
});

test("a three-row cage with a split row", () => {
  const f = form(layered("r1c1-r2c1-r2c2-r3c1", "1,2"), 3, 2);
  // Rows read top to bottom: upper, mixed layer is forbidden, lower.
  expect(holds(f, at(3, 2, 1, 0, 2, 2, 3, 0))).toBe(true);
  expect(holds(f, at(3, 2, 1, 0, 2, 3, 3, 0))).toBe(false);
  expect(holds(f, at(3, 2, 3, 0, 1, 2, 3, 0))).toBe(false);
  expect(holds(f, at(3, 2, 1, 0, 1, 2, 2, 0))).toBe(true);
  expect(holds(f, at(3, 2, 3, 0, 3, 3, 1, 0))).toBe(false);
});

test("a cage in a single layer, or with no upper digit in the alphabet, constrains the rows only by their shared layer", () => {
  const none = form(layered("r1c1-r2c1", "7"), 2, 2, [1, 2, 3]);
  for (const x of [1, 2, 3]) for (const y of [1, 2, 3]) expect(holds(none, at(2, 2, x, 0, y, 0))).toBe(true);
  const every = form(layered("r1c1-r2c1", "1,2,3"), 2, 2, [1, 2, 3]);
  for (const x of [1, 2, 3]) for (const y of [1, 2, 3]) expect(holds(every, at(2, 2, x, 0, y, 0))).toBe(true);
});

test("the cell order, the upper list order and repeats, and a repeated cell do not matter", () => {
  eq(layered("r1c1-r2c1", "2,4"), layered("r2c1-r1c1", "4,2"));
  eq(layered("r1c1-r2c1", "2,4"), layered("r1c1-r2c1", "4,2,2"));
  eq(layered("r1c1-r2c1", "2,4"), layered("r1c1-r2c1-r1c1", "2,4"));
  eq(layered("r1c1-r2c1", "2,10"), layered("r1c1-r2c1", "2"));
});

test("near misses compare as different", () => {
  differs(layered("r1c1-r2c1", "2,4"), layered("r1c1-r2c1", "2,5"));
  differs(layered("r1c1-r2c1", "2,4"), layered("r1c1-r2c2", "2,4"));
  differs(layered("r1c1-r2c1", "2,4"), layered("r1c1-r2c1-r2c2", "2,4"));
  differs(layered("r1c1-r2c1", "2,4"), `not ${layered("r1c1-r2c1", "2,4")}`);
  differs(layered("r1c1-r2c1", "2,4"), `unique r1c1-r2c1`);
  differs(layered("r1c1-r2c1", "2,4"), layered("r1c1-r2c1", "1,3,5,6,7,8,9"));
});

test("a cage beyond the expansion bound stays uncovered with a reason", () => {
  const big = grid(1, 200);
  const board: BoardContext = { rows: 1, cols: 200, activeCells: big, alphabet: nine };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(layered(big.join("-"), "2"))}` }, board);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage[0]).toMatchObject({ kind: "layered-cage", status: "unsupported", reason: expect.stringContaining("exceeds 1,000,000") });
});

function differential(rows: number, cols: number, symbols: number[], entries: string[]): number {
  let seen = 0;
  const used = grid(rows, cols);
  const board = boardOf(rows, cols, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "layered-cage").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    // The evaluator runs the lowered formula itself when a rule has one, so it is switched off to compare with the published definition.
    const rule = { ...compiled.value!.rules[0], finite: undefined };
    let satisfied = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        const expected = evaluate(rule, { digits: values }).status === "holds";
        // The rule reads printed digits, so effective values that differ from them change nothing.
        expect(evaluate(rule, { digits: values, values: Object.fromEntries(Object.entries(values).map(([k, x]) => [k, 2 * x])) }).status === "holds").toBe(expected);
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

test("the lowered formula and the public evaluator agree on a column and a split row", () => {
  expect(differential(2, 2, [1, 2, 3], [layered("r1c1-r2c1", "1"), layered("r1c1-r1c2-r2c1", "2,3"), `not ${layered("r1c1-r2c2", "3")}`])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on three rows, repeated cells, absent digits and a single row", () => {
  expect(differential(3, 2, [1, 2, 3], [layered("r1c1-r2c1-r3c2", "1"), layered("r1c1-r1c2-r2c2-r3c1", "1,2"), `not ${layered("r1c2-r2c1-r3c1", "2")}`])).toBeGreaterThan(0);
  expect(differential(1, 4, [1, 2, 3], [layered("r1c1-r1c2-r1c3-r1c4", "2")])).toBeGreaterThan(0);
  expect(differential(2, 2, [1, 2, 3], [layered("r1c1-r2c2-r1c1", "9"), layered("r2c1-r1c2", "1,2,3"), layered("r1c1-r2c1-r2c2", "2")])).toBeGreaterThan(0);
});

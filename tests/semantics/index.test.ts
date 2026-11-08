import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const grid = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${(i % cols) + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[], active = grid(rows, cols)): BoardContext => ({ rows, cols, activeCells: active, alphabet, regions: [active] });
const nf = (rules: string, rows = 2, cols = 3, alphabet = [1, 2, 3], active?: Cell[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(rows, cols, alphabet, active));
const index = (axis: "row" | "column", ...marked: Cell[]) => `index ${marked.join("-")} axis "${axis}"`;
const differs = (x: string, y: string, rows = 2, cols = 3) => { const r = compare(nf(x, rows, cols), nf(y, rows, cols)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };

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
function form(rules: string, rows = 2, cols = 3, alphabet = [1, 2, 3]) { const r = nf(rules, rows, cols, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const put = (rows: number, cols: number, ...v: number[]) => Object.fromEntries(grid(rows, cols).map((c, i) => [c, v[i]]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(index("column", "r1c1"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(index("column", "r1c1"))}` });
}, 30000);

test("column indexing: the marked digit picks a cell of its row that holds the marked column number", () => {
  const f = form(index("column", "r1c2"));
  // r1c2 = 3 points at r1c3, which must hold 2.
  expect(holds(f, put(2, 3, 1, 3, 2, 1, 1, 1))).toBe(true);
  expect(holds(f, put(2, 3, 1, 3, 3, 1, 1, 1))).toBe(false);
  // r1c2 = 1 points at r1c1.
  expect(holds(f, put(2, 3, 2, 1, 1, 1, 1, 1))).toBe(true);
  expect(holds(f, put(2, 3, 1, 1, 1, 1, 1, 1))).toBe(false);
  // Only the marked cell's own row is read.
  expect(holds(f, put(2, 3, 1, 3, 3, 1, 1, 2))).toBe(false);
});

test("a marked cell in column 1 is the position of the digit 1 in its row", () => {
  const f = form(index("column", "r2c1"));
  expect(holds(f, put(2, 3, 3, 3, 3, 2, 1, 3))).toBe(true);
  expect(holds(f, put(2, 3, 3, 3, 3, 2, 2, 3))).toBe(false);
  expect(holds(f, put(2, 3, 1, 1, 1, 1, 3, 3))).toBe(true);
});

test("row indexing reads the marked cell's column and the row number", () => {
  // Row number 3 is not in a two-symbol alphabet, so a marked cell in row 3 cannot be met.
  expect(form(index("row", "r3c1"), 3, 2, [1, 2])).toEqual({ op: "Any", children: [] });
  const g = form(index("row", "r2c2"), 3, 2);
  // r2c2 = 3 points at r3c2, which must hold 2.
  expect(holds(g, put(3, 2, 1, 1, 1, 3, 1, 2))).toBe(true);
  expect(holds(g, put(3, 2, 1, 1, 1, 3, 1, 3))).toBe(false);
  // r2c2 = 1 points at r1c2.
  expect(holds(g, put(3, 2, 1, 2, 1, 1, 1, 1))).toBe(true);
  // The other column is not read.
  expect(holds(g, put(3, 2, 1, 1, 1, 1, 1, 1))).toBe(false);
});

test("several marked cells in one row must all hold", () => {
  const f = form(index("column", "r1c1", "r1c3"));
  // r1c1 = 2 -> r1c2 holds 1; r1c3 = 1 -> r1c1 holds 3. Both cannot hold at once with r1c1 = 2.
  expect(holds(f, put(2, 3, 2, 1, 1, 1, 1, 1))).toBe(false);
  // r1c1 = 3 -> r1c3 holds 1; r1c3 = 1 -> r1c1 holds 3.
  expect(holds(f, put(2, 3, 3, 2, 1, 1, 1, 1))).toBe(true);
  // r1c1 = 1 -> r1c1 holds 1; r1c3 = 2 -> r1c2 holds 3.
  expect(holds(f, put(2, 3, 1, 3, 2, 1, 1, 1))).toBe(true);
  expect(holds(f, put(2, 3, 1, 2, 2, 1, 1, 1))).toBe(false);
});

test("a marked cell can index itself", () => {
  const f = form(index("column", "r1c2"));
  // r1c2 = 2 points at itself, which would have to hold the column number 2.
  expect(holds(f, put(2, 3, 1, 2, 1, 1, 1, 1))).toBe(true);
  // A cell in column 3 pointing at itself would need to hold 3 and 3.
  const g = form(index("column", "r1c3"));
  expect(holds(g, put(2, 3, 1, 1, 3, 1, 1, 1))).toBe(true);
  expect(holds(g, put(2, 3, 1, 1, 2, 1, 1, 1))).toBe(false);
});

test("a board whose side differs from the alphabet reaches only the symbols that exist as positions", () => {
  // Five symbols on a three-wide board: 4 and 5 name no cell.
  const wide = form(index("column", "r1c2"), 1, 3, [1, 2, 3, 4, 5]);
  expect(holds(wide, { r1c1: 2, r1c2: 1, r1c3: 5 })).toBe(true);
  expect(holds(wide, { r1c1: 2, r1c2: 4, r1c3: 2 })).toBe(false);
  expect(holds(wide, { r1c1: 2, r1c2: 5, r1c3: 2 })).toBe(false);
  // Two symbols on a three-wide board: column number 3 is not in the alphabet, so a marked cell in column 3 cannot be met.
  expect(form(index("column", "r1c3"), 1, 3, [1, 2])).toEqual({ op: "Any", children: [] });
  const short = form(index("column", "r1c2"), 1, 3, [1, 2]);
  expect(holds(short, { r1c1: 2, r1c2: 1, r1c3: 1 })).toBe(true);
  expect(holds(short, { r1c1: 1, r1c2: 2, r1c3: 1 })).toBe(true);
  // Zero-based and negative symbols are not positions.
  const zero = form(index("column", "r1c2"), 1, 3, [0, 1, 2]);
  expect(holds(zero, { r1c1: 2, r1c2: 1, r1c3: 0 })).toBe(true);
  expect(holds(zero, { r1c1: 2, r1c2: 0, r1c3: 0 })).toBe(false);
});

test("a line that crosses an inactive cell stays uncovered with a typed reason", () => {
  const active = grid(2, 3).filter(c => c !== "r1c3");
  const r = nf(index("column", "r1c1"), 2, 3, [1, 2, 3], active);
  expect(r.normalForm!.coverage.find(x => x.kind === "index")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("inactive cell") });
  // The other row is whole.
  expect(nf(index("column", "r2c1"), 2, 3, [1, 2, 3], active).normalForm!.coverage.find(x => x.kind === "index")).toMatchObject({ status: "lowered" });
});

test("a value modifier does not uncover the declaration because it reads printed digits", () => {
  const r = nf(`${index("column", "r1c1")}\nvalue-modifier factor 2 offset 0 exactly [["r1c3"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "index")).toMatchObject({ status: "lowered" });
});

test("equal normal forms: a re-ordered or repeated cell list and an equal numbered room agree", () => {
  const same = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
  same(index("column", "r1c1", "r1c3"), index("column", "r1c3", "r1c1"));
  same(index("column", "r1c1", "r1c1"), index("column", "r1c1"));
  same(index("column", "r1c1", "r1c3"), `${index("column", "r1c1")}\n${index("column", "r1c3")}`);
  // Column indexing from column 1 reads its row from the marked cell, so it matches the numbered room on that row with digit 1.
  same(index("column", "r1c1"), "numbered-room r1c1-r1c2-r1c3 digit 1");
});

test("near misses compare as different", () => {
  differs(index("column", "r1c2"), index("row", "r1c2"));
  differs(index("column", "r1c2"), index("column", "r1c3"));
  differs(index("column", "r1c2"), index("column", "r2c2"));
  differs(index("column", "r1c2"), index("column", "r1c2", "r1c3"));
  differs(index("column", "r1c2"), `not ${index("column", "r1c2")}`);
  differs(index("row", "r1c2"), index("row", "r2c2"));
});

function differential(rows: number, cols: number, symbols: number[], entries: string[]): number {
  let seen = 0;
  const used = grid(rows, cols), n = used.length;
  const board = boardOf(rows, cols, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "index").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    const walk = (i: number, values: Record<string, number>) => {
      if (i === n) {
        const expected = evaluate(rule, { digits: values }).status === "holds";
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        if (expected) seen++;
        return;
      }
      for (const x of symbols) walk(i + 1, { ...values, [used[i]]: x });
    };
    walk(0, {});
  }
  return seen;
}

test("the lowered formula and the public evaluator agree on column indexing", () => {
  expect(differential(2, 3, [1, 2, 3], [index("column", "r1c1"), index("column", "r1c2"), index("column", "r1c2", "r2c3"), `not ${index("column", "r2c2")}`])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on row indexing", () => {
  expect(differential(3, 2, [1, 2, 3], [index("row", "r1c1"), index("row", "r2c2"), index("row", "r2c1", "r3c1")])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree when the alphabet differs from the side", () => {
  expect(differential(1, 3, [1, 2, 3, 4, 5], [index("column", "r1c1"), index("column", "r1c2", "r1c3")])).toBeGreaterThan(0);
  expect(differential(2, 2, [0, 1, 2], [index("column", "r1c2"), index("row", "r2c2")])).toBeGreaterThan(0);
  expect(differential(1, 3, [1, 2], [index("column", "r1c3"), index("column", "r1c2")])).toBeGreaterThanOrEqual(0);
});

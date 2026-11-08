import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const grid = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${(i % cols) + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[], active = grid(rows, cols)): BoardContext => ({ rows, cols, activeCells: active, alphabet, regions: [active] });
const nf = (rules: string, rows = 2, cols = 2, alphabet = [1, 2], active?: Cell[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(rows, cols, alphabet, active));
const modifier = `value-modifier factor 2 offset 0 exactly [["r1c2"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;

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
function form(rows: number, cols: number, alphabet: number[], active?: Cell[], rules = "super-indexing") {
  const r = nf(rules, rows, cols, alphabet, active); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution;
}
const put = (cells: Cell[], ...v: number[]) => Object.fromEntries(cells.map((c, i) => [c, v[i]]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf("super-indexing");
  compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 2, symbols: [1,2], regions: [[r1c1, r1c2, r2c1, r2c2]]}\n---${body("super-indexing")}` });
}, 30000);

test("each cell's row, column and digit cycle to the partner cells", () => {
  const g = grid(2, 2);
  const f = form(2, 2, [1, 2]);
  // r1c2 = 2 needs r2c2 = 1 and r2c1 = 2.
  expect(holds(f, put(g, 1, 2, 2, 1))).toBe(true);
  expect(holds(f, put(g, 1, 2, 2, 2))).toBe(false);
  expect(holds(f, put(g, 1, 2, 1, 1))).toBe(false);
  expect(holds(f, put(g, 1, 1, 1, 1))).toBe(false);
  expect(holds(f, put(g, 2, 2, 2, 2))).toBe(false);
});

test("on three by three the cycle fixes the board", () => {
  const g = grid(3, 3);
  const f = form(3, 3, [1, 2, 3]);
  const solutions: number[][] = [];
  const walk = (i: number, v: number[]) => {
    if (i === 9) { if (holds(f, put(g, ...v))) solutions.push(v); return; }
    for (const d of [1, 2, 3]) walk(i + 1, [...v, d]);
  };
  walk(0, []);
  expect(solutions.length).toBeGreaterThan(0);
  // The standard identity layout: every digit d at row r column c with its cycle partners all consistent.
  for (const s of solutions) for (const [i, cell] of g.entries()) {
    const r = Math.floor(i / 3) + 1, c = (i % 3) + 1, d = s[i];
    expect(s[(c - 1) * 3 + (d - 1)]).toBe(r);
    expect(s[(d - 1) * 3 + (r - 1)]).toBe(c);
    expect(cell).toBe(`r${r}c${c}`);
  }
});

test("an inactive partner cell, an unequal board or a missing row number can never be met", () => {
  const g = grid(2, 2);
  // Without r2c2 the only digit that stays possible is the one whose partners are all active.
  const hole = form(2, 2, [1, 2], g.filter(c => c !== "r2c2"));
  expect(holds(hole, put(g.filter(c => c !== "r2c2"), 1, 2, 2))).toBe(false);
  expect(form(2, 3, [1, 2, 3])).toEqual({ op: "Any", children: [] });
  expect(form(3, 2, [1, 2, 3])).toEqual({ op: "Any", children: [] });
  // The alphabet must hold the row and column numbers the cycle writes.
  expect(form(2, 2, [2, 3])).toEqual({ op: "Any", children: [] });
  expect(form(2, 2, [0, 5])).toEqual({ op: "Any", children: [] });
});

test("digits outside 1 to the board size are never held", () => {
  const g = grid(2, 2);
  const f = form(2, 2, [0, 1, 2, 3]);
  expect(holds(f, put(g, 1, 2, 2, 1))).toBe(true);
  expect(holds(f, put(g, 0, 2, 2, 1))).toBe(false);
  expect(holds(f, put(g, 3, 2, 2, 1))).toBe(false);
});

test("repeating the declaration or negating it behaves as one clue", () => {
  expect(compare(nf("super-indexing"), nf("super-indexing\nsuper-indexing")).status).toBe("equivalent");
  const r = compare(nf("super-indexing"), nf("not super-indexing"));
  expect(r.status).not.toBe("equivalent");
  expect(r.covered).toBe("structural-difference");
});

test("near misses compare as different", () => {
  const differs = (x: string, y: string, ...board: [number, number, number[]]) => {
    const r = compare(nf(x, ...board), nf(y, ...board));
    expect(r.status).not.toBe("equivalent");
    expect(r.covered).toBe("structural-difference");
  };
  differs("super-indexing", "unique r1c1-r1c2", 2, 2, [1, 2]);
  differs("super-indexing", "index r1c1-r1c2 axis \"column\"", 2, 2, [1, 2]);
  expect(compare(nf("super-indexing", 2, 2, [1, 2]), nf("super-indexing", 2, 2, [1, 2, 3])).covered).toBe("structural-difference");
});

test("the declaration is covered beside a value modifier because it reads printed digits", () => {
  const r = nf(`super-indexing\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "super-indexing")).toMatchObject({ status: "lowered" });
});

test("a standard-size board lowers within the expansion bound", () => {
  const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const r = nf("super-indexing", 9, 9, nine);
  expect(r.normalForm!.coverage.find(x => x.kind === "super-indexing")).toMatchObject({ status: "lowered" });
});

/** Exhaustive when `sample` is 1; otherwise the evaluator is run on every satisfying assignment and on every `sample`-th other one. */
function differential(rows: number, cols: number, symbols: number[], active = grid(rows, cols), sample = 1): number {
  let seen = 0, index = 0;
  const board = boardOf(rows, cols, symbols, active);
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body("super-indexing")}` }, board);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], activeCells: [${active.join(", ")}], regions: [[${active.join(", ")}]]}\n---${body("super-indexing")}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rule = compiled.value!.rules[0];
  const walk = (i: number, values: Record<string, number>) => {
    if (i === active.length) {
      const got = holds(r.normalForm!.solution, values);
      if (got) seen++;
      if (got || index++ % sample === 0) expect([JSON.stringify(values), evaluate(rule, { digits: values }).status === "holds"]).toEqual([JSON.stringify(values), got]);
      return;
    }
    for (const x of symbols) walk(i + 1, { ...values, [active[i]]: x });
  };
  walk(0, {});
  return seen;
}

test("the lowered formula and the public evaluator agree on two by two boards", () => {
  expect(differential(2, 2, [1, 2])).toBeGreaterThan(0);
  expect(differential(2, 2, [1, 2, 3])).toBeGreaterThan(0);
  expect(differential(2, 2, [0, 1, 2])).toBeGreaterThan(0);
  expect(differential(2, 2, [2, 3, 4])).toBe(0);
  expect(differential(2, 3, [1, 2], grid(2, 3))).toBe(0);
});

test("the lowered formula and the public evaluator agree on three by three boards", () => {
  expect(differential(3, 3, [1, 2, 3], grid(3, 3), 150)).toBeGreaterThan(0);
  const hole = grid(3, 3).filter(c => c !== "r2c2");
  differential(3, 3, [1, 2, 3], hole, 60);
});

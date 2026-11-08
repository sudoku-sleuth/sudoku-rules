import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const gridCells = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${i % cols + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[], active = gridCells(rows, cols)): BoardContext => ({ rows, cols, activeCells: active, alphabet, regions: [active] });
const nf = (rules: string, board: BoardContext) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
const row = (n: number, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => boardOf(1, n, alphabet);
const line = (n: number) => gridCells(1, n).join("-");
const differs = (x: string, y: string, board: BoardContext) => { const r = compare(nf(x, board), nf(y, board)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const equal = (x: string, y: string, board: BoardContext) => expect(compare(nf(x, board), nf(y, board)).status).toBe("equivalent");

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
function form(rules: string, board: BoardContext) { const r = nf(rules, board); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [`r1c${i + 1}`, x]));

const dg = (classes: string, minLength: number) => `diagonal-lines classes "${classes}" minLength ${minLength}`;
const grid = (rows: number, cols: number, ...v: number[]) => Object.fromEntries(v.map((x, i) => [gridCells(rows, cols)[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(dg("parity", 3), boardOf(3, 3, [1, 2, 3]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 3, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3]]}\n---${body(dg("parity", 3))}` });
}, 30000);

// The two diagonals of a three-by-three board are (g0, g4, g8) and (g2, g4, g6); the other cells are filler.
const diagonals = (g0: number, g4: number, g8: number, g2: number, g6: number) => grid(3, 3, g0, 1, g2, 1, g4, 1, g6, 1, g8);

test("a long diagonal stays in one class or has each class once in every window", () => {
  const f = form(dg("parity", 3), boardOf(3, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
  expect(holds(f, diagonals(1, 3, 5, 2, 4))).toBe(true);
  expect(holds(f, diagonals(2, 4, 6, 2, 4))).toBe(true);
  expect(holds(f, diagonals(1, 2, 1, 1, 1))).toBe(true);
  expect(holds(f, diagonals(2, 4, 3, 1, 1))).toBe(false);
  expect(holds(f, diagonals(1, 3, 5, 2, 3))).toBe(false);
  expect(holds(f, diagonals(1, 2, 4, 2, 4))).toBe(false);
});

test("diagonals shorter than three cells, or than minLength, are not covered", () => {
  const board = boardOf(3, 3, [1, 2, 3]);
  expect(form(dg("parity", 3), boardOf(2, 2, [1, 2]))).toEqual({ op: "All", children: [] });
  expect(form(dg("parity", 5), board)).toEqual({ op: "All", children: [] });
  expect(form(dg("parity", 3.5), board)).toEqual({ op: "All", children: [] });
  expect(form(dg("parity", 0), boardOf(2, 2, [1, 2]))).toEqual({ op: "All", children: [] });
  equal(dg("parity", 0), dg("parity", 3), board);
  equal(dg("parity", 2.5), dg("parity", 3), board);
  differs(dg("parity", 3), dg("parity", 4), boardOf(4, 4, [1, 2]));
  expect(holds(form(dg("parity", 4), boardOf(4, 4, [1, 2])), grid(4, 4, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1))).toBe(true);
});

test("remainders and thirds use the classes of the stated system", () => {
  const board = boardOf(3, 3, [1, 2, 3, 4, 5, 6]);
  const mod3 = form(dg("mod3", 3), board);
  expect(holds(mod3, diagonals(1, 2, 3, 3, 1))).toBe(true);
  expect(holds(mod3, diagonals(1, 2, 6, 3, 1))).toBe(true);
  expect(holds(mod3, diagonals(1, 2, 4, 3, 1))).toBe(false);
  const entropy = form(dg("entropy", 3), board);
  expect(holds(entropy, diagonals(1, 3, 5, 1, 5))).toBe(true);
  expect(holds(entropy, diagonals(1, 2, 3, 1, 5))).toBe(false);
  const notThirds = nf(dg("entropy", 3), boardOf(3, 3, [1, 2, 3, 4]));
  expect(notThirds.normalForm!.coverage.find(x => x.kind === "diagonal-lines")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("multiple of three") });
});

test("a board with an inactive cell stays uncovered", () => {
  const r = nf(dg("parity", 3), boardOf(3, 3, [1, 2], gridCells(3, 3).filter(c => c !== "r2c2")));
  expect(r.normalForm!.coverage.find(x => x.kind === "diagonal-lines")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("inactive") });
});

test("bad parameters are invalid", () => {
  const board = boardOf(3, 3, [1, 2]);
  for (const text of [dg("colour", 3), 'diagonal-lines classes "parity" minLength "x"', 'diagonal-lines classes "parity"', "diagonal-lines minLength 3", 'diagonal-lines r1c1-r2c2 classes "parity" minLength 3']) expect(nf(text, board).status).toBe("invalid");
});

test("near misses compare as different", () => {
  const board = boardOf(4, 4, [1, 2, 3, 4, 5, 6]);
  const base = dg("parity", 3);
  equal(base, dg("parity", 3), board);
  differs(base, dg("mod3", 3), board);
  differs(base, dg("parity", 4), board);
  differs(base, `not ${base}`, board);
  differs(dg("mod3", 3), dg("entropy", 3), board);
});

test("the declaration reads printed digits, so effective values do not change it", () => {
  const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  expect(nf(dg("parity", 3) + modifier, boardOf(3, 3, [1, 2])).normalForm?.coverage.find(x => x.kind === "diagonal-lines")?.status).toBe("lowered");
});

/**
 * The public evaluator runs a declaration's own lowered formula when there is one. Removing it (`finite: undefined`) makes the evaluator
 * interpret the page's published formula, which is what the normal form is compared with. Diagonal lines read printed digits only, so
 * the effective values passed alongside differ from the digits to show they are ignored. `step` walks every step-th assignment in
 * counting order, which reaches every digit in every cell without visiting them all.
 */
function differential(rows: number, cols: number, symbols: number[], classes: "parity" | "mod3" | "entropy", minLength: number, step = 1): number {
  const cells = gridCells(rows, cols), text = dg(classes, minLength);
  const r = nf(text, boardOf(rows, cols, symbols));
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage.filter(x => x.kind === "diagonal-lines").every(x => x.status === "lowered")).toBe(true);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], regions: [[${cells.join(", ")}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rule = { ...compiled.value!.rules[0], finite: undefined };
  let seen = 0;
  const total = symbols.length ** cells.length;
  for (let n = 0; n < total; n += step) {
    const digits = Object.fromEntries(cells.map((c, i) => [c, symbols[Math.floor(n / symbols.length ** i) % symbols.length]]));
    const moved = cells[(n / step) % cells.length];
    const values = { ...digits, [moved]: symbols[(symbols.indexOf(digits[moved]) + 1) % symbols.length] };
    const expected = evaluate(rule, { digits, values }).status === "holds";
    expect([text, JSON.stringify(digits), holds(r.normalForm!.solution, digits)]).toEqual([text, JSON.stringify(digits), expected]);
    if (expected) seen++;
  }
  return seen;
}

test("the lowered formula and the page's published formula agree on parity", () => {
  expect(differential(3, 3, [1, 2], "parity", 3)).toBeGreaterThan(0);
  expect(differential(2, 2, [1, 2], "parity", 3)).toBe(16);
});

test("the lowered formula and the page's published formula agree on remainders", () => {
  expect(differential(3, 3, [0, 1, 2], "mod3", 3, 53)).toBeGreaterThan(0);
});

test("the lowered formula and the page's published formula agree on remainders of negative digits", () => {
  expect(differential(3, 3, [-1, 0, 4], "mod3", 3, 53)).toBeGreaterThan(0);
});

test("the lowered formula and the page's published formula agree on thirds", () => {
  expect(differential(3, 3, [5, 1, 9], "entropy", 3, 53)).toBeGreaterThan(0);
});

// The interpreter is slow, so the non-square boards have their own time limit: the wide one is walked in full (3 by 4 has two down-right
// and two down-left diagonals of three cells), the tall one in steps.
test("the lowered formula and the page's published formula agree on every assignment of a wide board", () => {
  expect(differential(3, 4, [1, 2], "parity", 3)).toBeGreaterThan(0);
}, 30000);

test("the lowered formula and the page's published formula agree on a tall board", () => {
  expect(differential(4, 3, [1, 2], "parity", 3, 5)).toBeGreaterThan(0);
}, 30000);

test("the lowered formula and the page's published formula agree on a larger board", () => {
  expect(differential(5, 4, [1, 2], "parity", 4, 4001)).toBeGreaterThan(0);
  expect(differential(4, 4, [1, 2, 3], "mod3", 3, 100003)).toBeGreaterThanOrEqual(0);
});

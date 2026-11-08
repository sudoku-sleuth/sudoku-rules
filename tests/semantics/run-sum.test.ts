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

const rs = (n: number, sum: number | string) => `run-sum ${line(n)} sum ${sum}`;

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(rs(3, 5), row(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(rs(3, 5))}` });
}, 30000);

test("a digit counts when a neighbour along the line differs by one", () => {
  const f = form(rs(4, 7), row(4));
  expect(holds(f, at(3, 4, 9, 9))).toBe(true);
  expect(holds(f, at(3, 4, 1, 1))).toBe(true);
  expect(holds(f, at(3, 5, 7, 9))).toBe(false);
  expect(holds(f, at(1, 9, 3, 4))).toBe(true);
  expect(holds(f, at(2, 3, 4, 5))).toBe(false);
  expect(holds(f, at(5, 6, 1, 2))).toBe(false);
  // Each counted digit is counted once, even with a neighbour on both sides.
  expect(holds(form(rs(3, 9), row(3)), at(2, 3, 4))).toBe(true);
  expect(holds(form(rs(3, 12), row(3)), at(2, 3, 4))).toBe(false);
});

test("nothing counted totals zero, and a lone cell has no neighbour", () => {
  const f = form(rs(3, 0), row(3, [0, 1, 5]));
  expect(holds(f, at(5, 5, 5))).toBe(true);
  expect(holds(f, at(0, 1, 5))).toBe(false);
  expect(holds(f, at(0, 5, 0))).toBe(true);
  expect(holds(form(rs(1, 0), row(1, [0, 1])), at(1))).toBe(true);
  expect(holds(form(rs(1, 1), row(1, [0, 1])), at(1))).toBe(false);
});

test("a sum that is not a whole number is never met", () => {
  expect(form(rs(3, 2.5), row(3))).toEqual({ op: "Any", children: [] });
});

test("a line compares equal to its reverse", () => {
  const board = row(4);
  equal(rs(4, 7), `run-sum r1c4-r1c3-r1c2-r1c1 sum 7`, board);
  differs(rs(4, 7), rs(4, 8), board);
  differs(rs(4, 7), rs(3, 7), board);
  differs(rs(4, 7), `run-sum r1c1-r1c3-r1c2-r1c4 sum 7`, board);
  differs(rs(4, 7), `not ${rs(4, 7)}`, board);
  differs(rs(4, 7), `x: ${rs(2, 7)}\ny: run-sum r1c3-r1c4 sum 7`, board);
});

test("a cell listed twice, an unsafe sum and a long line stay uncovered", () => {
  for (const [text, board] of [["run-sum r1c1-r1c2-r1c1 sum 5", row(3)], [rs(3, "9007199254740993"), row(3)], [rs(20, 30), row(20)]] as const) {
    const r = nf(text, board);
    expect(r.normalForm!.coverage.find(x => x.kind === "run-sum")).toMatchObject({ status: "unsupported" });
  }
});

test("bad parameters are invalid", () => {
  for (const text of [`run-sum ${line(3)} sum "x"`, `run-sum ${line(3)}`, "run-sum r1c1-r1c9 sum 3", `run-sum ${line(3)} sum 3 count 2`]) expect(nf(text, row(3)).status).toBe("invalid");
});

test("the declaration reads printed digits, so effective values do not change it", () => {
  const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["r1c3"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  expect(nf(rs(3, 5) + modifier, row(3)).normalForm?.coverage.find(x => x.kind === "run-sum")?.status).toBe("lowered");
});

/**
 * The public evaluator runs the lowered formula itself for a rule that reads printed digits only, so it cannot check this lowering.
 * The reference states the published definition directly: add the digit at every position that has a neighbouring position, one
 * step either way, whose digit differs from it by exactly one.
 */
function reference(values: number[]): number {
  return values.reduce((total, x, i) => total + ([i - 1, i + 1].some(j => j >= 0 && j < values.length && Math.abs(values[j] - x) === 1) ? x : 0), 0);
}
function differential(symbols: number[], n: number, sum: number): number {
  let seen = 0;
  const cells = gridCells(1, n), text = rs(n, sum);
  const r = nf(text, boardOf(1, n, symbols));
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage.filter(x => x.kind === "run-sum").every(x => x.status === "lowered")).toBe(true);
  const walk = (index: number, values: Record<string, number>) => {
    if (index === n) {
      const expected = reference(cells.map(c => values[c])) === sum;
      expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
      if (expected) seen++;
      return;
    }
    for (const x of symbols) walk(index + 1, { ...values, [cells[index]]: x });
  };
  walk(0, {});
  return seen;
}

test("the lowered formula and the published definition agree", () => {
  expect(differential([1, 2, 3, 4], 4, 7)).toBeGreaterThan(0);
  expect(differential([1, 2, 3, 4], 5, 6)).toBeGreaterThan(0);
  expect(differential([0, 1, 2, 5], 4, 0)).toBeGreaterThan(0);
  expect(differential([-1, 0, 1, 3], 4, 0)).toBeGreaterThan(0);
  expect(differential([1, 2, 3], 2, 3)).toBeGreaterThan(0);
  expect(differential([1, 2, 3], 1, 0)).toBe(3);
  expect(differential([1, 2, 5], 6, 10)).toBeGreaterThan(0);
});

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

const ds = (n: number, sums: string) => `doll-sum ${line(n)} sums ${sums}`;

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(ds(3, "[5]"), row(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(ds(3, "[5]"))}` });
}, 30000);

test("two positions have endpoints and an interior that both add up to each total", () => {
  const f = form(ds(3, "[5]"), row(3));
  expect(holds(f, at(2, 5, 3))).toBe(true);
  expect(holds(f, at(2, 4, 3))).toBe(false);
  expect(holds(f, at(3, 5, 2))).toBe(true);
  expect(holds(f, at(5, 2, 3))).toBe(false);
  const longer = form(ds(5, "[6]"), row(5));
  expect(holds(longer, at(2, 1, 2, 3, 4))).toBe(true);
  expect(holds(longer, at(9, 1, 2, 3, 7))).toBe(false);
  expect(holds(longer, at(4, 9, 9, 9, 2))).toBe(false);
});

test("every total needs its own pair of positions, and a pair may serve two totals", () => {
  const f = form(ds(4, "[5,6]"), row(4));
  expect(holds(f, at(2, 5, 3, 1))).toBe(false);
  expect(holds(f, at(2, 5, 3, 6))).toBe(false);
  expect(holds(f, at(1, 2, 4, 3))).toBe(false);
  expect(holds(f, at(2, 5, 3, 2))).toBe(false);
  expect(holds(form(ds(4, "[5,5]"), row(4)), at(2, 5, 3, 1))).toBe(true);
});

test("adjacent positions have an empty interior, which totals zero", () => {
  const f = form(ds(2, "[0]"), row(2, [0, 1, 2]));
  expect(holds(f, at(0, 0))).toBe(true);
  expect(holds(f, at(1, 0))).toBe(false);
  expect(form(ds(2, "[3]"), row(2))).toEqual({ op: "Any", children: [] });
  expect(form(ds(1, "[2]"), row(1))).toEqual({ op: "Any", children: [] });
  expect(nf(ds(1, "[]"), row(1)).status).toBe("invalid");
});

test("a total that is not a whole number is never met", () => {
  expect(form(ds(3, "[2.5]"), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(ds(3, "[5,2.5]"), row(3))).toEqual({ op: "Any", children: [] });
});

test("the order and repeats of the totals do not matter", () => {
  const board = row(4);
  equal(ds(4, "[5,6]"), ds(4, "[6,5,6]"), board);
  differs(ds(4, "[5,6]"), ds(4, "[5]"), board);
  differs(ds(4, "[5]"), ds(4, "[6]"), board);
  equal(ds(4, "[5]"), `doll-sum r1c4-r1c3-r1c2-r1c1 sums [5]`, board);
  differs(ds(4, "[5]"), `doll-sum r1c1-r1c3-r1c2-r1c4 sums [5]`, board);
  differs(ds(4, "[5]"), ds(3, "[5]"), board);
  differs(ds(4, "[5]"), `not ${ds(4, "[5]")}`, board);
});

test("a cell listed twice and an unsafe total stay uncovered", () => {
  for (const text of ["doll-sum r1c1-r1c2-r1c1 sums [5]", ds(3, "[9007199254740993]"), ds(500, "[5,6,7,8,9,10,11,12,13,14,15,16]")]) {
    const r = nf(text, text.includes("r1c500") ? row(500) : row(3));
    expect(r.normalForm!.coverage.find(x => x.kind === "doll-sum")).toMatchObject({ status: "unsupported" });
  }
});

test("bad parameters are invalid", () => {
  for (const text of [ds(3, '["x"]'), ds(3, "5"), "doll-sum r1c1-r1c9 sums [5]", `doll-sum ${line(3)}`]) expect(nf(text, row(3)).status).toBe("invalid");
});

test("the declaration reads printed digits, so effective values do not change it", () => {
  const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["r1c3"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  expect(nf(ds(3, "[5]") + modifier, row(3)).normalForm?.coverage.find(x => x.kind === "doll-sum")?.status).toBe("lowered");
});

/**
 * The public evaluator runs a declaration's own lowered formula when there is one. Removing it (`finite: undefined`) makes the evaluator
 * interpret the page's published formula, which is what the normal form is compared with. Printed digits are all this rule reads, so the
 * effective values passed alongside differ from the digits to show they are ignored.
 */
function differential(symbols: number[], n: number, sums: number[]): number {
  let seen = 0;
  const cells = gridCells(1, n);
  const text = ds(n, `[${sums}]`);
  const r = nf(text, boardOf(1, n, symbols));
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage.filter(x => x.kind === "doll-sum").every(x => x.status === "lowered")).toBe(true);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${cells.join(", ")}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rule = { ...compiled.value!.rules[0], finite: undefined };
  let count = 0;
  const walk = (index: number, digits: Record<string, number>) => {
    if (index === n) {
      const moved = cells[count++ % n];
      const values = { ...digits, [moved]: symbols[(symbols.indexOf(digits[moved]) + 1) % symbols.length] };
      const expected = evaluate(rule, { digits, values }).status === "holds";
      expect([text, JSON.stringify(digits), holds(r.normalForm!.solution, digits)]).toEqual([text, JSON.stringify(digits), expected]);
      if (expected) seen++;
      return;
    }
    for (const x of symbols) walk(index + 1, { ...digits, [cells[index]]: x });
  };
  walk(0, {});
  return seen;
}

test("the lowered formula and the page's published formula agree on four cells", () => {
  expect(differential([1, 2, 3], 4, [5])).toBeGreaterThan(0);
});

test("the lowered formula and the page's published formula agree on several totals", () => {
  expect(differential([1, 2, 3], 4, [4, 5])).toBeGreaterThanOrEqual(0);
  expect(differential([0, 1, 2], 4, [0, 2])).toBeGreaterThan(0);
});

test("the lowered formula and the page's published formula agree on five cells", () => {
  expect(differential([0, 1, 3], 5, [3])).toBeGreaterThan(0);
});

test("the lowered formula and the page's published formula agree on negative digits and short lines", () => {
  expect(differential([-1, 0, 2], 4, [2])).toBeGreaterThan(0);
  expect(differential([1, 2, 3], 2, [3])).toBe(0);
  expect(differential([0, 1], 2, [0])).toBeGreaterThan(0);
});

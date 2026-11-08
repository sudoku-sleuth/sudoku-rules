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

const L = (...lines: string[][]) => `[${lines.map(l => `[${l.map(c => `"${c}"`).join(",")}]`).join(",")}]`;
const ml = (...lines: string[][]) => `mean-lines lines ${L(...lines)}`;
const c = (n: number) => `r1c${n}`;

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(ml([c(1), c(2)], [c(3), c(4)]), row(4));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3, r1c4]]}\n---${body(ml([c(1), c(2)], [c(3), c(4)]))}` });
}, 30000);

test("every line has the same average, whatever its length", () => {
  const f = form(ml([c(1), c(2)], [c(3), c(4), c(5)]), row(5));
  expect(holds(f, at(2, 4, 3, 3, 3))).toBe(true);
  expect(holds(f, at(2, 4, 1, 3, 5))).toBe(true);
  expect(holds(f, at(2, 4, 3, 3, 4))).toBe(false);
  expect(holds(f, at(1, 2, 4, 5, 6))).toBe(false);
  const three = form(ml([c(1)], [c(2), c(3)], [c(4), c(5), c(6)]), row(6));
  expect(holds(three, at(4, 3, 5, 2, 4, 6))).toBe(true);
  expect(holds(three, at(4, 3, 5, 2, 4, 7))).toBe(false);
});

test("a cell listed twice in a line counts at each occurrence", () => {
  const f = form(ml([c(1), c(2), c(1)], [c(3)]), row(3, [1, 2, 3, 4, 5, 6]));
  expect(holds(f, at(2, 5, 3))).toBe(true);
  expect(holds(f, at(3, 3, 3))).toBe(true);
  expect(holds(f, at(1, 4, 3))).toBe(false);
  expect(holds(f, at(1, 4, 2))).toBe(true);
  expect(holds(f, at(2, 4, 3))).toBe(false);
});

test("an empty line is compared with nothing, and an empty list of lines is rejected by the case check", () => {
  expect(nf("mean-lines lines []", row(2)).status).toBe("invalid");
  equal(ml([c(1)], [], [c(2)]), ml([c(1)], [c(2)]), row(2));
  equal(ml([c(1), c(2)], []), "mean-lines lines [[\"r1c1\",\"r1c2\"],[\"r1c2\",\"r1c1\"]]", row(2));
  expect(form(ml([c(1), c(2)]), row(2))).toEqual({ op: "All", children: [] });
  equal(ml([c(1), c(2)], [c(2), c(1)], [c(1), c(2)]), ml([c(1), c(2)]), row(2));
});

test("the order of the lines and of the cells in a line do not matter", () => {
  const board = row(5);
  equal(ml([c(1), c(2)], [c(3), c(4), c(5)]), ml([c(3), c(4), c(5)], [c(1), c(2)]), board);
  equal(ml([c(1), c(2)], [c(3), c(4), c(5)]), ml([c(2), c(1)], [c(5), c(4), c(3)]), board);
  equal(ml([c(1), c(2)], [c(3), c(4)], [c(5)]), ml([c(5)], [c(3), c(4)], [c(1), c(2)]), board);
});

test("equal sums over lines of one length compare equal", () => {
  const board = row(4);
  equal(ml([c(1), c(2)], [c(3), c(4)]), `equal-sums groups ${L([c(1), c(2)], [c(3), c(4)])}`, board);
  equal(ml([c(1), c(2)], [c(3), c(4)]), `equal-sums groups ${L([c(1), c(2)], [c(3), c(4)])} channel "D" repeats true`, board);
  differs(ml([c(1), c(2)], [c(3)]), `equal-sums groups ${L([c(1), c(2)], [c(3)])}`, board);
});

test("a cell off the board and a missing list are invalid", () => {
  expect(nf('mean-lines lines [["r9c9"]]', row(2)).status).toBe("invalid");
  expect(nf("mean-lines lines [1]", row(2)).status).toBe("invalid");
  expect(nf("mean-lines", row(2)).status).toBe("invalid");
});

test("an oversized expansion stays uncovered", () => {
  const wide = row(1000, [1, 2]);
  const r = nf(ml(gridCells(1, 1000), gridCells(1, 1000).slice(0, 600)), wide);
  expect(r.normalForm!.coverage.find(x => x.kind === "mean-lines")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("exceeds") });
});

test("near misses compare as different", () => {
  const board = row(5);
  const base = ml([c(1), c(2)], [c(3), c(4), c(5)]);
  equal(base, ml([c(1), c(2)], [c(3), c(4), c(5)]), board);
  differs(base, ml([c(1), c(2), c(3)], [c(4), c(5)]), board);
  differs(base, ml([c(1), c(2)], [c(3), c(4)]), board);
  differs(base, ml([c(1), c(2)], [c(3), c(4), c(4)]), board);
  differs(base, `not ${base}`, board);
  differs(base, `x: ${ml([c(1), c(2)], [c(3)])}\ny: ${ml([c(3)], [c(4), c(5)])}`, board);
});

test("the declaration reads printed digits, so effective values do not change it", () => {
  const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["r1c3"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  expect(nf(ml([c(1)], [c(2)]) + modifier, row(3)).normalForm?.coverage.find(x => x.kind === "mean-lines")?.status).toBe("lowered");
});

/**
 * The public evaluator runs a declaration's own lowered formula when there is one. Removing it (`finite: undefined`) makes the evaluator
 * interpret the page's published formula, which is what the normal form is compared with. Mean lines read printed digits only, so the
 * effective values passed alongside differ from the digits to show they are ignored.
 */
function differential(symbols: number[], lines: string[][], active: Cell[]): number {
  let seen = 0, count = 0;
  const text = ml(...lines), columns = Math.max(...active.map(x => Number(x.slice(3))));
  const r = nf(text, boardOf(1, columns, symbols, active));
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage.filter(x => x.kind === "mean-lines").every(x => x.status === "lowered")).toBe(true);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${columns}, symbols: [${symbols}], activeCells: [${active.join(", ")}], regions: [[${active.join(", ")}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rule = { ...compiled.value!.rules[0], finite: undefined };
  const walk = (index: number, digits: Record<string, number>) => {
    if (index === active.length) {
      const moved = active[count++ % active.length];
      const values = { ...digits, [moved]: symbols[(symbols.indexOf(digits[moved]) + 1) % symbols.length] };
      const expected = evaluate(rule, { digits, values }).status === "holds";
      expect([text, JSON.stringify(digits), holds(r.normalForm!.solution, digits)]).toEqual([text, JSON.stringify(digits), expected]);
      if (expected) seen++;
      return;
    }
    for (const x of symbols) walk(index + 1, { ...digits, [active[index]]: x });
  };
  walk(0, {});
  return seen;
}

test("the lowered formula and the page's published formula agree", () => {
  expect(differential([1, 2, 3], [[c(1), c(2)], [c(3), c(4), c(5)]], [c(1), c(2), c(3), c(4), c(5)] as Cell[])).toBeGreaterThan(0);
});

test("the lowered formula and the page's published formula agree on single cells and repeats", () => {
  expect(differential([0, 1, 2, 4], [[c(1)], [c(2), c(3)], [c(4)]], [c(1), c(2), c(3), c(4)] as Cell[])).toBeGreaterThan(0);
  expect(differential([-1, 0, 2], [[c(1), c(2), c(1)], [c(3), c(2)]], [c(1), c(2), c(3)] as Cell[])).toBeGreaterThan(0);
});

test("an empty line follows the page's formula, which compares it with nothing", () => {
  // The page's prose says each line has at least one cell, but its formula does not require it: with an empty line both cross
  // products are zero. The lowering follows the formula, and the case check does not reject an empty line.
  expect(differential([1, 2, 3], [[c(1), c(2)], [], [c(3)]], [c(1), c(2), c(3)] as Cell[])).toBeGreaterThan(0);
  expect(nf(`mean-lines lines [[], ["r1c1"]]`, row(2)).status).toBe("complete");
});

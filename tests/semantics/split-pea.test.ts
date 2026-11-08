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

const pea = (n: number) => `split-pea ${line(n)}`;

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(pea(5), row(5));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(pea(3))}` });
}, 30000);

test("the interior adds up to the end digits read as a two-digit number in either order", () => {
  const f = form(pea(5), row(5, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  expect(holds(f, at(1, 9, 3, 0, 2))).toBe(true);
  expect(holds(f, at(2, 9, 3, 0, 1))).toBe(true);
  expect(holds(f, at(1, 9, 3, 1, 2))).toBe(false);
  expect(holds(f, at(0, 1, 1, 1, 3))).toBe(true);
  expect(holds(f, at(3, 1, 1, 1, 0))).toBe(true);
  expect(holds(f, at(3, 9, 9, 9, 0))).toBe(false);
  expect(holds(f, at(0, 1, 2, 3, 0))).toBe(false);
  expect(holds(f, at(0, 0, 0, 0, 0))).toBe(true);
});

test("a two-cell line has an empty interior, so both ends must be zero", () => {
  const f = form(pea(2), row(2, [0, 1, 2]));
  expect(holds(f, at(0, 0))).toBe(true);
  expect(holds(f, at(0, 1))).toBe(false);
  const g = form(pea(2), row(2, [1, 2]));
  for (const [x, y] of [[1, 1], [1, 2], [2, 1], [2, 2]]) expect(holds(g, at(x, y))).toBe(false);
});

test("an end digit outside 0 to 9 is never allowed", () => {
  const f = form(pea(3), row(3, [-1, 0, 1, 12]));
  expect(holds(f, at(1, 12, 0))).toBe(false);
  expect(holds(f, at(0, 1, 1))).toBe(true);
  expect(holds(f, at(-1, 0, 0))).toBe(false);
  // The interior may hold any digit.
  expect(holds(form(pea(3), row(3, [0, 1, 12])), at(1, 12, 1))).toBe(false);
  expect(holds(form(pea(3), row(3, [0, 1, 12])), at(1, 12, 0))).toBe(false);
  expect(holds(form(pea(3), row(3, [0, 1, 12])), at(1, 1, 0))).toBe(true);
});

test("a line of fewer than two cells never holds", () => {
  expect(form(pea(1), row(1, [0, 1]))).toEqual({ op: "Any", children: [] });
});

test("reversing the line compares equally", () => {
  const board = row(4, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  equal(pea(4), "split-pea r1c4-r1c3-r1c2-r1c1", board);
  equal("split-pea r1c1-r1c2-r1c3-r1c2-r1c4", "split-pea r1c4-r1c2-r1c3-r1c2-r1c1", board);
});

test("a cell may be both ends or appear in the interior", () => {
  const f = form("split-pea r1c1-r1c2-r1c1", row(2, [0, 1, 2, 3]));
  expect(holds(f, at(0, 0))).toBe(true);
  expect(holds(f, at(1, 0))).toBe(false);
  const g = form("split-pea r1c1-r1c2-r1c2-r1c3", row(3, [0, 1, 2, 3]));
  expect(holds(g, at(0, 0, 0))).toBe(true);
  expect(holds(g, at(0, 1, 0))).toBe(false);
});

test("bad input is invalid and a cell outside the board is rejected", () => {
  expect(nf("split-pea r1c1-r1c9", row(3)).status).toBe("invalid");
  expect(nf(`${pea(3)} mode "x"`, row(3)).status).toBe("invalid");
});

test("near misses compare as different", () => {
  const board = row(4, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  equal(pea(4), pea(4), board);
  differs(pea(4), pea(3), board);
  equal(pea(4), "split-pea r1c1-r1c3-r1c2-r1c4", board);
  differs(pea(4), "split-pea r1c2-r1c1-r1c3-r1c4", board);
  differs(pea(4), "split-pea r1c1-r1c2-r1c3-r1c1", board);
  differs(pea(4), `not ${pea(4)}`, board);
  differs(pea(4), `x: ${pea(2)}\ny: split-pea r1c2-r1c3-r1c4`, board);
});

/**
 * The public evaluator runs a declaration's own lowered formula when there is one. Removing it (`finite: undefined`) makes the evaluator
 * interpret the page's published formula, which is what the normal form is compared with. Printed digits are all this rule reads, so the
 * effective values passed alongside differ from the digits to show they are ignored.
 */
function differential(symbols: number[], texts: string[]): number {
  let seen = 0;
  for (const text of texts) {
    const cells = [...text.matchAll(/r1c\d+/g)].map(m => m[0] as Cell);
    const distinct = [...new Set(cells)].sort();
    const columns = Math.max(...distinct.map(c => Number(c.slice(3))));
    const board = boardOf(1, columns, symbols, distinct);
    const r = nf(text, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "split-pea").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${columns}, symbols: [${symbols}], activeCells: [${distinct.join(", ")}], regions: [[${distinct.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = { ...compiled.value!.rules[0], finite: undefined };
    let count = 0;
    const walk = (index: number, digits: Record<string, number>) => {
      if (index === distinct.length) {
        const moved = distinct[count++ % distinct.length];
        const values = { ...digits, [moved]: symbols[(symbols.indexOf(digits[moved]) + 1) % symbols.length] };
        const expected = evaluate(rule, { digits, values }).status === "holds";
        expect([text, JSON.stringify(digits), holds(r.normalForm!.solution, digits)]).toEqual([text, JSON.stringify(digits), expected]);
        if (expected) seen++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...digits, [distinct[index]]: x });
    };
    walk(0, {});
  }
  return seen;
}

test("the lowered formula and the page's published formula agree on lines with a two-digit sum", () => {
  expect(differential([0, 1, 3, 9], [pea(5)])).toBeGreaterThan(0);
});

test("the lowered formula and the page's published formula agree on a reversed line", () => {
  expect(differential([0, 1, 3], ["split-pea r1c5-r1c4-r1c3-r1c2-r1c1"])).toBeGreaterThan(0);
  expect(differential([0, 1, 2, 9], [pea(4), pea(3), pea(2)])).toBeGreaterThan(0);
});

test("the lowered formula and the page's published formula agree on repeated cells and unusual alphabets", () => {
  expect(differential([0, 1, 4, 9], ["split-pea r1c1-r1c2-r1c3-r1c2-r1c1", "split-pea r1c1-r1c2-r1c1", "split-pea r1c1-r1c1-r1c2-r1c3-r1c3"])).toBeGreaterThan(0);
  expect(differential([-1, 0, 1, 12], [pea(4), pea(2)])).toBeGreaterThan(0);
  expect(differential([0, 1], [pea(1)])).toBe(0);
});

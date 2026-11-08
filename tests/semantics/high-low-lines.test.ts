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

const hl = (n: number) => `high-low-lines ${line(n)}`;

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(hl(3), row(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(hl(3))}` });
}, 30000);

test("a line stays in 1 to 5 or in 5 to 9, and five belongs to both", () => {
  const f = form(hl(3), row(3));
  expect(holds(f, at(2, 5, 4))).toBe(true);
  expect(holds(f, at(6, 5, 9))).toBe(true);
  expect(holds(f, at(5, 5, 5))).toBe(true);
  expect(holds(f, at(2, 5, 8))).toBe(false);
  expect(holds(f, at(1, 9, 5))).toBe(false);
  expect(holds(f, at(2, 2, 2))).toBe(true);
});

test("the ranges are the numbers 1 to 5 and 5 to 9 whatever the alphabet", () => {
  const f = form(hl(2), row(2, [0, 1, 5, 9, 12]));
  expect(holds(f, at(0, 12))).toBe(false);
  expect(holds(f, at(0, 1))).toBe(false);
  expect(holds(f, at(1, 5))).toBe(true);
  expect(holds(f, at(5, 9))).toBe(true);
  expect(holds(f, at(0, 0))).toBe(false);
  // No alphabet digit in either range leaves nothing to hold.
  expect(form(hl(1), row(1, [0, 10]))).toEqual({ op: "Any", children: [] });
});

test("order and repeated cells do not matter, and a cell outside both ranges makes the line fail", () => {
  const board = row(3);
  equal(hl(3), "high-low-lines r1c3-r1c2-r1c1", board);
  equal(hl(3), "high-low-lines r1c1-r1c2-r1c3-r1c2", board);
  differs(hl(3), hl(2), board);
  differs(hl(3), `x: ${hl(2)}\ny: high-low-lines r1c3`, board);
  differs(hl(3), `not ${hl(3)}`, board);
});

test("a cell off the board is invalid", () => {
  expect(nf("high-low-lines r1c1-r1c9", row(3)).status).toBe("invalid");
  expect(nf(`${hl(3)} gap 2`, row(3)).status).toBe("invalid");
});

test("the declaration reads printed digits, so effective values do not change it", () => {
  const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["r1c3"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  expect(nf(hl(3) + modifier, row(3)).normalForm?.coverage.find(x => x.kind === "high-low-lines")?.status).toBe("lowered");
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
    const r = nf(text, boardOf(1, columns, symbols, distinct));
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "high-low-lines").every(x => x.status === "lowered")).toBe(true);
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

test("the lowered formula and the page's published formula agree", () => {
  expect(differential([1, 4, 5, 6, 9], [hl(1), hl(2), hl(3), "high-low-lines r1c1-r1c2-r1c1"])).toBeGreaterThan(0);
  expect(differential([-1, 0, 3, 5, 7, 10], [hl(2), hl(3)])).toBeGreaterThan(0);
});

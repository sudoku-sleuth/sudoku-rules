import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const gridCells = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${i % cols + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[], active = gridCells(rows, cols)): BoardContext => ({ rows, cols, activeCells: active, alphabet, regions: [active] });
const nf = (rules: string, board: BoardContext) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
const flat = (digit: number, above: number, below: number) => `flat-mates digit ${digit} above ${above} below ${below}`;
const column = (n: number, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => boardOf(n, 1, alphabet);
const differs = (x: string, y: string, board: BoardContext) => { const r = compare(nf(x, board), nf(y, board)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };

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
const col = (...v: number[]) => Object.fromEntries(v.map((x, i) => [`r${i + 1}c1`, x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(flat(5, 1, 9), column(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 3, cols: 1, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r2c1, r3c1]]}\n---${body(flat(5, 1, 9))}` });
}, 30000);

test("a marked digit with its above digit directly above it, or its below digit directly below it, satisfies the rule", () => {
  const f = form(flat(5, 1, 9), column(3));
  expect(holds(f, col(1, 5, 1))).toBe(true);
  expect(holds(f, col(9, 5, 9))).toBe(true);
  expect(holds(f, col(9, 5, 1))).toBe(false);
  expect(holds(f, col(1, 5, 2))).toBe(true);
  expect(holds(f, col(1, 1, 1))).toBe(true);
  expect(holds(f, col(5, 9, 1))).toBe(true);
  expect(holds(f, col(2, 5, 3))).toBe(false);
  expect(holds(f, col(2, 3, 4))).toBe(true);
});

test("above is the cell one row up and below is the cell one row down", () => {
  const f = form(flat(5, 1, 9), column(3));
  expect(holds(f, col(1, 5, 2))).toBe(true);
  expect(holds(f, col(2, 5, 9))).toBe(true);
  expect(holds(f, col(9, 5, 2))).toBe(false);
  expect(holds(f, col(2, 5, 1))).toBe(false);
});

test("the marked digit on the top edge needs its below digit and on the bottom edge needs its above digit", () => {
  const f = form(flat(5, 1, 9), column(3));
  expect(holds(f, col(5, 9, 2))).toBe(true);
  expect(holds(f, col(5, 1, 2))).toBe(false);
  expect(holds(f, col(2, 9, 5))).toBe(false);
  expect(holds(f, col(2, 1, 5))).toBe(true);
  const single = form(flat(5, 1, 9), column(1));
  expect(holds(single, col(5))).toBe(false);
  expect(holds(single, col(4))).toBe(true);
});

test("equal above and below digits read each neighbour", () => {
  const f = form(flat(5, 2, 2), column(3));
  expect(holds(f, col(2, 5, 3))).toBe(true);
  expect(holds(f, col(3, 5, 2))).toBe(true);
  expect(holds(f, col(3, 5, 3))).toBe(false);
});

test("a marked digit outside the alphabet is never held, so the rule holds", () => {
  const board = column(2, [1, 2, 3]);
  expect(form(flat(7, 1, 2), board)).toEqual({ op: "All", children: [] });
  expect(holds(form(flat(7, 1, 2), board), col(1, 2))).toBe(true);
});

test("an above or below digit outside the alphabet offers no alternative", () => {
  const f = form(flat(3, 7, 2), column(3, [1, 2, 3]));
  expect(holds(f, col(1, 3, 2))).toBe(true);
  expect(holds(f, col(2, 3, 1))).toBe(false);
  expect(holds(f, col(3, 1, 1))).toBe(false);
  const none = form(flat(3, 7, 8), column(2, [1, 2, 3]));
  expect(holds(none, col(3, 1))).toBe(false);
  expect(holds(none, col(1, 2))).toBe(true);
});

test("an alphabet holding only the marked digit leaves no cell able to hold it", () => {
  const f = form(flat(1, 1, 1), column(2, [1]));
  expect(holds(f, col(1, 1))).toBe(true);
  const g = form(flat(1, 2, 2), column(2, [1]));
  expect(holds(g, col(1, 1))).toBe(false);
});

test("an inactive neighbour offers no alternative", () => {
  // r2c1 is not part of the board, so r1c1 and r3c1 are not neighbours.
  const board = boardOf(3, 1, [1, 2, 5], ["r1c1", "r3c1"]);
  const f = form(flat(5, 1, 2), board);
  expect(holds(f, { r1c1: 5, r3c1: 1 })).toBe(false);
  expect(holds(f, { r1c1: 1, r3c1: 5 })).toBe(false);
  expect(holds(f, { r1c1: 1, r3c1: 2 })).toBe(true);
});

test("near misses compare as different", () => {
  const board = column(3);
  const base = flat(5, 1, 9);
  expect(compare(nf(base, board), nf(flat(5, 1, 9), board)).status).toBe("equivalent");
  differs(base, flat(5, 9, 1), board);
  differs(base, flat(4, 1, 9), board);
  differs(base, flat(5, 2, 9), board);
  differs(base, flat(5, 1, 8), board);
  differs(base, `not ${base}`, board);
});

test("the declaration is covered whatever the effective-value domain is", () => {
  const r = nf(flat(5, 1, 9), column(3));
  expect(r.normalForm!.coverage.find(x => x.kind === "flat-mates")).toMatchObject({ status: "lowered" });
});

function differential(rows: number, cols: number, symbols: number[], entries: string[], active = gridCells(rows, cols)): number {
  let seen = 0;
  const used = active, board = boardOf(rows, cols, symbols, active);
  for (const text of entries) {
    const r = nf(text, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "flat-mates").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], activeCells: [${used.join(", ")}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        const expected = evaluate({ ...rule, finite: undefined }, { digits: values, values: values }).status === "holds";
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        if (expected) seen++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
  }
  return seen;
}

test("the lowered formula and the public evaluator agree on a column", () => {
  expect(differential(3, 1, [1, 2, 3], [flat(1, 2, 3), flat(2, 1, 1), flat(3, 3, 1), flat(2, 3, 1)])).toBeGreaterThan(0);
  expect(differential(4, 1, [1, 2], [flat(1, 2, 2), flat(2, 1, 2)])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on a grid and on digits outside the alphabet", () => {
  expect(differential(2, 2, [1, 2, 3], [flat(1, 2, 3), flat(3, 1, 1)])).toBeGreaterThan(0);
  expect(differential(3, 1, [1, 2, 3], [flat(9, 1, 2), flat(1, 9, 2), flat(1, 2, 9), flat(1, 8, 9)])).toBeGreaterThan(0);
  expect(differential(2, 1, [0, 1, 2], [flat(0, 1, 2), flat(1, 0, 0)])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree with an inactive cell between the others", () => {
  expect(differential(3, 1, [1, 2, 3], [flat(1, 2, 3), flat(3, 1, 2)], ["r1c1", "r3c1"])).toBeGreaterThan(0);
});

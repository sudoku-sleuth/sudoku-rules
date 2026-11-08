import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const boardOf = (n: number, alphabet = nine): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet = nine) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const circles = (...cs: Cell[]) => `counting-circles ${cs.join("-")}`;
const eq = (x: string, y: string, n = 6) => expect(compare(nf(x, n), nf(y, n)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 6) => { const r = compare(nf(x, n), nf(y, n)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };

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
function form(rules: string, n = 6, alphabet = nine) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(circles(cells[0], cells[1]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r1c2]]}\n---${body(circles(cells[0], cells[1]))}` });
}, 30000);

test("three circles: a digit appears as often as its value", () => {
  const f = form(circles(...cells.slice(0, 3)), 3);
  expect(holds(f, at(1, 2, 2))).toBe(true);
  expect(holds(f, at(2, 1, 2))).toBe(true);
  expect(holds(f, at(3, 3, 3))).toBe(true);
  expect(holds(f, at(1, 4, 4))).toBe(false);
  expect(holds(f, at(1, 2, 3))).toBe(false);
  expect(holds(f, at(2, 2, 2))).toBe(false);
  expect(holds(f, at(1, 1, 2))).toBe(false);
});

test("more circles than the alphabet: digits above the alphabet never occur", () => {
  const f = form(circles(...cells.slice(0, 5)), 5, [1, 2, 3]);
  expect(holds(f, at(1, 2, 2, 3, 3))).toBe(false);
  expect(holds(f, at(3, 3, 3, 1, 2))).toBe(false);
  expect(holds(f, at(1, 2, 2, 1, 1))).toBe(false);
  expect(holds(f, at(1, 2, 2, 3, 3))).toBe(false);
  expect(holds(f, at(3, 3, 3, 2, 2))).toBe(true);
  expect(holds(f, at(1, 3, 3, 3, 2))).toBe(false);
});

test("a digit larger than the number of circles is excluded exactly", () => {
  const f = form(circles(cells[0], cells[1]), 2);
  for (const d of nine) for (const e of nine) {
    expect(holds(f, at(d, e))).toBe(d === 2 && e === 2);
  }
});

test("one circle must hold 1", () => {
  const f = form(circles(cells[0]), 1);
  expect(holds(f, at(1))).toBe(true);
  for (const d of nine.slice(1)) expect(holds(f, at(d))).toBe(false);
});

test("a digit that is zero or negative can never match a count", () => {
  const f = form(circles(cells[0], cells[1]), 2, [-1, 0, 1, 2]);
  expect(holds(f, at(2, 2))).toBe(true);
  for (const d of [-1, 0, 1]) for (const e of [-1, 0, 1, 2]) if (d !== 2 || e !== 2) expect(holds(f, at(d, e))).toBe(false);
});

test("cell order and the full-URL spelling do not matter", () => {
  eq(circles(cells[1], cells[0], cells[2]), circles(cells[0], cells[1], cells[2]));
  eq(circles(cells[2], cells[0], cells[1]), `https://rules.sudoku-sleuth.com/counting-circles.md ${cells[0]}-${cells[1]}-${cells[2]}`);
});

test("near misses compare as different", () => {
  differs(circles(cells[0], cells[1], cells[2]), circles(cells[0], cells[1], cells[3]));
  differs(circles(cells[0], cells[1], cells[2]), circles(cells[0], cells[1]));
  differs(circles(cells[0], cells[1], cells[2]), circles(cells[0], cells[1], cells[2], cells[3]));
  differs(circles(cells[0], cells[1], cells[2]), `not ${circles(cells[0], cells[1], cells[2])}`);
  differs(circles(cells[0], cells[1], cells[2]), `unique ${cells[0]}-${cells[1]}-${cells[2]}`);
  expect(compare(nf(circles(cells[0], cells[1]), 6, nine), nf(circles(cells[0], cells[1]), 6, [1, 2, 3, 4])).status).not.toBe("equivalent");
});

test("a cell listed twice stays uncovered with its reason", () => {
  const r = nf(circles(cells[0], cells[1], cells[0]));
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage.find(x => x.kind === "counting-circles")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("more than once") });
});

test("the declaration is registered as covered", () => {
  expect(nf(circles(cells[0], cells[1])).normalForm!.coverage.find(x => x.kind === "counting-circles")).toMatchObject({ status: "lowered" });
});

function differential(n: number, symbols: number[], entries: string[]): number {
  let seen = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "counting-circles").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let satisfied = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const expected = evaluate(rule, { digits: values }).status === "holds";
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

test("the lowered formula and the public evaluator agree on three circles", () => {
  expect(differential(3, [1, 2, 3, 4], [circles(...cells.slice(0, 3)), `not ${circles(...cells.slice(0, 3))}`])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on one and two circles", () => {
  expect(differential(1, [1, 2, 3], [circles(cells[0])])).toBeGreaterThan(0);
  expect(differential(2, [1, 2, 3], [circles(cells[0], cells[1])])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree with more circles than digits", () => {
  expect(differential(4, [1, 2, 3], [circles(...cells.slice(0, 4))])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on a subset of the board and unusual digits", () => {
  expect(differential(4, [0, 1, 2, 3], [circles(cells[0], cells[2], cells[3])])).toBeGreaterThan(0);
  expect(differential(3, [-1, 1, 2, 3], [circles(...cells.slice(0, 3))])).toBeGreaterThan(0);
});

import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const grid = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${(i % cols) + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[], active = grid(rows, cols)): BoardContext => ({ rows, cols, activeCells: active, alphabet, regions: [active] });
const nf = (rules: string, rows = 2, cols = 3, alphabet = [1, 2, 3, 4], active?: Cell[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(rows, cols, alphabet, active));
const arrows = (...list: [string, string][]) => `coordinate-arrows arrows [${list.map(([b, t]) => `["${b}","${t}"]`).join(",")}]`;
const differs = (x: string, y: string, rows = 2, cols = 3, alphabet = [1, 2, 3, 4]) => { const r = compare(nf(x, rows, cols, alphabet), nf(y, rows, cols, alphabet)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
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
function form(rules: string, rows = 2, cols = 3, alphabet = [1, 2, 3, 4], active?: Cell[]) {
  const r = nf(rules, rows, cols, alphabet, active); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution;
}
const g = grid(2, 3);
const put = (...v: number[]) => Object.fromEntries(g.map((c, i) => [c, v[i]]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(arrows(["r1c1", "r1c2"]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 3, symbols: [1,2,3,4], regions: [[r1c1, r1c2, r1c3, r2c1, r2c2, r2c3]]}\n---${body(arrows(["r1c1", "r1c2"]))}` });
}, 30000);

test("the base digit is a row, the tip digit a column, and that cell holds their sum", () => {
  const f = form(arrows(["r1c1", "r1c2"]));
  // Base 2 and tip 2 name r2c2, which must hold 4.
  expect(holds(f, put(2, 2, 1, 1, 4, 1))).toBe(true);
  expect(holds(f, put(2, 2, 1, 1, 3, 1))).toBe(false);
  // Base 1 and tip 3 name r1c3, which must hold 4.
  expect(holds(f, put(1, 3, 4, 1, 1, 1))).toBe(true);
  expect(holds(f, put(1, 3, 3, 1, 1, 1))).toBe(false);
});

test("a base or tip past the board, or a sum outside the alphabet, can never be met", () => {
  const f = form(arrows(["r1c1", "r1c2"]));
  // Row 3 does not exist on a two-row board.
  expect(holds(f, put(3, 1, 4, 4, 4, 4))).toBe(false);
  // Column 4 does not exist on a three-column board.
  expect(holds(f, put(1, 4, 4, 4, 4, 4))).toBe(false);
  // Base 2, tip 3 names r2c3, whose sum 5 is not an alphabet digit.
  expect(holds(f, put(2, 3, 1, 1, 1, 5))).toBe(false);
  expect(form(arrows(["r1c1", "r1c2"]), 2, 3, [3, 4])).toEqual({ op: "Any", children: [] });
});

test("the base, the tip and the named cell may coincide and must then agree", () => {
  // Base and tip on one cell: a = b = d, so the named cell (d, d) holds 2d.
  const same = form(arrows(["r1c1", "r1c1"]), 2, 2, [1, 2, 3, 4]);
  const g2 = grid(2, 2);
  const at2 = (...v: number[]) => Object.fromEntries(g2.map((c, i) => [c, v[i]]));
  expect(holds(same, at2(1, 1, 1, 1))).toBe(false);
  expect(holds(same, at2(2, 1, 1, 4))).toBe(true);
  expect(holds(same, at2(2, 1, 1, 3))).toBe(false);
  // The named cell is the base itself: base a = 1 names r1c1 (with tip 1), which needs 2, so a = 1 is out.
  const own = form(arrows(["r1c1", "r1c2"]), 2, 2, [1, 2, 3, 4]);
  expect(holds(own, at2(1, 1, 1, 1))).toBe(false);
  expect(holds(own, at2(2, 2, 1, 4))).toBe(true);
});

test("every arrow must name a different coordinate pair", () => {
  const two = form(arrows(["r1c1", "r1c2"], ["r1c3", "r2c1"]));
  // The first arrow names (2, 2), the second (1, 1): r2c2 = 4 and r1c1 = 2.
  expect(holds(two, put(2, 2, 1, 1, 4, 1))).toBe(true);
  // The second arrow also names (2, 2): its base r1c3 = 2 and tip r2c1 = 2.
  expect(holds(two, put(2, 2, 2, 2, 4, 1))).toBe(false);
  // The same base and tip cells on two arrows can never differ.
  const clash = form(arrows(["r1c1", "r1c2"], ["r1c1", "r1c2"]));
  for (const v of [put(2, 2, 1, 1, 4, 1), put(1, 3, 4, 1, 1, 1), put(1, 1, 1, 1, 1, 1)]) expect(holds(clash, v)).toBe(false);
  // Sharing a base cell is fine when the tips differ.
  const shared = form(arrows(["r1c1", "r1c2"], ["r1c1", "r1c3"]));
  expect(holds(shared, put(2, 2, 1, 1, 4, 3))).toBe(false);
  expect(holds(shared, put(1, 1, 3, 1, 1, 1))).toBe(false);
});

test("an arrow that does not list a base and a tip can never be met", () => {
  const r = nf(`coordinate-arrows arrows [["r1c1","r1c2","r1c3"]]`);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.solution).toEqual({ op: "Any", children: [] });
  const one = nf(`coordinate-arrows arrows [["r1c1"]]`);
  expect(one.normalForm!.solution).toEqual({ op: "Any", children: [] });
});

test("the order of the arrows does not matter, and near misses compare as different", () => {
  expect(compare(nf(arrows(["r1c1", "r1c2"], ["r1c3", "r2c1"])), nf(arrows(["r1c3", "r2c1"], ["r1c1", "r1c2"]))).status).toBe("equivalent");
  const base = arrows(["r1c1", "r1c2"]);
  differs(base, arrows(["r1c2", "r1c1"]));
  differs(base, arrows(["r1c1", "r1c3"]));
  differs(base, arrows(["r1c1", "r1c2"], ["r1c3", "r2c1"]));
  differs(base, `not ${base}`);
  differs(base, "unique r1c1-r1c2");
});

test("the declaration is covered beside a value modifier because it reads printed digits", () => {
  const r = nf(`${arrows(["r1c1", "r1c2"])}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "coordinate-arrows")).toMatchObject({ status: "lowered" });
});

/** The evaluator is run on every satisfying assignment and on every `sample`-th other one. */
function differential(rows: number, cols: number, symbols: number[], entries: string[], active = grid(rows, cols), sample = 1): number {
  let seen = 0;
  const board = boardOf(rows, cols, symbols, active);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], activeCells: [${active.join(", ")}], regions: [[${active.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let index = 0;
    const walk = (i: number, values: Record<string, number>) => {
      if (i === active.length) {
        const got = holds(r.normalForm!.solution, values);
        if (got) seen++;
        if (got || index++ % sample === 0) expect([text, JSON.stringify(values), evaluate(rule, { digits: values }).status === "holds"]).toEqual([text, JSON.stringify(values), got]);
        return;
      }
      for (const x of symbols) walk(i + 1, { ...values, [active[i]]: x });
    };
    walk(0, {});
  }
  return seen;
}

test("the lowered formula and the public evaluator agree on single arrows", () => {
  expect(differential(2, 2, [1, 2, 3, 4], [arrows(["r1c1", "r1c2"]), arrows(["r2c1", "r1c1"]), arrows(["r1c1", "r1c1"]), `not ${arrows(["r1c1", "r1c2"])}`])).toBeGreaterThan(0);
  expect(differential(2, 2, [0, 1, 2, 3], [arrows(["r1c1", "r1c2"])])).toBeGreaterThan(0);
  expect(differential(2, 2, [3, 4], [arrows(["r1c1", "r1c2"])])).toBe(0);
  expect(differential(2, 3, [1, 2, 3, 4], [arrows(["r1c1", "r1c2"]), arrows(["r2c3", "r1c3"])], grid(2, 3), 40)).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on several arrows and on malformed ones", () => {
  expect(differential(2, 3, [1, 2, 3, 4], [arrows(["r1c1", "r1c2"], ["r1c3", "r2c1"]), arrows(["r1c1", "r1c2"], ["r1c1", "r2c2"])], grid(2, 3), 40)).toBeGreaterThan(0);
  expect(differential(2, 2, [1, 2, 3, 4], [arrows(["r1c1", "r1c2"], ["r1c1", "r1c2"])])).toBe(0);
  expect(differential(2, 2, [1, 2, 3, 4], [`coordinate-arrows arrows [["r1c1","r1c2","r2c1"]]`, `coordinate-arrows arrows [["r1c1"]]`])).toBe(0);
});

test("the lowered formula and the public evaluator agree with an inactive cell", () => {
  const hole = grid(2, 3).filter(c => c !== "r2c2");
  expect(differential(2, 3, [1, 2, 3, 4], [arrows(["r1c1", "r1c2"]), arrows(["r1c1", "r1c3"])], hole, 25)).toBeGreaterThan(0);
});

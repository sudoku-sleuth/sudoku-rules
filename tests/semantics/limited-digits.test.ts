import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: reading the limit one too high (`Math.floor(max) + 1`) fails the first-order and differential tests.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const five = [1, 2, 3, 4, 5];
const boardOf = (n: number, alphabet = five): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet = five) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const limited = (max: number | string, n = 4, extra = "") => `limited-digits ${cells.slice(0, n).join("-")} max ${max}${extra}`;
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
function form(rules: string, n = 6, alphabet = five) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(limited(2));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3,4,5], regions: [[r1c1, r1c2, r1c3, r1c4]]}\n---${body(limited(2))}` });
}, 30000);

test("at most two different digits over four cells", () => {
  const f = form(limited(2));
  expect(holds(f, at(1, 1, 1, 1))).toBe(true);
  expect(holds(f, at(1, 2, 2, 1))).toBe(true);
  expect(holds(f, at(5, 3, 3, 3))).toBe(true);
  expect(holds(f, at(1, 2, 3, 1))).toBe(false);
  expect(holds(f, at(1, 2, 3, 4))).toBe(false);
});

test("a limit of one makes the cells equal and matches clone", () => {
  const f = form(limited(1));
  expect(holds(f, at(4, 4, 4, 4))).toBe(true);
  expect(holds(f, at(4, 4, 4, 3))).toBe(false);
  eq(limited(1), `clone ${cells.slice(0, 4).join("-")}`);
});

test("a limit that cannot bind asks nothing", () => {
  expect(form(limited(4))).toEqual({ op: "All", children: [] });
  expect(form(limited(9))).toEqual({ op: "All", children: [] });
  expect(form(limited(5, 6), 6, [1, 2, 3, 4, 5])).toEqual({ op: "All", children: [] });
  expect(form(limited(3, 6), 6, [1, 2, 3])).toEqual({ op: "All", children: [] });
  expect(form(limited(1, 1))).toEqual({ op: "All", children: [] });
  eq(limited(4), limited(7));
});

test("a limit below one allows no digit", () => {
  expect(form(limited(0))).toEqual({ op: "Any", children: [] });
  expect(form(limited(-2))).toEqual({ op: "Any", children: [] });
  expect(form(limited("0.5"))).toEqual({ op: "Any", children: [] });
  eq(limited(0), limited(-3));
});

test("only the whole part of the limit matters", () => {
  eq(limited("2.5"), limited(2));
  differs(limited("2.5"), limited(3));
});

test("order, repeats and the full-URL spelling do not matter", () => {
  eq(limited(2), `limited-digits r1c4-r1c3-r1c2-r1c1-r1c2 max 2`);
  eq(limited(2), `https://rules.sudoku-sleuth.com/limited-digits.md ${cells.slice(0, 4).join("-")} max 2`);
  eq(`limited-digits r1c1-r1c2-r1c1-r1c3 max 2`, `limited-digits r1c1-r1c2-r1c3 max 2`);
});

test("near misses compare as different", () => {
  differs(limited(2), limited(3));
  differs(limited(1), limited(2));
  differs(limited(2, 4), limited(2, 5));
  differs(limited(2), `not ${limited(2)}`);
  differs(limited(2), `${limited(2)}\nlimited-digits r1c1-r1c5 max 1`);
  differs(limited(2, 4), `limited-digits r1c1-r1c2-r1c3-r1c5 max 2`);
  differs(limited(2), `unique ${cells.slice(0, 4).join("-")}`);
});

test("it reads printed digits, so a value modifier leaves it covered", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["r1c6"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const n = nf(`${limited(2)}\n${modifier}`);
  expect(n.normalForm!.coverage.find(x => x.kind === "limited-digits")).toMatchObject({ status: "lowered" });
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
});

test("a limit that needs too many digit subsets stays uncovered with a reason", () => {
  const symbols = Array.from({ length: 64 }, (_, i) => i);
  const grid: Cell[] = Array.from({ length: 64 }, (_, i) => `r${Math.floor(i / 8) + 1}c${i % 8 + 1}` as Cell);
  const big: BoardContext = { rows: 8, cols: 8, activeCells: grid, alphabet: symbols };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(`limited-digits ${grid.join("-")} max 8`)}` }, big);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage[0]).toMatchObject({ status: "unsupported", reason: expect.stringContaining("10,000") });
  expect(r.status).toBe("partial");
});

test("a cell that is not an active cell is rejected", () => {
  const small: BoardContext = { rows: 1, cols: 3, activeCells: cells.slice(0, 3), alphabet: five, regions: [cells.slice(0, 3)] };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(limited(2, 4))}` }, small);
  expect(r.status).toBe("invalid");
});

function differential(n: number, symbols: number[], entries: string[]): void {
  const used = cells.slice(0, n);
  const board: BoardContext = { rows: 1, cols: n, activeCells: used, alphabet: symbols, regions: [used] };
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "limited-digits").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const compiledRule = compiled.value!.rules[0];
    let total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        const expected = published(compiledRule, values);
        // A rule that reads printed digits ignores the effective values, even when one of them is doubled.
        expect([text, JSON.stringify(values), published(compiledRule, values, { ...values, [used[0]]: 2 * values[used[0]] })]).toEqual([text, JSON.stringify(values), expected]);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        total++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    expect(total).toBeGreaterThan(0);
  }
}

test("four cells agree with the published definition on every assignment", () => {
  differential(4, [1, 2, 3], [limited(1), limited(2), limited(3), limited(4), limited(0), limited("2.5"), `not ${limited(2)}`, `not ${limited(1)}`]);
});

test("five cells agree with the published definition", () => {
  differential(5, [1, 2, 3], [limited(1, 5), limited(2, 5), limited(3, 5), `limited-digits r1c1-r1c3-r1c5-r1c3 max 2`]);
});

test("digits above 9 agree with the published definition", () => {
  differential(3, [0, 4, 9, 10], [limited(2, 3), limited(1, 3)]);
});

test("a limit of one over a pair expansion past the bound stays uncovered with a reason", () => {
  const grid: Cell[] = Array.from({ length: 40 }, (_, i) => `r${Math.floor(i / 8) + 1}c${i % 8 + 1}` as Cell);
  const wide: BoardContext = { rows: 5, cols: 8, activeCells: grid, alphabet: Array.from({ length: 64 }, (_, i) => i) };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(`limited-digits ${grid.join("-")} max 1`)}` }, wide);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage[0]).toMatchObject({ status: "unsupported", reason: expect.stringContaining("exceeds 1,000,000") });
});

import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: starting the looped windows one short (`n - 1` windows) fails the window differentials, and deleting the
// `windowLength < 1` refusal fails the zero-length window differential; swapping the holder and non-holder digits in class-count.ts
// fails the class-count differentials.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const six = [1, 2, 3, 4, 5, 6];
const boardOf = (n: number, alphabet = six): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet = six) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const eq = (x: string, y: string, n = 6, alphabet = six) => expect(compare(nf(x, n, alphabet), nf(y, n, alphabet)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 6, alphabet = six) => { const r = compare(nf(x, n, alphabet), nf(y, n, alphabet)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const list = (xs: Cell[]) => `[${xs.map(x => `"${x}"`).join(",")}]`;
const profile = (listed: Cell[], classes: number[][], counts: number[], extra = "") => `digit-profile cells ${list(listed)} classes ${JSON.stringify(classes)} counts ${JSON.stringify(counts)}${extra}`;
const coverageOf = (rules: string) => nf(rules).normalForm!.coverage.find(x => x.kind === "digit-profile");

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
function form(rules: string, n = 6, alphabet = six) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));
const yes: Formula = { op: "All", children: [] }, no: Formula = { op: "Any", children: [] };
const [a, b, c, d] = cells;
const odd = [1, 3, 5], even = [2, 4, 6];

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(profile([a, b], [odd], [1]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3,4,5,6], regions: [[r1c1, r1c2]]}\n---${body(profile([a, b], [odd], [1]))}` });
}, 30000);

test("a class holds its stated number of cells", () => {
  const f = form(profile([a, b, c], [odd, even], [2, 1]), 3);
  expect(holds(f, at(1, 3, 4))).toBe(true);
  expect(holds(f, at(2, 5, 1))).toBe(true);
  expect(holds(f, at(1, 2, 4))).toBe(false);
  expect(holds(f, at(1, 3, 5))).toBe(false);
  const two = form(profile([a, b, c, d], [[1, 2, 3]], [2]), 4);
  expect(holds(two, at(1, 2, 4, 5))).toBe(true);
  expect(holds(two, at(1, 2, 3, 5))).toBe(false);
  expect(holds(two, at(4, 5, 6, 6))).toBe(false);
});

test("overlapping classes count independently", () => {
  const f = form(profile([a, b, c], [[1, 2, 3], [3, 4]], [2, 1]), 3);
  expect(holds(f, at(3, 1, 5))).toBe(true);
  expect(holds(f, at(1, 2, 4))).toBe(true);
  expect(holds(f, at(3, 3, 4))).toBe(false);
  expect(holds(f, at(1, 2, 5))).toBe(false);
});

test("at-least compares by a lower bound", () => {
  const f = form(profile([a, b, c], [odd], [2], ' comparison "at-least"'), 3);
  expect(holds(f, at(1, 3, 4))).toBe(true);
  expect(holds(f, at(1, 3, 5))).toBe(true);
  expect(holds(f, at(1, 2, 4))).toBe(false);
  expect(form(profile([a, b], [odd], [0], ' comparison "at-least"'), 2)).toEqual(yes);
  expect(form(profile([a, b], [odd], [3], ' comparison "at-least"'), 2)).toEqual(no);
});

test("classes with no alphabet digit or every alphabet digit", () => {
  expect(form(profile([a, b], [[9]], [0]), 2)).toEqual(yes);
  expect(form(profile([a, b], [[9]], [1]), 2)).toEqual(no);
  expect(form(profile([a, b], [six], [2]), 2)).toEqual(yes);
  expect(form(profile([a, b], [six], [1]), 2)).toEqual(no);
  expect(form(profile([a, b], [[1, 9]], [3]), 2)).toEqual(no);
});

test("a cell listed twice counts at each place", () => {
  const f = form(profile([a, b, a], [odd], [2]), 2);
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(2, 1))).toBe(false);
  expect(holds(f, at(1, 3))).toBe(false);
  const g = form(profile([a, b, a], [[1, 2]], [1]), 2);
  expect(holds(g, at(3, 1))).toBe(true);
  expect(holds(g, at(1, 3))).toBe(false);
});

test("windows apply the counts to every full window", () => {
  const f = form(profile([a, b, c, d], [odd], [1], " windowLength 2"), 4);
  expect(holds(f, at(1, 2, 3, 4))).toBe(true);
  expect(holds(f, at(1, 3, 2, 4))).toBe(false);
  expect(holds(f, at(4, 1, 2, 3))).toBe(true);
  const three = form(profile([a, b, c, d], [odd], [1], " windowLength 3"), 4);
  const looped = form(profile([a, b, c, d], [odd], [1], " windowLength 3 loop true"), 4);
  // 4, 1, 1 wraps round to two odd digits in one window.
  expect(holds(three, at(1, 2, 4, 1))).toBe(true);
  expect(holds(looped, at(1, 2, 4, 1))).toBe(false);
  expect(holds(looped, at(1, 2, 4, 3))).toBe(false);
  expect(holds(looped, at(1, 2, 4, 6))).toBe(false);
  // A window longer than the list adds no condition; a window below one is never met.
  expect(form(profile([a, b], [odd], [2], " windowLength 3"), 2)).toEqual(yes);
  expect(form(profile([a, b], [odd], [2], " windowLength 0"), 2)).toEqual(no);
});

test("exhaustive allows only digits of some class", () => {
  const f = form(profile([a, b], [[1, 2], [4]], [1, 1], " exhaustive true"), 2);
  expect(holds(f, at(1, 4))).toBe(true);
  expect(holds(f, at(2, 4))).toBe(true);
  expect(holds(f, at(1, 3))).toBe(false);
  expect(holds(f, at(3, 4))).toBe(false);
});

test("selfCount makes every digit occur as often as its value", () => {
  const f = form(profile([a, b, c], [], [], " selfCount true"), 3);
  expect(holds(f, at(1, 2, 2))).toBe(true);
  expect(holds(f, at(3, 3, 3))).toBe(true);
  expect(holds(f, at(1, 2, 3))).toBe(false);
  expect(holds(f, at(2, 2, 2))).toBe(false);
});

test("repeats false makes the listed digits differ", () => {
  const f = form(profile([a, b, c], [odd], [2], " repeats false"), 3);
  expect(holds(f, at(1, 3, 4))).toBe(true);
  expect(holds(f, at(1, 1, 4))).toBe(false);
  expect(form(profile([a, b, a], [odd], [2], " repeats false"), 2)).toEqual(no);
});

test("a class count list of the wrong length or a negative count cannot hold", () => {
  expect(form(profile([a, b], [odd, even], [1]), 2)).toEqual(no);
  expect(form(profile([a, b], [odd], [-1]), 2)).toEqual(no);
  expect(form(profile([a, b], [], []), 2)).toEqual(yes);
});

test("it matches the named rules it generalises", () => {
  eq(`counting-circles ${a}-${b}-${c}`, profile([c, a, b], [], [], " selfCount true"));
  eq(`absent-digits ${a}-${b} digits [2,4]`, profile([a, b], [[2, 4]], [0]));
  eq(`quadruple ${a}-${b}-${c} digits [1,1,2]`, profile([a, b, c], [[1], [2]], [2, 1], ' comparison "at-least"'));
});

test("near misses compare as different", () => {
  const base = profile([a, b, c], [odd], [2]);
  differs(base, profile([a, b, c], [odd], [1]));
  differs(base, profile([a, b, c], [even], [2]));
  differs(base, profile([a, b, d], [odd], [2]));
  differs(base, profile([a, b, c], [odd], [2], ' comparison "at-least"'));
  differs(base, profile([a, b, c], [odd], [2], " exhaustive true"));
  differs(base, profile([a, b, c], [odd], [2], " selfCount true"));
  differs(base, profile([a, b, c], [odd], [2], " repeats false"));
  differs(base, profile([a, b, c], [odd], [2], " windowLength 2"));
  differs(profile([a, b, c], [odd], [1], " windowLength 2"), profile([a, b, c], [odd], [1], " windowLength 2 loop true"));
  differs(base, `not ${base}`);
  differs(base, profile([a, b, c], [odd, [1, 2]], [2, 1]));
});

test("what Digit Profile does not lower stays uncovered with a reason", () => {
  expect(coverageOf(profile([a, b, c], [], [], " maximumDistinct 2"))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("different values") });
  expect(coverageOf(profile([a, b, c], [], [], " sumFree 3"))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("sum-free") });
  expect(coverageOf(profile([a, b, c], [], [], ' balancePairs [[1,2],[3,4]]'))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Balanced") });
  expect(coverageOf(profile([a, b, c], [odd], [1], ' channel "V"'))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("effective values") });
  expect(coverageOf(profile([a, b, c], [odd], [1]))).toMatchObject({ status: "lowered" });
  const grid: Cell[] = Array.from({ length: 30 }, (_, i) => `r${Math.floor(i / 6) + 1}c${i % 6 + 1}` as Cell);
  const big: BoardContext = { rows: 5, cols: 6, activeCells: grid, alphabet: six };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(profile(grid, [odd], [15]))}` }, big);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage[0]).toMatchObject({ status: "unsupported", reason: expect.stringContaining("5,000") });
});

test("it reads printed digits, so a value modifier leaves it covered", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["r1c6"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const n = nf(`${profile([a, b, c], [odd], [1])}\n${modifier}`);
  expect(n.normalForm!.coverage.find(x => x.kind === "digit-profile")).toMatchObject({ status: "lowered" });
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
});

function differential(n: number, symbols: number[], entries: string[]): void {
  const used = cells.slice(0, n);
  const board: BoardContext = { rows: 1, cols: n, activeCells: used, alphabet: symbols, regions: [used] };
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "digit-profile").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        const expected = published(rule, values);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        // A rule that reads printed digits ignores the effective values, even when one of them is changed.
        const changed = { ...values, [used[0]]: symbols[(symbols.indexOf(values[used[0]]) + 1) % symbols.length] };
        expect([text, JSON.stringify(values), published(rule, values, changed)]).toEqual([text, JSON.stringify(values), expected]);
        total++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    expect(total).toBeGreaterThan(0);
  }
}

function differentialTests(title: string, n: number, symbols: number[], entries: string[]): void {
  for (const entry of entries) test(`${title}: ${entry}`, () => differential(n, symbols, [entry]));
}

differentialTests("class counts agree with the published definition on every assignment", 3, [1, 2, 3, 4], [
    profile([a, b, c], [[1, 2]], [1]), profile([a, b, c], [[1, 2], [2, 3]], [2, 1]), profile([a, b, c], [[1, 2]], [2], ' comparison "at-least"'),
    profile([a, b, c], [[1], [2]], [1, 2]), profile([a, b, c], [[1, 2, 3, 4]], [3]), profile([a, b, c], [[9]], [0]), profile([a, b, c], [[1, 2]], [0]),
]);

differentialTests("cells listed twice and flags agree with the published definition", 3, [1, 2, 3], [
    profile([a, b, a], [[1, 2]], [2]), profile([a, b, a], [[1, 2]], [1]), profile([a, b, a], [[1, 2]], [1], ' comparison "at-least"'),
    profile([a, b, c], [[1, 2]], [2], " repeats false"), profile([a, b, c], [[1], [3]], [1, 1], " exhaustive true"), profile([a, b, a], [], [], " selfCount true"),
    profile([a, b, c], [], [], " selfCount true"), `not ${profile([a, b, c], [[1, 2]], [2])}`,
]);

differentialTests("windows agree with the published definition", 4, [1, 2, 3], [
    profile([a, b, c, d], [[1, 2]], [1], " windowLength 2"), profile([a, b, c, d], [[1, 2]], [1], " windowLength 2 loop true"),
    profile([a, b, c, d], [[1], [2, 3]], [1, 1], " windowLength 3 loop true"), profile([a, b, c, d], [[1, 2]], [2], ' windowLength 3 comparison "at-least"'),
    profile([a, b, c, d], [[1, 2]], [2], " windowLength 5"), profile([a, b, c, d], [[1, 2]], [0], " windowLength 0"), profile([a, b, c, d], [[1, 2]], [2], " windowLength 4 loop true"),
    profile([a, b, c, d], [[1, 2]], [2], " windowLength 5 loop true"), profile([a, b, c, d], [[1, 2]], [1], ' windowLength 4 loop true comparison "at-least"'),
]);

differentialTests("negative digits agree with the published definition", 3, [-2, 0, 3], [profile([a, b, c], [[-2, 0]], [1]), profile([a, b, c], [[0, 3]], [2], " exhaustive true"), profile([a, b, c], [], [], " selfCount true")]);

differentialTests("an exhaustive class that leaves out zero agrees with the published definition", 3, [0, 1, 2], [
  profile([a, b, c], [[1, 2]], [2], " exhaustive true"), profile([a, b, c], [[1, 2]], [3], " exhaustive true"), profile([a, b, c], [[1], [2]], [1, 1], " exhaustive true"),
]);

test("pair expansions and term budgets beyond the bounds stay uncovered", () => {
  const grid: Cell[] = Array.from({ length: 40 }, (_, i) => `r${Math.floor(i / 8) + 1}c${i % 8 + 1}` as Cell);
  const wide: BoardContext = { rows: 5, cols: 8, activeCells: grid, alphabet: Array.from({ length: 64 }, (_, i) => i) };
  const read = (board: BoardContext, rules: string) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
  // 780 pairs over 4,096 value pairs is more than a million combinations.
  const pairs = read(wide, profile(grid, [], [], " repeats false")).normalForm!.coverage[0];
  expect(pairs).toMatchObject({ status: "unsupported", reason: expect.stringContaining("exceeds 1,000,000") });
  const fourteen: Cell[] = Array.from({ length: 14 }, (_, i) => `r${Math.floor(i / 7) + 1}c${i % 7 + 1}` as Cell);
  const board: BoardContext = { rows: 2, cols: 7, activeCells: fourteen, alphabet: six };
  // Each of five classes over fourteen cells with a count of seven has 3,432 holder choices: more than 200,000 terms together.
  const classes = [[1, 2], [3, 4], [1, 3], [2, 4], [5, 6]];
  const budget = read(board, profile(fourteen, classes, [7, 7, 7, 7, 7])).normalForm!.coverage[0];
  expect(budget).toMatchObject({ status: "unsupported", reason: expect.stringContaining("200,000") });
});

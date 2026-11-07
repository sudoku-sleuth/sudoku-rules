import { beforeAll, expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rowsOf = (): Cell[][] => Array.from({ length: 9 }, (_, r) => Array.from({ length: 9 }, (_, c) => `r${r + 1}c${c + 1}` as Cell));
/** The standard 9x9 board with its rows as regions (no house asserts distinct digits), or a one-row board of the given alphabet. */
const standardBoard = (): BoardContext => ({ rows: 9, cols: 9, activeCells: rowsOf().flat(), alphabet: nine, regions: rowsOf() });
const lineBoard = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const standardHeader = `${header}board: {rows: 9, cols: 9, symbols: [1,2,3,4,5,6,7,8,9], regions: [${rowsOf().map(r => `[${r.join(", ")}]`).join(", ")}]}\n`;
const nf = (rules: string, n = 5, alphabet?: number[]) => normalise({ file: "synthetic.rules.md", text: `${alphabet ? header : standardHeader}---\n${body(rules)}` }, alphabet ? lineBoard(n, alphabet) : standardBoard());
const line = (n: number) => cells.slice(0, n).join("-");
const sandwich = (n: number, rest: string) => `sandwich ${line(n)} ${rest}`;
const eq = (x: string, y: string, n = 5) => expect(compare(nf(x, n), nf(y, n)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 5) => expect(compare(nf(x, n), nf(y, n)).covered).toBe("structural-difference");

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
function form(rules: string, n = 5, alphabet?: number[]) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const values = (v: number[]) => Object.fromEntries(cells.slice(0, v.length).map((c, i) => [c, v[i]]));
// The first compile loads the library; keep that one-off cost out of the timed tests.
beforeAll(() => { nf(sandwich(3, "sum 2")); compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(sandwich(3, "sum 2"))}` }); });

test("default crusts: both present sums the digits strictly between the first occurrences", () => {
  const f = form(sandwich(5, "sum 7"));
  expect(holds(f, values([1, 3, 4, 9, 2]))).toBe(true);
  expect(holds(f, values([9, 2, 5, 1, 3]))).toBe(true);
  expect(holds(f, values([1, 3, 3, 9, 2]))).toBe(false);
  // Later crusts are ignored; only the first occurrence of each counts.
  expect(holds(f, values([2, 1, 3, 4, 9]))).toBe(true);
  expect(holds(f, values([1, 3, 4, 9, 1]))).toBe(true);
  expect(holds(f, values([1, 5, 9, 3, 4]))).toBe(false);
});

test("default crusts: adjacent crusts total zero", () => {
  expect(holds(form(sandwich(3, "sum 0"), 3), values([1, 9, 5]))).toBe(true);
  expect(holds(form(sandwich(3, "sum 0"), 3), values([5, 9, 1]))).toBe(true);
  expect(holds(form(sandwich(3, "sum 1"), 3), values([1, 9, 5]))).toBe(false);
});

test("default crusts: one missing or both missing requires no sum", () => {
  const f = form(sandwich(4, "sum 7"), 4);
  expect(holds(f, values([2, 3, 4, 5]))).toBe(true);
  expect(holds(f, values([1, 3, 4, 5]))).toBe(true);
  expect(holds(f, values([9, 3, 4, 5]))).toBe(true);
  expect(holds(f, values([2, 3, 4, 1]))).toBe(true);
});

test("custom crusts sum between the first two crust occurrences from the clue", () => {
  const f = form(sandwich(5, "sum 5 crusts [2,6]"));
  expect(holds(f, values([2, 1, 4, 6, 9]))).toBe(true);
  expect(holds(f, values([6, 5, 2, 2, 6]))).toBe(true);
  expect(holds(f, values([6, 3, 2, 2, 6]))).toBe(false);
  expect(holds(f, values([1, 2, 5, 2, 6]))).toBe(true);
  expect(holds(f, values([1, 2, 3, 2, 6]))).toBe(false);
  expect(holds(f, values([2, 1, 4, 6, 2]))).toBe(true);
  expect(holds(f, values([2, 1, 3, 6, 9]))).toBe(false);
  // The third crust occurrence is not an endpoint, and the default 1 and 9 are plain digits.
  expect(holds(f, values([2, 6, 1, 9, 2]))).toBe(false);
  expect(holds(f, values([1, 2, 3, 9, 6]))).toBe(false);
  // Fewer than two crusts requires nothing.
  expect(holds(f, values([1, 3, 3, 9, 5]))).toBe(true);
  expect(holds(f, values([1, 3, 2, 9, 5]))).toBe(true);
});

test("a single custom crust digit pairs its first two occurrences", () => {
  const f = form(sandwich(5, "sum 4 crusts [3]"));
  expect(holds(f, values([3, 1, 3, 3, 9]))).toBe(false);
  expect(holds(f, values([3, 1, 3, 9, 9]))).toBe(false);
  expect(holds(f, values([3, 1, 3, 9, 3]))).toBe(false);
  expect(holds(f, values([3, 4, 3, 9, 3]))).toBe(true);
  expect(holds(f, values([3, 1, 2, 3, 3]))).toBe(false);
  expect(holds(f, values([3, 1, 3, 1, 1]))).toBe(false);
  expect(holds(f, values([3, 1, 2, 1, 1]))).toBe(true);
});

test("endpointOccurrences exactly-one needs each default crust once", () => {
  const f = form(sandwich(5, "sum 7 endpointOccurrences \"exactly-one\""));
  expect(holds(f, values([1, 3, 4, 9, 2]))).toBe(true);
  expect(holds(f, values([1, 3, 4, 9, 1]))).toBe(false);
  expect(holds(f, values([1, 3, 4, 9, 9]))).toBe(false);
  expect(holds(f, values([2, 3, 4, 9, 5]))).toBe(false);
  expect(holds(f, values([1, 3, 4, 2, 5]))).toBe(false);
});

test("endpointOccurrences at-most-one allows a missing crust but not a repeated one", () => {
  const f = form(sandwich(5, "sum 7 endpointOccurrences \"at-most-one\""));
  expect(holds(f, values([1, 3, 4, 9, 2]))).toBe(true);
  expect(holds(f, values([2, 3, 4, 5, 5]))).toBe(true);
  expect(holds(f, values([1, 3, 4, 5, 5]))).toBe(true);
  expect(holds(f, values([1, 3, 4, 9, 1]))).toBe(false);
  expect(holds(f, values([2, 9, 4, 9, 5]))).toBe(false);
  expect(holds(f, values([1, 3, 4, 1, 5]))).toBe(false);
});

test("endpointOccurrences does not apply to custom crusts", () => {
  eq(sandwich(5, "sum 5 crusts [2,6] endpointOccurrences \"exactly-one\""), sandwich(5, "sum 5 crusts [2,6]"));
  eq(sandwich(5, "sum 5 crusts [2,6] endpointOccurrences \"none\""), sandwich(5, "sum 5 crusts [2,6]"));
});

test("a non-integer sum is never met between two crusts", () => {
  const half = form(sandwich(4, "sum 2.5"), 4);
  expect(holds(half, values([1, 2, 3, 9]))).toBe(false);
  expect(holds(half, values([2, 3, 4, 5]))).toBe(true);
});

test("sandwich is covered and reads printed digits when effective values are unresolved", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["${cells[3]}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const n = nf(`${sandwich(3, "sum 2")}\n${modifier}`, 4);
  expect(n.normalForm!.coverage.find(x => x.kind === "sandwich")).toMatchObject({ status: "lowered" });
  expect(nf(sandwich(3, "sum 2"), 3).normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
});

test("a repeated cell, an unsafe sum and an oversized clue stay uncovered with a reason", () => {
  const [a, b] = cells;
  expect(nf(`sandwich ${a}-${b}-${a} sum 2`).normalForm!.coverage.find(x => x.kind === "sandwich")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("more than once") });
  expect(nf(sandwich(3, "sum 1e300")).normalForm!.coverage.find(x => x.kind === "sandwich")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("safe integer") });
  const long = rowsOf().flat();
  const text = (n: number) => `sandwich ${long.slice(0, n).join("-")} sum 20`;
  expect(nf(text(60)).normalForm!.coverage.find(x => x.kind === "sandwich")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("1,000,000") });
});

test("the same sandwich written two ways compares equivalent", () => {
  eq(sandwich(5, "sum 7"), sandwich(5, "sum 7 endpointOccurrences \"none\""));
  eq(sandwich(5, "sum 7"), sandwich(5, "sum 7 crusts [1,9]").replace(" crusts [1,9]", ""));
  eq(sandwich(4, "sum 7 crusts [2,6]", ), sandwich(4, "sum 7 crusts [6,2]"), 4);
});

test("near misses compare as different", () => {
  const [a, b, c, d, e] = cells;
  differs(sandwich(5, "sum 7"), sandwich(5, "sum 8"));
  differs(sandwich(5, "sum 7"), `sandwich ${b}-${a}-${c}-${d}-${e} sum 7`);
  differs(sandwich(5, "sum 7"), `sandwich ${[e, d, c, b, a].join("-")} sum 7`);
  differs(sandwich(5, "sum 7"), sandwich(4, "sum 7"));
  differs(sandwich(5, "sum 7"), sandwich(5, "sum 7 endpointOccurrences \"exactly-one\""));
  differs(sandwich(5, "sum 7 endpointOccurrences \"at-most-one\""), sandwich(5, "sum 7 endpointOccurrences \"exactly-one\""));
  differs(sandwich(5, "sum 7"), sandwich(5, "sum 7 crusts [2,6]"));
  differs(sandwich(5, "sum 7 crusts [2,6]"), sandwich(5, "sum 7 crusts [2,5]"));
  differs(sandwich(5, "sum 7"), `not ${sandwich(5, "sum 7")}`);
});

/** The public evaluator needs explicit crusts off the standard 9x9 board, so default crusts are checked there on a spread of digits. */
type Case = { n: number; symbols: number[]; rest: string; standard: boolean };
const layouts: Case[] = [];
const spread = [1, 2, 3, 9], small = [1, 2, 3, 4];
for (const rest of ["sum 0", "sum 2", "sum 5", "sum 11", "sum 2.5", "sum 3 endpointOccurrences \"exactly-one\"", "sum 5 endpointOccurrences \"at-most-one\"", "sum 0 endpointOccurrences \"exactly-one\""]) {
  layouts.push({ n: 3, symbols: spread, rest, standard: true }, { n: 4, symbols: spread, rest, standard: true });
}
for (const rest of ["sum 0 crusts [1,4]", "sum 2 crusts [1,4]", "sum 5 crusts [2,3]", "sum 2.5 crusts [2,3]", "sum 2 crusts [2]", "sum 3 crusts [1,2,3]", "sum 4 crusts []", "sum 3 crusts [1,2,3,4]", "sum 0 crusts [3,4] endpointOccurrences \"exactly-one\""]) {
  layouts.push({ n: 3, symbols: small, rest, standard: false }, { n: 4, symbols: small, rest, standard: false });
}
layouts.push({ n: 4, symbols: [0, 2, 3, 7], rest: "sum 5 crusts [0,7]", standard: false }, { n: 4, symbols: [2, 5, 9], rest: "sum 5 crusts [2,9]", standard: false });
for (const { n, symbols, rest, standard } of layouts) for (const negate of [false, true]) test(`lowered formula and public evaluator agree: ${negate ? "not " : ""}${n} cells over ${symbols.join(",")}, ${rest}`, () => {
  const text = `${negate ? "not " : ""}${sandwich(n, rest)}`;
  const r = nf(text, n, standard ? undefined : symbols);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("complete");
  expect(r.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
  const board = standard ? standardHeader : `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${cells.slice(0, n).join(", ")}]]}\n`;
  const compiled = compileCase({ file: "example.md", text: `${board}---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rl = compiled.value!.rules[0];
  let total = 0;
  const walk = (digits: number[]) => {
    if (digits.length === n) {
      const d = values(digits);
      const expected = evaluate(rl, { digits: d }).status === "holds";
      expect([text, digits, holds(r.normalForm!.solution, d)]).toEqual([text, digits, expected]);
      total++;
      return;
    }
    for (const s of symbols) walk([...digits, s]);
  };
  walk([]);
  expect(total).toBe(symbols.length ** n);
});

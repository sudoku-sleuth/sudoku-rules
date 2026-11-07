import { beforeAll, expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const lineBoard = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n: number, alphabet: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, lineBoard(n, alphabet));
const line = (n: number) => cells.slice(0, n).join("-");
const xsum = (n: number, rest: string) => `x-sum ${line(n)} ${rest}`;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const differs = (x: string, y: string, n = 4, alphabet = nine) => expect(compare(nf(x, n, alphabet), nf(y, n, alphabet)).covered).toBe("structural-difference");

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
function form(rules: string, n: number, alphabet: number[]) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const values = (v: number[]) => Object.fromEntries(cells.slice(0, v.length).map((c, i) => [c, v[i]]));
beforeAll(() => { nf(xsum(3, "sum 2"), 3, [1, 2, 3]); compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(xsum(3, "sum 2"))}` }); });

test("the first digit gives the extent", () => {
  const f = form(xsum(4, "sum 5"), 4, nine);
  expect(holds(f, values([2, 3, 9, 9]))).toBe(true);
  expect(holds(f, values([2, 4, 9, 9]))).toBe(false);
  expect(holds(f, values([1, 5, 5, 5]))).toBe(false);
  expect(holds(f, values([3, 1, 1, 9]))).toBe(true);
  expect(holds(f, values([4, 1, 2, 2]))).toBe(false);
  expect(holds(f, values([5, 1, 1, 1]))).toBe(false);
});

test("a stated count replaces the first digit", () => {
  const f = form(xsum(4, "sum 7 count 2"), 4, nine);
  expect(holds(f, values([3, 4, 9, 9]))).toBe(true);
  expect(holds(f, values([5, 3, 9, 9]))).toBe(false);
  expect(holds(form(xsum(4, "sum 7 count 5"), 4, nine), values([3, 4, 0, 0]))).toBe(false);
});

test("a total that cannot be reached is never met", () => {
  const f = form(xsum(3, "sum 50"), 3, nine);
  for (const a of nine) for (const b of nine) for (const c of nine) expect(holds(f, values([a, b, c]))).toBe(false);
  expect(holds(form(xsum(3, "sum 2.5"), 3, nine), values([2, 2, 3]))).toBe(false);
});

test("a line shorter than the alphabet drops the extents it cannot hold", () => {
  const f = form(xsum(2, "sum 9"), 2, nine);
  expect(holds(f, values([1, 9]))).toBe(false);
  expect(holds(f, values([2, 7]))).toBe(true);
  expect(holds(f, values([9, 1]))).toBe(false);
  const c = nf(xsum(2, "sum 9"), 2, nine).normalForm!.coverage.find(x => x.kind === "x-sum");
  expect(c).toMatchObject({ status: "lowered" });
});

test("x-sum is covered, and a repeated cell or unsafe sum stays uncovered with a reason", () => {
  const [a, b] = cells;
  expect(nf(`x-sum ${a}-${b}-${a} sum 2`, 3, nine).normalForm!.coverage.find(x => x.kind === "x-sum")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("more than once") });
  // A fractional count is refused at the parameter boundary with a typed diagnostic, before lowering.
  expect(nf(xsum(3, "sum 4 count 2.5"), 3, nine).issues).toMatchObject([{ code: "E_CASE_PARAMETERS", message: "count must be a whole number." }]);
  expect(nf(xsum(3, "sum 1e300"), 3, nine).normalForm!.coverage.find(x => x.kind === "x-sum")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("safe integer") });
});

test("a sum spelled with a decimal point compares equivalent", () => {
  const same = (x: string, y: string) => expect(compare(nf(x, 4, nine), nf(y, 4, nine)).status).toBe("equivalent");
  same(xsum(4, "sum 5"), xsum(4, "sum 5.0"));
});

test("near misses compare as different", () => {
  const [a, b, c, d] = cells;
  differs(xsum(4, "sum 5"), xsum(4, "sum 6"));
  differs(xsum(4, "sum 5"), `x-sum ${[d, c, b, a].join("-")} sum 5`);
  differs(xsum(4, "sum 5"), xsum(4, "sum 5 count 2"));
  differs(xsum(4, "sum 5 count 2"), xsum(4, "sum 5 count 3"));
  differs(xsum(4, "sum 5"), xsum(3, "sum 5"));
  differs(xsum(4, "sum 5"), `not ${xsum(4, "sum 5")}`);
});

type Case = { n: number; symbols: number[]; rest: string };
const layouts: Case[] = [];
for (const rest of ["sum 3", "sum 5", "sum 4 count 2", "sum 1 count 1", "sum 6 count 4", "sum 2 count 0", "sum 2.5"]) layouts.push({ n: 3, symbols: [1, 2, 3], rest }, { n: 4, symbols: [1, 2, 3], rest }, { n: 3, symbols: [0, 1, 2, 4], rest });
for (const { n, symbols, rest } of layouts) for (const negate of [false, true]) test(`lowered formula and public evaluator agree: ${negate ? "not " : ""}${n} cells over ${symbols.join(",")}, ${rest}`, () => {
  const text = `${negate ? "not " : ""}${xsum(n, rest)}`;
  const r = nf(text, n, symbols);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("complete");
  expect(r.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${cells.slice(0, n).join(", ")}]]}\n---${body(text)}` });
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

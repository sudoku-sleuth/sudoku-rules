import { beforeAll, expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const [a, b, c, d, e] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lineBoard = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet = nine) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, lineBoard(n, alphabet));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => expect(compare(nf(x), nf(y)).covered).toBe("structural-difference");

function holds(f: Formula, v: Record<string, number>): boolean {
  switch (f.op) {
    case "All": return f.children.every(x => holds(x, v));
    case "Any": return f.children.some(x => holds(x, v));
    case "Not": return !holds(f.child, v);
    case "Pair": return f.table.some(([x, y]) => x === v[f.cells[0]] && y === v[f.cells[1]]);
    case "Allowed": return f.values.includes(v[f.cell]);
    case "Distinct": return new Set(f.cells.map(q => v[q])).size === f.cells.length;
    case "CountAtLeast": return f.cells.filter(q => v[q] === f.digit).length >= f.count;
    case "SumEqual": return f.left.reduce((n, q) => n + BigInt(v[q]), 0n) === f.right.reduce((n, q) => n + BigInt(v[q]), 0n);
    case "SumTotal": return f.cells.reduce((n, q) => n + BigInt(v[q]), 0n) === BigInt(f.total);
  }
}
function form(rules: string, n = 5, alphabet = nine) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const values = (v: number[]) => Object.fromEntries(cells.slice(0, v.length).map((q, i) => [q, v[i]]));
beforeAll(() => { nf(`between-line ${b} ends ["${a}","${c}"]`, 3); compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(`between-line ${b} ends ["${a}","${c}"]`)}` }); });

const between = (line: string, x: Cell, y: Cell) => `between-line ${line} ends ["${x}","${y}"]`;

test("interior digits lie strictly between the ends in either order", () => {
  const f = form(between(`${b}-${c}`, a, d), 4);
  expect(holds(f, values([2, 3, 4, 6]))).toBe(true);
  expect(holds(f, values([6, 3, 3, 2]))).toBe(true);
  expect(holds(f, values([2, 2, 4, 6]))).toBe(false);
  expect(holds(f, values([2, 3, 6, 6]))).toBe(false);
  expect(holds(f, values([6, 3, 2, 2]))).toBe(false);
});

test("equal ends leave no possible interior digit", () => {
  const f = form(between(b, a, c), 3);
  for (const x of nine) for (const y of nine) expect(holds(f, values([x, y, x]))).toBe(false);
});

test("a one-cell line and a multi-cell line", () => {
  expect(holds(form(between(b, a, c), 3), values([1, 2, 3]))).toBe(true);
  expect(holds(form(between(b, a, c), 3), values([1, 3, 3]))).toBe(false);
  const f = form(between(`${b}-${c}-${d}`, a, e));
  expect(holds(f, values([1, 5, 2, 5, 9]))).toBe(true);
  expect(holds(f, values([1, 5, 2, 9, 9]))).toBe(false);
});

test("between and between-line spell the same clue", () => {
  eq(between(`${b}-${c}`, a, d), `between ${b}-${c} ends ["${a}","${d}"]`);
  eq(between(`${b}-${c}`, a, d), between(`${b}-${c}`, d, a));
  eq(between(`${b}-${c}`, a, d), between(`${c}-${b}`, a, d));
});

test("lockout needs the end gap and keeps the interior outside the ends", () => {
  const f = form(`lockout ${b}-${c} ends ["${a}","${d}"] gap 4`, 4);
  expect(holds(f, values([2, 1, 9, 6]))).toBe(true);
  expect(holds(f, values([6, 1, 9, 2]))).toBe(true);
  expect(holds(f, values([2, 3, 9, 6]))).toBe(false);
  expect(holds(f, values([2, 1, 9, 5]))).toBe(false);
  expect(holds(f, values([2, 2, 9, 6]))).toBe(false);
  const zero = form(`lockout ${b} ends ["${a}","${c}"] gap 0`, 3);
  expect(holds(zero, values([4, 5, 4]))).toBe(true);
  expect(holds(zero, values([4, 4, 4]))).toBe(false);
});

test("covered, with typed reasons for what is not lowered", () => {
  const reason = (rules: string, n = 5) => nf(rules, n).normalForm!.coverage.find(x => x.kind.includes("between") || x.kind === "lockout");
  expect(reason(between(b, a, c), 3)).toMatchObject({ status: "lowered" });
  expect(reason(`lockout ${b} ends ["${a}","${c}"] gap 4`, 3)).toMatchObject({ status: "lowered" });
  expect(reason(`between-line ${b} ends ["${a}","${a}"]`, 3)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("two different cells") });
  expect(reason(`between-line ${b} ends ["${a}","${b}"]`, 3)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("touches an end") });
  expect(reason(`between-line ${b}-${b} ends ["${a}","${c}"]`, 3)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("repeats a cell") });
  expect(reason(`lockout ${b} ends ["${a}","${c}"] gap 2.5`, 3)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("safe integer") });
});

test("near misses compare as different", () => {
  differs(between(`${b}-${c}`, a, d), between(`${b}-${c}`, a, e));
  differs(between(`${b}-${c}`, a, e), between(`${b}-${d}`, a, e));
  differs(between(`${b}-${c}`, a, e), between(`${b}-${c}-${d}`, a, e));
  // Swapping a line cell with an end cell.
  differs(between(`${b}-${c}`, a, d), between(`${a}-${c}`, b, d));
  differs(between(b, a, c), `lockout ${b} ends ["${a}","${c}"] gap 0`);
  differs(`lockout ${b} ends ["${a}","${c}"] gap 3`, `lockout ${b} ends ["${a}","${c}"] gap 4`);
  differs(between(b, a, c), `not ${between(b, a, c)}`);
});

type Case = { n: number; symbols: number[]; rest: string };
const layouts: Case[] = [];
const kinds = (line: string, x: string, y: string) => [`between-line ${line} ends ["${x}","${y}"]`, `between ${line} ends ["${x}","${y}"]`, `lockout ${line} ends ["${x}","${y}"] gap 0`, `lockout ${line} ends ["${x}","${y}"] gap 2`, `lockout ${line} ends ["${x}","${y}"] gap -1`];
for (const symbols of [[1, 2, 3, 4], [0, 2, 3, 7], [2, 5, 9]]) {
  for (const rest of kinds(b, a, c)) layouts.push({ n: 3, symbols, rest });
  for (const rest of kinds(`${c}-${d}`, a, b)) layouts.push({ n: 4, symbols: symbols.slice(0, 3), rest });
}
for (const { n, symbols, rest } of layouts) for (const negate of [false, true]) test(`lowered formula and public evaluator agree: ${negate ? "not " : ""}${n} cells over ${symbols.join(",")}, ${rest}`, () => {
  const text = `${negate ? "not " : ""}${rest}`;
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
      const v = values(digits);
      expect([text, digits, holds(r.normalForm!.solution, v)]).toEqual([text, digits, evaluate(rl, { digits: v }).status === "holds"]);
      total++;
      return;
    }
    for (const s of symbols) walk([...digits, s]);
  };
  walk([]);
  expect(total).toBe(symbols.length ** n);
});

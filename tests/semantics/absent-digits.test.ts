import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
const [a, b, c] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const lineBoard = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 4, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, lineBoard(n, alphabet));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => expect(compare(nf(x), nf(y)).covered).toBe("structural-difference");
const absent = (line: string, digits: string) => `absent-digits ${line} digits [${digits}]`;

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
function form(rules: string, n = 4, alphabet?: number[]) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(cells.slice(0, v.length).map((q, i) => [q, v[i]]));

test("one cell and several cells, one digit and several digits", () => {
  const one = form(absent(a, "3"));
  expect(holds(one, at(2, 1, 1, 1))).toBe(true);
  expect(holds(one, at(3, 1, 1, 1))).toBe(false);
  expect(holds(one, at(1, 3, 1, 1))).toBe(true);
  const many = form(absent(`${a}-${b}-${c}`, "2,4"));
  expect(holds(many, at(1, 3, 5, 4))).toBe(true);
  expect(holds(many, at(1, 3, 4, 4))).toBe(false);
  expect(holds(many, at(2, 3, 5, 4))).toBe(false);
});

test("digits outside the alphabet exclude nothing, and an empty list is rejected", () => {
  const f = form(absent(a, "0,12"), 4);
  for (let d = 1; d <= 9; d++) expect(holds(f, at(d))).toBe(true);
  eq(absent(a, "0,12"), `unique ${a}`);
  expect(nf(absent(a, "")).issues).toMatchObject([{ code: "E_CASE_PARAMETERS", message: "digits must not be empty." }]);
  expect(holds(form(absent(a, "0,5")), at(5))).toBe(false);
});

test("reordered and repeated digit lists and cell lists compare equivalent", () => {
  eq(absent(`${a}-${b}`, "2,4"), absent(`${a}-${b}`, "4,2"));
  eq(absent(`${a}-${b}`, "2,4"), absent(`${a}-${b}`, "4,2,4,2"));
  eq(absent(`${a}-${b}`, "2,4"), absent(`${b}-${a}`, "2,4"));
  eq(absent(`${a}-${b}`, "2,4"), `${absent(a, "2,4")}\n${absent(b, "2,4")}`);
});

test("a repeated cell equals the single cell, and the complement list is allowed-digits", () => {
  eq(absent(`${a}-${a}`, "2"), absent(a, "2"));
  eq(absent(a, "2,4"), `allowed-digits ${a} digits [1,3,5,6,7,8,9]`);
});

test("covered, with the printed digits read whatever the effective-value domain", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["${c}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  expect(nf(`${absent(a, "2")}\n${modifier}`).normalForm!.coverage.find(x => x.kind === "absent-digits")).toMatchObject({ status: "lowered" });
});

test("near misses compare as different", () => {
  differs(absent(`${a}-${b}`, "2,4"), absent(`${a}-${b}`, "2,5"));
  differs(absent(`${a}-${b}`, "2,4"), absent(`${a}-${b}`, "2"));
  differs(absent(`${a}-${b}`, "2,4"), absent(`${a}-${c}`, "2,4"));
  differs(absent(`${a}-${b}`, "2,4"), absent(`${a}-${b}-${c}`, "2,4"));
  differs(absent(a, "2"), `not ${absent(a, "2")}`);
  differs(absent(a, "2"), `allowed-digits ${a} digits [2]`);
});

const layouts: { n: number; symbols: number[]; rest: string }[] = [];
for (const symbols of [[1, 2, 3, 4], [0, 2, 3, 7], [2, 5, 9]]) for (const digits of ["2", "0,7", "2,3,3", "1,9,11", "2,3,5,7,9,0,1"]) {
  layouts.push({ n: 2, symbols, rest: absent(`${a}-${b}`, digits) }, { n: 3, symbols, rest: absent(`${c}-${a}`, digits) });
}
for (const { n, symbols, rest } of layouts) for (const negate of [false, true]) test(`lowered formula and public evaluator agree: ${negate ? "not " : ""}${n} cells over ${symbols.join(",")}, ${rest.replace(/^absent-digits /, "")}`, () => {
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
      const v = at(...digits);
      expect([text, digits, holds(r.normalForm!.solution, v)]).toEqual([text, digits, evaluate(rl, { digits: v }).status === "holds"]);
      total++;
      return;
    }
    for (const s of symbols) walk([...digits, s]);
  };
  walk([]);
  expect(total).toBe(symbols.length ** n);
});

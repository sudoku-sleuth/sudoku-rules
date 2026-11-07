import { beforeAll, expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n));
const line = (n: number) => cells.slice(0, n).join("-");
const zip = (n: number, centre?: string) => `zipper ${line(n)}${centre ? ` centre "${centre}"` : ""}`;
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
function form(rules: string, n = 5) { const r = nf(rules, n); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
// The first compile loads the library; keep that one-off cost out of the timed tests.
beforeAll(() => { nf(zip(5)); compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(zip(3))}` }); });
const values = (n: number, v: number[]) => Object.fromEntries(cells.slice(0, n).map((c, i) => [c, v[i]]));

test("odd lines: pairs sum to the centre unless centre is ignored", () => {
  for (const centre of [undefined, "when-odd"]) {
    const f = form(zip(5, centre));
    expect(holds(f, values(5, [1, 2, 3, 1, 3]))).toBe(false);
    expect(holds(f, values(5, [2, 1, 5, 4, 3]))).toBe(true);
    expect(holds(f, values(5, [2, 1, 5, 4, 4]))).toBe(false);
  }
  const ignored = form(zip(5, "ignore"));
  expect(holds(ignored, values(5, [1, 2, 9, 2, 3]))).toBe(true);
  expect(holds(ignored, values(5, [1, 2, 9, 2, 4]))).toBe(false);
  eq(zip(5), zip(5, "when-odd"));
  eq(zip(5, "required"), zip(5, "when-odd"));
  differs(zip(5, "ignore"), zip(5, "when-odd"));
});

test("even lines: pairs share one sum, required cannot hold", () => {
  for (const centre of [undefined, "when-odd", "ignore"]) {
    const f = form(zip(4, centre), 4);
    expect(holds(f, values(4, [1, 3, 2, 4]))).toBe(true);
    expect(holds(f, values(4, [1, 3, 2, 3]))).toBe(false);
  }
  eq(zip(4), zip(4, "ignore"), 4);
  const required = form(zip(4, "required"), 4);
  expect(holds(required, values(4, [1, 3, 2, 4]))).toBe(false);
  differs(zip(4, "required"), zip(4), 4);
});

test("short lines add no pair equality", () => {
  expect(holds(form(zip(1), 1), values(1, [4]))).toBe(true);
  expect(holds(form(zip(1, "required"), 1), values(1, [4]))).toBe(true);
  expect(holds(form(zip(2), 2), values(2, [4, 9]))).toBe(true);
  expect(holds(form(zip(2, "required"), 2), values(2, [4, 9]))).toBe(false);
});

test("near misses compare as different", () => {
  differs(zip(5), `zipper ${cells[1]}-${cells[0]}-${cells[2]}-${cells[3]}-${cells[4]}`);
  differs(zip(5), `zipper ${cells.slice(0, 4).join("-")}`, 5);
  differs(zip(5), `palindrome ${line(5)}`);
  differs(zip(5), `not ${zip(5)}`);
});

test("reversing the line gives the same rule", () => {
  eq(zip(5), `zipper ${[...cells].reverse().join("-")}`);
  eq(zip(4, "ignore"), `zipper ${cells.slice(0, 4).reverse().join("-")} centre "ignore"`, 4);
});

test("a repeated cell counts at each visit", () => {
  const a = cells[0], b = cells[1], c = cells[2];
  const f = form(`zipper ${a}-${b}-${c}-${a}-${b}`);
  const v = { [a]: 1, [b]: 2, [c]: 3 };
  // pairs: a+b, b+a, centre c: both pairs sum 3 = c
  expect(holds(f, v)).toBe(true);
  expect(holds(f, { ...v, [c]: 4 })).toBe(false);
});

const symbols = [1, 2, 3];
const shapes: [number, string][] = [[1, "required"], [2, "when-odd"], [2, "required"], [3, "when-odd"], [3, "ignore"], [3, "required"], [4, "when-odd"], [4, "ignore"], [4, "required"], [5, "when-odd"], [5, "ignore"]];
for (const [n, centre] of shapes) for (const negate of [false, true]) test(`lowered formula and public evaluator agree: ${negate ? "not " : ""}${n} cells, centre ${centre}`, () => {
    const text = `${negate ? "not " : ""}${zip(n, centre)}`;
    const board = { ...boardOf(n, symbols) };
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.status).toBe("complete");
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${cells.slice(0, n).join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rl = compiled.value!.rules[0];
    let satisfied = 0, total = 0;
    const walk = (digits: number[]) => {
      if (digits.length === n) {
        const d = values(n, digits);
        const expected = evaluate(rl, { digits: d }).status === "holds";
        expect([text, digits, holds(r.normalForm!.solution, d)]).toEqual([text, digits, expected]);
        total++; if (expected) satisfied++;
        return;
      }
      for (const s of symbols) walk([...digits, s]);
    };
    walk([]);
    // Short lines and unsatisfiable requirements hold or fail uniformly.
    if (n >= 4 && centre !== "required" || n % 2 === 1 && n >= 3 && centre !== "ignore") expect(satisfied).toBeGreaterThan(0);
    if (n >= 4 && centre !== "required" || n % 2 === 1 && n >= 3 && centre !== "ignore") expect(satisfied).toBeLessThan(total);
});

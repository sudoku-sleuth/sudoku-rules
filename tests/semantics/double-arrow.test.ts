import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const [a, b, c, d, e] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet?: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `value-modifier factor 2 offset 0 exactly [["${d}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;

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

const dbl = (line: string, ends: [Cell, Cell], extra = "") => `double-arrow ${line} ends ["${ends[0]}","${ends[1]}"]${extra}`;
const coverageOf = (rules: string) => nf(rules).normalForm!.coverage.find(x => x.kind === "double-arrow");
function form(rules: string) { const r = nf(rules); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(cells.slice(0, v.length).map((q, i) => [q, v[i]]));

test("the line adds up to the two ends, for a one-cell and a multi-cell line", () => {
  const one = form(dbl(b, [a, c]));
  expect(holds(one, at(2, 5, 3))).toBe(true);
  expect(holds(one, at(2, 4, 3))).toBe(false);
  const many = form(dbl(`${c}-${d}`, [a, b]));
  expect(holds(many, at(4, 5, 6, 3))).toBe(true);
  expect(holds(many, at(4, 5, 6, 4))).toBe(false);
  // Repeats are allowed by default.
  expect(holds(many, at(2, 2, 2, 2))).toBe(true);
});

test("repeats false adds distinctness over the ends and the line", () => {
  const f = form(dbl(`${c}-${d}`, [a, b], " repeats false"));
  expect(holds(f, at(1, 2, 1, 2))).toBe(false);
  expect(holds(f, at(1, 5, 2, 4))).toBe(true);
  expect(holds(f, at(1, 5, 2, 5))).toBe(false);
  expect(holds(form(dbl(`${c}-${d}`, [a, b], " repeats true")), at(1, 5, 2, 4))).toBe(true);
});

test("the order of the ends does not matter", () => {
  eq(dbl(`${c}-${d}`, [a, b]), dbl(`${c}-${d}`, [b, a]));
  eq(dbl(`${c}-${d}`, [a, b], " repeats false"), dbl(`${c}-${d}`, [b, a], " repeats false"));
});

test("channel V is converted to D on a resolved board and a D channel spells the same clue", () => {
  const n = nf(dbl(b, [a, c], ' channel "V"'));
  expect(n.status).toBe("complete");
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
  expect(nf(dbl(b, [a, c])).normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
  eq(dbl(b, [a, c], ' channel "V"'), dbl(b, [a, c]));
  eq(dbl(b, [a, c], ' channel "V" repeats false'), dbl(b, [a, c], " repeats false"));
  eq(dbl(b, [a, c], ' channel "D"'), dbl(b, [a, c]));
});

test("a V declaration beside a value modifier is uncovered and a D declaration is not", () => {
  expect(coverageOf(`${dbl(b, [a, c], ' channel "V"')}\n${modifier}`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Effective-value") });
  expect(coverageOf(`${dbl(b, [a, c], ' channel "V" repeats false')}\n${modifier}`)).toMatchObject({ status: "unsupported" });
  expect(coverageOf(`${dbl(b, [a, c])}\n${modifier}`)).toMatchObject({ status: "lowered" });
  expect(coverageOf(`${dbl(b, [a, c], " repeats false")}\n${modifier}`)).toMatchObject({ status: "lowered" });
});

test("ends that are not two cells, or a repeated cell with repeats false, stay uncovered with a reason", () => {
  expect(coverageOf(`double-arrow ${c} ends ["${a}"]`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("two cells") });
  expect(coverageOf(`double-arrow ${d} ends ["${a}","${b}","${c}"]`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("two cells") });
  expect(coverageOf(dbl(`${c}-${c}`, [a, b], " repeats false"))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("more than once") });
  expect(coverageOf(dbl(`${c}-${c}`, [a, b]))).toMatchObject({ status: "lowered" });
});

test("near misses compare as different", () => {
  differs(dbl(`${c}-${d}`, [a, b]), dbl(`${c}-${d}`, [a, e]));
  differs(dbl(`${c}-${d}`, [a, b]), dbl(`${d}`, [a, b]));
  // A cell moved between the line and the ends.
  differs(dbl(`${c}-${d}`, [a, b]), dbl(`${b}-${d}`, [a, c]));
  differs(dbl(`${c}-${d}`, [a, b]), dbl(`${c}-${d}`, [a, b], " repeats false"));
  differs(dbl(`${c}-${d}`, [a, b]), `not ${dbl(`${c}-${d}`, [a, b])}`);
});

type Case = { n: number; symbols: number[]; rest: string };
const layouts: Case[] = [];
for (const symbols of [[1, 2, 3, 4], [0, 2, 3, 7], [1, 3, 4, 6, 9]]) for (const extra of ["", " repeats false", ' channel "V"', ' channel "V" repeats false']) {
  layouts.push({ n: 3, symbols, rest: dbl(b, [a, c], extra) });
  if (symbols.length <= 4) layouts.push({ n: 4, symbols: symbols.slice(0, 3), rest: dbl(`${c}-${d}`, [a, b], extra) });
}
for (const { n, symbols, rest } of layouts) for (const negate of [false, true]) test(`lowered formula and public evaluator agree: ${negate ? "not " : ""}${n} cells over ${symbols.join(",")}, ${rest.split("] ").pop()}`, () => {
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

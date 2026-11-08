import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const [a, b, c, d]: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
const digits9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const board: BoardContext = { rows: 1, cols: 4, activeCells: [a, b, c, d], alphabet: digits9, regions: [[a, b, c, d]] };
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const file = (rules: string) => ({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` });
const nf = (rules: string, context = board) => normalise(file(rules), context);
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

test("little killer and diagonal sum normalise with nothing uncovered in D and in V on a resolved board", () => {
  for (const text of [`little-killer ${a}-${b}-${c} sum 12`, `diagonal-sum ${a}-${b}-${c} sum 12`, `little-killer ${a}-${b} sum 5 channel "V"`,
    `diagonal-sum ${a}-${b}-${c} sum 12 repeats false`, `diagonal-sum ${a}-${b}-${a} sum 12`, `diagonal-sum ${a}-${b}-${a} sum 12 repeats false`, `not little-killer ${a}-${b} sum 5`]) {
    const n = nf(text);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
    expect(n.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
  }
  expect(nf(`little-killer ${a}-${b} sum 5 channel "V"`).normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
  expect(nf(`little-killer ${a}-${b} sum 5`).normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
});

test("a V ray is uncovered when the value domain is unresolved and a D ray is not", () => {
  expect(nf(`little-killer ${a}-${b} sum 5 channel "V"\n${modifier}`).normalForm!.coverage.find(x => x.kind === "little-killer")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Effective-value") });
  expect(nf(`diagonal-sum ${a}-${b} sum 5 channel "V" repeats false\n${modifier}`).normalForm!.coverage.find(x => x.kind === "diagonal-sum")).toMatchObject({ status: "unsupported" });
  expect(nf(`little-killer ${a}-${b} sum 5\n${modifier}`).normalForm!.coverage.find(x => x.kind === "little-killer")).toMatchObject({ status: "lowered" });
});

test("little killer and diagonal sum over the same cells and sum compare equivalent", () => {
  eq(`little-killer ${a}-${b}-${c} sum 12`, `diagonal-sum ${a}-${b}-${c} sum 12`);
  eq(`little-killer ${a}-${b}-${c} sum 12`, `diagonal-sum ${a}-${b}-${c} sum 12 repeats true channel "D"`);
  eq(`little-killer ${a}-${b}-${c} sum 12 repeats false`, `diagonal-sum ${c}-${b}-${a} sum 12 repeats false`);
  eq(`little-killer ${a}-${b}-${c} sum 12`, `diagonal-sum ${c}-${a}-${b} sum 12`);
  eq(`little-killer ${a}-${b}-${a} sum 12`, `diagonal-sum ${b}-${a}-${a} sum 12`);
  eq(`little-killer ${a}-${b} sum 5 channel "V"`, `diagonal-sum ${b}-${a} sum 5 channel "V"`);
  eq(`little-killer ${a}-${b} sum 5 channel "V"`, `diagonal-sum ${a}-${b} sum 5`);
});

test("a ray with repeats allowed equals a cage of the same cells without distinctness", () => {
  eq(`little-killer ${a}-${b}-${c} sum 12`, `cage ${a}-${b}-${c} total 12 repeats true`);
  differs(`little-killer ${a}-${b}-${c} sum 12`, `cage ${a}-${b}-${c} total 12 repeats false`);
  eq(`little-killer ${a}-${b}-${c} sum 12 repeats false`, `cage ${a}-${b}-${c} total 12 repeats false`);
});

test("a different sum, cell set, repeats choice, channel use or negation compares as different", () => {
  differs(`little-killer ${a}-${b}-${c} sum 12`, `little-killer ${a}-${b}-${c} sum 13`);
  differs(`little-killer ${a}-${b}-${c} sum 12`, `little-killer ${a}-${b} sum 12`);
  differs(`little-killer ${a}-${b} sum 12`, `little-killer ${a}-${b}-${c} sum 12`);
  differs(`little-killer ${a}-${b}-${c} sum 12`, `little-killer ${a}-${b}-${d} sum 12`);
  differs(`little-killer ${a}-${b}-${c} sum 12 repeats true`, `little-killer ${a}-${b}-${c} sum 12 repeats false`);
  differs(`little-killer ${a}-${b}-${c} sum 12`, `not little-killer ${a}-${b}-${c} sum 12`);
  differs(`little-killer ${a}-${b}-${a} sum 12`, `little-killer ${a}-${b} sum 12`);
  differs(`little-killer ${a}-${b}-${a} sum 12`, `little-killer ${a}-${b}-${a}-${a} sum 12`);
});

test("a ray repeating a cell with repeats false is never satisfied", () => {
  expect(nf(`little-killer ${a}-${b}-${a} sum 12 repeats false`).normalForm!.solution).toEqual({ op: "Any", children: [] });
});

test("a ray with too many readings of its repeated cells names its reason", () => {
  const wide: BoardContext = { rows: 1, cols: 8, activeCells: Array.from({ length: 8 }, (_, i) => `r1c${i + 1}` as Cell), alphabet: digits9 };
  const text = (list: string[]) => `little-killer ${list.join("-")} sum 20`;
  const refused = nf(text(["r1c1", "r1c1", "r1c2", "r1c2", "r1c3", "r1c3", "r1c4", "r1c4", "r1c5", "r1c5", "r1c6", "r1c6"]), wide);
  expect(refused.normalForm!.coverage.find(x => x.kind === "little-killer")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("20,000") });
  // Five repeated cells on nine symbols is 59,049 readings, over the cap; four is 6,561, under it.
  const five = nf(text(["r1c1", "r1c1", "r1c2", "r1c2", "r1c3", "r1c3", "r1c4", "r1c4", "r1c5", "r1c5"]), wide);
  expect(five.normalForm!.coverage.find(x => x.kind === "little-killer")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("20,000") });
  const four = nf(text(["r1c1", "r1c1", "r1c2", "r1c2", "r1c3", "r1c3", "r1c4", "r1c4"]), wide);
  expect(four.normalForm!.coverage.find(x => x.kind === "little-killer")).toMatchObject({ status: "lowered" });
  const huge = nf(`little-killer ${a}-${b} sum 1e300`);
  expect(huge.normalForm!.coverage.find(x => x.kind === "little-killer")).toMatchObject({ status: "unsupported" });
});

type Layout = { rows: number; cols: number; regions: Cell[][] };
const cellOf = (r: number, k: number) => `r${r}c${k}` as Cell;
const line: Layout = { rows: 1, cols: 4, regions: [[a, b, c, d]] };
const grid: Layout = { rows: 2, cols: 3, regions: [[1, 2, 3].map(k => cellOf(1, k)), [1, 2, 3].map(k => cellOf(2, k))] };
/** A rule listed with "none" is one that no assignment satisfies, so agreement there is checked against an empty set. */
type Entry = string | [string, "none"];
function differential(layout: Layout, symbols: number[], entries: Entry[]): void {
  const cells = layout.regions.flat();
  const context: BoardContext = { rows: layout.rows, cols: layout.cols, activeCells: cells, alphabet: symbols, regions: layout.regions };
  const regions = `[${layout.regions.map(r => `[${r.join(", ")}]`).join(", ")}]`;
  for (const entry of entries) {
    const [text, none] = typeof entry === "string" ? [entry, undefined] : entry;
    const n = nf(text, context);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${layout.rows}, cols: ${layout.cols}, symbols: [${symbols.join(",")}], regions: ${regions}}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let satisfied = 0, total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === cells.length) {
        const expected = evaluate({ ...rule, finite: undefined }, { digits: values, values: values }).status === "holds";
        expect([text, symbols.join(), JSON.stringify(values), holds(n.normalForm!.solution, values)]).toEqual([text, symbols.join(), JSON.stringify(values), expected]);
        total++;
        if (expected) satisfied++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [cells[index]]: x });
    };
    walk(0, {});
    expect([text, symbols.join(), satisfied === 0]).toEqual([text, symbols.join(), none === "none"]);
    expect(total).toBeGreaterThan(0);
  }
}

test("the lowered formula and the public evaluator agree on every assignment", () => {
  differential(line, [1, 2, 3, 4, 5, 6, 7, 8, 9], [
    `little-killer ${a}-${b}-${c} sum 12`, `diagonal-sum ${a}-${b} sum 5 channel "V"`, `little-killer ${a}-${b}-${c} sum 12 repeats false`,
    `diagonal-sum ${a}-${b} sum 8 channel "V" repeats false`, `not little-killer ${b}-${c}-${d} sum 14`, `not diagonal-sum ${a}-${b} sum 6 repeats false`,
    `little-killer ${a} sum 4`, `little-killer ${a}-${b}-${a} sum 12`, `diagonal-sum ${a}-${b}-${a}-${c}-${a} sum 20 channel "V"`,
    `little-killer ${a}-${a} sum 8`, `not little-killer ${a}-${b}-${a} sum 11`, `little-killer ${a}-${b}-${c}-${d}-${a} sum 25 repeats true`,
    [`little-killer ${a}-${b}-${a} sum 12 repeats false`, "none"], `not little-killer ${b}-${a}-${a} sum 10 repeats false`,
  ]);
  // Zero and a gapped alphabet.
  differential(line, [0, 1, 2, 3, 5], [
    `little-killer ${a}-${b}-${c} sum 6`, `little-killer ${a}-${b}-${c} sum 6 repeats false`, `diagonal-sum ${a}-${b}-${a} sum 7 channel "V"`,
    `not diagonal-sum ${a}-${b} sum 3`, `little-killer ${a}-${a}-${b}-${b} sum 8`, `little-killer ${a}-${b}-${c}-${d} sum 8 repeats false`,
  ]);
  differential(line, [2, 5, 9], [
    `little-killer ${a}-${b}-${c} sum 16`, `little-killer ${a}-${b}-${a} sum 13`, `not little-killer ${a}-${b} sum 7 repeats false`,
  ]);
  // Values above 9.
  differential(line, [1, 2, 3, 9, 10, 12, 16], [
    `little-killer ${a}-${b}-${c} sum 22`, `diagonal-sum ${a}-${b}-${c} sum 25 repeats false`, `little-killer ${a}-${b}-${a} sum 28`,
    `not diagonal-sum ${b}-${c} sum 13 channel "V"`, `little-killer ${a}-${d}-${d}-${c} sum 33 channel "V"`,
  ]);
  // Negative symbols.
  differential(line, [-2, 0, 1, 4], [`little-killer ${a}-${b}-${c} sum 3`, `little-killer ${a}-${b}-${a} sum 2`, `little-killer ${a}-${b}-${c} sum 3 repeats false`]);
});

test("the lowered formula and the evaluator agree on a two-row board with a ray across rows", () => {
  const [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3] = grid.regions.flat();
  differential(grid, [0, 1, 2, 3], [
    `little-killer ${r1c3}-${r2c2}-${r1c1} sum 4`, `diagonal-sum ${r2c1}-${r1c2}-${r2c3} sum 5 repeats false`, `little-killer ${r1c3}-${r2c2}-${r1c3} sum 6`,
    `not little-killer ${r1c1}-${r2c2}-${r1c3}-${r2c3}-${r2c2} sum 7`,
  ]);
});

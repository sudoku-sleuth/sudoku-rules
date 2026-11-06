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
const bulb = (...cells: Cell[]) => `[${cells.map(x => `"${x}"`).join(", ")}]`;

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

test("complete arrows with one-cell and multi-cell bulbs normalise with nothing uncovered", () => {
  for (const text of [`arrow ${b}-${c} bulb ${bulb(a)}`, `arrow ${c}-${d} bulb ${bulb(a, b)}`, `arrow ${d} bulb ${bulb(a, b, c)}`]) {
    const n = nf(text);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
    expect(n.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
  }
});

test("a one-cell bulb reads effective values and a multi-cell bulb reads printed digits", () => {
  const one = nf(`arrow ${b}-${c} bulb ${bulb(a)}`).normalForm!;
  expect(one.rewrites.some(r => r.rule === "value-channel")).toBe(true);
  expect(JSON.stringify(one.solution)).toContain('"channel":"D"');
  const two = nf(`arrow ${c} bulb ${bulb(a, b)}`).normalForm!;
  expect(two.rewrites.some(r => r.rule === "value-channel")).toBe(false);
  const modified = nf(`arrow ${b}-${c} bulb ${bulb(a)}\nvalue-modifier factor 2 offset 0 exactly [["${d}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`);
  expect(modified.normalForm!.coverage.find(x => x.kind === "arrow")).toMatchObject({ status: "unsupported" });
  // A multi-cell bulb and a partial arrow never read effective values.
  const unaffected = nf(`arrow ${c} bulb ${bulb(a, b)}\nvalue-modifier factor 2 offset 0 exactly [["${d}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`);
  expect(unaffected.normalForm!.coverage.find(x => x.kind === "arrow")).toMatchObject({ status: "lowered" });
});

test("an arrow with its shaft in the other direction, split across labelled lines or with partial false compares equivalent", () => {
  eq(`arrow ${c}-${d} bulb ${bulb(a, b)}`, `arrow ${d}-${c} bulb ${bulb(a, b)}`);
  eq(`arrow ${b}-${c} bulb ${bulb(a)}`, `one: arrow ${b}-${c} bulb ${bulb(a)}\ntwo: arrow ${c}-${b} bulb ${bulb(a)}`);
  eq(`arrow ${b} bulb ${bulb(a)}`, `arrow ${b} bulb ${bulb(a)} partial false`);
});

test("a different shaft, bulb order, shaft length or bulb length compares as different", () => {
  differs(`arrow ${c} bulb ${bulb(a, b)}`, `arrow ${d} bulb ${bulb(a, b)}`);
  differs(`arrow ${c} bulb ${bulb(a, b)}`, `arrow ${c} bulb ${bulb(b, a)}`);
  differs(`arrow ${c} bulb ${bulb(a, b)}`, `arrow ${c}-${d} bulb ${bulb(a, b)}`);
  differs(`arrow ${c}-${d} bulb ${bulb(a, b)}`, `arrow ${c} bulb ${bulb(a, b)}`);
  differs(`arrow ${b}-${c} bulb ${bulb(a)}`, `arrow ${b}-${c}-${d} bulb ${bulb(a)}`);
  differs(`arrow ${b}-${c} bulb ${bulb(a)}`, `not arrow ${b}-${c} bulb ${bulb(a)}`);
  differs(`arrow ${b}-${c} bulb ${bulb(a)}`, `arrow ${b}-${c} bulb ${bulb(a)} partial true`);
});

test("a two-cell bulb is not equivalent to a one-cell bulb over either cell", () => {
  differs(`arrow ${c} bulb ${bulb(a, b)}`, `arrow ${c} bulb ${bulb(a)}`);
  differs(`arrow ${c} bulb ${bulb(a, b)}`, `arrow ${c} bulb ${bulb(b)}`);
  differs(`arrow ${c}-${d} bulb ${bulb(a, b)}`, `arrow ${c}-${d} bulb ${bulb(b)}`);
});

test("several shafts over one bulb stay separate equations", () => {
  const both = nf(`arrow ${c} bulb ${bulb(a, b)}\narrow ${d} bulb ${bulb(a, b)}`).normalForm!;
  expect(both.solution.op).toBe("All");
  expect((both.solution as { children: Formula[] }).children).toHaveLength(2);
  eq(`arrow ${c} bulb ${bulb(a, b)}\narrow ${d} bulb ${bulb(a, b)}`, `arrow ${d} bulb ${bulb(a, b)}\narrow ${c} bulb ${bulb(a, b)}`);
  differs(`arrow ${c} bulb ${bulb(a, b)}\narrow ${d} bulb ${bulb(a, b)}`, `arrow ${c}-${d} bulb ${bulb(a, b)}`);
  differs(`arrow ${c} bulb ${bulb(a, b)}\narrow ${d} bulb ${bulb(a, b)}`, `arrow ${c} bulb ${bulb(a, b)}`);
});

test("bulbs whose weights are too large and partial arrows outside the finite fragment name their reason", () => {
  const wide: BoardContext = { rows: 1, cols: 8, activeCells: Array.from({ length: 8 }, (_, i) => `r1c${i + 1}` as Cell), alphabet: digits9 };
  const long = nf(`arrow r1c8 bulb ${bulb(...wide.activeCells.slice(0, 7))}`, wide);
  expect(long.normalForm!.coverage.find(x => x.kind === "arrow")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("1,000,000") });
  const negative = nf(`arrow ${b} bulb ${bulb(a)} partial true`, { ...board, alphabet: [-1, 2, 3] });
  expect(negative.normalForm!.coverage.find(x => x.kind === "arrow")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("negative") });
  const repeated = nf(`arrow ${b}-${c}-${b} bulb ${bulb(a)} partial true`);
  expect(repeated.normalForm!.coverage.find(x => x.kind === "arrow")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("repeats a cell") });
  // A complete arrow may repeat a shaft cell: the equation counts each visit.
  expect(nf(`arrow ${b}-${c}-${b} bulb ${bulb(a)}`).status).toBe("complete");
});

type Layout = { rows: number; cols: number; regions: Cell[][] };
const cellOf = (r: number, k: number) => `r${r}c${k}` as Cell;
const line: Layout = { rows: 1, cols: 4, regions: [[a, b, c, d]] };
const grid: Layout = { rows: 2, cols: 3, regions: [[1, 2, 3].map(k => cellOf(1, k)), [1, 2, 3].map(k => cellOf(2, k))] };
/** A rule listed with "none" is one that no assignment on that alphabet satisfies, so agreement there is checked against an empty set. */
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
    let satisfied = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === cells.length) {
        const expected = evaluate(rule, { digits: values }).status === "holds";
        expect([text, symbols.join(), JSON.stringify(values), holds(n.normalForm!.solution, values)]).toEqual([text, symbols.join(), JSON.stringify(values), expected]);
        if (expected) satisfied++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [cells[index]]: x });
    };
    walk(0, {});
    expect([text, symbols.join(), satisfied === 0]).toEqual([text, symbols.join(), none === "none"]);
  }
}

test("the lowered formula and the public evaluator agree on every assignment", () => {
  differential(line, [1, 2, 3, 4, 5, 6, 7, 8, 9], [
    `arrow ${b}-${c} bulb ${bulb(a)}`, [`arrow ${c} bulb ${bulb(a, b)}`, "none"], [`arrow ${d} bulb ${bulb(b, a)}`, "none"], `arrow ${b}-${c}-${b} bulb ${bulb(a)}`,
    [`arrow ${a} bulb ${bulb(a, b)}`, "none"], `arrow ${c}-${d} bulb ${bulb(a, b)}`, `not arrow ${c} bulb ${bulb(a, b)}`, `not arrow ${b}-${c} bulb ${bulb(a)}`,
    `arrow ${b}-${c} bulb ${bulb(a)} partial true`, `arrow ${c} bulb ${bulb(a, b)} partial true`, `arrow ${b}-${c}-${d} bulb ${bulb(a)} partial true`,
    `not arrow ${b} bulb ${bulb(a)} partial true`, `arrow ${c}-${d} bulb ${bulb(a, a)} partial true`,
    // The shaft includes a bulb cell.
    `arrow ${b}-${a} bulb ${bulb(a, b)} partial true`, [`arrow ${a}-${b} bulb ${bulb(a)} partial true`, "none"],
  ]);
  differential(line, [0, 1, 2, 3, 5], [
    `arrow ${b}-${c} bulb ${bulb(a)}`, `arrow ${c}-${d} bulb ${bulb(a, b)}`, `arrow ${b}-${c} bulb ${bulb(a)} partial true`, `arrow ${d} bulb ${bulb(a, b)} partial true`,
    `arrow ${a}-${c} bulb ${bulb(a)} partial true`, `arrow ${b}-${a} bulb ${bulb(a, b)} partial true`,
  ]);
  differential(line, [2, 5], [[`arrow ${b} bulb ${bulb(a)} partial true`, "none"], `arrow ${c} bulb ${bulb(a, b)} partial true`]);
  // Values above 9 force the bulb digits into 0..9, also under negation.
  differential(line, [1, 2, 3, 9, 10, 12, 16], [
    `arrow ${b}-${c} bulb ${bulb(a)}`, `arrow ${c}-${d} bulb ${bulb(a, b)}`, `arrow ${c} bulb ${bulb(a, b)} partial true`, `arrow ${b} bulb ${bulb(a)} partial true`,
    `not arrow ${c}-${d} bulb ${bulb(a, b)}`, `not arrow ${c} bulb ${bulb(a, b)} partial true`,
  ]);
});

test("the lowered formula and the evaluator agree when the shaft and bulb sit in different rows", () => {
  const [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3] = grid.regions.flat();
  differential(grid, [0, 1, 2, 3], [
    `arrow ${r2c1}-${r2c2} bulb ${bulb(r1c1)}`, `arrow ${r2c3} bulb ${bulb(r1c1, r1c2)}`, `arrow ${r2c1}-${r2c2}-${r2c3} bulb ${bulb(r1c1, r1c2, r1c3)}`,
    `arrow ${r2c1}-${r1c3} bulb ${bulb(r1c1, r2c2)} partial true`, `arrow ${r2c1}-${r2c2} bulb ${bulb(r1c2)} partial true`,
    `not arrow ${r2c1}-${r2c2} bulb ${bulb(r1c2, r2c3)}`,
  ]);
});

test("a partial arrow above the reading cap is refused with its reason", () => {
  const wide: BoardContext = { rows: 1, cols: 8, activeCells: Array.from({ length: 8 }, (_, i) => `r1c${i + 1}` as Cell), alphabet: [0, ...digits9] };
  const refused = nf(`arrow r1c8 bulb ${bulb(...wide.activeCells.slice(0, 6))} partial true`, wide);
  expect(refused.normalForm!.coverage.find(x => x.kind === "arrow")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("100,000 bulb readings") });
});

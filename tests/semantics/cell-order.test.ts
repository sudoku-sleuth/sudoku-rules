import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, type BoardContext, type Cell, type Formula } from "../../src";
import { cellOrder, sortedCells } from "../../src/semantics/board";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
// Boards of 11 rows or 11 columns with four cells each, where the text order of the names differs from the number order.
const column: Cell[] = ["r1c1", "r2c1", "r10c1", "r11c1"];
const row: Cell[] = ["r1c1", "r1c2", "r1c10", "r1c11"];
const board = (cells: Cell[], rows: number, cols: number, alphabet: number[]): BoardContext => ({ rows, cols, activeCells: cells, alphabet, regions: [cells] });

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
const normal = (rules: string, cells: Cell[], rows: number, cols: number, alphabet: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board(cells, rows, cols, alphabet));

test("cell names sort by row then column as numbers", () => {
  expect(sortedCells(["r10c1", "r2c1", "r1c10", "r1c2", "r2c1"] as Cell[])).toEqual(["r1c2", "r1c10", "r2c1", "r10c1"]);
  expect(["r1c11", "r1c2", "r11c1", "r2c1"].sort((a, b) => cellOrder(a as Cell, b as Cell))).toEqual(["r1c2", "r1c11", "r2c1", "r11c1"]);
});

test("the normal form lists cells in number order", () => {
  const sums = normal("layered-cage r10c1-r2c1-r11c1-r1c1 upper [1]", column, 11, 1, [1, 2, 3]);
  expect(sums.issues).toEqual([]);
  const cells: Cell[][] = [];
  const walk = (f: Formula) => { if (f.op === "All" || f.op === "Any") f.children.forEach(walk); else if (f.op === "Not") walk(f.child); else if (f.op === "SumTotal" || f.op === "Distinct" || f.op === "Pair") cells.push(f.cells); };
  walk(sums.normalForm!.solution);
  expect(cells.length).toBeGreaterThan(0);
  for (const list of cells) expect(list).toEqual([...list].sort(cellOrder));
});

const kinds: [string, (cells: Cell[]) => string, number[]][] = [
  ["layered-cage", cells => `layered-cage ${cells.join("-")} upper [1]`, [1, 2, 3]],
  ["limited-digits", cells => `limited-digits ${cells.join("-")} max 1`, [1, 2, 3, 4]],
  ["counting-circles", cells => `counting-circles ${cells.join("-")}`, [1, 2, 3, 4]],
  ["equality-cage", cells => `equality-cage ${cells.join("-")}`, [1, 2, 3, 4]],
  ["high-low-lines", cells => `high-low-lines ${cells.join("-")}`, [1, 2, 3, 4, 5, 6, 7, 8, 9]],
];

for (const [name, rule, alphabet] of kinds) {
  for (const [label, cells, rows, cols] of [["rows", column, 11, 1], ["columns", row, 1, 11]] as const) {
    test(`${name}: the lowered formula and the published definition agree on 11 ${label}`, () => {
      // The listing order differs from both text order and number order.
      const text = rule([cells[2], cells[0], cells[3], cells[1]]);
      const r = normal(text, [...cells], rows, cols, alphabet);
      expect(r.issues).toEqual([]);
      expect(r.normalForm!.coverage.filter(x => x.kind === name).every(x => x.status === "lowered")).toBe(true);
      const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${alphabet}], activeCells: [${cells.join(", ")}], regions: [[${cells.join(", ")}]]}\n---${body(text)}` });
      expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
      // The evaluator runs the lowered formula itself when a rule has one, so it is switched off to compare with the published definition.
      const rule0 = { ...compiled.value!.rules[0], finite: undefined };
      let satisfied = 0;
      const walk = (index: number, values: Record<string, number>) => {
        if (index === cells.length) {
          const expected = evaluate(rule0, { digits: values }).status === "holds";
          expect([JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([JSON.stringify(values), expected]);
          if (expected) satisfied++;
          return;
        }
        for (const x of alphabet.slice(0, 4)) walk(index + 1, { ...values, [cells[index]]: x });
      };
      walk(0, {});
      expect(satisfied).toBeGreaterThan(0);
    });
  }
}

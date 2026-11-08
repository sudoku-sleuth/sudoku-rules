import { expect, test } from "bun:test";
import { checkCaseReferences, compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { declarationLibrary } from "../../src/declaration-library";
import type { DeclarationAST } from "../../src/declarations";
import { canonicalBoard } from "../../src/semantics/board";
import { lower } from "../../src/semantics/lower";

const [a, b, c]: Cell[] = ["r1c1", "r1c2", "r1c3"];
const digits9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const board: BoardContext = { rows: 1, cols: 3, activeCells: [a, b, c], alphabet: digits9, regions: [[a, b, c]] };
const standard: BoardContext = { rows: 9, cols: 9, alphabet: digits9, activeCells: Array.from({ length: 81 }, (_, i) => `r${Math.floor(i / 9) + 1}c${i % 9 + 1}` as Cell) };
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const file = (rules: string) => ({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` });
const nf = (rules: string, context = board) => normalise(file(rules), context);
const eq = (x: string, y: string, context = board) => expect(compare(nf(x, context), nf(y, context)).status).toBe("equivalent");
const differs = (x: string, y: string, context = board) => { const r = compare(nf(x, context), nf(y, context)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const row = (r: number) => Array.from({ length: 9 }, (_, i) => `r${r}c${i + 1}`).join("-");

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

test("regions and extra-regions normalise with nothing uncovered", () => {
  for (const kind of ["regions", "extra-regions"]) {
    const n = nf(`${kind} ${a}-${b}-${c}`);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
    expect(n.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
  }
});

test("regions, extra-regions and unique over the same cells compare equivalent", () => {
  eq(`regions ${a}-${b}-${c}`, `extra-regions ${c}-${a}-${b}`);
  eq(`regions ${a}-${b}-${c}`, `unique ${a}-${b}-${c}`);
  eq(`not regions ${a}-${b}`, `not extra-regions ${b}-${a}`);
});

test("a different cell set, or one cell more or fewer, compares as different", () => {
  differs(`regions ${a}-${b}-${c}`, `regions ${a}-${b}`);
  differs(`extra-regions ${a}-${b}`, `extra-regions ${a}-${b}-${c}`);
  differs(`regions ${a}-${b}`, `regions ${b}-${c}`);
  differs(`regions ${a}-${b}`, `not regions ${a}-${b}`);
});

test("splitting a group is not equivalent", () => {
  differs(`regions ${a}-${b}-${c}`, `regions ${a}-${b}\nregions ${b}-${c}`);
  differs(`regions ${a}-${b}-${c}`, `regions ${a}-${b}\nregions ${a}-${c}`);
});

test("a regions group inside a house the board asserts adds nothing", () => {
  eq(`sudoku 9x9\nregions ${row(1)}`, "sudoku 9x9", standard);
  eq(`sudoku 9x9\nextra-regions r1c1-r1c2-r1c3`, "sudoku 9x9", standard);
  eq(`sudoku 9x9\nregions r1c1-r2c1-r3c1-r1c2`, "sudoku 9x9", standard);
  differs("sudoku 9x9\nregions r1c1-r4c4", "sudoku 9x9", standard);
});

test("the lowered formula and the public evaluator agree on every assignment", () => {
  const shapes: Cell[][] = [[a], [a, b], [a, b, c]];
  for (const symbols of [digits9, [0, 2, 3, 5, 10], [1, 2]]) for (const list of shapes) for (const kind of ["regions", "extra-regions"]) for (const negated of [false, true]) {
    const text = `${negated ? "not " : ""}${kind} ${list.join("-")}`;
    const context = { ...board, alphabet: symbols };
    const n = nf(text, context);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [${symbols.join(",")}], regions: [[r1c1, r1c2, r1c3]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    for (const x of symbols) for (const y of symbols) for (const z of symbols) {
      const values = { [a]: x, [b]: y, [c]: z };
      const expected = evaluate({ ...rule, finite: undefined }, { digits: values, values: values }).status === "holds";
      expect([text, symbols.join(), x, y, z, holds(n.normalForm!.solution, values)]).toEqual([text, symbols.join(), x, y, z, expected]);
    }
  }
});

test("board geometry alone asserts no distinctness", () => {
  expect(compare(nf(`regions ${a}-${b}-${c}`), nf("")).status).not.toBe("equivalent");
});

test("errors name the written kind", () => {
  const checked = checkCaseReferences(file(`sudoku 9x9\nregions ${a}-${b}\nextra-regions ${a}-${b}`), declarationLibrary);
  expect(checked.diagnostics).toEqual([]);
  for (const [i, kind] of ["regions", "extra-regions"].entries()) {
    const ast = { ...checked.value!.declarations[i + 1], cells: undefined } as DeclarationAST;
    expect(() => lower(ast, canonicalBoard(board))).toThrow(`${kind} needs a nonempty cell list.`);
  }
});

import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const grid = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${(i % cols) + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[], skip: Cell[] = []): BoardContext => {
  const active = grid(rows, cols).filter(c => !skip.includes(c));
  return { rows, cols, activeCells: active, alphabet, regions: [active] };
};
const nf = (rules: string, rows = 2, cols = 2, alphabet = nine, skip: Cell[] = []) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(rows, cols, alphabet, skip));
const eq = (x: string, y: string, rows = 2, cols = 2) => expect(compare(nf(x, rows, cols), nf(y, rows, cols)).status).toBe("equivalent");
const differs = (a: ReturnType<typeof nf>, b: ReturnType<typeof nf>) => { const r = compare(a, b); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const sc = (cells: string, classes: string) => `same-class ${cells} classes "${classes}"`;

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
function form(rules: string, rows = 2, cols = 2, alphabet = nine) { const r = nf(rules, rows, cols, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }


test("the library loads", () => {
  nf(sc("r1c1-r1c2", "parity"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2, r2c1, r2c2]]}\n---${body(sc("r1c1-r1c2", "parity"))}` });
}, 30000);

test("parity: marked digits share a parity", () => {
  const f = form(sc("r1c1-r1c2-r2c1", "parity"));
  expect(holds(f, { r1c1: 1, r1c2: 3, r2c1: 9, r2c2: 2 })).toBe(true);
  expect(holds(f, { r1c1: 2, r1c2: 4, r2c1: 8, r2c2: 1 })).toBe(true);
  expect(holds(f, { r1c1: 1, r1c2: 2, r2c1: 3, r2c2: 1 })).toBe(false);
});

test("mod3: marked digits share a remainder", () => {
  const f = form(sc("r1c1-r1c2", "mod3"));
  expect(holds(f, { r1c1: 1, r1c2: 7, r2c1: 2, r2c2: 3 })).toBe(true);
  expect(holds(f, { r1c1: 3, r1c2: 9, r2c1: 1, r2c2: 1 })).toBe(true);
  expect(holds(f, { r1c1: 1, r1c2: 2, r2c1: 1, r2c2: 1 })).toBe(false);
});

test("entropy: marked digits share a third of the alphabet", () => {
  const f = form(sc("r1c1-r1c2-r2c2", "entropy"));
  expect(holds(f, { r1c1: 4, r1c2: 6, r2c1: 1, r2c2: 5 })).toBe(true);
  expect(holds(f, { r1c1: 1, r1c2: 3, r2c1: 9, r2c2: 2 })).toBe(true);
  expect(holds(f, { r1c1: 3, r1c2: 4, r2c1: 1, r2c2: 5 })).toBe(false);
});

test("a single cell is always in some class", () => {
  const f = form(sc("r1c1", "mod3"));
  for (const d of nine) expect(holds(f, { r1c1: d, r1c2: 1, r2c1: 1, r2c2: 1 })).toBe(true);
});

test("cell order and repeats do not change the normal form", () => {
  eq(sc("r1c1-r1c2-r2c2", "parity"), sc("r2c2-r1c1-r1c2", "parity"));
  eq(sc("r1c1-r1c2", "entropy"), sc("r1c2-r1c1-r1c2", "entropy"));
});

test("classes come from the alphabet; a missing class drops its disjunct", () => {
  const f = form(sc("r1c1-r1c2", "mod3"), 2, 2, [1, 2, 4, 5]);
  expect(holds(f, { r1c1: 1, r1c2: 4, r2c1: 1, r2c2: 1 })).toBe(true);
  expect(holds(f, { r1c1: 1, r1c2: 2, r2c1: 1, r2c2: 1 })).toBe(false);
  const negative = form(sc("r1c1-r1c2", "parity"), 2, 2, [-3, -2, 1]);
  expect(holds(negative, { r1c1: -3, r1c2: 1, r2c1: -2, r2c2: -2 })).toBe(true);
  expect(holds(negative, { r1c1: -3, r1c2: -2, r2c1: 1, r2c2: 1 })).toBe(false);
});

test("entropy over a size that is not a multiple of three stays uncovered, and an inactive cell yields no formula", () => {
  const r = nf(sc("r1c1-r1c2", "entropy"), 2, 2, [1, 2, 3, 4]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage).toMatchObject([{ kind: "same-class", status: "unsupported", reason: expect.stringContaining("multiple of three") }]);
  const hole = nf(sc("r1c1-r2c2", "parity"), 3, 3, nine, ["r2c2"]);
  // The case reader already rejects a marked cell that is not on the board, so no formula is produced.
  expect(hole.status).toBe("invalid");
  expect(hole.normalForm).toBeUndefined();
});

test("near misses have different normal forms", () => {
  differs(nf(sc("r1c1-r1c2", "parity")), nf(sc("r1c1-r1c2", "mod3")));
  differs(nf(sc("r1c1-r1c2", "mod3")), nf(sc("r1c1-r1c2", "entropy")));
  differs(nf(sc("r1c1-r1c2", "parity")), nf(sc("r1c1-r1c2-r2c1", "parity")));
  differs(nf(sc("r1c1-r1c2", "parity")), nf(sc("r1c1-r2c1", "parity")));
});

for (const { symbols, classes } of [
  ...["parity", "mod3", "entropy"].flatMap(classes => [[1, 2, 3], [3, 1, 2, 6, 5, 4], [-2, -1, 0, 1]].map(symbols => ({ symbols, classes }))),
]) for (const negate of [false, true]) test(`lowered formula and public evaluator agree: ${negate ? "not " : ""}${classes} over ${symbols.join(",")}`, () => {
  const text = `${negate ? "not " : ""}${sc("r1c1-r1c2-r2c1", classes)}`;
  const r = nf(text, 2, 2, symbols);
  expect(r.issues).toEqual([]);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 2, symbols: [${symbols}], regions: [[${grid(2, 2).join(", ")}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rl = compiled.value!.rules[0];
  if (r.status === "partial") { expect(classes).toBe("entropy"); expect(symbols.length % 3).not.toBe(0); return; }
  expect(r.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
  const cs = grid(2, 2);
  const walk = (digits: number[]) => {
    if (digits.length === cs.length) {
      const v = Object.fromEntries(digits.map((d, i) => [cs[i], d]));
      expect([text, digits, holds(r.normalForm!.solution, v)]).toEqual([text, digits, evaluate(rl, { digits: v }).status === "holds"]);
      return;
    }
    for (const s of symbols) walk([...digits, s]);
  };
  walk([]);
});

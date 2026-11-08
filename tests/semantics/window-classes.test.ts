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
const wc = (classes: string) => `window-classes classes "${classes}"`;

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
const at = (cols: number, ...v: number[]) => Object.fromEntries(v.map((x, i) => [grid(Math.ceil(v.length / cols), cols)[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(wc("parity"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2, r2c1, r2c2]]}\n---${body(wc("parity"))}` });
}, 30000);

test("parity: a window needs an odd and an even digit", () => {
  const f = form(wc("parity"));
  expect(holds(f, at(2, 1, 2, 4, 5))).toBe(true);
  expect(holds(f, at(2, 1, 3, 5, 7))).toBe(false);
  expect(holds(f, at(2, 2, 4, 6, 8))).toBe(false);
  expect(holds(f, at(2, 1, 1, 1, 2))).toBe(true);
});

test("mod3: a window needs all three remainders", () => {
  const f = form(wc("mod3"));
  expect(holds(f, at(2, 1, 2, 3, 9))).toBe(true);
  expect(holds(f, at(2, 1, 4, 7, 2))).toBe(false);
  expect(holds(f, at(2, 3, 6, 9, 1))).toBe(false);
  expect(holds(f, at(2, 3, 4, 5, 5))).toBe(true);
});

test("entropy: a window needs a digit from each third of the alphabet", () => {
  const f = form(wc("entropy"));
  expect(holds(f, at(2, 1, 5, 9, 9))).toBe(true);
  expect(holds(f, at(2, 1, 2, 3, 9))).toBe(false);
  expect(holds(f, at(2, 2, 5, 5, 8))).toBe(true);
  expect(holds(f, at(2, 1, 2, 4, 5))).toBe(false);
});

test("thirds follow the ordered alphabet, and classes come from the alphabet's own digits", () => {
  const six = form(wc("entropy"), 2, 2, [1, 2, 3, 4, 5, 6]);
  expect(holds(six, at(2, 1, 3, 5, 6))).toBe(true);
  expect(holds(six, at(2, 1, 2, 3, 4))).toBe(false);
  const shifted = form(wc("parity"), 2, 2, [3, 4, 7]);
  expect(holds(shifted, at(2, 3, 7, 3, 7))).toBe(false);
  expect(holds(shifted, at(2, 3, 4, 7, 7))).toBe(true);
  const zero = form(wc("mod3"), 2, 2, [0, 1, 2]);
  expect(holds(zero, at(2, 0, 1, 2, 2))).toBe(true);
  expect(holds(zero, at(2, 1, 1, 2, 2))).toBe(false);
  const negative = form(wc("mod3"), 2, 2, [-3, -2, -1, 0, 1]);
  expect(holds(negative, at(2, -2, -1, 0, 0))).toBe(true);
  expect(holds(negative, at(2, -3, -2, -1, -1))).toBe(true);
  expect(holds(negative, at(2, -2, 1, 0, 0))).toBe(false);
  expect(holds(negative, at(2, -2, -2, 1, 1))).toBe(false);
});

test("a class missing from the alphabet makes the rule unsatisfiable", () => {
  const f = form(wc("mod3"), 2, 2, [1, 2, 4, 5]);
  for (const a of [1, 2, 4, 5]) for (const b of [1, 2, 4, 5]) expect(holds(f, at(2, a, b, a, b))).toBe(false);
});

test("a small board has few windows; a board with a single row has none", () => {
  const f = form(wc("parity"), 2, 3);
  expect(holds(f, at(3, 1, 2, 1, 2, 1, 2))).toBe(true);
  // The right-hand window holds only odd digits.
  expect(holds(f, at(3, 1, 2, 1, 2, 1, 3))).toBe(true);
  expect(holds(f, at(3, 2, 2, 1, 2, 2, 4))).toBe(false);
  expect(form(wc("parity"), 1, 4)).toEqual({ op: "All", children: [] });
});

test("repeated and reordered declarations compare equivalent", () => {
  eq(wc("mod3"), `${wc("mod3")}\n${wc("mod3")}`, 3, 3);
});

test("entropy over an alphabet that cannot split into thirds, and windows over inactive cells, stay uncovered", () => {
  const r = nf(wc("entropy"), 2, 2, [1, 2, 3, 4]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage).toMatchObject([{ kind: "window-classes", status: "unsupported", reason: expect.stringContaining("multiple of three") }]);
  const hole = nf(wc("parity"), 3, 3, nine, ["r2c2"]);
  expect(hole.status).toBe("partial");
  expect(hole.normalForm!.coverage).toMatchObject([{ kind: "window-classes", status: "unsupported", reason: expect.stringContaining("inactive") }]);
  expect(compare(hole, hole).status).toBe("unresolved");
});

test("near misses have different normal forms", () => {
  differs(nf(wc("parity")), nf(wc("mod3")));
  differs(nf(wc("mod3")), nf(wc("entropy")));
  differs(nf(wc("parity"), 3, 3), nf(wc("parity"), 3, 4));
  differs(nf(wc("parity"), 2, 3), nf(wc("parity"), 3, 2));
  differs(nf(wc("parity"), 2, 2, nine), nf(wc("parity"), 2, 2, [2, 3, 4]));
});

const layouts: { rows: number; cols: number; symbols: number[]; classes: string }[] = [];
for (const classes of ["parity", "mod3", "entropy"]) for (const symbols of [[1, 2, 3], [2, 3, 4, 5, 6, 8], [0, 1, 2, 3, 4, 5], [4, 5, 6, 7], [-2, -1, 0, 1, 2, 3]]) layouts.push({ rows: 2, cols: 2, symbols, classes });
layouts.push({ rows: 2, cols: 3, symbols: [1, 2, 3], classes: "mod3" }, { rows: 3, cols: 2, symbols: [1, 2], classes: "parity" });
for (const { rows, cols, symbols, classes } of layouts) for (const negate of [false, true]) test(`lowered formula and public evaluator agree: ${negate ? "not " : ""}${classes} on ${rows}x${cols} over ${symbols.join(",")}`, () => {
  const text = `${negate ? "not " : ""}${wc(classes)}`;
  const r = nf(text, rows, cols, symbols);
  expect(r.issues).toEqual([]);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], regions: [[${grid(rows, cols).join(", ")}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rl = compiled.value!.rules[0];
  if (r.status === "partial") {
    // The alphabet cannot be split into thirds: the lowering declines.
    expect(classes).toBe("entropy");
    expect(symbols.length % 3).not.toBe(0);
    return;
  }
  expect(r.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
  const cs = grid(rows, cols);
  let total = 0;
  const walk = (digits: number[]) => {
    if (digits.length === cs.length) {
      const v = Object.fromEntries(digits.map((d, i) => [cs[i], d]));
      expect([text, digits, holds(r.normalForm!.solution, v)]).toEqual([text, digits, evaluate(rl, { digits: v }).status === "holds"]);
      total++;
      return;
    }
    for (const s of symbols) walk([...digits, s]);
  };
  walk([]);
  expect(total).toBe(symbols.length ** cs.length);
});

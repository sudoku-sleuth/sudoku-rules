import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { lowerMagicSquare, magicSquares } from "../../src/semantics/magic-square";
import { canonicalBoard } from "../../src/semantics/board";
import { UnsupportedSemantics } from "../../src/semantics/primitives";
import { readSemanticFile } from "../../src/semantics/reader";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nineDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const grid = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${(i % cols) + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[]): BoardContext => ({ rows, cols, activeCells: grid(rows, cols), alphabet, regions: [grid(rows, cols)] });
const nf = (rules: string, rows = 2, cols = 9, alphabet = nineDigits) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(rows, cols, alphabet));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const row1 = grid(1, 9), row2 = grid(2, 9).slice(9);
const places = (...p: Cell[][]) => `magic-square places ${JSON.stringify(p)}`;

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
function form(rules: string, alphabet = nineDigits) { const r = nf(rules, 2, 9, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const assign = (place: Cell[], digits: number[]) => Object.fromEntries(place.map((c, i) => [c, digits[i]]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(places(row1));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 9, symbols: [1,2,3,4,5,6,7,8,9], regions: [[${row1.join(", ")}]]}\n---${body(places(row1))}` });
}, 30000);

test("there are exactly eight magic squares, found by a search that does not use the table", () => {
  const found: number[][] = [];
  const grid9 = Array(9).fill(0);
  const used = new Set<number>();
  const walk = (i: number) => {
    if (i === 9) { if (grid9[0] + grid9[4] + grid9[8] === 15 && grid9[2] + grid9[4] + grid9[6] === 15 && [0, 1, 2].every(k => grid9[k] + grid9[k + 3] + grid9[k + 6] === 15)) found.push([...grid9]); return; }
    for (let d = 1; d <= 9; d++) {
      if (used.has(d)) continue;
      grid9[i] = d;
      if (i % 3 === 2 && grid9[i - 2] + grid9[i - 1] + d !== 15) continue;
      used.add(d); walk(i + 1); used.delete(d);
    }
  };
  walk(0);
  const text = (m: number[][]) => m.map(s => s.join("")).sort();
  expect(magicSquares).toHaveLength(8);
  expect(text(magicSquares)).toEqual(text(found));
});

test("a place holds when it reads as a magic square, and breaks otherwise", () => {
  const f = form(places(row1));
  expect(holds(f, assign(row1, [8, 1, 6, 3, 5, 7, 4, 9, 2]))).toBe(true);
  expect(holds(f, assign(row1, [8, 1, 6, 3, 5, 7, 4, 2, 9]))).toBe(false);
  expect(holds(f, assign(row1, [2, 7, 6, 9, 5, 1, 4, 3, 8]))).toBe(true);
  expect(holds(f, assign(row1, [4, 9, 2, 3, 5, 7, 8, 1, 6]))).toBe(true);
  expect(holds(f, assign(row1, [5, 5, 5, 5, 5, 5, 5, 5, 5]))).toBe(false);
  expect(holds(f, assign(row1, [1, 2, 3, 4, 5, 6, 7, 8, 9]))).toBe(false);
});

test("with several places, one magic square is enough", () => {
  const f = form(places(row1, row2));
  const square = [8, 1, 6, 3, 5, 7, 4, 9, 2], other = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(holds(f, { ...assign(row1, square), ...assign(row2, other) })).toBe(true);
  expect(holds(f, { ...assign(row1, other), ...assign(row2, square) })).toBe(true);
  expect(holds(f, { ...assign(row1, other), ...assign(row2, other) })).toBe(false);
});

test("places that cannot hold the digits once each add no case", () => {
  expect(form(places(row1.slice(0, 8)))).toEqual({ op: "Any", children: [] });
  expect(form(places([...row1.slice(0, 8), row1[0]]))).toEqual({ op: "Any", children: [] });
  expect(form(places([]))).toEqual({ op: "Any", children: [] });
  const f = form(places(row1.slice(0, 4), row1));
  expect(holds(f, assign(row1, [8, 1, 6, 3, 5, 7, 4, 9, 2]))).toBe(true);
  eq(places(row1.slice(0, 4), row1), places(row1));
});

test("an alphabet without all of 1 to 9 leaves no case; extra digits are allowed in other cells", () => {
  expect(form(places(row1), [1, 2, 3, 4, 5, 6, 7, 8])).toEqual({ op: "Any", children: [] });
  const wide = form(places(row1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(holds(wide, assign(row1, [8, 1, 6, 3, 5, 7, 4, 9, 2]))).toBe(true);
  expect(holds(wide, assign(row1, [8, 1, 6, 3, 5, 7, 4, 9, 0]))).toBe(false);
});

test("a rotated or reflected place, the place order and repeated places do not matter", () => {
  const turned = [row1[6], row1[3], row1[0], row1[7], row1[4], row1[1], row1[8], row1[5], row1[2]];
  const mirrored = [row1[2], row1[1], row1[0], row1[5], row1[4], row1[3], row1[8], row1[7], row1[6]];
  eq(places(row1), places(turned));
  eq(places(row1), places(mirrored));
  eq(places(row1, row2), places(row2, row1));
  eq(places(row1, row1), places(row1));
});

test("near misses compare as different", () => {
  const shuffled = [row1[1], row1[0], ...row1.slice(2)];
  differs(places(row1), places(shuffled));
  differs(places(row1), places(row2));
  differs(places(row1), places(row1, row2));
  differs(places(row1), `not ${places(row1)}`);
  differs(places(row1), `unique ${row1.join("-")}`);
  const r = compare(nf(places(row1), 2, 9, nineDigits), nf(places(row1), 2, 9, [...nineDigits, 10]));
  expect(r.status).not.toBe("equivalent");
});

test("a place with a cell outside the board is rejected", () => {
  const board: BoardContext = { rows: 1, cols: 9, activeCells: row1.filter(c => c !== "r1c5"), alphabet: nineDigits };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(places(row1))}` }, board);
  expect(r.status).toBe("invalid");
  expect(r.issues[0].message).toContain("in-board cell");
});

test("more places than the expansion bound stay uncovered with a reason", () => {
  // Parsing that many places is slow, so the lowering is given a declaration whose place list is repeated after reading.
  const reading = readSemanticFile({ file: "synthetic.rules.md", text: `${header}---\n${body(`sudoku 9x9\n${places(row1)}`)}` });
  const instance = reading.instances.find(i => i.kind === "magic-square")!;
  const ast = instance.ast as unknown as { parameters: { name: { value: string }; value: { value: unknown[] } }[] };
  const list = ast.parameters.find(p => p.name.value === "places")!.value;
  list.value = Array(14000).fill(list.value[0]);
  expect(() => lowerMagicSquare(instance.ast, canonicalBoard(boardOf(1, 9, nineDigits)))).toThrow(UnsupportedSemantics);
  expect(() => lowerMagicSquare(instance.ast, canonicalBoard(boardOf(1, 9, nineDigits)))).toThrow(/1,000,000/);
});

// Nine cells over nine digits cannot be walked in full, so the evaluator is compared on a sample that covers every
// kind of difference: each magic square, single swaps and replacements of its digits, and seeded shuffles.
test("the lowered formula and the public evaluator agree on magic squares, near squares and shuffles", () => {
  let state = 12345;
  const random = () => (state = (state * 1103515245 + 12345) % 2147483648) / 2147483648;
  const samples: number[][] = [];
  for (const square of magicSquares) {
    samples.push(square);
    for (let i = 0; i < 9; i++) for (let j = i + 1; j < 9; j++) { const s = [...square]; [s[i], s[j]] = [s[j], s[i]]; samples.push(s); }
    for (let i = 0; i < 9; i++) for (const d of [0, 10, square[(i + 1) % 9]]) { const s = [...square]; s[i] = d; samples.push(s); }
  }
  for (let k = 0; k < 150; k++) { const s = [...nineDigits]; for (let i = 8; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [s[i], s[j]] = [s[j], s[i]]; } samples.push(s); }
  for (let k = 0; k < 50; k++) samples.push(Array.from({ length: 9 }, () => 1 + Math.floor(random() * 9)));
  const alphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const rule = compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 9, symbols: [${alphabet}], regions: [[${grid(2, 9).join(", ")}]]}\n---${body(places(row1))}` }).value!.rules[0];
  const f = form(places(row1), alphabet);
  let satisfied = 0;
  for (const digits of samples) {
    const values = assign(row1, digits);
    const expected = evaluate(rule, { digits: values }).status === "holds";
    expect([JSON.stringify(digits), holds(f, values)]).toEqual([JSON.stringify(digits), expected]);
    if (expected) satisfied++;
  }
  expect(satisfied).toBe(8);
});

test("the lowered formula and the public evaluator agree on two places and a short place", () => {
  const alphabet = nineDigits;
  const place = row1, other = row2;
  const text = places(place, other.slice(0, 8));
  const rule = compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 9, symbols: [${alphabet}], regions: [[${grid(2, 9).join(", ")}]]}\n---${body(text)}` }).value!.rules[0];
  const f = form(text);
  const square = magicSquares[3], other2 = magicSquares[5];
  for (const [first, second] of [[square, other2], [[...square].reverse(), square], [[...square].reverse(), [...other2].reverse()]]) {
    const values = { ...assign(place, first), ...assign(other, second) };
    expect([JSON.stringify(values), holds(f, values)]).toEqual([JSON.stringify(values), evaluate(rule, { digits: values }).status === "holds"]);
  }
});

import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const boardOf = (n: number, alphabet = nine): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet = nine) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const cage = (...cs: Cell[]) => `equality-cage ${cs.join("-")}`;
const eq = (x: string, y: string, n = 6) => expect(compare(nf(x, n), nf(y, n)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 6) => { const r = compare(nf(x, n), nf(y, n)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifierAt = (cell: Cell) => `value-modifier factor 2 offset 0 exactly [["${cell}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
const modifier = modifierAt("r1c6");

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
function form(rules: string, n = 6, alphabet = nine) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(cage(cells[0], cells[1]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r1c2]]}\n---${body(cage(cells[0], cells[1]))}` });
}, 30000);

test("a pair on 1..9 balances one low odd digit with one high even digit, or low even with high odd", () => {
  const f = form(cage(cells[0], cells[1]));
  expect(holds(f, at(1, 6))).toBe(true);
  expect(holds(f, at(6, 1))).toBe(true);
  expect(holds(f, at(4, 7))).toBe(true);
  expect(holds(f, at(1, 7))).toBe(false);
  expect(holds(f, at(2, 4))).toBe(false);
  expect(holds(f, at(3, 3))).toBe(false);
  // The middle digit is forbidden.
  expect(holds(f, at(5, 6))).toBe(false);
  expect(holds(f, at(4, 5))).toBe(false);
});

test("cages of odd size cannot balance", () => {
  for (const n of [1, 3]) {
    const f = form(cage(...cells.slice(0, n)), n);
    for (const d of nine) expect(holds(f, at(...Array(n).fill(d)))).toBe(false);
    expect(holds(f, at(...[1, 6, 2].slice(0, n)))).toBe(false);
  }
  expect(form(cage(...cells.slice(0, 3)), 3)).toEqual({ op: "Any", children: [] });
});

test("a cage of four", () => {
  const f = form(cage(...cells.slice(0, 4)), 4);
  expect(holds(f, at(1, 2, 6, 7))).toBe(true);
  expect(holds(f, at(1, 2, 6, 8))).toBe(false);
  expect(holds(f, at(1, 6, 2, 7))).toBe(true);
  expect(holds(f, at(1, 3, 6, 8))).toBe(true);
  expect(holds(f, at(2, 4, 7, 9))).toBe(true);
  expect(holds(f, at(1, 3, 6, 7))).toBe(false);
  expect(holds(f, at(1, 6, 1, 6))).toBe(false);
});

test("an even alphabet has no forbidden middle digit", () => {
  const eight = [1, 2, 3, 4, 5, 6, 7, 8];
  const f = form(cage(cells[0], cells[1]), 2, eight);
  expect(holds(f, at(1, 6))).toBe(true);
  expect(holds(f, at(3, 8))).toBe(true);
  expect(holds(f, at(4, 5))).toBe(true);
  expect(holds(f, at(4, 6))).toBe(false);
  expect(holds(f, at(2, 5))).toBe(true);
  expect(holds(f, at(1, 5))).toBe(false);
});

test("a cage that cannot be satisfied lowers to a false formula", () => {
  // Alphabet 1..3: low is {1}, high is {3} (2 is the middle); a pair needs a low odd and a high even digit.
  const f = form(cage(cells[0], cells[1]), 2, [1, 2, 3]);
  for (const x of [1, 2, 3]) for (const y of [1, 2, 3]) expect(holds(f, at(x, y))).toBe(false);
});

test("cell order and the alias spelling do not matter", () => {
  eq(cage(cells[1], cells[0]), cage(cells[0], cells[1]));
  eq(`equality-cage ${cells[0]}-${cells[1]}-${cells[2]}-${cells[3]}`, `equality-cage ${cells[3]}-${cells[2]}-${cells[1]}-${cells[0]}`);
  eq(cage(cells[0], cells[1]), `https://rules.sudoku-sleuth.com/equality-cage.md ${cells[0]}-${cells[1]}`.replace("https://rules.sudoku-sleuth.com/equality-cage.md", "equality-cage"));
});

test("near misses compare as different", () => {
  differs(cage(cells[0], cells[1]), cage(cells[0], cells[2]));
  differs(cage(cells[0], cells[1]), cage(cells[0], cells[1], cells[2], cells[3]));
  differs(cage(cells[0], cells[1]), `unique ${cells[0]}-${cells[1]}`);
  differs(cage(cells[0], cells[1]), `not ${cage(cells[0], cells[1])}`);
  const r = compare(nf(cage(cells[0], cells[1]), 6, nine), nf(cage(cells[0], cells[1]), 6, [1, 2, 3, 4, 5, 6, 7, 8]));
  expect(r.status).not.toBe("equivalent");
});

test("a cage beyond the expansion bound stays uncovered with a reason", () => {
  const big = Array.from({ length: 12 }, (_, i) => `r1c${i + 1}` as Cell);
  const board: BoardContext = { rows: 1, cols: 12, activeCells: big, alphabet: Array.from({ length: 12 }, (_, i) => i + 1) };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(`equality-cage ${big.join("-")}`)}` }, board);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage[0]).toMatchObject({ kind: "equality-cage", status: "unsupported", reason: expect.stringContaining("exceeds 1,000,000") });
});

test("a cage that lists a cell twice stays uncovered with its reason", () => {
  const r = nf(`equality-cage ${cells[0]}-${cells[1]}-${cells[0]}-${cells[2]}`);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage.find(x => x.kind === "equality-cage")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("lists a cell more than once") });
});

test("the declaration is covered beside a value modifier", () => {
  const r = nf(`${cage(cells[0], cells[1])}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "equality-cage")).toMatchObject({ status: "lowered" });
});

/** Seeded generator for the sampled assignments; the seed is part of the failure message so a failure can be replayed. */
const seed = 20260301;
const generator = (start: number) => () => { start = (start + 0x6D2B79F5) | 0; let t = Math.imul(start ^ (start >>> 15), 1 | start); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const sampleSize = 25;
function differential(n: number, symbols: number[], entries: string[], extra = ""): number {
  let seen = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text + extra)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "equality-cage").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text + extra)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    // The lowered formula is cheap, so it is counted over every assignment; the page formula is slow, so it judges every assignment of
    // a small board and, above 25 holding or 25 breaking ones, a seeded sample of each.
    const random = generator(seed);
    const holding: Record<string, number>[] = [], breaking: Record<string, number>[] = [];
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) { (holds(r.normalForm!.solution, values) ? holding : breaking).push(values); return; }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    const pick = (all: Record<string, number>[]) => all.length <= sampleSize ? all : Array.from({ length: sampleSize }, () => all[Math.floor(random() * all.length)]);
    for (const values of [...pick(holding), ...pick(breaking)]) {
      const expected = evaluate({ ...rule, finite: undefined }, { digits: values, values }).status === "holds";
      expect([text, JSON.stringify(values), seed, holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), seed, expected]);
    }
    const satisfied = holding.length;
    seen += satisfied;
  }
  return seen;
}

test("the lowered formula and the public evaluator agree on pairs over odd and even alphabets", () => {
  expect(differential(2, [1, 2, 3, 4, 5, 6, 7], [cage(cells[0], cells[1]), `not ${cage(cells[0], cells[1])}`])).toBeGreaterThan(0);
  expect(differential(2, [1, 2, 3, 4, 5, 6, 7, 8], [cage(cells[0], cells[1])])).toBeGreaterThan(0);
  expect(differential(2, [0, 2, 5, 8], [cage(cells[0], cells[1])])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on negative digits and odd sizes", () => {
  expect(differential(2, [-3, -2, 5, 6], [cage(cells[0], cells[1])])).toBeGreaterThan(0);
  differential(3, [1, 2, 3, 4], ["not " + cage(...cells.slice(0, 3))]);
  differential(1, [1, 2, 3], [cage(cells[0])]);
});

test("the lowered formula and the public evaluator agree on a cage of four", () => {
  expect(differential(4, [1, 2, 3, 4, 5, 6], [cage(...cells.slice(0, 4))])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on a cage of four over an odd alphabet", () => {
  expect(differential(4, [1, 2, 3, 4, 5, 6, 7], [cage(...cells.slice(0, 4))])).toBeGreaterThan(0);
});

test("a modifier board: the printed digits agree with the evaluator", () => {
  expect(differential(2, [1, 2, 3, 4, 5, 6], [cage(cells[0], cells[1])], `\n${modifierAt(cells[1])}`)).toBeGreaterThan(0);
});

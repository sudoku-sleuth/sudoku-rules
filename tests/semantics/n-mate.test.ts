import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet = [1, 2, 3, 4]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const list = (cs: number[]) => `[${cs.map(i => `"r1c${i}"`).join(",")}]`;
/** A one-row n mate from the clue cell, the ray and the cage as cell numbers. */
const mate = (clue: number, ray: number[], cage: number[]) => `n-mate cell "r1c${clue}" ray ${list(ray)} cage ${list(cage)}`;
const eq = (x: string, y: string, n = 5) => expect(compare(nf(x, n), nf(y, n)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 5) => { const r = compare(nf(x, n), nf(y, n)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `value-modifier factor 2 offset 0 exactly [["r1c4"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;

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
function form(rules: string, n = 5, alphabet?: number[]) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

/**
 * The published definition. The compiled rule keeps a lowered fast path (`finite`); it is removed here so the evaluator reads the rule
 * page's own formula. A second run supplies effective values that differ from the printed digits (the first cell doubled): this rule
 * reads printed digits only, so both runs must agree.
 */
type Compiled = NonNullable<ReturnType<typeof compileCase>["value"]>["rules"][number];
const published = (compiled: Compiled, values: Record<string, number>): boolean => {
  const rule = { ...compiled, finite: undefined } as Compiled;
  const printed = evaluate(rule, { digits: values }).status;
  const doubled = Object.fromEntries(Object.entries(values).map(([c, x], i) => [c, i === 0 ? x * 2 : x]));
  expect(evaluate(rule, { digits: values, values: doubled }).status).toBe(printed);
  expect(printed).not.toBe("undecided");
  return printed === "holds";
};

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(mate(1, [2, 3], [4]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3,4], regions: [[r1c1, r1c2, r1c3, r1c4]]}\n---${body(mate(1, [2, 3], [4]))}` });
}, 30000);

test("the clue picks a ray cell, and the clue plus that digit is the cage total", () => {
  const f = form(mate(1, [2, 3], [4, 5]));
  // Clue 1 picks r1c2 = 2, so the cage totals 3.
  expect(holds(f, at(1, 2, 4, 1, 2))).toBe(true);
  expect(holds(f, at(1, 2, 4, 2, 2))).toBe(false);
  expect(holds(f, at(1, 2, 4, 1, 3))).toBe(false);
  // Clue 2 picks r1c3 = 4, so the cage totals 6.
  expect(holds(f, at(2, 1, 4, 3, 3))).toBe(false);
  expect(holds(f, at(2, 1, 4, 2, 4))).toBe(true);
});

test("the cage digits must differ, even when the total fits", () => {
  const f = form(mate(1, [2, 3], [4, 5]));
  // Clue 1 and ray digit 3 need a total of 4: the cage 2 + 2 has the right total but repeats.
  expect(holds(f, at(1, 3, 4, 2, 2))).toBe(false);
  expect(holds(f, at(1, 3, 4, 1, 3))).toBe(true);
});

test("a clue past the ray or outside the alphabet names no cell", () => {
  const f = form(mate(1, [2], [4]));
  expect(holds(f, at(2, 1, 1, 3))).toBe(false);
  expect(holds(f, at(4, 1, 1, 5))).toBe(false);
  const none = nf(mate(1, [2, 3], [4]), 5, [3, 4]).normalForm!.solution;
  for (const v of [at(3, 3, 3, 3), at(4, 4, 4, 4), at(3, 4, 3, 4)]) expect(holds(none, v)).toBe(false);
});

test("the clue cell may be the ray cell it picks, and may lie in the cage", () => {
  // Clue 1 picks itself: the clue plus itself is 2, the cage total.
  const own = form(mate(1, [1, 3], [4]));
  expect(holds(own, at(1, 1, 1, 2))).toBe(true);
  expect(holds(own, at(1, 1, 1, 3))).toBe(false);
  // The clue is in the cage: clue 1 picks r1c2 = 2, and the cage r1c1 + r1c4 totals 3.
  const inCage = form(mate(1, [2, 3], [1, 4]));
  expect(holds(inCage, at(1, 2, 1, 2))).toBe(true);
  expect(holds(inCage, at(1, 2, 1, 3))).toBe(false);
});

test("a cage cell written twice counts once, and equal readings give equal normal forms", () => {
  eq(mate(1, [2, 3], [4, 4]), mate(1, [2, 3], [4]));
  eq(mate(1, [2, 3], [4, 5]), mate(1, [2, 3], [5, 4]));
  // With an alphabet of two symbols only the first two ray cells can be picked.
  expect(compare(nf(mate(1, [2, 3], [4]), 5, [1, 2]), nf(mate(1, [2, 3, 5], [4]), 5, [1, 2])).status).toBe("equivalent");
});

test("near misses compare as different", () => {
  const base = mate(1, [2, 3], [4, 5]);
  differs(base, mate(1, [3, 2], [4, 5]));
  differs(base, mate(1, [2, 3, 4], [4, 5]));
  differs(base, mate(1, [2, 3], [4]));
  differs(base, mate(1, [2, 3], [4, 5, 2]));
  differs(base, mate(5, [2, 3], [4, 5]));
  differs(base, `not ${base}`);
  differs(base, "unique r1c4-r1c5");
});

/** Every Allowed in a formula, with the cells it names. */
function allowedAtoms(f: Formula): { cell: string; values: number[] }[] {
  if (f.op === "Allowed") return [{ cell: f.cell, values: f.values }];
  if (f.op === "All" || f.op === "Any") return f.children.flatMap(allowedAtoms);
  if (f.op === "Not") return allowedAtoms(f.child);
  return [];
}

test("only clue digits that name a ray position appear, and no case names an undefined cell", () => {
  // A ray of two cells on the alphabet 0..3: the clue is 1 or 2, never 0 (no position) or 3 (past the ray).
  const f = form(mate(1, [2, 3], [4]), 5, [0, 1, 2, 3]);
  const atoms = allowedAtoms(f);
  expect(atoms.every(a => a.cell.startsWith("r1c") && !a.values.some(v => v === undefined))).toBe(true);
  const clueValues = [...new Set(atoms.filter(a => a.cell === "r1c1").flatMap(a => a.values))].sort();
  expect(clueValues).toEqual([1, 2]);
  expect(atoms.some(a => a.cell === "r1c5")).toBe(false);
  // The same formula as on the alphabet 1..2 with the same cases for the clue, apart from the ray-digit choices.
  const ray = new Set(atoms.filter(a => a.cell === "r1c2" || a.cell === "r1c3").map(a => a.cell));
  expect(ray.size).toBe(2);
  // A one-cell ray allows only the clue 1.
  const one = allowedAtoms(form(mate(1, [2], [4]), 5, [0, 1, 2, 3])).filter(a => a.cell === "r1c1").flatMap(a => a.values);
  expect([...new Set(one)]).toEqual([1]);
});

test("a ray cell written twice is read at each position it holds", () => {
  const f = form(mate(1, [2, 2], [4]), 5, [1, 2, 3]);
  // Clue 1 and clue 2 both pick r1c2, so r1c2 = v needs the cage to total 1 + v or 2 + v.
  expect(holds(f, at(1, 2, 1, 3))).toBe(true);
  expect(holds(f, at(2, 1, 1, 3))).toBe(true);
  expect(holds(f, at(1, 2, 1, 2))).toBe(false);
  expect(holds(f, at(2, 3, 1, 3))).toBe(false);
});

test("the declaration is covered beside a value modifier because it reads printed digits", () => {
  const r = nf(`${mate(1, [2, 3], [5])}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "n-mate")).toMatchObject({ status: "lowered" });
});

/** The evaluator is run on every satisfying assignment and on every `sample`-th other one. */
function differential(n: number, symbols: number[], entries: string[], sample = 1): number {
  let seen = 0, stride = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "n-mate").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    const walk = (i: number, values: Record<string, number>) => {
      if (i === n) {
        const got = holds(r.normalForm!.solution, values);
        if (got) seen++;
        if (got || stride++ % sample === 0) expect([text, JSON.stringify(values), published(rule, values)]).toEqual([text, JSON.stringify(values), got]);
        return;
      }
      for (const x of symbols) walk(i + 1, { ...values, [used[i]]: x });
    };
    walk(0, {});
  }
  return seen;
}
const diffTest = (name: string, n: number, symbols: number[], entries: string[], sample: number, atLeast = 1) =>
  test(`the lowered formula and the public evaluator agree on ${name}`, () => { expect(differential(n, symbols, entries, sample)).toBeGreaterThanOrEqual(atLeast); });

diffTest("a one-cell cage", 4, [1, 2, 3], [mate(1, [2, 3], [4]), mate(1, [2, 3, 4], [4])], 10);
diffTest("a two-cell cage", 4, [1, 2, 3], [mate(1, [2], [3, 4]), mate(2, [3, 4], [1, 3])], 10);
diffTest("a clue on its own ray or in its cage", 4, [1, 2, 3], [mate(1, [1, 3], [4]), mate(1, [2, 3], [1, 4]), mate(1, [2, 1], [3])], 10);
diffTest("a ray cell in the cage and a repeated cage cell", 4, [1, 2, 3], [mate(1, [2, 3], [2, 4]), mate(1, [2, 3], [4, 4])], 10);
diffTest("a ray that repeats a cell", 4, [1, 2, 3], [mate(1, [2, 2], [4]), mate(1, [2, 3, 2], [4])], 10);
diffTest("a negation", 4, [1, 2, 3], [`not ${mate(1, [2, 3], [4])}`], 6);
diffTest("a zero-based alphabet", 4, [0, 1, 2, 3], [mate(1, [2, 3], [4])], 10);
diffTest("an alphabet that cannot name a position", 4, [2, 3, 4], [mate(1, [2, 3], [4])], 10, 0);
diffTest("a five-cell board", 5, [1, 2, 3], [mate(1, [2, 3], [4, 5])], 25);

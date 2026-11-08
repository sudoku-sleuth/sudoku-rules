import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet = [1, 2, 3, 4, 5]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const list = (cs: number[]) => `[${cs.map(i => `"r1c${i}"`).join(",")}]`;
/** A one-row pointing thermo from the line and the ray as cell numbers. */
const thermo = (line: number[], ray: number[]) => `pointing-thermo ${line.map(i => `r1c${i}`).join("-")} ray ${list(ray)}`;
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
  nf(thermo([1, 2], [3, 4]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3,4], regions: [[r1c1, r1c2, r1c3, r1c4]]}\n---${body(thermo([1, 2], [3, 4]))}` });
}, 30000);

test("the tip digit picks a ray cell that holds the bulb digit", () => {
  const f = form(thermo([1, 2], [3, 4, 5]));
  // Tip 2 points at the second ray cell, r1c4, which must hold the bulb 1.
  expect(holds(f, at(1, 2, 5, 1, 5))).toBe(true);
  expect(holds(f, at(1, 2, 1, 5, 5))).toBe(false);
  // Tip 3 points at r1c5.
  expect(holds(f, at(2, 3, 5, 5, 2))).toBe(true);
  expect(holds(f, at(2, 3, 5, 2, 5))).toBe(false);
});

test("the line must strictly increase from the bulb to the tip", () => {
  const f = form(thermo([1, 2, 3], [4, 5]));
  // Tip 3 is past a two-cell ray, so use a ray of three.
  const g = form(thermo([1, 2, 3], [4, 5, 1]));
  expect(holds(g, at(1, 2, 3, 5, 5))).toBe(true);
  expect(holds(g, at(2, 3, 4, 5, 5))).toBe(false);
  // Tip 3 names r1c1, which holds the bulb 1.
  expect(holds(g, at(1, 2, 3, 4, 4))).toBe(true);
  expect(holds(g, at(1, 1, 3, 4, 4))).toBe(false);
  expect(holds(g, at(2, 2, 3, 4, 4))).toBe(false);
  expect(holds(f, at(1, 2, 2, 5, 5))).toBe(false);
});

test("a tip digit past the ray or outside the alphabet names no cell", () => {
  const f = form(thermo([1, 2], [3]));
  expect(holds(f, at(1, 2, 1))).toBe(false);
  expect(holds(f, at(1, 3, 1))).toBe(false);
  expect(form(thermo([1, 2], [3, 4]), 5, [3, 4, 5])).toEqual({ op: "Any", children: [] });
});

test("a one-cell line is its own bulb and tip", () => {
  const f = form(thermo([1], [2, 3, 1]));
  // Digit 3 points at r1c1, which holds 3.
  expect(holds(f, at(3, 5, 5))).toBe(true);
  // Digit 2 points at r1c3, which must hold 2.
  expect(holds(f, at(2, 5, 2))).toBe(true);
  expect(holds(f, at(2, 5, 3))).toBe(false);
  // Digit 1 points at r1c2, which must hold 1.
  expect(holds(f, at(1, 1, 5))).toBe(true);
  expect(holds(f, at(1, 2, 5))).toBe(false);
});

test("a cell written twice in a row can never increase, and a repeat further on is read at each step", () => {
  const twice = form(thermo([1, 1], [3, 4]));
  for (const v of [at(1, 1, 1, 1), at(1, 2, 1, 1), at(2, 2, 1, 2)]) expect(holds(twice, v)).toBe(false);
  const loop = form(thermo([1, 2, 1], [3, 4]));
  for (const v of [at(1, 2, 1, 1), at(1, 2, 1, 2), at(2, 1, 2, 2)]) expect(holds(loop, v)).toBe(false);
});

test("near misses compare as different", () => {
  const base = thermo([1, 2], [3, 4]);
  differs(base, thermo([2, 1], [3, 4]));
  differs(base, thermo([1, 2], [4, 3]));
  differs(base, thermo([1, 2], [3, 4, 5]));
  differs(base, thermo([1, 3], [3, 4]));
  differs(base, thermo([1, 2, 5], [3, 4]));
  differs(base, `not ${base}`);
  differs(base, "thermo r1c1-r1c2");
  differs(base, `unique r1c1-r1c2`);
});

test("a cell off the active board is an error in the case", () => {
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(thermo([1, 2], [3]))}` }, { rows: 1, cols: 3, alphabet: [1, 2, 3], activeCells: [cells[0], cells[2]], regions: [[cells[0], cells[2]]] });
  expect(r.status).toBe("invalid");
});

test("the declaration is covered beside a value modifier because it reads printed digits", () => {
  const r = nf(`${thermo([1, 2], [3, 4])}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "pointing-thermo")).toMatchObject({ status: "lowered" });
});

/** The evaluator is run on every satisfying assignment and on every `sample`-th other one. */
function differential(n: number, symbols: number[], entries: string[], sample = 1): number {
  let seen = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "pointing-thermo").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let index = 0;
    const walk = (i: number, values: Record<string, number>) => {
      if (i === n) {
        const got = holds(r.normalForm!.solution, values);
        if (got) seen++;
        if (got || index++ % sample === 0) expect([text, JSON.stringify(values), published(rule, values)]).toEqual([text, JSON.stringify(values), got]);
        return;
      }
      for (const x of symbols) walk(i + 1, { ...values, [used[i]]: x });
    };
    walk(0, {});
  }
  return seen;
}

const hasPair = (f: Formula): boolean => f.op === "Pair" || (f.op === "All" || f.op === "Any" ? f.children.some(hasPair) : f.op === "Not" ? hasPair(f.child) : false);

test("a one-cell line, or a ray cell that is the tip, is read as its digit rather than through a pair table", () => {
  expect(hasPair(form(thermo([1], [2, 3, 1])))).toBe(false);
  // The ray starts at the tip itself, which can only be picked by a tip digit of 1, and that cannot rise above the bulb.
  const f = form(thermo([1, 2], [2, 3]));
  expect(holds(f, at(1, 2, 1))).toBe(true);
  expect(holds(f, at(1, 2, 3))).toBe(false);
  expect(holds(f, at(2, 3, 5))).toBe(false);
  eq(thermo([1, 2], [3, 4]), `pointing-thermo line r1c1-r1c2 ray ${list([3, 4])}`);
});

test("a tip of zero or a negative digit names no position", () => {
  const zero = form(thermo([1, 2], [3, 4]), 5, [0, 1, 2]);
  expect(holds(zero, at(0, 1, 5, 5))).toBe(false);
  expect(holds(zero, at(0, 2, 5, 0))).toBe(true);
  expect(form(thermo([1, 2], [3, 4]), 5, [-2, -1, 0])).toEqual({ op: "Any", children: [] });
});

// Every assignment is checked against the published definition (sample 1); each entry is its own test to keep the time down.
const diffTest = (name: string, n: number, symbols: number[], entries: string[], sample = 1, atLeast = 1) =>
  entries.forEach((entry, i) => test(`the lowered formula and the public evaluator agree on ${name} (${i + 1})`, () => { expect(differential(n, symbols, [entry], sample)).toBeGreaterThanOrEqual(atLeast); }));

diffTest("two- and three-cell lines", 4, [1, 2, 3], [thermo([1, 2], [3, 4]), thermo([2, 1], [3, 4]), thermo([1, 2, 3], [4, 1, 2]), `not ${thermo([1, 2], [3, 4])}`], 1, 0);
diffTest("a five-cell board (every fourth rejected assignment)", 5, [1, 2, 3], [thermo([1, 2, 3], [4, 5, 1]), thermo([1, 3], [2, 4, 5])], 4);
diffTest("a zero-based alphabet", 4, [0, 1, 2, 3], [thermo([1, 2], [3, 4, 1])]);
diffTest("a negative alphabet", 4, [-1, 0, 1, 2], [thermo([1, 2], [3, 4, 1])], 1, 0);
diffTest("a gapped alphabet", 4, [2, 3, 4], [thermo([1, 2], [3, 4, 1])], 1, 0);
diffTest("one-cell and repeating lines", 4, [1, 2, 3], [thermo([1], [2, 3, 1]), thermo([1], [1, 2, 3]), thermo([1, 2, 1], [3, 4]), thermo([1, 1], [3, 4])], 1, 0);
diffTest("an unreachable line", 4, [3, 4, 5], [thermo([1, 2], [3, 4])], 1, 0);

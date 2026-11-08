import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet = [1, 2, 3, 4, 5]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const list = (cs: number[]) => `[${cs.map(i => `"r1c${i}"`).join(",")}]`;
/** A one-row pointing arrow from the clue cell number and the ray as cell numbers. */
const arrow = (clue: number, ray: number[], target: string, extra = "") => `pointing-arrow cell "r1c${clue}" ray ${list(ray)} target "${target}"${extra}`;
const eq = (x: string, y: string, n = 5, alphabet?: number[]) => expect(compare(nf(x, n, alphabet), nf(y, n, alphabet)).status).toBe("equivalent");
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
  nf(arrow(1, [2, 3], "greater"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(arrow(1, [2, 3], "greater"))}` });
}, 30000);

test("greater and less compare the cell the clue digit points at with the clue digit", () => {
  const greater = form(arrow(1, [2, 3, 4], "greater"));
  // Clue 2 points at the second ray cell, r1c3.
  expect(holds(greater, at(2, 1, 3, 1))).toBe(true);
  expect(holds(greater, at(2, 1, 2, 1))).toBe(false);
  expect(holds(greater, at(2, 1, 1, 1))).toBe(false);
  const less = form(arrow(1, [2, 3, 4], "less"));
  expect(holds(less, at(3, 1, 1, 2))).toBe(true);
  expect(holds(less, at(3, 1, 1, 3))).toBe(false);
  expect(holds(less, at(3, 1, 1, 5))).toBe(false);
});

test("a clue digit past the ray or outside the alphabet names no cell", () => {
  const f = form(arrow(1, [2, 3], "greater"));
  expect(holds(f, at(3, 5, 5))).toBe(false);
  expect(holds(f, at(9, 5, 5))).toBe(false);
  // Position 1 of the ray holds a digit above 1 only when the clue is 1.
  expect(holds(f, at(1, 2, 1))).toBe(true);
  expect(form(arrow(1, [2, 3], "greater"), 5, [3, 4, 5])).toEqual({ op: "Any", children: [] });
});

test("the clue cell may lie on its own ray", () => {
  // Clue 1 points at itself: 1 is not greater than 1, and not less than 1.
  expect(holds(form(arrow(1, [1, 3], "greater")), at(1, 5, 5))).toBe(false);
  expect(holds(form(arrow(1, [1, 3], "less")), at(1, 5, 5))).toBe(false);
  // Clue 2 points at r1c3, which may exceed it.
  expect(holds(form(arrow(1, [1, 3], "greater")), at(2, 5, 3))).toBe(true);
  expect(holds(form(arrow(1, [1, 3], "greater")), at(2, 5, 2))).toBe(false);
  // Source: clue 1 points at itself and equals the source only when the source holds 1.
  const f = form(arrow(1, [1, 3], "source", ` source "r1c5"`));
  expect(holds(f, at(1, 5, 5, 5, 1))).toBe(true);
  expect(holds(f, at(1, 5, 5, 5, 2))).toBe(false);
});

test("source matches the digit of the source cell", () => {
  const f = form(arrow(1, [2, 3, 4], "source", ` source "r1c5"`));
  expect(holds(f, at(3, 1, 1, 4, 4))).toBe(true);
  expect(holds(f, at(3, 1, 1, 4, 3))).toBe(false);
  expect(holds(f, at(4, 1, 1, 1, 1))).toBe(false);
  // A source on the ray itself: the second ray cell equals the cell it points to.
  expect(holds(form(arrow(1, [2, 3], "source", ` source "r1c3"`)), at(2, 5, 4))).toBe(true);
  // A source target without a source cell can never be met.
  expect(form(arrow(1, [2, 3], "source"))).toEqual({ op: "Any", children: [] });
});

test("first-five needs a 5 at the pointed position and none earlier on the ray", () => {
  const f = form(arrow(1, [2, 3, 4], "first-five"));
  expect(holds(f, at(2, 1, 5, 1))).toBe(true);
  expect(holds(f, at(2, 5, 5, 1))).toBe(false);
  expect(holds(f, at(1, 5, 5, 5))).toBe(true);
  expect(holds(f, at(3, 1, 1, 5))).toBe(true);
  expect(holds(f, at(3, 5, 1, 5))).toBe(false);
  expect(holds(f, at(3, 1, 1, 4))).toBe(false);
  // The clue cell on its own ray holds the pointed digit only when it is 5, and a 5 clue points at a ray of length 5.
  const own = form(arrow(1, [1, 2, 3, 4, 5], "first-five"));
  expect(holds(own, at(5, 1, 1, 1, 5))).toBe(false);
  expect(holds(own, at(1, 1, 1, 1, 1))).toBe(false);
  expect(holds(own, at(5, 1, 1, 1, 1))).toBe(false);
  expect(form(arrow(1, [2, 3], "first-five"), 5, [1, 2, 3])).toEqual({ op: "Any", children: [] });
});

test("a source cell beside another target is ignored, and equal readings give equal normal forms", () => {
  eq(arrow(1, [2, 3], "greater", ` source "r1c5"`), arrow(1, [2, 3], "greater"));
  // With an alphabet of two symbols only the first two ray cells can be pointed at.
  eq(arrow(1, [2, 3], "less"), arrow(1, [2, 3, 4, 5], "less"), 5, [1, 2]);
  eq(arrow(1, [2, 3], "first-five"), arrow(1, [2, 3, 4], "first-five"), 5, [1, 2, 5]);
});

test("near misses compare as different", () => {
  const base = arrow(1, [2, 3, 4], "greater");
  differs(base, arrow(1, [2, 3, 4], "less"));
  differs(base, arrow(1, [2, 3, 5], "greater"));
  differs(base, arrow(1, [4, 3, 2], "greater"));
  differs(base, arrow(1, [2, 3], "greater"));
  differs(base, arrow(5, [2, 3, 4], "greater"));
  differs(base, `not ${base}`);
  differs(base, arrow(1, [2, 3, 4], "first-five"));
  differs(arrow(1, [2, 3, 4], "source", ` source "r1c5"`), arrow(1, [2, 3, 4], "source", ` source "r1c1"`));
  differs(arrow(1, [2, 3, 4], "source", ` source "r1c5"`), arrow(1, [2, 3, 4], "source"));
});

const hasPair = (f: Formula): boolean => f.op === "Pair" || (f.op === "All" || f.op === "Any" ? f.children.some(hasPair) : f.op === "Not" ? hasPair(f.child) : false);

test("the clue cell, or a source on the ray, is read as its digit rather than through a pair table", () => {
  expect(hasPair(form(arrow(1, [1, 3], "greater")))).toBe(false);
  expect(hasPair(form(arrow(1, [1, 3], "less")))).toBe(false);
  // The picked ray cell is the source itself, so it always matches.
  const own = form(arrow(1, [3], "source", ` source "r1c3"`));
  expect(hasPair(own)).toBe(false);
  expect(holds(own, at(1, 5, 4))).toBe(true);
  expect(holds(own, at(2, 5, 4))).toBe(false);
  // A source that is the clue cell reads the same as the self comparison.
  expect(hasPair(form(arrow(1, [1, 3], "source", ` source "r1c1"`)))).toBe(false);
  // A source elsewhere does need a pair table.
  expect(hasPair(form(arrow(1, [2, 3], "source", ` source "r1c5"`)))).toBe(true);
});

test("a clue of zero or a negative digit names no position, even against an always-true reading", () => {
  const zero = form(arrow(1, [2, 3], "less"), 5, [0, 1, 2]);
  // Digit 0 is not a position, so it never holds, and digit 1 and 2 pick r1c2 and r1c3.
  expect(holds(zero, at(0, 0, 0))).toBe(false);
  expect(holds(zero, at(2, 5, 1))).toBe(true);
  expect(form(arrow(1, [2, 3], "less"), 5, [-2, -1, 0])).toEqual({ op: "Any", children: [] });
  eq(arrow(1, [2, 3], "less"), arrow(1, [2, 3], "less"), 5, [0, 1, 2]);
});

test("a cell off the active board is an error in the case", () => {
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(arrow(1, [2, 3], "greater"))}` }, { rows: 1, cols: 3, alphabet: [1, 2, 3], activeCells: [cells[0], cells[2]], regions: [[cells[0], cells[2]]] });
  expect(r.status).toBe("invalid");
});

test("the declaration is covered beside a value modifier because it reads printed digits", () => {
  const r = nf(`${arrow(1, [2, 3], "greater")}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "pointing-arrow")).toMatchObject({ status: "lowered" });
});

/** The evaluator is run on every satisfying assignment and on every `sample`-th other one. */
function differential(n: number, symbols: number[], entries: string[], sample = 1): number {
  let seen = 0, stride = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "pointing-arrow").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const got = holds(r.normalForm!.solution, values);
        if (got) seen++;
        if (got || stride++ % sample === 0) expect([text, JSON.stringify(values), published(rule, values)]).toEqual([text, JSON.stringify(values), got]);
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
  }
  return seen;
}

// Every assignment is checked against the published definition (sample 1); each entry is its own test to keep the time down.
const diffTest = (name: string, n: number, symbols: number[], entries: string[], _sample: number, atLeast = 1) =>
  entries.forEach((entry, i) => test(`the lowered formula and the public evaluator agree on ${name} (${i + 1})`, () => { expect(differential(n, symbols, [entry], 1)).toBeGreaterThanOrEqual(atLeast); }));

diffTest("greater", 4, [1, 2, 3], [arrow(1, [2, 3, 4], "greater"), arrow(2, [1, 3, 4], "greater")], 12);
diffTest("less and a shorter ray", 4, [1, 2, 3], [arrow(1, [2, 3, 4], "less"), arrow(1, [2, 3], "less")], 12);
diffTest("a negated greater", 4, [1, 2, 3], [`not ${arrow(1, [2, 3, 4], "greater")}`], 6);
diffTest("greater over a zero-based alphabet", 4, [0, 1, 2, 3], [arrow(1, [2, 3, 4], "greater")], 20);
diffTest("a clue cell on its own ray", 3, [1, 2, 3, 4], [arrow(1, [1, 2, 3], "greater"), arrow(1, [1, 2, 3], "less"), arrow(2, [3, 2, 1], "greater")], 8);
diffTest("a source on the ray", 3, [1, 2, 3, 4], [arrow(1, [2, 1, 3], "source", ` source "r1c3"`)], 4);
diffTest("source", 4, [1, 2, 3], [arrow(1, [2, 3, 4], "source", ` source "r1c4"`), arrow(1, [2, 3], "source", ` source "r1c1"`)], 12);
diffTest("a source cell on the ray", 4, [1, 2, 3], [arrow(1, [2, 3, 4], "source", ` source "r1c3"`)], 12);
diffTest("a missing source", 3, [1, 2, 3], [arrow(1, [2, 3], "source")], 6, 0);
diffTest("first-five", 4, [1, 2, 5], [arrow(1, [2, 3, 4], "first-five"), arrow(1, [1, 2, 3, 4], "first-five")], 12);
diffTest("first-five with a source cell beside it", 4, [1, 2, 5], [arrow(3, [4, 2, 1], "first-five"), arrow(1, [2, 3], "first-five", ` source "r1c4"`)], 12);
diffTest("first-five without a 5 and with other digits", 4, [2, 3, 5], [arrow(1, [2, 3, 4], "first-five")], 12);
diffTest("first-five without a 5 in the alphabet", 4, [1, 2, 3], [arrow(1, [2, 3, 4], "first-five")], 12, 0);
diffTest("a negative alphabet", 4, [-1, 0, 1, 2], [arrow(1, [2, 3, 4], "greater"), arrow(1, [2, 3, 4], "less")], 1, 0);
diffTest("a gapped alphabet", 4, [2, 3, 4], [arrow(1, [2, 3, 4], "greater"), arrow(1, [2, 3, 4], "less")], 1, 0);

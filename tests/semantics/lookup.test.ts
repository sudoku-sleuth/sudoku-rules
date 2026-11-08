import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet = [1, 2, 3, 4, 5]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const list = (cs: number[]) => `[${cs.map(i => `"r1c${i}"`).join(",")}]`;
/** A one-row lookup over the cells (as numbers) from a single source cell, with further settings. */
const single = (line: number[], source: number, extra = "") => `lookup ${line.map(i => `r1c${i}`).join("-")} cell "r1c${source}"${extra}`;
const counted = (line: number[], sources: number[], extra = "") => `lookup ${line.map(i => `r1c${i}`).join("-")} mode "count" sources ${list(sources)}${extra}`;
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
const reasonOf = (rules: string, n = 5, alphabet?: number[]) => { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); const c = r.normalForm!.coverage.find(x => x.kind === "lookup")!; expect(c.status).toBe("unsupported"); return c.reason!; };

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
  nf(single([2, 3], 1, " target 4"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4], regions: [[r1c1, r1c2, r1c3]]}\n---${body(single([2, 3], 1, " target 4"))}` });
}, 30000);

test("the source digit picks a position whose cell equals the target", () => {
  const f = form(single([2, 3, 4], 1, " target 4"));
  expect(holds(f, at(2, 1, 4, 1, 1))).toBe(true);
  expect(holds(f, at(2, 1, 3, 1, 1))).toBe(false);
  expect(holds(f, at(1, 4, 1, 1, 1))).toBe(true);
  // Position 4 is past a list of three.
  expect(holds(f, at(4, 4, 4, 4, 1))).toBe(false);
});

test("without a target the cell equals its own source, and a target cell supplies it otherwise", () => {
  const self = form(single([2, 3], 1));
  expect(holds(self, at(2, 1, 2, 1, 1))).toBe(true);
  expect(holds(self, at(2, 1, 3, 1, 1))).toBe(false);
  const other = form(single([2, 3], 1, ` targetCell "r1c5"`));
  expect(holds(other, at(2, 1, 4, 1, 4))).toBe(true);
  expect(holds(other, at(2, 1, 4, 1, 3))).toBe(false);
  // A fixed target wins over a target cell.
  eq(single([2, 3], 1, ` target 4 targetCell "r1c5"`), single([2, 3], 1, " target 4"));
});

test("the offset shifts the position, and relations compare the looked-up digit with the target", () => {
  const shifted = form(single([2, 3, 4], 1, " offset 1 target 4"));
  expect(holds(shifted, at(1, 1, 4, 1, 1))).toBe(true);
  expect(holds(shifted, at(1, 4, 1, 1, 1))).toBe(false);
  const less = form(single([2, 3], 1, ` relation {"op":"less"} target 3`));
  expect(holds(less, at(1, 2, 1))).toBe(true);
  expect(holds(less, at(1, 3, 1))).toBe(false);
  const reversed = form(single([2, 3], 1, ` relation {"op":"less"} reverseRelation true target 3`));
  expect(holds(reversed, at(1, 4, 1))).toBe(true);
  expect(holds(reversed, at(1, 2, 1))).toBe(false);
  const sum = form(single([2, 3], 1, ` relation {"op":"sum","value":5} target 2`));
  expect(holds(sum, at(2, 1, 3))).toBe(true);
  expect(holds(sum, at(2, 1, 4))).toBe(false);
});

test("firstMatch excludes earlier cells that already match", () => {
  const f = form(single([2, 3, 4], 1, " firstMatch true target 4"));
  expect(holds(f, at(2, 1, 4, 1, 1))).toBe(true);
  expect(holds(f, at(2, 4, 4, 1, 1))).toBe(false);
  expect(holds(f, at(3, 4, 1, 4, 1))).toBe(false);
  expect(holds(f, at(3, 1, 1, 4, 1))).toBe(true);
});

test("total chooses between a hit and a miss in single mode", () => {
  const miss = form(single([2, 3], 1, " total 0 target 4"));
  expect(holds(miss, at(2, 1, 3, 1, 1))).toBe(true);
  expect(holds(miss, at(2, 1, 4, 1, 1))).toBe(false);
  expect(form(single([2, 3], 1, " total 2 target 4"))).toEqual({ op: "Any", children: [] });
  expect(form(single([2, 3], 1, " total -1 target 4"))).toEqual({ op: "Any", children: [] });
  eq(single([2, 3], 1, " total 1 target 4"), single([2, 3], 1, " target 4"));
  // A missing source cell can never be met.
  expect(form("lookup r1c2-r1c3 target 4")).toEqual({ op: "Any", children: [] });
});

test("count mode needs every source to hit, or none of them", () => {
  const every = form(counted([2, 3], [1, 4], " target 3 total 2"));
  expect(holds(every, at(1, 3, 3, 2, 1))).toBe(true);
  expect(holds(every, at(1, 3, 2, 2, 1))).toBe(false);
  expect(holds(every, at(1, 2, 3, 1, 1))).toBe(false);
  const none = form(counted([2, 3], [1, 4], " target 3 total 0"));
  expect(holds(none, at(1, 1, 1, 1, 1))).toBe(true);
  expect(holds(none, at(1, 3, 1, 1, 1))).toBe(false);
  expect(form(counted([2, 3], [1, 4], " target 3 total 3"))).toEqual({ op: "Any", children: [] });
  // No sources and no hits required is vacuous.
  expect(form(counted([2, 3], [], " total 0"))).toEqual({ op: "All", children: [] });
  // A source listed twice counts twice.
  eq(counted([2, 3], [1, 1], " target 3 total 2"), counted([2, 3], [1], " target 3 total 1"));
});

test("the increasing path must strictly increase and may be required to exist", () => {
  const f = form(single([2, 3], 1, ` target 4 increasing ${list([4, 5])}`));
  expect(holds(f, at(2, 1, 4, 1, 2))).toBe(true);
  expect(holds(f, at(2, 1, 4, 2, 2))).toBe(false);
  expect(holds(f, at(2, 1, 4, 3, 2))).toBe(false);
  eq(single([2, 3], 1, " target 4"), single([2, 3], 1, " target 4 increasing []"));
  expect(form(single([2, 3], 1, " target 4 nonempty true"))).toEqual({ op: "Any", children: [] });
  expect(form(single([2, 3], 1, ` target 4 nonempty true increasing ${list([4])}`))).toEqual(form(single([2, 3], 1, " target 4")));
});

test("a symmetric relation reads the same in reverse, and the empty list never hits", () => {
  eq(single([2, 3], 1, " target 3"), single([2, 3], 1, " target 3 reverseRelation true"));
  eq(single([2, 3], 1, ` relation {"op":"at-least","value":2} target 3 firstMatch true`), single([2, 3], 1, ` relation {"op":"at-least","value":2} target 3 reverseRelation true firstMatch true`));
  expect(form("lookup cell \"r1c1\" target 4")).toEqual({ op: "Any", children: [] });
});

test("near misses compare as different", () => {
  const base = single([2, 3, 4], 1, " target 4");
  differs(base, single([2, 3, 5], 1, " target 4"));
  differs(base, single([4, 3, 2], 1, " target 4"));
  differs(base, single([2, 3, 4], 5, " target 4"));
  differs(base, single([2, 3, 4], 1, " target 3"));
  differs(base, single([2, 3, 4], 1, " offset 1 target 4"));
  differs(base, single([2, 3, 4], 1, " firstMatch true target 4"));
  differs(base, single([2, 3, 4], 1, ` relation {"op":"less"} target 4`));
  differs(base, single([2, 3, 4], 1, " total 0 target 4"));
  differs(base, single([2, 3, 4], 1, " target 4 increasing [\"r1c4\",\"r1c5\"]"));
  differs(base, `not ${base}`);
  differs(single([2, 3], 1, ` relation {"op":"less"} target 3`), single([2, 3], 1, ` relation {"op":"less"} reverseRelation true target 3`));
});

test("every combination left uncovered says why", () => {
  expect(reasonOf(`lookup mode "queries" queries [{"cells":["r1c2"],"index":1,"target":1,"channel":"D","relation":{"op":"difference","value":0}}]`)).toContain("explicit queries");
  expect(reasonOf(single([2, 3], 1, ' channel "V" target 4'))).toContain("effective-value channel");
  expect(reasonOf(single([2, 3], 1, ' indexChannel "V" target 4'))).toContain("effective-value channel");
  expect(reasonOf(single([2, 3], 1, ` firstMatch true reverseRelation true relation {"op":"less"} target 4`))).toContain("firstMatch and a reversed less");
  expect(reasonOf(counted([2, 3], [1, 4, 5], " target 3 total 2"))).toContain("strictly between");
});

test("the declaration is covered beside a value modifier because it reads printed digits", () => {
  const r = nf(`${single([2, 3], 1, " target 4")}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "lookup")).toMatchObject({ status: "lowered" });
});

/** The evaluator is run on every satisfying assignment and on every `sample`-th other one. */
function differential(n: number, symbols: number[], entries: string[], sample = 1): number {
  let seen = 0, stride = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "lookup").every(x => x.status === "lowered")).toBe(true);
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

diffTest("a source compared with itself", 4, [1, 2, 3], [single([2, 3, 4], 1), single([1, 3, 4], 2)], 12);
diffTest("a fixed target and a target cell", 4, [1, 2, 3], [single([2, 3, 4], 1, " target 2"), single([2, 3], 1, ` targetCell "r1c4"`)], 12);
diffTest("an offset", 4, [1, 2, 3], [single([2, 3, 4], 1, " offset 1 target 3"), single([2, 3, 4], 1, " offset -1 target 1")], 12);
diffTest("less and reversed less", 4, [1, 2, 3], [single([2, 3, 4], 1, ` relation {"op":"less"} target 2`), single([2, 3, 4], 1, ` relation {"op":"less"} reverseRelation true target 2`)], 12);
diffTest("difference, at-least and sum relations", 4, [1, 2, 3], [single([2, 3, 4], 1, ` relation {"op":"difference","value":1} target 2`), single([2, 3], 1, ` relation {"op":"at-least","value":2} target 3`), single([2, 3], 1, ` relation {"op":"sum","value":4} targetCell "r1c4"`)], 12);
diffTest("ratio, multiple and shift relations", 4, [1, 2, 3], [single([2, 3, 4], 1, ` relation {"op":"ratio","value":2} target 2`), single([2, 3], 1, ` relation {"op":"multiple"} target 2`), single([2, 3, 4], 1, ` relation {"op":"shift"} target 1`)], 12);
diffTest("firstMatch", 4, [1, 2, 3], [single([2, 3, 4], 1, " firstMatch true target 2"), single([2, 3, 4], 1, ` firstMatch true relation {"op":"less"} target 3`)], 12);
diffTest("a lookup that must miss", 4, [1, 2, 3], [single([2, 3, 4], 1, " total 0 target 2"), single([2, 3, 4], 1, " total 2 target 2")], 12, 0);
diffTest("count mode", 4, [1, 2, 3], [counted([3, 4], [1, 2], " target 2 total 2"), counted([3, 4], [1, 2], " target 2 total 0"), counted([3, 4], [1, 1, 2], " total 3")], 12);
diffTest("an increasing path", 4, [1, 2, 3], [single([2, 3], 1, ` target 2 increasing ${list([3, 4])}`), single([2, 3], 1, ` target 2 nonempty true increasing ${list([4])}`)], 12);
diffTest("a source on its own list and the empty list", 4, [1, 2, 3], [single([1, 2, 3], 1), single([1, 2], 2, " target 1"), `lookup cell "r1c1" target 2`], 12);
diffTest("a zero-based alphabet", 4, [0, 1, 2, 3], [single([2, 3, 4], 1, " target 2"), single([2, 3, 4], 1, " offset -1 target 1")], 20);
diffTest("a negation", 4, [1, 2, 3], [`not ${single([2, 3, 4], 1, " target 2")}`], 8);

import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet = [1, 2, 3, 4, 5]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const list = (cs: number[]) => `[${cs.map(i => `"r1c${i}"`).join(",")}]`;
/** A one-row sight clue from the origin cell number, rays as lists of cell numbers and any further settings. */
const sight = (origin: number, rays: number[][], output: "count" | "sum", extra = "") => `blocked-sight cell "r1c${origin}" rays [${rays.map(list).join(",")}] output "${output}"${extra}`;
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
const reasonOf = (rules: string) => { const r = nf(rules); expect(r.issues).toEqual([]); const c = r.normalForm!.coverage.find(x => x.kind === "blocked-sight")!; expect(c.status).toBe("unsupported"); return c.reason!; };

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
  nf(sight(1, [[2, 3]], "count"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(sight(1, [[2, 3]], "count"))}` });
}, 30000);

test("a count against the origin digit stops at the first listed blocker", () => {
  const f = form(sight(1, [[2, 3, 4]], "count", ` blockers ${list([3])}`));
  // Only the second cell is seen: the third blocks and is not kept.
  expect(holds(f, at(1, 5, 5, 5, 5))).toBe(true);
  expect(holds(f, at(2, 5, 5, 5, 5))).toBe(false);
  expect(holds(f, at(3, 5, 5, 5, 5))).toBe(false);
  const kept = form(sight(1, [[2, 3, 4]], "count", ` blockers ${list([3])} includeBlocker true`));
  expect(holds(kept, at(2, 5, 5, 5, 5))).toBe(true);
  expect(holds(kept, at(1, 5, 5, 5, 5))).toBe(false);
});

test("a ray whose first cell blocks selects nothing unless the blocker is kept", () => {
  const none = form(sight(1, [[2, 3]], "count", ` blockers ${list([2])} offset 1`));
  expect(holds(none, at(1, 5, 5))).toBe(true);
  expect(holds(none, at(2, 5, 5))).toBe(false);
  const kept = form(sight(1, [[2, 3]], "count", ` blockers ${list([2])} includeBlocker true`));
  expect(holds(kept, at(1, 5, 5))).toBe(true);
});

test("a sum against the origin digit, a total or target cells", () => {
  const origin = form(sight(1, [[2, 3]], "sum"));
  expect(holds(origin, at(5, 2, 3))).toBe(true);
  expect(holds(origin, at(4, 2, 3))).toBe(false);
  const total = form(sight(1, [[2, 3, 4]], "sum", ` total 6 blockers ${list([4])}`));
  expect(holds(total, at(1, 2, 4, 4))).toBe(true);
  expect(holds(total, at(1, 2, 3, 4))).toBe(false);
  const target = form(sight(1, [[2, 3]], "sum", ` targetCells ${list([4, 5])}`));
  expect(holds(target, at(1, 2, 3, 1, 4))).toBe(true);
  expect(holds(target, at(1, 2, 3, 1, 5))).toBe(false);
});

test("the offset moves the count or the sum", () => {
  const count = form(sight(1, [[2, 3]], "count", " offset -1"));
  expect(holds(count, at(1, 5, 5))).toBe(true);
  expect(holds(count, at(2, 5, 5))).toBe(false);
  const sum = form(sight(1, [[2, 3]], "sum", " offset 2"));
  expect(holds(sum, at(5, 1, 2))).toBe(true);
  expect(holds(sum, at(5, 1, 1))).toBe(false);
  expect(holds(form(sight(1, [[2, 3]], "sum", " offset 1 total 6")), at(1, 2, 3))).toBe(true);
});

test("the origin joins once, and a cell on several rays counts once", () => {
  const f = form(sight(1, [[2, 3], [3, 2]], "count", " includeOrigin true"));
  expect(holds(f, at(3, 5, 5))).toBe(true);
  expect(holds(f, at(4, 5, 5))).toBe(false);
  const sum = form(sight(1, [[2], [2, 3]], "sum", " includeOrigin true"));
  // The origin is in the sum, so the rest must add up to nothing: only an empty selection or a zero offset does.
  expect(holds(sum, at(2, 1, 1))).toBe(false);
  const withOffset = form(sight(1, [[2, 3]], "sum", " includeOrigin true offset -5"));
  expect(holds(withOffset, at(2, 2, 3))).toBe(true);
  expect(holds(withOffset, at(2, 2, 2))).toBe(false);
});

test("a sum over no cells is the offset, and an empty selection can still meet a total", () => {
  const f = form(sight(1, [[2]], "sum", ` blockers ${list([2])} offset 3`));
  expect(holds(f, at(3, 5))).toBe(true);
  expect(holds(f, at(2, 5))).toBe(false);
  expect(form(sight(1, [[2]], "sum", ` blockers ${list([2])} total 0`))).toEqual({ op: "All", children: [] });
  expect(form(sight(1, [[2]], "sum", ` blockers ${list([2])} total 1`))).toEqual({ op: "Any", children: [] });
  expect(form(sight(1, [[2]], "count", " total 1"))).toEqual({ op: "All", children: [] });
  expect(form(sight(1, [[2]], "count", " total 2"))).toEqual({ op: "Any", children: [] });
});

test("an origin on its own ray, a missing origin or an origin digit outside the alphabet can never be met", () => {
  expect(form(sight(1, [[1, 2]], "count"))).toEqual({ op: "Any", children: [] });
  expect(form(`blocked-sight rays ${`[${list([2, 3])}]`} output "count" total 2`)).toEqual({ op: "Any", children: [] });
  expect(form(sight(1, [[2, 3, 4, 5]], "count"), 5, [1, 2, 3])).toEqual({ op: "Any", children: [] });
});

test("spellings of the same sight have equal normal forms", () => {
  eq(sight(1, [[2, 3]], "count"), sight(1, [[3, 2]], "count", ` blockers ${list([5])}`).replace('["r1c3","r1c2"]', '["r1c2","r1c3"]'));
  eq(sight(1, [[2], [3]], "sum"), sight(1, [[3], [2]], "sum"));
  eq(sight(1, [[2, 3]], "count", ` blockers ${list([4])}`), sight(1, [[2, 3]], "count"));
  eq(sight(1, [[2, 3]], "count", ` blockers ${list([3])}`), sight(1, [[2]], "count", ` blockers ${list([3])} includeBlocker false`));
  eq(sight(1, [[2, 3]], "count", ` blockers ${list([2])} includeBlocker true`), sight(1, [[2]], "count"));
  eq(sight(1, [[2, 3]], "count", ' channel "D"'), sight(1, [[2, 3]], "count"));
});

test("near misses compare as different", () => {
  const base = sight(1, [[2, 3, 4]], "count", ` blockers ${list([3])}`);
  differs(base, sight(1, [[2, 3, 4]], "count", ` blockers ${list([4])}`));
  differs(base, sight(1, [[2, 3, 4]], "count", ` blockers ${list([3])} includeBlocker true`));
  differs(base, sight(1, [[2, 3, 4]], "count", ` blockers ${list([3])} includeOrigin true`));
  differs(base, sight(1, [[2, 3, 4]], "count", ` blockers ${list([3])} offset 1`));
  differs(base, sight(1, [[2, 3, 4]], "count", ` blockers ${list([3])} total 1`));
  differs(base, sight(1, [[2, 3, 4]], "sum", ` blockers ${list([3])}`));
  differs(base, sight(5, [[2, 3, 4]], "count", ` blockers ${list([3])}`));
  differs(base, `not ${base}`);
  differs(sight(1, [[2, 3]], "sum", ` targetCells ${list([4])}`), sight(1, [[2, 3]], "sum", ` targetCells ${list([5])}`));
  differs(sight(1, [[2, 3]], "sum", ` total 5`), sight(1, [[2, 3]], "sum", ` total 6`));
});

test("every combination left uncovered says why", () => {
  for (const blocking of ["different-parity", "greater", "at-least", "not-equal", "different-region"]) {
    expect(reasonOf(sight(1, [[2, 3]], "count", ` blocking "${blocking}"`))).toContain("blocking that depends on digits");
  }
  expect(reasonOf(sight(1, [[2, 3]], "count", " records true"))).toContain("record highs");
  expect(reasonOf(sight(1, [[2, 3]], "count", " occurrences true"))).toContain("occurrence counts");
  expect(reasonOf(sight(1, [[2, 3]], "sum", ' channel "V"'))).toContain("effective-value channel");
  expect(reasonOf(sight(1, [[2, 3]], "sum", ` offset 1 targetCells ${list([4])}`))).toContain("offset against the sum of target cells");
  expect(reasonOf(sight(1, [[2, 3]], "sum", ` targetCells ${list([4, 4])}`))).toContain("target cell listed twice");
  expect(reasonOf(sight(1, [[2, 3]], "sum", " total 2.5"))).toContain("safe integer");
  expect(reasonOf(sight(1, [[2, 3]], "sum", " offset 0.5"))).toContain("safe integer");
});

test("a ray cell off the active board is an error in the case", () => {
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(sight(1, [[2, 3]], "count"))}` }, { rows: 1, cols: 3, alphabet: [1, 2, 3], activeCells: [cells[0], cells[2]], regions: [[cells[0], cells[2]]] });
  expect(r.status).toBe("invalid");
});

test("the declaration is covered beside a value modifier because it reads printed digits", () => {
  const r = nf(`${sight(1, [[2, 3]], "count")}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "blocked-sight")).toMatchObject({ status: "lowered" });
});

/** The evaluator is run on every satisfying assignment and on every `sample`-th other one. */
function differential(n: number, symbols: number[], entries: string[], sample = 1): number {
  let seen = 0, stride = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "blocked-sight").every(x => x.status === "lowered")).toBe(true);
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

const blockedList = ` blockers ${list([3])}`;
const diffTest = (name: string, n: number, symbols: number[], entries: string[], sample: number, atLeast = 1) =>
  test(`the lowered formula and the public evaluator agree on ${name}`, () => { expect(differential(n, symbols, entries, sample)).toBeGreaterThanOrEqual(atLeast); });

diffTest("a count with blockers", 4, [1, 2, 3], [sight(1, [[2, 3, 4]], "count", blockedList), sight(1, [[2, 3, 4]], "count", blockedList + " includeBlocker true")], 14);
diffTest("a count with the origin and two rays", 4, [1, 2, 3], [sight(1, [[2], [3]], "count", " includeOrigin true"), sight(2, [[3, 4], [1]], "count", " offset -1")], 14);
diffTest("a count against a total or target cells", 4, [1, 2, 3], [sight(1, [[2, 3, 4]], "count", " total 2"), sight(1, [[2, 3]], "count", ` targetCells ${list([4])}`)], 14);
diffTest("a count with the origin on its ray and a negation", 4, [1, 2, 3], [sight(1, [[2, 1]], "count"), `not ${sight(1, [[2, 3, 4]], "count", blockedList)}`], 14, 0);
diffTest("a count over a zero-based alphabet", 4, [0, 1, 2, 3], [sight(1, [[2, 3]], "count", " offset -1")], 20);
diffTest("a sum against the origin", 4, [1, 2, 3], [sight(1, [[2, 3, 4]], "sum"), sight(1, [[2, 3, 4]], "sum", blockedList + " includeBlocker true")], 14);
diffTest("a sum against a total", 4, [1, 2, 3], [sight(1, [[2, 3], [3, 4]], "sum", " total 4"), sight(1, [[2]], "sum", ` blockers ${list([2])} total 0`)], 14);
diffTest("a sum against target cells", 4, [1, 2, 3], [sight(1, [[2, 3]], "sum", ` targetCells ${list([4])}`), sight(1, [[2, 3]], "sum", ` targetCells ${list([3, 4])}`)], 14);
diffTest("a sum with an offset", 4, [1, 2, 3], [sight(1, [[2, 3]], "sum", " offset 1"), sight(1, [[2, 3]], "sum", " offset -1 includeOrigin true"), sight(1, [[2]], "sum", ` blockers ${list([2])} offset 2`)], 14);
diffTest("a sum from the origin outward on both sides", 4, [1, 2, 3], [sight(3, [[2, 1], [4]], "sum", " includeOrigin true offset -3")], 14);
diffTest("a five-cell board", 5, [1, 2, 3], [sight(1, [[2, 3], [4, 5]], "sum", `${blockedList} offset -2`)], 30);

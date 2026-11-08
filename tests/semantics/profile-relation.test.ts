import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const four = [1, 2, 3, 4];
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
const [a, b, c, d] = cells;
const boardOf = (alphabet: number[], n = 4): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, alphabet = four, n = 4) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(alphabet, n));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const profile = (left: Cell[], right: Cell[], extra = "") => `profile-relation left ${JSON.stringify(left)} right ${JSON.stringify(right)}${extra}`;

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
function form(rules: string, alphabet = four, n = 4) { const r = nf(rules, alphabet, n); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
function reason(rules: string): string {
  const r = nf(rules);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  const found = r.normalForm!.coverage.filter(x => x.status === "unsupported");
  expect(found).toHaveLength(1);
  return (found[0] as { reason: string }).reason;
}
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(profile([a], [b]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2]]}\n---${body(profile([a], [b]))}` });
}, 30000);

test("multisets: each digit occurs as often on both sides", () => {
  const f = form(profile([a, b], [c, d]));
  expect(holds(f, at(2, 3, 3, 2))).toBe(true);
  expect(holds(f, at(2, 2, 2, 2))).toBe(true);
  expect(holds(f, at(2, 3, 2, 2))).toBe(false);
  expect(holds(f, at(2, 3, 2, 4))).toBe(false);
});

test("sets: each digit is present on both sides or on neither", () => {
  const f = form(profile([a, b], [c, d], " multiset false"));
  expect(holds(f, at(2, 3, 3, 2))).toBe(true);
  expect(holds(f, at(2, 2, 2, 2))).toBe(true);
  expect(holds(f, at(2, 3, 2, 2))).toBe(false);
  const wider = form(profile([a, b, c], [d], " multiset false"));
  expect(holds(wider, at(2, 2, 2, 2))).toBe(true);
  expect(holds(wider, at(2, 3, 2, 2))).toBe(false);
});

test("a cell listed twice counts twice in a multiset and once in a set", () => {
  const multiset = form(profile([a, a], [b, c]));
  expect(holds(multiset, at(2, 2, 2))).toBe(true);
  expect(holds(multiset, at(2, 2, 3))).toBe(false);
  const set = form(profile([a, a], [b, c], " multiset false"));
  expect(holds(set, at(2, 2, 2))).toBe(true);
  expect(holds(set, at(2, 2, 3))).toBe(false);
  // Lists of different lengths can match as sets but not as multisets.
  const unequal = form(profile([a, b], [c], " multiset false"));
  expect(holds(unequal, at(2, 2, 2))).toBe(true);
  expect(form(profile([a, b], [c]))).toEqual({ op: "Any", children: [] });
  eq(profile([a, a, b], [c, d, d]), profile([b, a, a], [d, c, d]));
});

test("maximum shared: two groups share at most that many distinct digits", () => {
  const none = form(profile([a, b], [c, d], " maximumShared 0"));
  expect(holds(none, at(1, 2, 3, 4))).toBe(true);
  expect(holds(none, at(1, 2, 3, 2))).toBe(false);
  const one = form(profile([a, b], [c, d], " maximumShared 1"));
  expect(holds(one, at(1, 2, 3, 2))).toBe(true);
  expect(holds(one, at(1, 2, 2, 1))).toBe(false);
  // Repeated occurrences count once, and the multiset flag plays no part.
  expect(holds(one, at(2, 2, 2, 2))).toBe(true);
  eq(profile([a, b], [c, d], " maximumShared 1 multiset false"), profile([a, b], [c, d], " maximumShared 1"));
  eq(profile([a, a, b], [c, d, d], " maximumShared 1"), profile([a, b], [c, d], " maximumShared 1"));
});

test("maximum shared over supplied groups compares every pair and ignores left and right", () => {
  const f = form(profile([a], [a], ` maximumShared 0 groups ${JSON.stringify([[a], [b], [c]])}`));
  expect(holds(f, at(1, 2, 3))).toBe(true);
  expect(holds(f, at(1, 2, 1))).toBe(false);
  expect(holds(f, at(1, 1, 2))).toBe(false);
  eq(profile([a], [a], ` maximumShared 0 groups ${JSON.stringify([[a], [b]])}`), profile([a], [b], " maximumShared 0"));
  eq(profile([a], [d], ` maximumShared 0 groups ${JSON.stringify([[a], [b], [c]])}`), profile([c], [a], ` maximumShared 0 groups ${JSON.stringify([[c], [b], [a]])}`));
});

test("a bound at or above the alphabet size is always met", () => {
  expect(form(profile([a], [b], " maximumShared 4"))).toEqual({ op: "All", children: [] });
  expect(form(profile([a], [b], " maximumShared 9"))).toEqual({ op: "All", children: [] });
});

test("near misses compare as different", () => {
  differs(profile([a, b], [c, d]), profile([a, b], [c, a]));
  differs(profile([a, b], [c, d]), profile([a, b], [c, d], " multiset false"));
  differs(profile([a, b], [c, d]), profile([a, a], [c, d]));
  differs(profile([a, b], [c, d], " maximumShared 0"), profile([a, b], [c, d], " maximumShared 1"));
  differs(profile([a, b], [c, d], " maximumShared 1"), profile([a, b], [c, d]));
  differs(profile([a, b], [c], " maximumShared 1"), profile([a, b], [d], " maximumShared 1"));
  differs(profile([a, b], [c, d]), `not ${profile([a, b], [c, d])}`);
  differs(profile([a], [b], ` maximumShared 0 groups ${JSON.stringify([[a], [b], [c]])}`), profile([a], [b], " maximumShared 0"));
});

test("combinations left uncovered keep a typed reason", () => {
  expect(reason(profile([a, b], [c, d], ' channel "V"'))).toContain("V channel");
});

test("a profile beyond the expansion bound stays uncovered", () => {
  const many = Array.from({ length: 200 }, (_, i) => `r1c${i + 1}` as Cell);
  const board: BoardContext = { rows: 1, cols: 200, activeCells: many, alphabet: Array.from({ length: 64 }, (_, i) => i + 1) };
  const run = (rules: string) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
  const r = run(profile(many.slice(0, 100), many.slice(100)));
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage[0]).toMatchObject({ kind: "profile-relation", status: "unsupported", reason: expect.stringContaining("1,000,000") });
  const shared = run(profile(many.slice(0, 100), many.slice(100), " maximumShared 4"));
  expect(shared.normalForm!.coverage[0]).toMatchObject({ kind: "profile-relation", status: "unsupported", reason: expect.stringContaining("1,000,000") });
});

function differential(n: number, symbols: number[], entries: string[]): number {
  let seen = 0;
  const used = cells.slice(0, n);
  const board = boardOf(symbols, n);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect([text, r.normalForm!.coverage.filter(x => x.kind !== "sudoku" && x.status !== "lowered")]).toEqual([text, []]);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    // The evaluator runs the lowered formula itself when a rule has one, so it is switched off to compare with the published definition.
    const rule = { ...compiled.value!.rules[0], finite: undefined };
    let satisfied = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const expected = evaluate(rule, { digits: values }).status === "holds";
        // The rule reads printed digits, so effective values that differ from them change nothing.
        expect(evaluate(rule, { digits: values, values: Object.fromEntries(Object.entries(values).map(([k, x]) => [k, 2 * x])) }).status === "holds").toBe(expected);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        if (expected) satisfied++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    seen += satisfied;
  }
  return seen;
}

test("the lowered formula and the public evaluator agree on multisets and sets", () => {
  expect(differential(4, [1, 2, 3], [
    profile([a, b], [c, d]), profile([a, b], [c, d], " multiset false"), profile([a, a], [b, c]), profile([a, a], [b, c], " multiset false"),
    profile([a, b, c], [d], " multiset false"), profile([a, b], [c]), profile([a], [b, b, c]), `not ${profile([a, b], [c, d])}`,
  ])).toBeGreaterThan(0);
  expect(differential(4, [0, 2, 5, 9], [profile([a, b], [c, d]), profile([a, d], [b, c], " multiset false")])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on shared digits", () => {
  expect(differential(4, [1, 2, 3], [
    profile([a, b], [c, d], " maximumShared 0"), profile([a, b], [c, d], " maximumShared 1"), profile([a, b], [c, d], " maximumShared 2"), profile([a, b, a], [c, d, d], " maximumShared 1"),
    profile([a], [b], ` maximumShared 1 groups ${JSON.stringify([[a, b], [c], [c, d]])}`), profile([a], [b], ` maximumShared 0 groups ${JSON.stringify([[a], [b], [c]])}`),
    profile([a], [b], ` maximumShared 5 groups ${JSON.stringify([[a], [b]])}`), `not ${profile([a, b], [c, d], " maximumShared 1")}`,
  ])).toBeGreaterThan(0);
});

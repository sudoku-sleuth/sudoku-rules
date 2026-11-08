import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: counting the origin as related to itself whether or not it is (`hasSelf ? 1 : 0`) fails the self-count differentials;
// swapping the holder and non-holder digit sets in class-count.ts fails the holder-choice differentials.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3"];
const [a, b, c, d, e, f] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const three = [1, 2, 3];
const context = (alphabet = three, active = cells): BoardContext => ({ rows: 2, cols: 3, activeCells: active, alphabet, regions: [active] });
const nf = (rules: string, alphabet = three, active = cells) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, context(alphabet, active));
const list = (xs: Cell[]) => `[${xs.map(x => `"${x}"`).join(",")}]`;
const rel = (op: string, value?: number) => value === undefined ? `{"op":"${op}"}` : `{"op":"${op}","value":${value}}`;
const count = (origin: Cell, scope: Cell[], relations: string[], extra = "") => `neighbour-count cell "${origin}" scope ${list(scope)} relations [${relations.join(",")}]${extra}`;
const eq = (x: string, y: string, alphabet = three) => expect(compare(nf(x, alphabet), nf(y, alphabet)).status).toBe("equivalent");
const differs = (x: string, y: string, alphabet = three) => { const r = compare(nf(x, alphabet), nf(y, alphabet)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const coverageOf = (rules: string) => nf(rules).normalForm!.coverage.find(x => x.kind === "neighbour-count");

function holds(g: Formula, v: Record<string, number>): boolean {
  switch (g.op) {
    case "All": return g.children.every(x => holds(x, v));
    case "Any": return g.children.some(x => holds(x, v));
    case "Not": return !holds(g.child, v);
    case "Pair": return g.table.some(([x, y]) => x === v[g.cells[0]] && y === v[g.cells[1]]);
    case "Allowed": return g.values.includes(v[g.cell]);
    case "Distinct": return new Set(g.cells.map(q => v[q])).size === g.cells.length;
    case "CountAtLeast": return g.cells.filter(q => v[q] === g.digit).length >= g.count;
    case "SumEqual": return g.left.reduce((n, q) => n + BigInt(v[q]), 0n) === g.right.reduce((n, q) => n + BigInt(v[q]), 0n);
    case "SumTotal": return g.cells.reduce((n, q) => n + BigInt(v[q]), 0n) === BigInt(g.total);
  }
}
function form(rules: string, alphabet = three) { const r = nf(rules, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));
const yes: Formula = { op: "All", children: [] }, no: Formula = { op: "Any", children: [] };

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(count(e, [b, d, f], [rel("difference", 1)], " total 1"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3, r2c1, r2c2, r2c3]]}\n---${body(count(e, [b, d, f], [rel("difference", 1)], " total 1"))}` });
}, 30000);

test("the origin digit counts the neighbours that relate to it", () => {
  // r2c2 touches r1c2, r2c1 and r2c3. A digit counts the neighbours at difference 1.
  const g = form(count(e, [b, d, f], [rel("difference", 1)]));
  expect(holds(g, at(0, 1, 0, 3, 2, 1))).toBe(false);
  // The origin 1 has one neighbour at difference 1 (the 2).
  expect(holds(g, at(0, 2, 0, 3, 1, 3))).toBe(true);
  expect(holds(g, at(0, 2, 0, 2, 1, 3))).toBe(false);
  // The origin 2 needs two neighbours at difference 1.
  expect(holds(g, at(0, 1, 0, 3, 2, 2))).toBe(true);
  expect(holds(g, at(0, 1, 0, 2, 2, 2))).toBe(false);
  // The origin 3 needs three, and 3 is at difference 1 from 2 only.
  expect(holds(g, at(0, 2, 0, 2, 3, 2))).toBe(true);
  expect(holds(g, at(0, 2, 0, 2, 3, 1))).toBe(false);
});

test("a fixed total replaces the origin digit", () => {
  const g = form(count(e, [b, d, f], [rel("difference", 1)], " total 1"));
  expect(holds(g, at(0, 1, 0, 3, 2, 3))).toBe(false);
  expect(holds(g, at(0, 3, 0, 1, 2, 3))).toBe(false);
  expect(holds(g, at(0, 2, 0, 3, 1, 3))).toBe(true);
  expect(holds(g, at(0, 2, 0, 2, 1, 3))).toBe(false);
  expect(form(count(e, [b, d, f], [rel("difference", 1)], " total 0"))).not.toEqual(no);
  expect(form(count(e, [b, d, f], [rel("difference", 1)], " total 4"))).toEqual(no);
});

test("several relations are alternatives and a neighbour counts once", () => {
  const g = form(count(e, [b, d], [rel("difference", 1), rel("at-least", 1)], " total 2"));
  // Both relations hold for each unequal neighbour, but each neighbour counts once.
  expect(holds(g, at(0, 1, 0, 3, 2, 0))).toBe(true);
  expect(holds(g, at(0, 2, 0, 2, 2, 0))).toBe(false);
  expect(holds(g, at(0, 1, 0, 2, 3, 0))).toBe(true);
  eq(count(e, [b, d], [rel("difference", 1), rel("difference", 1), rel("less")], " total 1"), count(e, [b, d], [rel("less"), rel("difference", 1)], " total 1"));
});

test("relations run from the origin to the neighbour", () => {
  const g = form(count(e, [b, d], [rel("less")], " total 1"));
  // The origin 2 is below the 3 only.
  expect(holds(g, at(0, 3, 0, 1, 2, 0))).toBe(true);
  expect(holds(g, at(0, 1, 0, 1, 2, 0))).toBe(false);
  expect(holds(g, at(0, 3, 0, 3, 2, 0))).toBe(false);
});

test("exhaustive also needs every neighbour to match", () => {
  const g = form(count(e, [b, d], [rel("difference", 1)], " exhaustive true"));
  expect(holds(g, at(0, 1, 0, 3, 2, 0))).toBe(true);
  expect(holds(g, at(0, 1, 0, 2, 2, 0))).toBe(false);
  expect(holds(g, at(0, 2, 0, 3, 1, 0))).toBe(false);
  const total = form(count(e, [b, d], [rel("difference", 1)], " exhaustive true total 2"));
  expect(holds(total, at(0, 1, 0, 3, 2, 0))).toBe(true);
  expect(form(count(e, [b, d], [rel("difference", 1)], " exhaustive true total 1"))).toEqual(no);
});

test("the origin is a neighbour only when asked and in scope", () => {
  eq(count(e, [b, d, e], [rel("difference", 1)]), count(e, [b, d], [rel("difference", 1)]));
  eq(count(e, [b, d], [rel("difference", 1)], " includeSelf true"), count(e, [b, d], [rel("difference", 1)]));
  differs(count(e, [b, d, e], [rel("at-least", 0)], " total 3 includeSelf true"), count(e, [b, d, e], [rel("at-least", 0)], " total 3"));
  // With the origin counted, difference 0 relates it to itself.
  const g = form(count(e, [b, e], [rel("difference", 0)], " total 2 includeSelf true"));
  expect(holds(g, at(0, 1, 0, 0, 1, 0))).toBe(true);
  expect(holds(g, at(0, 2, 0, 0, 1, 0))).toBe(false);
});

test("moves select the neighbours", () => {
  const king = form(count(e, cells, [rel("difference", 0)], ' move "king" total 2'), [1, 2]);
  expect(holds(king, at(1, 2, 2, 2, 1, 2))).toBe(false);
  expect(holds(king, at(1, 1, 2, 2, 1, 2))).toBe(true);
  differs(count(e, cells, [rel("difference", 0)], ' move "king" total 2'), count(e, cells, [rel("difference", 0)], " total 2"), [1, 2]);
  eq(count(e, cells, [rel("difference", 0)], ' move "orthogonal" total 2'), count(e, cells, [rel("difference", 0)], " total 2"), [1, 2]);
  differs(count(a, cells, [rel("difference", 0)], ' move "knight" total 1'), count(a, cells, [rel("difference", 0)], ' move "diagonal" total 1'), [1, 2]);
});

test("order, repeats and the full-URL spelling do not matter", () => {
  eq(count(e, [b, d, f], [rel("difference", 1)]), count(e, [f, d, b, b], [rel("difference", 1)]));
  eq(count(e, [b, d, f], [rel("difference", 1)]), `https://rules.sudoku-sleuth.com/neighbour-count.md cell "r2c2" scope ["r1c2","r2c1","r2c3"] relations [${rel("difference", 1)}] move "orthogonal" includeSelf false exhaustive false channel "D"`);
});

test("near misses compare as different", () => {
  const base = count(e, [b, d, f], [rel("difference", 1)]);
  differs(base, count(e, [b, d, f], [rel("difference", 2)]));
  differs(base, count(e, [b, d], [rel("difference", 1)]));
  differs(base, count(b, [a, c, e], [rel("difference", 1)]));
  differs(base, count(e, [b, d, f], [rel("difference", 1)], " total 1"));
  differs(base, count(e, [b, d, f], [rel("difference", 1)], " exhaustive true"));
  differs(base, count(e, [b, d, f], [rel("difference", 1), rel("sum", 4)]));
  differs(base, `not ${base}`);
  differs(count(e, [b, d], [rel("less")], " total 1"), count(e, [b, d], [rel("less")], " total 2"));
});

test("what Neighbour Count does not lower stays uncovered with a reason", () => {
  expect(coverageOf(count(e, [b, d, f], [rel("difference", 1)], ' channel "V"'))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("effective values") });
  expect(coverageOf(count(e, [b, d, f], [rel("difference", 1)]))).toMatchObject({ status: "lowered" });
});

test("it reads printed digits, so a value modifier leaves it covered", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const n = nf(`${count(e, [b, d, f], [rel("difference", 1)])}\n${modifier}`);
  expect(n.normalForm!.coverage.find(x => x.kind === "neighbour-count")).toMatchObject({ status: "lowered" });
});

function differential(symbols: number[], entries: string[], used: Cell[] = cells): void {
  const board = context(symbols, used);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "neighbour-count").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 3, symbols: [${symbols}], activeCells: [${used.join(", ")}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        const expected = published(rule, values);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        // A rule that reads printed digits ignores the effective values, even when one of them is changed.
        const changed = { ...values, [e]: symbols[(symbols.indexOf(values[e]) + 1) % symbols.length] };
        expect([text, JSON.stringify(values), published(rule, values, changed)]).toEqual([text, JSON.stringify(values), expected]);
        total++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    expect(total).toBeGreaterThan(0);
  }
}
function differentialTests(title: string, symbols: number[], entries: string[], used: Cell[] = cells): void {
  for (const entry of entries) test(`${title}: ${entry}`, () => differential(symbols, [entry], used));
}

differentialTests("origin digit counts agree with the published definition", [1, 2], [count(e, [b, d, f], [rel("difference", 1)]), count(b, [a, c, e], [rel("sum", 3), rel("less")]), count(e, [b, d, f], [rel("difference", 1)], " total 0")]);
differentialTests("three digits agree with the published definition", [1, 2, 3], [count(b, [a, c], [rel("difference", 1)])]);
differentialTests("fixed totals agree with the published definition", [1, 2], [count(e, [b, d, f], [rel("difference", 1)], " total 2"), count(e, cells, [rel("difference", 0)], ' move "king" total 3'), count(a, cells, [rel("less")], ' move "knight" total 1')]);
differentialTests("exhaustive and self counts agree with the published definition", [1, 2], [
  count(e, [b, d, f], [rel("difference", 1)], " exhaustive true"), count(e, [b, d, f], [rel("difference", 1)], " exhaustive true total 3"),
  count(e, [b, d, e], [rel("difference", 0)], " includeSelf true total 3"), count(e, [b, d, e], [rel("difference", 0)], " includeSelf true exhaustive true total 3"),
  count(e, [b, d, e], [rel("difference", 1)], " includeSelf true total 1"), `not ${count(e, [b, d, f], [rel("difference", 1)], " total 1")}`,
]);
differentialTests("other alphabets agree with the published definition", [0, 2], [count(e, [b, d], [rel("difference", 2)]), count(b, [a, c, e], [rel("ratio", 2)], " total 1")]);

// Four digits over four active cells: classes of two or more members with a count strictly between zero and the number of
// neighbours reach the holder-choice branch of the class count.
const four = [b, d, e, f];
differentialTests("holder choices agree with the published definition", [1, 2, 3, 4], [
  count(e, [b, d, f], [rel("at-least", 2)]), count(e, [b, d, f], [rel("at-least", 2)], " total 1"), count(e, [b, d, f], [rel("difference", 1), rel("sum", 6)], " total 1"),
  count(e, [b, d, f], [rel("at-least", 2)], " total 2"), count(e, [b, d, f], [rel("less")], " total 1"),
], four);
differentialTests("negated counts agree with the published definition", [1, 2, 3], [
  `not ${count(e, [b, d], [rel("difference", 1)])}`, `not ${count(e, [b, d], [rel("less")], " total 1")}`, `not ${count(e, [b, d], [rel("difference", 1)], " exhaustive true")}`,
  `not ${count(e, [b, d, e], [rel("difference", 0)], " includeSelf true total 2")}`,
], [b, d, e]);

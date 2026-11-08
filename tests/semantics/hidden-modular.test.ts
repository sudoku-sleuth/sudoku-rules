import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: letting a first-x span run one cell too far (`span(0, x)` in place of `span(0, x - 1)`) fails the first-x tests.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const four = [1, 2, 3, 4];
const boardOf = (n: number, alphabet = four): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet = four) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const hidden = (listed: Cell[], extent: string) => `hidden-modular ${listed.join("-")} extent "${extent}"`;
const eq = (x: string, y: string, n = 6, alphabet = four) => expect(compare(nf(x, n, alphabet), nf(y, n, alphabet)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 6, alphabet = four) => { const r = compare(nf(x, n, alphabet), nf(y, n, alphabet)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };

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
function form(rules: string, n = 6, alphabet = four) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));
const [a, b, c, d] = cells;

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(hidden([a, b, c], "first-x"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4], regions: [[r1c1, r1c2, r1c3]]}\n---${body(hidden([a, b, c], "first-x"))}` });
}, 30000);

test("first-x: the first digit says how many cells to check", () => {
  const f = form(hidden([a, b, c, d], "first-x"), 4);
  // 3 selects three cells, which need three remainders.
  expect(holds(f, at(3, 1, 2, 4))).toBe(true);
  expect(holds(f, at(3, 1, 4, 2))).toBe(false);
  // 1 and 2 select spans too short for a triple.
  expect(holds(f, at(1, 1, 1, 1))).toBe(true);
  expect(holds(f, at(2, 3, 3, 3))).toBe(true);
  // 4 checks both triples.
  expect(holds(f, at(4, 1, 2, 3))).toBe(false);
  expect(holds(f, at(4, 1, 2, 4))).toBe(false);
  expect(holds(f, at(4, 2, 3, 1))).toBe(true);
});

test("first-x: a first digit that is not a position selects no span", () => {
  expect(form(hidden([a, b], "first-x"), 2, [3, 4])).toEqual({ op: "Any", children: [] });
  expect(holds(form(hidden([a, b], "first-x"), 2, [0, 1, 3]), at(1, 3))).toBe(true);
  expect(holds(form(hidden([a, b], "first-x"), 2, [0, 1, 3]), at(0, 3))).toBe(false);
});

test("to-max: the span runs from the first cell to the first largest digit", () => {
  const f = form(hidden([a, b, c, d], "to-max"), 4);
  // The first 4 is at the third cell; the triple 1,2,4 has remainders 1,2,1.
  expect(holds(f, at(1, 2, 4, 1))).toBe(false);
  // The first 4 is at the third cell; cells 2,3,4 form the triple 2,3,4.
  expect(holds(f, at(2, 3, 4, 3))).toBe(true);
  expect(holds(f, at(4, 1, 1, 1))).toBe(true);
  expect(holds(f, at(1, 4, 1, 1))).toBe(true);
  // With no largest digit there is no span.
  expect(holds(f, at(1, 2, 3, 3))).toBe(false);
  // Later copies of the largest digit do not move the end.
  expect(holds(f, at(2, 3, 4, 4))).toBe(true);
  expect(holds(f, at(1, 1, 1, 4))).toBe(false);
});

test("between-ends: the span lies between the first smallest and the first largest digit", () => {
  const f = form(hidden([a, b, c, d], "between-ends"), 4);
  // 1 to 4 spans every cell: 1,2,3 and 2,3,4 each have three remainders.
  expect(holds(f, at(1, 2, 3, 4))).toBe(true);
  expect(holds(f, at(1, 3, 2, 4))).toBe(true);
  // 1 to 4 ends at the third cell with the triple 1,2,4 repeating a remainder.
  expect(holds(f, at(1, 2, 4, 4))).toBe(false);
  // Two cells make no triple, whichever end comes first.
  expect(holds(f, at(3, 1, 4, 2))).toBe(true);
  expect(holds(f, at(4, 1, 1, 3))).toBe(true);
  // 4 first, 1 last: the triple 4,2,1 repeats a remainder.
  expect(holds(f, at(4, 2, 1, 3))).toBe(false);
  expect(holds(f, at(3, 4, 2, 1))).toBe(false);
  // A missing end selects no span.
  expect(holds(f, at(2, 2, 3, 4))).toBe(false);
  expect(holds(f, at(1, 2, 3, 3))).toBe(false);
});

test("a one-symbol alphabet has one end", () => {
  const f = form(hidden([a, b, c], "between-ends"), 3, [2]);
  expect(holds(f, at(2, 2, 2))).toBe(true);
  // The only symbol is also the largest, so the span ends at the first cell.
  expect(holds(form(hidden([a, b, c], "to-max"), 3, [2]), at(2, 2, 2))).toBe(true);
});

test("a cell listed twice is read at each place", () => {
  const f = form(hidden([a, b, a], "first-x"), 2, [1, 2, 3]);
  expect(holds(f, at(3, 1))).toBe(false);
  expect(holds(f, at(1, 1))).toBe(true);
  expect(holds(f, at(2, 3))).toBe(true);
});

test("the spelling does not change the normal form", () => {
  eq(hidden([a, b, c], "first-x"), `https://rules.sudoku-sleuth.com/hidden-modular.md ${a}-${b}-${c} extent "first-x"`);
  eq(`hidden-modular cells ["r1c1","r1c2","r1c3"] extent "to-max"`, hidden([a, b, c], "to-max"));
});

test("near misses compare as different", () => {
  differs(hidden([a, b, c], "first-x"), hidden([a, b, c], "to-max"));
  differs(hidden([a, b, c], "to-max"), hidden([a, b, c], "between-ends"));
  differs(hidden([a, b, c, d], "to-max"), hidden([a, b, c], "to-max"));
  differs(hidden([a, b, c], "to-max"), hidden([c, b, a], "to-max"));
  differs(hidden([a, b, c], "first-x"), `not ${hidden([a, b, c], "first-x")}`);
  differs(hidden([a, b, c, d], "first-x"), hidden([a, b, c, d], "to-max"));
  differs(hidden([a, b, c, d], "first-x"), `modular ${a}-${b}-${c}-${d} modulus 3 loop false`);
});

test("it reads printed digits, so a value modifier leaves it covered", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["r1c6"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const n = nf(`${hidden([a, b, c], "first-x")}\n${modifier}`);
  expect(n.normalForm!.coverage.find(x => x.kind === "hidden-modular")).toMatchObject({ status: "lowered" });
});

test("an expansion beyond the bound stays uncovered with a reason", () => {
  const symbols = Array.from({ length: 64 }, (_, i) => i + 1);
  const grid: Cell[] = Array.from({ length: 64 }, (_, i) => `r${Math.floor(i / 8) + 1}c${i % 8 + 1}` as Cell);
  const big: BoardContext = { rows: 8, cols: 8, activeCells: grid, alphabet: symbols };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(hidden(grid, "to-max"))}` }, big);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage[0]).toMatchObject({ status: "unsupported", reason: expect.stringContaining("exceeds 1,000,000") });
});

function differential(n: number, symbols: number[], entries: string[]): void {
  const used = cells.slice(0, n);
  const board: BoardContext = { rows: 1, cols: n, activeCells: used, alphabet: symbols, regions: [used] };
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "hidden-modular").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        const expected = published(rule, values);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        // A rule that reads printed digits ignores the effective values, even when one of them is changed.
        const changed = { ...values, [used[0]]: symbols[(symbols.indexOf(values[used[0]]) + 1) % symbols.length] };
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
function differentialTests(title: string, n: number, symbols: number[], entries: string[]): void {
  for (const entry of entries) test(`${title}: ${entry}`, () => differential(n, symbols, [entry]));
}

differentialTests("first-x agrees with the published definition", 3, [1, 2, 3], [hidden([a, b, c], "first-x"), hidden([a, b, a], "first-x")]);
differentialTests("to-max agrees with the published definition", 3, [1, 2, 3], [hidden([a, b, c], "to-max"), hidden([a, b, a], "to-max")]);
differentialTests("between-ends agrees with the published definition", 3, [1, 2, 3], [hidden([a, b, c], "between-ends"), hidden([a, b, a], "between-ends")]);
differentialTests("four cells agree with the published definition", 4, [1, 2], [hidden([a, b, c, d], "first-x"), hidden([a, b, c, d], "to-max"), hidden([a, b, c, d], "between-ends"), hidden([a, b, a, d], "between-ends")]);
differentialTests("other alphabets agree with the published definition", 3, [-1, 0, 5], [hidden([a, b, c], "to-max"), hidden([a, b, c], "between-ends"), hidden([a, b, c], "first-x")]);
differentialTests("a one-symbol alphabet agrees with the published definition", 3, [3], [hidden([a, b, c], "to-max"), hidden([a, b, c], "between-ends"), hidden([a, b, c], "first-x")]);

// Four digits over four cells reach x = 3 and x = 4, so spans of two triples are compared with the page (256 combinations).
// The published formula is slow to read, so this one has its own time limit.
test("first-x over four digits and four cells agrees with the published definition", () => {
  differential(4, [1, 2, 3, 4], [hidden([a, b, c, d], "first-x")]);
}, 30000);

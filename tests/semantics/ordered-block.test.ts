import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: dropping the last starting position (`cells.length - digits.length` without the +1) fails the block tests and differentials.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const [a, b, c, d] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet = [1, 2, 3]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet = [1, 2, 3]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const block = (listed: Cell[], digits: number[]) => `ordered-block ${listed.join("-")} digits [${digits}]`;
const eq = (x: string, y: string, n = 6) => expect(compare(nf(x, n), nf(y, n)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 6) => { const r = compare(nf(x, n), nf(y, n)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const no: Formula = { op: "Any", children: [] };

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
function form(rules: string, n = 6, alphabet = [1, 2, 3]) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(block([a, b, c], [2, 3]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(block([a, b, c], [2, 3]))}` });
}, 30000);

test("the digits appear as a consecutive block in that order", () => {
  const f = form(block([a, b, c, d], [2, 3]), 4);
  expect(holds(f, at(1, 2, 3, 1))).toBe(true);
  expect(holds(f, at(2, 3, 1, 1))).toBe(true);
  expect(holds(f, at(1, 1, 2, 3))).toBe(true);
  expect(holds(f, at(1, 3, 2, 1))).toBe(false);
  expect(holds(f, at(2, 1, 3, 1))).toBe(false);
  expect(holds(f, at(2, 2, 2, 2))).toBe(false);
});

test("a block can repeat a digit and several blocks can fit", () => {
  const f = form(block([a, b, c, d], [1, 1]), 4);
  expect(holds(f, at(2, 1, 1, 3))).toBe(true);
  expect(holds(f, at(1, 2, 1, 3))).toBe(false);
  expect(holds(f, at(1, 1, 1, 1))).toBe(true);
});

test("more digits than cells cannot hold, and a block as long as the list is one start", () => {
  expect(form(block([a, b], [1, 2, 3]), 2)).toEqual(no);
  const f = form(block([a, b], [1, 2]), 2);
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(2, 1))).toBe(false);
});

test("a digit outside the alphabet cannot appear", () => {
  expect(form(block([a, b, c], [2, 9]), 3)).toEqual(no);
  expect(form(block([a, b, c], [9]), 3)).toEqual(no);
});

test("a cell listed twice is read at each place", () => {
  const f = form(block([a, b, a], [1, 2, 1]), 2);
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(2, 1))).toBe(false);
  // The same cell cannot be asked for two digits.
  expect(form(block([a, b, a], [1, 2, 3]), 2)).toEqual(no);
  const g = form(block([a, b, a, c], [1, 2]), 3);
  expect(holds(g, at(1, 2, 3))).toBe(true);
  // b=1 then a=2 is the second start; a=3 would break the first and third.
  expect(holds(g, at(2, 1, 3))).toBe(true);
  expect(holds(g, at(3, 1, 2))).toBe(false);
});

test("the spelling does not change the normal form", () => {
  eq(block([a, b, c], [2, 3]), `https://rules.sudoku-sleuth.com/ordered-block.md ${a}-${b}-${c} digits [2,3]`);
  eq(block([a, b, c], [2, 3]), `ordered-block cells ["r1c1","r1c2","r1c3"] digits [2,3]`);
});

test("near misses compare as different", () => {
  differs(block([a, b, c], [2, 3]), block([a, b, c], [3, 2]));
  differs(block([a, b, c], [2, 3]), block([a, b, c], [2]));
  differs(block([a, b, c], [2, 3]), block([a, b, c, d], [2, 3]));
  differs(block([a, b, c], [2, 3]), block([c, b, a], [2, 3]));
  differs(block([a, b, c], [2, 3]), `not ${block([a, b, c], [2, 3])}`);
  differs(block([a, b, c], [2, 3]), `${block([a, b, c], [2, 3])}\n${block([a, b], [1])}`);
  differs(block([a, b, c], [2, 3]), `quadruple ${a}-${b}-${c} digits [2,3]`);
});

test("it reads printed digits, so a value modifier leaves it covered", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["r1c6"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const n = nf(`${block([a, b, c], [2, 3])}\n${modifier}`);
  expect(n.normalForm!.coverage.find(x => x.kind === "ordered-block")).toMatchObject({ status: "lowered" });
});

test("a block that is too large stays uncovered with a reason", () => {
  const grid: Cell[] = Array.from({ length: 1000 }, (_, i) => `r${Math.floor(i / 25) + 1}c${i % 25 + 1}` as Cell);
  const big: BoardContext = { rows: 40, cols: 25, activeCells: grid, alphabet: [1, 2] };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(block(grid, Array.from({ length: 500 }, () => 1)))}` }, big);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage[0]).toMatchObject({ status: "unsupported", reason: expect.stringContaining("200,000") });
});

function differential(n: number, symbols: number[], entries: string[]): void {
  const used = cells.slice(0, n);
  const board: BoardContext = { rows: 1, cols: n, activeCells: used, alphabet: symbols, regions: [used] };
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "ordered-block").every(x => x.status === "lowered")).toBe(true);
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

differentialTests("blocks agree with the published definition", 4, [1, 2, 3], [block([a, b, c, d], [2, 3]), block([a, b, c, d], [1, 1]), block([a, b, c, d], [1, 2, 3]), block([a, b, c, d], [3]), block([a, b, c, d], [2, 2, 2, 2])]);
differentialTests("cells listed twice agree with the published definition", 3, [1, 2, 3], [block([a, b, a], [1, 2, 1]), block([a, b, a, c], [1, 2]), block([a, b, a], [1, 2, 3])]);
differentialTests("outside digits and longer blocks agree with the published definition", 3, [1, 2], [block([a, b, c], [2, 9]), block([a, b, c], [1, 2, 1, 2])]);
differentialTests("other alphabets agree with the published definition", 3, [-1, 0, 7], [block([a, b, c], [0, 7]), block([a, b, c], [-1])]);

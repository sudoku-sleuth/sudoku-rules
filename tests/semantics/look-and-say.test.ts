import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: dropping the "not one more" term of the exact count (`count < 0` in counts.ts) fails the count tests and differentials.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const boardOf = (n: number, alphabet = nine): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet = nine) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const say = (n: number, ...counts: [number, number][]) => `look-and-say ${cells.slice(0, n).join("-")} counts [${counts.map(([digit, count]) => `{"digit":${digit},"count":${count}}`).join(",")}]`;
const eq = (x: string, y: string, n = 6) => expect(compare(nf(x, n), nf(y, n)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 6) => { const r = compare(nf(x, n), nf(y, n)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };

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
const yes: Formula = { op: "All", children: [] }, no: Formula = { op: "Any", children: [] };

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(say(3, [1, 1]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r1c2, r1c3]]}\n---${body(say(3, [1, 1]))}` });
}, 30000);

test("a digit appears exactly the stated number of times", () => {
  const f = form(say(4, [4, 1], [2, 3]), 4);
  expect(holds(f, at(4, 2, 2, 2))).toBe(true);
  expect(holds(f, at(2, 4, 2, 2))).toBe(true);
  expect(holds(f, at(4, 2, 2, 3))).toBe(false);
  expect(holds(f, at(4, 4, 2, 2))).toBe(false);
  expect(holds(f, at(2, 2, 2, 2))).toBe(false);
});

test("unlisted digits are free and need not differ", () => {
  const f = form(say(4, [1, 1]), 4);
  expect(holds(f, at(1, 5, 5, 5))).toBe(true);
  expect(holds(f, at(1, 5, 6, 7))).toBe(true);
  expect(holds(f, at(5, 5, 5, 5))).toBe(false);
  expect(holds(f, at(1, 1, 5, 5))).toBe(false);
});

test("a count of zero forbids the digit and a count above the cells never holds", () => {
  const zero = form(say(3, [3, 0]), 3);
  expect(holds(zero, at(1, 2, 4))).toBe(true);
  expect(holds(zero, at(1, 3, 4))).toBe(false);
  expect(form(say(3, [3, 4]), 3)).toEqual(no);
  const all3 = form(say(3, [3, 3]), 3);
  expect(holds(all3, at(3, 3, 3))).toBe(true);
  expect(holds(all3, at(3, 3, 2))).toBe(false);
});

test("a digit outside the alphabet is held by no cell", () => {
  expect(form(say(3, [12, 0]), 3)).toEqual(yes);
  expect(form(say(3, [12, 1]), 3)).toEqual(no);
});

test("two counts for one digit must both hold", () => {
  const f = form(say(3, [2, 1], [2, 2]), 3);
  for (const x of nine) for (const y of nine) for (const z of nine) expect(holds(f, at(x, y, z))).toBe(false);
  eq(say(3, [2, 1], [2, 1], [1, 2]), say(3, [1, 2], [2, 1]), 3);
});

test("order, repeats and the full-URL spelling do not matter", () => {
  eq(say(4, [4, 1], [2, 3]), say(4, [2, 3], [4, 1]));
  eq(`look-and-say r1c4-r1c3-r1c2-r1c1 counts [{"digit":4,"count":1}]`, say(4, [4, 1]));
  eq(`look-and-say r1c1-r1c2-r1c2 counts [{"digit":4,"count":1}]`, `look-and-say r1c1-r1c2 counts [{"digit":4,"count":1}]`);
  eq(say(4, [4, 1]), `https://rules.sudoku-sleuth.com/look-and-say.md ${cells.slice(0, 4).join("-")} counts [{"digit":4,"count":1}]`);
});

test("near misses compare as different", () => {
  differs(say(4, [4, 1]), say(4, [4, 2]));
  differs(say(4, [4, 1]), say(4, [3, 1]));
  differs(say(4, [4, 1]), say(5, [4, 1]));
  differs(say(4, [4, 1]), say(4, [4, 1], [2, 3]));
  differs(say(4, [4, 1]), say(4, [4, 0]));
  differs(say(4, [4, 1]), `not ${say(4, [4, 1])}`);
  differs(say(4, [4, 1]), `look-and-say r1c1-r1c2-r1c3-r1c5 counts [{"digit":4,"count":1}]`);
  differs(say(2, [4, 1]), `quadruple ${cells.slice(0, 2).join("-")} digits [4]`);
});

test("it reads printed digits, so a value modifier leaves it covered", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["r1c6"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const n = nf(`${say(3, [1, 1])}\n${modifier}`);
  expect(n.normalForm!.coverage.find(x => x.kind === "look-and-say")).toMatchObject({ status: "lowered" });
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
});

test("a cell that is not an active cell is rejected", () => {
  expect(nf(say(4, [4, 1]), 3).status).toBe("invalid");
});

function differential(n: number, symbols: number[], entries: string[]): void {
  const used = cells.slice(0, n);
  const board: BoardContext = { rows: 1, cols: n, activeCells: used, alphabet: symbols, regions: [used] };
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "look-and-say").every(x => x.status === "lowered")).toBe(true);
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

test("counts agree with the published definition on every assignment", () => {
  differential(4, [1, 2, 3], [say(4, [1, 1]), say(4, [1, 2], [2, 1]), say(4, [3, 0]), say(4, [1, 4]), say(4, [2, 5]), say(4, [9, 0]), say(4, [9, 1])]);
});

test("repeated entries and other alphabets agree with the published definition", () => {
  differential(3, [1, 2, 3], [say(3, [1, 1], [1, 1]), say(3, [1, 1], [1, 2]), `look-and-say r1c1-r1c2-r1c2 counts [{"digit":2,"count":2}]`]);
  differential(3, [-1, 0, 7], [say(3, [0, 2]), say(3, [-1, 1], [7, 1])]);
});

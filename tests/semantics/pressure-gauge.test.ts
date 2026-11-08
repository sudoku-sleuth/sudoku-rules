import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: counting larger neighbours as `d >= n` for a low gauge fails the gauge tests and differentials; swapping the holder
// and non-holder digits in class-count.ts fails them too.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const [a, b, c, d, e] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const three = [1, 2, 3];
const boardOf = (n: number, alphabet = three): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet = three) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const list = (xs: Cell[]) => `[${xs.map(x => `"${x}"`).join(",")}]`;
const gauge = (type: string, clue: Cell, neighbours: Cell[]) => `pressure-gauge type "${type}" cell "${clue}" neighbours ${list(neighbours)}`;
const eq = (x: string, y: string, n = 6, alphabet = three) => expect(compare(nf(x, n, alphabet), nf(y, n, alphabet)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 6, alphabet = three) => { const r = compare(nf(x, n, alphabet), nf(y, n, alphabet)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };

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
function form(rules: string, n = 6, alphabet = three) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(gauge("low", a, [b, c]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(gauge("low", a, [b, c]))}` });
}, 30000);

test("a low gauge counts larger neighbours", () => {
  const f = form(gauge("low", a, [b, c, d]), 4);
  // The clue 1 has exactly one larger neighbour.
  expect(holds(f, at(1, 2, 1, 1))).toBe(true);
  expect(holds(f, at(1, 2, 3, 1))).toBe(false);
  // The clue 2 needs two larger neighbours, and only 3 is larger.
  expect(holds(f, at(2, 3, 3, 1))).toBe(true);
  expect(holds(f, at(2, 3, 2, 3))).toBe(true);
  expect(holds(f, at(2, 3, 1, 1))).toBe(false);
  // The clue 3 can have no larger neighbour, so it needs three.
  expect(holds(f, at(3, 3, 3, 3))).toBe(false);
});

test("a high gauge counts smaller neighbours", () => {
  const f = form(gauge("high", a, [b, c, d]), 4);
  expect(holds(f, at(1, 1, 1, 1))).toBe(false);
  expect(holds(f, at(2, 1, 1, 3))).toBe(true);
  expect(holds(f, at(2, 1, 2, 3))).toBe(false);
  expect(holds(f, at(3, 1, 2, 1))).toBe(true);
  expect(holds(f, at(3, 1, 2, 3))).toBe(false);
});

test("equal neighbours count for neither side", () => {
  const f = form(gauge("low", a, [b, c]), 3);
  expect(holds(f, at(1, 1, 2))).toBe(true);
  expect(holds(f, at(1, 2, 2))).toBe(false);
  expect(holds(f, at(2, 3, 3))).toBe(true);
  expect(holds(f, at(2, 2, 3))).toBe(false);
});

test("the clue cell among its neighbours counts for nothing", () => {
  eq(gauge("low", a, [a, b, c]), gauge("low", a, [b, c]), 3);
  eq(gauge("high", a, [a, b, c]), gauge("high", a, [b, c]), 3);
  // A clue with no other neighbour needs 0 of them, which no digit of 1 to 3 is.
  expect(form(gauge("low", a, [a]), 3)).toEqual({ op: "Any", children: [] });
});

test("zero is a clue that has no larger neighbour", () => {
  const f = form(gauge("low", a, [b, c]), 3, [0, 1, 2]);
  expect(holds(f, at(0, 0, 0))).toBe(true);
  expect(holds(f, at(0, 1, 0))).toBe(false);
  expect(holds(f, at(1, 2, 1))).toBe(true);
  expect(holds(f, at(1, 0, 1))).toBe(false);
});

test("order, repeats and the full-URL spelling do not matter", () => {
  eq(gauge("low", a, [b, c, d]), gauge("low", a, [d, c, b, b]), 4);
  eq(gauge("low", a, [b, c]), `https://rules.sudoku-sleuth.com/pressure-gauge.md type "low" cell "r1c1" neighbours ["r1c3","r1c2"]`, 3);
});

test("near misses compare as different", () => {
  differs(gauge("low", a, [b, c, d]), gauge("high", a, [b, c, d]), 4);
  differs(gauge("low", a, [b, c, d]), gauge("low", b, [a, c, d]), 4);
  differs(gauge("low", a, [b, c, d]), gauge("low", a, [b, c]), 4);
  differs(gauge("low", a, [b, c]), gauge("low", a, [b, d]), 4);
  differs(gauge("low", a, [b, c]), `not ${gauge("low", a, [b, c])}`, 4);
  differs(gauge("low", a, [b, c, d]), gauge("low", a, [b, c, d]).replace("pressure-gauge", "pressure-gauge") + `\n${gauge("high", a, [b, c])}`, 4);
});

test("it reads printed digits, so a value modifier leaves it covered", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["r1c6"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const n = nf(`${gauge("low", a, [b, c])}\n${modifier}`);
  expect(n.normalForm!.coverage.find(x => x.kind === "pressure-gauge")).toMatchObject({ status: "lowered" });
});

test("a clue or neighbour that is not an active cell is rejected", () => {
  const small = (rules: string) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(3));
  expect(small(gauge("low", a, [b, e])).status).toBe("invalid");
  expect(small(gauge("low", e, [b, c])).status).toBe("invalid");
});

function differential(n: number, symbols: number[], entries: string[]): void {
  const used = cells.slice(0, n);
  const board: BoardContext = { rows: 1, cols: n, activeCells: used, alphabet: symbols, regions: [used] };
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "pressure-gauge").every(x => x.status === "lowered")).toBe(true);
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

differentialTests("low gauges agree with the published definition", 4, [1, 2, 3], [gauge("low", a, [b, c, d]), gauge("low", b, [a, c]), gauge("low", a, [a, b, c])]);
differentialTests("high gauges agree with the published definition", 4, [1, 2, 3], [gauge("high", a, [b, c, d]), gauge("high", c, [a, b, d])]);
differentialTests("other alphabets agree with the published definition", 3, [0, 1, 2], [gauge("low", a, [b, c]), gauge("high", b, [a, c])]);
differentialTests("alphabets with gaps agree with the published definition", 3, [-1, 2, 5], [gauge("low", a, [b, c]), gauge("high", a, [b, c])]);

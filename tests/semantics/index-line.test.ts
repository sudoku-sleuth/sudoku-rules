import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const line = (list: Cell[]) => `index-line ${list.join("-")}`;
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

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(line(cells.slice(0, 3)));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r1c2, r1c3]]}\n---${body(line(cells.slice(0, 3)))}` });
}, 30000);

test("a digit X in position N means the digit in position X is N", () => {
  const f = form(line(cells.slice(0, 3)), 3);
  // 2 1 3: positions 1 and 2 point at each other and position 3 points at itself.
  expect(holds(f, at(2, 1, 3))).toBe(true);
  // 1 3 2: position 1 points at itself and positions 2 and 3 swap.
  expect(holds(f, at(1, 3, 2))).toBe(true);
  expect(holds(f, at(1, 2, 3))).toBe(true);
  expect(holds(f, at(3, 2, 1))).toBe(true);
  // 2 3 1: position 1 points at position 2, which holds 3, not 1.
  expect(holds(f, at(2, 3, 1))).toBe(false);
  // 2 2 3: position 2 points at itself but holds 2 where 2 is needed, and position 1 needs a 1 at position 2.
  expect(holds(f, at(2, 2, 3))).toBe(false);
});

test("a digit past the line or outside the alphabet names no position", () => {
  const f = form(line(cells.slice(0, 2)), 2);
  expect(holds(f, at(2, 1))).toBe(true);
  expect(holds(f, at(3, 1))).toBe(false);
  expect(holds(f, at(9, 9))).toBe(false);
  // An alphabet without the position numbers can never satisfy the clue.
  expect(form(line(cells.slice(0, 3)), 3, [4, 5, 6])).toEqual({ op: "Any", children: [] });
  const zero = form(line(cells.slice(0, 2)), 2, [0, 1, 2]);
  expect(holds(zero, at(2, 1))).toBe(true);
  expect(holds(zero, at(0, 1))).toBe(false);
});

test("a cell listed twice is read at each position", () => {
  const f = form(line([cells[0], cells[1], cells[0]]), 2);
  expect(holds(f, at(1, 1))).toBe(false);
  expect(holds(f, at(3, 1))).toBe(false);
  expect(holds(f, at(2, 1))).toBe(false);
});

test("the line setting, the whole-row index and the bare list agree", () => {
  eq(line(cells.slice(0, 3)), `index-line line ${cells.slice(0, 3).join("-")}`, 3);
  // Index with axis column on every cell of a one-row board is the index line over that row.
  eq(line(cells.slice(0, 3)), `index ${cells.slice(0, 3).join("-")} axis "column"`, 3);
});

test("near misses compare as different", () => {
  const abc = cells.slice(0, 3);
  differs(line(abc), line([...abc].reverse()));
  differs(line(abc), line(cells.slice(0, 4)));
  differs(line(abc), line([cells[0], cells[1], cells[3]]));
  differs(line(abc), `not ${line(abc)}`);
  differs(line(abc), `unique ${abc.join("-")}`);
  differs(line(abc), `numbered-room ${abc.join("-")} digit 2`);
});

test("an inactive or off-board cell is an error, not a silent gap", () => {
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(line([cells[0], cells[1], cells[3]]))}` }, boardOf(3, [1, 2, 3]));
  expect(r.status).toBe("invalid");
});

test("the declaration is covered beside a value modifier because it reads printed digits", () => {
  const r = nf(`${line(cells.slice(0, 3))}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "index-line")).toMatchObject({ status: "lowered" });
});

function differential(n: number, symbols: number[], entries: string[]): number {
  let seen = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "index-line").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const expected = evaluate(rule, { digits: values }).status === "holds";
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        if (expected) seen++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
  }
  return seen;
}

test("the lowered formula and the public evaluator agree on lines, alphabets and negation", () => {
  const three = cells.slice(0, 3);
  expect(differential(3, [1, 2, 3, 4], [line(three), `not ${line(three)}`, line([...three].reverse())])).toBeGreaterThan(0);
  expect(differential(2, [1, 2, 3], [line(cells.slice(0, 2))])).toBeGreaterThan(0);
  expect(differential(3, [0, 1, 2, 3], [line(three)])).toBeGreaterThan(0);
  expect(differential(3, [2, 3, 4], [line(three)])).toBe(0);
});

test("the lowered formula and the public evaluator agree on repeated and single-cell lines", () => {
  expect(differential(2, [1, 2, 3], [line([cells[0], cells[1], cells[0]]), line([cells[0], cells[0]])])).toBeGreaterThanOrEqual(0);
  expect(differential(2, [1, 2], [line([cells[0]])])).toBeGreaterThan(0);
});

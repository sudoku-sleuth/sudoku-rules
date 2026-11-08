import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const gridCells = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${i % cols + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[], active = gridCells(rows, cols)): BoardContext => ({ rows, cols, activeCells: active, alphabet, regions: [active] });
const nf = (rules: string, board: BoardContext) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
const row = (n: number, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => boardOf(1, n, alphabet);
const line = (n: number) => gridCells(1, n).join("-");
const differs = (x: string, y: string, board: BoardContext) => { const r = compare(nf(x, board), nf(y, board)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const equal = (x: string, y: string, board: BoardContext) => expect(compare(nf(x, board), nf(y, board)).status).toBe("equivalent");

function holds(f: Formula, v: Record<string, number>, w: Record<string, number> = v): boolean {
  const read = (channel: string, c: string) => channel === "V" ? w[c] : v[c];
  switch (f.op) {
    case "All": return f.children.every(x => holds(x, v, w));
    case "Any": return f.children.some(x => holds(x, v, w));
    case "Not": return !holds(f.child, v, w);
    case "Pair": return f.table.some(([x, y]) => x === read(f.channel, f.cells[0]) && y === read(f.channel, f.cells[1]));
    case "Allowed": return f.values.includes(read(f.channel, f.cell));
    case "Distinct": return new Set(f.cells.map(c => read(f.channel, c))).size === f.cells.length;
    case "CountAtLeast": return f.cells.filter(c => v[c] === f.digit).length >= f.count;
    case "SumEqual": return f.left.reduce((n, c) => n + BigInt(read(f.channel, c)), 0n) === f.right.reduce((n, c) => n + BigInt(read(f.channel, c)), 0n);
    case "SumTotal": return f.cells.reduce((n, c) => n + BigInt(read(f.channel, c)), 0n) === BigInt(f.total);
  }
}
function form(rules: string, board: BoardContext) { const r = nf(rules, board); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [`r1c${i + 1}`, x]));


/**
 * The public evaluator runs the lowered formula itself unless the assignment supplies effective values and the formula reads them,
 * so every entry here is stated on channel "V" (added when missing): the evaluator then follows the published definition. Each assignment is compared three ways:
 * the evaluator with values equal to the digits against the raw lowering and the normal form, and the evaluator with one cell's value
 * moved to another symbol (a different cell for each assignment) against the raw lowering, which must follow the effective values.
 */
function differential(kinds: string[], rows: number, cols: number, symbols: number[], entries: string[], active = gridCells(rows, cols)): number {
  let seen = 0, split = 0;
  const board = boardOf(rows, cols, symbols, active);
  for (const entry of entries) {
    const text = entry.includes('channel "V"') ? entry : `${entry} channel "V"`;
    const r = nf(text, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => kinds.includes(x.kind)).every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], activeCells: [${active.join(", ")}], regions: [[${active.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    expect(rule.finite).toBeDefined();
    let count = 0;
    const walk = (index: number, digits: Record<string, number>) => {
      if (index === active.length) {
        // The effective value of one cell (a different cell for each assignment) is the next symbol of the alphabet.
        const cell = active[count++ % active.length];
        const doubled = { ...digits, [cell]: symbols[(symbols.indexOf(digits[cell]) + 1) % symbols.length] };
        const same = evaluate(rule, { digits, values: digits }).status === "holds";
        const other = evaluate(rule, { digits, values: doubled }).status === "holds";
        expect(`${text} | ${JSON.stringify(digits)} | raw | ${holds(rule.finite!, digits, digits)}`).toBe(`${text} | ${JSON.stringify(digits)} | raw | ${same}`);
        expect(`${text} | ${JSON.stringify(digits)} | normal | ${holds(r.normalForm!.solution, digits)}`).toBe(`${text} | ${JSON.stringify(digits)} | normal | ${same}`);
        expect(`${text} | ${JSON.stringify(digits)} | values ${JSON.stringify(doubled)} | ${holds(rule.finite!, digits, doubled)}`).toBe(`${text} | ${JSON.stringify(digits)} | values ${JSON.stringify(doubled)} | ${other}`);
        if (same) seen++;
        if (same !== other) split++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...digits, [active[index]]: x });
    };
    walk(0, {});
  }
  // Some assignment must give a different verdict once the values differ from the digits, or the channel was never exercised.
  expect(split).toBeGreaterThan(0);
  return seen;
}

const ls = (n: number, params: string) => `local-sequence ${line(n)} ${params}`;

const KINDS = ["local-sequence"];

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(ls(3, 'mode "recurrence"'), row(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(ls(3, 'mode "recurrence"'))}` });
}, 30000);

test("transitions allow only the listed ordered pairs", () => {
  const f = form(ls(3, 'mode "transitions" allowed [[1,2],[2,3],[3,1]]'), row(3, [1, 2, 3]));
  expect(holds(f, at(1, 2, 3))).toBe(true);
  expect(holds(f, at(3, 1, 2))).toBe(true);
  expect(holds(f, at(2, 1, 2))).toBe(false);
  expect(holds(f, at(1, 1, 2))).toBe(false);
  const closed = form(ls(3, 'mode "transitions" allowed [[1,2],[2,3],[3,1]] loop true'), row(3, [1, 2, 3]));
  expect(holds(closed, at(1, 2, 3))).toBe(true);
  expect(holds(closed, at(1, 2, 1))).toBe(false);
  expect(holds(form(ls(3, 'mode "transitions"'), row(3, [1, 2, 3])), at(1, 2, 3))).toBe(false);
});

test("divisors need each value to be a nonzero divisor of the next", () => {
  const f = form(ls(3, 'mode "divisors"'), row(3, [0, 1, 2, 3, 4, 6]));
  expect(holds(f, at(1, 2, 4))).toBe(true);
  expect(holds(f, at(2, 6, 6))).toBe(true);
  expect(holds(f, at(3, 6, 0))).toBe(true);
  expect(holds(f, at(2, 3, 6))).toBe(false);
  expect(holds(f, at(0, 0, 0))).toBe(false);
  expect(holds(f, at(4, 2, 4))).toBe(false);
  const negative = form(ls(2, 'mode "divisors"'), row(2, [-4, -2, 2, 3]));
  expect(holds(negative, at(-2, -4))).toBe(true);
  expect(holds(negative, at(2, -4))).toBe(true);
  expect(holds(negative, at(3, 2))).toBe(false);
});

test("a recurrence makes each cell after the first two a combination of the two before", () => {
  const f = form(ls(4, 'mode "recurrence"'), row(4, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
  expect(holds(f, at(1, 2, 3, 5))).toBe(true);
  expect(holds(f, at(2, 3, 5, 8))).toBe(true);
  expect(holds(f, at(2, 3, 5, 7))).toBe(false);
  const weighted = form(ls(3, 'mode "recurrence" a 2 b -1'), row(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
  expect(holds(weighted, at(3, 5, 1))).toBe(true);
  expect(holds(weighted, at(3, 5, 6))).toBe(false);
  expect(holds(weighted, at(2, 4, 4))).toBe(false);
  expect(holds(weighted, at(2, 3, 1))).toBe(true);
});

test("a recurrence on one or two cells has no condition, and a closed recurrence is rejected by the case check", () => {
  expect(form(ls(2, 'mode "recurrence"'), row(2))).toEqual({ op: "All", children: [] });
  expect(form(ls(1, 'mode "recurrence"'), row(1))).toEqual({ op: "All", children: [] });
  expect(nf(ls(4, 'mode "recurrence" loop true'), row(4)).status).toBe("invalid");
});

test("a closed line needs three cells, and a transitions entry that is not a pair is false", () => {
  expect(form(ls(2, 'mode "divisors" loop true'), row(2))).toEqual({ op: "Any", children: [] });
  expect(form(ls(1, 'mode "transitions" loop true'), row(1))).toEqual({ op: "Any", children: [] });
  expect(form(ls(3, 'mode "transitions" allowed [[1,2],[2]]'), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(ls(3, 'mode "transitions" allowed [[1,2,3]]'), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(ls(1, 'mode "transitions" allowed [[1,2]]'), row(1))).toEqual({ op: "All", children: [] });
  expect(form(ls(1, 'mode "divisors"'), row(1))).toEqual({ op: "All", children: [] });
});

test("the order of the allowed pairs and repeated pairs do not matter", () => {
  const board = row(3, [1, 2, 3]);
  equal(ls(3, 'mode "transitions" allowed [[1,2],[2,3]]'), ls(3, 'mode "transitions" allowed [[2,3],[1,2],[1,2]]'), board);
  equal(ls(3, 'mode "transitions" allowed [[1,2],[2,3],[9,9]]'), ls(3, 'mode "transitions" allowed [[1,2],[2,3]]'), board);
  equal(ls(3, 'mode "recurrence"'), ls(3, 'mode "recurrence" a 1 b 1'), board);
  equal(ls(3, 'mode "divisors" a 5'), ls(3, 'mode "divisors"'), board);
  equal(ls(3, 'mode "divisors" allowed [[1,1]]'), ls(3, 'mode "divisors"'), board);
  equal(ls(3, 'mode "transitions" allowed [[1,2]] loop true'), ls(3, 'mode "transitions" allowed [[1,2]]') + "\n" + `local-sequence r1c3-r1c1 mode "transitions" allowed [[1,2]]`, board);
});

test("a recurrence coefficient that is not a small whole number stays uncovered", () => {
  for (const text of [ls(3, 'mode "recurrence" a 0.5'), ls(3, 'mode "recurrence" b 5000')]) {
    const r = nf(text, row(3));
    expect(r.status).toBe("partial");
    expect(r.normalForm!.coverage.find(x => x.kind === "local-sequence")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("coefficient") });
  }
});

test("bad parameters are invalid", () => {
  for (const text of [ls(3, 'mode "chain"'), ls(3, 'mode "transitions" allowed [["x","y"]]'), ls(3, 'mode "transitions" allowed [1,2]'), ls(3, 'mode "recurrence" a "two"'), ls(3, 'mode "divisors" loop 1')]) expect(nf(text, row(3)).status).toBe("invalid");
});

test("near misses compare as different", () => {
  const board = row(3, [1, 2, 3]);
  const base = ls(3, 'mode "transitions" allowed [[1,2],[2,3]]');
  equal(base, ls(3, 'mode "transitions" allowed [[1,2],[2,3]]'), board);
  differs(base, ls(3, 'mode "transitions" allowed [[1,2],[2,3],[3,1]]'), board);
  differs(base, ls(3, 'mode "transitions" allowed [[2,1],[3,2]]'), board);
  differs(base, ls(3, 'mode "transitions" allowed [[1,2],[2,3]] loop true'), board);
  differs(base, ls(3, 'mode "divisors"'), board);
  differs(base, `not ${base}`, board);
  differs(ls(3, 'mode "recurrence"'), ls(3, 'mode "recurrence" a 1 b 2'), board);
  differs(ls(3, 'mode "recurrence" a 1 b 2'), ls(3, 'mode "recurrence" a 2 b 1'), board);
  differs(ls(3, 'mode "divisors"'), ls(3, 'mode "divisors" loop true'), board);
  differs(ls(3, 'mode "divisors"'), `local-sequence r1c3-r1c2-r1c1 mode "divisors"`, board);
  differs(ls(3, 'mode "recurrence"'), `x: ${ls(2, 'mode "recurrence"')}`, board);
});

test("the channel changes nothing while effective values are the printed digits", () => {
  const board = row(3, [1, 2, 3, 4, 5]);
  equal(ls(3, 'mode "divisors" channel "V"'), ls(3, 'mode "divisors"'), board);
  equal(ls(3, 'mode "recurrence" channel "V"'), ls(3, 'mode "recurrence"'), board);
  equal(ls(3, 'mode "transitions" allowed [[1,2]] channel "V"'), ls(3, 'mode "transitions" allowed [[1,2]]'), board);
});

test("a value channel stays uncovered when effective values are unresolved", () => {
  const unresolved = nf(`${ls(3, 'mode "recurrence" channel "V"')}\nvalue-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`, row(3));
  expect(unresolved.normalForm?.coverage.find(x => x.kind === "local-sequence")?.status).toBe("unsupported");
});


test("the lowered formula and the public evaluator agree on divisors", () => {
  expect(differential(KINDS, 1, 3, [0, 1, 2, 4], [ls(3, 'mode "divisors"'), ls(3, 'mode "divisors" loop true')])).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 3, [-2, -1, 1, 2], [ls(3, 'mode "divisors"')])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on transitions", () => {
  const allowed = 'allowed [[1,2],[2,2],[2,4],[4,1]]';
  expect(differential(KINDS, 1, 3, [1, 2, 4], [ls(3, `mode "transitions" ${allowed}`), ls(3, `mode "transitions" ${allowed} loop true`)])).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 2, [0, 1, 2], [ls(2, 'mode "transitions" allowed [[1,2],[0,0]]'), ls(2, 'mode "transitions"')])).toBeGreaterThanOrEqual(0);
});

test("a degenerate transitions list and a short closed line are false in the evaluator too", () => {
  const board = boardOf(1, 3, [1, 2]);
  for (const text of [ls(3, 'mode "transitions" allowed [[1,2],[3]]'), ls(2, 'mode "divisors" loop true')]) {
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2], regions: [[r1c1, r1c2, r1c3]]}\n---${body(text)}` });
    const rule = compiled.value!.rules[0];
    expect(evaluate(rule, { digits: at(1, 2, 1), values: at(1, 2, 1) }).status).toBe("broken");
    expect(nf(text, board).normalForm!.solution).toEqual({ op: "Any", children: [] });
  }
});

test("the lowered formula and the public evaluator agree on recurrences", () => {
  expect(differential(KINDS, 1, 4, [1, 2, 3], ['mode "recurrence"', 'mode "recurrence" a 2 b -1'].map(m => ls(4, m)))).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on recurrence coefficients and alphabets", () => {
  const modes = ['mode "recurrence" a -1 b 0', 'mode "recurrence" a 0 b 0', 'mode "recurrence" a 0 b 2', 'mode "recurrence" a 3 b -3'];
  expect(differential(KINDS, 1, 3, [-1, 0, 1, 2], modes.map(m => ls(3, m)))).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on repeated cells", () => {
  expect(differential(KINDS, 1, 3, [0, 1, 2], ["local-sequence r1c1-r1c2-r1c1-r1c3 mode \"recurrence\"", "local-sequence r1c1-r1c1-r1c2 mode \"recurrence\" a 2 b -1"])).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 2, [1, 2, 4], ["local-sequence r1c1-r1c2-r1c1-r1c2 mode \"divisors\" loop true"])).toBeGreaterThan(0);
});

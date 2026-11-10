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
const ps = (n: number, params: string) => `prefix-sum ${line(n)} ${params}`;
const KINDS = ["prefix-sum"];
const withGivens = (n: number, alphabet: number[], givens: { cell: Cell; digit: number }[]): BoardContext => ({ ...row(n, alphabet), givens });

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(ps(3, 'stop "target" target 3 total 5'), row(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(ps(3, 'stop "target" target 3 total 5'))}` });
}, 30000);

test("a target stops the prefix at its first occurrence, which is left out unless included", () => {
  const f = form(ps(4, 'stop "target" target 5 total 7'), row(4));
  expect(holds(f, at(3, 4, 5, 9))).toBe(true);
  expect(holds(f, at(3, 4, 5, 5))).toBe(true);
  expect(holds(f, at(3, 4, 9, 5))).toBe(false);
  expect(holds(f, at(3, 3, 1, 1))).toBe(false);
  expect(holds(f, at(5, 2, 5, 5))).toBe(false);
  const included = form(ps(4, 'stop "target" target 5 total 12 include true'), row(4));
  expect(holds(included, at(3, 4, 5, 9))).toBe(true);
  expect(holds(included, at(3, 4, 9, 5))).toBe(false);
});

test("a ray with no stopping cell fails, and an empty prefix totals zero", () => {
  expect(holds(form(ps(3, 'stop "target" target 9 total 6'), row(3)), at(1, 2, 3))).toBe(false);
  const zero = form(ps(3, 'stop "target" target 4 total 0'), row(3, [0, 1, 2, 4]));
  expect(holds(zero, at(4, 1, 2))).toBe(true);
  expect(holds(zero, at(1, 4, 2))).toBe(false);
  expect(holds(form(ps(3, 'stop "target" target 4 total 0 include true'), row(3, [0, 1, 2, 4])), at(4, 1, 2))).toBe(false);
  expect(holds(form(ps(1, 'stop "crust" crusts [1] total 0'), row(1, [1, 2])), at(1))).toBe(true);
});

test("a crust digit stops the prefix, and a target nobody can read stops nothing", () => {
  const f = form(ps(4, 'stop "crust" crusts [1,9] total 6'), row(4));
  expect(holds(f, at(2, 4, 9, 3))).toBe(true);
  expect(holds(f, at(2, 4, 1, 9))).toBe(true);
  expect(holds(f, at(2, 5, 3, 9))).toBe(false);
  expect(form(ps(3, 'stop "crust" total 3'), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(ps(3, 'stop "crust" crusts [0] total 3'), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(ps(3, 'stop "target" total 3'), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(ps(3, 'stop "target" target 2.5 total 3'), row(3))).toEqual({ op: "Any", children: [] });
});

test("a given stops the prefix at the first given cell of the board", () => {
  const board = withGivens(4, [1, 2, 3, 4, 5, 6, 7, 8, 9], [{ cell: "r1c3", digit: 4 }, { cell: "r1c4", digit: 6 }]);
  const f = form(ps(4, 'stop "given" total 5'), board);
  expect(holds(f, at(2, 3, 4, 1))).toBe(true);
  expect(holds(f, at(2, 4, 4, 1))).toBe(false);
  expect(holds(form(ps(4, 'stop "given" total 9 include true'), board), at(2, 3, 4, 1))).toBe(true);
  expect(form(ps(4, 'stop "given" total 5'), row(4))).toEqual({ op: "Any", children: [] });
  const first = withGivens(3, [0, 1, 2], [{ cell: "r1c1", digit: 1 }]);
  expect(holds(form(ps(3, 'stop "given" total 0'), first), at(1, 2, 2))).toBe(true);
  expect(holds(form(ps(3, 'stop "given" total 1 include true'), first), at(1, 2, 2))).toBe(true);
});

test("a total that is not a whole number is never met", () => {
  expect(form(ps(3, 'stop "target" target 3 total 2.5'), row(3))).toEqual({ op: "Any", children: [] });
});

test("a ray that lists a cell twice and an unsafe total stay uncovered", () => {
  for (const text of ["prefix-sum r1c1-r1c2-r1c1 stop \"target\" target 3 total 5", ps(3, 'stop "target" target 3 total 9007199254740993')]) {
    const r = nf(text, row(3));
    expect(r.status).toBe("partial");
    expect(r.normalForm!.coverage.find(x => x.kind === "prefix-sum")).toMatchObject({ status: "unsupported" });
  }
});

test("bad parameters are invalid", () => {
  for (const text of [ps(3, 'stop "middle" total 5'), ps(3, 'stop "target" target 3'), ps(3, 'stop "target" target "x" total 5'), ps(3, 'stop "crust" crusts ["x"] total 5'), ps(3, 'stop "target" target 3 total 5 include 1')]) expect(nf(text, row(3)).status).toBe("invalid");
});

test("near misses compare as different", () => {
  const board = row(4);
  const base = ps(4, 'stop "target" target 5 total 7');
  equal(base, ps(4, 'stop "target" target 5 total 7 include false'), board);
  differs(base, ps(4, 'stop "target" target 5 total 8'), board);
  differs(base, ps(4, 'stop "target" target 4 total 7'), board);
  differs(base, ps(4, 'stop "target" target 5 total 7 include true'), board);
  // A crust is a printed digit and a target reads the channel, so on printed digits they stop in the same place.
  equal(base, ps(4, 'stop "crust" crusts [5] total 7'), board);
  differs(base, ps(4, 'stop "crust" crusts [4] total 7'), board);
  differs(base, `prefix-sum r1c4-r1c3-r1c2-r1c1 stop "target" target 5 total 7`, board);
  differs(base, `not ${base}`, board);
  equal(ps(4, 'stop "crust" crusts [1,9] total 6'), ps(4, 'stop "crust" crusts [9,1,9] total 6 target 4'), board);
});

test("the channel changes nothing while effective values are the printed digits", () => {
  const board = row(4);
  equal(ps(4, 'stop "target" target 5 total 7 channel "V"'), ps(4, 'stop "target" target 5 total 7'), board);
  equal(ps(4, 'stop "crust" crusts [1,9] total 6 channel "V"'), ps(4, 'stop "crust" crusts [1,9] total 6'), board);
});

test("a value channel stays uncovered when effective values are unresolved", () => {
  const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["r1c3"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  expect(nf(ps(3, 'stop "target" target 2 total 5 channel "V"') + modifier, row(3)).normalForm?.coverage.find(x => x.kind === "prefix-sum")?.status).toBe("unsupported");
});

test("the lowered formula and the public evaluator agree on targets", () => {
  expect(differential(KINDS, 1, 4, [1, 2, 3], [ps(4, 'stop "target" target 2 total 4'), ps(4, 'stop "target" target 3 total 3 include true')])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on crusts", () => {
  expect(differential(KINDS, 1, 4, [1, 2, 3], [ps(4, 'stop "crust" crusts [1,3] total 3'), ps(4, 'stop "crust" crusts [2] total 4 include true')])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on empty prefixes and unusual totals", () => {
  expect(differential(KINDS, 1, 3, [0, 1, 4], [ps(3, 'stop "target" target 4 total 0'), ps(3, 'stop "crust" crusts [0,1] total 1 include true')])).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 3, [0, 1, 4], [ps(3, 'stop "target" target 4 total 2.5'), ps(3, 'stop "target" target 1 total 4')])).toBeGreaterThanOrEqual(0);
});

/**
 * Effective values twice the digit on some cells, so a value can pass the alphabet maximum. The lowered formula (read with the values)
 * and the page's published formula (read by the public evaluator) must give the same verdict, and a target above 9 must still stop.
 */
function valueRule(params: string) {
  const text = ps(4, `${params} channel "V"`);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r1c2, r1c3, r1c4]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rule = compiled.value!.rules[0];
  expect(rule.finite).toBeDefined();
  const verdict = (digits: number[], values: number[]) => {
    const lowered = holds(rule.finite!, at(...digits), at(...values));
    const published = evaluate({ ...rule, finite: undefined }, { digits: at(...digits), values: at(...values) }).status === "holds";
    expect(lowered).toBe(published);
    return lowered;
  };
  return { rule, verdict };
}

test("a target above the alphabet maximum stops the prefix on the value channel", () => {
  const { rule, verdict } = valueRule('stop "target" target 12 total 12');
  // A doubled 6 reads 12 and stops the prefix; the cells before it read 7 and 5.
  expect(verdict([7, 5, 6, 1], [7, 5, 12, 1])).toBe(true);
  expect(verdict([7, 4, 6, 1], [7, 4, 12, 1])).toBe(false);
  // The digit 6 alone, read as 6, is not the target.
  expect(verdict([7, 5, 6, 1], [7, 5, 6, 1])).toBe(false);
  expect(rule.finite).not.toEqual({ op: "Any", children: [] });
});

test("a doubled value before the stop is allowed on the value channel", () => {
  const { verdict } = valueRule('stop "target" target 12 total 10');
  // A doubled 5 reads 10 before the stop and is the whole prefix.
  expect(verdict([5, 6, 1, 1], [10, 12, 1, 1])).toBe(true);
  expect(verdict([5, 6, 1, 1], [5, 12, 1, 1])).toBe(false);
  // Another doubled cell reading 12 before the stop is itself the stop.
  expect(verdict([6, 5, 6, 1], [12, 5, 12, 1])).toBe(false);
});

test("a value outside the alphabet before the stop is allowed, and the digit channel keeps its lowering", () => {
  const { verdict } = valueRule('stop "target" target 4 total 8');
  // The first cell reads 8 (a doubled 4), which is not an alphabet digit but is not the target either.
  expect(verdict([4, 4, 1, 1], [8, 4, 1, 1])).toBe(true);
  expect(verdict([4, 4, 1, 1], [7, 4, 1, 1])).toBe(false);
  expect(form(ps(4, 'stop "target" target 5 total 7'), row(4))).toEqual(form(ps(4, 'stop "target" target 5 total 7 channel "D"'), row(4)));
});

test("another rule's negated terms keep their normal form", () => {
  // Pins a form the prefix sum lowering must not move: a negated term is not rewritten by the canonicaliser.
  const count = (digit: number, n: number) => ({ op: "CountAtLeast", channel: "D", cells: ["r1c1", "r1c2"], digit, count: n });
  expect(form("counting-circles r1c1-r1c2", row(2, [1, 2]))).toEqual({
    op: "All",
    children: [
      { op: "Any", children: [{ op: "All", children: [count(1, 1), { op: "Not", child: count(1, 2) }] }, { op: "Not", child: count(1, 1) }] },
      { op: "Any", children: [count(2, 2), { op: "Not", child: count(2, 1) }] },
    ],
  });
});

/**
 * A given stop reads the board's givens. Removing the lowered formula from the compiled rule makes the public evaluator interpret the
 * page's published formula, which the normal form is compared with; the effective values differ from the digits to show the channel D
 * rule ignores them. The givens come from the case header, as the evaluator reads them.
 */
test("a given stop agrees with the page's published formula", () => {
  const symbols = [0, 1, 2], cells = gridCells(1, 3);
  const board = withGivens(3, symbols, [{ cell: "r1c2", digit: 2 }]);
  let seen = 0, count = 0;
  for (const include of [false, true]) for (const total of [0, 1, 2, 3]) {
    const text = ps(3, `stop "given" total ${total}${include ? " include true" : ""}`);
    const r = nf(text, board);
    expect(r.issues).toEqual([]);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [0,1,2], regions: [[r1c1, r1c2, r1c3]], givens: [{cell: r1c2, digit: 2}]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = { ...compiled.value!.rules[0], finite: undefined };
    const walk = (index: number, v: Record<string, number>) => {
      if (index === 3) {
        const moved = cells[count++ % 3];
        const values = { ...v, [moved]: (v[moved] + 1) % 3 };
        // The given cell holds its given digit in a finished grid; the other two cells take every digit.
        const expected = evaluate(rule, { digits: v, values }).status === "holds";
        expect([text, JSON.stringify(v), holds(r.normalForm!.solution, v)]).toEqual([text, JSON.stringify(v), expected]);
        if (expected) seen++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...v, [cells[index]]: x });
    };
    walk(0, {});
  }
  expect(seen).toBeGreaterThan(0);
});

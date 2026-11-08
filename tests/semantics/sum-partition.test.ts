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

const sp = (n: number, params: string) => `sum-partition ${line(n)} ${params}`;

const KINDS = ["sum-partition"];

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(sp(3, 'total 5 mode "cover"'), row(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(sp(3, 'total 5 mode "cover"'))}` });
}, 30000);

test("cover needs every position inside some interval with the total, and intervals may overlap", () => {
  const f = form(sp(3, 'total 5 mode "cover"'), row(3));
  expect(holds(f, at(2, 3, 2))).toBe(true);
  expect(holds(f, at(2, 2, 2))).toBe(false);
  expect(holds(f, at(1, 4, 1))).toBe(true);
  expect(holds(f, at(5, 1, 4))).toBe(true);
  expect(holds(f, at(1, 1, 4))).toBe(false);
  expect(holds(f, at(5, 5, 5))).toBe(true);
});

test("partition needs the whole line cut into adjacent intervals with the total", () => {
  const f = form(sp(4, 'total 5 mode "partition"'), row(4));
  expect(holds(f, at(2, 3, 1, 4))).toBe(true);
  expect(holds(f, at(5, 5, 1, 4))).toBe(true);
  expect(holds(f, at(2, 3, 2, 3))).toBe(true);
  expect(holds(f, at(1, 4, 5, 5))).toBe(true);
  expect(holds(f, at(2, 3, 5, 1))).toBe(false);
  expect(holds(f, at(1, 4, 4, 1))).toBe(true);
  expect(holds(f, at(3, 2, 3, 3))).toBe(false);
  // Cover holds here, but no cut produces total-5 pieces.
  expect(holds(form(sp(3, 'total 5 mode "cover"'), row(3)), at(2, 3, 2))).toBe(true);
  expect(holds(form(sp(3, 'total 5 mode "partition"'), row(3)), at(2, 3, 2))).toBe(false);
});

test("repeats false needs different values inside every interval", () => {
  const f = form(sp(3, 'total 4 mode "partition" repeats false'), row(3, [1, 2, 3]));
  expect(holds(f, at(1, 3, 1))).toBe(false);
  expect(holds(f, at(1, 3, 3))).toBe(false);
  expect(holds(form(sp(2, 'total 4 mode "partition" repeats false'), row(2, [1, 2, 3])), at(2, 2))).toBe(false);
  expect(holds(form(sp(2, 'total 4 mode "partition"'), row(2, [1, 2, 3])), at(2, 2))).toBe(true);
  expect(holds(form(sp(2, 'total 4 mode "cover" repeats false'), row(2, [1, 2, 3])), at(2, 2))).toBe(false);
  expect(holds(form(sp(2, 'total 4 mode "partition" repeats false'), row(2, [1, 2, 3])), at(1, 3))).toBe(true);
  expect(holds(form(sp(3, 'total 4 mode "cover"'), row(3, [1, 2, 3])), at(2, 2, 2))).toBe(true);
  expect(holds(form(sp(3, 'total 4 mode "cover" repeats false'), row(3, [1, 2, 3])), at(2, 2, 2))).toBe(false);
  expect(holds(form(sp(3, 'total 3 mode "cover" repeats false'), row(3, [1, 2, 3])), at(1, 2, 3))).toBe(true);
});

test("a closed line lets intervals cross the join, and a closed partition chooses a cut", () => {
  const cover = form(sp(4, 'total 5 mode "cover" loop true'), row(4));
  expect(holds(cover, at(4, 2, 3, 1))).toBe(true);
  expect(holds(form(sp(4, 'total 5 mode "cover"'), row(4)), at(4, 2, 3, 1))).toBe(false);
  const partition = form(sp(4, 'total 5 mode "partition" loop true'), row(4));
  expect(holds(partition, at(3, 3, 2, 2))).toBe(true);
  expect(holds(partition, at(2, 2, 3, 3))).toBe(true);
  expect(holds(partition, at(3, 2, 3, 2))).toBe(true);
  expect(holds(partition, at(2, 3, 3, 3))).toBe(false);
  expect(holds(form(sp(4, 'total 5 mode "partition"'), row(4)), at(3, 2, 2, 3))).toBe(true);
  expect(holds(form(sp(4, 'total 5 mode "partition"'), row(4)), at(3, 3, 2, 2))).toBe(false);
  // The whole closed line is one interval when its cells add up to the total.
  expect(holds(form(sp(4, 'total 6 mode "partition" loop true'), row(4)), at(1, 1, 2, 2))).toBe(true);
});

test("direction and the start of a closed line do not matter", () => {
  const board = row(4);
  equal(sp(4, 'total 5 mode "cover"'), `sum-partition r1c4-r1c3-r1c2-r1c1 total 5 mode "cover"`, board);
  equal(sp(4, 'total 5 mode "partition"'), `sum-partition r1c4-r1c3-r1c2-r1c1 total 5 mode "partition"`, board);
  equal(sp(4, 'total 5 mode "partition" loop true'), `sum-partition r1c3-r1c4-r1c1-r1c2 total 5 mode "partition" loop true`, board);
  equal(sp(4, 'total 5 mode "cover" loop true'), `sum-partition r1c2-r1c3-r1c4-r1c1 total 5 mode "cover" loop true`, board);
  equal(sp(4, 'total 5 mode "cover" repeats true'), sp(4, 'total 5 mode "cover"'), board);
  equal(sp(4, 'total 5 mode "cover" loop false'), sp(4, 'total 5 mode "cover"'), board);
});

test("totals the digits cannot reach, and totals that are not whole numbers, are never met", () => {
  expect(form(sp(3, 'total 40 mode "cover"'), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(sp(3, 'total 2.5 mode "partition"'), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(sp(3, 'total 0 mode "cover"'), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(sp(2, 'total 8 mode "partition" repeats false'), row(2, [1, 2, 3, 4]))).toEqual({ op: "Any", children: [] });
});

test("a single cell is an interval of its own", () => {
  const f = form(sp(1, 'total 3 mode "cover"'), row(1));
  expect(holds(f, at(3))).toBe(true);
  expect(holds(f, at(4))).toBe(false);
  equal(sp(1, 'total 3 mode "cover"'), sp(1, 'total 3 mode "partition"'), row(1));
  equal(sp(1, 'total 3 mode "cover"'), sp(1, 'total 3 mode "cover" loop true'), row(1));
});

test("a line that lists a cell twice, an unsafe total and an oversized expansion stay uncovered", () => {
  for (const text of [`sum-partition r1c1-r1c2-r1c1 total 5 mode "cover"`, sp(3, 'total 9007199254740993 mode "cover"')]) {
    const r = nf(text, row(3));
    expect(r.status).toBe("partial");
    expect(r.normalForm!.coverage.find(x => x.kind === "sum-partition")).toMatchObject({ status: "unsupported" });
  }
  const long = nf(sp(30, 'total 15 mode "partition" loop true'), row(30));
  expect(long.normalForm!.coverage.find(x => x.kind === "sum-partition")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("exceeds") });
});

test("bad parameters are invalid", () => {
  for (const text of [sp(3, 'total 5 mode "sideways"'), sp(3, 'total "five" mode "cover"'), sp(3, 'total 5 mode "cover" repeats 2')]) expect(nf(text, row(3)).status).toBe("invalid");
});

test("near misses compare as different", () => {
  const board = row(4);
  const base = sp(4, 'total 5 mode "cover"');
  equal(base, sp(4, 'total 5 mode "cover"'), board);
  differs(base, sp(4, 'total 6 mode "cover"'), board);
  differs(base, sp(4, 'total 5 mode "partition"'), board);
  differs(base, sp(4, 'total 5 mode "cover" repeats false'), board);
  differs(base, sp(4, 'total 5 mode "cover" loop true'), board);
  differs(sp(4, 'total 5 mode "partition"'), sp(4, 'total 5 mode "partition" loop true'), board);
  differs(base, `not ${base}`, board);
  differs(base, `sum-partition r1c1-r1c3-r1c2-r1c4 total 5 mode "cover"`, board);
  differs(sp(4, 'total 5 mode "partition"'), `x: ${sp(2, 'total 5 mode "partition"')}\ny: sum-partition r1c3-r1c4 total 5 mode "partition"`, board);
});

test("the channel changes nothing while effective values are the printed digits", () => {
  equal(sp(3, 'total 5 mode "cover" channel "V"'), sp(3, 'total 5 mode "cover"'), row(3));
  equal(sp(3, 'total 4 mode "partition" channel "V" repeats false'), sp(3, 'total 4 mode "partition" repeats false'), row(3));
});

test("a value channel stays uncovered when effective values are unresolved", () => {
  const unresolved = nf(`${sp(3, 'total 5 mode "cover" channel "V"')}\nvalue-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`, row(3));
  expect(unresolved.normalForm?.coverage.find(x => x.kind === "sum-partition")?.status).toBe("unsupported");
});


test("the lowered formula and the public evaluator agree on open covers", () => {
  expect(differential(KINDS, 1, 4, [1, 2], [sp(4, 'total 3 mode "cover"'), sp(4, 'total 3 mode "cover" repeats false')])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on open partitions", () => {
  expect(differential(KINDS, 1, 5, [1, 2], [sp(5, 'total 3 mode "partition"'), sp(5, 'total 3 mode "partition" repeats false')])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on short open lines", () => {
  const modes = ['mode "cover"', 'mode "partition"', 'mode "cover" repeats false', 'mode "partition" repeats false'];
  expect(differential(KINDS, 1, 2, [1, 2, 3, 4], modes.map(m => sp(2, `total 5 ${m}`)))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 5, [1, 2], ['total 3 mode "cover"', 'total 4 mode "partition"'].map(m => sp(5, m)))).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on closed covers", () => {
  expect(differential(KINDS, 1, 4, [1, 2], [sp(4, 'total 3 mode "cover" loop true'), sp(4, 'total 3 mode "cover" loop true repeats false')])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on closed partitions", () => {
  expect(differential(KINDS, 1, 4, [1, 2], [sp(4, 'total 3 mode "partition" loop true'), sp(4, 'total 3 mode "partition" loop true repeats false')])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on short closed lines", () => {
  const modes = ['mode "cover" loop true', 'mode "partition" loop true', 'mode "partition" loop true repeats false'];
  expect(differential(KINDS, 1, 3, [1, 2, 3, 4], modes.map(m => sp(3, `total 6 ${m}`)))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 2, [1, 2, 3], modes.map(m => sp(2, `total 4 ${m}`)))).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on unusual alphabets and totals", () => {
  expect(differential(KINDS, 1, 3, [-2, 0, 3], ['total 1 mode "cover"', 'total 3 mode "partition"', 'total 0 mode "partition" loop true'].map(m => sp(3, m)))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 3, [-2, 0, 3], ['total -2 mode "cover" repeats false', 'total 2.5 mode "cover"'].map(m => sp(3, m)))).toBeGreaterThanOrEqual(0);
});

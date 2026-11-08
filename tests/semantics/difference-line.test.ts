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

const dl = (n: number, params: string) => `difference-line ${line(n)} ${params}`;
const KINDS = ["difference-line", "summit"];

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(dl(3, 'mode "same"'), row(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(dl(3, 'mode "same"'))}` });
}, 30000);

test("at-least and at-most bound every edge by the gap", () => {
  const atLeast = form(dl(3, 'mode "at-least" gap 3'), row(3));
  expect(holds(atLeast, at(1, 4, 8))).toBe(true);
  expect(holds(atLeast, at(1, 4, 6))).toBe(false);
  const atMost = form(dl(3, 'mode "at-most" gap 2'), row(3));
  expect(holds(atMost, at(1, 3, 2))).toBe(true);
  expect(holds(atMost, at(1, 4, 3))).toBe(false);
});

test("a real gap is rounded to the integer bound it implies", () => {
  expect(holds(form(dl(2, 'mode "at-least" gap 2.5'), row(2)), at(1, 3))).toBe(false);
  expect(holds(form(dl(2, 'mode "at-least" gap 2.5'), row(2)), at(1, 4))).toBe(true);
  expect(holds(form(dl(2, 'mode "at-most" gap 2.5'), row(2)), at(1, 3))).toBe(true);
  expect(holds(form(dl(2, 'mode "at-most" gap 2.5'), row(2)), at(1, 4))).toBe(false);
  equal(dl(2, 'mode "at-least" gap 2.5'), dl(2, 'mode "at-least" gap 3'), row(2));
  equal(dl(2, 'mode "at-most" gap 2.5'), dl(2, 'mode "at-most" gap 2'), row(2));
});

test("same needs one common absolute difference, which any diamond cell equals", () => {
  const same = form(dl(3, 'mode "same"'), row(3));
  expect(holds(same, at(2, 4, 2))).toBe(true);
  expect(holds(same, at(2, 4, 6))).toBe(true);
  expect(holds(same, at(2, 4, 7))).toBe(false);
  const diamond = form(`${dl(3, 'mode "same"')} diamonds ["r1c1"]`, row(3));
  expect(holds(diamond, at(2, 4, 6))).toBe(true);
  expect(holds(diamond, at(3, 5, 7))).toBe(false);
  expect(holds(diamond, at(2, 3, 4))).toBe(false);
});

test("different needs every pair of distinct edges to have different absolute differences", () => {
  const different = form(dl(3, 'mode "different"'), row(3));
  expect(holds(different, at(2, 4, 7))).toBe(true);
  expect(holds(different, at(2, 4, 2))).toBe(false);
  expect(holds(different, at(2, 4, 6))).toBe(false);
  // The edge between a repeated pair of cells is one edge, so reading it back is allowed.
  expect(holds(form(`difference-line r1c1-r1c2-r1c1 mode "different"`, row(2)), at(3, 5))).toBe(true);
  expect(holds(form(`difference-line r1c1-r1c2-r1c1-r1c3 mode "different"`, row(3)), at(3, 5, 5))).toBe(false);
  expect(holds(form(`difference-line r1c1-r1c2-r1c1-r1c3 mode "different"`, row(3)), at(3, 5, 9))).toBe(true);
});

test("signed-step repeats one signed step along the ordered line", () => {
  const step = form(dl(3, 'mode "signed-step"'), row(3));
  expect(holds(step, at(2, 4, 6))).toBe(true);
  expect(holds(step, at(6, 4, 2))).toBe(true);
  expect(holds(step, at(3, 3, 3))).toBe(true);
  expect(holds(step, at(2, 4, 2))).toBe(false);
  expect(holds(form(dl(3, 'mode "signed-step" loop true'), row(3)), at(2, 4, 6))).toBe(false);
  expect(holds(form(dl(3, 'mode "signed-step" loop true'), row(3)), at(4, 4, 4))).toBe(true);
});

test("turning needs unequal neighbours that change direction only at a turn digit", () => {
  const turning = form(dl(3, 'mode "turning" turnDigits [9]'), row(3));
  expect(holds(turning, at(2, 9, 3))).toBe(true);
  expect(holds(turning, at(2, 8, 3))).toBe(false);
  expect(holds(turning, at(2, 3, 5))).toBe(true);
  expect(holds(turning, at(2, 2, 5))).toBe(false);
  expect(holds(turning, at(9, 3, 9))).toBe(false);
  const none = form(dl(3, 'mode "turning"'), row(3));
  expect(holds(none, at(2, 3, 5))).toBe(true);
  expect(holds(none, at(2, 9, 3))).toBe(false);
});

test("summit is the turning difference line with turn digits 1 and 9", () => {
  equal(`summit ${line(4)} loop false`, dl(4, 'mode "turning" turnDigits [1,9]'), row(4));
  equal(`summit ${line(4)} loop true`, dl(4, 'mode "turning" turnDigits [9,1,9] loop true'), row(4));
  differs(`summit ${line(4)} loop false`, dl(4, 'mode "turning" turnDigits [1,8]'), row(4));
  differs(`summit ${line(4)} loop false`, dl(4, 'mode "turning" turnDigits [9]'), row(4));
});

test("the gap and the diamonds do not matter in turning mode", () => {
  equal(dl(3, 'mode "turning" turnDigits [9]'), dl(3, 'mode "turning" turnDigits [9] gap 4 diamonds ["r1c2"]'), row(3));
});

test("a turn digit outside the alphabet turns nothing", () => {
  equal(dl(3, 'mode "turning" turnDigits [12]'), dl(3, 'mode "turning"'), row(3));
  equal(dl(3, 'mode "turning" turnDigits [3,12]'), dl(3, 'mode "turning" turnDigits [3]'), row(3));
});

test("a closed line adds the last-to-first edge, and a one-cell or one-edge line is treated by its windows", () => {
  const closed = form(dl(3, 'mode "at-least" gap 2 loop true'), row(3));
  expect(holds(closed, at(1, 3, 5))).toBe(true);
  expect(holds(closed, at(1, 3, 2))).toBe(false);
  equal(dl(3, 'mode "same" loop true'), `difference-line ${line(3)}-r1c1 mode "same"`, row(3));
  equal(dl(3, 'mode "at-most" gap 2 loop true'), `difference-line r1c2-r1c3-r1c1 mode "at-most" gap 2 loop true`, row(3));
  // A closed line of two cells has its one edge twice.
  equal(dl(2, 'mode "different" loop true'), dl(2, 'mode "different"'), row(2));
  equal(dl(2, 'mode "same" loop true'), dl(2, 'mode "same"'), row(2));
  // No edge means the comparing modes fail and the bounds hold.
  expect(form(`difference-line r1c1 mode "same"`, row(1))).toEqual({ op: "Any", children: [] });
  expect(form(`difference-line r1c1 mode "signed-step"`, row(1))).toEqual({ op: "Any", children: [] });
  expect(form(`difference-line r1c1 mode "different"`, row(1))).toEqual({ op: "Any", children: [] });
  expect(form(`difference-line r1c1 mode "at-least" gap 3`, row(1))).toEqual({ op: "All", children: [] });
  expect(form(`difference-line r1c1 mode "turning"`, row(1))).toEqual({ op: "All", children: [] });
  expect(form(`difference-line r1c1-r1c2 mode "turning" loop true`, row(2))).toEqual(form(`difference-line r1c1-r1c2 mode "turning"`, row(2)));
});

test("diamond cells are refused outside same and make the rule false there", () => {
  for (const mode of ["different", "signed-step", "at-least", "at-most"]) {
    expect(form(`${dl(3, `mode "${mode}"`)} diamonds ["r1c1"]`, row(3))).toEqual({ op: "Any", children: [] });
  }
});

test("a network of explicit edges stays uncovered with a reason", () => {
  const r = nf(`difference-line line [] edges [["r1c1","r1c2"],["r1c2","r1c3"]] mode "same"`, row(3));
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage.find(x => x.kind === "difference-line")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("edges") });
});

test("bad parameters are invalid", () => {
  for (const text of [dl(3, 'mode "sideways"'), dl(3, 'mode "at-least" gap "wide"'), dl(3, 'mode "same" diamonds ["r9c9"]'), dl(3, 'mode "turning" turnDigits ["x"]')]) {
    expect(nf(text, row(3)).status).toBe("invalid");
  }
});

test("near misses compare as different", () => {
  const board = row(3);
  const base = dl(3, 'mode "at-least" gap 3');
  equal(base, dl(3, 'mode "at-least" gap 3'), board);
  differs(base, dl(3, 'mode "at-least" gap 4'), board);
  differs(base, dl(3, 'mode "at-most" gap 3'), board);
  differs(base, dl(3, 'mode "at-least" gap 3 loop true'), board);
  differs(base, `not ${base}`, board);
  differs(dl(3, 'mode "same"'), dl(3, 'mode "different"'), board);
  differs(dl(3, 'mode "same"'), dl(3, 'mode "signed-step"'), board);
  differs(dl(3, 'mode "same"'), `${dl(3, 'mode "same"')} diamonds ["r1c1"]`, board);
  differs(`${dl(3, 'mode "same"')} diamonds ["r1c1"]`, `${dl(3, 'mode "same"')} diamonds ["r1c2"]`, board);
  differs(dl(3, 'mode "turning" turnDigits [9]'), dl(3, 'mode "turning" turnDigits [1]'), board);
  differs(dl(3, 'mode "same"'), `x: ${dl(2, 'mode "same"')}\ny: difference-line r1c2-r1c3 mode "same"`, board);
});

test("the channel changes nothing while effective values are the printed digits, and it matches the whispers kinds", () => {
  const board = row(3);
  equal(dl(3, 'mode "same" channel "V"'), dl(3, 'mode "same"'), board);
  equal(dl(3, 'mode "at-least" gap 5 channel "V"'), `german-whispers ${line(3)} loop false`, board);
  equal(dl(3, 'mode "at-least" gap 4 channel "V"'), `dutch-whispers ${line(3)} loop false`, board);
});

test("a value channel stays uncovered when effective values are unresolved", () => {
  const unresolved = nf(`${dl(3, 'mode "same" channel "V"')}\nvalue-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`, row(3));
  const entry = unresolved.normalForm?.coverage.find(x => x.kind === "difference-line");
  expect(entry?.status).toBe("unsupported");
});


test("the lowered formula and the public evaluator agree on open lines", () => {
  const modes = ['mode "same"', 'mode "different"', 'mode "signed-step"', 'mode "at-least" gap 2', 'mode "at-most" gap 1', 'mode "turning" turnDigits [3]', 'mode "turning"'];
  expect(differential(KINDS, 1, 3, [1, 2, 3, 4], modes.map(m => dl(3, m)))).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on longer and shorter open lines", () => {
  const modes = ['mode "same"', 'mode "different"', 'mode "signed-step"', 'mode "at-least" gap 2', 'mode "at-most" gap 1', 'mode "turning" turnDigits [3]'];
  expect(differential(KINDS, 1, 4, [1, 2, 3], modes.map(m => dl(4, m)))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 2, [1, 2, 3, 5], modes.map(m => dl(2, m)))).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on diamonds and repeated cells", () => {
  expect(differential(KINDS, 1, 3, [1, 2, 3, 4], [`${dl(3, 'mode "same"')} diamonds ["r1c1"]`, `${dl(3, 'mode "same"')} diamonds ["r1c2","r1c3"]`, `${dl(3, 'mode "different"')} diamonds ["r1c1"]`, `${dl(3, 'mode "at-least" gap 1')} diamonds ["r1c1"]`])).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 3, [1, 2, 3], ['difference-line r1c1-r1c2-r1c1-r1c3 mode "different"', 'difference-line r1c1-r1c2-r1c1-r1c3 mode "same"', 'difference-line r1c1-r1c2-r1c1-r1c3 mode "signed-step"', 'difference-line r1c1-r1c2-r1c1-r1c3 mode "turning" turnDigits [2]'])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on closed lines and the summit", () => {
  const modes = ['mode "same" loop true', 'mode "different" loop true', 'mode "signed-step" loop true', 'mode "at-least" gap 2 loop true', 'mode "turning" turnDigits [1,3] loop true'];
  expect(differential(KINDS, 1, 3, [1, 2, 3, 4], modes.map(m => dl(3, m)))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 2, [1, 2, 3], modes.map(m => dl(2, m)))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 4, [1, 2, 3], [dl(4, 'mode "turning" turnDigits [1,9]'), dl(4, 'mode "turning" turnDigits [1,9] loop true')])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree with digits outside a consecutive run", () => {
  expect(differential(KINDS, 1, 3, [-1, 0, 2, 5], [dl(3, 'mode "same"'), dl(3, 'mode "different"'), dl(3, 'mode "signed-step"'), dl(3, 'mode "at-least" gap 3'), dl(3, 'mode "turning" turnDigits [0]')])).toBeGreaterThan(0);
});

test("a closed line of one cell has no edge, as an open line has none", () => {
  expect(form('difference-line r1c1 mode "at-least" gap 3 loop true', row(1))).toEqual({ op: "All", children: [] });
  expect(form('difference-line r1c1 mode "at-least" gap 3', row(1))).toEqual({ op: "All", children: [] });
  expect(form('difference-line r1c1 mode "at-most" gap 0 loop true', row(1))).toEqual({ op: "All", children: [] });
  expect(form('difference-line r1c1 mode "turning" loop true', row(1))).toEqual({ op: "All", children: [] });
  expect(form('difference-line r1c1 mode "same" loop true', row(1))).toEqual({ op: "Any", children: [] });
});

test("the lowered formula and the public evaluator agree on the summit's turn digits 1 and 9", () => {
  const summit = [dl(3, 'mode "turning" turnDigits [1,9]'), dl(3, 'mode "turning" turnDigits [1,9] loop true')];
  expect(differential(KINDS, 1, 3, [1, 5, 9], summit)).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 4, [1, 5, 9], [summit[0]])).toBeGreaterThan(0);
});

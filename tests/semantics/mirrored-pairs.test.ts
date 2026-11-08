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
 * so every entry here states channel "V": the evaluator then follows the published definition. Each assignment is compared three ways:
 * the evaluator with values equal to the digits against the raw lowering and the normal form, and the evaluator with one cell's value
 * moved to another symbol (a different cell for each assignment) against the raw lowering, which must follow the effective values.
 */
function differential(kinds: string[], rows: number, cols: number, symbols: number[], entries: string[], active = gridCells(rows, cols)): number {
  let seen = 0, split = 0;
  const board = boardOf(rows, cols, symbols, active);
  for (const text of entries) {
    expect(text).toContain('channel "V"');
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

const mp = (n: number, params: string) => `mirrored-pairs ${line(n)} ${params}`;
const half = (params: string) => `mirrored-pairs geometry "rotation" ${params}`;
const cellsOf = (rows: number, cols: number, ...v: number[]) => Object.fromEntries(v.map((x, i) => [gridCells(rows, cols)[i], x]));
const grid = (board: BoardContext) => board;

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(mp(3, 'mode "equal"'), row(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(mp(3, 'mode "equal"'))}` });
}, 30000);

test("equal pairs the opposite positions of the line", () => {
  const f = form(mp(5, 'mode "equal"'), row(5));
  expect(holds(f, at(1, 2, 3, 2, 1))).toBe(true);
  expect(holds(f, at(1, 2, 3, 2, 2))).toBe(false);
  expect(holds(f, at(4, 1, 7, 1, 4))).toBe(true);
  expect(holds(form(mp(4, 'mode "equal"'), row(4)), at(1, 2, 3, 1))).toBe(false);
  expect(holds(form(mp(4, 'mode "equal"'), row(4)), at(1, 2, 2, 1))).toBe(true);
});

test("equal-sum gives every pair one common sum, and the centre follows the centre setting", () => {
  const f = form(mp(4, 'mode "equal-sum"'), row(4));
  expect(holds(f, at(1, 2, 3, 4))).toBe(true);
  expect(holds(f, at(1, 4, 3, 3))).toBe(false);
  const odd = mp(5, 'mode "equal-sum"');
  expect(holds(form(odd, row(5)), at(1, 2, 9, 3, 4))).toBe(true);
  expect(holds(form(`${odd} centre "when-odd"`, row(5)), at(1, 2, 5, 3, 4))).toBe(true);
  expect(holds(form(`${odd} centre "when-odd"`, row(5)), at(1, 2, 9, 3, 4))).toBe(false);
  expect(holds(form(`${mp(4, 'mode "equal-sum"')} centre "when-odd"`, row(4)), at(1, 2, 3, 4))).toBe(true);
  expect(holds(form(`${mp(4, 'mode "equal-sum"')} centre "required"`, row(4)), at(1, 2, 3, 4))).toBe(false);
  expect(holds(form(`${odd} centre "required"`, row(5)), at(1, 2, 5, 3, 4))).toBe(true);
  // The equal mode does not read the centre setting.
  equal(mp(4, 'mode "equal" centre "required"'), mp(4, 'mode "equal"'), row(4));
});

test("allowed-sum limits every pair's sum to the listed totals", () => {
  const f = form(mp(4, 'mode "allowed-sum" sums [5,7]'), row(4));
  expect(holds(f, at(1, 3, 4, 4))).toBe(true);
  expect(holds(f, at(2, 3, 4, 5))).toBe(true);
  expect(holds(f, at(2, 3, 4, 6))).toBe(false);
  expect(holds(form(mp(4, 'mode "allowed-sum"'), row(4)), at(1, 3, 4, 4))).toBe(false);
  expect(holds(form(`${mp(5, 'mode "allowed-sum" sums [5,7]')} centre "when-odd"`, row(5)), at(1, 3, 5, 4, 4))).toBe(false);
  expect(holds(form(`${mp(5, 'mode "allowed-sum" sums [5]')} centre "when-odd"`, row(5)), at(1, 3, 5, 2, 4))).toBe(true);
  equal(mp(4, 'mode "allowed-sum" sums [5,7,5,7.5]'), mp(4, 'mode "allowed-sum" sums [7,5]'), row(4));
});

test("equal-difference needs an odd line whose mirrored pairs differ by the centre value", () => {
  const f = form(mp(5, 'mode "equal-difference"'), row(5));
  expect(holds(f, at(2, 1, 5, 6, 7))).toBe(true);
  expect(holds(f, at(7, 2, 4, 6, 3))).toBe(true);
  expect(holds(f, at(2, 1, 5, 6, 6))).toBe(false);
  expect(holds(form(mp(1, 'mode "equal-difference"'), row(1)), at(4))).toBe(true);
  expect(form(mp(4, 'mode "equal-difference"'), row(4))).toEqual({ op: "Any", children: [] });
  expect(form(half('mode "equal-difference"'), boardOf(2, 2, [1, 2]))).toEqual({ op: "Any", children: [] });
  equal(mp(3, 'mode "equal-difference" centre "ignore"'), mp(3, 'mode "equal-difference" centre "required"'), row(3));
});

test("ziffer-lines is the equal-difference mode", () => {
  equal(`ziffer-lines ${line(5)}`, mp(5, 'mode "equal-difference"'), row(5));
  equal(`ziffer-lines ${line(5)}`, `ziffer-lines r1c5-r1c4-r1c3-r1c2-r1c1`, row(5));
  equal(`ziffer-lines ${line(3)}`, mp(3, 'mode "equal-difference" channel "D"'), row(3));
  expect(form(`ziffer-lines ${line(4)}`, row(4))).toEqual({ op: "Any", children: [] });
  differs(`ziffer-lines ${line(3)}`, mp(3, 'mode "equal"'), row(3));
  const f = form(`ziffer-lines ${line(3)}`, row(3));
  expect(holds(f, at(2, 5, 7))).toBe(true);
  expect(holds(f, at(2, 5, 6))).toBe(false);
});

test("a half-turned board pairs each cell with the cell opposite it", () => {
  const board = boardOf(2, 3, [1, 2, 3]);
  const sums = form(half('mode "allowed-sum" sums [4]'), board);
  expect(holds(sums, cellsOf(2, 3, 1, 2, 3, 1, 2, 3))).toBe(true);
  expect(holds(sums, cellsOf(2, 3, 1, 2, 3, 1, 2, 2))).toBe(false);
  const equalPairs = form(half('mode "equal"'), board);
  expect(holds(equalPairs, cellsOf(2, 3, 1, 2, 3, 3, 2, 1))).toBe(true);
  expect(holds(equalPairs, cellsOf(2, 3, 1, 2, 3, 1, 2, 3))).toBe(false);
  // The centre cell of an odd board pairs with itself.
  const centre = form(half('mode "allowed-sum" sums [4]'), boardOf(1, 3, [1, 2, 3]));
  expect(holds(centre, at(1, 2, 3))).toBe(true);
  expect(holds(centre, at(1, 3, 3))).toBe(false);
  expect(holds(form(half('mode "allowed-sum" sums [5]'), boardOf(1, 3, [1, 2, 3])), at(2, 2, 3))).toBe(false);
});

test("rotational-sums is the allowed-sum mode on the half-turned board", () => {
  const board = boardOf(2, 3, [1, 2, 3]);
  equal("rotational-sums sums [4]", half('mode "allowed-sum" sums [4]'), board);
  equal("rotational-sums sums [3,4]", half('mode "allowed-sum" sums [4,3,3]'), board);
  differs("rotational-sums sums [4]", "rotational-sums sums [3]", board);
  differs("rotational-sums sums [4]", half('mode "equal"'), board);
  expect(nf("rotational-sums", board).status).toBe("invalid");
});

test("a board that is not closed under a half turn stays uncovered", () => {
  const board = boardOf(2, 2, [1, 2, 3], ["r1c1", "r1c2", "r2c2"]);
  for (const text of [half('mode "equal"'), "rotational-sums sums [4]"]) {
    const r = nf(text, board);
    expect(r.status).toBe("partial");
    expect(r.normalForm!.coverage.find(x => x.kind === "mirrored-pairs" || x.kind === "rotational-sums")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("half-turn") });
  }
});

test("the palindrome and the zipper compare equal to the matching mirrored pairs", () => {
  equal(`palindrome ${line(5)}`, mp(5, 'mode "equal" channel "V"'), row(5));
  equal(`palindrome ${line(5)}`, `mirrored-pairs r1c5-r1c4-r1c3-r1c2-r1c1 mode "equal" channel "V"`, row(5));
  equal(`zipper ${line(5)} centre "when-odd"`, mp(5, 'mode "equal-sum" centre "when-odd"'), row(5));
  equal(`zipper ${line(4)} centre "ignore"`, mp(4, 'mode "equal-sum"'), row(4));
  equal(`zipper ${line(4)} centre "required"`, mp(4, 'mode "equal-sum" centre "required"'), row(4));
});

test("bad parameters are invalid", () => {
  for (const text of [mp(3, 'mode "mirror"'), mp(3, 'geometry "diagonal"'), mp(3, 'mode "allowed-sum" sums ["x"]'), mp(3, 'centre "middle"'), mp(3, 'channel "W"')]) expect(nf(text, row(3)).status).toBe("invalid");
  expect(nf(`ziffer-lines ${line(3)} mode "equal"`, row(3)).status).toBe("invalid");
  expect(nf(`rotational-sums ${line(3)} sums [4]`, row(3)).status).toBe("invalid");
});

test("near misses compare as different", () => {
  const board = row(5);
  const base = mp(5, 'mode "equal-sum"');
  equal(base, mp(5, 'mode "equal-sum"'), board);
  differs(base, mp(5, 'mode "equal-sum" centre "when-odd"'), board);
  differs(base, mp(5, 'mode "equal"'), board);
  differs(base, mp(4, 'mode "equal-sum"'), board);
  differs(base, `mirrored-pairs r1c1-r1c3-r1c2-r1c4-r1c5 mode "equal-sum"`, board);
  differs(base, `not ${base}`, board);
  differs(mp(5, 'mode "allowed-sum" sums [5]'), mp(5, 'mode "allowed-sum" sums [6]'), board);
  differs(mp(5, 'mode "allowed-sum" sums [5]'), mp(5, 'mode "equal-sum"'), board);
  differs(mp(5, 'mode "equal-difference"'), mp(5, 'mode "equal-sum"'), board);
});

test("the channel changes nothing while effective values are the printed digits", () => {
  equal(mp(4, 'mode "equal-sum" channel "V"'), mp(4, 'mode "equal-sum"'), row(4));
  equal(mp(3, 'mode "equal-difference" channel "V"'), mp(3, 'mode "equal-difference"'), row(3));
  equal(mp(4, 'mode "allowed-sum" sums [5] channel "V"'), mp(4, 'mode "allowed-sum" sums [5]'), row(4));
});

test("a value channel stays uncovered when effective values are unresolved", () => {
  const unresolved = nf(`${mp(3, 'mode "equal" channel "V"')}\nvalue-modifier factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`, row(3));
  expect(unresolved.normalForm?.coverage.find(x => x.kind === "mirrored-pairs")?.status).toBe("unsupported");
});

const V = (text: string) => `${text} channel "V"`;
const KINDS = ["mirrored-pairs", "rotational-sums", "ziffer-lines"];

test("the lowered formula and the public evaluator agree on lines", () => {
  const modes = ['mode "equal"', 'mode "equal-sum"', 'mode "equal-sum" centre "when-odd"', 'mode "equal-sum" centre "required"', 'mode "allowed-sum" sums [3,5]', 'mode "allowed-sum" sums [4] centre "when-odd"', 'mode "allowed-sum" sums [4] centre "required"', 'mode "equal-difference"'];
  expect(differential(KINDS, 1, 5, [1, 2, 3], modes.map(m => V(mp(5, m))))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 4, [1, 2, 3], modes.map(m => V(mp(4, m))))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 3, [0, 1, 3, 4], modes.map(m => V(mp(3, m))))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 2, [1, 2], modes.map(m => V(mp(2, m))))).toBeGreaterThan(0);
  // A one-cell line has no pair to compare.
  for (const m of modes.filter(x => !x.includes("required"))) expect(form(mp(1, m), row(1))).toEqual({ op: "All", children: [] });
  expect(differential(KINDS, 1, 3, [-1, 0, 2], [V(mp(3, 'mode "allowed-sum" sums [1,2]')), V(mp(3, 'mode "equal-sum" centre "when-odd"')), V(mp(3, 'mode "equal-difference"'))])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on repeated cells", () => {
  const repeated = ["mirrored-pairs r1c1-r1c2-r1c1 mode \"equal-sum\" centre \"when-odd\"", "mirrored-pairs r1c1-r1c2-r1c3-r1c1 mode \"equal-sum\"", "mirrored-pairs r1c1-r1c2-r1c3-r1c2-r1c1 mode \"equal-difference\"", "mirrored-pairs r1c1-r1c2-r1c2-r1c3 mode \"allowed-sum\" sums [2,3]", "mirrored-pairs r1c1-r1c1-r1c2 mode \"equal-difference\"", "mirrored-pairs r1c1-r1c2-r1c1 mode \"equal-difference\""];
  expect(differential(KINDS, 1, 3, [1, 2, 3], repeated.map(V))).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on the half-turned board", () => {
  const rotation = [half('mode "equal"'), half('mode "allowed-sum" sums [3]'), half('mode "allowed-sum" sums [2,4]'), half('mode "equal-sum" sums [3]'), half('mode "allowed-sum"')];
  expect(differential(KINDS, 2, 3, [1, 2], rotation.map(V))).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 3, [1, 2, 3], rotation.map(V))).toBeGreaterThan(0);
  expect(differential(KINDS, 2, 2, [0, 1, 2], rotation.map(V))).toBeGreaterThan(0);
  expect(differential(KINDS, 3, 1, [1, 2], rotation.map(V))).toBeGreaterThan(0);
});

test("the named rules follow the block they bind, on the published definition", () => {
  // Ziffer lines and rotational sums read printed digits only, so they are checked through the block with their settings.
  equal("ziffer-lines r1c1-r1c2-r1c3", mp(3, 'mode "equal-difference" channel "D"'), row(3));
  equal("rotational-sums sums [3,4]", half('mode "allowed-sum" sums [3,4] channel "D"'), boardOf(2, 3, [1, 2, 3]));
});

test("the half turn is read numerically on boards of ten or more columns or rows", () => {
  // Text order puts r10 before r2 and c10 before c2, so a text-sorted partner would be wrong from the second row or column on.
  const symbols = Array.from({ length: 12 }, (_, i) => i + 1);
  for (const [rows, cols] of [[1, 12], [12, 1]] as const) {
    const cells = gridCells(rows, cols), board = boardOf(rows, cols, symbols);
    const named = nf("rotational-sums sums [13]", board), block = nf(half('mode "allowed-sum" sums [13]'), board);
    expect(named.issues).toEqual([]);
    expect(compare(named, block).status).toBe("equivalent");
    const twin = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], regions: [[${cells.join(", ")}]]}\n---${body(V(half('mode "allowed-sum" sums [13]')))}` });
    const rule = twin.value!.rules[0];
    let state = 7, holding = 0, broken = 0;
    for (let sample = 0; sample < 120; sample++) {
      // Opposite cells add up to 13, with a few cells moved to another symbol so that both verdicts occur.
      const digits: Record<string, number> = {};
      cells.forEach((c, i) => { digits[c] = i < cells.length / 2 ? 1 + (i * 5 + sample) % 12 : 13 - digits[cells[cells.length - 1 - i]]; });
      // The first samples move each cell in turn, so every pair of opposite cells is tested; later ones move a few at random.
      if (sample < cells.length) digits[cells[sample]] = 1 + digits[cells[sample]] % 12;
      else for (const c of cells) if ((state = (state * 1103515245 + 12345) % 2147483648) % 9 === 0) digits[c] = 1 + state % 12;
      const values = { ...digits, [cells[sample % cells.length]]: 1 + (digits[cells[sample % cells.length]] % 12) };
      const expected = evaluate(rule, { digits, values: digits }).status === "holds";
      expect(holds(named.normalForm!.solution, digits)).toBe(expected);
      expect(holds(rule.finite!, digits, digits)).toBe(expected);
      expect(holds(rule.finite!, digits, values)).toBe(evaluate(rule, { digits, values }).status === "holds");
      if (expected) holding++; else broken++;
    }

    expect(holding).toBeGreaterThan(0);
    expect(broken).toBeGreaterThan(0);
  }
});

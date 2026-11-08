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
const cp = (n: number, params = "") => `class-pattern ${line(n)}${params ? ` ${params}` : ""}`;
const KINDS = ["class-pattern", "modular", "entropic", "parity-line", "window-classes", "same-class", "parity-cells", "odd-even-cells"];

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(cp(3), row(3));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(cp(3))}` });
}, 30000);

test("distinct windows need different classes in every window of the length", () => {
  const f = form(cp(4, "modulus 3 length 3"), row(4));
  expect(holds(f, at(1, 2, 3, 4))).toBe(true);
  expect(holds(f, at(1, 2, 4, 3))).toBe(false);
  expect(holds(f, at(1, 2, 3, 3))).toBe(false);
  expect(holds(f, at(1, 5, 9, 4))).toBe(true);
  // A shorter line than the window has none; an open two-cell line is compared whole.
  expect(form(cp(2, "modulus 3 length 4"), row(2))).not.toEqual({ op: "All", children: [] });
  expect(form(cp(3, "modulus 3 length 4"), row(3))).toEqual({ op: "All", children: [] });
  expect(holds(form(cp(2, "length 5"), row(2)), at(1, 4))).toBe(false);
  expect(holds(form(cp(2, "length 5"), row(2)), at(1, 2))).toBe(true);
});

test("a closed line wraps its windows and needs as many cells as a window", () => {
  const closed = form(cp(4, "modulus 3 length 3 loop true"), row(4));
  expect(holds(closed, at(1, 2, 3, 2))).toBe(false);
  expect(holds(closed, at(1, 2, 3, 5))).toBe(false);
  expect(holds(closed, at(1, 2, 3, 4))).toBe(false);
  expect(holds(form(cp(4, "modulus 4 length 3 loop true"), row(4)), at(1, 2, 3, 4))).toBe(true);
  expect(form(cp(2, "modulus 3 length 3 loop true"), row(2))).toEqual({ op: "All", children: [] });
});

test("same needs one shared class and cover needs every class", () => {
  const same = form(cp(3, 'geometry "cells" mode "same" modulus 2'), row(3));
  expect(holds(same, at(1, 3, 5))).toBe(true);
  expect(holds(same, at(1, 3, 4))).toBe(false);
  const cover = form(cp(3, 'geometry "cells" mode "cover" modulus 3'), row(3));
  expect(holds(cover, at(1, 2, 3))).toBe(true);
  expect(holds(cover, at(1, 4, 7))).toBe(false);
  // A modulus with a class that no digit belongs to can never be covered.
  expect(form(cp(3, 'geometry "cells" mode "cover" modulus 10'), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(cp(2, 'geometry "cells" mode "cover" modulus 2'), row(2, [1, 3, 5]))).toEqual({ op: "Any", children: [] });
  expect(holds(form(cp(2, 'geometry "cells" mode "same" modulus 10'), row(2)), at(3, 3))).toBe(true);
});

test("squares apply to every two-by-two square of the board", () => {
  const board = boardOf(2, 3, [1, 2, 3]);
  const f = form('class-pattern geometry "squares" mode "cover" modulus 2', board);
  expect(holds(f, { r1c1: 1, r1c2: 2, r1c3: 1, r2c1: 2, r2c2: 1, r2c3: 2 })).toBe(true);
  expect(holds(f, { r1c1: 1, r1c2: 1, r1c3: 1, r2c1: 3, r2c2: 1, r2c3: 2 })).toBe(false);
  const inactive = boardOf(2, 2, [1, 2], ["r1c1", "r1c2", "r2c1"]);
  const r = nf('class-pattern geometry "squares" mode "cover" modulus 2', inactive);
  expect(r.normalForm!.coverage.find(x => x.kind === "class-pattern")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("inactive") });
});

test("a fixed class reads the remainder on the stated channel and ignores the other settings", () => {
  const f = form(cp(3, "modulus 3 fixedClass 1"), row(3));
  expect(holds(f, at(1, 4, 7))).toBe(true);
  expect(holds(f, at(1, 4, 8))).toBe(false);
  equal(cp(3, "modulus 3 fixedClass 1"), cp(3, 'modulus 3 fixedClass 1 length 7 mode "cover" geometry "squares" loop true'), row(3));
  expect(form(cp(2, "modulus 2 fixedClass 5"), row(2))).toEqual({ op: "Any", children: [] });
  expect(form(cp(2, "modulus 0 fixedClass 0"), row(2))).toEqual({ op: "Any", children: [] });
  expect(holds(form(cp(2, "modulus 3 fixedClass 2"), row(2, [-1, 0, 1])), at(-1, -1))).toBe(true);
});

test("a modulus below one and a length below two never hold", () => {
  expect(form(cp(3, "modulus 0"), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(cp(3, "length 1"), row(3))).toEqual({ op: "Any", children: [] });
  expect(form(cp(3, 'length 0 geometry "cells"'), row(3))).not.toEqual({ op: "Any", children: [] });
});

test("the named class rules compare equal to the block", () => {
  const board = row(4);
  equal(cp(4, "modulus 3"), `modular ${line(4)} loop false modulus 3`, board);
  equal(cp(4, "modulus 4 loop true"), `modular ${line(4)} loop true modulus 4`, board);
  equal(cp(3, 'classification "entropy"'), `entropic ${line(3)} loop false`, row(3, [1, 2, 3, 4, 5, 6]));
  equal(cp(4, "modulus 2 length 2"), `parity ${line(4)} loop false`, board);
  equal(cp(3, "modulus 2 length 2 loop true"), `parity ${line(3)} loop true`, board);
  const square = boardOf(2, 2, [1, 2, 3]);
  equal('class-pattern geometry "squares" mode "cover" modulus 3', 'window-classes classes "mod3"', square);
  equal('class-pattern geometry "squares" mode "cover" modulus 2', 'window-classes classes "parity"', square);
  equal('class-pattern geometry "squares" mode "cover" classification "entropy"', 'window-classes classes "entropy"', boardOf(2, 2, [1, 2, 3, 4, 5, 6]));
  equal(cp(3, 'geometry "cells" mode "same" modulus 2'), `same-class ${line(3)} classes "parity"`, board);
  equal(cp(3, 'geometry "cells" mode "same" modulus 3'), `same-class ${line(3)} classes "mod3"`, board);
  equal(cp(3, 'geometry "cells" mode "same" classification "entropy"'), `same-class ${line(3)} classes "entropy"`, row(3, [1, 2, 3, 4, 5, 6]));
  equal(cp(3, 'modulus 2 fixedClass 1 channel "V"'), `parity-cells ${line(3)} parity "odd"`, board);
  equal(cp(3, 'modulus 2 fixedClass 0 channel "V"'), `parity-cells ${line(3)} parity "even"`, board);
});

test("a network of explicit edges and an entropy alphabet that is not in thirds stay uncovered", () => {
  const network = nf('class-pattern line [] edges [["r1c1","r1c2"],["r1c2","r1c3"]] modulus 3', row(3));
  expect(network.normalForm!.coverage.find(x => x.kind === "class-pattern")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("edges") });
  const thirds = nf(cp(3, 'classification "entropy"'), row(3, [1, 2, 3, 4]));
  expect(thirds.normalForm!.coverage.find(x => x.kind === "class-pattern")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("multiple of three") });
  expect(nf(cp(3, "modulus 99999999999999999999"), row(3)).normalForm!.coverage.find(x => x.kind === "class-pattern")).toMatchObject({ status: "unsupported" });
});

test("bad parameters are invalid", () => {
  for (const text of [cp(3, 'mode "all"'), cp(3, 'geometry "ring"'), cp(3, 'classification "mod"'), cp(3, "modulus -1"), cp(3, "modulus 1.5"), cp(3, "fixedClass -1 modulus 2"), cp(3, 'loop "yes"')]) expect(nf(text, row(3)).status).toBe("invalid");
});

test("near misses compare as different", () => {
  const board = row(4);
  const base = cp(4, "modulus 3 length 3");
  equal(base, cp(4), board);
  differs(base, cp(4, "modulus 4"), board);
  differs(base, cp(4, "length 2"), board);
  differs(base, cp(4, "loop true"), board);
  differs(base, cp(4, 'mode "same"'), board);
  differs(base, cp(4, 'geometry "cells"'), board);
  differs(base, cp(3), board);
  differs(base, `not ${base}`, board);
  differs(cp(4, "modulus 3 fixedClass 1"), cp(4, "modulus 3 fixedClass 2"), board);
  differs(cp(4, "modulus 3 fixedClass 1"), cp(4, "modulus 6 fixedClass 1"), board);
  differs(cp(3, 'geometry "cells" mode "same" modulus 2'), cp(3, 'geometry "cells" mode "same" modulus 3'), board);
});

test("a value channel only matters for a fixed class", () => {
  const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["r1c3"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  expect(nf(cp(3, "modulus 3 fixedClass 1 channel \"V\"") + modifier, row(3)).normalForm?.coverage.find(x => x.kind === "class-pattern")?.status).toBe("unsupported");
  expect(nf(cp(3, "modulus 3 fixedClass 1") + modifier, row(3)).normalForm?.coverage.find(x => x.kind === "class-pattern")?.status).toBe("lowered");
});

/**
 * The public evaluator runs a declaration's own lowered formula when there is one. Removing it (`finite: undefined`) makes the evaluator
 * interpret the page's published formula, which is what the normal form is compared with. The class windows read printed digits only,
 * so the effective values passed alongside differ from the digits to show they are ignored.
 */
interface Pattern { line: string[]; loop?: boolean; classification?: "residue" | "entropy"; modulus?: number; length?: number; geometry?: "line" | "cells" | "squares"; mode?: "distinct" | "same" | "cover" }
function printed(rows: number, cols: number, symbols: number[], text: string): number {
  const board = boardOf(rows, cols, symbols), cells = gridCells(rows, cols);
  const r = nf(text, board);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage.filter(x => x.kind === "class-pattern").every(x => x.status === "lowered")).toBe(true);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], regions: [[${cells.join(", ")}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rule = { ...compiled.value!.rules[0], finite: undefined };
  let seen = 0, count = 0;
  const walk = (index: number, digits: Record<string, number>) => {
    if (index === cells.length) {
      const moved = cells[count++ % cells.length];
      const values = { ...digits, [moved]: symbols[(symbols.indexOf(digits[moved]) + 1) % symbols.length] };
      const expected = evaluate(rule, { digits, values }).status === "holds";
      expect([text, JSON.stringify(digits), holds(r.normalForm!.solution, digits)]).toEqual([text, JSON.stringify(digits), expected]);
      if (expected) seen++;
      return;
    }
    for (const x of symbols) walk(index + 1, { ...digits, [cells[index]]: x });
  };
  walk(0, {});
  return seen;
}
const names = (n: number) => gridCells(1, n) as string[];
const modeText = (c: Pattern) => `${c.geometry === "squares" ? "class-pattern" : cp(c.line.length)}${c.modulus !== undefined ? ` modulus ${c.modulus}` : ""}${c.length !== undefined ? ` length ${c.length}` : ""}${c.loop ? " loop true" : ""}${c.geometry ? ` geometry "${c.geometry}"` : ""}${c.mode ? ` mode "${c.mode}"` : ""}${c.classification ? ` classification "${c.classification}"` : ""}`;

test("distinct windows agree with the page's published formula", () => {
  expect(printed(1, 4, [1, 2, 3], modeText({ line: names(4), modulus: 3 }))).toBeGreaterThan(0);
  expect(printed(1, 4, [1, 2, 3], modeText({ line: names(4), modulus: 2, length: 2 }))).toBeGreaterThan(0);
});

test("closed and short windows agree with the page's published formula", () => {
  expect(printed(1, 3, [1, 2, 3, 4], modeText({ line: names(3), modulus: 4, length: 2, loop: true }))).toBeGreaterThan(0);
  expect(printed(1, 2, [1, 2, 3, 4], modeText({ line: names(2), length: 4 }))).toBeGreaterThan(0);
  expect(printed(1, 4, [1, 2], modeText({ line: names(4), length: 3, loop: true, modulus: 2 }))).toBeGreaterThanOrEqual(0);
});

test("same scopes agree with the page's published formula", () => {
  for (const modulus of [2, 3, 5]) expect(printed(1, 3, [1, 2, 3], modeText({ line: names(3), geometry: "cells", mode: "same", modulus }))).toBeGreaterThan(0);
});

test("cover scopes agree with the page's published formula", () => {
  for (const modulus of [2, 3, 5]) expect(printed(1, 3, [1, 2, 3], modeText({ line: names(3), geometry: "cells", mode: "cover", modulus }))).toBeGreaterThanOrEqual(0);
  expect(printed(1, 3, [1, 2, 3], modeText({ line: names(3), geometry: "cells", mode: "cover", modulus: 3 }))).toBeGreaterThan(0);
});

test("a cell listed twice agrees with the page's published formula", () => {
  expect(printed(1, 2, [1, 2, 3], "class-pattern r1c1-r1c2-r1c1 geometry \"cells\"")).toBe(0);
});

test("squares agree with the page's published formula", () => {
  expect(printed(2, 3, [1, 2], modeText({ line: [], geometry: "squares", mode: "cover", modulus: 2 }))).toBeGreaterThan(0);
  expect(printed(2, 2, [1, 2, 3, 4], modeText({ line: [], geometry: "squares", mode: "distinct", modulus: 4 }))).toBeGreaterThan(0);
});

test("entropy agrees with the page's published formula", () => {
  expect(printed(1, 3, [4, 1, 5, 2, 6, 3], modeText({ line: names(3), classification: "entropy", length: 3 }))).toBeGreaterThan(0);
  expect(printed(1, 2, [1, 2, 3, 4, 5, 6], modeText({ line: names(2), classification: "entropy", geometry: "cells", mode: "same" }))).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on a fixed class", () => {
  expect(differential(KINDS, 1, 3, [1, 2, 3], [cp(3, "modulus 2 fixedClass 1"), cp(3, "modulus 3 fixedClass 0")])).toBeGreaterThan(0);
  expect(differential(KINDS, 1, 3, [-1, 0, 2], [cp(3, "modulus 2 fixedClass 1"), cp(3, "modulus 4 fixedClass 2")])).toBeGreaterThan(0);
});

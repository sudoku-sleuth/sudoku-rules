import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: letting a modified count run past the group count (`chosen[i] <= count` in the search) fails the feasibility and
// differential tests; the reader test fails if a declaration that is not lowered stops counting as a reader of the values.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const [a, b, c, d, e] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet = [1, 2, 3]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet?: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const eq = (x: string, y: string, n = 5) => expect(compare(nf(x, n), nf(y, n)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 5) => { const r = compare(nf(x, n), nf(y, n)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const list = (...xs: Cell[]) => `[${xs.map(x => `"${x}"`).join(",")}]`;
const lists = (...gs: Cell[][]) => `[${gs.map(g => list(...g)).join(",")}]`;
const modifier = (exactly: Cell[][], count: number, most: Cell[][] = [], distinct = false, factor = 2, offset = 0) =>
  `value-modifier factor ${factor} offset ${offset} exactly ${lists(...exactly)} count ${count} atMostOne ${lists(...most)} distinct ${distinct}`;
const coverageOf = (rules: string) => nf(rules).normalForm!.coverage.find(x => x.kind === "value-modifier");

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
function form(rules: string, n = 5) { const r = nf(rules, n); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));
const yes: Formula = { op: "All", children: [] }, no: Formula = { op: "Any", children: [] };

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(modifier([[a, b]], 1));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2]]}\n---${body(modifier([[a, b]], 1))}` });
}, 30000);

test("a feasible choice of modified cells asks nothing of the digits", () => {
  expect(form(modifier([[a, b]], 1))).toEqual(yes);
  expect(form(modifier([[a], [b]], 1))).toEqual(yes);
  expect(form(modifier([[a, b], [b, c]], 1))).toEqual(yes);
  expect(form(modifier([[a, b, c]], 0))).toEqual(yes);
  expect(form(modifier([[a, b, c]], 2, [[a, b]]))).toEqual(yes);
});

test("an infeasible choice cannot hold", () => {
  expect(form(modifier([[a, b]], 3))).toEqual(no);
  expect(form(modifier([[a], [b]], 1, [[a, b]]))).toEqual(no);
  expect(form(modifier([[a, b], [c]], 1, [], false))).toEqual(yes);
  expect(form(modifier([[a, b], [a, b]], 2, [[a]]))).toEqual(yes);
  expect(form(modifier([[a, b]], 2, [[b]]))).toEqual(yes);
  expect(form(modifier([[a, b]], 2, [[a, b]]))).toEqual(no);
  // Overlapping groups that need different counts of the shared cell.
  expect(form(modifier([[a, b], [b, c]], 2, [[a, c]]))).toEqual(no);
});

test("with distinct the modified cells must hold different digits", () => {
  const f = form(modifier([[a], [b]], 1, [], true));
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(2, 2))).toBe(false);
  // Either {b} or {a, c} is modified; {b} alone is always distinct.
  expect(form(modifier([[a, b], [b, c]], 1, [], true))).toEqual(yes);
  const three = form(modifier([[a, b], [b, c]], 2, [], true));
  expect(holds(three, at(1, 2, 3))).toBe(true);
  expect(holds(three, at(1, 2, 1))).toBe(false);
  // Each group offers a choice; the digits must differ for at least one choice.
  const choice = form(modifier([[a, b], [c, d]], 1, [], true));
  expect(holds(choice, at(1, 1, 1, 1))).toBe(false);
  expect(holds(choice, at(1, 1, 1, 2))).toBe(true);
  expect(holds(choice, at(2, 1, 1, 2))).toBe(true);
  const both = form(modifier([[a, b]], 2, [], true));
  expect(holds(both, at(1, 2))).toBe(true);
  expect(holds(both, at(3, 3))).toBe(false);
  // One modified cell never repeats a digit.
  expect(form(modifier([[a, b, c]], 1, [], true))).toEqual(yes);
});

test("factor and offset do not change the normal form when nothing reads values", () => {
  eq(modifier([[a, b]], 1, [], false, 2, 0), modifier([[a, b]], 1, [], false, 3, 5));
  eq(modifier([[a], [b]], 1, [], true, 2, 0), modifier([[a], [b]], 1, [], true, -1, 1));
});

test("order, repeats and the full-URL spelling do not matter", () => {
  eq(modifier([[a, b], [c, d]], 1, [], true), modifier([[d, c, c], [b, a]], 1, [], true));
  eq(modifier([[a, b], [c, d]], 1, [], true), modifier([[c, d], [a, b], [a, b]], 1, [], true));
  eq(modifier([[a, b]], 1), `https://rules.sudoku-sleuth.com/value-modifier.md factor 2 offset 0 exactly ${lists([a, b])} count 1 atMostOne [] distinct false`);
});

test("near misses compare as different", () => {
  differs(modifier([[a], [b]], 1, [], true), modifier([[a], [b]], 1, [], false));
  differs(modifier([[a], [b]], 1, [], true), modifier([[a], [c]], 1, [], true));
  differs(modifier([[a], [b]], 1, [], true), modifier([[a], [b], [c]], 1, [], true));
  differs(modifier([[a, b], [c, d]], 1, [], true), modifier([[a, b], [c, e]], 1, [], true));
  differs(modifier([[a, b, c]], 2, [], true), modifier([[a, b, c]], 1, [], true));
  differs(modifier([[a], [b]], 1, [], true), modifier([[a], [b]], 1, [[a, b]], true));
  // A group that holds no exactly cell never changes which cells are modified.
  eq(modifier([[a], [b]], 1, [], true), modifier([[a], [b]], 1, [[c, d]], true));
  differs(modifier([[a], [b]], 1, [], true), `not ${modifier([[a], [b]], 1, [], true)}`);
  differs(modifier([[a], [b]], 1, [], true), modifier([[b], [c]], 1, [], true));
});

test("it lowers only when no other declaration reads values", () => {
  const dOnly = `${modifier([[a], [b]], 1, [], true)}\nunique ${a}-${b}-${c}`;
  expect(nf(dOnly).status).toBe("complete");
  expect(coverageOf(dOnly)).toMatchObject({ status: "lowered" });
  expect(coverageOf(`${modifier([[a, b]], 1)}\nkiller ${a}-${b} total 3 repeats false channel "D"`)).toMatchObject({ status: "lowered" });
  const reader = `${modifier([[a, b]], 1)}\ncage ${a}-${b} total 3 repeats false`;
  const n = nf(reader);
  expect(n.status).toBe("partial");
  expect(coverageOf(reader)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("read or bind the values") });
  expect(n.normalForm!.coverage.filter(x => x.status === "unsupported").length).toBe(2);
  expect(coverageOf(`${modifier([[a, b]], 1)}\nvalue-modifier factor 3 offset 0 exactly ${lists([c, d])} count 1 atMostOne [] distinct false`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Several") });
  // A repeated identical modifier is one modifier.
  expect(coverageOf(`${modifier([[a, b]], 1)}\n${modifier([[a, b]], 1)}`)).toMatchObject({ status: "lowered" });
});

test("a modifier beside a reader stays unresolved when compared", () => {
  const reader = `${modifier([[a, b]], 1)}\ncage ${a}-${b} total 3 repeats false`;
  const other = `${modifier([[a, b]], 1, [], false, 5, 1)}\ncage ${a}-${b} total 3 repeats false`;
  expect(compare(nf(reader), nf(other)).status).toBe("unresolved");
});

test("a search that is too large stays uncovered with a reason", () => {
  const nineBy = Array.from({ length: 9 }, (_, g) => Array.from({ length: 9 }, (_, i) => `r${g + 1}c${i + 1}` as Cell));
  const grid: Cell[] = nineBy.flat();
  const big: BoardContext = { rows: 9, cols: 9, activeCells: grid, alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9] };
  const text = (distinct: boolean) => `${header}---\n${body(modifier(nineBy, 1, [], distinct))}`;
  const r = normalise({ file: "synthetic.rules.md", text: text(true) }, big);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage[0]).toMatchObject({ status: "unsupported", reason: expect.stringContaining("2,000") });
  // Without distinct the first feasible choice settles it.
  const easy = normalise({ file: "synthetic.rules.md", text: text(false) }, big);
  expect(easy.status).toBe("complete");
  expect(easy.normalForm!.solution).toEqual(yes);
});

function differential(n: number, symbols: number[], entries: { text: string; factor: number; offset: number }[]): void {
  const used = cells.slice(0, n);
  const board: BoardContext = { rows: 1, cols: n, activeCells: used, alphabet: symbols, regions: [used] };
  for (const { text, factor, offset } of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.status).toBe("complete");
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let total = 0, satisfied = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        // The modifier holds when some choice of modified cells, read as the shared values, satisfies the evaluator.
        let expected = false;
        for (let mask = 0; mask < 1 << n && !expected; mask++) {
          const effective = Object.fromEntries(used.map((cell, i) => [cell, mask >> i & 1 ? factor * values[cell] + offset : values[cell]]));
          expected = published(rule, values, effective);
        }
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        total++; if (expected) satisfied++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    expect(total).toBeGreaterThan(0);
    expect(satisfied).toBeGreaterThanOrEqual(0);
  }
}

test("the lowered formula and the public evaluator agree on every assignment", () => {
  const entry = (exactly: Cell[][], count: number, most: Cell[][] = [], distinct = false) => ({ text: modifier(exactly, count, most, distinct), factor: 2, offset: 0 });
  differential(4, [1, 2], [
    entry([[a], [b]], 1, [], true), entry([[a, b], [c, d]], 1, [], true), entry([[a, b], [c, d]], 1), entry([[a, b], [b, c]], 1, [], true),
    entry([[a, b], [b, c]], 2, [], true), entry([[a, b, c]], 2, [], true), entry([[a, b, c]], 2, [[a, b]], true), entry([[a, b]], 3, [], false),
    entry([[a, b], [c, d]], 1, [[a, c]], true), entry([[a], [b]], 1, [[a, b]], true), entry([[a, b, c, d]], 3, [], true), entry([[a, b, c, d]], 0, [], true),
  ]);
});

test("other factors and offsets agree with the published definition", () => {
  differential(3, [1, 2, 4], [{ text: modifier([[a], [b], [c]], 1, [], true, 3, 1), factor: 3, offset: 1 }, { text: modifier([[a, b], [b, c]], 1, [], true, 5, -1), factor: 5, offset: -1 }]);
});

test("the published definition follows the shared values, not the digits alone", () => {
  const rules = modifier([[a], [b]], 1, [], true);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(rules)}` });
  const rule = compiled.value!.rules[0];
  const digits = at(1, 2, 3);
  // Values equal to the digits modify nothing, so two required modified cells are missing; doubling both modifies them.
  expect(published(rule, digits, digits)).toBe(false);
  expect(published(rule, digits, at(2, 4, 3))).toBe(true);
  expect(published(rule, digits, at(2, 2, 3))).toBe(false);
  expect(published(rule, at(1, 1, 3), at(2, 2, 3))).toBe(false);
  expect(holds(form(rules, 3), digits)).toBe(true);
  expect(holds(form(rules, 3), at(1, 1, 3))).toBe(false);
});

test("any other declaration that is not lowered keeps the modifier uncovered", () => {
  // Each of these reads values or cannot be judged, and is uncovered for a reason other than the unresolved value domain.
  const readers = [
    `stingy-cages groups [${list(a, b)},${list(c, d)}]`,
    `nabner ${a}-${b}-${c} distinct false channel "V"`,
    `thermo ${a}-${b} if uniform`,
  ];
  for (const reader of readers) {
    const text = `${modifier([[a, b]], 1)}\n${reader}`;
    const n = nf(text);
    expect(n.normalForm!.coverage.find(x => x.kind === "value-modifier")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("read or bind the values") });
    expect(n.status).toBe("partial");
    // The factor and offset cannot be dropped from the comparison, so the two files are not equivalent.
    expect(compare(nf(text), nf(text.replace("factor 2", "factor 3"))).status).not.toBe("equivalent");
  }
});

test("a group cell that is off the board or inactive is refused when the case is read", () => {
  expect(normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(modifier([[a, d]], 1))}` }, boardOf(3)).status).toBe("invalid");
  // r2c2 is inside the 2x2 rectangle but not an active cell.
  const holey = ["r1c1", "r1c2", "r2c1"] as Cell[];
  const board: BoardContext = { rows: 2, cols: 2, activeCells: holey, alphabet: [1, 2, 3], regions: [holey] };
  const read = (rules: string) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
  expect(read(modifier([["r1c1", "r2c2" as Cell]], 1, [], true)).status).toBe("invalid");
  expect(read(modifier([["r1c1"], ["r1c2"]], 1, [["r2c2" as Cell]], true)).status).toBe("invalid");
  expect(read(modifier([["r1c1"], ["r1c2"]], 1, [], true)).status).toBe("complete");
});

test("a search of more than 500,000 steps stays uncovered with a reason", () => {
  // Thirty-one of sixty cells with no two neighbours both modified: at most thirty fit, and finding that out is a large search.
  const grid: Cell[] = Array.from({ length: 60 }, (_, i) => `r${Math.floor(i / 10) + 1}c${i % 10 + 1}` as Cell);
  const big: BoardContext = { rows: 6, cols: 10, activeCells: grid, alphabet: [1, 2, 3] };
  const text = `${header}---\n${body(`value-modifier factor 2 offset 0 exactly ${lists(grid)} count 31 atMostOne ${lists(...grid.slice(1).map((cell, i) => [grid[i], cell]))} distinct false`)}`;
  const r = normalise({ file: "synthetic.rules.md", text }, big);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage[0]).toMatchObject({ status: "unsupported", reason: expect.stringContaining("500,000") });
});

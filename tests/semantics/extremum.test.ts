import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3"];
const [a, b, c, d, e, f] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const context = (alphabet = [1, 2, 3]): BoardContext => ({ rows: 2, cols: 3, activeCells: cells, alphabet, regions: [cells] });
const nf = (rules: string, alphabet?: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, context(alphabet));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `value-modifier factor 2 offset 0 exactly [["${f}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
const list = (...xs: Cell[]) => `[${xs.map(x => `"${x}"`).join(",")}]`;
const rule = (marked: Cell[], type: string, exhaustive: boolean, extra = "", kind = "extremum") => `${kind} ${marked.join("-")} type "${type}" exhaustive ${exhaustive}${extra}`;
const coverageOf = (rules: string) => nf(rules).normalForm!.coverage.find(x => x.kind === "extremum");

function holds(g: Formula, v: Record<string, number>): boolean {
  switch (g.op) {
    case "All": return g.children.every(x => holds(x, v));
    case "Any": return g.children.some(x => holds(x, v));
    case "Not": return !holds(g.child, v);
    case "Pair": return g.table.some(([x, y]) => x === v[g.cells[0]] && y === v[g.cells[1]]);
    case "Allowed": return g.values.includes(v[g.cell]);
    case "Distinct": return new Set(g.cells.map(q => v[q])).size === g.cells.length;
    case "CountAtLeast": return g.cells.filter(q => v[q] === g.digit).length >= g.count;
    case "SumEqual": return g.left.reduce((n, q) => n + BigInt(v[q]), 0n) === g.right.reduce((n, q) => n + BigInt(v[q]), 0n);
    case "SumTotal": return g.cells.reduce((n, q) => n + BigInt(v[q]), 0n) === BigInt(g.total);
  }
}
function form(rules: string, alphabet?: number[]) { const r = nf(rules, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(rule([a], "min", false));
  compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3, r2c1, r2c2, r2c3]]}\n---${body(rule([a], "min", false))}` });
}, 30000);

test("a minimum is below its orthogonal neighbours and a maximum above", () => {
  // r2c2 touches r1c2, r2c1 and r2c3.
  const min = form(rule([e], "min", false));
  expect(holds(min, at(3, 2, 3, 2, 1, 2))).toBe(true);
  expect(holds(min, at(3, 1, 3, 2, 2, 2))).toBe(false);
  expect(holds(min, at(3, 3, 3, 3, 2, 3))).toBe(true);
  // Equal neighbours are not strictly above, and r1c1 is only diagonal to r2c2.
  expect(holds(min, at(3, 2, 3, 2, 2, 2))).toBe(false);
  expect(holds(min, at(1, 3, 3, 3, 2, 3))).toBe(true);
  const max = form(rule([e], "max", false));
  expect(holds(max, at(1, 1, 1, 1, 3, 1))).toBe(true);
  expect(holds(max, at(1, 3, 1, 1, 3, 1))).toBe(false);
});

test("boundary true skips marked neighbours and boundary false compares them", () => {
  const open = form(rule([a, b], "min", false));
  expect(holds(open, at(1, 1, 2, 2, 2, 2))).toBe(true);
  const closed = form(rule([a, b], "min", false, " boundary false"));
  expect(holds(closed, at(1, 1, 2, 2, 2, 2))).toBe(false);
  expect(holds(closed, at(1, 2, 3, 3, 3, 3))).toBe(false);
  const single = form(rule([a], "min", false, " boundary false"));
  expect(holds(single, at(1, 2, 2, 2, 2, 2))).toBe(true);
  eq(rule([a], "min", false), rule([a], "min", false, " boundary false"));
});

test("a custom neighbourhood selects its own cells", () => {
  const king = form(rule([e], "min", false, ' neighbourhood "king"'));
  expect(holds(king, at(1, 3, 3, 3, 2, 3))).toBe(false);
  expect(holds(form(rule([e], "min", false)), at(1, 3, 3, 3, 2, 3))).toBe(true);
  expect(holds(king, at(3, 3, 3, 3, 1, 3))).toBe(true);
  expect(holds(king, at(3, 3, 1, 3, 2, 3))).toBe(false);
  const knight = form(rule([a], "max", false, ' neighbourhood "knight"'));
  // r1c1 is a knight move from r2c3 only.
  expect(holds(knight, at(3, 3, 3, 3, 3, 1))).toBe(true);
  expect(holds(knight, at(3, 1, 1, 1, 1, 3))).toBe(false);
  eq(rule([e], "min", false, ' neighbourhood "orthogonal"'), rule([e], "min", false));
  differs(rule([e], "min", false, ' neighbourhood "king"'), rule([e], "min", false));
});

test("explicit neighbours replace the move and ignore boundary", () => {
  const listed = form(rule([a], "min", false, ` neighbours ${list(e, f)}`));
  expect(holds(listed, at(1, 3, 3, 3, 2, 2))).toBe(true);
  expect(holds(listed, at(2, 1, 1, 1, 2, 3))).toBe(false);
  // Each marked cell is compared with the listed cell, whatever the boundary.
  const shared = form(rule([a, b], "min", false, ` neighbours ${list(e)}`));
  expect(holds(shared, at(1, 1, 3, 3, 2, 3))).toBe(true);
  expect(holds(shared, at(1, 2, 3, 3, 2, 3))).toBe(false);
  // A marked cell that is also a listed neighbour is compared with itself, so nothing satisfies the declaration.
  const inside = form(rule([a, b], "min", false, ` neighbours ${list(b)}`));
  expect(inside).toEqual({ op: "Any", children: [] });
  // A cell listed among its own neighbours is never below itself.
  expect(holds(form(rule([a], "min", false, ` neighbours ${list(a)}`)), at(1, 2, 2, 2, 2, 2))).toBe(false);
  // No neighbours asks nothing; order and repeats do not matter.
  expect(form(rule([a], "min", false, " neighbours []"))).toEqual({ op: "All", children: [] });
  eq(rule([a], "min", false, ` neighbours ${list(e, f)}`), rule([a], "min", false, ` neighbours ${list(f, e, e)}`));
  differs(rule([a], "min", false, ` neighbours ${list(e, f)}`), rule([a], "min", false, ` neighbours ${list(e)}`));
});

test("exhaustive true gives every unmarked cell a lower neighbour for min and a higher one for max", () => {
  const four = [1, 2, 3, 4];
  const min = form(rule([a], "min", true), four);
  expect(holds(min, at(1, 2, 3, 2, 3, 4))).toBe(true);
  expect(holds(min, at(1, 2, 3, 2, 3, 3))).toBe(false);
  const max = form(rule([a], "max", true), four);
  expect(holds(max, at(4, 3, 2, 3, 2, 1))).toBe(true);
  expect(holds(max, at(4, 3, 2, 3, 2, 2))).toBe(false);
  // The marked cells themselves count as neighbours of the cells beside them.
  const two = form(rule([a, f], "min", true));
  expect(holds(two, at(1, 2, 3, 2, 3, 1))).toBe(true);
  expect(holds(two, at(1, 2, 2, 2, 2, 2))).toBe(false);
});

test("exhaustive false adds nothing for unmarked cells and true is a distinct meaning", () => {
  differs(rule([a], "min", false), rule([a], "min", true));
  expect(holds(form(rule([a], "min", false)), at(1, 2, 2, 2, 2, 2))).toBe(true);
  expect(holds(form(rule([a], "min", true)), at(1, 2, 2, 2, 2, 2))).toBe(false);
});

test("the block spelling and the alias spelling share one normal form", () => {
  eq(rule([a, b], "min", false), rule([a, b], "min", false, "", "neighbour-extremum"));
  eq(rule([e], "max", true, ` neighbours ${list(a)}`), rule([e], "max", true, ` neighbours ${list(a)}`, "neighbour-extremum"));
  expect(coverageOf(rule([a], "min", false))).toMatchObject({ status: "lowered" });
});

test("near misses compare as different", () => {
  differs(rule([a], "min", false), rule([a], "max", false));
  differs(rule([a], "min", true), rule([a], "max", true));
  differs(rule([a, b], "min", false), rule([a, c], "min", false));
  differs(rule([a, b], "min", false), rule([a], "min", false));
  differs(rule([a, b], "min", false), rule([a, b], "min", false, " boundary false"));
  differs(rule([a, b], "min", false), `${rule([a], "min", false)}\n${rule([b], "min", false)}`);
  differs(rule([a], "min", false), `not ${rule([a], "min", false)}`);
  differs(rule([e], "min", false), rule([e], "min", false, ' neighbourhood "diagonal"'));
});

test("channel V is converted to D on a resolved board and left uncovered beside a value modifier", () => {
  const n = nf(rule([e], "min", true, ' channel "V"'));
  expect(n.status).toBe("complete");
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
  expect(nf(rule([e], "min", true)).normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
  eq(rule([e], "min", true, ' channel "V"'), rule([e], "min", true));
  expect(coverageOf(`${rule([e], "min", false, ' channel "V"')}\n${modifier}`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Effective-value") });
  expect(coverageOf(`${rule([e], "min", false, ' channel "D"')}\n${modifier}`)).toMatchObject({ status: "lowered" });
  expect(coverageOf(`${rule([e], "min", false)}\n${modifier}`)).toMatchObject({ status: "lowered" });
});

test("an expansion beyond the bound stays uncovered with a reason", () => {
  const symbols = Array.from({ length: 64 }, (_, i) => i);
  const grid: Cell[] = Array.from({ length: 64 }, (_, i) => `r${Math.floor(i / 8) + 1}c${i % 8 + 1}` as Cell);
  const big: BoardContext = { rows: 8, cols: 8, activeCells: grid, alphabet: symbols };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body('extremum r1c1 type "max" exhaustive true neighbourhood "king"')}` }, big);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage[0]).toMatchObject({ status: "unsupported", reason: expect.stringContaining("exceeds 1,000,000") });
  expect(r.status).toBe("partial");
});

type Entry = string | [string, "none"];
function differential(rows: number, cols: number, symbols: number[], entries: Entry[], extra = ""): void {
  const used = cells.filter(cell => Number(cell.slice(cell.indexOf("c") + 1)) <= cols && Number(cell[1]) <= rows);
  const board: BoardContext = { rows, cols, activeCells: used, alphabet: symbols, regions: [used] };
  for (const entry of entries) {
    const [text, none] = typeof entry === "string" ? [entry, undefined] : entry;
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text + extra)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "extremum").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text + extra)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const compiledRule = compiled.value!.rules[0];
    let satisfied = 0, total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        const expected = evaluate(compiledRule, { digits: values }).status === "holds";
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        total++; if (expected) satisfied++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    if (none) expect([text, satisfied]).toEqual([text, 0]);
    expect(total).toBeGreaterThan(0);
  }
}

test("the lowered formula and the public evaluator agree on every assignment", () => {
  differential(2, 2, [1, 2, 3], [
    rule([a], "min", false), rule([a], "max", false), rule([a, b], "min", false), [rule([a, b], "max", false, " boundary false"), "none"],
    rule([a], "min", true), rule([a, d], "max", true), [rule([a, b], "min", true, " boundary false"), "none"], rule([a, e], "min", true, " boundary false"),
    rule([a], "min", false, ' neighbourhood "king"'), rule([a], "max", true, ' neighbourhood "diagonal"'),
    rule([a], "min", true, ' neighbourhood "king"'), rule([a], "max", false, ' neighbourhood "bishop"'),
    rule([a], "min", false, ` neighbours ${list(b, e)}`), rule([a, b], "max", true, ` neighbours ${list(a, d)}`),
    [rule([a], "min", false, ` neighbours ${list(a)}`), "none"], rule([a], "min", false, " neighbours []"),
    rule([a, d], "min", true, ' channel "V"'), `not ${rule([a], "min", true)}`, `not ${rule([a, b], "max", false)}`,
  ]);
  differential(2, 3, [1, 2], [
    rule([b], "min", true), rule([e], "max", true), rule([a, f], "min", true), rule([a], "max", false, ' neighbourhood "knight"'),
    rule([c], "min", true, ' neighbourhood "knight"'),
  ]);
  differential(2, 2, [0, 2, 5], [rule([a, d], "max", true, " boundary false"), rule([a, e], "min", true)]);
  differential(2, 2, [-1, 0, 3], [rule([a, b], "min", true), rule([d], "max", false, ' neighbourhood "king"')]);
});

test("a modifier board: D agrees with the evaluator where V would differ", () => {
  differential(2, 3, [1, 2], [rule([a], "min", false), rule([b], "max", false)], `\n${modifier}`);
});

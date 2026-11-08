import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: dropping the anchor filter of the incident mode (`&& false`) fails the anchors differentials.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3"];
const [a, b, c, d, e, f] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const context = (alphabet = [1, 2, 3, 4]): BoardContext => ({ rows: 2, cols: 3, activeCells: cells, alphabet, regions: [cells] });
const nf = (rules: string, alphabet?: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, context(alphabet));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `value-modifier factor 2 offset 0 exactly [["${f}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
const list = (...xs: Cell[]) => `[${xs.map(x => `"${x}"`).join(",")}]`;
const rel = (op: string, value?: number) => value === undefined ? `{"op":"${op}"}` : `{"op":"${op}","value":${value}}`;
const scope = (scoped: Cell[], relations: string[], extra = "") => `relation-scope cells ${list(...scoped)} relations [${relations.join(",")}]${extra}`;
const coverageOf = (rules: string) => nf(rules).normalForm!.coverage.find(x => x.kind === "relation-scope");

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
  nf(scope([a, b], [rel("difference", 1)]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 3, symbols: [1,2,3,4], regions: [[r1c1, r1c2, r1c3, r2c1, r2c2, r2c3]]}\n---${body(scope([a, b], [rel("difference", 1)]))}` });
}, 30000);

test("each orthogonal pair in scope meets at least one relation", () => {
  const f1 = form(scope([a, b, c], [rel("difference", 1), rel("sum", 6)]));
  expect(holds(f1, at(1, 2, 3))).toBe(true);
  expect(holds(f1, at(2, 4, 3))).toBe(true);
  expect(holds(f1, at(1, 3, 1))).toBe(false);
  expect(holds(f1, at(1, 2, 2))).toBe(false);
  // r1c1 and r1c3 are not neighbours, so they are not compared.
  expect(holds(form(scope([a, c], [rel("difference", 1)])), at(1, 1, 4))).toBe(true);
});

test("negative scope forbids every relation on each selected pair", () => {
  const f1 = form(scope([a, b, c], [rel("difference", 1), rel("sum", 6)], " negative true"));
  expect(holds(f1, at(1, 3, 1))).toBe(true);
  expect(holds(f1, at(1, 2, 4))).toBe(false);
  expect(holds(f1, at(2, 4, 1))).toBe(false);
  expect(holds(f1, at(1, 1, 1))).toBe(true);
});

test("modes select all pairs, moves or incident moves", () => {
  const all = form(scope([a, c], [rel("difference", 1)], ' mode "all"'));
  expect(holds(all, at(1, 1, 2))).toBe(true);
  expect(holds(all, at(1, 1, 3))).toBe(false);
  const king = form(scope([a, e], [rel("difference", 1)], ' mode "moves" move "king"'));
  expect(holds(king, at(1, 4, 4, 4, 2, 4))).toBe(true);
  expect(holds(king, at(1, 4, 4, 4, 3, 4))).toBe(false);
  const incident = form(scope([a, b, c], [rel("difference", 1)], ` mode "incident" anchors ${list(a)}`));
  // Only the pair r1c1-r1c2 touches the anchor.
  expect(holds(incident, at(1, 2, 4))).toBe(true);
  expect(holds(incident, at(1, 3, 4))).toBe(false);
  expect(holds(incident, at(1, 2, 1))).toBe(true);
  expect(holds(form(scope([a, b, c], [rel("difference", 1)], ' mode "incident"')), at(1, 4, 1))).toEqual(true);
});

test("exceptions are undirected and a malformed exception makes the declaration false", () => {
  const skip = form(scope([a, b, c], [rel("difference", 1)], ` except [${list(c, b)}]`));
  expect(holds(skip, at(1, 2, 4))).toBe(true);
  expect(holds(skip, at(1, 3, 4))).toBe(false);
  expect(form(scope([a, b], [rel("difference", 1)], ` except [${list(a, b, c)}]`))).toEqual({ op: "Any", children: [] });
  // An exception that repeats a cell names no pair.
  eq(scope([a, b], [rel("difference", 1)], ` except [${list(a, a)}]`), scope([a, b], [rel("difference", 1)]));
});

test("directed relations follow increasing cell order", () => {
  const f1 = form(scope([a, b, d], [rel("less")]));
  expect(holds(f1, at(1, 2, 0, 3))).toBe(true);
  expect(holds(f1, at(2, 1, 0, 3))).toBe(false);
  expect(holds(f1, at(1, 2, 0, 1))).toBe(false);
  expect(holds(form(scope([a, d], [rel("less")]), [1, 2]), at(1, 0, 0, 2))).toBe(true);
});

test("order, repeats and the full-URL spelling do not matter", () => {
  eq(scope([a, b, c], [rel("difference", 1), rel("sum", 6)]), scope([c, a, b, b], [rel("sum", 6), rel("difference", 1), rel("sum", 6)]));
  eq(scope([a, b], [rel("difference", 1)]), `https://rules.sudoku-sleuth.com/relation-scope.md cells ${list(a, b)} relations [${rel("difference", 1)}] mode "moves" move "orthogonal" negative false channel "D"`);
  // An exception outside the scope, and the order of a directed pair, change nothing.
  eq(scope([a, b], [rel("less")]), scope([b, a], [rel("less")], ` except [${list(a, d)}]`));
  eq(scope([a, b], [rel("difference", 1)], ' mode "all"'), scope([a, b], [rel("difference", 1)]));
});

test("it matches the same meaning written with other blocks", () => {
  eq(scope([a, b, c], [rel("difference", 1), rel("sum", 6)], " negative true"), `negative relations [${rel("difference", 1)},${rel("sum", 6)}] except [${list(d, e)},${list(e, f)},${list(a, d)},${list(b, e)},${list(c, f)},${list(d, e)}]`);
  eq(scope([a, b], [rel("sum", 5)]), `pair ${a}-${b} sum 5`);
});

test("near misses compare as different", () => {
  const base = scope([a, b, c], [rel("difference", 1)]);
  differs(base, scope([a, b, c], [rel("difference", 2)]));
  differs(base, scope([a, b, c], [rel("difference", 1), rel("sum", 6)]));
  differs(base, scope([a, b, c], [rel("difference", 1)], " negative true"));
  differs(base, scope([a, b], [rel("difference", 1)]));
  differs(base, scope([a, b, c], [rel("difference", 1)], ' mode "all"'));
  differs(base, scope([a, b, c, e], [rel("difference", 1)]));
  differs(scope([a, b, e], [rel("difference", 1)], ' move "king"'), scope([a, b, e], [rel("difference", 1)]));
  differs(base, scope([a, b, c], [rel("difference", 1)], ` except [${list(a, b)}]`));
  differs(scope([a, b, c], [rel("difference", 1)], ` mode "incident" anchors ${list(a)}`), scope([a, b, c], [rel("difference", 1)], ` mode "incident" anchors ${list(c)}`));
  differs(base, `not ${base}`);
  differs(scope([a, b], [rel("less")]), scope([a, b], [rel("less")], ` except [${list(a, b)}]`));
});

test("channel V is converted to D on a resolved board and left uncovered beside a value modifier", () => {
  const n = nf(scope([a, b], [rel("sum", 5)], ' channel "V"'));
  expect(n.status).toBe("complete");
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
  expect(nf(scope([a, b], [rel("sum", 5)])).normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
  eq(scope([a, b], [rel("sum", 5)], ' channel "V"'), scope([a, b], [rel("sum", 5)]));
  expect(coverageOf(`${scope([a, b], [rel("sum", 5)], ' channel "V"')}\n${modifier}`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Effective-value") });
  expect(coverageOf(`${scope([a, b], [rel("sum", 5)])}\n${modifier}`)).toMatchObject({ status: "lowered" });
});

test("an expansion beyond the bound stays uncovered with a reason", () => {
  const symbols = Array.from({ length: 64 }, (_, i) => i);
  const grid: Cell[] = Array.from({ length: 64 }, (_, i) => `r${Math.floor(i / 8) + 1}c${i % 8 + 1}` as Cell);
  const big: BoardContext = { rows: 8, cols: 8, activeCells: grid, alphabet: symbols };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(`relation-scope cells ${list(...grid)} relations [${rel("difference", 1)}] mode "all"`)}` }, big);
  expect(r.issues).toEqual([]);
  expect(r.normalForm!.coverage[0]).toMatchObject({ status: "unsupported", reason: expect.stringContaining("exceeds 1,000,000") });
  expect(r.status).toBe("partial");
});

test("a scope cell that is not an active cell is rejected", () => {
  const small: BoardContext = { rows: 2, cols: 3, activeCells: [a, b, c, d, e], alphabet: [1, 2, 3], regions: [[a, b, c, d, e]] };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(scope([a, f], [rel("difference", 1)]))}` }, small);
  expect(r.status).toBe("invalid");
});

function differential(rows: number, cols: number, symbols: number[], entries: string[], extra = ""): void {
  const used = cells.filter(cell => Number(cell.slice(cell.indexOf("c") + 1)) <= cols && Number(cell[1]) <= rows);
  const board: BoardContext = { rows, cols, activeCells: used, alphabet: symbols, regions: [used] };
  const compile = (text: string) => {
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    return compiled.value!.rules[0];
  };
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text + extra)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "relation-scope").every(x => x.status === "lowered")).toBe(true);
    const rule = compile(text + extra);
    // The same declaration reading effective values, when the text states channel "D" or leaves it out.
    const twin = text.includes('channel "V"') ? undefined : compile(text.replace(/ relations/, ' channel "V" relations') + extra);
    const readsV = text.includes('channel "V"');
    let total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        // Another alphabet symbol at one cell: effective values that differ from the printed digits and stay on the board.
        const doubled = { ...values, [used[0]]: symbols[(symbols.indexOf(values[used[0]]) + 1) % symbols.length] };
        const pub = (r: typeof rule, digits: Record<string, number>, v?: Record<string, number>) => extra ? published(r, digits, v ?? digits) : published(r, digits, v);
        const expected = pub(rule, values);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        if (readsV) {
          // The channel-V rule follows the effective values: on changed values it holds exactly when the printed-digit rule holds on them as digits.
          const printed = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text.replace(' channel "V"', "") + extra)}` }, board).normalForm!.solution;
          expect([text, JSON.stringify(doubled), pub(rule, values, doubled)]).toEqual([text, JSON.stringify(doubled), holds(printed, doubled)]);
        } else {
          // A printed-digit rule ignores the values, and its channel-V twin follows them: the twin on doubled values holds exactly when the rule holds on those values as digits.
          expect([text, JSON.stringify(doubled), pub(rule, values, doubled)]).toEqual([text, JSON.stringify(doubled), expected]);
          expect([text, JSON.stringify(doubled), pub(twin!, values, doubled)]).toEqual([text, JSON.stringify(doubled), pub(rule, doubled)]);
        }
        total++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    expect(total).toBeGreaterThan(0);
  }
}

function differentialTests(title: string, rows: number, cols: number, symbols: number[], entries: string[]): void {
  for (const entry of entries) test(`${title}: ${entry}`, () => differential(rows, cols, symbols, [entry]));
}

differentialTests("pairs, scopes and relations agree with the published definition", 1, 3, [1, 2, 3], [
    scope([a, b, c], [rel("difference", 1)]), scope([a, b, c], [rel("difference", 1), rel("sum", 4)]),
    scope([a, b, c], [rel("difference", 1)], " negative true"), scope([a, b, c], [rel("difference", 1), rel("ratio", 2)], " negative true"),
]);

differentialTests("modes and moves agree with the published definition", 2, 2, [1, 2], [
    scope([a, e], [rel("difference", 1)]), scope([a, e], [rel("difference", 1)], ' mode "all"'),
    scope([a, b, d, e], [rel("less")], ' mode "all"'), scope([a, b, e], [rel("at-least", 2)], ' mode "all" negative true'),
    scope([a, b, d, e], [rel("difference", 1)], ' move "king"'), scope([a, b, d, e], [rel("sum", 3)], ' move "diagonal"'),
    scope([a, b, d, e], [rel("difference", 1)], ' move "knight"'), scope([a, e], [rel("difference", 1)], ' move "bishop"'),
]);

differentialTests("anchors and exceptions agree with the published definition", 2, 2, [1, 2], [
    scope([a, b, d, e], [rel("difference", 1)], ` mode "incident" anchors ${list(a)}`),
    scope([a, b, d, e], [rel("sum", 3), rel("less")], ` mode "incident" move "king" anchors ${list(b, e)} negative true`),
    scope([a, b, d, e], [rel("difference", 1)], ` except [${list(b, a)}]`), scope([a, b, d, e], [rel("difference", 1)], ` mode "all" except [${list(a, e)},${list(d, a)}]`),
    scope([a, b], [rel("multiple")]), scope([a, b], [rel("shift")]), `not ${scope([a, b, d], [rel("sum", 3)])}`,
]);

differentialTests("channel V follows the effective values", 2, 2, [1, 2], [
    scope([a, b, d], [rel("difference", 1)], ' channel "V"'), scope([a, b, d, e], [rel("sum", 3), rel("less")], ' channel "V" negative true'),
    scope([a, b, d, e], [rel("difference", 1)], ' channel "V" mode "all"'),
]);

differentialTests("other alphabets agree with the published definition", 1, 3, [0, 2, 5], [scope([a, b, c], [rel("ratio", 2), rel("difference", 5)]), scope([a, c], [rel("multiple")], ' mode "all"')]);

differentialTests("negative digits agree with the published definition", 1, 3, [-1, 0, 3], [scope([a, b, c], [rel("sum", 2), rel("difference", 3)], ' mode "all"')]);

test("a modifier board: D agrees with the evaluator where V would differ", () => {
  differential(2, 3, [1, 2], [scope([a, b], [rel("difference", 1)]), scope([b, c], [rel("sum", 3)], " negative true")], `\n${modifier}`);
});

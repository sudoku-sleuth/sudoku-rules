import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";

// Mutation-tested: binding the clue as a minimum (`type: "min"` in lower.ts) fails the tests and differentials.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3"];
const [a, b, c, d, e, f] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const context = (alphabet = [1, 2, 3]): BoardContext => ({ rows: 2, cols: 3, activeCells: cells, alphabet, regions: [cells] });
const nf = (rules: string, alphabet?: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, context(alphabet));
const list = (xs: Cell[]) => `[${xs.map(x => `"${x}"`).join(",")}]`;
const tardis = (clue: Cell, neighbours: Cell[], extra = "") => `tardis cell "${clue}" neighbours ${list(neighbours)}${extra}`;
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `value-modifier factor 2 offset 0 exactly [["${f}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;

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
  nf(tardis(e, [b, d, f]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3, r2c1, r2c2, r2c3]]}\n---${body(tardis(e, [b, d, f]))}` });
}, 30000);

test("the clue digit exceeds every listed neighbour", () => {
  const g = form(tardis(e, [b, d, f]));
  expect(holds(g, at(0, 1, 0, 2, 3, 1))).toBe(true);
  expect(holds(g, at(0, 1, 0, 3, 3, 1))).toBe(false);
  expect(holds(g, at(0, 3, 0, 1, 2, 1))).toBe(false);
  expect(holds(g, at(3, 3, 3, 3, 3, 3))).toBe(false);
});

test("the neighbours are the listed cells, not the geometric ones", () => {
  // r1c1 is only diagonal to r2c2, yet it is a listed neighbour.
  const g = form(tardis(e, [a, f]));
  expect(holds(g, at(1, 3, 3, 3, 2, 1))).toBe(true);
  expect(holds(g, at(2, 1, 1, 1, 2, 1))).toBe(false);
  // Cells beside the clue that are not listed are free.
  expect(holds(g, at(1, 3, 3, 3, 2, 1))).toBe(true);
});

test("it is the neighbour extremum alias with explicit neighbours", () => {
  eq(tardis(e, [b, d, f]), `neighbour-extremum ${e} type "max" exhaustive false neighbours ${list([b, d, f])}`);
  eq(tardis(e, [b, d, f]), `extremum ${e} type "max" exhaustive false neighbours ${list([f, d, b, b])} boundary false neighbourhood "orthogonal"`);
  eq(tardis(e, [b, d, f]), tardis(e, [f, d, b]));
  eq(tardis(e, [b, d, f]), `https://rules.sudoku-sleuth.com/tardis.md cell "r2c2" neighbours ["r1c2","r2c1","r2c3"] channel "D"`);
});

test("near misses compare as different", () => {
  differs(tardis(e, [b, d, f]), tardis(e, [b, d]));
  differs(tardis(e, [b, d, f]), tardis(b, [e, d, f]));
  differs(tardis(e, [b, d, f]), tardis(e, [b, d, c]));
  differs(tardis(e, [b, d, f]), `neighbour-extremum ${e} type "min" exhaustive false neighbours ${list([b, d, f])}`);
  differs(tardis(e, [b, d, f]), `not ${tardis(e, [b, d, f])}`);
  differs(tardis(e, [b, d, f]), `${tardis(e, [b, d, f])}\n${tardis(a, [b])}`);
});

test("a neighbour list that holds the clue cell cannot hold", () => {
  expect(form(tardis(e, [b, e]))).toEqual({ op: "Any", children: [] });
});

test("channel V is converted to D on a resolved board and left uncovered beside a value modifier", () => {
  const n = nf(tardis(e, [b, d, f], ' channel "V"'));
  expect(n.status).toBe("complete");
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
  eq(tardis(e, [b, d, f], ' channel "V"'), tardis(e, [b, d, f]));
  const cover = (rules: string) => nf(rules).normalForm!.coverage.find(x => x.kind === "tardis");
  expect(cover(`${tardis(e, [b, d, f], ' channel "V"')}\n${modifier}`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Effective-value") });
  expect(cover(`${tardis(e, [b, d, f])}\n${modifier}`)).toMatchObject({ status: "lowered" });
});

function differential(symbols: number[], entries: string[]): void {
  const board = context(symbols);
  const compile = (text: string) => {
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 3, symbols: [${symbols}], regions: [[${cells.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    return compiled.value!.rules[0];
  };
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "tardis").every(x => x.status === "lowered")).toBe(true);
    const rule = compile(text);
    const readsV = text.includes('channel "V"');
    const printed = readsV ? normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text.replace(' channel "V"', ""))}` }, board).normalForm!.solution : undefined;
    const twin = readsV ? undefined : compile(`${text} channel "V"`);
    let total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === cells.length) {
        const expected = published(rule, values);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        // Effective values that differ from the printed digits, still on the board.
        const changed = { ...values, [e]: symbols[(symbols.indexOf(values[e]) + 1) % symbols.length] };
        if (readsV) expect([text, JSON.stringify(changed), published(rule, values, changed)]).toEqual([text, JSON.stringify(changed), holds(printed!, changed)]);
        else {
          expect([text, JSON.stringify(changed), published(rule, values, changed)]).toEqual([text, JSON.stringify(changed), expected]);
          expect([text, JSON.stringify(changed), published(twin!, values, changed)]).toEqual([text, JSON.stringify(changed), published(rule, changed)]);
        }
        total++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [cells[index]]: x });
    };
    walk(0, {});
    expect(total).toBeGreaterThan(0);
  }
}
function differentialTests(title: string, symbols: number[], entries: string[]): void {
  for (const entry of entries) test(`${title}: ${entry}`, () => differential(symbols, [entry]));
}

differentialTests("printed digits agree with the published definition", [1, 2], [tardis(e, [b, d, f]), tardis(e, [a, c]), tardis(b, [a, c, e]), tardis(e, [b, e])]);
differentialTests("channel V follows the effective values", [1, 2], [tardis(e, [b, d, f], ' channel "V"'), tardis(a, [b, d], ' channel "V"')]);
differentialTests("other alphabets agree with the published definition", [-1, 4], [tardis(e, [b, d, f])]);

// Three symbols over six cells (729 combinations) tell strictly above from at least; the published formula is slow to read, so this has its own limit.
test("a three-symbol alphabet agrees with the published definition", () => {
  differential([1, 2, 3], [tardis(b, [a, c, e])]);
}, 30000);

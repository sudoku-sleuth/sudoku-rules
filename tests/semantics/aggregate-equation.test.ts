import { expect, test } from "bun:test";
import { parse as parseYaml } from "yaml";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const four = [1, 2, 3, 4];
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
const [a, b, c, d] = cells;
const boardOf = (alphabet: number[], n = 4): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, alphabet = four, n = 4) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(alphabet, n));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };

const operand = (list: string[], operation = "sum", repeats = true, extra: Record<string, unknown> = {}) => ({ operand: undefined as never, cells: list, channel: "D", operation, repeats, ...extra });
const term = (list: string[], coefficient = 1, power = 1, operation = "sum", repeats = true, extra: Record<string, unknown> = {}) => {
  const { operand: _drop, ...o } = operand(list, operation, repeats, extra);
  return { operand: o, coefficient, power };
};
const konst = (k: number) => term([], k, 0, "count");
const equation = (left: unknown[], right: unknown[], extra = "") => `aggregate-equation left ${JSON.stringify(left)} right ${JSON.stringify(right)}${extra}`;
const product = (list: string[], p: number, distinct = false) => `product-cage ${list.join("-")} product ${p} distinct ${distinct}`;
const pairOf = (x: string[], y: string[], relation: object) => `cage-pair cages ${JSON.stringify([x, y])} relation ${JSON.stringify(relation)}`;

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
function form(rules: string, alphabet = four, n = 4) { const r = nf(rules, alphabet, n); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
function reason(rules: string, alphabet = four, n = 4): string {
  const r = nf(rules, alphabet, n);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  const found = r.normalForm!.coverage.filter(x => x.status === "unsupported" && !["sudoku"].includes(x.kind));
  expect(found).toHaveLength(1);
  return (found[0] as { reason: string }).reason;
}
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(product([a, b], 6));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2]]}\n---${body(product([a, b], 2))}` });
}, 30000);

test("the aliases bind the block the way the lowering reads them", () => {
  const meta = (kind: string) => parseYaml(require("node:fs").readFileSync(`rules/${kind}.md`, "utf8").split("---")[1]) as { alias_of: string; alias_bind: Record<string, string> };
  const pc = meta("product-cage");
  expect(pc.alias_of).toBe("aggregate-equation");
  expect(pc.alias_bind.left).toBe('⟨weightedOperand(aggregateOperand(orderedCells(cells),"D","product",¬distinct),1,1):termIndex∈[0,1)⟩');
  expect(pc.alias_bind.right).toBe('⟨weightedOperand(aggregateOperand(⟨c:c∈orderedCells(C),false⟩,"D","count",true),product,0):termIndex∈[0,1)⟩');
  expect([pc.alias_bind.leftOperation, pc.alias_bind.rightOperation, pc.alias_bind.relation]).toEqual(['"sum"', '"sum"', 'relationSpec("difference",0)']);
  const cp = meta("cage-pair");
  expect(cp.alias_of).toBe("aggregate-equation");
  expect(cp.alias_bind.left).toBe('⟨weightedOperand(aggregateOperand(if |cages|=2 then orderedCells(cages[0]) else ⟨c:c∈orderedCells(C),false⟩,"D","sum",true),1,1):termIndex∈[0,1)⟩');
  expect(cp.alias_bind.right).toBe('⟨weightedOperand(aggregateOperand(if |cages|=2 then orderedCells(cages[1]) else ⟨c:c∈orderedCells(C),false⟩,"D","sum",true),1,1):termIndex∈[0,1)⟩');
  expect(cp.alias_bind.relation).toBe('if |cages|=2 then relation else relationSpec("difference",-1)');
});

test("a product cage multiplies the digits, and distinct forbids repeats", () => {
  const f = form(product([a, b], 4));
  expect(holds(f, at(1, 4))).toBe(true);
  expect(holds(f, at(2, 2))).toBe(true);
  expect(holds(f, at(4, 1))).toBe(true);
  expect(holds(f, at(2, 3))).toBe(false);
  const g = form(product([a, b], 4, true));
  expect(holds(g, at(2, 2))).toBe(false);
  expect(holds(g, at(1, 4))).toBe(true);
  const three = form(product([a, b, c], 12));
  expect(holds(three, at(2, 2, 3))).toBe(true);
  expect(holds(three, at(1, 3, 4))).toBe(true);
  expect(holds(three, at(1, 2, 6))).toBe(false);
});

test("a product of zero needs a zero digit; a product the alphabet cannot reach is false", () => {
  const f = form(product([a, b], 0), [0, 1, 2]);
  expect(holds(f, at(0, 2))).toBe(true);
  expect(holds(f, at(1, 0))).toBe(true);
  expect(holds(f, at(1, 2))).toBe(false);
  expect(form(product([a, b], 0))).toEqual({ op: "Any", children: [] });
  expect(form(product([a, b], 7))).toEqual({ op: "Any", children: [] });
  const negative = form(product([a, b], -2), [-2, -1, 1, 2]);
  expect(holds(negative, at(-1, 2))).toBe(true);
  expect(holds(negative, at(2, -1))).toBe(true);
  expect(holds(negative, at(-1, -2))).toBe(false);
});

test("a product cage of one cell fixes that digit", () => {
  const f = form(product([a], 3));
  expect(holds(f, at(3))).toBe(true);
  expect(holds(f, at(2))).toBe(false);
});

test("a cage pair relates the two cage sums", () => {
  const diff = form(pairOf([a, b], [c], { op: "difference", value: 1 }));
  expect(holds(diff, at(1, 2, 2))).toBe(true);
  expect(holds(diff, at(1, 2, 4))).toBe(true);
  expect(holds(diff, at(1, 2, 3))).toBe(false);
  expect(holds(form(pairOf([a], [b], { op: "less" })), at(1, 2))).toBe(true);
  expect(holds(form(pairOf([a], [b], { op: "less" })), at(2, 2))).toBe(false);
  const total = form(pairOf([a, b], [c], { op: "sum", value: 6 }));
  expect(holds(total, at(1, 2, 3))).toBe(true);
  expect(holds(total, at(1, 2, 4))).toBe(false);
  const ratio = form(pairOf([a, b], [c], { op: "ratio", value: 2 }));
  expect(holds(ratio, at(1, 1, 1))).toBe(true);
  expect(holds(ratio, at(2, 2, 2))).toBe(true);
  expect(holds(ratio, at(1, 2, 3))).toBe(false);
  expect(holds(form(pairOf([a], [b], { op: "at-least", value: 2 })), at(1, 3))).toBe(true);
  expect(holds(form(pairOf([a], [b], { op: "at-least", value: 2 })), at(1, 2))).toBe(false);
  const multiple = form(pairOf([a, b], [c], { op: "multiple" }));
  expect(holds(multiple, at(1, 3, 2))).toBe(true);
  expect(holds(multiple, at(1, 3, 3))).toBe(false);
});

test("cage pairs that overlap read each cage on its own", () => {
  const f = form(pairOf([a, b], [b, c], { op: "difference", value: 0 }));
  expect(holds(f, at(1, 2, 1))).toBe(true);
  expect(holds(f, at(1, 2, 2))).toBe(false);
  expect(holds(form(pairOf([a, b], [b, c], { op: "less" })), at(1, 2, 2))).toBe(true);
  expect(holds(form(pairOf([a, b], [b, c], { op: "less" })), at(2, 2, 1))).toBe(false);
});

test("a cage pair with other than two cages is false", () => {
  const three = `cage-pair cages ${JSON.stringify([[a], [b], [c]])} relation ${JSON.stringify({ op: "less" })}`;
  expect(form(three)).toEqual({ op: "Any", children: [] });
  const one = `cage-pair cages ${JSON.stringify([[a, b]])} relation ${JSON.stringify({ op: "difference", value: 0 })}`;
  expect(holds(form(one), at(1, 1))).toBe(false);
});

test("the aggregate equation example: twice one cell equals another", () => {
  const f = form(equation([term([a], 2)], [term([b])]));
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(2, 4))).toBe(true);
  expect(holds(f, at(2, 3))).toBe(false);
});

test("sums with a constant: one side's total fixed, or both sides' cells offset", () => {
  const total = form(equation([term([a, b])], [konst(5)]));
  expect(holds(total, at(2, 3))).toBe(true);
  expect(holds(total, at(2, 2))).toBe(false);
  const offset = form(equation([term([a]), konst(1)], [term([b])]));
  expect(holds(offset, at(1, 2))).toBe(true);
  expect(holds(offset, at(2, 2))).toBe(false);
  const doubled = form(equation([term([a, b], 2)], [konst(6)]));
  expect(holds(doubled, at(1, 2))).toBe(true);
  expect(holds(doubled, at(1, 1))).toBe(false);
  expect(form(equation([term([a, b], 2)], [konst(5)]))).toEqual({ op: "Any", children: [] });
});

test("a count operand is the number of its cells, and a power of zero leaves the coefficient", () => {
  const f = form(equation([term([a])], [term([b, c, d], 1, 1, "count")]));
  expect(holds(f, at(3, 1))).toBe(true);
  expect(holds(f, at(2, 1))).toBe(false);
  const zero = form(equation([term([a], 4, 0)], [konst(4)]));
  expect(holds(zero, at(1))).toBe(true);
  expect(form(equation([term([a], 4, 0)], [konst(5)]))).toEqual({ op: "Any", children: [] });
});

test("a side that multiplies its terms", () => {
  const f = form(equation([term([a]), konst(2)], [term([b])], ' leftOperation "product"'));
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(2, 4))).toBe(true);
  expect(holds(f, at(2, 3))).toBe(false);
  const productOperand = form(equation([term([a, b], 1, 1, "product")], [konst(6)]));
  expect(holds(productOperand, at(2, 3))).toBe(true);
  expect(holds(productOperand, at(1, 6))).toBe(false);
  const scaled = form(equation([term([a, b], 2, 1, "product")], [konst(8)]));
  expect(holds(scaled, at(1, 4))).toBe(true);
  expect(holds(scaled, at(2, 3))).toBe(false);
  expect(holds(form(equation([term([a, b], 1, 1, "product"), konst(1)], [konst(5)])), at(1, 4))).toBe(true);
});

test("a slice reads part of the list; a slice outside the list makes the declaration false", () => {
  const f = form(equation([term([a, b, c], 1, 1, "sum", true, { start: 1, length: 2 })], [konst(5)]));
  expect(holds(f, at(4, 2, 3))).toBe(true);
  expect(holds(f, at(1, 2, 2))).toBe(false);
  const tail = form(equation([term([a, b, c], 1, 1, "sum", true, { start: 2 })], [konst(3)]));
  expect(holds(tail, at(1, 1, 3))).toBe(true);
  expect(form(equation([term([a, b], 1, 1, "sum", true, { start: 1, length: 2 })], [konst(3)]))).toEqual({ op: "Any", children: [] });
  expect(form(equation([term([a, b], 1, 1, "sum", true, { start: 3 })], [konst(3)]))).toEqual({ op: "Any", children: [] });
});

test("repeats false requires the operand digits to differ, including a repeated cell", () => {
  const f = form(equation([term([a, b], 1, 1, "sum", false)], [konst(4)]));
  expect(holds(f, at(1, 3))).toBe(true);
  expect(holds(f, at(2, 2))).toBe(false);
  const twice = form(equation([term([a, a], 1, 1, "sum", false)], [konst(4)]));
  expect(holds(twice, at(2))).toBe(false);
  const twiceAllowed = form(equation([term([a, a])], [konst(4)]));
  expect(holds(twiceAllowed, at(2))).toBe(true);
});

test("relations other than equality compare the two sides' values", () => {
  const f = form(equation([term([a, b])], [term([c], 2)], ` relation ${JSON.stringify({ op: "less" })}`));
  expect(holds(f, at(1, 2, 2))).toBe(true);
  expect(holds(f, at(2, 2, 2))).toBe(false);
  const constant = form(equation([term([a, b])], [konst(3)], ` relation ${JSON.stringify({ op: "at-least", value: 2 })}`));
  expect(holds(constant, at(4, 4))).toBe(true);
  expect(holds(constant, at(1, 1))).toBe(false);
  expect(holds(constant, at(1, 2))).toBe(false);
});

test("equivalent spellings compare as equal", () => {
  eq(product([a, b], 6), equation([term([a, b], 1, 1, "product", true)], [konst(6)]));
  eq(product([b, a], 6, true), equation([term([b, a], 1, 1, "product", false)], [konst(6)]));
  eq(pairOf([a, b], [c], { op: "difference", value: 0 }), equation([term([a, b])], [term([c])]));
  eq(pairOf([a, b], [c], { op: "difference", value: 0 }), `equal-sums groups ${JSON.stringify([[a, b], [c]])}`);
  eq(equation([term([a, b])], [konst(5)]), `cage ${a}-${b} total 5 repeats true`);
  eq(equation([term([a, b])], [term([c])]), equation([term([c])], [term([a, b])]));
  eq(equation([term([a, b])], [term([c], 2)]), equation([term([a]), term([b])], [term([c]), term([c])]));
});

test("near misses compare as different", () => {
  differs(product([a, b], 6), product([a, b], 4));
  differs(product([a, b], 4), product([a, b], 4, true));
  differs(product([a, b], 4), product([a, c], 4));
  differs(pairOf([a, b], [c], { op: "difference", value: 1 }), pairOf([a, b], [c], { op: "difference", value: 2 }));
  differs(pairOf([a, b], [c], { op: "less" }), pairOf([c], [a, b], { op: "less" }));
  differs(pairOf([a], [b], { op: "less" }), pairOf([a], [b], { op: "multiple" }));
  differs(equation([term([a], 2)], [term([b])]), equation([term([a], 3)], [term([b])]));
  differs(equation([term([a, b])], [konst(5)]), equation([term([a, b])], [konst(6)]));
  differs(equation([term([a, b])], [konst(5)]), equation([term([a, b], 1, 1, "sum", false)], [konst(5)]));
  differs(equation([term([a, b])], [term([c])]), `not ${equation([term([a, b])], [term([c])])}`);
});

test("combinations left uncovered keep a typed reason", () => {
  expect(reason(equation([{ ...term([a]), operand: { cells: [a], channel: "V", operation: "sum", repeats: true } }], [konst(2)]))).toContain("V channel");
  expect(reason(equation([term([a, b], 1, 1, "decimal")], [konst(12)]))).toContain("decimal");
  expect(reason(equation([term([a, b], 1, 1, "sum", true, { stop: "target", target: 3 })], [konst(3)]))).toContain("stopping prefix");
  expect(reason(equation([term([a], 1, 2)], [konst(4)]))).toContain("power above one");
  expect(reason(equation([term([a, b], 1, 1, "product")], [term([c])]))).toContain("product operand compared");
  expect(reason(equation([term([a, b], 1, 1, "product")], [term([c], 1, 1, "product")]))).toContain("product operand");
  expect(reason(equation([term([a]), term([b], 1, 1, "product")], [konst(2)], ' leftOperation "product"'))).toContain("two varying terms");
  expect(reason(equation([term([a, b]), term([c, d], 1, 1, "product")], [konst(2)]))).toContain("beside another varying term");
  expect(reason(equation([term([a], 2), term([b])], [konst(5)]))).toContain("differing weights");
  expect(reason(equation([term([a], 1.5)], [konst(3)]))).toContain("not a whole number");
  expect(reason(equation([term([a, a], 1, 1, "product")], [konst(4)]))).toContain("more than once");
  expect(reason(equation([term([a, b])], [term([c, d], 2), term([a])], ` relation ${JSON.stringify({ op: "less" })}`))).toContain("not lowered");
  expect(reason(pairOf([a], [b], { op: "shift" }))).toContain("shift");
  expect(reason(product([a, b], 1.5))).toContain("not a whole number");
  expect(reason(product([a, b], 1e20))).toContain("safe whole numbers");
});

test("expansion beyond the bounds stays uncovered", () => {
  const many = Array.from({ length: 12 }, (_, i) => `r1c${i + 1}` as Cell);
  const board: BoardContext = { rows: 1, cols: 12, activeCells: many, alphabet: Array.from({ length: 40 }, (_, i) => i + 1) };
  const run = (rules: string) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
  const r = run(product(many, 479001600));
  // Twelve cells over forty digits, with a product reachable many ways, pass the work bound.
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage[0]).toMatchObject({ kind: "product-cage", status: "unsupported", reason: expect.stringContaining("1,000,000") });
  const pairs = run(pairOf(many.slice(0, 6), many.slice(6), { op: "at-least", value: 0 }));
  expect(pairs.normalForm!.coverage[0]).toMatchObject({ kind: "cage-pair", status: "unsupported", reason: expect.stringContaining("20,000") });
});

function differential(n: number, symbols: number[], entries: string[]): number {
  let seen = 0;
  const used = cells.slice(0, n);
  const board = boardOf(symbols, n);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect([text, r.normalForm!.coverage.filter(x => x.kind !== "sudoku" && x.status !== "lowered")]).toEqual([text, []]);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    // The evaluator runs the lowered formula itself when a rule has one, so it is switched off to compare with the published definition.
    const rule = { ...compiled.value!.rules[0], finite: undefined };
    let satisfied = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const expected = evaluate(rule, { digits: values }).status === "holds";
        // The rule reads printed digits, so effective values that differ from them change nothing.
        expect(evaluate(rule, { digits: values, values: Object.fromEntries(Object.entries(values).map(([k, x]) => [k, 2 * x])) }).status === "holds").toBe(expected);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        if (expected) satisfied++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    seen += satisfied;
  }
  return seen;
}

test("the lowered formula and the public evaluator agree on product cages", () => {
  expect(differential(3, [1, 2, 3, 4], [product([a, b, c], 12), product([a, b, c], 12, true), product([a, b], 4), product([a], 3), `not ${product([a, b], 4)}`])).toBeGreaterThan(0);
  expect(differential(3, [0, 1, 2, 3], [product([a, b, c], 0), product([a, b], 6, true), product([a, b, c], 0, true)])).toBeGreaterThan(0);
  expect(differential(2, [-2, -1, 1, 2], [product([a, b], -2), product([a, b], 4, true)])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on cage pairs", () => {
  const relations = [{ op: "difference", value: 1 }, { op: "difference", value: 0 }, { op: "at-least", value: 2 }, { op: "ratio", value: 2 }, { op: "sum", value: 6 }, { op: "less" }, { op: "multiple" }];
  expect(differential(3, [1, 2, 3, 4], relations.map(r => pairOf([a, b], [c], r)))).toBeGreaterThan(0);
  expect(differential(3, [1, 2, 3, 4], [pairOf([a, b], [b, c], { op: "difference", value: 1 }), pairOf([a], [a], { op: "less" }), pairOf([a], [a], { op: "multiple" })])).toBeGreaterThan(0);
  expect(differential(3, [0, 1, 2, 3], [pairOf([a], [b], { op: "ratio", value: 2 }), pairOf([a, b], [c], { op: "multiple" })])).toBeGreaterThan(0);
  expect(differential(3, [1, 2, 3, 4], [`cage-pair cages ${JSON.stringify([[a], [b], [c]])} relation ${JSON.stringify({ op: "less" })}`, `not ${pairOf([a], [b], { op: "less" })}`])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on aggregate equations", () => {
  expect(differential(3, [1, 2, 3, 4], [
    equation([term([a], 2)], [term([b])]),
    equation([term([a, b])], [konst(5)]),
    equation([term([a]), konst(1)], [term([b])]),
    equation([term([a, b], 2), term([c], -1)], [konst(0)]),
    equation([term([a, b], 1, 1, "sum", false)], [term([c])]),
    equation([term([a, b, c], 1, 1, "sum", true, { start: 1, length: 2 })], [konst(5)]),
    equation([term([a, b, c], 1, 1, "sum", true, { start: 2, length: 2 })], [konst(5)]),
    equation([term([a, b, c], 1, 1, "count")], [term([a])]),
    equation([term([a, b], 1, 1, "product")], [konst(6)]),
    equation([term([a]), konst(1)], [term([b])], ' leftOperation "product"'),
    equation([term([a, b]), term([c], -1)], [konst(0)], ` relation ${JSON.stringify({ op: "difference", value: 0 })}`),
    equation([term([a, b])], [term([c], 2)], ` relation ${JSON.stringify({ op: "less" })}`),
    equation([term([a, b])], [konst(3)], ` relation ${JSON.stringify({ op: "at-least", value: 2 })}`),
    equation([term([a], 3), konst(2)], [term([b], 2)], ` relation ${JSON.stringify({ op: "sum", value: 9 })}`),
    equation([term([a, a])], [term([b])]),
    equation([term([a, a], 1, 1, "sum", false)], [term([b])]),
    equation([term([a], 5, 0)], [konst(5)]),
  ])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree with zero in the alphabet", () => {
  expect(differential(3, [0, 1, 2], [
    equation([term([a], 3, 0)], [konst(3)]),
    equation([term([a, b], 1, 1, "product")], [konst(0)]),
    equation([term([a], 1, 1, "product"), konst(0)], [term([b])]),
    equation([term([a], 2, 0), term([b])], [term([c])]),
  ])).toBeGreaterThan(0);
});

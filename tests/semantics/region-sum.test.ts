import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const [a, b, c, d] = ["r1c1", "r1c2", "r1c3", "r1c4"] as Cell[];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const regions = [[a, b], [c, d]];
const context = (symbols: number[]): BoardContext => ({ rows: 1, cols: 4, activeCells: [a, b, c, d], alphabet: symbols, regions });
const nf = (rules: string, symbols = [1, 2, 3, 4], extra = "") => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(`${rules}${extra}`)}` }, context(symbols));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["${d}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
const two = `${a}-${b}-${c}-${d} segments [["${a}","${b}"],["${c}","${d}"]]`;

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

test("channel D normalises with nothing uncovered", () => {
  for (const params of ['channel "D"', 'channel "D" combine true', 'channel "D" loop true']) {
    const n = nf(`region-sum ${two} ${params}`);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
  }
});

test("channel D and the default channel compare equivalent once the value domain is resolved", () => {
  eq(`region-sum ${two}`, `region-sum ${two} channel "V"`);
  eq(`region-sum ${two} channel "D"`, `region-sum ${two}`);
  eq(`region-sum ${two} channel "D"`, `region-sum ${d}-${c}-${b}-${a} segments [["${d}","${c}"],["${b}","${a}"]] channel "D"`);
});

test("different segments or combining give different normal forms", () => {
  differs(`region-sum ${two} channel "D"`, `region-sum ${a}-${b}-${c} segments [["${a}","${b}"],["${c}"]] channel "D"`);
  differs(`region-sum ${a}-${b}-${c} segments [["${a}","${b}"],["${c}"]] channel "D"`, `region-sum ${a}-${b}-${d} segments [["${a}","${b}"],["${d}"]] channel "D"`);
  differs(`region-sum ${a}-${c}-${b} segments [["${a}"],["${c}"],["${b}"]] channel "D"`, `region-sum ${a}-${c}-${b} segments [["${a}"],["${c}"],["${b}"]] combine true channel "D"`);
});

test("channel D stays covered when the effective-value domain is unresolved, channel V does not", () => {
  const read = (params: string) => nf(`region-sum ${two}${params}`, [1, 2, 3, 4], modifier).normalForm!.coverage.find(x => x.kind === "region-sum")!;
  expect(read(' channel "D"')).toMatchObject({ status: "lowered" });
  expect(read("")).toMatchObject({ status: "unsupported" });
  expect(read(' channel "V"')).toMatchObject({ status: "unsupported" });
});

/** The formula as lowered, before the effective-value rewrite, read channel by channel against separate digits and effective values. */
function holdsOn(f: Formula, digits: Record<string, number>, values: Record<string, number>): boolean {
  const read = (channel: string) => channel === "D" ? digits : values;
  switch (f.op) {
    case "All": return f.children.every(x => holdsOn(x, digits, values));
    case "Any": return f.children.some(x => holdsOn(x, digits, values));
    case "Not": return !holdsOn(f.child, digits, values);
    case "SumEqual": return f.left.reduce((n, q) => n + BigInt(read(f.channel)[q]), 0n) === f.right.reduce((n, q) => n + BigInt(read(f.channel)[q]), 0n);
    default: throw Error(`Unexpected ${f.op}`);
  }
}

const symbols = [1, 2, 3], cells = [a, b, c, d];
const entries = [
  `region-sum ${two}`, `region-sum ${a}-${b}-${c} segments [["${a}","${b}"],["${c}"]]`,
  `region-sum ${a}-${c}-${b}-${d} segments [["${a}"],["${c}"],["${b}"],["${d}"]] combine true`, `region-sum ${two} loop true`,
  `region-sum ${a}-${c}-${b} segments [["${a}"],["${c}"],["${b}"]]`, `not region-sum ${two}`,
];
/**
 * Each declaration is written on the default channel V and its twin on channel D. The published definition (the channel V text,
 * evaluated with effective values) is the oracle: with values equal to the digits it judges the channel D lowering, and with values
 * that differ (the second cell doubled) it judges the channel V lowering read before the effective-value rewrite. Some assignment
 * must make those two verdicts disagree, so a D-versus-V mix-up is caught.
 */
function differential(text: string) {
  const twin = text.replace(/(region-sum [^\n]*)$/, '$1 channel "D"');
  const v = nf(text, symbols), d2 = nf(twin, symbols);
  for (const n of [v, d2]) { expect(n.issues).toEqual([]); expect(n.status).toBe("complete"); }
  expect(d2.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
  expect(JSON.stringify(d2.normalForm!.solution)).not.toContain('"channel":"V"');
  const before = JSON.parse(v.normalForm!.rewrites.find(r => r.rule === "value-channel")!.before) as Formula;
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3], regions: [[${a}, ${b}], [${c}, ${d}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rule = compiled.value!.rules[0];
  let satisfied = 0, total = 0, disagree = 0;
  const walk = (index: number, digits: Record<string, number>) => {
    if (index === cells.length) {
      const values = { ...digits, [b]: 2 * digits[b] };
      const onDigits = evaluate(rule, { digits, values: digits }).status === "holds";
      const onValues = evaluate(rule, { digits, values }).status === "holds";
      expect([twin, JSON.stringify(digits), holds(d2.normalForm!.solution, digits)]).toEqual([twin, JSON.stringify(digits), onDigits]);
      expect([text, JSON.stringify(values), holdsOn(before, digits, values) !== text.startsWith("not ")]).toEqual([text, JSON.stringify(values), onValues]);
      total++;
      if (onDigits) satisfied++;
      if (onDigits !== onValues) disagree++;
      return;
    }
    for (const x of symbols) walk(index + 1, { ...digits, [cells[index]]: x });
  };
  walk(0, {});
  expect([text, satisfied > 0, satisfied < total, disagree > 0]).toEqual([text, true, true, true]);
}
for (const text of entries) test(`the lowered formula and the public evaluator agree on every assignment: ${text}`, () => differential(text));

test("a board without primary regions leaves channel D uncovered", () => {
  const bare: BoardContext = { rows: 1, cols: 4, activeCells: cells, alphabet: symbols };
  const n = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(`region-sum ${two} channel "D"`)}` }, bare);
  expect(n.normalForm!.coverage.find(x => x.kind === "region-sum")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("primary board regions") });
});

test("an invalid channel is rejected as invalid input", () => {
  const n = nf(`region-sum ${two} channel "X"`);
  expect(n.status).toBe("invalid");
  expect(n.issues.map(i => i.message)).toEqual(["channel must be one of D, V."]);
});

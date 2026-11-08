import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const [a, b, c] = ["r1c1", "r1c2", "r1c3"] as Cell[];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const context = (symbols: number[]): BoardContext => ({ rows: 1, cols: 3, activeCells: [a, b, c], alphabet: symbols, regions: [[a, b, c]] });
const nf = (rules: string, symbols = [1, 2, 3, 4], extra = "") => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(`${rules}${extra}`)}` }, context(symbols));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["${c}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;

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

test("channel D normalises with nothing uncovered for every relation", () => {
  for (const relation of ["sum 5", "difference 1", "at-least 2", "ratio 2", "less", "multiple", "shift"]) {
    const n = nf(`pair ${a}-${b} ${relation} channel "D"`);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
  }
});

test("channel D and the default channel compare equivalent once the value domain is resolved", () => {
  eq(`pair ${a}-${b} sum 5 channel "D"`, `pair ${a}-${b} sum 5`);
  eq(`pair ${a}-${b} sum 5 channel "V"`, `pair ${a}-${b} sum 5`);
  eq(`pair ${a}-${b} sum 5 channel "D"`, `pair ${b}-${a} sum 5 channel "D"`);
});

test("a different relation, value or cell pair gives a different normal form", () => {
  differs(`pair ${a}-${b} sum 5 channel "D"`, `pair ${a}-${b} sum 4 channel "D"`);
  differs(`pair ${a}-${b} sum 5 channel "D"`, `pair ${a}-${b} difference 5 channel "D"`);
  differs(`pair ${a}-${b} sum 5 channel "D"`, `pair ${a}-${c} sum 5 channel "D"`);
  differs(`pair ${a}-${b} less channel "D"`, `pair ${b}-${a} less channel "D"`);
});

test("channel D stays covered when the effective-value domain is unresolved, channel V does not", () => {
  const read = (params: string) => nf(`pair ${a}-${b} sum 5${params}`, [1, 2, 3, 4], modifier).normalForm!.coverage.find(x => x.kind === "pair")!;
  expect(read(' channel "D"')).toMatchObject({ status: "lowered" });
  expect(read("")).toMatchObject({ status: "unsupported" });
  expect(read(' channel "V"')).toMatchObject({ status: "unsupported" });
});

test("an invalid channel is rejected", () => {
  expect(nf(`pair ${a}-${b} sum 5 channel "X"`).status).toBe("invalid");
});

/** The formula as lowered, before the effective-value rewrite, read channel by channel against separate digits and effective values. */
function holdsOn(f: Formula, digits: Record<string, number>, values: Record<string, number>): boolean {
  const read = (channel: string) => channel === "D" ? digits : values;
  switch (f.op) {
    case "All": return f.children.every(x => holdsOn(x, digits, values));
    case "Any": return f.children.some(x => holdsOn(x, digits, values));
    case "Not": return !holdsOn(f.child, digits, values);
    case "Pair": return f.table.some(([x, y]) => x === read(f.channel)[f.cells[0]] && y === read(f.channel)[f.cells[1]]);
    default: throw Error(`Unexpected ${f.op}`);
  }
}

const symbols = [1, 2, 3, 4], cells = [a, b, c];
const relations = ["sum 5", "difference 1", "at-least 2", "ratio 2", "less", "multiple", "shift"];
const entries = [...relations.map(r => `pair ${a}-${b} ${r}`), `not pair ${a}-${b} sum 5`, `pair ${b}-${c} difference 1`, `pair ${b}-${a} less`];
/**
 * Each declaration is written on the default channel V and its twin on channel D. The published definition (the channel V text,
 * evaluated with effective values) is the oracle: with values equal to the digits it judges the channel D lowering, and with values
 * that differ (the second cell moved to the next symbol, wrapping) it judges the channel V lowering read before the effective-value rewrite. Some assignment
 * must make those two verdicts disagree, so a D-versus-V mix-up is caught.
 */
function differential(text: string) {
  const twin = `${text} channel "D"`;
  const v = nf(text, symbols), d = nf(twin, symbols);
  for (const n of [v, d]) { expect(n.issues).toEqual([]); expect(n.status).toBe("complete"); }
  expect(d.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
  expect(JSON.stringify(d.normalForm!.solution)).not.toContain('"channel":"V"');
  const before = JSON.parse(v.normalForm!.rewrites.find(r => r.rule === "value-channel")!.before) as Formula;
  const rule = compile(text);
  let satisfied = 0, total = 0, disagree = 0;
  const walk = (index: number, digits: Record<string, number>) => {
    if (index === cells.length) {
      const values = { ...digits, [b]: digits[b] % 4 + 1 };
      const onDigits = evaluate(rule, { digits, values: digits }).status === "holds";
      const onValues = evaluate(rule, { digits, values }).status === "holds";
      expect([twin, JSON.stringify(digits), holds(d.normalForm!.solution, digits)]).toEqual([twin, JSON.stringify(digits), onDigits]);
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
function compile(text: string) {
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4], regions: [[${cells.join(", ")}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  return compiled.value!.rules[0];
}
for (const text of entries) test(`the lowered formula and the public evaluator agree on every assignment: ${text}`, () => differential(text));

test("a pair needs exactly two cells whatever the channel", () => {
  for (const cellsText of [a, `${a}-${b}-${c}`]) {
    const n = nf(`pair ${cellsText} sum 5 channel "D"`);
    expect(n.status).toBe("invalid");
    expect(n.issues.map(i => i.message)).toEqual(["Write 2 cells for cells, joined by hyphens, such as r1c1-r1c2."]);
  }
});

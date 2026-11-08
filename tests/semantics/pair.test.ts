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

/**
 * The evaluator runs a lowered declaration's own formula unless the assignment supplies effective values and the formula reads them,
 * so the expectation comes from the published definition: the declaration is written on channel V (the default) and evaluated with
 * effective values equal to the digits, which is what channel D reads.
 */
const oracle = (text: string) => text.replace(/ channel "D"/g, "");
type Entry = string | [string, "none" | "all"];
const symbols = [1, 2, 3, 4], cells = [a, b, c];
function compile(text: string) {
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4], regions: [[${cells.join(", ")}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  return compiled.value!.rules[0];
}
function differential(entry: Entry) {
  const [text, extreme] = typeof entry === "string" ? [entry, undefined] : entry;
  const n = nf(text, symbols);
  expect(n.issues).toEqual([]);
  expect(n.status).toBe("complete");
  const rule = compile(oracle(text));
  let satisfied = 0, total = 0;
  const walk = (index: number, values: Record<string, number>) => {
    if (index === cells.length) {
      const expected = evaluate(rule, { digits: values, values }).status === "holds";
      expect([text, JSON.stringify(values), holds(n.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
      total++;
      if (expected) satisfied++;
      return;
    }
    for (const x of symbols) walk(index + 1, { ...values, [cells[index]]: x });
  };
  walk(0, {});
  // Agreement is never vacuous: a declaration is satisfied by some assignments and broken by others unless it is marked "none" or "all".
  expect([text, satisfied > 0, satisfied < total]).toEqual([text, extreme !== "none", extreme !== "all"]);
}
const entries: Entry[] = [
  `pair ${a}-${b} sum 5`, `pair ${a}-${b} sum 5 channel "D"`, `pair ${a}-${b} difference 1 channel "D"`, `pair ${a}-${b} at-least 2 channel "D"`,
  `pair ${a}-${b} ratio 2 channel "D"`, `pair ${a}-${b} less channel "D"`, `pair ${a}-${b} multiple channel "D"`, `pair ${a}-${b} shift channel "D"`,
  `not pair ${a}-${b} sum 5 channel "D"`, `pair ${a}-${a} sum 8 channel "D"`,
];
for (const entry of entries) test(`the lowered formula and the public evaluator agree on every assignment: ${typeof entry === "string" ? entry : entry[0]}`, () => differential(entry));

test("channel D follows the printed digits when the effective values differ", () => {
  const n = nf(`pair ${a}-${b} sum 5 channel "D"`, symbols);
  const rule = compile(`pair ${a}-${b} sum 5`);
  const digits = { [a]: 2, [b]: 3, [c]: 1 };
  // The channel V declaration follows the effective values, the channel D declaration ignores them.
  expect(evaluate(rule, { digits, values: { ...digits, [b]: 4 } }).status).toBe("broken");
  expect(holds(n.normalForm!.solution, digits)).toBe(true);
  expect(holds(n.normalForm!.solution, { ...digits, [b]: 4 })).toBe(false);
});

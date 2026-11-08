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

/**
 * The evaluator runs a lowered declaration's own formula unless the assignment supplies effective values and the formula reads them,
 * so the expectation comes from the published definition: the declaration is written on channel V (the default) and evaluated with
 * effective values equal to the digits, which is what channel D reads.
 */
const oracle = (text: string) => text.replace(/ channel "D"/g, "");
type Entry = string | [string, "none" | "all"];
const symbols = [1, 2, 3], cells = [a, b, c, d];
function differential(entry: Entry) {
  const [text, extreme] = typeof entry === "string" ? [entry, undefined] : entry;
  const n = nf(text, symbols);
  expect(n.issues).toEqual([]);
  expect(n.status).toBe("complete");
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3], regions: [[${a}, ${b}], [${c}, ${d}]]}\n---${body(oracle(text))}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rule = compiled.value!.rules[0];
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
  `region-sum ${two}`, `region-sum ${two} channel "D"`, `region-sum ${a}-${b}-${c} segments [["${a}","${b}"],["${c}"]] channel "D"`,
  `region-sum ${a}-${c}-${b}-${d} segments [["${a}"],["${c}"],["${b}"],["${d}"]] combine true channel "D"`, `region-sum ${two} loop true channel "D"`,
  `region-sum ${a}-${c}-${b} segments [["${a}"],["${c}"],["${b}"]] channel "D"`, `not region-sum ${two} channel "D"`,
];
for (const entry of entries) test(`the lowered formula and the public evaluator agree on every assignment: ${typeof entry === "string" ? entry : entry[0]}`, () => differential(entry));

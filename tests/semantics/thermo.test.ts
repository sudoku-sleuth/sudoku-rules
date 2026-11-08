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

test("strictness, orientation and channel normalise with nothing uncovered", () => {
  for (const params of ["", " strict false", " orientation \"reverse\"", " orientation \"either\"", " channel \"D\"", " strict false orientation \"either\" channel \"D\""]) {
    const n = nf(`thermo ${a}-${b}-${c}${params}`);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
  }
});

test("spellings of the same thermometer compare equivalent", () => {
  eq(`thermo ${a}-${b}-${c}`, `thermo ${a}-${b}-${c} strict true orientation "forward" channel "V"`);
  eq(`thermo ${a}-${b}-${c} orientation "reverse"`, `thermo ${c}-${b}-${a}`);
  eq(`thermo ${a}-${b}-${c} strict false`, `slow-thermo ${a}-${b}-${c}`);
  eq(`thermo ${a}-${b}-${c} orientation "either"`, `thermo ${c}-${b}-${a} orientation "either"`);
  eq(`thermo ${a}-${b}-${c} channel "D"`, `thermo ${a}-${b}-${c}`);
});

test("different strictness, orientation, channel or order give different normal forms", () => {
  differs(`thermo ${a}-${b}-${c}`, `thermo ${a}-${b}-${c} strict false`);
  differs(`thermo ${a}-${b}-${c}`, `thermo ${a}-${b}-${c} orientation "reverse"`);
  differs(`thermo ${a}-${b}-${c}`, `thermo ${a}-${b}-${c} orientation "either"`);
  differs(`thermo ${a}-${b}-${c} orientation "reverse"`, `thermo ${a}-${b}-${c} orientation "either"`);
  differs(`thermo ${a}-${b}-${c}`, `thermo ${a}-${c}-${b}`);
});

test("channel D stays covered when the effective-value domain is unresolved, channel V does not", () => {
  const read = (params: string) => nf(`thermo ${a}-${b}${params}`, [1, 2, 3, 4], modifier).normalForm!.coverage.find(x => x.kind === "thermo")!;
  expect(read(" channel \"D\"")).toMatchObject({ status: "lowered" });
  expect(read("")).toMatchObject({ status: "unsupported" });
  expect(read(" channel \"V\"")).toMatchObject({ status: "unsupported" });
});

test("channel V converts to D once the domain is resolved and channel D leaves no rewrite", () => {
  expect(nf(`thermo ${a}-${b}`).normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
  expect(nf(`thermo ${a}-${b} channel "D"`).normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
});

/**
 * The evaluator runs a lowered declaration's own formula unless the assignment supplies effective values and the formula reads them,
 * so the expectation comes from the published definition: the declaration is written on channel V (the default) and evaluated with
 * effective values equal to the digits, which is what channel D reads.
 */
const oracle = (text: string) => text.replace(/ channel "D"/g, "");
type Entry = string | [string, "none" | "all"];
const symbols = [1, 2, 3], cells = [a, b, c];
function differential(entry: Entry) {
  const [text, extreme] = typeof entry === "string" ? [entry, undefined] : entry;
  const n = nf(text, symbols);
  expect(n.issues).toEqual([]);
  expect(n.status).toBe("complete");
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[${cells.join(", ")}]]}\n---${body(oracle(text))}` });
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
  `thermo ${a}-${b}-${c}`, `thermo ${a}-${b}-${c} strict false`, `thermo ${a}-${b}-${c} orientation "reverse"`, `thermo ${a}-${b}-${c} strict false orientation "reverse"`,
  `thermo ${a}-${b}-${c} orientation "either"`, `thermo ${a}-${b}-${c} strict false orientation "either"`, `thermo ${a}-${b}-${c} channel "D"`,
  `thermo ${a}-${b}-${c} orientation "reverse" channel "D"`, [`thermo ${a}-${b}-${a}`, "none"], `thermo ${a}-${b}-${a} strict false orientation "either"`,
  [`thermo ${b}`, "all"], `not thermo ${a}-${b}-${c} orientation "either"`,
];
for (const entry of entries) test(`the lowered formula and the public evaluator agree on every assignment: ${typeof entry === "string" ? entry : entry[0]}`, () => differential(entry));

test("an invalid orientation or strict value is rejected", () => {
  expect(nf(`thermo ${a}-${b} orientation "sideways"`).status).toBe("invalid");
  expect(nf(`thermo ${a}-${b} strict "yes"`).status).toBe("invalid");
  expect(nf(`thermo ${a}-${b} channel "X"`).status).toBe("invalid");
});

test("channel D follows the printed digits when the effective values differ", () => {
  const compile = (text: string) => compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[${cells.join(", ")}]]}\n---${body(text)}` }).value!.rules[0];
  const digits = { [a]: 1, [b]: 2, [c]: 3 };
  // Effective values that break the climb: the channel V declaration follows them, the channel D declaration ignores them.
  const shifted = { ...digits, [b]: 5 };
  expect(evaluate(compile(`thermo ${a}-${b}-${c}`), { digits, values: shifted }).status).toBe("broken");
  expect(evaluate(compile(`thermo ${a}-${b}-${c} channel "D"`), { digits, values: shifted }).status).toBe("holds");
  const n = nf(`thermo ${a}-${b}-${c} channel "D"`, symbols);
  expect(JSON.stringify(n.normalForm!.solution)).not.toContain('"channel":"V"');
  expect(holds(n.normalForm!.solution, digits)).toBe(true);
});

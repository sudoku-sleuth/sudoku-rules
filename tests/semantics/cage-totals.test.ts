import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const [a, b, c]: Cell[] = ["r1c1", "r1c2", "r1c3"];
const digits9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const board: BoardContext = { rows: 1, cols: 3, activeCells: [a, b, c], alphabet: digits9, regions: [[a, b, c]] };
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const file = (rules: string) => ({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` });
// Nonstandard boards state the repeat choice explicitly.
const explicit = (rules: string) => rules.split("\n").map(line => /^(?:\w+: )?(?:not )?(?:cage|killer) /.test(line) && !/\brepeats\b/.test(line) ? `${line} repeats false` : line).join("\n");
const nf = (rules: string, context = board) => normalise(file(explicit(rules)), context);
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };

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
function reason(rules: string, context = board): string {
  const n = nf(rules, context);
  expect(n.issues).toEqual([]);
  expect(n.status).toBe("partial");
  const found = n.normalForm!.coverage.filter(x => x.status === "unsupported" && x.kind === "cage");
  expect(found).toHaveLength(1);
  return (found[0] as { reason: string }).reason;
}

test("a cage total on the standard board normalises with nothing uncovered", () => {
  const standard: BoardContext = { rows: 9, cols: 9, alphabet: digits9, activeCells: Array.from({ length: 81 }, (_, i) => `r${Math.floor(i / 9) + 1}c${i % 9 + 1}` as Cell) };
  const n = normalise(file("cage r1c1-r1c2 total 3"), standard);
  expect(n.issues).toEqual([]);
  expect(n.status).toBe("complete");
  expect(n.normalForm!.coverage.every(x => x.status === "lowered")).toBe(true);
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
});

test("cells listed in another order, the sum alias, killer and split labels compare equivalent", () => {
  eq(`cage ${a}-${b}-${c} total 12`, `cage ${c}-${a}-${b} total 12`);
  eq(`cage ${a}-${b} total 7`, `cage ${a}-${b} sum 7`);
  eq(`cage ${a}-${b} total 7`, `killer ${a}-${b} total 7`);
  eq(`cage ${a}-${b} total 7`, `one: cage ${a}-${b} total 7\ntwo: cage ${a}-${b} total 7`);
  eq(`cage ${a}-${b} total 7 repeats true`, `cage ${b}-${a} total 7 repeats true`);
  eq(`cage ${a}-${b} total 7 channel "V"`, `cage ${a}-${b} total 7`);
  eq(`cage ${a} total 4`, `allowed-digits ${a} digits [4]`);
  eq(`cage ${a}-${b} total 99`, `cage ${a}-${b} total 100`);
});

test("a different total, extra cell, missing cell or repeat rule compares as different", () => {
  differs(`cage ${a}-${b} total 7`, `cage ${a}-${b} total 8`);
  differs(`cage ${a}-${b} total 7`, `cage ${a}-${b}-${c} total 7`);
  differs(`cage ${a}-${b}-${c} total 7`, `cage ${a}-${b} total 7`);
  differs(`cage ${a}-${b} total 7`, `cage ${a}-${b} total 7 repeats true`);
  differs(`cage ${a}-${b} total 7`, `cage ${a}-${b}`);
  differs(`cage ${a}-${b} total 7`, `not cage ${a}-${b} total 7`);
});

test("uncovered shapes name their specific reason", () => {
  expect(reason(`cage ${a}-${b} total 3.5`)).toBe("A cage total that is not a safe integer is not lowered; the whole cage remains uncovered.");
  expect(reason(`cage ${a}-${b} total 3 channel "D"`)).toBe("The channel parameter of cage is not lowered; the whole instance remains uncovered.");
  expect(reason(`cage ${a}-${b} total 3\nvalue-modifier factor 2 offset 0 exactly [["${c}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`)).toContain("Effective-value domain is unresolved");
  expect(nf(`cage ${a}-${b} total "three"`).status).toBe("invalid");
  // An untotalled cage never reads values, so unresolved values do not uncover it.
  expect(nf(`cage ${a}-${b}\nvalue-modifier factor 2 offset 0 exactly [["${c}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`).normalForm!.coverage.find(x => x.kind === "cage")!.status).toBe("lowered");
});

test("the lowered formula and the public evaluator agree on every assignment", () => {
  const alphabets = [digits9, [0, 2, 3, 5, 10]];
  const shapes: [string, Cell[], number | undefined][] = [
    ["pair", [a, b], 7], ["triple", [a, b, c], 12], ["single", [a], 5], ["zero", [a, b], 0], ["out of reach", [a, b], 40], ["negative", [a, b], -2],
  ];
  for (const symbols of alphabets) for (const [, list, total] of shapes) for (const repeats of [false, true]) for (const negated of [false, true]) {
    const text = `${negated ? "not " : ""}cage ${list.join("-")} total ${total} repeats ${repeats}`;
    const context = { ...board, alphabet: symbols };
    const n = nf(text, context);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [${symbols.join(",")}], regions: [[r1c1, r1c2, r1c3]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let satisfied = 0;
    for (const x of symbols) for (const y of symbols) for (const z of symbols) {
      const values = { [a]: x, [b]: y, [c]: z };
      const expected = evaluate(rule, { digits: values }).status === "holds";
      expect([text, symbols.join(), x, y, z, holds(n.normalForm!.solution, values)]).toEqual([text, symbols.join(), x, y, z, expected]);
      if (expected) satisfied++;
    }
    if (!negated && total !== undefined && total >= 3 && total <= 12 && symbols === digits9) expect(satisfied).toBeGreaterThan(0);
  }
});

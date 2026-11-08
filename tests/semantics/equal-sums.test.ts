import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const [a, b, c, d] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet?: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const groups = (...gs: Cell[][]) => `[${gs.map(g => `[${g.map(x => `"${x}"`).join(",")}]`).join(",")}]`;
const sums = (gs: Cell[][], extra = "") => `equal-sums groups ${groups(...gs)}${extra}`;
const modifier = `value-modifier factor 2 offset 0 exactly [["${d}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
const coverageOf = (rules: string) => nf(rules).normalForm!.coverage.find(x => x.kind === "equal-sums");

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
function form(rules: string) { const r = nf(rules); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));
// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(sums([[a, b], [c]]));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(sums([[a, b], [c]]))}` });
}, 30000);

test("two groups share one total", () => {
  for (const extra of ["", " repeats true", ' channel "D"']) {
    const f = form(sums([[a, b], [c]], extra));
    expect(holds(f, at(1, 2, 3))).toBe(true);
    expect(holds(f, at(2, 2, 3))).toBe(false);
  }
});

test("three groups all match the first", () => {
  const f = form(sums([[a, b], [c], [d, d]]));
  expect(holds(f, at(1, 2, 3, 3))).toBe(true);
  expect(holds(f, at(1, 2, 3, 4))).toBe(false);
  expect(holds(f, at(1, 2, 4, 3))).toBe(false);
  const h = form(sums([[a], [b], [c]]));
  expect(holds(h, at(4, 4, 4))).toBe(true);
  expect(holds(h, at(4, 4, 5))).toBe(false);
});

test("repeats false makes the values within each group differ", () => {
  const f = form(sums([[a, b], [c, d]], " repeats false"));
  expect(holds(f, at(1, 3, 2, 2))).toBe(false);
  expect(holds(f, at(2, 2, 1, 3))).toBe(false);
  expect(holds(f, at(1, 3, 2, 2))).toBe(false);
  expect(holds(f, at(1, 4, 2, 3))).toBe(true);
  const free = form(sums([[a, b], [c, d]]));
  expect(holds(free, at(2, 2, 1, 3))).toBe(true);
});

test("channel V is converted to D on a resolved board and keeps its channel in the rewrite", () => {
  const n = nf(sums([[a, b], [c]], ' channel "V"'));
  expect(n.status).toBe("complete");
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
  expect(nf(sums([[a, b], [c]])).normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
  eq(sums([[a, b], [c]], ' channel "V"'), sums([[a, b], [c]]));
  eq(sums([[a, b], [c, d]], ' channel "V" repeats false'), sums([[a, b], [c, d]], " repeats false"));
});

test("a V declaration beside a value modifier is uncovered and a D declaration is not", () => {
  expect(coverageOf(`${sums([[a, b], [c]], ' channel "V"')}\n${modifier}`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Effective-value") });
  expect(coverageOf(`${sums([[a, b], [c]], ' channel "V" repeats false')}\n${modifier}`)).toMatchObject({ status: "unsupported" });
  expect(coverageOf(`${sums([[a, b], [c]])}\n${modifier}`)).toMatchObject({ status: "lowered" });
  expect(coverageOf(`${sums([[a, b], [c]], ' channel "D" repeats false')}\n${modifier}`)).toMatchObject({ status: "lowered" });
});

test("group order inside a group and cell repetition inside a group do not matter", () => {
  eq(sums([[a, b], [c]]), sums([[b, a], [c]]));
  eq(sums([[a, b], [c]]), sums([[a, b, b], [c]]));
  eq(sums([[a], [b]]), sums([[b], [a]]));
});

test("a single group and an empty group", () => {
  expect(form(sums([[a, b]]))).toEqual({ op: "All", children: [] });
  const empty = form(sums([[a], []]));
  expect(holds(empty, at(1))).toBe(false);
  expect(holds(empty, at(0))).toBe(true);
  expect(form(sums([[a, b]], " repeats false"))).not.toEqual({ op: "All", children: [] });
});

test("near misses compare as different", () => {
  differs(sums([[a, b], [c]]), sums([[a, b], [d]]));
  differs(sums([[a, b], [c]]), sums([[a, b], [c, d]]));
  differs(sums([[a, b], [c]]), sums([[a], [b], [c]]));
  differs(sums([[a, b], [c]]), sums([[a, b], [c]], " repeats false"));
  differs(sums([[a, b], [c]]), `not ${sums([[a, b], [c]])}`);
  differs(sums([[a, b], [c]]), sums([[a, b]]));
  differs(sums([[a, b], [c]]), `unique ${a}-${b}-${c}`);
});

type Entry = string | [string, "none"];
function differential(n: number, symbols: number[], entries: Entry[], extra = ""): void {
  const context = boardOf(n, symbols);
  const used = cells.slice(0, n);
  for (const entry of entries) {
    const [text, none] = typeof entry === "string" ? [entry, undefined] : entry;
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text + extra)}` }, context);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "equal-sums").every(x => x.status === "lowered")).toBe(true);
    expect(extra ? "partial" : "complete").toBe(r.status);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text + extra)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    let satisfied = 0, total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const expected = evaluate({ ...rule, finite: undefined }, { digits: values, values: values }).status === "holds";
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        total++; if (expected) satisfied++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    expect([text, satisfied === 0]).toEqual([text, none === "none"]);
    expect(total).toBeGreaterThan(0);
  }
}

test("the lowered formula and the public evaluator agree on every assignment", () => {
  differential(4, [1, 2, 3], [
    sums([[a, b], [c, d]]), sums([[a, b], [c, d]], " repeats false"), sums([[a], [b], [c, d]]), sums([[a, b], [c], [d]], " repeats false"),
    sums([[a, b], [c, d]], ' channel "V"'), sums([[a, b], [c]], ' channel "V" repeats false'), sums([[a, b, c], [d]]),
    `not ${sums([[a, b], [c, d]])}`, `not ${sums([[a, b], [c, d]], " repeats false")}`, `not ${sums([[a], [b], [c]], ' channel "V"')}`,
    sums([[a, a], [b]]), sums([[a, b]]), sums([[a, b]], " repeats false"), [sums([[a], []]), "none"], [sums([[a, b], []], " repeats false"), "none"],
  ]);
  differential(3, [0, 2, 5], [sums([[a, b], [c]]), sums([[a, b], [c]], " repeats false"), `not ${sums([[a], [b, c]])}`]);
  differential(3, [-1, 0, 2, 10], [sums([[a, b], [c]]), sums([[a], [b, c]], " repeats false")]);
});

test("a modifier board: D agrees with the evaluator where V would differ", () => {
  differential(4, [1, 2, 3], [sums([[a, b], [c, d]]), sums([[a, b], [c, d]], " repeats false"), `not ${sums([[a, c], [b, d]], ' channel "D"')}`], `\n${modifier}`);
  const rules = (text: string) => compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3, r1c4]]}\n---${body(`${text}\n${modifier}`)}` }).value!.rules[0];
  const dRule = rules(sums([[a, b], [c, d]])), vRule = rules(sums([[a, b], [c, d]], ' channel "V"'));
  // r1c4 reads double in V, so 1+2 against 1+2 holds on printed digits and fails on values.
  const probe = { digits: at(1, 2, 1, 2) };
  expect(evaluate(dRule, probe).status).not.toBe(evaluate(vRule, probe).status);
});

test("a condition is refused by the case parameter check, not by the lowering", () => {
  // The rule has no primary cell list for a condition to use, so the declaration grammar rejects the file for every reader.
  for (const text of [`${sums([[a, b], [c]])} if distinct`, `not ${sums([[a, b], [c]])} unless connected`, `${sums([[a, b], [c]], ' channel "V"')} if uniform`]) {
    const r = nf(text);
    expect(r.status).toBe("invalid");
    expect(r.issues.map(x => x.code)).toEqual(["E_CASE_PARAMETERS"]);
  }
});

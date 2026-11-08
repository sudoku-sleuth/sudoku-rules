import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { lower } from "../../src/semantics/lower";
import { canonicalBoard } from "../../src/semantics/board";
import { readSemanticFile } from "../../src/semantics/reader";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const four = [1, 2, 3, 4];
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
const [a, b, c, d] = cells;
const boardOf = (alphabet: number[], n = 4): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, alphabet = four, n = 4) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(alphabet, n));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const totals = (list: Cell[], t: number[], kind = "cage-totals") => `${kind} cells ${JSON.stringify(list)} totals ${JSON.stringify(t)}`;
const modifier = `value-modifier factor 2 offset 0 exactly [["${d}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;

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
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(totals([a, b], [4]));
  const loaded = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3], regions: [[r1c1, r1c2]]}\n---${body(totals([a, b], [4]))}` });
  // Evaluating once here loads the evaluator too, so the timed tests below measure only their own work.
  evaluate({ ...loaded.value!.rules[0], finite: undefined }, { digits: {} });
}, 30000);

test("the cage sums to one of the listed totals", () => {
  const f = form(totals([a, b], [3, 6]));
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(2, 4))).toBe(true);
  expect(holds(f, at(1, 3))).toBe(false);
  expect(holds(f, at(2, 2))).toBe(false);
  const single = form(totals([a], [2, 9]));
  expect(holds(single, at(2))).toBe(true);
  expect(holds(single, at(3))).toBe(false);
});

test("a repeated digit is allowed, since distinctness is declared separately", () => {
  const f = form(totals([a, b], [4]));
  expect(holds(f, at(2, 2))).toBe(true);
});

test("totals that no sum of whole digits can equal add no case", () => {
  const f = form(totals([a, b], [3, 2.5, 100, -1]));
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(4, 4))).toBe(false);
  eq(totals([a, b], [3, 2.5, 100]), totals([a, b], [3]));
});

test("order, repeats and the alias spellings do not matter", () => {
  eq(totals([a, b], [3, 6]), totals([b, a], [6, 3, 6]));
  eq(totals([a, b], [4, 9]), totals([a, b], [4, 9], "perfect-square-cages"));
  eq(totals([a, b], [8]), totals([a, b], [8], "perfect-cube-cages"));
  eq(totals([a, b], [4]), `cage ${a}-${b} total 4 repeats true`);
  eq(totals([a, a, b], [4]), totals([a, b], [4]));
});

test("near misses compare as different", () => {
  differs(totals([a, b], [3, 6]), totals([a, b], [3, 7]));
  differs(totals([a, b], [3, 6]), totals([a, b], [3]));
  differs(totals([a, b], [3]), totals([a, c], [3]));
  differs(totals([a, b], [3]), totals([a, b, c], [3]));
  differs(totals([a, b], [3]), `not ${totals([a, b], [3])}`);
  differs(totals([a, b], [3]), `cage ${a}-${b} total 3 repeats false`);
});

test("a value modifier leaves the declaration uncovered, since its effective values are unknown", () => {
  const r = nf(`${totals([a, b], [3])}\n${modifier}`);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage.find(x => x.kind === "cage-totals")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Effective-value domain is unresolved") });
});

test("a total that is not a safe integer stays uncovered", () => {
  const r = nf(totals([a, b], [1e20]));
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage[0]).toMatchObject({ kind: "cage-totals", status: "unsupported", reason: expect.stringContaining("safe integer") });
});

test("a long totals list on a long cage stays uncovered", () => {
  const many = Array.from({ length: 1024 }, (_, i) => `r1c${i + 1}` as Cell);
  const board: BoardContext = { rows: 1, cols: 1024, activeCells: many, alphabet: [1, 2, 3] };
  const list = Array.from({ length: 1000 }, (_, i) => i + 1100);
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(totals(many, list))}` }, board);
  expect(r.normalForm!.coverage[0]).toMatchObject({ kind: "cage-totals", status: "unsupported", reason: expect.stringContaining("1,000,000") });
});

test("the lowering reads the V channel: with effective values doubled it follows the published definition", () => {
  const text = totals([a, b], [4, 6, 9]);
  const reading = readSemanticFile({ file: "synthetic.rules.md", text: `${header}---\n${body(`sudoku 9x9\n${text}`)}` });
  const ast = reading.instances.find(i => i.kind !== "sudoku")!.ast;
  const formula = lower(ast, canonicalBoard({ ...boardOf(four, 4), alphabet: four }));
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3,4], regions: [[${cells.join(", ")}]]}\n---${body(text)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const published = { ...compiled.value!.rules[0], finite: undefined };
  let differing = 0;
  for (const x of four) for (const y of four) {
    const digits = at(x, y), values = at(2 * x, 2 * y);
    const byValues = evaluate(published, { digits, values }).status === "holds";
    expect(holds(formula, values)).toBe(byValues);
    // Read on digits instead, the answer would differ for some assignments.
    if (byValues !== (evaluate(published, { digits }).status === "holds")) differing++;
  }
  expect(differing).toBeGreaterThan(0);
});

function differential(n: number, symbols: number[], entries: string[]): number {
  let seen = 0, sampled = 0;
  const used = cells.slice(0, n);
  const board = boardOf(symbols, n);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text)}` }, board);
    expect(r.issues).toEqual([]);
    expect([text, r.normalForm!.coverage.filter(x => x.status !== "lowered")]).toEqual([text, []]);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    // The evaluator runs the lowered formula itself when a rule has one, so it is switched off to compare with the published definition.
    const published = { ...compiled.value!.rules[0], finite: undefined };
    let satisfied = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const expected = evaluate(published, { digits: values }).status === "holds";
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

test("with effective values equal to digits, the lowered formula and the published definition agree", () => {
  expect(differential(3, [1, 2, 3, 4], [totals([a, b], [3, 6]), totals([a, b, c], [4, 9, 5.5]), totals([a], [2]), totals([a, b], [4, 9], "perfect-square-cages"), totals([a, b], [8], "perfect-cube-cages"), `not ${totals([a, b], [3])}`])).toBeGreaterThan(0);
  expect(differential(3, [0, 2, 5], [totals([a, b], [0, 7]), totals([a, b, c], [5])])).toBeGreaterThan(0);
  expect(differential(2, [-2, -1, 3], [totals([a, b], [-3, 1, 6])])).toBeGreaterThan(0);
});

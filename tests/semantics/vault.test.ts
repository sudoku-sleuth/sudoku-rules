import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const [a, b, c, d, e] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet: number[]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const nb = (xs: Cell[]) => `neighbours [${xs.map(x => `"${x}"`).join(",")}]`;
const vault = (cs: Cell[], ns: Cell[], sum?: number) => `vault ${cs.join("-")} ${nb(ns)}${sum === undefined ? "" : ` sum ${sum}`}`;
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
function form(rules: string, n = 5, alphabet?: number[]) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));
const coverageOf = (rules: string, n = 5, alphabet?: number[]) => nf(rules, n, alphabet).normalForm!.coverage.find(x => x.kind === "vault");

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => { nf(vault([a], [b])); }, 30000);

test("without a sum, no cell digit occurs in a neighbour", () => {
  const f = form(vault([a, b], [c, d]));
  expect(holds(f, at(1, 2, 3, 4))).toBe(true);
  expect(holds(f, at(1, 2, 2, 4))).toBe(false);
  expect(holds(f, at(1, 2, 3, 1))).toBe(false);
  // Repetition inside the vault and among the neighbours is allowed.
  expect(holds(f, at(5, 5, 3, 3))).toBe(true);
});

test("with a sum, the cell digits also add up to it", () => {
  const f = form(vault([a, b], [c], 7));
  expect(holds(f, at(3, 4, 5))).toBe(true);
  expect(holds(f, at(4, 3, 5))).toBe(true);
  expect(holds(f, at(3, 4, 4))).toBe(false);
  expect(holds(f, at(3, 5, 6))).toBe(false);
  expect(holds(f, at(1, 6, 1))).toBe(false);
  // Repetition inside the vault is allowed when the sum permits it.
  expect(holds(form(vault([a, b], [c], 8)), at(4, 4, 5))).toBe(true);
});

test("a single cell with a sum is the digit itself", () => {
  const f = form(vault([a], [b], 3));
  expect(holds(f, at(3, 4))).toBe(true);
  expect(holds(f, at(3, 3))).toBe(false);
  expect(holds(f, at(4, 5))).toBe(false);
});

test("order and repeated listings of cells and neighbours give the same normal form", () => {
  eq(vault([a, b], [c, d]), vault([b, a], [d, c]));
  eq(vault([a, b], [c, d]), vault([a, b, a], [c, d, c]));
  eq(vault([a, b], [c, d], 6), vault([b, a, b], [d, c], 6));
});

test("near misses have different normal forms", () => {
  differs(vault([a, b], [c], 7), vault([a, b], [c], 8));
  differs(vault([a, b], [c]), vault([a, b], [c, d]));
  differs(vault([a, b], [c, d]), vault([a, b], [d]));
  differs(vault([a, b], [c]), vault([a, b], [c], 7));
  differs(vault([a, b], [c]), vault([a], [c]));
});

test("overlap and an oversized sum stay uncovered with a reason", () => {
  const n = nf(vault([a, b], [b, c]));
  expect(n.status).toBe("partial");
  const cov = n.normalForm!.coverage.find(x => x.kind === "vault")!;
  expect(cov.status).toBe("unsupported");
  expect(cov.reason).toMatch(/overlap/);
  expect(coverageOf(vault([a], [b], 2 ** 60))!.status).toBe("unsupported");
  expect(coverageOf(vault([a], [b], 2))!.status).toBe("lowered");
});

test("the lowering reads printed digits, so a value modifier does not leave it uncovered", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["${e}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const r = nf(`${vault([a, b], [c], 7)}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "vault")!.status).toBe("lowered");
});

const layouts: { n: number; symbols: number[]; text: string }[] = [
  { n: 4, symbols: [1, 2, 3], text: vault([a, b], [c, d]) },
  { n: 4, symbols: [1, 2, 3], text: vault([a, b], [c, d], 4) },
  { n: 4, symbols: [1, 2, 3], text: vault([a, b], [c], 2) },
  { n: 3, symbols: [0, 2, 5], text: vault([a], [b, c], 5) },
  { n: 4, symbols: [-1, 0, 2], text: vault([c, a, c], [d, b], 1) },
];
for (const { n, symbols, text } of layouts) for (const negate of [false, true]) test(`lowered formula and public evaluator agree: ${negate ? "not " : ""}${text}`, () => {
  const rules = `${negate ? "not " : ""}${text}`;
  const r = nf(rules, n, symbols);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("complete");
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${cells.slice(0, n).join(", ")}]]}\n---${body(rules)}` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const rl = compiled.value!.rules[0];
  let total = 0;
  const walk = (digits: number[]) => {
    if (digits.length === n) {
      const v = at(...digits);
      expect([rules, digits, holds(r.normalForm!.solution, v)]).toEqual([rules, digits, evaluate(rl, { digits: v }).status === "holds"]);
      total++;
      return;
    }
    for (const s of symbols) walk([...digits, s]);
  };
  walk([]);
  expect(total).toBe(symbols.length ** n);
});

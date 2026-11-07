import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet?: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const sky = (list: Cell[], visible: number, extra = "") => `skyscraper ${list.join("-")} visible ${visible}${extra}`;
const eq = (x: string, y: string, n = 5) => expect(compare(nf(x, n), nf(y, n)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 5) => { const r = compare(nf(x, n), nf(y, n)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `value-modifier factor 2 offset 0 exactly [["r1c5"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
const coverageOf = (rules: string) => nf(rules).normalForm!.coverage.find(x => x.kind === "skyscraper");

function holds(f: Formula, v: Record<string, number>): boolean {
  switch (f.op) {
    case "All": return f.children.every(x => holds(x, v));
    case "Any": return f.children.some(x => holds(x, v));
    case "Not": return !holds(f.child, v);
    case "Pair": return f.table.some(([x, y]) => x === v[f.cells[0]] && y === v[f.cells[1]]);
    case "Allowed": return f.values.includes(v[f.cell]);
    case "Distinct": return new Set(f.cells.map(c => v[c])).size === f.cells.length;
    case "CountAtLeast": return f.cells.filter(c => v[c] === f.digit).length >= f.count;
    case "SumEqual": return f.left.reduce((n, c) => n + BigInt(v[c]), 0n) === f.right.reduce((n, c) => n + BigInt(v[c]), 0n);
    case "SumTotal": return f.cells.reduce((n, c) => n + BigInt(v[c]), 0n) === BigInt(f.total);
  }
}
function form(rules: string, n = 5, alphabet?: number[]) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(sky(cells.slice(0, 3), 2));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r1c2, r1c3]]}\n---${body(sky(cells.slice(0, 3), 2))}` });
}, 30000);

test("visible 1 means the first digit is the largest so far everywhere", () => {
  const f = form(sky(cells.slice(0, 4), 1), 4);
  expect(holds(f, at(9, 1, 2, 3))).toBe(true);
  expect(holds(f, at(5, 5, 5, 5))).toBe(true);
  expect(holds(f, at(5, 6, 1, 1))).toBe(false);
  expect(holds(f, at(1, 2, 3, 4))).toBe(false);
});

test("a middle count and the full length", () => {
  const two = form(sky(cells.slice(0, 4), 2), 4);
  expect(holds(two, at(3, 1, 5, 2))).toBe(true);
  expect(holds(two, at(3, 4, 2, 1))).toBe(true);
  expect(holds(two, at(3, 4, 5, 1))).toBe(false);
  expect(holds(two, at(3, 2, 1, 1))).toBe(false);
  const full = form(sky(cells.slice(0, 4), 4), 4);
  expect(holds(full, at(1, 2, 3, 4))).toBe(true);
  expect(holds(full, at(1, 2, 2, 4))).toBe(false);
  expect(holds(full, at(2, 1, 3, 4))).toBe(false);
});

test("equal digits hide later copies", () => {
  const f = form(sky(cells.slice(0, 3), 2), 3);
  expect(holds(f, at(2, 2, 3))).toBe(true);
  expect(holds(f, at(2, 3, 3))).toBe(true);
  expect(holds(f, at(2, 2, 2))).toBe(false);
});

test("an impossible count is false", () => {
  for (const visible of [0, 4]) {
    const f = form(sky(cells.slice(0, 3), visible), 3);
    expect(f).toEqual({ op: "Any", children: [] });
  }
  eq(sky(cells.slice(0, 3), 0), sky(cells.slice(0, 3), 7), 3);
});

test("a cell listed twice is read at each occurrence", () => {
  const f = form(sky([cells[0], cells[1], cells[0]], 2), 2);
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(2, 1))).toBe(false);
  const g = form(sky([cells[0], cells[0]], 1), 1);
  expect(holds(g, at(4))).toBe(true);
  expect(holds(form(sky([cells[0], cells[0]], 2), 1), at(4))).toBe(false);
});

test("a one-cell ray", () => {
  expect(holds(form(sky([cells[0]], 1), 1), at(3))).toBe(true);
  expect(form(sky([cells[0]], 2), 1)).toEqual({ op: "Any", children: [] });
});

test("channel V is converted to D on a resolved board and left uncovered when it is not", () => {
  const n = nf(sky(cells.slice(0, 3), 2, ' channel "V"'), 3);
  expect(n.status).toBe("complete");
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
  expect(nf(sky(cells.slice(0, 3), 2), 3).normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(false);
  eq(sky(cells.slice(0, 3), 2, ' channel "V"'), sky(cells.slice(0, 3), 2), 3);
  expect(coverageOf(`${sky(cells.slice(0, 3), 2, ' channel "V"')}\n${modifier}`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("Effective-value") });
  expect(coverageOf(`${sky(cells.slice(0, 3), 2, ' channel "D"')}\n${modifier}`)).toMatchObject({ status: "lowered" });
  expect(coverageOf(`${sky(cells.slice(0, 3), 2)}\n${modifier}`)).toMatchObject({ status: "lowered" });
});

test("near misses compare as different", () => {
  const abc = cells.slice(0, 3);
  differs(sky(abc, 2), sky([...abc].reverse(), 2));
  differs(sky(abc, 2), sky(abc, 3));
  differs(sky(abc, 2), sky(cells.slice(0, 4), 2));
  differs(sky(abc, 2), sky([cells[0], cells[1], cells[3]], 2));
  differs(sky(abc, 2), `not ${sky(abc, 2)}`);
  differs(sky(abc, 2), `unique ${abc.join("-")}`);
});

test("a ray beyond the expansion bound stays uncovered with a reason", () => {
  const long = Array.from({ length: 40 }, (_, i) => `r1c${i + 1}` as Cell);
  const board: BoardContext = { rows: 1, cols: 40, activeCells: long, alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9] };
  const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(sky(long, 20))}` }, board);
  expect(r.issues).toEqual([]);
  expect(r.status).toBe("partial");
  expect(r.normalForm!.coverage[0]).toMatchObject({ kind: "skyscraper", status: "unsupported", reason: expect.stringContaining("exceeds 1,000,000") });
});

function differential(n: number, symbols: number[], entries: string[], extra = ""): number {
  let seen = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text + extra)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "skyscraper").every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text + extra)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    const walk = (index: number, values: Record<string, number>) => {
      if (index === n) {
        const expected = evaluate(rule, { digits: values }).status === "holds";
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        if (expected) seen++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
  }
  return seen;
}

test("the lowered formula and the public evaluator agree on every visible count", () => {
  const four = cells.slice(0, 4);
  for (const visible of [0, 1, 2, 3, 4, 5]) expect(differential(4, [1, 2, 3], [sky(four, visible)]) > 0).toBe(visible >= 1 && visible <= 3);
});

test("the lowered formula and the public evaluator agree on other rays and alphabets", () => {
  const three = cells.slice(0, 3);
  expect(differential(3, [0, 1, 2, 3], [sky(three, 1), sky(three, 2), sky(three, 3), `not ${sky(three, 2)}`])).toBeGreaterThan(0);
  expect(differential(3, [-2, 0, 5, 9], [sky(three, 2), sky([...three].reverse(), 2), sky([cells[0], cells[2], cells[1]], 3)])).toBeGreaterThan(0);
  expect(differential(3, [1, 2, 3], [sky([cells[0], cells[1], cells[0]], 2), sky([cells[2], cells[2], cells[1]], 1)])).toBeGreaterThan(0);
  expect(differential(3, [1, 2, 3], [sky(three, 2, ' channel "V"')])).toBeGreaterThan(0);
  expect(differential(1, [4, 7], [sky([cells[0]], 1)])).toBe(2);
});

test("a modifier board: printed digits agree with the evaluator", () => {
  expect(differential(3, [1, 2, 3], [sky(cells.slice(0, 3), 2)], `\n${modifier.replace("r1c5", "r1c3")}`)).toBeGreaterThan(0);
});

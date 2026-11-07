import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const boardOf = (n: number, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 5, alphabet?: number[]) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const room = (list: Cell[], digit: number) => `numbered-room ${list.join("-")} digit ${digit}`;
const eq = (x: string, y: string, n = 5) => expect(compare(nf(x, n), nf(y, n)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 5) => { const r = compare(nf(x, n), nf(y, n)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `value-modifier factor 2 offset 0 exactly [["r1c4"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;

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
  nf(room(cells.slice(0, 3), 2));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r1c2, r1c3]]}\n---${body(room(cells.slice(0, 3), 2))}` });
}, 30000);

test("the first digit picks a one-based position that holds the stated digit", () => {
  const f = form(room(cells.slice(0, 4), 7), 4);
  expect(holds(f, at(2, 7, 1, 1))).toBe(true);
  expect(holds(f, at(3, 1, 7, 1))).toBe(true);
  expect(holds(f, at(4, 1, 1, 7))).toBe(true);
  expect(holds(f, at(2, 1, 7, 1))).toBe(false);
  expect(holds(f, at(3, 7, 1, 1))).toBe(false);
});

test("the first cell indexes itself when it holds 1", () => {
  const f = form(room(cells.slice(0, 3), 1), 3);
  expect(holds(f, at(1, 5, 5))).toBe(true);
  expect(holds(f, at(1, 1, 1))).toBe(true);
  expect(holds(f, at(2, 1, 5))).toBe(true);
  expect(holds(f, at(2, 5, 1))).toBe(false);
  // Position 1 can hold a digit other than 1 only if that digit is also the index, which is impossible.
  const g = form(room(cells.slice(0, 3), 3), 3);
  expect(holds(g, at(1, 5, 5))).toBe(false);
  expect(holds(g, at(3, 5, 3))).toBe(true);
});

test("an index past the line or outside the alphabet names no cell", () => {
  const f = form(room(cells.slice(0, 3), 2), 3);
  expect(holds(f, at(4, 2, 2))).toBe(false);
  expect(holds(f, at(9, 2, 2))).toBe(false);
  expect(holds(f, at(2, 2, 9))).toBe(true);
  // An alphabet with fewer symbols than the line leaves some positions unreachable.
  const short = form(room(cells.slice(0, 5), 3), 5, [1, 2, 3]);
  expect(holds(short, at(3, 1, 3, 1, 1))).toBe(true);
  expect(holds(short, at(2, 3, 1, 1, 1))).toBe(true);
  // An alphabet larger than the line, with indexes 0 and 4+ unreachable.
  const wide = form(room(cells.slice(0, 2), 5), 2, [0, 1, 2, 3, 4, 5]);
  expect(holds(wide, at(2, 5))).toBe(true);
  expect(holds(wide, at(1, 5))).toBe(false);
  expect(holds(wide, at(0, 5))).toBe(false);
});

test("a digit outside the alphabet is false", () => {
  expect(form(room(cells.slice(0, 3), 0), 3)).toEqual({ op: "Any", children: [] });
  expect(form(room(cells.slice(0, 3), 12), 3)).toEqual({ op: "Any", children: [] });
  eq(room(cells.slice(0, 3), 0), room(cells.slice(0, 2), 12), 3);
});

test("a cell listed twice is read at each position", () => {
  const f = form(room([cells[0], cells[1], cells[0]], 3), 2);
  expect(holds(f, at(3, 1))).toBe(true);
  expect(holds(f, at(2, 3))).toBe(true);
  expect(holds(f, at(2, 1))).toBe(false);
});

test("near misses compare as different", () => {
  const abc = cells.slice(0, 3);
  differs(room(abc, 2), room(abc, 3));
  differs(room(abc, 2), room([...abc].reverse(), 2));
  differs(room(abc, 2), room(cells.slice(0, 4), 2));
  differs(room(abc, 2), room([cells[0], cells[1], cells[3]], 2));
  differs(room(abc, 2), `not ${room(abc, 2)}`);
  differs(room(abc, 2), `unique ${abc.join("-")}`);
});

test("the declaration is covered beside a value modifier because it reads printed digits", () => {
  const r = nf(`${room(cells.slice(0, 3), 2)}\n${modifier}`);
  expect(r.normalForm!.coverage.find(x => x.kind === "numbered-room")).toMatchObject({ status: "lowered" });
});

function differential(n: number, symbols: number[], entries: string[], extra = ""): number {
  let seen = 0;
  const used = cells.slice(0, n);
  const board = boardOf(n, symbols);
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text + extra)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => x.kind === "numbered-room").every(x => x.status === "lowered")).toBe(true);
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

test("the lowered formula and the public evaluator agree on lines and digits", () => {
  const three = cells.slice(0, 3);
  expect(differential(3, [1, 2, 3, 4], [room(three, 1), room(three, 2), room(three, 3), room(three, 4), `not ${room(three, 2)}`])).toBeGreaterThan(0);
  expect(differential(4, [1, 2, 3], [room(cells.slice(0, 4), 2)])).toBeGreaterThan(0);
  expect(differential(2, [1, 2, 3, 4, 5], [room(cells.slice(0, 2), 3)])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on zero-based, sparse and repeated lists", () => {
  const three = cells.slice(0, 3);
  expect(differential(3, [0, 1, 2, 3], [room(three, 0), room(three, 2), room([...three].reverse(), 3)])).toBeGreaterThan(0);
  expect(differential(3, [-1, 2, 3, 7], [room(three, 3), room(three, 7)])).toBeGreaterThan(0);
  expect(differential(3, [1, 2, 3], [room([cells[0], cells[1], cells[0]], 2), room([cells[1], cells[1], cells[0]], 2)])).toBeGreaterThan(0);
  differential(2, [1, 2, 3], [room(cells.slice(0, 2), 9)]);
});

test("a modifier board: printed digits agree with the evaluator", () => {
  expect(differential(3, [1, 2, 3], [room(cells.slice(0, 3), 2)], `\n${modifier.replace("r1c4", "r1c3")}`)).toBeGreaterThan(0);
});

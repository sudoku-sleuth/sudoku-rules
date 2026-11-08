import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const gridCells = (rows: number, cols: number): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${i % cols + 1}` as Cell);
const boardOf = (rows: number, cols: number, alphabet: number[], active = gridCells(rows, cols)): BoardContext => ({ rows, cols, activeCells: active, alphabet, regions: [active] });
const nf = (rules: string, board: BoardContext) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
const row = (n: number, alphabet = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => boardOf(1, n, alphabet);
const line = (n: number) => gridCells(1, n).join("-");
const differs = (x: string, y: string, board: BoardContext) => { const r = compare(nf(x, board), nf(y, board)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const equal = (x: string, y: string, board: BoardContext) => expect(compare(nf(x, board), nf(y, board)).status).toBe("equivalent");

function holds(f: Formula, v: Record<string, number>, w: Record<string, number> = v): boolean {
  const read = (channel: string, c: string) => channel === "V" ? w[c] : v[c];
  switch (f.op) {
    case "All": return f.children.every(x => holds(x, v, w));
    case "Any": return f.children.some(x => holds(x, v, w));
    case "Not": return !holds(f.child, v, w);
    case "Pair": return f.table.some(([x, y]) => x === read(f.channel, f.cells[0]) && y === read(f.channel, f.cells[1]));
    case "Allowed": return f.values.includes(read(f.channel, f.cell));
    case "Distinct": return new Set(f.cells.map(c => read(f.channel, c))).size === f.cells.length;
    case "CountAtLeast": return f.cells.filter(c => v[c] === f.digit).length >= f.count;
    case "SumEqual": return f.left.reduce((n, c) => n + BigInt(read(f.channel, c)), 0n) === f.right.reduce((n, c) => n + BigInt(read(f.channel, c)), 0n);
    case "SumTotal": return f.cells.reduce((n, c) => n + BigInt(read(f.channel, c)), 0n) === BigInt(f.total);
  }
}
function form(rules: string, board: BoardContext) { const r = nf(rules, board); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [`r1c${i + 1}`, x]));


/**
 * The public evaluator runs the lowered formula itself unless the assignment supplies effective values and the formula reads them,
 * so every entry here is stated on channel "V" (added when missing): the evaluator then follows the published definition. Each assignment is compared three ways:
 * the evaluator with values equal to the digits against the raw lowering and the normal form, and the evaluator with one cell's value
 * moved to another symbol (a different cell for each assignment) against the raw lowering, which must follow the effective values.
 */
function differential(kinds: string[], rows: number, cols: number, symbols: number[], entries: string[], active = gridCells(rows, cols)): number {
  let seen = 0, split = 0;
  const board = boardOf(rows, cols, symbols, active);
  for (const entry of entries) {
    const text = entry.includes('channel "V"') ? entry : `${entry} channel "V"`;
    const r = nf(text, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => kinds.includes(x.kind)).every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [${symbols}], activeCells: [${active.join(", ")}], regions: [[${active.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    expect(rule.finite).toBeDefined();
    let count = 0;
    const walk = (index: number, digits: Record<string, number>) => {
      if (index === active.length) {
        // The effective value of one cell (a different cell for each assignment) is the next symbol of the alphabet.
        const cell = active[count++ % active.length];
        const doubled = { ...digits, [cell]: symbols[(symbols.indexOf(digits[cell]) + 1) % symbols.length] };
        const same = evaluate(rule, { digits, values: digits }).status === "holds";
        const other = evaluate(rule, { digits, values: doubled }).status === "holds";
        expect(`${text} | ${JSON.stringify(digits)} | raw | ${holds(rule.finite!, digits, digits)}`).toBe(`${text} | ${JSON.stringify(digits)} | raw | ${same}`);
        expect(`${text} | ${JSON.stringify(digits)} | normal | ${holds(r.normalForm!.solution, digits)}`).toBe(`${text} | ${JSON.stringify(digits)} | normal | ${same}`);
        expect(`${text} | ${JSON.stringify(digits)} | values ${JSON.stringify(doubled)} | ${holds(rule.finite!, digits, doubled)}`).toBe(`${text} | ${JSON.stringify(digits)} | values ${JSON.stringify(doubled)} | ${other}`);
        if (same) seen++;
        if (same !== other) split++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...digits, [active[index]]: x });
    };
    walk(0, {});
  }
  // Some assignment must give a different verdict once the values differ from the digits, or the channel was never exercised.
  expect(split).toBeGreaterThan(0);
  return seen;
}
const E = (...pairs: [string, string][]) => `[${pairs.map(([x, y]) => `["${x}","${y}"]`).join(",")}]`;
const bt = (edges: string, extra = "") => `branched-thermo edges ${edges}${extra ? ` ${extra}` : ""}`;
const KINDS = ["branched-thermo"];
const gr = (rows: number, cols: number, ...v: number[]) => Object.fromEntries(v.map((x, i) => [gridCells(rows, cols)[i], x]));
const fork = E(["r1c2", "r1c1"], ["r1c2", "r1c3"]);
const diamond = E(["r1c1", "r1c2"], ["r1c1", "r2c1"], ["r1c2", "r2c2"], ["r2c1", "r2c2"]);
const square = boardOf(2, 2, [1, 2, 3, 4]);
const three = row(3, [1, 2, 3, 4, 5]);

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(bt(fork), three);
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(bt(fork))}` });
}, 30000);

test("a fork needs both arms to rise from the bulb", () => {
  const f = form(bt(fork), three);
  expect(holds(f, at(3, 4, 5))).toBe(false);
  expect(holds(f, at(3, 2, 4))).toBe(true);
  expect(holds(f, at(3, 2, 1))).toBe(false);
  expect(holds(f, at(1, 1, 2))).toBe(false);
  expect(holds(form(bt(fork, "strict false"), three), at(1, 1, 2))).toBe(true);
});

test("arms that rejoin obey every incoming edge", () => {
  const f = form(bt(diamond), square);
  expect(holds(f, gr(2, 2, 1, 2, 3, 4))).toBe(true);
  expect(holds(f, gr(2, 2, 1, 4, 2, 3))).toBe(false);
  expect(holds(f, gr(2, 2, 1, 2, 3, 3))).toBe(false);
  expect(holds(form(bt(diamond, "strict false"), square), gr(2, 2, 1, 2, 3, 3))).toBe(true);
});

test("several bulbs are the cells with no incoming edge", () => {
  const joined = E(["r1c1", "r1c2"], ["r1c3", "r1c2"]);
  const f = form(bt(joined), three);
  expect(holds(f, at(2, 5, 3))).toBe(true);
  expect(holds(f, at(2, 3, 3))).toBe(false);
  expect(holds(f, at(5, 3, 1))).toBe(false);
});

test("a single path is the matching thermo", () => {
  const path = E(["r1c1", "r1c2"], ["r1c2", "r1c3"]);
  const back = E(["r1c3", "r1c2"], ["r1c2", "r1c1"]);
  equal(bt(path), "thermo r1c1-r1c2-r1c3", three);
  equal(bt(path, "strict false"), "thermo r1c1-r1c2-r1c3 strict false", three);
  equal(bt(path, 'channel "D"'), 'thermo r1c1-r1c2-r1c3 channel "D"', three);
  equal(bt(path, 'strict false channel "D"'), 'thermo r1c1-r1c2-r1c3 strict false channel "D"', three);
  equal(bt(back), 'thermo r1c1-r1c2-r1c3 orientation "reverse"', three);
  equal(bt(path, 'strict true channel "V"'), bt(path), three);
  differs(bt(path), 'thermo r1c1-r1c2-r1c3 strict false', three);
  equal(bt(path, 'channel "D"'), bt(path, 'channel "V"'), three);
});

test("the direction of an edge is its order in the pair, and nothing else", () => {
  equal(bt(E(["r1c1", "r1c2"], ["r1c2", "r1c3"])), bt(E(["r1c2", "r1c3"], ["r1c1", "r1c2"])), three);
  equal(bt(E(["r1c1", "r1c2"])), bt(E(["r1c1", "r1c2"], ["r1c1", "r1c2"])), three);
  differs(bt(E(["r1c1", "r1c2"])), bt(E(["r1c2", "r1c1"])), three);
  differs(bt(fork), bt(E(["r1c1", "r1c2"], ["r1c3", "r1c2"])), three);
  differs(bt(fork), `not ${bt(fork)}`, three);
});

test("each invalid shape is rejected", () => {
  const shapes = [
    "[]", E(["r1c1", "r1c1"]), E(["r1c1", "r1c3"]), E(["r1c1", "r1c2"], ["r1c3", "r1c3"]),
    // A pair that is not two cells, a cell off the board and a disconnected network.
    '[["r1c1"]]', '[["r1c1","r1c2","r1c3"]]', E(["r1c1", "r1c2"], ["r9c9", "r1c3"]), "[1,2]",
  ];
  for (const edges of shapes) expect(nf(bt(edges), three).status).toBe("invalid");
  const wide = row(5, [1, 2, 3, 4, 5]);
  expect(nf(bt(E(["r1c1", "r1c2"], ["r1c4", "r1c5"])), wide).status).toBe("invalid");
  // A directed cycle, including one edge listed in both directions.
  expect(nf(bt(E(["r1c1", "r1c2"], ["r1c2", "r1c1"])), three).status).toBe("invalid");
  expect(nf(bt(E(["r1c1", "r1c2"], ["r1c2", "r2c2"], ["r2c2", "r2c1"], ["r2c1", "r1c1"])), square).status).toBe("invalid");
  expect(nf(bt(diamond, 'strict "yes"'), square).status).toBe("invalid");
  expect(nf(bt(diamond, 'channel "W"'), square).status).toBe("invalid");
  expect(nf(bt(diamond, "orientation \"reverse\""), square).status).toBe("invalid");
  // The same network turned the other way round is fine.
  expect(nf(bt(E(["r1c2", "r1c1"], ["r1c3", "r1c2"])), three).status).toBe("complete");
});

test("the public evaluator rejects a directed cycle and a non-adjacent pair too", () => {
  for (const edges of [E(["r1c1", "r1c2"], ["r1c2", "r1c1"]), E(["r1c1", "r1c3"])]) {
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(bt(edges))}` });
    const rule = compiled.value!.rules[0];
    for (const digits of [at(1, 2, 3), at(3, 2, 1), at(1, 1, 1)]) expect(evaluate(rule, { digits, values: digits }).status).toBe("broken");
  }
});

test("channel D ignores effective values and channel V follows them", () => {
  const compile = (text: string) => compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---${body(text)}` }).value!.rules[0];
  const digits = at(1, 2, 3), shifted = at(1, 3, 2);
  expect(evaluate(compile(bt(E(["r1c1", "r1c2"], ["r1c2", "r1c3"]))), { digits, values: shifted }).status).toBe("broken");
  expect(evaluate(compile(bt(E(["r1c1", "r1c2"], ["r1c2", "r1c3"]), 'channel "D"')), { digits, values: shifted }).status).toBe("holds");
});

test("a value channel stays uncovered when effective values are unresolved, and channel D does not", () => {
  const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["r1c3"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const v = nf(bt(fork) + modifier, three);
  expect(v.normalForm?.coverage.find(x => x.kind === "branched-thermo")?.status).toBe("unsupported");
  const d = nf(bt(fork, 'channel "D"') + modifier, three);
  expect(d.normalForm?.coverage.find(x => x.kind === "branched-thermo")?.status).toBe("lowered");
});

/** The published definition stated directly, for the channel that reads printed digits. */
function reference(edges: [string, string][], strict: boolean, digits: Record<string, number>): boolean {
  return edges.every(([lower, higher]) => strict ? digits[lower] < digits[higher] : digits[lower] <= digits[higher]);
}
function printed(rows: number, cols: number, symbols: number[], edges: [string, string][], strict: boolean): number {
  const cells = gridCells(rows, cols), board = boardOf(rows, cols, symbols);
  const r = nf(bt(E(...edges), `${strict ? "" : "strict false "}channel "D"`), board);
  expect(r.issues).toEqual([]);
  let seen = 0;
  const walk = (index: number, digits: Record<string, number>) => {
    if (index === cells.length) {
      const expected = reference(edges, strict, digits);
      expect([JSON.stringify(digits), holds(r.normalForm!.solution, digits)]).toEqual([JSON.stringify(digits), expected]);
      if (expected) seen++;
      return;
    }
    for (const x of symbols) walk(index + 1, { ...digits, [cells[index]]: x });
  };
  walk(0, {});
  return seen;
}

test("channel D agrees with the published definition", () => {
  expect(printed(1, 3, [1, 2, 3], [["r1c2", "r1c1"], ["r1c2", "r1c3"]], true)).toBeGreaterThan(0);
  expect(printed(1, 3, [1, 2, 3], [["r1c2", "r1c1"], ["r1c2", "r1c3"]], false)).toBeGreaterThan(0);
  expect(printed(2, 2, [1, 2, 3], [["r1c1", "r1c2"], ["r1c1", "r2c1"], ["r1c2", "r2c2"], ["r2c1", "r2c2"]], true)).toBeGreaterThan(0);
  expect(printed(2, 2, [1, 2, 3], [["r1c1", "r1c2"], ["r2c1", "r2c2"], ["r1c1", "r2c1"]], false)).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on a fork", () => {
  expect(differential(KINDS, 1, 3, [1, 2, 3], [bt(fork), bt(fork, "strict false")])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on arms that rejoin", () => {
  expect(differential(KINDS, 2, 2, [1, 2, 3], [bt(diamond), bt(diamond, "strict false")])).toBeGreaterThan(0);
});

test("the lowered formula and the public evaluator agree on several bulbs and a duplicate edge", () => {
  expect(differential(KINDS, 1, 3, [1, 2, 3], [bt(E(["r1c1", "r1c2"], ["r1c3", "r1c2"])), bt(E(["r1c1", "r1c2"], ["r1c2", "r1c3"], ["r1c1", "r1c2"]))])).toBeGreaterThan(0);
});

test("direction and adjacency are read numerically on a board of ten or more rows", () => {
  // Cells sort as text with r10 before r2, so a text sort would turn r9 to r10 the wrong way round.
  const tall = boardOf(10, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const column = (...v: number[]) => gr(10, 1, ...v);
  const up = form(bt(E(["r9c1", "r10c1"])), tall);
  expect(holds(up, column(1, 1, 1, 1, 1, 1, 1, 1, 2, 3))).toBe(true);
  expect(holds(up, column(1, 1, 1, 1, 1, 1, 1, 1, 3, 2))).toBe(false);
  const down = form(bt(E(["r10c1", "r9c1"])), tall);
  expect(holds(down, column(1, 1, 1, 1, 1, 1, 1, 1, 3, 2))).toBe(true);
  expect(holds(down, column(1, 1, 1, 1, 1, 1, 1, 1, 2, 3))).toBe(false);
  differs(bt(E(["r9c1", "r10c1"])), bt(E(["r10c1", "r9c1"])), tall);
  // A path through the tall board matches the thermo whichever way the cells sort.
  equal(bt(E(["r8c1", "r9c1"], ["r9c1", "r10c1"])), "thermo r8c1-r9c1-r10c1", tall);
  equal(bt(E(["r10c1", "r9c1"], ["r9c1", "r8c1"])), 'thermo r8c1-r9c1-r10c1 orientation "reverse"', tall);
  // r2 and r10 sit next to each other in a text sort but eight rows apart on the board.
  expect(nf(bt(E(["r2c1", "r10c1"])), tall).status).toBe("invalid");
  expect(nf(bt(E(["r10c1", "r2c1"])), tall).status).toBe("invalid");
  expect(nf(bt(E(["r2c1", "r3c1"], ["r3c1", "r10c1"])), tall).status).toBe("invalid");
  expect(nf(bt(E(["r1c1", "r2c1"], ["r9c1", "r10c1"])), tall).status).toBe("invalid");
});

test("the lowered formula and the public evaluator agree across the r9 to r10 edge", () => {
  const cells = gridCells(10, 1);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 10, cols: 1, symbols: [1,2,3], regions: [[${cells.join(", ")}]]}\n---${body(bt(E(["r9c1", "r10c1"])))}` });
  const rule = compiled.value!.rules[0];
  const r = nf(bt(E(["r9c1", "r10c1"])), boardOf(10, 1, [1, 2, 3]));
  for (const [a, b] of [[1, 2], [2, 1], [3, 3], [1, 3]]) {
    const digits = { ...Object.fromEntries(cells.map(c => [c, 1])), r9c1: a, r10c1: b };
    expect(holds(r.normalForm!.solution, digits)).toBe(evaluate(rule, { digits, values: digits }).status === "holds");
    expect(holds(rule.finite!, digits, digits)).toBe(a < b);
  }
});

/**
 * With strict false and equal digits every edge holds, so only the acyclic predicate can reject a network. The channel is V and the
 * assignment supplies effective values, so the public evaluator follows the published definition instead of the lowered formula.
 */
test("the published definition rejects a directed cycle even when every edge would hold", () => {
  const compile = (edges: string, rows: number, cols: number) => {
    const cells = gridCells(rows, cols);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: ${rows}, cols: ${cols}, symbols: [1,2,3], regions: [[${cells.join(", ")}]]}\n---${body(bt(edges, "strict false"))}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const digits = Object.fromEntries(cells.map(c => [c, 2]));
    return evaluate(compiled.value!.rules[0], { digits, values: digits }).status;
  };
  expect(compile(E(["r1c1", "r1c2"], ["r1c2", "r1c1"]), 1, 2)).toBe("broken");
  expect(compile(E(["r1c1", "r1c2"], ["r1c2", "r2c2"], ["r2c2", "r2c1"], ["r2c1", "r1c1"]), 2, 2)).toBe("broken");
  expect(compile(E(["r1c1", "r1c2"], ["r1c2", "r1c3"], ["r1c3", "r2c3"], ["r2c3", "r2c2"], ["r2c2", "r2c1"], ["r2c1", "r1c1"]), 2, 3)).toBe("broken");
  expect(compile(E(["r1c1", "r1c2"], ["r1c2", "r1c1"], ["r1c2", "r1c3"]), 1, 3)).toBe("broken");
  expect(compile(diamond, 2, 2)).toBe("holds");
  expect(compile(fork, 1, 3)).toBe("holds");
});

test("the lowered formula and the public evaluator agree on the alphabet 0, 1, 2", () => {
  expect(differential(KINDS, 1, 3, [0, 1, 2], [bt(fork), bt(fork, "strict false")])).toBeGreaterThan(0);
  expect(differential(KINDS, 2, 2, [0, 1, 2], [bt(diamond, "strict false")])).toBeGreaterThan(0);
});

test("an edge touching an inactive cell is invalid", () => {
  const board = boardOf(1, 3, [1, 2, 3], ["r1c1", "r1c3"]);
  expect(nf(bt(E(["r1c1", "r1c2"])), board).status).toBe("invalid");
  expect(nf(bt(E(["r1c2", "r1c3"])), board).status).toBe("invalid");
  expect(nf(bt(E(["r1c1", "r1c2"], ["r1c2", "r1c3"])), board).status).toBe("invalid");
  expect(nf(bt(E(["r1c1", "r1c2"])), boardOf(1, 3, [1, 2, 3], ["r1c1", "r1c2"])).status).toBe("complete");
});

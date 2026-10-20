import { expect, test } from "bun:test";
import { readdir, readFile } from "node:fs/promises";
import { compare, normalise, visibleCells, declarationRegistry, exact, readHeader, type BoardContext, type Cell, type Formula, type Normalisation } from "../../src";
import { declarationLibrary } from "../../src/declaration-library";
import type { Type } from "../../src/language/ast";
import { canonicalise, type CanonicalState } from "../../src/semantics/canonical";

const cells = (rows: number, cols = rows): Cell[] => Array.from({ length: rows * cols }, (_, i) => `r${Math.floor(i / cols) + 1}c${i % cols + 1}`);
const board = (n = 4, alphabet = Array.from({ length: n }, (_, i) => i + 1)): BoardContext => ({ rows: n, cols: n, alphabet, activeCells: cells(n) });
const file = (rules: string, header = "", name = "synthetic.rules.md") => ({ file: name, text: `---\nformat: open-rules\ntitle: Synthetic rules\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n${header}---\n\n\`\`\`rules\n${rules}\n\`\`\`\n` });
const nf = (rules: string, b = board(), header = "") => normalise(file(rules, header), b);
function complete(result: Normalisation) { expect(result.issues).toEqual([]); expect(result.status).toBe("complete"); return result.normalForm!; }
function equivalent(a: string, b: string, context = board()) { expect(compare(nf(a, context), nf(b, context)).status).toBe("equivalent"); }
function different(a: string, b: string, context = board()) { const result = compare(nf(a, context), nf(b, context)); expect(result.status).toBe("unresolved"); expect(result.covered).toBe("structural-difference"); return result; }

// Independent complete-assignment interpreter for the exported primitive contract.
function evaluate(f: Formula, answer: Record<string, number>): boolean {
  switch (f.op) {
    case "All": return f.children.every(c => evaluate(c, answer));
    case "Any": return f.children.some(c => evaluate(c, answer));
    case "Not": return !evaluate(f.child, answer);
    case "Distinct": return new Set(f.cells.map(c => answer[c])).size === (f.collection === "set" ? new Set(f.cells).size : f.cells.length);
    case "Allowed": return f.values.includes(answer[f.cell]);
    case "CountAtLeast": return f.cells.filter(c => answer[c] === f.digit).length >= f.count;
    case "SumEqual": return f.left.reduce((n,c) => n+BigInt(answer[c]),0n) === f.right.reduce((n,c) => n+BigInt(answer[c]),0n);
    case "Pair": return f.table.some(([a, b]) => a === answer[f.cells[0]] && b === answer[f.cells[1]]);
  }
}
function accepts(form: ReturnType<typeof complete>, answer: Record<string, number>): boolean {
  return form.board.activeCells.every(c => form.board.alphabet.includes(answer[c])) &&
    form.board.houses.every(h => new Set(h.map(c => answer[c])).size === h.length) &&
    form.board.givens.every(g => answer[g.cell] === g.digit) && evaluate(form.solution, answer);
}

test("registry inventories every published kind, including aliases, with a specific reason", async () => {
  const kinds: string[] = [];
  for (const name of await readdir("rules")) if (name.endsWith(".md")) {
    const page = readHeader({ file: name, text: await readFile(`rules/${name}`, "utf8") }).value!;
    if (typeof page.metadata.kind === "string") kinds.push(page.metadata.kind);
  }
  expect(Object.keys(declarationRegistry).sort()).toEqual(kinds.sort());
  expect(kinds.length).toBe(85);
  for (const entry of Object.values(declarationRegistry)) if (entry.status === "unsupported") expect(entry.reason.length).toBeGreaterThan(20);
});

test("unique lowers set membership to every unordered inequality pair", () => {
  equivalent("unique r1c1-r1c2-r1c3", "b: unique r1c2-r1c3\na: unique r1c1-r1c2\nc: unique r1c3-r1c1");
  const form = complete(nf("unique r1c1-r1c2-r1c3"));
  expect(evaluate(form.solution, { r1c1: 1, r1c2: 2, r1c3: 3 })).toBe(true);
  expect(evaluate(form.solution, { r1c1: 1, r1c2: 2, r1c3: 1 })).toBe(false);
  const result = different("unique r1c1-r1c2-r1c3", "unique r1c1-r1c2");
  expect(result.differences[0].primitive).toBe("Pair");
  expect(result.differences[0].cells).toEqual(["r1c1", "r1c3"]);
  expect(result.differences[0].sources[0].span.start.line).toBe(12);
});

test("sets, reversed pairs, duplicate positive clauses and line permutations are canonical", () => {
  equivalent("a: unique r1c2-r1c1-r1c1\nb: unique r2c1-r2c2\nc: unique r1c1-r1c2", "d: unique r2c2-r2c1\ne: unique r1c1-r1c2");
  const form = complete(nf("a: unique r1c1-r1c2\nb: unique r1c2-r1c1"));
  expect(form.solution.op).toBe("Pair");
  expect(form.sources.find(s => s.primitive === JSON.stringify(form.solution))!.sources.map(s => s.instance)).toEqual(["a", "b"]);
  different("unique r1c1-r1c2", "unique r1c1-r2c2");
});

test("clone means equality of every pair, not a distinctness rule or positional zip", () => {
  equivalent("clone r1c3-r1c1-r1c2", "a: clone r1c1-r1c2\nb: clone r1c1-r1c3\nc: clone r1c2-r1c3");
  const form = complete(nf("clone r1c1-r1c2"));
  expect(evaluate(form.solution, { r1c1: 4, r1c2: 4 })).toBe(true);
  expect(evaluate(form.solution, { r1c1: 4, r1c2: 3 })).toBe(false);
  different("clone r1c1-r1c2", "unique r1c1-r1c2");
});

test("diagonals use active coordinates on rectangular and inactive-cell boards", () => {
  const context = { ...board(), rows: 3, cols: 5, activeCells: cells(3, 5).filter(c => c !== "r2c2" && c !== "r2c4") };
  equivalent('diagonal direction "main"', "unique r1c1-r3c3", context);
  equivalent('diagonal direction "anti"', "unique r1c5-r3c3", context);
  different('diagonal direction "main"', 'diagonal direction "anti"', context);
  const f = complete(nf('diagonal direction "anti"', context));
  expect(evaluate(f.solution, { r1c5: 1, r3c3: 2 })).toBe(true);
  expect(evaluate(f.solution, { r1c5: 1, r3c3: 1 })).toBe(false);
});

test("chess moves expand exact active edges; scoped same over the whole alphabet agrees", () => {
  for (const move of ["king", "knight"]) {
    equivalent(`anti-${move}`, `scoped-move move "${move}" relation "same" digits [4,3,2,1]`);
    different(`anti-${move}`, `scoped-move move "${move}" relation "same" digits [1]`);
  }
  const two: BoardContext = { rows: 2, cols: 3, alphabet: [0, 1, 2], activeCells: ["r1c1", "r2c3"] };
  equivalent("anti-knight", "unique r1c1-r2c3", two);
  const f = complete(nf("anti-knight", two));
  expect(evaluate(f.solution, { r1c1: 0, r2c3: 1 })).toBe(true);
  expect(evaluate(f.solution, { r1c1: 0, r2c3: 0 })).toBe(false);
  const far: BoardContext = { rows: 4, cols: 4, alphabet: [1, 2, 3, 4], activeCells: ["r1c1", "r4c4"] };
  equivalent('scoped-move move "bishop" relation "same" digits [1,2,3,4]', "unique r1c1-r4c4", far);
  different('scoped-move move "bishop" relation "same" digits [1,2,3,4]', "anti-king", far);
});

test("scoped consecutive forbids either scoped endpoint using digit values, including zero", () => {
  const context: BoardContext = { rows: 1, cols: 2, alphabet: [0, 1, 2, 3], activeCells: ["r1c1", "r1c2"] };
  const form = complete(nf('scoped-move move "orthogonal" relation "consecutive" digits [1]', context));
  for (const pair of [[0, 1], [1, 0], [1, 2], [2, 1]]) expect(evaluate(form.solution, { r1c1: pair[0], r1c2: pair[1] })).toBe(false);
  for (const pair of [[2, 3], [1, 1], [0, 3]]) expect(evaluate(form.solution, { r1c1: pair[0], r1c2: pair[1] })).toBe(true);
  different('scoped-move move "orthogonal" relation "consecutive" digits [1]', 'scoped-move move "orthogonal" relation "consecutive" digits [0]', context);
});

test("parity reads V=D only with established identity and uses actual digits", () => {
  for (const alphabet of [[0,1,2,3,4,5,6,7,8], [0,1,2,3], [1,2,3,4,5,6], [-3,-2,-1,0]]) {
    const context = board(alphabet.length, alphabet);
    const even = alphabet.filter(d => d % 2 === 0);
    equivalent('parity-cells r1c1-r1c2 parity "even"', `allowed-digits r1c2-r1c1 digits ${JSON.stringify(even)}`, context);
    different('parity-cells r1c1 parity "even"', 'parity-cells r1c1 parity "odd"', context);
    const f = complete(nf('parity-cells r1c1 parity "even"', context));
    expect(evaluate(f.solution, { r1c1: even[0] })).toBe(true);
    expect(evaluate(f.solution, { r1c1: alphabet.find(d => d % 2 !== 0)! })).toBe(false);
  }
  const mixed = nf('value-modifier name "doubler" factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [["r1c1"]] distinct false\nparity-cells r1c1 parity "odd"');
  expect(mixed.status).toBe("partial");
  expect(mixed.normalForm!.coverage.find(c => c.kind === "parity-cells")!.reason).toContain("Effective-value domain");
  expect(compare(mixed, mixed).status).toBe("unresolved");
});

test("allowed digits are membership sets; paths can repeat without multiplying restrictions", () => {
  equivalent("allowed-digits r1c2-r1c1-r1c1 digits [3,1,3]", "a: allowed-digits r1c1 digits [1,3]\nb: allowed-digits r1c2 digits [3,1]");
  const f = complete(nf("allowed-digits r1c1 digits [1,3]"));
  expect(evaluate(f.solution, { r1c1: 3 })).toBe(true);
  expect(evaluate(f.solution, { r1c1: 2 })).toBe(false);
  different("allowed-digits r1c1 digits [1,3]", "allowed-digits r1c1 digits [1,2]");
  equivalent("allowed-digits r1c1 digits [1,2,3,4]", "unique r1c1");
  expect(nf("allowed-digits r1c1 digits []").status).toBe("invalid");
});

test("explicit houses imply pairs independently, even when no one house contains the group", () => {
  const context = board();
  context.houses = [
    { cells: ["r1c1", "r1c2"], source: { file: "board.json", start: { offset: 0, line: 1, column: 1 }, end: { offset: 1, line: 1, column: 2 } } },
    { cells: ["r1c2", "r2c1"] }, { cells: ["r1c1", "r2c1"] },
  ];
  equivalent("unique r1c1-r1c2-r2c1", "unique r4c4", context);
  const f = complete(nf("unique r1c1-r1c2-r2c1", context));
  expect(f.rewrites.filter(r => r.rule === "house-implied").length).toBe(3);
  expect(f.rewrites.some(r => r.sources.some(s => s.span.file === "board.json"))).toBe(true);
  const answer = Object.fromEntries(context.activeCells.map(c => [c, 1])); answer.r1c2 = 2; answer.r2c1 = 3;
  expect(accepts(f, answer)).toBe(true);
  const missing = { ...context, houses: context.houses.slice(0, 2) };
  different("unique r1c1-r1c2-r2c1", "unique r4c4", missing);
  expect(compare(nf("unique r4c4", context), nf("unique r4c4", missing)).differences[0].primitive).toBe("Board");
});

test("canvas and irregular regions do not invent houses on 4x4 or 6x6 boards", () => {
  for (const n of [4, 6]) {
    const context = board(n);
    context.regions = [context.activeCells.filter((_, i) => i % 2 === 0), context.activeCells.filter((_, i) => i % 2 === 1)];
    different("unique r1c1-r1c3", "unique r1c1", context);
    expect(complete(nf("unique r1c1", context)).board.houses).toEqual([]);
  }
});

test("sudoku retains its fixed published board and composed negation", () => {
  const context = board(9);
  const f = complete(nf("sudoku 9x9", context));
  expect(f.board.houses).toHaveLength(27);
  expect(f.board.regions).toHaveLength(9);
  const answer = Object.fromEntries(context.activeCells.map(c => {
    const [, r, col] = /r(\d+)c(\d+)/.exec(c)!;
    return [c, ((Number(r)-1)*3 + Math.floor((Number(r)-1)/3) + Number(col)-1) % 9 + 1];
  }));
  expect(accepts(f, answer)).toBe(true);
  equivalent("sudoku 9x9", "sudoku 9x9\nunique r1c1-r1c2-r1c3", context);
  const neg = complete(nf("not sudoku 9x9", context));
  expect(neg.board.houses).toHaveLength(0);
  expect(neg.solution.op).toBe("Not");
  expect(accepts(neg, answer)).toBe(false);
  expect(accepts(neg, Object.fromEntries(context.activeCells.map(c => [c, 1])))).toBe(true);
  expect(nf("sudoku 4x4").status).toBe("invalid");
  expect(nf("sudoku 9x9", board(9, [0,1,2,3,4,5,6,7,8])).status).toBe("invalid");
});

test("negation complements complete bundles, double negation cancels and negate all precedes conditions", () => {
  equivalent("not not unique r1c1-r1c2", "unique r1c2-r1c1");
  const form = complete(nf("not unique r1c1-r1c2-r1c3"));
  expect(form.solution.op).toBe("Not");
  expect(evaluate(form.solution, { r1c1: 1, r1c2: 1, r1c3: 2 })).toBe(true);
  expect(evaluate(form.solution, { r1c1: 1, r1c2: 2, r1c3: 3 })).toBe(false);
  different("not unique r1c1-r1c2-r1c3", "a: not unique r1c1-r1c2\nb: not unique r1c1-r1c3\nc: not unique r1c2-r1c3");
  expect(compare(nf("not unique r1c1-r1c2", board(), "negate: all\n"), nf("unique r1c1-r1c2")).status).toBe("equivalent");
  different("unique r1c1-r1c2 if distinct", "unique r1c1-r1c2 unless distinct");
  equivalent("unique r1c1-r1c2 if connected", "unique r1c1-r1c2");
  equivalent("unique r1c1-r3c3 if connected", "unique r1c1");
  different("unique r1c1-r1c2 if connected", "unique r1c1-r1c2 unless connected");
  expect(nf("unique r1c1-r1c2 if uniform").status).toBe("partial");
});

test("every supported family is checked under not, if, unless and negate all", () => {
  const examples = ['unique r1c1-r1c2', 'clone r1c1-r1c2', 'allowed-digits r1c1-r1c2 digits [1,3]', 'parity-cells r1c1-r1c2 parity "odd"', 'pair r1c1-r1c2 less', 'kropki r1c1-r1c2 white', 'quadruple r1c1-r1c2 digits [1]', 'outside r1c1-r1c2 digits [1,1]'];
  for (const rule of examples) {
    equivalent(`not not ${rule}`, rule);
    equivalent(`${rule} if connected`, rule);
    equivalent(`not ${rule} unless connected`, "unique r1c1");
    expect(compare(nf(`not ${rule}`, board(), "negate: all\n"), nf(rule)).status).toBe("equivalent");
  }
  for (const rule of ['anti-knight', 'anti-king', 'diagonal direction "main"', 'scoped-move move "bishop" relation "same" digits [1,2]']) {
    equivalent(`not not ${rule}`, rule);
    expect(nf(`${rule} if distinct`).status).toBe("invalid");
  }
});

test("mixed coverage, foreign definitions and play setup never yield whole-file agreement", () => {
  for (const result of [nf("unique r1c1-r1c2\ncage r1c1-r1c2 repeats false total 3"), nf("https://example.test/custom.md r1c1"), nf("unique r1c1", board(), "definitions: {}\n")]) {
    expect(result.issues).toEqual([]);
    expect(result.status).toBe("partial");
    const c = compare(result, result);
    expect(c.status).toBe("unresolved"); expect(c.uncovered.length).toBeGreaterThan(0);
  }
  expect(compare(nf("unique r1c1-r1c2\ncage r1c1 repeats false total 2"), nf("clone r1c1-r1c2\ncage r1c1 repeats false total 2")).covered).toBe("structural-difference");
  const alternate = normalise({ ...file("unique r1c1"), text: file("unique r1c1").text.replace("https://rules.sudoku-sleuth.com/", "https://example.test/") }, board());
  expect(alternate.status).toBe("partial");
});

test("invalid parameters and board data remain errors under false conditions and negation", () => {
  for (const text of ['not unique r5c1-r1c1 if connected', 'not parity-cells r1c1 parity "red"', 'allowed-digits r1c1 digits [0]', 'unique r1c1 wrong true', 'unique r1c1\nunique r1c2', 'same: unique r1c1\nsame: clone r1c2', 'anti-knight if distinct', 'unique r1c1 digits [1', 'not unique r0c1 if connected']) expect(nf(text).status).toBe("invalid");
  for (const context of [
    { ...board(), alphabet: [1, 1] }, { ...board(), activeCells: ["r5c1"] as Cell[] },
    { ...board(), givens: [{ cell: "r1c1" as Cell, digit: 0 }] },
    { ...board(), regions: [["r1c1"] as Cell[]] },
    { ...board(), activeCells: ["r1c1", "r1c1"] as Cell[] },
    { ...board(), houses: [{ cells: ["r9c9"] as Cell[] }] },
  ]) expect(nf("unique r1c1", context).status).toBe("invalid");
  const inactive = { ...board(), activeCells: cells(4).filter(c => c !== "r1c2") };
  expect(nf("not unique r1c2", inactive).status).toBe("invalid");
  expect(compare(nf("sudoku 4x4"), nf("sudoku 4x4")).status).toBe("invalid");
});

test("board identity preserves ordered alphabets, active cells, primary regions and givens", () => {
  const base = board();
  for (const altered of [
    { ...base, alphabet: [4,3,2,1] },
    { ...base, activeCells: cells(4).slice(0, -1) },
    { ...base, regions: [cells(4)] },
    { ...base, givens: [{ cell: "r1c1" as Cell, digit: 1 }] },
  ]) expect(compare(nf("unique r1c1", base), nf("unique r1c1", altered)).differences[0].primitive).toBe("Board");
  const context = { ...base, regions: [cells(4)], houses: [{ cells: ["r1c1", "r1c2"] as Cell[] }] };
  const reversed = { ...context, activeCells: [...context.activeCells].reverse(), regions: [[...cells(4)].reverse()], houses: [{ cells: ["r1c2", "r1c1"] as Cell[] }] };
  expect(compare(nf("unique r1c1", context), nf("unique r1c1", reversed)).status).toBe("equivalent");
});

test("source spans retain full source, instance IDs, CRLF and Unicode positions", () => {
  const input = file("α: unique r1c2-r1c1", "", "unicode.rules.md"); input.text = input.text.replaceAll("\n", "\r\n");
  const form = complete(normalise(input, board()));
  const source = form.coverage[0].source;
  expect(source.instance).toBe("α");
  expect(input.text.slice(source.span.start.offset, source.span.end.offset)).toBe("α: unique r1c2-r1c1");
  expect(source.span.start).toMatchObject({ line: 12, column: 1 });
});

test("normalisation is structurally idempotent and does not mutate inputs", () => {
  const context = board(); const original = JSON.stringify(context);
  const form = complete(nf('a: unique r1c2-r1c1\nb: not clone r2c2-r2c1\nc: allowed-digits r3c1 digits [3,1,3]', context));
  const state: CanonicalState = { board: form.board, houses: new Map(), links: new Map(), rewrites: [] };
  expect(canonicalise(form.solution, state, [])).toEqual(form.solution);
  expect(JSON.stringify(context)).toBe(original);
});

test("each enabled rewrite preserves meaning on all small assignments under its house premises", () => {
  const context: BoardContext = { rows: 1, cols: 3, alphabet: [0,1,2], activeCells: ["r1c1", "r1c2", "r1c3"], houses: [{ cells: ["r1c1", "r1c2"] }] };
  const form = complete(nf('a: unique r1c2-r1c1\nb: unique r1c3-r1c1\nc: unique r1c1-r1c3\nd: parity-cells r1c3 parity "even"\ne: clone r1c3-r1c3\nf: allowed-digits r1c3 digits [2,0,2]\ng: unique r1c3 unless distinct', context));
  const rawPair: Formula = { op: "Pair", channel: "D", cells: ["r1c3", "r1c1"], table: [[2,0],[1,0],[2,0]] };
  const pairState: CanonicalState = { board: form.board, houses: new Map(), links: new Map(), rewrites: [] };
  const ordered = canonicalise(rawPair, pairState, []);
  expect(evaluate(ordered, {r1c1: 0, r1c3: 2})).toBe(true);
  expect(evaluate(ordered, {r1c1: 2, r1c3: 0})).toBe(false);
  const seen = new Set([...form.rewrites, ...pairState.rewrites].map(r => r.rule));
  // Internal double Not also occurs when unless wraps a connected condition.
  const extra = complete(nf('unique r1c1-r1c2-r1c3 unless distinct', context));
  extra.rewrites.forEach(r => seen.add(r.rule));
  for (const rule of ["distinct-pairs", "pair-order", "boolean-canonical", "double-not", "house-implied", "value-channel"]) expect(seen.has(rule)).toBe(true);
  for (const rewrite of [...form.rewrites, ...extra.rewrites, ...pairState.rewrites]) {
    const before = JSON.parse(rewrite.before) as Formula, after = JSON.parse(rewrite.after) as Formula;
    for (const a of context.alphabet) for (const b of context.alphabet) for (const c of context.alphabet) {
      const answer = { r1c1: a, r1c2: b, r1c3: c };
      if (a === b) continue;
      expect(evaluate(before, answer)).toBe(evaluate(after, answer));
    }
    expect(rewrite.version).toBe(1);
  }
});

test("the public compare API retains exact rational comparison", () => {
  expect(compare(exact("0.5"), exact("0.50"))).toBe(0);
  expect(compare(exact("2"), exact("1"))).toBe(1);
});


test("path conditions retain repeated positions while set conditions remove them", () => {
  equivalent('allowed-digits r1c1-r1c1 digits [1] if distinct', 'unique r1c1');
  different('allowed-digits r1c1-r1c1 digits [1] if distinct', 'allowed-digits r1c1 digits [1] if distinct');
  equivalent('unique r1c1-r1c1 if distinct', 'unique r1c1');
  different('not not unique r1c1-r1c2', 'not unique r1c1-r1c2');
});

test("untotalled cage and killer alias use distinctness and retain house witnesses", () => {
  equivalent('cage r1c1-r1c2 repeats false', 'unique r1c1-r1c2');
  equivalent('killer r1c2-r1c1 repeats false', 'unique r1c1-r1c2');
  equivalent('cage r1c1-r1c2 repeats true', 'unique r1c1');
  equivalent('not cage r1c1-r1c2 repeats false', 'not unique r1c1-r1c2');
  different('cage r1c1-r1c2 repeats false', 'cage r1c1-r1c2 repeats true');
  const context = { ...board(), houses: [{cells: ['r1c1','r1c2'] as Cell[]}] };
  equivalent('cage r1c1-r1c2 repeats false', 'unique r1c1', context);
  const f = complete(nf('cage r1c1-r1c2 repeats false', context));
  expect(f.rewrites.find(r => r.rule === 'house-implied')!.sources.some(s => s.kind === 'cage')).toBe(true);
  expect(evaluate(complete(nf('cage r1c1-r1c2 repeats false')).solution, {r1c1: 1, r1c2: 2})).toBe(true);
  expect(evaluate(complete(nf('cage r1c1-r1c2 repeats false')).solution, {r1c1: 1, r1c2: 1})).toBe(false);
  for (const rule of ['cage r1c1 repeats false total 1', 'killer r1c1 repeats false sum 1']) expect(nf(rule).status).toBe('partial');
});

test("explicit board headers agree with resolved context and retain board provenance", () => {
  const context = board(4, [0,1,2,3]);
  context.regions = [cells(4)];
  context.givens = [{cell: "r1c1", digit: 0}];
  const header = 'board:\n  rows: 4\n  cols: 4\n  symbols: [0,1,2,3]\n  regions: [' + JSON.stringify(cells(4)) + ']\n  givens: [{cell: r1c1, digit: 0}]\n';
  expect(nf('unique r1c1', context, header).status).toBe('complete');
  const withHeader = complete(nf('unique r1c1', context, header));
  expect(withHeader.sources.find(s => s.primitive === 'board')!.sources[0].kind).toBe('header:board');
  expect(nf('unique r1c1', context, header.replace('cols: 4', 'cols: 5')).status).toBe('invalid');
  expect(nf('unique r1c1', context, 'givens: "r1c1=0"\n').status).toBe('complete');
  expect(nf('unique r1c1', context, 'givens: "0..............."\n').status).toBe('complete');
  expect(nf('unique r1c1', context, 'givens: "1..............."\n').status).toBe('invalid');
  const houses = {...context, houses: [{cells: ["r1c1", "r1c2"] as Cell[]}]};
  expect(nf('unique r1c1', houses, 'regions: [[r1c2,r1c1]]\n').status).toBe('complete');
  expect(nf('unique r1c1', context, 'regions: [[r1c2,r1c1]]\n').status).toBe('invalid');
  expect(nf('unique r1c1', context, 'board: {grids: []}\n').status).toBe('partial');
  expect(normalise(file('unique r1c1'), {...context, boards: []} as BoardContext).status).toBe('invalid');
});

test("finite expansion limits report uncovered declarations instead of agreement", () => {
  const context = board(32, Array.from({length: 64}, (_,i) => i));
  const result = nf('clone ' + context.activeCells.join('-'), context);
  expect(result.status).toBe('partial');
  expect(result.normalForm!.coverage[0].reason).toContain('1,000,000');
  expect(compare(result,result).status).toBe('unresolved');
});

test("every unsupported kind reports its registered reason when encountered", () => {
  for (const [kind, capability] of Object.entries(declarationRegistry)) if (capability.status === "unsupported") {
    const url = `https://rules.sudoku-sleuth.com/${kind}.md`;
    const contract = declarationLibrary.parameters!.get(url)!;
    const value = (type: Type): unknown => {
      if (contract.types[type.name]) return value(contract.types[type.name]);
      if (type.name === 'enum') return type.members![0];
      if (type.name === 'clause') return {id:'dot',rule:'kropki',args:{cells:['r1c1','r1c2'],colour:'black'}};
      if (type.name === 'expression') return {op:'number',value:1};
      if (type.name === 'cell') return 'r1c1';
      if (type.name === 'boolean') return false;
      if (['list','set','path','collection'].includes(type.name)) return [value(type.args![0])];
      if (type.name === 'record') return Object.fromEntries(Object.entries(type.fields!).filter(([,t])=>t.name !== 'optional').map(([n,t])=>[n,value(t)]));
      return 1;
    };
    const line = declarationLibrary.lines!.get(url);
    const keyword = line && Object.keys(line.parameter.keywords)[0];
    const tail = line ? `${Array.from({length:line.cells.count},(_,i)=>`r1c${i+1}`).join('-')} ${keyword} ${line.parameter.keywords[keyword!].map(()=>1).join(' ')}` : '';
    const named = Object.entries(contract.parameters).filter(([name,p])=>p.required && name !== line?.cells.name && name !== line?.parameter.name).map(([name,p])=>`${name} ${JSON.stringify(value(p.type!))}`).join(' ');
    const result = nf(`${kind} ${tail} ${named}`, board(9));
    expect(result.issues).toEqual([]);
    expect(result.status).toBe("partial");
    expect(result.normalForm!.coverage).toHaveLength(1);
    expect(result.normalForm!.coverage[0]).toMatchObject({kind, status: "unsupported", reason: capability.reason});
    expect(compare(result,result).status).toBe("unresolved");
  }
});

for (const { name, declaration, valid } of [
  { name: "diagonal direction", declaration: (v: string) => `diagonal direction ${v}`, valid: "main" },
  { name: "parity", declaration: (v: string) => `parity-cells r1c1 parity ${v}`, valid: "odd" },
  { name: "move", declaration: (v: string) => `scoped-move move ${v} relation "same" digits [1]`, valid: "king" },
  { name: "relation", declaration: (v: string) => `scoped-move move "king" relation ${v} digits [1]`, valid: "same" },
]) test(`${name} rejects arrays, wrong types and unknown enum values before lowering`, () => {
  for (const value of [JSON.stringify([valid]), '[]', '{}', 'null', 'true', '1', '"unknown"']) {
    expect(nf(`not ${declaration(value)}`).status).toBe("invalid");
  }
});

test("cage totals reject null rather than treating it as an absent parameter", () => {
  for (const kind of ["cage", "killer"]) for (const name of ["total", "sum"]) {
    expect(nf(`not ${kind} r1c1 ${name} null if connected`).status).toBe("invalid");
  }
});

test("sudoku rejects primary regions that contradict standard boxes even under negation", () => {
  const context = board(9);
  context.regions = Array.from({ length: 9 }, (_, r) => context.activeCells.slice(r * 9, (r + 1) * 9));
  for (const rule of ["sudoku 9x9", "not sudoku 9x9"]) expect(nf(rule, context).status).toBe("invalid");
  const standard = complete(nf("sudoku 9x9", board(9))).board.regions;
  complete(nf("sudoku 9x9", { ...board(9), regions: standard.reverse().map(r => r.reverse()) }));
});

test("given records have canonical identity in contexts and both header locations", () => {
  const a = { ...board(), givens: [{ cell: "r1c1" as Cell, digit: 1 }] };
  const b = { ...board(), givens: [{ digit: 1, cell: "r1c1" as Cell }] };
  expect(compare(nf("unique r1c1", a), nf("unique r1c1", b)).status).toBe("equivalent");
  for (const context of [a, b]) for (const record of ['{cell: r1c1, digit: 1}', '{digit: 1, cell: r1c1}']) {
    complete(nf("unique r1c1", context, `givens: [${record}]\n`));
    complete(nf("unique r1c1", context, `board: {givens: [${record}]}\n`));
  }
});

test("later house rewrites retain the conditional clue source and retained house link", () => {
  const context = { ...board(), houses: [{ cells: ["r1c1", "r1c2"] as Cell[] }] };
  const form = complete(nf("clue: unique r1c1-r1c2 if connected", context));
  const rewrite = form.rewrites.find(r => r.rule === "house-implied")!;
  expect(rewrite.sources.some(s => s.instance === "clue")).toBe(true);
  const house = form.sources.find(s => s.primitive.startsWith("house:"))!;
  expect(house.sources.some(s => s.instance === "clue")).toBe(true);
  expect(form.rewrites.every(r => r.sources.some(s => s.instance === "clue"))).toBe(true);
});

test("duplicate clauses and full-domain identities do not consume expansion coverage", () => {
  const context = board(32, Array.from({ length: 64 }, (_, i) => i));
  const clause = `allowed-digits ${context.activeCells.join("-")} digits ${JSON.stringify(context.alphabet)}`;
  const original = nf(clause, context);
  const repeated = nf(Array.from({ length: 32 }, (_, i) => `copy${i}: ${clause}`).join("\n"), context);
  complete(original); complete(repeated);
  expect(compare(original, repeated).status).toBe("equivalent");
  expect(repeated.normalForm!.coverage).toHaveLength(32);
  const restricted = clause.replace(JSON.stringify(context.alphabet), JSON.stringify(context.alphabet.slice(0, -1)));
  expect(compare(nf(restricted, context), nf(Array.from({ length: 32 }, (_, i) => `copy${i}: ${restricted}`).join("\n"), context)).status).toBe("equivalent");
});

test("reference checks ignore prose and nested examples and read actual fence boundaries", () => {
  const original = file("unique r1c1-r1c2");
  for (const example of ['````markdown\n```rules\nthis-is-prose\n```\n````\n', '~~~markdown\n```rules\nthis-is-prose\n```\n~~~\n']) {
    expect(compare(normalise(original, board()), normalise({ ...original, text: original.text + example }, board())).status).toBe("equivalent");
  }
  for (const fence of ["````", "~~~"]) {
    complete(normalise({ ...original, text: original.text.replaceAll("```", fence) }, board()));
  }
  expect(nf("this-is-prose").status).toBe("invalid");
});

test("seeded random permutations and duplications of declaration lines preserve equivalence", () => {
  let seed = 0x5eed;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 2 ** 32; };
  const lines = ['a: unique r1c1-r1c2', 'b: not clone r2c1-r2c2', 'c: allowed-digits r3c1 digits [1,3]', 'd: unique r1c1-r1c2 if connected', 'e: parity-cells r4c1 parity "odd"', 'f: pair r1c1-r2c1 less', 'g: kropki r3c1-r3c2 black', 'h: outside r1c1-r1c1-r1c2 digits [1,1]', 'i: quadruple r2c1-r2c2 digits [2]', 'j: negative relations [{"op":"sum","value":5}] except [["r1c1","r1c2"]] direction "horizontal"'];
  const original = nf(lines.join("\n")); complete(original);
  for (let trial = 0; trial < 100; trial++) {
    const shuffled = lines.flatMap(line => Array.from({ length: 1 + Math.floor(random() * 4) }, () => line));
    for (let i = shuffled.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; }
    expect(compare(original, nf(shuffled.join("\n"))).status).toBe("equivalent");
  }
  equivalent("unique r1c1-r1c2", "unique r1c1-r1c2\nunique r1c1-r1c2");
});

test("merged readers agree on dotted and quoted instance labels and negation", () => {
  for (const label of ['"clue.1"', '"clue one"']) {
    const source = `${label}: not not unique r1c1-r1c2`;
    expect(compare(nf(source), nf("unique r1c1-r1c2")).status).toBe("equivalent");
    expect(complete(nf(source)).coverage[0].source.instance).toBe(JSON.parse(label));
  }
});

test("shared declaration boundaries retain nested slice B parameters across fences and labels", () => {
  const rule = 'negative relations [{"op": "sum", "value": 5}] except [["r1c1", "r1c2"]] within [["r1c1", "r1c2", "r2c1"]]';
  const expected = nf(rule);
  complete(expected);
  for (const label of ['"clue.1"', '\"clue one\"']) {
    for (const fence of ["```", "~~~~"]) {
      const input = file(`${label}: not not ${rule}`);
      const text = input.text.replaceAll("```", fence).replaceAll("\n", "\r\n");
      const result = normalise({ ...input, text }, board());
      expect(compare(expected, result).status).toBe("equivalent");
      expect(complete(result).coverage[0].source.instance).toBe(JSON.parse(label));
    }
  }
});

test("in-file custom fragment declarations retain semantic coverage, including without labels", async () => {
  const template = await readFile("tests/valid/cases/missing-section.rules.md", "utf8");
  for (const prefix of ["weighted_1: ", "", '"weighted triple": ']) {
    for (const fence of ["```", "~~~~"]) {
      const text = template.replace("weighted_1: ", prefix).replaceAll("```", fence).replaceAll("\n", "\r\n");
      const result = normalise({ file: "custom.rules.md", text }, board(9));
      expect(result.issues).toEqual([]);
      expect(result.status).toBe("partial");
      const coverage = result.normalForm!.coverage.filter(c => c.kind === "#weighted-triple");
      expect(coverage).toHaveLength(1);
      expect(coverage[0].status).toBe("unsupported");
      expect(coverage[0].source.span.start.line).toBe(13);
    }
  }
});

test("both readers reject unclosed rules and custom definition fences", async () => {
  const unclosedRules = file("unique r1c1-r1c2");
  expect(normalise({ ...unclosedRules, text: unclosedRules.text.replace(/```\n$/, "") }, board()).status).toBe("invalid");
  const custom = await readFile("tests/valid/cases/missing-section.rules.md", "utf8");
  const result = normalise({ file: "custom.rules.md", text: custom.replace(/```\n$/, "") }, board(9));
  expect(result.status).toBe("invalid");
  expect(result.issues.some(issue => issue.code === "E_CUSTOM_DEFINITION")).toBe(true);
});

test("pair keywords have exact tables on zero, signed and nonstandard alphabets", () => {
  const alphabet = [-6,-3,-1,0,1,2,3,5,6,9];
  const context = board(4, alphabet);
  const cases: [string, (a:number,b:number)=>boolean][] = [
    ['difference 3', (a,b) => Math.abs(a-b) === 3],
    ['at-least 4', (a,b) => Math.abs(a-b) >= 4],
    ['ratio 2', (a,b) => 2*a === b || 2*b === a],
    ['ratio 0', (a,b) => a === 0 || b === 0],
    ['sum 5', (a,b) => a+b === 5],
    ['less', (a,b) => a < b],
    ['multiple', (a,b) => a === 0 && b === 0 || Math.min(a,b) !== 0 && Number.isInteger(Math.max(a,b)/Math.min(a,b))],
    ['shift', (a,b) => a !== 5 && b !== 5 && ((Math.abs(a%2) === Math.abs(b%2)) !== ((a>5) === (b>5)))],
  ];
  for (const [keyword, predicate] of cases) {
    const form = complete(nf(`pair r1c2-r1c1 ${keyword}`,context));
    let yes = 0, no = 0;
    for (const a of alphabet) for (const b of alphabet) {
      expect(evaluate(form.solution,{r1c2:a,r1c1:b})).toBe(predicate(a,b));
      if (predicate(a,b)) yes++; else no++;
    }
    expect(yes).toBeGreaterThan(0); expect(no).toBeGreaterThan(0);
    if (keyword !== 'less') equivalent(`pair r1c2-r1c1 ${keyword}`,`pair r1c1-r1c2 ${keyword}`,context);
    different(`pair r1c2-r1c1 ${keyword}`, 'clone r1c1-r1c2',context);
  }
  different('pair r1c1-r1c2 less','pair r1c2-r1c1 less',context);
  for (const [colour,keyword] of [['white','difference 1'],['black','ratio 2']]) {
    equivalent(`kropki r1c1-r1c2 ${colour}`,`pair r1c2-r1c1 ${keyword}`,context);
    equivalent(`kropki r1c1-r1c2 colour "${colour}"`,`kropki r1c1-r1c2 ${colour}`,context);
  }
  different('kropki r1c1-r1c2 white','kropki r1c1-r1c2 black',context);
  const black = complete(nf('kropki r1c1-r1c2 black',context));
  expect(evaluate(black.solution,{r1c1:0,r1c2:0})).toBe(true);
  expect(evaluate(black.solution,{r1c1:0,r1c2:1})).toBe(false);
  // Rounded Number addition would incorrectly accept MAX + 1 = MAX for this relation.
  const extreme = board(2,[Number.MAX_SAFE_INTEGER,1,0]);
  const exactSum = complete(nf(`pair r1c1-r1c2 sum ${Number.MAX_SAFE_INTEGER}`,extreme));
  expect(evaluate(exactSum.solution,{r1c1:Number.MAX_SAFE_INTEGER,r1c2:1})).toBe(false);
  expect(evaluate(exactSum.solution,{r1c1:Number.MAX_SAFE_INTEGER,r1c2:0})).toBe(true);
});

test("effective pair values stay uncovered when modifiers or custom definitions are unresolved", () => {
  for (const rule of ['pair r1c1-r1c2 sum 4','kropki r1c1-r1c2 black']) {
    const result = nf(`value-modifier name "doubler" factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [["r1c1"]] distinct false\n${rule}`);
    expect(result.status).toBe('partial');
    expect(result.normalForm!.coverage.find(c => c.kind === rule.split(' ')[0])!.status).toBe('unsupported');
    expect(compare(result,result).status).toBe('unresolved');
  }
});

test("multiplicity lowering sorts digit lists and preserves outside occurrences", () => {
  equivalent('quadruple r1c2-r1c1-r1c1 digits [1,2,1]', 'quadruple r1c1-r1c2 digits [2,1,1]');
  equivalent('outside r1c2-r1c1-r1c1 digits [2,1,1]', 'outside r1c1-r1c2-r1c1 digits [1,1,2]');
  equivalent('quadruple r1c1-r1c2 digits [1,2]', 'outside r1c2-r1c1 digits [2,1]');
  different('outside r1c1-r1c1 digits [1,1]', 'quadruple r1c1-r1c1 digits [1,1]');
  different('quadruple r1c1-r1c2 digits [1]', 'quadruple r1c1-r1c2 digits [1,1]');
  for (const kind of ['outside','quadruple']) {
    const f = complete(nf(`${kind} r1c1-r1c2-r2c1 digits [1,1]`));
    expect(evaluate(f.solution,{r1c1:1,r1c2:1,r2c1:2})).toBe(true);
    expect(evaluate(f.solution,{r1c1:1,r1c2:2,r2c1:2})).toBe(false);
    expect(nf(`${kind} r1c1 digits []`).status).toBe('invalid');
    equivalent(`not ${kind} r1c1 digits [1,1]`,'unique r1c1');
  }
});

const negative = (op: string, value?: number, except: string[][] = [], suffix = '') => `negative relations ${JSON.stringify([{op,...(value === undefined ? {} : {value})}])} except ${JSON.stringify(except.length ? except : [['r1c1','r1c1']])} ${suffix}`.trim();
test("negative relations have independent XV and Kropki exceptions and exact scopes", () => {
  const context: BoardContext = {rows:2,cols:2,alphabet:[0,1,2,3,4,5,10],activeCells:cells(2)};
  const scope = 'within [["r1c1","r1c2"]]';
  for (const [op,value] of [['difference',1],['ratio',2],['sum',5],['sum',10]] as const) {
    equivalent(negative(op,value,[],scope),`not pair r1c1-r1c2 ${op} ${value}`,context);
    equivalent(negative(op,value,[['r1c2','r1c1']],scope),'unique r1c1',context);
    different(negative(op,value,[],scope),negative(op,value,[['r1c1','r1c2']],scope),context);
  }
  const rules = `white: ${negative('difference',1,[['r1c1','r1c2']],scope)}\nblack: ${negative('ratio',2,[],scope)}`;
  const form = complete(nf(rules,context));
  expect(evaluate(form.solution,{r1c1:1,r1c2:2})).toBe(false); // white exception does not exempt black
  expect(evaluate(form.solution,{r1c1:2,r1c2:3})).toBe(true);
  const xv = `v: ${negative('sum',5,[['r1c1','r1c2']],scope)}\nx: ${negative('sum',10,[],scope)}`;
  const xf = complete(nf(xv,context));
  expect(evaluate(xf.solution,{r1c1:5,r1c2:5})).toBe(false);
  expect(evaluate(xf.solution,{r1c1:2,r1c2:3})).toBe(true);
  different(rules,`white: ${negative('difference',1,[['r1c1','r1c2']],scope)}\nblack: ${negative('ratio',2,[['r1c1','r1c2']],scope)}`,context);
  different(negative('sum',5,[],'direction "horizontal"'),negative('sum',5,[],'direction "vertical"'),context);
  equivalent(negative('sum',5,[],'within []'),'unique r1c1',context);
  different(negative('sum',5),negative('sum',5,[],'within []'),context);
  equivalent(negative('sum',5,[],'direction "horizontal"'), 'a: not pair r1c1-r1c2 sum 5\nb: not pair r2c1-r2c2 sum 5',context);
  equivalent(negative('sum',5,[],'direction "vertical"'), 'a: not pair r1c1-r2c1 sum 5\nb: not pair r1c2-r2c2 sum 5',context);
  equivalent(`not not ${negative('sum',5)}`,negative('sum',5),context);
  expect(nf(`${negative('sum',5)} if distinct`,context).status).toBe('invalid');
  const wide: BoardContext = {rows:1,cols:10,alphabet:[0,1],activeCells:['r1c9','r1c10']};
  equivalent(negative('less',undefined,[['r1c9','r1c9']]), 'not pair r1c9-r1c10 less',wide);
});

test("new parameter types are checked before negation and false conditions", () => {
  for (const rule of [
    'pair r1c1-r1c2 __proto__ {}','pair r1c1-r1c2 ratio "2"','pair r1c1-r1c2 sum null','pair r1c1-r1c2 difference 1.5',
    'pair r1c1-r1c2 relation {"op":"less","value":1}', 'pair r1c1 less',
    'kropki r1c1-r1c2 colour ["white"]', 'kropki r1c1-r1c2 colour null',
    'quadruple r1c1 digits [true]','outside r1c1 digits [5]',
    'negative relations [{"op":"sum"}] except [["r1c1","r1c1"]]','negative relations [{"op":"less","extra":1}] except [["r1c1","r1c1"]]',
    'negative relations [] except null','negative relations [] except [["r1c1"]]',
    'negative relations [] except [["r1c1","r1c1"]] within null', 'negative relations [] except [["r1c1","r1c1"]] direction ["vertical"]',
    'negative relations [] except [["r1c1","r9c9"]]',
  ]) expect(nf(`not ${rule}`).status).toBe('invalid');
  expect(nf('not pair r1c1-r3c3 ratio null if connected').status).toBe('invalid');
});

test("fog start cells, links and link members are sets with retained provenance", () => {
  const a = nf('unique r1c1',board(),'fog: {initiallyLit: [r1c2,r1c1,r1c1], links: [{trigger: [r2c1,r1c1,r2c1], lights: [r2c2,r1c2,r2c2]}, {trigger: [r1c1,r2c1], lights: [r1c2,r2c2]}]}\n');
  const b = nf('unique r1c1',board(),'fog: {links: [{lights: [r1c2,r2c2], trigger: [r1c1,r2c1]}], initiallyLit: [r1c1,r1c2]}\n');
  complete(a); complete(b);
  expect(compare(a,b).status).toBe('equivalent');
  expect(a.normalForm!.sources.find(s => s.primitive.startsWith('play:'))!.sources[0].kind).toBe('header:fog');
  expect(a.normalForm!.rewrites.find(r => r.rule === 'fog-sets')!.sources[0].kind).toBe('header:fog');
  for (const entry of [{}, {r1c1:1}, {r1c1:1,r2c1:2}, {r1c1:1,r2c1:3}]) expect(visibleCells(a.normalForm!,entry,{r1c1:1,r2c1:2})).toEqual(visibleCells(b.normalForm!,entry,{r1c1:1,r2c1:2}));
  for (const header of ['fog: {initiallyLit: [r1c1]}\n','fog: {initiallyLit: [r1c1], links: []}\n','fog: {initiallyLit: [r1c2], links: []}\n']) {
    const changed = nf('unique r1c1',board(),header);
    expect(compare(a,changed).covered).toBe('structural-difference');
    expect(compare(a,changed).differences.some(d => d.primitive === 'Play')).toBe(true);
  }
  const absent = nf('unique r1c1',board(),'fog: {}\n'), empty = nf('unique r1c1',board(),'fog: {links: []}\n');
  expect(compare(absent,empty).covered).toBe('structural-difference');
  expect(compare(absent,nf('unique r1c1')).covered).toBe('structural-difference');
  const fromClear = compare(nf('unique r1c1'),absent);
  expect(fromClear.differences.find(d => d.side === 'right' && d.primitive === 'Play')!.sources[0].kind).toBe('header:fog');
  expect(compare(nf('arrow r1c1-r1c2 bulb ["r1c3"]',board(),'fog: {}\n'),nf('arrow r1c1-r1c2 bulb ["r1c3"]',board(),'fog: {}\n')).status).toBe('unresolved');
  expect(compare(nf('unique r1c1',board(),'fog: {initiallyLit: [0,1]}\n'),nf('unique r1c1',board(),'fog: {initiallyLit: [r1c1,r1c2]}\n')).status).toBe('equivalent');
});

test("fog reveals use current correct entries, retract on erase and do not chain from light", () => {
  const f = complete(nf('unique r1c1',board(),'fog: {initiallyLit: [r1c1], links: [{trigger: [r1c2,r2c1], lights: [r2c2]}, {trigger: [r2c2], lights: [r4c4]}]}\n'));
  const answer = {r1c2:2,r2c1:3,r2c2:4} as const;
  expect(visibleCells(f,{r1c2:2,r2c1:3},answer)).toEqual(['r1c1','r2c2']);
  expect(visibleCells(f,{r1c2:2,r2c1:3,r2c2:4},answer)).toEqual(['r1c1','r2c2','r4c4']);
  expect(visibleCells(f,{r1c2:2},answer)).toEqual(['r1c1']);
  expect(visibleCells(f,{r1c2:2,r2c1:4},answer)).toEqual(['r1c1']);
  expect(visibleCells(f,{r1c2:2,r2c1:3})).toEqual(['r1c1','r2c2']);
  const context = {...board(),givens:[{cell:'r1c1' as Cell,digit:1}]};
  const near = complete(nf('unique r1c1',context,'fog: {}\n'));
  expect(visibleCells(near,{}, {r1c1:1})).toEqual([]);
  expect(visibleCells(near,{r1c1:1}, {r1c1:1})).toEqual(['r1c1']);
  expect(visibleCells(near,{r1c2:2}, {r1c2:2})).toEqual(['r1c1','r1c2','r1c3','r2c1','r2c2','r2c3']);
  expect(visibleCells(near,{}, {r1c2:2})).toEqual([]);
  expect(visibleCells(near,{r1c2:2})).toEqual(['r1c1','r1c2','r1c3','r2c1','r2c2','r2c3']);
  const empty = complete(nf('unique r1c1',context,'fog: {links: []}\n'));
  expect(visibleCells(empty,{r1c2:2},{r1c2:2})).toEqual([]);
});

test("fog rejects inactive lights, empty triggers and malformed setup", () => {
  for (const fog of ['null','[]','{links: null}','{initiallyLit: null}','{other: []}',
    '{links: [{trigger: [], lights: []}]}','{links: [{trigger: [bad], lights: []}]}',
    '{links: [{trigger: [r1c1], lights: [r9c9]}]}','{initiallyLit: [99]}',
    '{links: [{trigger: [r1c1], lights: [], other: true}]}']) expect(nf('unique r1c1',board(),`fog: ${fog}\n`).status).toBe('invalid');
  expect(nf('unique r1c1',{...board(),activeCells:cells(4).filter(c => c !== 'r1c2')},'fog: {links: [{trigger: [r1c1], lights: [r1c2]}]}\n').status).toBe('invalid');
});

test("slice B canonical rewrites preserve all small assignments and every source", () => {
  const context: BoardContext = {rows:1,cols:3,alphabet:[0,1,2],activeCells:['r1c1','r1c2','r1c3']};
  const rules = ['a: pair r1c2-r1c1 difference 1','n: not pair r1c2-r1c1 difference 1','b: kropki r1c3-r1c2 black','c: outside r1c3-r1c1-r1c3 digits [1,1]', 'd: quadruple r1c3-r1c2-r1c2 digits [0,0,0]', 'e: negative relations [{"op":"sum","value":2}] except [["r1c2","r1c3"]]'];
  for (const rule of rules) {
    const form = complete(nf(rule,context));
    const state: CanonicalState = {board:form.board,houses:new Map(),links:new Map(),rewrites:[]};
    expect(canonicalise(form.solution,state,[])).toEqual(form.solution);
    for (const rewrite of form.rewrites) {
      expect(rewrite.sources.length).toBeGreaterThan(0);
      const before = JSON.parse(rewrite.before) as Formula, after = JSON.parse(rewrite.after) as Formula;
      for (const a of context.alphabet) for (const b of context.alphabet) for (const c of context.alphabet) expect(evaluate(before,{r1c1:a,r1c2:b,r1c3:c})).toBe(evaluate(after,{r1c1:a,r1c2:b,r1c3:c}));
    }
    const duplicate = complete(nf(rule+'\n'+rule.replace(/^\w+:/,'copy:'),context));
    expect(compare({status:'complete',issues:[],normalForm:form},{status:'complete',issues:[],normalForm:duplicate}).status).toBe('equivalent');
    expect(duplicate.sources.find(s => s.primitive === JSON.stringify(duplicate.solution))!.sources).toHaveLength(2);
  }
});

test("negative relation sets split and deduplicate without merging their negation scope", () => {
  const context: BoardContext = {rows:1,cols:3,alphabet:[0,1,2,3],activeCells:['r1c1','r1c2','r1c3']};
  const combined = 'negative relations [{"op":"difference","value":1},{"op":"ratio","value":2},{"op":"difference","value":1}] except [["r1c1","r1c1"]]';
  equivalent(combined,`a: ${negative('ratio',2)}\nb: ${negative('difference',1)}`,context);
  different(`not ${combined}`,`a: not ${negative('ratio',2)}\nb: not ${negative('difference',1)}`,context);
  const neg = complete(nf(`not ${combined}`,context));
  expect(evaluate(neg.solution,{r1c1:1,r1c2:2,r1c3:3})).toBe(true);
  expect(evaluate(neg.solution,{r1c1:3,r1c2:0,r1c3:3})).toBe(false);
  const p = complete(nf(negative('difference',1),context));
  expect(evaluate(p.solution,{r1c1:3,r1c2:0,r1c3:3})).toBe(true);
  expect(evaluate(p.solution,{r1c1:3,r1c2:2,r1c3:3})).toBe(false);
});

test("fog link order is irrelevant while trigger and light support remain distinct", () => {
  const header = (links: unknown[]) => `fog: ${JSON.stringify({initiallyLit:[],links})}\n`;
  const links = [{trigger:['r1c1'],lights:['r2c1']},{trigger:['r1c2','r1c3'],lights:['r2c2','r2c3']}];
  const a = nf('unique r1c1',board(),header(links));
  for (let trial=0; trial<10; trial++) {
    const permuted = [...links].reverse().map(l => ({trigger:[...l.trigger].reverse(), lights:[...l.lights].reverse()}));
    expect(compare(a,nf('unique r1c1',board(),header([...permuted,...links]))).status).toBe('equivalent');
  }
  for (const changed of [
    [{trigger:['r1c2'],lights:['r2c1']},links[1]],
    [{trigger:['r1c1'],lights:['r2c2']},links[1]],
    [links[0]],
  ]) expect(compare(a,nf('unique r1c1',board(),header(changed))).covered).toBe('structural-difference');
  const form = complete(a);
  const answer = {r1c1:1,r1c2:2,r1c3:3};
  expect(visibleCells(form,{r1c1:1},answer)).toEqual(['r2c1']);
  expect(visibleCells(form,{r1c1:2},answer)).toEqual([]);
});


test("fog correctness distinguishes absent answers from uncovered answer cells and respects givens", () => {
  const context = {...board(2), givens: [{cell: 'r1c1' as Cell, digit: 1}]};
  const form = complete(nf('unique r1c1', context, 'fog: {}\n'));
  expect(visibleCells(form, {r1c2: 2})).toEqual(cells(2));
  expect(visibleCells(form, {r1c1: 1})).toEqual(['r1c1']);
  expect(visibleCells(form, {r1c1: 2})).toEqual([]);
  expect(visibleCells(form, {r1c1: 2}, {r1c1: 2})).toEqual([]);
  expect(visibleCells(form, {r1c2: 2}, {})).toEqual([]);
  expect(visibleCells(form, {r1c2: 2}, {r1c1: 1})).toEqual([]);
  expect(visibleCells(form, {r1c2: 2}, {r1c2: 1})).toEqual([]);
  expect(visibleCells(form, {r1c2: 2}, {r1c2: 2})).toEqual(cells(2));
});

test("off-board and inactive fog triggers are valid and never correct", () => {
  const context = {...board(2), activeCells: cells(2).filter(c => c !== 'r2c2')};
  const empty = nf('unique r1c1', context, 'fog: {links: []}\n');
  for (const trigger of ['r3c1', 'r2c2', 'r0c1', 'r-1c1', 4, -1]) {
    const result = nf('unique r1c1', context, `fog: ${JSON.stringify({links: [{trigger: [trigger], lights: ['r1c1']}]})}\n`);
    const form = complete(result);
    expect(compare(result, empty).status).toBe('equivalent');
    expect(visibleCells(form, {r3c1: 1, r2c2: 1, r0c1: 1, 'r-1c1': 1}, {r3c1: 1, r2c2: 1, r0c1: 1, 'r-1c1': 1})).toEqual([]);
    expect(visibleCells(form, {r3c1: 1, r2c2: 1, r0c1: 1, 'r-1c1': 1})).toEqual([]);
  }
});

test("multiplicity weights reduce canonically to primitive counts and singleton membership", () => {
  equivalent('outside r1c1-r1c1 digits [1,1]', 'outside r1c1 digits [1]');
  equivalent('outside r1c1 digits [1]', 'allowed-digits r1c1 digits [1]');
  equivalent('outside r1c1-r1c1-r1c2-r1c2 digits [1,1,1]', 'outside r1c1-r1c2 digits [1,1]');
  equivalent('outside r1c1-r1c1-r1c2 digits [1]', 'outside r1c1-r1c2 digits [1]');
  equivalent('outside r1c1-r1c1-r1c2-r1c2-r1c2-r1c2 digits [1,1,1]', 'outside r1c1-r1c2-r1c2 digits [1,1]');
  const base = complete(nf('unique r1c1', board(2)));
  for (let a = 1; a <= 4; a++) for (let b = 0; b <= 4; b++) for (let count = 0; count <= a+b+1; count++) {
    const raw: Formula = {op: 'CountAtLeast', channel: 'D', cells: [...Array<Cell>(a).fill('r1c1'), ...Array<Cell>(b).fill('r1c2')], digit: 1, count};
    const state: CanonicalState = {board: base.board, houses: new Map(), links: new Map(), rewrites: []};
    const reduced = canonicalise(raw, state, []);
    expect(canonicalise(reduced, state, [])).toEqual(reduced);
    for (const x of [1,2]) for (const y of [1,2]) expect(evaluate(reduced, {r1c1:x,r1c2:y})).toBe(evaluate(raw, {r1c1:x,r1c2:y}));
  }
});

test("splitting fog links with identical trigger sets preserves canonical play and visibility", () => {
  const header = (links: unknown[]) => `fog: ${JSON.stringify({links})}\n`;
  const joined = nf('unique r1c1', board(2), header([{trigger:['r1c2','r1c1'], lights:['r2c1','r2c2']}]));
  const split = nf('unique r1c1', board(2), header([{trigger:['r1c1','r1c2','r1c1'], lights:['r2c1']}, {trigger:['r1c2','r1c1'], lights:['r2c2','r2c1']}]));
  expect(compare(joined, split).status).toBe('equivalent');
  const a = complete(joined), b = complete(split);
  for (const answer of [undefined, {}, {r1c1:1}, {r1c1:1,r1c2:2}])
    for (const x of [undefined,1,2]) for (const y of [undefined,1,2]) {
      const entries = {r1c1:x,r1c2:y};
      expect(visibleCells(a,entries,answer)).toEqual(visibleCells(b,entries,answer));
    }
});

test("duplicate negative relations are removed before expansion is charged", () => {
  const context: BoardContext = {rows:1, cols:64, alphabet:Array.from({length:64},(_,i)=>i), activeCells:cells(1,64)};
  const single = nf(negative('difference',1), context);
  const repeated = nf('negative relations [{"op":"difference","value":1},{"value":1,"op":"difference"},{"op":"difference","value":1},{"op":"difference","value":1}] except [["r1c1","r1c1"]]', context);
  complete(single); complete(repeated);
  expect(compare(single,repeated).status).toBe('equivalent');
});

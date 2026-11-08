import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3"];
const [a, b, c, d, e, f] = cells;
const board: BoardContext = { rows: 2, cols: 3, activeCells: cells, alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9], regions: [[a, b, d, e], [c, f]] };
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const file = (rules: string) => ({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` });
const nf = (rules: string) => normalise(file(rules), board);
const edgesOf = (list: [Cell, Cell][]) => JSON.stringify(list);
function form(rules: string) { const n = nf(rules); expect(n.issues).toEqual([]); expect(n.status).toBe("complete"); return n.normalForm!; }
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => expect(compare(nf(x), nf(y)).covered).toBe("structural-difference");

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
  }
}

// A branched network (a junction at b) plus a separate pair, and a path of three.
const network: [Cell, Cell][] = [[a, b], [b, c], [b, e]];
const kinds: [string, string][] = [
  ["whispers", "gap 5"], ["whisper", "gap 4"], ["close-whispers", "gap 2"],
  ["parity", ""], ["primality", ""], ["shifter-line", ""],
];
// Nonstandard boards state the loop choice explicitly.
const loopless = (kind: string) => ["whispers", "whisper", "parity", "primality"].includes(kind) ? " loop false" : "";
const rule = (kind: string, params: string, list: [Cell, Cell][]) => `${kind} line [] edges ${edgesOf(list)} ${params}${loopless(kind)}`.trim();

test("explicit edges normalise with nothing uncovered and split declarations compare equal", () => {
  for (const [kind, params] of kinds) {
    form(rule(kind, params, network));
    eq(rule(kind, params, network), `x: ${rule(kind, params, [[a, b], [b, c]])}\ny: ${rule(kind, params, [[b, e]])}`);
    eq(rule(kind, params, network), rule(kind, params, [[e, b], [c, b], [b, a], [a, b]]));
  }
});

test("a different or extra edge compares as different", () => {
  for (const [kind, params] of kinds) {
    differs(rule(kind, params, network), rule(kind, params, [[a, b], [b, c], [c, f]]));
    differs(rule(kind, params, network), rule(kind, params, [...network, [e, f]]));
    differs(rule(kind, params, network), rule(kind, params, [[a, b], [b, c]]));
  }
});

test("a path line and its edge list agree", () => {
  for (const [kind, params] of kinds) eq(`${kind} ${a}-${b}-${c} ${params}${loopless(kind)}`, rule(kind, params, [[a, b], [b, c]]));
});

/** Seeded generator for the sampled assignments; the seed is part of every test name so a failure can be replayed. */
const seed = 20260301;
const generator = (start: number) => () => { start = (start + 0x6D2B79F5) | 0; let t = Math.imul(start ^ (start >>> 15), 1 | start); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const sampleSize = 100;
{
  const [p, q, r3, s4]: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
  const small: BoardContext = { rows: 1, cols: 4, activeCells: [p, q, r3, s4], alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9], regions: [[p, q], [r3, s4]] };
  const shapes: [string, [Cell, Cell][], number[]][] = [
    ["branched", [[p, q], [q, r3], [q, s4]], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    ["cycle without loop, duplicate and reversed edges", [[p, q], [q, r3], [r3, p], [q, p], [r3, q], [p, q], [r3, s4]], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    ["shifted alphabet", [[p, q], [q, r3], [r3, s4]], [0, 2, 3, 5, 6, 7, 10, 11, 4]],
  ];
  for (const [shape, list, symbols] of shapes) for (const [kind, params] of kinds) test(`formula and public evaluator agree on a seeded sample (seed ${seed}): ${shape}, ${kind}`, () => {
    const text = rule(kind, params, list);
    const small2 = { ...small, alphabet: symbols };
    const n = normalise(file(text), small2);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [${symbols.join(",")}], regions: [[r1c1, r1c2], [r1c3, r1c4]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rl = compiled.value!.rules[0];
    // The lowered formula is cheap, so it is counted over every assignment; the page formula is slow, so it judges a seeded sample
    // that holds the satisfying assignments and as many breaking ones.
    const random = generator(seed);
    const holding: Record<string, number>[] = [], breaking: Record<string, number>[] = [];
    for (const w of symbols) for (const x of symbols) for (const y of symbols) for (const z of symbols) {
      const digits = { [p]: w, [q]: x, [r3]: y, [s4]: z };
      (holds(n.normalForm!.solution, digits) ? holding : breaking).push(digits);
    }
    // A triangle has no solution for the parity and whisper tests, so only agreement is required there.
    if (!shape.startsWith("cycle")) expect([shape, kind, holding.length > 0]).toEqual([shape, kind, true]);
    expect(breaking.length).toBeGreaterThan(0);
    const pick = (all: Record<string, number>[]) => Array.from({ length: Math.min(all.length, sampleSize / 2) }, () => all[Math.floor(random() * all.length)]);
    for (const digits of [...pick(holding), ...pick(breaking)]) {
      const expected = evaluate({ ...rl, finite: undefined }, { digits, values: digits }).status === "holds";
      expect([text, JSON.stringify(digits), seed, holds(n.normalForm!.solution, digits)]).toEqual([text, JSON.stringify(digits), seed, expected]);
    }
  });
}

test("malformed or unlowerable edge lists never lower", () => {
  for (const [kind, params] of kinds) {
    expect(nf(rule(kind, params, [[a, b], [d, e]])).status).not.toBe("complete");
    expect(nf(rule(kind, params, [[a, a]])).status).not.toBe("complete");
    expect(nf(rule(kind, params, [])).status).not.toBe("complete");
    expect(nf(`${kind} line [] edges [["r1c1","r9c9"]] ${params}${loopless(kind)}`).status).not.toBe("complete");
    expect(nf(`${rule(kind, params, network)} if distinct`).status).not.toBe("complete");
  }
});

function reasons(rules: string, context = board): string[] {
  const n = normalise(file(rules), context);
  expect(n.issues).toEqual([]);
  expect(n.status).toBe("partial");
  return n.normalForm!.coverage.filter(x => x.status === "unsupported").map(x => (x as { reason: string }).reason);
}
const netText = edgesOf(network);

test("kinds that read windows, sets or orderings keep edges uncovered, with the edges reason", () => {
  const valid = [
    `modular line [] edges ${netText} loop false modulus 3 length 3`,
    `entropic line r1c1-r1c2 edges ${netText} loop false`,
    `summit line r1c1-r1c2 edges ${netText} loop false`,
    `renban line r1c1-r1c2 edges ${netText}`,
    `nabner line r1c1-r1c2 edges ${netText} distinct false`,
    `bremban line r1c1-r1c2 edges ${netText}`,
  ];
  for (const text of valid) {
    const kind = text.split(" ")[0];
    expect(reasons(text)).toEqual([`The edges parameter of ${kind} is not lowered; the whole instance remains uncovered.`]);
  }
});

test("kinds with no edges parameter reject it as invalid", () => {
  for (const kind of ["thermo", "slow-thermo"]) {
    const n = nf(`${kind} line r1c1-r1c2 edges ${netText}`);
    expect(n.status).toBe("invalid");
    expect(n.issues.map(x => x.message)).toEqual(["Unknown parameter edges; use the parameters on the rule page."]);
  }
});

test("unsatisfiable or unreadable shapes on lowered kinds stay uncovered with their reason", () => {
  expect(reasons(`whispers line r1c1-r1c2 edges ${netText} gap 5 loop false if distinct`))
    .toEqual(["Conditions on a network are not lowered; the whole instance remains uncovered."]);
  expect(reasons(`whispers line [] edges ${netText} gap 5 loop true`))
    .toEqual(["A closed network is not lowered; the whole instance remains uncovered."]);
  expect(reasons(`whispers line r2c3-r2c2 edges ${netText} gap 5 loop false`))
    .toEqual(["Every line cell must lie on the network; the whole instance remains uncovered."]);
  expect(reasons(`whispers line [] edges [] gap 5 loop false`))
    .toEqual(["Edges must name two different cells each; the whole instance remains uncovered."]);
  expect(reasons(`whispers line [] edges ${edgesOf([[a, a]])} gap 5 loop false`))
    .toEqual(["Edges must name two different cells each; the whole instance remains uncovered."]);
  expect(reasons(`whispers line [] edges ${edgesOf([[a, b], [d, e]])} gap 5 loop false`))
    .toEqual(["Edges must form one connected network; the whole instance remains uncovered."]);
  const noRegions = { ...board, regions: [] };
  expect(reasons(`shifter-line line [] edges ${edgesOf([[a, b]])}`, noRegions))
    .toEqual(["Supply primary board regions for every path occurrence."]);
});

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

test("formula and public evaluator agree on every assignment", () => {
  const [p, q, r3, s4]: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
  const small: BoardContext = { rows: 1, cols: 4, activeCells: [p, q, r3, s4], alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9], regions: [[p, q], [r3, s4]] };
  const list: [Cell, Cell][] = [[p, q], [q, r3], [q, s4]];
  for (const [kind, params] of kinds) {
    const text = rule(kind, params, list);
    const n = normalise(file(text), small);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 4, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r1c2], [r1c3, r1c4]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rl = compiled.value!.rules[0];
    let checked = 0, satisfied = 0;
    for (let w = 1; w <= 9; w++) for (let x = 1; x <= 9; x++) for (let y = 1; y <= 9; y++) for (let z = 1; z <= 9; z++) {
      const digits = { [p]: w, [q]: x, [r3]: y, [s4]: z };
      const expected = evaluate(rl, { digits }).status === "holds";
      expect(holds(n.normalForm!.solution, digits)).toBe(expected);
      checked++; if (expected) satisfied++;
    }
    expect(checked).toBe(6561);
    expect(satisfied).toBeGreaterThan(0);
    expect(satisfied).toBeLessThan(checked);
  }
});

test("malformed or unlowerable edge lists never lower", () => {
  for (const [kind, params] of kinds) {
    expect(nf(rule(kind, params, [[a, b], [d, e]])).status).not.toBe("complete");
    expect(nf(rule(kind, params, [[a, a]])).status).not.toBe("complete");
    expect(nf(rule(kind, params, [])).status).not.toBe("complete");
    expect(nf(`${kind} line [] edges [["r1c1","r9c9"]] ${params}${loopless(kind)}`).status).not.toBe("complete");
    expect(nf(`${rule(kind, params, network)} if distinct`).status).not.toBe("complete");
  }
});

test("kinds that read windows, sets or orderings keep edges uncovered", () => {
  for (const kind of ["modular", "entropic", "summit", "renban", "nabner", "bremban", "thermo", "slow-thermo"]) {
    const n = nf(`${kind} line [] edges ${edgesOf(network)}`);
    expect(n.status).not.toBe("complete");
  }
});

import { expect, test } from "bun:test";
import { compare, compileCase, evaluate, normalise, type BoardContext, type Cell } from "../../src";

const kinds = [
  { kind: "perfect-square-cages", totals: "[4,9,16]", other: "[4,9,25]", holds: [4, 5], breaks: [4, 6] },
  { kind: "perfect-cube-cages", totals: "[8,27]", other: "[8,64]", holds: [3, 5], breaks: [3, 6] },
];
const [a, b, c]: Cell[] = ["r1c1", "r1c2", "r1c3"];
const board: BoardContext = { rows: 1, cols: 3, activeCells: [a, b, c], alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9], regions: [[a, b, c]] };
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const file = (rules: string) => ({ file: "synthetic.rules.md", text: `${header}---\n\n\`\`\`rules\n${rules}\n\`\`\`` });
const nf = (rules: string) => normalise(file(rules), board);
const line = (kind: string, cells: string[], totals: string) => `${kind} cells [${cells.map(x => `"${x}"`).join(",")}] totals ${totals}`;

test("each kind parses and resolves", () => {
  for (const { kind, totals } of kinds) for (const cells of [[a, b], [a, b, c]]) {
    const rules = line(kind, cells, totals);
    expect(compileCase({ file: "example.md", text: `${header}---\n\n\`\`\`rules\nsudoku 9x9\n${rules}\n\`\`\`` }).diagnostics).toEqual([]);
    expect(nf(rules).issues).toEqual([]);
  }
});

test("each kind gives the same result as cage-totals", () => {
  for (const { kind, totals } of kinds) for (const cells of [[a, b], [a, b, c]]) {
    const variant = nf(line(kind, cells, totals)), base = nf(line("cage-totals", cells, totals));
    expect(variant.status).toBe(base.status);
    expect(variant.normalForm?.coverage.map(x => [x.status, x.reason])).toEqual(base.normalForm?.coverage.map(x => [x.status, x.reason]));
    expect(compare(variant, base).status).toBe(compare(base, base).status);
  }
});

test("a different totals list is not the same cage", () => {
  for (const { kind, totals, other } of kinds) {
    const near = compare(nf(line(kind, [a, b], totals)), nf(line("cage-totals", [a, b], other)));
    const nearBase = compare(nf(line("cage-totals", [a, b], totals)), nf(line("cage-totals", [a, b], other)));
    expect(near.status).toBe("unresolved");
    expect(near.status).toBe(nearBase.status);
    expect(near.covered).toBe(nearBase.covered);
  }
});

test("the evaluator holds on a listed total and breaks otherwise", () => {
  for (const { kind, totals, holds, breaks } of kinds) {
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4,5,6,7,8,9]}\n---\n\n\`\`\`rules\n${line(kind, [a, b], totals)}\n\`\`\`` });
    expect(compiled.diagnostics).toEqual([]);
    const rule = compiled.value!.rules[0];
    expect(evaluate(rule, { digits: { r1c1: holds[0], r1c2: holds[1] } }).status).toBe("holds");
    expect(evaluate(rule, { digits: { r1c1: breaks[0], r1c2: breaks[1] } }).status).toBe("broken");
  }
});

import { expect, test } from "bun:test";
import { compare, compileCase, evaluate, normalise, type BoardContext } from "../../src";

const cells = ["r1c1", "r1c2", "r1c3", "r1c4", "r2c1", "r2c2", "r2c3", "r2c4", "r3c1", "r3c2", "r3c3", "r3c4"];
const board: BoardContext = { rows: 3, cols: 4, activeCells: cells, alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9], regions: [cells] };
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const file = (rules: string) => ({ file: "synthetic.rules.md", text: `${header}---\n\n\`\`\`rules\n${rules}\n\`\`\`` });
const nf = (rules: string) => normalise(file(rules), board);
const two = (kind: string, extra = "") => `${kind} r2c1-r2c2 bulb ["r1c1", "r1c2"]${extra}`;
const three = (kind: string, extra = "") => `${kind} r2c1-r2c2 bulb ["r1c1", "r1c2", "r1c3"]${extra}`;
const shapes: ((kind: string) => string)[] = [k => two(k), k => three(k), k => two(k, " partial true"), k => three(k, " partial true")];

test("pill-arrow parses, resolves and lowers", () => {
  for (const shape of shapes) {
    const rules = shape("pill-arrow");
    expect(compileCase({ file: "example.md", text: `${header}---\n\n\`\`\`rules\nsudoku 9x9\n${rules}\n\`\`\`` }).diagnostics).toEqual([]);
    expect(nf(rules).issues).toEqual([]);
  }
});

test("pill-arrow gives the same result as arrow", () => {
  for (const shape of shapes) {
    const pill = nf(shape("pill-arrow")), arrow = nf(shape("arrow"));
    expect(pill.status).toBe(arrow.status);
    expect(pill.normalForm?.coverage.map(c => [c.status, c.reason])).toEqual(arrow.normalForm?.coverage.map(c => [c.status, c.reason]));
    expect(compare(pill, arrow).status).toBe("equivalent");
  }
});

test("a different line or a reversed bulb is not the same pill arrow", () => {
  const base = nf(two("pill-arrow"));
  for (const other of [`pill-arrow r2c1-r2c3 bulb ["r1c1", "r1c2"]`, `pill-arrow r2c1-r2c2 bulb ["r1c2", "r1c1"]`]) {
    const result = compare(base, nf(other));
    expect(result.status).toBe("unresolved");
    expect(result.covered).toBe("structural-difference");
    expect(result.differences.length).toBeGreaterThan(0);
  }
});

test("the evaluator holds a satisfying pill arrow and breaks a failing one", () => {
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 2, cols: 2, symbols: [1,2,3,4,5,6,7,8,9]}\n---\n\n\`\`\`rules\npill-arrow r2c1-r2c2 bulb ["r1c1", "r1c2"]\n\`\`\`` });
  expect(compiled.diagnostics).toEqual([]);
  const rule = compiled.value!.rules[0];
  expect(evaluate(rule, { digits: { r1c1: 1, r1c2: 2, r2c1: 4, r2c2: 8 } }).status).toBe("holds");
  expect(evaluate(rule, { digits: { r1c1: 1, r1c2: 2, r2c1: 4, r2c2: 9 } }).status).toBe("broken");
});

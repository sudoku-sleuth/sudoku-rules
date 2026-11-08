import { expect, test } from "bun:test";
import { compare, compileCase, evaluate, normalise, type BoardContext, type Cell } from "../../src";

const kinds = ["disjoint-sets", "irregular-regions"];
const [a, b, c]: Cell[] = ["r1c1", "r1c2", "r1c3"];
const digits9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const board: BoardContext = { rows: 1, cols: 3, activeCells: [a, b, c], alphabet: digits9, regions: [[a, b, c]] };
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const file = (rules: string) => ({ file: "synthetic.rules.md", text: `${header}---\n\n\`\`\`rules\n${rules}\n\`\`\`` });
const nf = (rules: string) => normalise(file(rules), board);

test("each variant parses and resolves", () => {
  for (const kind of kinds) {
    const compiled = compileCase({ file: "example.md", text: `${header}---\n\n\`\`\`rules\nsudoku 9x9\n${kind} ${a}-${b}-${c}\n\`\`\`` });
    expect(compiled.diagnostics).toEqual([]);
    expect(nf(`${kind} ${a}-${b}-${c}`).issues).toEqual([]);
  }
});

test("each variant lowers to the same result as regions", () => {
  for (const kind of kinds) for (const cells of [`${a}-${b}`, `${a}-${b}-${c}`]) {
    const variant = nf(`${kind} ${cells}`), base = nf(`regions ${cells}`);
    expect(variant.status).toBe(base.status);
    expect(variant.normalForm?.coverage.map(x => [x.status, x.reason])).toEqual(base.normalForm?.coverage.map(x => [x.status, x.reason]));
    expect(compare(variant, base).status).toBe("equivalent");
  }
});

test("a different cell set is a structural difference", () => {
  for (const kind of kinds) {
    const result = compare(nf(`${kind} ${a}-${b}`), nf(`regions ${a}-${b}-${c}`));
    expect(result.status).not.toBe("equivalent");
    expect(result.covered).toBe("structural-difference");
    expect(result.differences.length).toBeGreaterThan(0);
  }
});

test("the evaluator holds for distinct digits and breaks on a repeat", () => {
  for (const kind of kinds) {
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [1,2,3,4,5,6,7,8,9]}\n---\n\n\`\`\`rules\n${kind} ${a}-${b}-${c}\n\`\`\`` });
    expect(compiled.diagnostics).toEqual([]);
    const rule = compiled.value!.rules[0];
    expect(evaluate(rule, { digits: { r1c1: 1, r1c2: 2, r1c3: 3 } }).status).toBe("holds");
    expect(evaluate(rule, { digits: { r1c1: 1, r1c2: 2, r1c3: 1 } }).status).toBe("broken");
  }
});

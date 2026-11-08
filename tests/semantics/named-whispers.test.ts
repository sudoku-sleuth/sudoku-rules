import { expect, test } from "bun:test";
import { compare, compileCase, normalise, type BoardContext, type Cell } from "../../src";

const board: BoardContext = { rows: 2, cols: 4, activeCells: ["r1c1", "r1c2", "r1c3", "r1c4", "r2c2", "r2c1", "r2c3", "r2c4"], alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9], regions: [["r1c1", "r1c2", "r1c3", "r1c4", "r2c1", "r2c2", "r2c3", "r2c4"]] };
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const file = (rules: string) => ({ file: "synthetic.rules.md", text: `${header}---\n\n\`\`\`rules\n${rules}\n\`\`\`` });
const nf = (rules: string) => normalise(file(rules), board);
const edges = JSON.stringify([["r1c1", "r1c2"], ["r1c2", "r1c3"], ["r1c2", "r2c2"]]);
const shapes = (kind: string) => [
  `${kind} r1c1-r1c2-r1c3 loop false`,
  `${kind} r1c1-r1c2-r1c3-r2c2 loop true`,
  `${kind} line [] edges ${edges} loop false`,
];
const pairs: [string, string][] = [["dutch-whispers", "whispers-4"], ["german-whispers", "whispers-5"]];

test("each named kind parses, resolves and lowers completely", () => {
  for (const [named] of pairs) for (const rules of shapes(named)) {
    expect(compileCase({ file: "example.md", text: `${header}---\n\n\`\`\`rules\nsudoku 9x9\n${rules}\n\`\`\`` }).diagnostics).toEqual([]);
    const result = nf(rules);
    expect(result.issues).toEqual([]);
    expect(result.status).toBe("complete");
  }
}, 30000);

test("a named kind has the normal form of its numbered twin", () => {
  for (const [named, numbered] of pairs) for (let i = 0; i < 3; i++) {
    expect(compare(nf(shapes(named)[i]), nf(shapes(numbered)[i])).status).toBe("equivalent");
  }
});

test("a named kind has the normal form of whispers with the same gap", () => {
  expect(compare(nf("dutch-whispers r1c1-r1c2-r1c3 loop false"), nf("whispers r1c1-r1c2-r1c3 gap 4 loop false")).status).toBe("equivalent");
  expect(compare(nf("german-whispers r1c1-r1c2-r1c3 loop false"), nf("whispers r1c1-r1c2-r1c3 gap 5 loop false")).status).toBe("equivalent");
});

test("Dutch and German whispers on the same line differ", () => {
  for (let i = 0; i < 3; i++) expect(compare(nf(shapes("dutch-whispers")[i]), nf(shapes("german-whispers")[i])).status).not.toBe("equivalent");
});

test("a named kind differs from the other gap's numbered twin", () => {
  const line = " r1c1-r1c2-r1c3 loop false";
  expect(compare(nf("dutch-whispers" + line), nf("whispers-5" + line)).status).not.toBe("equivalent");
  expect(compare(nf("german-whispers" + line), nf("whispers-4" + line)).status).not.toBe("equivalent");
});

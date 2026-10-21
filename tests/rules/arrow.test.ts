import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { compilePublicLibrary, checkCaseReferences } from "../../src";
import { fragmentVerdict } from "../language/finite-fragment";

const sources = await Promise.all((await readdir("rules")).filter(n => n.endsWith(".md")).map(async n => ({ file: `rules/${n}`, text: await Bun.file(`rules/${n}`).text() })));
const compiled = compilePublicLibrary(sources);
expect(compiled.diagnostics).toEqual([]);
const library = compiled.value!;
const arrow = library.rules.get("arrow")!;

interface Assignment { digits: Record<string, number>; values?: Record<string, number>; alphabet: number[] }

// A complete witness set for these nonnegative fragments: delete zeros from any positive
// remainder without changing its sum, and use [0] to witness zero. Positive sums are bounded by B.
function remainders(alphabet: number[], maximum: number): number[][] {
  if (alphabet.some(d => d < 0)) throw Error("These fixtures require nonnegative symbols.");
  const results: number[][] = alphabet.includes(0) ? [[],[0]] : [[]];
  function append(prefix: number[], remaining: number) {
    for (const d of alphabet.filter(d => d > 0 && d <= remaining)) {
      const next = [...prefix, d]; results.push(next); append(next, remaining - d);
    }
  }
  append([], maximum); return results;
}
function holds(assignment: Assignment, line: string[], bulb: string[], partial: boolean): boolean {
  const maximum = bulb.reduce((n, c) => n * 10 + assignment.digits[c], 0);
  return fragmentVerdict(arrow.formulas[0].ast, library.prelude, arrow.parameters, {
    faces: assignment.digits, values: {...assignment.digits,...assignment.values}, alphabet: assignment.alphabet,
    parameters: {line,bulb,partial}, witnesses: {remainder: partial ? remainders(assignment.alphabet, maximum) : []},
  });
}
const standard = [1,2,3,4,5,6,7,8,9];
test("partial shaft reserves a nonempty remainder: equality fails on 1–9 but can hold with zero", () => {
  const a = {digits:{r1c1:5,r1c2:4},alphabet:standard};
  expect(holds(a,["r1c2"],["r1c1"],true)).toBe(true);
  expect(holds({...a,digits:{r1c1:5,r1c2:5}},["r1c2"],["r1c1"],true)).toBe(false);
  expect(holds({...a,digits:{r1c1:5,r1c2:5},alphabet:[0,...standard]},["r1c2"],["r1c1"],true)).toBe(true);
  expect(holds({...a,digits:{r1c1:5,r1c2:6},alphabet:[0,...standard]},["r1c2"],["r1c1"],true)).toBe(false);
});
test("the remainder must be made from allowed symbols, not merely fit below the bulb", () => {
  expect(holds({digits:{r1c1:5,r1c2:2},alphabet:[2,5]},["r1c2"],["r1c1"],true)).toBe(false);
  expect(fragmentVerdict(arrow.formulas[0].ast,library.prelude,arrow.parameters,{
    faces:{r1c1:5,r1c2:2},alphabet:[2,5],parameters:{line:["r1c2"],bulb:["r1c1"],partial:true},witnesses:{remainder:[[3]]},
  })).toBe(false); // A numerically fitting but forbidden digit cannot witness completion.
  expect(holds({digits:{r1c1:5,r1c2:1},alphabet:[1,5]},["r1c2"],["r1c1"],true)).toBe(true); // Four omitted ones.
});
test("complete arrows retain equality, effective one-cell values, and ordered printed-digit pills", () => {
  const a = {digits:{r1c1:3,r1c2:2,r1c3:4},alphabet:standard};
  expect(holds(a,["r1c2","r1c3"],["r1c1"],false)).toBe(false);
  expect(holds({...a,values:{r1c1:6}},["r1c2","r1c3"],["r1c1"],false)).toBe(true);
  const pill = {digits:{r1c1:1,r1c2:4,r2c1:5,r2c2:9},values:{r2c1:10,r2c2:18},alphabet:standard};
  expect(holds(pill,["r2c1","r2c2"],["r1c1","r1c2"],false)).toBe(true);
  expect(holds(pill,["r2c1","r2c2"],["r1c2","r1c1"],false)).toBe(false);
  expect(holds(a,["r1c2"],[],true)).toBe(false);
});
test("the documented cloned-area and consecutive-cage declarations use existing kinds", () => {
  const text = `---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n\`\`\`rules\nsudoku 9x9\nclone-1: clone r1c1-r4c4\nclone-2: clone r1c2-r4c5\ncage r1c1-r2c1-r2c2 total 7 repeats true\nbremban r1c1-r2c1-r2c2\n\`\`\``;
  expect(checkCaseReferences({file:"synthetic.rules.md",text},library.registry).diagnostics).toEqual([]);
});

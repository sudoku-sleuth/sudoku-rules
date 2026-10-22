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
  // These fixtures use one-cell bulbs (at most 9); reject larger searches before enumerating compositions.
  if (maximum > 9) throw Error("Remainder fixture limit: sum at most 9.");
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
test("the documented cloned-area, consecutive-cage and Greek Carpet declarations use existing kinds", () => {
  const text = `---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n\`\`\`rules\nsudoku 9x9\nclone-1: clone r1c1-r4c4\nclone-2: clone r1c2-r4c5\ncage r1c3-r1c4-r2c4 total 7 repeats true\nbremban r1c3-r1c4-r2c4\ngreek-carpet r1c1-r1c2 unrolled ["r4c4","r4c5"]\n\`\`\``;
  expect(checkCaseReferences({file:"synthetic.rules.md",text},library.registry).diagnostics).toEqual([]);
});

function ruleHolds(kind: string, faces: Record<string, number>, parameters: Record<string, unknown>): boolean {
  const rule = library.rules.get(kind)!;
  return fragmentVerdict(rule.formulas[0].ast, library.prelude, rule.parameters, {faces, parameters});
}

test("the documented Bremban examples evaluate their satisfy and break claims", () => {
  const line = ["r1c3", "r1c4", "r2c4"];
  expect(ruleHolds("bremban", {r1c3:1,r1c4:2,r2c4:1}, {line})).toBe(true);
  expect(ruleHolds("bremban", {r1c3:1,r1c4:3,r2c4:1}, {line})).toBe(false);
  for (const [digits, expected] of [[[2,3,2], true], [[1,5,1], false]] as const) {
    const faces = Object.fromEntries(line.map((cell, i) => [cell, digits[i]]));
    expect(ruleHolds("cage", faces, {cells:line,total:7,repeats:true})).toBe(true);
    expect(ruleHolds("bremban", faces, {line})).toBe(expected);
  }
});

test("the documented cloned areas evaluate each corresponding equality group", () => {
  for (const [last, expected] of [[7, true], [8, false]] as const) {
    const faces = {r1c1:2,r1c2:7,r4c4:2,r4c5:last};
    expect(ruleHolds("clone", faces, {cells:["r1c1","r4c4"]})).toBe(true);
    expect(ruleHolds("clone", faces, {cells:["r1c2","r4c5"]})).toBe(expected);
  }
});

test("Greek Carpet evaluates corresponding positions, including shared starts", () => {
  const parameters = {line:["r1c1","r1c2"],unrolled:["r1c3","r1c4"]};
  expect(ruleHolds("greek-carpet", {r1c1:1,r1c2:2,r1c3:1,r1c4:2}, parameters)).toBe(true);
  expect(ruleHolds("greek-carpet", {r1c1:1,r1c2:2,r1c3:1,r1c4:3}, parameters)).toBe(false);
  const shared = {line:["r1c1","r1c2","r2c2"],unrolled:["r1c1","r1c2","r1c3"]};
  expect(ruleHolds("greek-carpet", {r1c1:1,r1c2:2,r2c2:3,r1c3:3}, shared)).toBe(true);
  expect(ruleHolds("greek-carpet", {r1c1:1,r1c2:2,r2c2:3,r1c3:4}, shared)).toBe(false);
});


test("zipper variants distinguish an ignored centre, an odd centre, and an even line", () => {
  const rule = library.rules.get("zipper")!;
  function zipper(digits: number[], centre: string) {
    const line = digits.map((_, i) => `r${i+1}c${i+1}`);
    return fragmentVerdict(rule.formulas[0].ast, library.prelude, rule.parameters, {
      faces: Object.fromEntries(line.map((cell, i) => [cell, digits[i]])), parameters: {line, centre},
    });
  }
  expect(zipper([1,2,9,4,5], "ignore")).toBe(true);
  expect(zipper([1,2,9,4,5], "when-odd")).toBe(false);
  expect(zipper([1,2,9,4,6], "ignore")).toBe(false);
  expect(zipper([1,2,6,4,5], "required")).toBe(true);
  expect(zipper([1,2,4,5], "when-odd")).toBe(true);
  expect(zipper([1,2,4,5], "required")).toBe(false);
});

test("region-sum formula combines return visits without counting unvisited regions", () => {
  const rule = library.rules.get("region-sum")!;
  const line = ["r1c3", "r1c4", "r2c3"];
  const regions = [["r1c3", "r2c3"], ["r1c4"], ["r9c9"]];
  function regional(digits: number[], combine: boolean) {
    return fragmentVerdict(rule.formulas[0].ast, library.prelude, rule.parameters, {
      faces: Object.fromEntries(line.map((cell, i) => [cell, digits[i]])), regions,
      parameters: {line, segments: line.map(c => [c]), combine},
    });
  }
  expect(regional([1,3,2], true)).toBe(true);
  expect(regional([1,4,2], true)).toBe(false);
  expect(regional([1,3,2], false)).toBe(false);
  expect(regional([3,3,3], false)).toBe(true);
  expect(regional([3,3,3], true)).toBe(false);
});


test("new variant parameters are accepted through the published declaration contracts", () => {
  const text = `---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n\`\`\`rules\nsudoku 9x9\nzipper r1c1-r2c2-r3c3 centre "ignore"\nregion-sum r1c3-r1c4-r2c3 segments [["r1c3"],["r1c4"],["r2c3"]] combine true\n\`\`\``;
  expect(checkCaseReferences({file:"synthetic.rules.md",text},library.registry).diagnostics).toEqual([]);
});

test("16 by 16 one-cell bulbs accept 12 without decimal digit validation", () => {
 const alphabet=Array.from({length:16},(_,i)=>i+1);
 expect(holds({digits:{r1c1:12,r1c2:5,r1c3:7},alphabet},["r1c2","r1c3"],["r1c1"],false)).toBe(true);
 expect(holds({digits:{r1c1:12,r1c2:5,r1c3:8},alphabet},["r1c2","r1c3"],["r1c1"],false)).toBe(false);
 expect(holds({digits:{r1c1:12,r1c2:5},values:{r1c1:20,r1c2:20},alphabet},["r1c2"],["r1c1"],false)).toBe(true);
 expect(holds({digits:{r1c1:-2,r1c2:-2},alphabet:[-2,0,12]},["r1c2"],["r1c1"],false)).toBe(true);
});

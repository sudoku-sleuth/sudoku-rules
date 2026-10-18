import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { caseValueChecks, checkCaseReferences, compilePublicLibrary, type Diagnostic } from "../../src";
const pages = await Promise.all((await readdir("rules")).filter(n => n.endsWith(".md")).map(async n => ({file: `rules/${n}`, text: await Bun.file(`rules/${n}`).text()})));
const library = compilePublicLibrary(pages).value!;
const manifest: {file: string; repair: string; diagnostics: Diagnostic[]}[] = await Bun.file("tests/invalid/case-expected.json").json();
for (const entry of manifest) {
  test(`case values reject ${entry.file} with exact diagnostics and spans`, async () => {
    const result = checkCaseReferences({file: entry.file, text: await Bun.file(entry.file).text()}, library.registry);
    expect(result.value).toBeUndefined();
    expect(result.diagnostics).toEqual(entry.diagnostics);
  });
  test(`case values accept ${entry.repair}`, async () => {
    const result = checkCaseReferences({file: entry.repair, text: await Bun.file(entry.repair).text()}, library.registry);
    expect(result.diagnostics).toEqual([]);
    expect(result.value).toBeDefined();
  });
}
test("every case value check has a raw rejection and repair", async () => {
  const codes = new Set(manifest.flatMap(e => e.diagnostics.map(d => d.code)));
  for (const code of caseValueChecks) expect(codes.has(code)).toBe(true);
  for (const folder of ["invalid", "valid"]) expect((await readdir(`tests/${folder}/cases`)).sort()).toEqual(manifest.map(e => (folder === "invalid" ? e.file : e.repair).split("/").at(-1)!).sort());
});
const template = await Bun.file("tests/valid/cases/missing-section.rules.md").text();
const check = (text: string) => checkCaseReferences({file: "example.rules.md", text}, library.registry);
test("in-file and external custom definitions resolve without fetching or deferral", () => {
  for (const text of [template, template.replaceAll("#weighted-triple", "https://setter.example/weighted-triple.md")]) {
    const result = check(text);
    expect(result.diagnostics).toEqual([]);
    expect(result.value!.deferred).toEqual([]);
    expect(result.value!.references).toHaveLength(2);
  }
});
test("case fences accept tildes, longer fences and CRLF", () => {
  for (const fence of ["~~~", "`````", "```"])
    expect(check(template.replaceAll("```", fence).replaceAll("\n", "\r\n")).diagnostics).toEqual([]);
  expect(check(template.replace(/```\s*$/, "")).diagnostics.some(d => d.code === "E_CUSTOM_DEFINITION")).toBe(true);
});
test("all board-dependent defaults are explicit on a different alphabet", () => {
  const board = "board: {rows: 9, cols: 9, symbols: [0,1,2,3,4,5,6,7,8]}\n";
  for (const [line, explicit] of [
    ["summit r1c1-r1c2", "loop false"], ["parity r1c1-r1c2", "loop false"],
    ["primality r1c1-r1c2", "loop false"], ["entropic r1c1-r1c2", "loop false"],
    ["modular r1c1-r1c2 loop false", "modulus 3"], ["nabner r1c1-r1c2", "distinct false"],
    ['index r1c1-r1c2 axis "row"', "strips []"],
    ['line-choice r1c1-r1c2 kinds ["renban"] min 1 max 1', "loop false"],
  ]) {
    const text = template.replace("status: read", `status: read\n${board.trimEnd()}`).replace("sudoku 9x9", line);
    expect(check(text).diagnostics[0].message).toContain("explicitly on this board");
    expect(check(text.replace(line, `${line} ${explicit}`)).diagnostics).toEqual([]);
  }
});
test("negation and conditions do not hide invalid parameters", () => {
  const source = template.replace("weighted-1: #weighted-triple r1c1-r1c2-r1c3", "weighted-1: #weighted-triple r1c1-r1c2-r1c3\nclue: not whispers r1c1-r1c2 gap false unless distinct");
  expect(check(source).diagnostics[0].code).toBe("E_CASE_PARAMETERS");
});
test("parameter checks follow full URLs and aliases", () => {
  for (const name of ["whisper", "whispers", "https://rules.sudoku-sleuth.com/whispers.md"]) {
    const text = template.replace("sudoku 9x9", `sudoku 9x9\n${name} gap 5`);
    expect(check(text).diagnostics[0].message).toBe("State line explicitly for this rule.");
  }
});
test("a named primary path can carry a condition", () => {
  const source = template.replace("sudoku 9x9", 'sudoku 9x9\nthermo line ["r1c1","r1c2"] if distinct');
  expect(check(source).diagnostics).toEqual([]);
});
test("nested records, enums, missing operands and malformed JSON are rejected", () => {
  for (const line of [
    'diagonal direction "both"',
    'look-and-say r1c1 counts [{"digit":1,"count":"2"}]',
    'look-and-say r1c1 counts [{"digit":1,"count":2,"class":"odd"}]',
    'look-and-say r1c1 counts [{"digit":1}]',
    'arrow r1c1-r1c2 bulb ["r1c3"',
  ]) expect(check(template.replace("sudoku 9x9", `sudoku 9x9\n${line}`)).diagnostics[0].code).toBe("E_CASE_PARAMETERS");
});

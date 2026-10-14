import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { checkCaseReferences, compilePage, compilePublicLibrary, parseDeclaredRuleLine, ruleLineChecks, type Diagnostic } from "../../src";
import { fragmentVerdict } from "./finite-fragment";
import { caseExamples } from "../../scripts/lint-skill";
const pages = await Promise.all((await readdir("rules")).filter(n => n.endsWith(".md")).map(async n => ({ file: `rules/${n}`, text: await Bun.file(`rules/${n}`).text() })));
const compiled = compilePublicLibrary(pages);
if (!compiled.value) throw Error(JSON.stringify(compiled.diagnostics));
const library = compiled.value;
const pair = library.rules.get("pair")!;
const kropki = library.rules.get("kropki")!;
const manifest: { file: string; repair: string; mode: "case" | "page"; diagnostics: Diagnostic[] }[] = await Bun.file("tests/invalid/line-expected.json").json();
for (const entry of manifest) {
  const check = (file: string, text: string) => entry.mode === "page" ? compilePage({ file, text }, library.prelude) : checkCaseReferences({ file, text }, library.registry);
  test(`line syntax rejects ${entry.file} with exact message and source span`, async () => {
    const result = check(entry.file, await Bun.file(entry.file).text());
    expect(result.value).toBeUndefined(); expect(result.diagnostics).toEqual(entry.diagnostics);
  });
  test(`line syntax accepts ${entry.repair}`, async () => {
    const result = check(entry.repair, await Bun.file(entry.repair).text());
    expect(result.diagnostics).toEqual([]); expect(result.value).toBeDefined();
  });
}
test("every line check has a rejecting fixture and repair", async () => {
  const codes = new Set(manifest.flatMap(e => e.diagnostics.map(d => d.code)));
  for (const code of ruleLineChecks) expect(codes.has(code)).toBe(true);
  for (const folder of ["invalid", "valid"])
    expect((await readdir(`tests/${folder}/lines`)).sort()).toEqual(manifest.map(e => (folder === "invalid" ? e.file : e.repair).split("/").at(-1)!).sort());
});
for (const [keyword, operands] of Object.entries(pair.line!.parameter.keywords)) {
  test(`pair ${keyword} decodes declared fields, including no-value forms`, () => {
    const text = `r1c1-r1c2 ${keyword}${operands.length ? " 3" : ""}`;
    expect(parseDeclaredRuleLine({ file: "setter.rules.md", text }, pair.line!).value).toEqual({ cells: ["r1c1", "r1c2"], relation: { op: keyword, ...(operands.length ? { value: "3" } : {}) } });
  });
}
test("integer operands retain every digit beyond floating-point precision", () => {
  expect(parseDeclaredRuleLine({ file: "large.rules.md", text: "r1c1-r1c2 sum 9007199254740993" }, pair.line!).value!.relation).toEqual({ op: "sum", value: "9007199254740993" });
});
test("grammar follows renamed kinds, record fields and new enum members", async () => {
  const shared = pages.find(p => p.file === "rules/predicates.md")!;
  const original = pages.find(p => p.file === "rules/pair.md")!.text;
  const renamed = original.replaceAll("kind: pair", "kind: bond").replaceAll("https://rules.sudoku-sleuth.com/pair.md", "https://other.example/bond.md");
  const checked = compilePublicLibrary([shared, { file: "bond.md", text: renamed }]);
  expect(checked.diagnostics).toEqual([]);
  const source = (await Bun.file("tests/valid/lines/unknown-op.rules.md").text()).replace("sudoku 9x9\n", "").replace("pair r", "bond r").replace("https://rules.sudoku-sleuth.com/", "https://other.example/");
  expect(checkCaseReferences({ file: "bond.rules.md", text: source }, checked.value!.registry).diagnostics).toEqual([]);
  const novel = renamed.replace("type: PairRelation", "type: 'record{action:enum{offset},amount:optional<number>}'")
    .replace(/      tag: op\n      choices:[\s\S]*?(?=  cells:)/, "      tag: action\n      choices:\n        offset: {amount: integer}\n")
    .replace("|cells|=2 ∧ pairRelation(relation,V(cells[0]),V(cells[1]))", '|cells|=2 ∧ relation.action="offset"');
  const newPage = compilePage({ file: "offset.md", text: novel }, library.prelude);
  expect(newPage.diagnostics).toEqual([]);
  expect(parseDeclaredRuleLine({ file: "offset.rules.md", text: "r1c1-r1c2 offset 4" }, newPage.value!.line!).value).toEqual({ cells: ["r1c1", "r1c2"], relation: { action: "offset", amount: "4" } });
});
test("IDs, negation, full URLs, conditions and CRLF retain source locations", async () => {
  const source = await Bun.file("tests/valid/lines/unknown-op.rules.md").text();
  for (const prefix of ["not ", "pair-1: not not ", ""])
    expect(checkCaseReferences({ file: "wrapped.rules.md", text: source.replace("pair r", `${prefix}pair r`).replace("ratio 3", "ratio 3 unless distinct") }, library.registry).diagnostics).toEqual([]);
  expect(checkCaseReferences({ file: "url.rules.md", text: source.replace("pair r", "https://rules.sudoku-sleuth.com/pair.md r") }, library.registry).diagnostics).toEqual([]);
  const bad = source.replace("ratio 3", "ratio 1.5").replaceAll("\n", "\r\n");
  const d = checkCaseReferences({ file: "windows.rules.md", text: bad }, library.registry).diagnostics[0];
  expect(d.code).toBe("E_LINE_TYPE"); expect(d.span.start.line).toBe(13); expect(d.span.start.column).toBe(22);
  expect(bad.slice(d.span.start.offset, d.span.end.offset)).toBe("1.5");
});
test("Kropki's old and short forms decode the same relationship", () => {
  for (const colour of ["white", "black"])
    for (const text of [`r1c1-r1c2 ${colour}`, `r1c1-r1c2 colour "${colour}"`])
      expect(parseDeclaredRuleLine({ file: "dots.rules.md", text }, kropki.line!).value).toEqual({ cells: ["r1c1", "r1c2"], colour });
});
test("Kropki shorthand and pair formulas agree on every standard digit pair", () => {
  for (const colour of ["white", "black"]) for (let a = 1; a <= 9; a++) for (let b = 1; b <= 9; b++) {
    const parameters = parseDeclaredRuleLine({ file: "dots.rules.md", text: `r1c1-r1c2 ${colour}` }, kropki.line!).value!;
    const pairParameters = parseDeclaredRuleLine({ file: "pair.rules.md", text: `r1c1-r1c2 ${colour === "white" ? "difference 1" : "ratio 2"}` }, pair.line!).value!;
    const faces = { r1c1: a, r1c2: b };
    expect(fragmentVerdict(kropki.formulas[0].ast, library.prelude, kropki.parameters, { faces, parameters })).toBe(fragmentVerdict(pair.formulas[0].ast, library.prelude, pair.parameters, { faces, parameters: pairParameters }));
  }
});
test("pair and Kropki page examples pass the declared grammar", () => {
  for (const kind of ["pair", "kropki"]) for (const text of caseExamples(pages.find(p => p.file === `rules/${kind}.md`)!.text))
    expect(checkCaseReferences({ file: `${kind}-example.rules.md`, text }, library.registry).diagnostics).toEqual([]);
});

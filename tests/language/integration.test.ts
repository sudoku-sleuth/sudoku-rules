import { expect, test } from "bun:test";
import { readFile, readdir } from "node:fs/promises";
import { checkCaseReferences, compilePublicLibrary, documentChecks, type Diagnostic } from "../../src";
const root = "https://fixtures.example/rules/";
const registry = { kinds: new Set(["sudoku"]), urls: new Set([root + "sudoku.md"]) };
const shared = { file: "rules/predicates.md", text: await Bun.file("rules/predicates.md").text() };
const target = { file: "rules/target.md", text: `---\nname: Target\nkind: target\nurl: ${root}target.md\nparameters: {}\n---\nClass: **first-order**.\n\`\`\`text\ntrue\n\`\`\`\n` };
const manifest: {
    file: string;
    repair: string;
    mode: "case" | "library";
    diagnostics: Diagnostic[];
}[] = await Bun.file("tests/invalid/integration-expected.json").json();
for (const entry of manifest) {
    const check = (text: string) => entry.mode === "case" ? checkCaseReferences({ file: entry.file, text }, registry) : compilePublicLibrary([shared, target, { file: entry.file, text }]);
    test(`integration rejects ${entry.file} with exact setter message and span`, async () => {
        const result = check(await readFile(entry.file, "utf8"));
        expect(result.value).toBeUndefined();
        expect(result.diagnostics).toEqual(entry.diagnostics);
    });
    test(`integration accepts repaired ${entry.repair}`, async () => { const result = check(await readFile(entry.repair, "utf8")); expect(result.diagnostics).toEqual([]); expect(result.value).toBeDefined(); });
}
test("every integration check has an invalid fixture and repair", async () => {
    const actual = new Set(manifest.flatMap(entry => entry.diagnostics.map(d => d.code)));
    for (const code of documentChecks)
        expect(actual.has(code)).toBe(true);
    for (const directory of ["invalid", "valid"])
        expect((await readdir(`tests/${directory}/integration`)).sort()).toEqual(manifest.map(entry => (directory === "invalid" ? entry.file : entry.repair).split("/").at(-1)!).sort());
});
test("library roots are supplied by the file and full URLs are never mistaken for IDs", async () => {
    const source = await readFile("tests/valid/integration/unknown-kind.md", "utf8");
    const renamed = source.replaceAll(root, "https://another.example/library/");
    const checked = checkCaseReferences({ file: "another.rules.md", text: renamed }, { kinds: new Set(["sudoku"]), urls: new Set(["https://another.example/library/sudoku.md"]) });
    expect(checked.diagnostics).toEqual([]);
    expect(checked.value!.references[0].url).toBe("https://another.example/library/sudoku.md");
    const full = source.replace("sudoku 9x9", `${root}sudoku.md 9x9`);
    expect(checkCaseReferences({ file: "full.rules.md", text: full }, registry).value!.references[0].url).toBe(root + "sudoku.md");
    const foreign = source.replace("sudoku 9x9", "https://setter.example/new-rule.md r1c1");
    expect(checkCaseReferences({ file: "external.rules.md", text: foreign }, registry).value!.deferred).toEqual(["https://setter.example/new-rule.md"]);
});
test("every production page compiles atomically with its declared public prelude", async () => {
    const names = (await readdir("rules")).filter(name => name.endsWith(".md") );
    const pages = await Promise.all(names.map(async (name) => ({ file: `rules/${name}`, text: await readFile(`rules/${name}`, "utf8") })));
    const result = compilePublicLibrary(pages);
    expect(result.diagnostics).toEqual([]);
    expect(result.value!.rules.size).toBe(80);
    expect(result.value!.aliases.size).toBe(2);
    expect(result.value!.documents).toBe(3);
});

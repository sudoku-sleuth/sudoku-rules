import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { compilePage, compilePrelude, languageChecks, type Diagnostic } from "../../src/index";

interface Fixture { file: string; repair: string; mode: "page" | "prelude"; code: string; diagnostics: Diagnostic[] }
const manifest: Fixture[] = await Bun.file("tests/invalid/expected.json").json();
const prelude = compilePrelude({ file: "spec/prelude.md", text: await Bun.file("tests/fixtures/typed-prelude.md").text() }).value!;

test("every registered slice-1 check has a raw rejecting fixture and a repair", async () => {
  expect([...new Set(manifest.map(entry => entry.code))].sort()).toEqual([...languageChecks].sort());
  expect(new Set(manifest.map(entry => entry.file)).size).toBe(manifest.length);
  expect(new Set(manifest.map(entry => entry.repair)).size).toBe(manifest.length);
  for (const directory of ["invalid", "valid"]) {
    const files = (await readdir(`tests/${directory}/rules`)).filter(name => name.endsWith(".md")).map(name => `rules/${name}`).sort();
    expect(files).toEqual(manifest.map(entry => directory === "invalid" ? entry.file : entry.repair).sort());
  }
});
for (const entry of manifest) {
  test(`rejects ${entry.file} with its exact ordered diagnostic and full source span`, async () => {
    const page = { file: entry.file, text: await Bun.file(`tests/invalid/${entry.file}`).text() };
    const result = entry.mode === "prelude" ? compilePrelude(page) : compilePage(page, prelude);
    expect(result.value).toBeUndefined();
    expect(result.diagnostics).toEqual(entry.diagnostics);
  });
  test(`accepts repaired ${entry.repair}`, async () => {
    const page = { file: entry.repair, text: await Bun.file(`tests/valid/${entry.repair}`).text() };
    const result = entry.mode === "prelude" ? compilePrelude(page) : compilePage(page, prelude);
    expect(result.diagnostics).toEqual([]);
    expect(result.value).toBeDefined();
  });
}

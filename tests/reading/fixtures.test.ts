import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { lintReadings, readingChecks, type PageSource } from "../../src";
import { pages } from "./library";

interface Entry { file: string; repair: string; page: string; diagnostics: ReturnType<typeof lintReadings> }
const manifest: Entry[] = await Bun.file("tests/invalid/reading-expected.json").json();
const swap = (page: string, text: string): PageSource[] => pages.map(p => (p.file === page ? { ...p, text } : p));

test("every reading check has a rejecting page and a repair", async () => {
  expect(new Set(manifest.flatMap(e => e.diagnostics.map(d => d.code)))).toEqual(new Set(readingChecks));
  for (const [folder, key] of [["invalid", "file"], ["valid", "repair"]] as const)
    expect((await readdir(`tests/${folder}/readings`)).sort()).toEqual(manifest.map(e => e[key].split("/").at(-1)!).sort());
});

for (const entry of manifest) {
  test(`reading lint rejects ${entry.file} with its exact diagnostics`, async () => {
    expect(lintReadings(swap(entry.page, await Bun.file(entry.file).text()))).toEqual(entry.diagnostics);
  });
  test(`reading lint accepts the repair ${entry.repair}`, async () => {
    expect(lintReadings(swap(entry.page, await Bun.file(entry.repair).text()))).toEqual([]);
  });
}

test("a spoiler variant may not name what it hides outside the spoiler part", () => {
  const fog = pages.find(p => p.file === "rules/fog.md")!.text;
  const bad = fog.replace('one: "{part:start} Placing the right digit in a marked cell', 'one: "{items} {part:start} Placing the right digit in a marked cell');
  expect(lintReadings(swap("rules/fog.md", bad)).map(d => d.message)).toEqual([expect.stringContaining("names what the spoiler hides")]);
});

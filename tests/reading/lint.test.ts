import { expect, test } from "bun:test";
import { lintReadings, type PageSource } from "../../src";
import { pages } from "./library";

const replace = (file: string, change: (text: string) => string): PageSource[] =>
  pages.map(page => (page.file === file ? { ...page, text: change(page.text) } : page));
const codes = (list: PageSource[]) => lintReadings(list).map(d => `${d.code}: ${d.message}`);

test("the library's own readings pass every reading check", () => {
  expect(lintReadings(pages)).toEqual([]);
});

test("an unknown placeholder is rejected", () => {
  const found = codes(replace("rules/thermo.md", t => t.replace("{count|Words} thermometers.", "{count|Words} {colour} thermometers.")));
  expect(found).toEqual([expect.stringContaining("E_READING_PLACEHOLDER: Check the reading: thermo variant 1: {colour} is not a declared parameter or built-in")]);
});

test("an unknown format and an unknown property are rejected", () => {
  expect(codes(replace("rules/thermo.md", t => t.replace("{line.first}", "{line.middle|shout}")))).toEqual([
    expect.stringContaining("uses the unknown property middle"),
    expect.stringContaining("uses the unknown format shout"),
  ]);
});

test("a part that does not exist is rejected", () => {
  expect(codes(replace("rules/whispers.md", t => t.replaceAll("{part:loop}", "{part:close}"))).length).toBeGreaterThan(0);
});

test("an unknown field and an unknown named condition are rejected", () => {
  expect(codes(replace("rules/thermo.md", t => t.replace("  terms: [thermo,", "  colour: green\n  terms: [thermo,")))).toEqual([expect.stringContaining("E_READING_FIELD: Check the reading: thermo: unknown reading field colour")]);
  expect(codes(replace("rules/unique.md", t => t.replace("condition: isHouse", "condition: isTidy")))).toEqual([expect.stringContaining("isTidy is not a named condition")]);
});

test("a condition may only ask about declared parameters", () => {
  expect(codes(replace("rules/whispers.md", t => t.replace("when: {gap: 5}", "when: {width: 5}")))).toEqual([expect.stringContaining("when asks about width, which is not declared")]);
});

test("a reading must use every non-cell parameter", () => {
  const found = codes(replace("rules/whispers.md", t => t.replace("group_by: [gap, loop]", "group_by: [gap]").replaceAll("when: {loop: true}", "when: {gap: 5}")));
  expect(found).toEqual([expect.stringContaining("E_READING_PARAMETER: The reading of whispers never uses the parameter loop")]);
});

test("the page's Example must read in full", () => {
  const found = codes(replace("rules/thermo.md", t => t.replace("    - heading: Thermometers\n", "    - when: {line: {length: 99}}\n      heading: Thermometers\n")));
  expect(found).toEqual([expect.stringContaining("E_READING_EXAMPLE: The Example on thermo must read in full")]);
});

test("a variant needs a sentence", () => {
  expect(codes(replace("rules/renban.md", t => t.replace(/      one: .*\n/, "")))).toContain("E_READING_FIELD: Check the reading: renban variant 1: needs a one sentence.");
});

test("only the sudoku page declares header readings", () => {
  expect(codes(replace("rules/renban.md", t => t.replace("reading:\n", "reading:\n  header: {givens: {variants: []}}\n")))).toEqual([expect.stringContaining("only the sudoku page declares header readings")]);
});

test("an alias page has no reading", () => {
  expect(codes(replace("rules/whisper.md", t => t.replace(/\n---\n/, "\nreading:\n  terms: [whisper]\n---\n")))).toEqual([expect.stringContaining("an alias page has no reading")]);
});

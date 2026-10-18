import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { checkCaseReferences, compilePublicLibrary, parsePrelude } from "../../src";

const pages = await Promise.all((await readdir("rules")).filter(name => name.endsWith(".md")).map(async name => ({ file: `rules/${name}`, text: await Bun.file(`rules/${name}`).text() })));
const registry = compilePublicLibrary(pages).value!.registry;
const header = (fog: string, body = "sudoku 9x9") => `---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n${fog}---\n\n\`\`\`rules\n${body}\n\`\`\`\n`;
const check = (fog: string, body?: string) => checkCaseReferences({ file: "case.rules.md", text: header(fog + (body === "# explicit board" ? "board: {rows: 5, cols: 5, symbols: [1,2,3,4,5]}\n" : ""), body) }, registry).diagnostics;

test("a fog block is decoded against the page's parameter types", () => {
  expect(check("fog:\n  initiallyLit: [r1c1]\n")).toEqual([]);
  expect(check("fog:\n  initiallyLit: [r1c1]\n  links: []\n")).toEqual([]);
  expect(check("fog:\n  links: [{trigger: [r1c2], lights: [r2c2]}]\n")).toEqual([]);
  expect(check("fog:\n  initiallyLit: [r1c1]\n  link: []\n").map(d => d.code)).toEqual(["E_HEADER_TYPE"]);
  expect(check("fog:\n  initiallyLit: [r1c1, banana]\n").map(d => d.code)).toEqual(["E_HEADER_TYPE"]);
  expect(check("fog: yes\n").map(d => d.code)).toEqual(["E_HEADER_TYPE"]);
});

test("lights stay on the grid and triggers may leave it", () => {
  expect(check("fog:\n  initiallyLit: [r1c1]\n  links: [{trigger: [r6c1], lights: [r2c2]}]\n", "# explicit board")).toEqual([]);
  expect(check("fog:\n  initiallyLit: [r1c1]\n  links: [{trigger: [r1c1], lights: [r6c1]}]\n", "# explicit board").map(d => d.code)).toEqual(["E_HEADER_TYPE"]);
});

test("row-major numbers need a known board size", () => {
  expect(check("fog:\n  initiallyLit: [0, 1, 9]\n")).toEqual([]);
  expect(check("fog:\n  initiallyLit: [0, 1, 9]\n", "# no size").map(d => d.code)).toEqual(["E_CASE_BOARD", "E_HEADER_TYPE"]);
});

test("a play type is not a thing, and play is only a prefix", () => {
  expect(parsePrelude("play type T = digit;").diagnostics.map(d => d.code)).toEqual(["E_FORMULA_SYNTAX"]);
  expect(parsePrelude("play input flag: boolean;").value![0].play).toBe(true);
  expect(parsePrelude("input play: boolean;").diagnostics).toEqual([]);
});

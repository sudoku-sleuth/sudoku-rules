import { expect, test } from "bun:test";
import { compileLibrary, compilePrelude } from "../../src/index";
import { lintFiles } from "../../src/cli";

const preludePage = { file: "spec/prelude.md", text: await Bun.file("tests/fixtures/typed-prelude.md").text() };
test("library compilation is atomic and never returns a partially checked library", async () => {
  const good = { file: "good.md", text: await Bun.file("tests/valid/rules/undefined-partial.md").text() };
  const bad = { file: "bad.md", text: await Bun.file("tests/invalid/rules/undefined-partial.md").text() };
  expect(compileLibrary([good], preludePage).value?.pages).toHaveLength(1);
  const result = compileLibrary([good, bad], preludePage);
  expect(result.value).toBeUndefined();
  expect(result.diagnostics[0].span.file).toBe("bad.md");
});
test("CLI reports checked formula pages and explicitly pending case checks", async () => {
  const good = await lintFiles("tests/valid/rules/undefined-partial.md");
  expect(good.checked).toBe(1);
  expect(good.formulas).toBe(1);
  expect(good.diagnostics).toEqual([]);
  const bad = await lintFiles("tests/invalid/rules/undefined-partial.md");
  expect(bad.checked).toBe(0);
  expect(bad.diagnostics[0].code).toBe("E_NAME_UNDEFINED");
  const cases = await lintFiles("tests/fixtures/cases");
  expect(cases.checked).toBe(113);
  expect(cases.cases).toBe(1);
  expect(cases.references).toBe(9);
  expect(cases.pending).toEqual(["URL resolution", "example evaluation"]);
});
test("CLI exit status distinguishes invalid source from invocation errors", async () => {
  for (const [args, exit] of [
    [["--help"], 0],
    [["lint", "tests/valid/rules/undefined-partial.md", "--json"], 0],
    [["lint", "tests/invalid/rules/undefined-partial.md", "--json"], 1],
    [["lint", "not-a-file"], 2],
    [["lint", "tests/valid/rules/undefined-partial.md", "--invalid"], 2],
  ] as const) {
    const process = Bun.spawn(["bun", "src/cli.ts", ...args], { stdout: "pipe", stderr: "pipe" });
    await Promise.all([new Response(process.stdout).text(), new Response(process.stderr).text()]);
    expect(await process.exited).toBe(exit);
  }
});
test("prelude failures prevent library use without guessing undeclared signatures", () => {
  expect(compilePrelude({ file: "bad-prelude.md", text: "```text\nD(c)=c\n```\n" }).diagnostics[0].code).toBe("E_FORMULA_SYNTAX");
});

test("CLI prints setter messages and locations, reserving parser detail for JSON", async () => {
  for (const json of [false, true]) {
    const process = Bun.spawn(["bun", "src/cli.ts", "lint", "tests/invalid/rules/duplicate-header-key.md", ...(json ? ["--json"] : [])], { stdout: "pipe", stderr: "pipe" });
    const [stdout, stderr] = await Promise.all([new Response(process.stdout).text(), new Response(process.stderr).text()]);
    expect(await process.exited).toBe(1);
    if (json) {
      const error = JSON.parse(stdout).diagnostics[0];
      expect(error.message).toBe("kind appears twice; keep just one entry for it.");
      expect(error.detail).toStartWith("DUPLICATE_KEY:");
      expect(error.span.start).toEqual({ offset: 81, line: 5, column: 1 });
    } else {
      expect(stderr).toBe("tests/invalid/rules/duplicate-header-key.md:5:1 E_FORMULA_SYNTAX: kind appears twice; keep just one entry for it.\n");
      expect(stderr).not.toContain("DUPLICATE_KEY");
    }
  }
});


test("default lint:spec checks the library and finds no case files", async () => {
  const process = Bun.spawn(["bun", "run", "lint:spec"], { stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr] = await Promise.all([new Response(process.stdout).text(), new Response(process.stderr).text()]);
  expect(await process.exited).toBe(0);
  expect(stderr).not.toContain("E_");
  expect(stdout).toContain("113/113 pages checked; 105 formula blocks");
  expect(stdout).toContain("Cases: 0 headers/reference lists; 0 references; 0 deferred URLs");
}, 60_000);

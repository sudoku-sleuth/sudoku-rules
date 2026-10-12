// Read-only migration audit; caller supplies source directories. Never rewrites library pages.
import { createHash } from "node:crypto";
import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { basename, join } from "node:path";
import { compilePage, compilePrelude, formulaBlocks, parseFormula, parsePrelude } from "../src/index";

const [libraryDirectory, specDirectory, output = "docs/reports/slice-1-source-audit"] = process.argv.slice(2);
if (!libraryDirectory || !specDirectory) throw new Error("Usage: bun scripts/audit-language.ts <library-rules-dir> <spec-dir> [output-prefix]");
const started = performance.now();
const preludeSource = { file: "spec/prelude.md", text: await readFile("spec/prelude.md", "utf8") };
const prelude = compilePrelude(preludeSource);
if (!prelude.value) throw new Error(JSON.stringify(prelude.diagnostics));
const pages = [];
for (const [label, directory] of [["library/rules", libraryDirectory], ["source-spec", specDirectory]]) {
  for (const name of (await readdir(directory)).sort()) {
    if (!name.endsWith(".md") || ["AGENTS.md", "CLAUDE.md", "README.md"].includes(name)) continue;
    const path = join(directory, name);
    if (!(await stat(path)).isFile()) continue;
    const bytes = await readFile(path);
    const page = { file: `${label}/${name}`, text: bytes.toString("utf8") };
    const isPrelude = name === "predicates.md";
    const blocks = formulaBlocks(page);
    const parsed = blocks.map(block => {
      const result = isPrelude ? parsePrelude(block.text, block) : parseFormula(block.text, block);
      return { start: block.offset, length: block.text.length, closed: block.closed, parsed: !!result.value && block.closed, diagnostics: result.diagnostics };
    });
    const compiled = isPrelude ? compilePrelude(page) : compilePage(page, prelude.value);
    pages.push({ file: page.file, sha256: createHash("sha256").update(bytes).digest("hex"), blocks: parsed, checked: !!compiled.value, diagnostics: compiled.diagnostics });
  }
}
const missingSourceDefinitions = [];
for (const name of ["predicates.md", "logic.md"]) {
  try { await stat(join(specDirectory, name)); } catch { missingSourceDefinitions.push(`source-spec/${name}`); }
}
const counts = {
  pages: pages.length,
  formulaBlocks: pages.reduce((n, p) => n + p.blocks.length, 0),
  parsedBlocks: pages.reduce((n, p) => n + p.blocks.filter(b => b.parsed).length, 0),
  checkedPages: pages.filter(p => p.checked).length,
  diagnostics: pages.reduce((n, p) => n + p.diagnostics.length, 0),
};
const report = { languageVersion: "0.1", sourceLabels: { library: "rules-library/rules (read-only)", spec: "docs/spec/rules (read-only)" }, preludeHash: createHash("sha256").update(preludeSource.text).digest("hex"), missingSourceDefinitions, counts, pages };
await mkdir("docs/reports", { recursive: true });
await writeFile(`${output}.json`, JSON.stringify(report, null, 2) + "\n");
const lines = [
  "# Slice 1 source audit", "",
  "Read-only audit of the supplied specification and generated library. Paths below are source labels, not copied public content. Exact content hashes, every fenced formula block and the full ordered diagnostics (including end spans) are in the [JSON report](" + basename(output) + ".json).", "",
  `${counts.pages} pages; ${counts.formulaBlocks} formula blocks; ${counts.parsedBlocks} blocks parse; ${counts.checkedPages} pages fully compile; ${counts.diagnostics} diagnostics.`, "",
  "The source specification's seven shape pages are prose contracts without executable formula fences or typed front matter. Its predicates.md and logic.md are absent. Library parameter descriptions/defaults need explicit types. Its existing prelude equations need signatures and executable bindings. Unsupported prose, implicit domains and indexed-family notation are rejected with source locations; no meaning is inferred from English.", "",
  "## Failures", "", "| Source page | Diagnostics (code @ line:column) |", "| --- | --- |",
];
for (const page of pages.filter(p => p.diagnostics.length)) lines.push(`| ${page.file} | ${page.diagnostics.map(d => `${d.code} @${d.span.start.line}:${d.span.start.column}`).join("; ")} |`);
lines.push("", "The audit is a migration report, not an acceptance waiver. Publishable rule pages must pass the formula checker. Case syntax, URL resolution and example verdicts belong to later slices and were not checked here.", "");
await writeFile(`${output}.md`, lines.join("\n"));
console.log(JSON.stringify({ ...counts, elapsedMs: Math.round(performance.now() - started), output }));
process.exitCode = counts.diagnostics ? 1 : 0;

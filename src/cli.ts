#!/usr/bin/env node
import { readFile, readdir, realpath, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { compilePage, compilePrelude, formulaBlocks, type PageSource, type Diagnostic } from "./index.js";

export interface LintReport { phase: "formula"; files: number; formulas: number; checked: number; diagnostics: Diagnostic[]; pending: string[] }
async function filesAt(target: string): Promise<string[]> {
  const info = await stat(target);
  if (info.isFile()) return [target];
  const entries = await readdir(target, { withFileTypes: true });
  const children: string[] = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (["node_modules", "dist", "_site", ".git", ".agents", ".claude-plugin", "plugins", "tests", "docs"].includes(entry.name)) continue;
    const child = join(target, entry.name);
    if (entry.isDirectory()) children.push(...await filesAt(child));
    else if (entry.isFile() && entry.name.endsWith(".md") && !["AGENTS.md", "CLAUDE.md", "README.md"].includes(entry.name)) children.push(child);
  }
  return children;
}
export async function lintFiles(target: string, preludeFile = resolve(dirname(fileURLToPath(import.meta.url)), "../spec/prelude.md")): Promise<LintReport> {
  const preludeSource: PageSource = { file: preludeFile, text: await readFile(preludeFile, "utf8") };
  const prelude = compilePrelude(preludeSource);
  const report: LintReport = { phase: "formula", files: 0, formulas: 0, checked: 0, diagnostics: [...prelude.diagnostics], pending: ["rule-line validation", "URL resolution", "example evaluation"] };
  const files = await filesAt(target);
  for (const file of files) {
    const page: PageSource = { file, text: await readFile(file, "utf8") };
    // Case syntax and Markdown prose are outside this slice. They are never reported as checked.
    if (file.endsWith(".rules.md")) continue;
    report.files++; report.formulas += formulaBlocks(page).length;
    const result = resolve(file) === resolve(preludeFile) || file.endsWith("/predicates.md") ? compilePrelude(page) : prelude.value ? compilePage(page, prelude.value) : { diagnostics: [] };
    report.diagnostics.push(...result.diagnostics);
    if (result.value) report.checked++;
  }
  return report;
}
export async function main(args: string[]): Promise<number> {
  if (args[0] === "--help" || args[0] === "help") {
    console.log("Usage: openrules lint <file-or-directory> [--prelude file] [--json]\nSlice 1 checks formula syntax, signatures, names, types and exact constant arithmetic. Rule lines, URL loading and example evaluation follow in later slices."); return 0;
  }
  if (args[0] !== "lint" || !args[1] || args.slice(2).some((arg, index, rest) => arg !== "--json" && arg !== "--prelude" && rest[index - 1] !== "--prelude") || args.includes("--prelude") && !args[args.indexOf("--prelude") + 1]) {
    console.error("Usage: openrules lint <file-or-directory> [--prelude file] [--json]"); return 2;
  }
  try {
    const prelude = args.includes("--prelude") ? args[args.indexOf("--prelude") + 1] : undefined;
    const report = await lintFiles(args[1], prelude);
    if (args.includes("--json")) console.log(JSON.stringify(report, null, 2));
    else {
      for (const diagnostic of report.diagnostics) console.error(`${diagnostic.span.file}:${diagnostic.span.start.line}:${diagnostic.span.start.column} ${diagnostic.code}: ${diagnostic.message}`);
      console.log(`Formula lint: ${report.checked}/${report.files} pages checked; ${report.formulas} formula blocks. Pending: ${report.pending.join(", ")}.`);
    }
    return report.diagnostics.length ? 1 : 0;
  } catch (error) { console.error(error instanceof Error ? error.message : String(error)); return 2; }
}
// npm exposes this file through a symlink; compare real paths so that binary runs too.
if (process.argv[1] && await realpath(process.argv[1]).catch(() => "") === fileURLToPath(import.meta.url)) process.exitCode = await main(process.argv.slice(2));

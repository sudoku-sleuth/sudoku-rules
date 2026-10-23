#!/usr/bin/env node
import { readFile, readdir, realpath, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { checkCaseReferences, compilePublicLibrary, compilePage, compilePrelude, formulaBlocks, type PageSource, type Diagnostic } from "./index.js";
import { libraryOverlap } from "./overlap.js";
import { declarationLibrary } from "./declaration-library.js";
export interface LintReport {
    phase: "formula";
    files: number;
    formulas: number;
    checked: number;
    diagnostics: Diagnostic[];
    pending: string[];
    cases?: number;
    references?: number;
    aliases?: number;
    documents?: number;
    deferredReferences?: number;
}
async function filesAt(target: string): Promise<string[]> {
    const info = await stat(target);
    if (info.isFile())
        return [target];
    const entries = await readdir(target, { withFileTypes: true });
    const children: string[] = [];
    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
        if (["node_modules", "dist", "_site", ".git", ".agents", ".claude-plugin", "plugins", "tests", "docs"].includes(entry.name))
            continue;
        const child = join(target, entry.name);
        if (entry.isDirectory())
            children.push(...await filesAt(child));
        else if (entry.isFile() && entry.name.endsWith(".md") && !["AGENTS.md", "CLAUDE.md", "README.md"].includes(entry.name))
            children.push(child);
    }
    return children;
}
async function lintFormulaFiles(target: string, preludeFile = resolve(dirname(fileURLToPath(import.meta.url)), "../rules/predicates.md")): Promise<LintReport> {
    const preludeSource: PageSource = { file: preludeFile, text: await readFile(preludeFile, "utf8") };
    const prelude = compilePrelude(preludeSource);
    const report: LintReport = { phase: "formula", files: 0, formulas: 0, checked: 0, diagnostics: [...prelude.diagnostics], pending: ["URL resolution", "example evaluation"] };
    const files = await filesAt(target);
    for (const file of files) {
        const page: PageSource = { file, text: await readFile(file, "utf8") };
        if (file.endsWith(".rules.md")) {
            if (prelude.value) {
                const result = checkCaseReferences(page, {...declarationLibrary, prelude: prelude.value});
                report.diagnostics.push(...result.diagnostics);
                report.cases = (report.cases ?? 0) + (result.value ? 1 : 0);
                report.references = (report.references ?? 0) + (result.value?.references.length ?? 0);
                report.deferredReferences = (report.deferredReferences ?? 0) + (result.value?.deferred.length ?? 0);
            }
            continue;
        }
        report.files++;
        report.formulas += formulaBlocks(page).length;
        const result = resolve(file) === resolve(preludeFile) || file.endsWith("/predicates.md") ? compilePrelude(page) : prelude.value ? compilePage(page, prelude.value) : { diagnostics: [] };
        report.diagnostics.push(...result.diagnostics);
        if (result.value)
            report.checked++;
    }
    return report;
}
export async function lintFiles(target: string, preludeFile?: string): Promise<LintReport> {
    const info = await stat(target);
    if (preludeFile)
        return lintFormulaFiles(target, preludeFile);
    const folder = info.isDirectory() ? target : dirname(target);
    const exists = (file: string) => stat(file).then(info => info.isFile()).catch(() => false);
    let libraryFolder = folder;
    let casePaths: string[] | undefined;
    if (!await exists(join(libraryFolder, "predicates.md"))) {
        if (await exists(join(folder, "rules/predicates.md"))) {
            libraryFolder = join(folder, "rules");
            casePaths = await filesAt(join(folder, "cases")).catch(error => { if (error.code === "ENOENT")
                return []; throw error; });
        }
        else {
            const files = info.isFile() ? [target] : await filesAt(target);
            casePaths = files.filter(file => file.endsWith(".rules.md"));
            if (!casePaths.length)
                return lintFormulaFiles(target);
            libraryFolder = resolve(dirname(fileURLToPath(import.meta.url)), "../rules");
        }
    }
    const paths = await filesAt(libraryFolder);
    if (await exists(join(libraryFolder,"README.md"))) paths.push(join(libraryFolder,"README.md"));
    const pages = await Promise.all(paths.filter(file => !file.endsWith(".rules.md")).map(async (file) => ({ file, text: await readFile(file, "utf8") })));
    const library = compilePublicLibrary(pages);
    const report: LintReport = { phase: "formula", files: pages.length, formulas: pages.reduce((n, page) => n + formulaBlocks(page).length, 0), checked: library.value ? pages.length : 0, diagnostics: library.diagnostics, pending: ["URL resolution", "example evaluation"], aliases: library.value?.aliases.size, documents: library.value?.documents, cases: 0, references: 0, deferredReferences: 0 };
    if (library.value) {
        casePaths ??= await filesAt(join(libraryFolder, "../cases")).catch(error => { if (error.code === "ENOENT")
            return []; throw error; });
        for (const file of casePaths.filter(file => file.endsWith(".rules.md"))) {
            const result = checkCaseReferences({ file, text: await readFile(file, "utf8") }, library.value.registry);
            report.diagnostics.push(...result.diagnostics);
            if (result.value) {
                report.cases!++;
                report.references! += result.value.references.length;
                report.deferredReferences! += result.value.deferred.length;
            }
        }
    }
    return report;
}
export async function main(args: string[]): Promise<number> {
    if (args[0] === "overlap") {
        let min = 0.35;
        for (let i = 1; i < args.length; i++) {
            if (args[i] === "--json") continue;
            if (args[i] === "--min" && args[i+1] !== undefined) {
                min = Number(args[++i]);
                if (Number.isFinite(min) && min >= 0 && min <= 1) continue;
            }
            console.error("Usage: openrules overlap [--min 0.35] [--json]");
            return 2;
        }
        try {
            const report = await libraryOverlap(resolve(dirname(fileURLToPath(import.meta.url)), "../rules"), min);
            if (args.includes("--json")) console.log(JSON.stringify(report, null, 2));
            else {
                console.log(`Overlap (depth ${report.depth}, minimum ${report.min}): ${JSON.stringify(report.counts)}`);
                console.log("Overlap across meanings:");
                for (const p of report.pairs.filter(p=>!p.sameBlock)) console.log(`${p.a.layer} ${p.a.name} / ${p.b.layer} ${p.b.name}: ${p.score.toFixed(4)}${p.exact ? " exact" : p.wrapper ? " wrapper" : ""}\n  ${p.shared}${p.reason ? `\n  ${p.reason}` : ""}`);
                console.log("Same block, different settings:");
                for(const p of report.pairs.filter(p=>p.sameBlock))console.log(`${p.a.name} / ${p.b.name} (${p.block}): ${JSON.stringify(p.settings)}`);
            }
            return 0;
        } catch (error) {
            console.error(error instanceof Error ? error.message : String(error));
            return 2;
        }
    }

    if (args[0] === "--help" || args[0] === "help") {
        console.log("Usage: openrules lint <file-or-directory> [--prelude file] [--json]\n       openrules overlap [--min 0.35] [--json]\nSlice 1 checks formula syntax, signatures, names, types and exact constant arithmetic. Case headers and known rule references are checked when a library is available. Case boards, givens, typed parameters and embedded definition references are checked. Custom formulas are checked. URL loading and example evaluation are separate phases.");
        return 0;
    }
    if (args[0] !== "lint" || !args[1] || args.slice(2).some((arg, index, rest) => arg !== "--json" && arg !== "--prelude" && rest[index - 1] !== "--prelude") || args.includes("--prelude") && !args[args.indexOf("--prelude") + 1]) {
        console.error("Usage: openrules lint <file-or-directory> [--prelude file] [--json]\n       openrules overlap [--min 0.35] [--json]");
        return 2;
    }
    try {
        const prelude = args.includes("--prelude") ? args[args.indexOf("--prelude") + 1] : undefined;
        const report = await lintFiles(args[1], prelude);
        if (args.includes("--json"))
            console.log(JSON.stringify(report, null, 2));
        else {
            for (const diagnostic of report.diagnostics)
                console.error(`${diagnostic.span.file}:${diagnostic.span.start.line}:${diagnostic.span.start.column} ${diagnostic.code}: ${diagnostic.message}`);
            console.log(`Formula lint: ${report.checked}/${report.files} pages checked; ${report.formulas} formula blocks.${report.cases !== undefined ? ` Cases: ${report.cases} headers/reference lists; ${report.references} references; ${report.deferredReferences} deferred URLs.` : ""} Pending: ${report.pending.join(", ")}.`);
        }
        return report.diagnostics.some(d => d.code !== "W_DECORATION_OVERLAP") ? 1 : 0;
    }
    catch (error) {
        console.error(error instanceof Error ? error.message : String(error));
        return 2;
    }
}
// npm exposes this file through a symlink; compare real paths so that binary runs too.
if (process.argv[1] && await realpath(process.argv[1]).catch(() => "") === fileURLToPath(import.meta.url))
    process.exitCode = await main(process.argv.slice(2));

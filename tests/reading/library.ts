import { readdir } from "node:fs/promises";
import { readingLibrary, type PageSource } from "../../src";

export const pages: PageSource[] = await Promise.all((await readdir("rules")).filter(name => name.endsWith(".md")).map(async name => ({ file: `rules/${name}`, text: await Bun.file(`rules/${name}`).text() })));
const built = readingLibrary(pages);
if (!built.value) throw new Error(JSON.stringify(built.diagnostics));
export const library = built.value;

const header = `---\nformat: open-rules\ntitle: Test\nsetter: Setter\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n`;
/** A case file with these rule lines and extra header fields. */
export function caseFile(rules: string[], extra = ""): string {
  return `${header}${extra}---\n\n\`\`\`rules\n${rules.join("\n")}\n\`\`\`\n`;
}
export const nonBlankRuleLines = (text: string): string[] =>
  [...text.matchAll(/^```rules\s*\n([\s\S]*?)^```\s*$/gm)].flatMap(m => m[1].split("\n")).filter(l => l.trim());

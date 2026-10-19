import { mkdir, mkdtemp, readFile, realpath, rm, stat, writeFile } from "node:fs/promises";
import { basename, dirname, join, resolve, sep } from "node:path";
import { tmpdir } from "node:os";
import { marked } from "marked";
import { frontMatter } from "./content";
import { lintYaml } from "./lint-yaml";

export function caseExamples(markdown: string) {
  return marked.lexer(markdown).flatMap(token => token.type === "code" && token.lang === "markdown" ? [token.text + "\n"] : []);
}

export async function lintSkill(skillDirectory = resolve(import.meta.dir, "../plugins/open-rules/skills/open-rules")) {
  const root = await realpath(skillDirectory);
  const entry = join(root, "SKILL.md");
  const raw = await readFile(entry, "utf8");
  const { metadata, body } = frontMatter(raw, entry);
  if (typeof metadata.name !== "string" || metadata.name !== basename(root) || metadata.name.length > 64 || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(metadata.name)) {
    throw new Error("Skill name must match its folder and use lowercase letters, digits, and single hyphens (at most 64 characters)");
  }
  if (typeof metadata.description !== "string" || !metadata.description.trim() || [...metadata.description].length >= 1024) {
    throw new Error("Skill description must be nonempty and under 1024 characters");
  }
  if (raw.trimEnd().split(/\r?\n/).length > 150) throw new Error("SKILL.md must stay under 150 lines");

  // Follow Markdown references on demand, checking every reachable local file.
  const queue = [{ file: entry, body }];
  const checked = new Set([entry]);
  for (const page of queue) {
    const links: string[] = [];
    marked.walkTokens(marked.lexer(page.body), token => {
      if (token.type === "link" && !/^(?:https?:|mailto:|#)/.test(token.href)) links.push(token.href);
    });
    for (const href of links) {
      const target = await realpath(resolve(dirname(page.file), href.split("#")[0])).catch(() => {
        throw new Error(`${page.file}: referenced file does not exist: ${href}`);
      });
      if (!target.startsWith(root + sep) || !(await stat(target)).isFile()) throw new Error(`${page.file}: reference must be a file inside the skill: ${href}`);
      if (!checked.has(target)) {
        checked.add(target);
        if (target.endsWith(".md")) queue.push({ file: target, body: await readFile(target, "utf8") });
      }
    }
  }

  const examplesFile = join(root, "references/examples.md");
  if (!checked.has(examplesFile)) throw new Error("SKILL.md must link to references/examples.md");
  const examples = caseExamples(await readFile(examplesFile, "utf8"));
  if (examples.length < 2 || examples.length > 4) throw new Error("examples.md must contain 2–4 complete fenced markdown case files");
  const temporary = await mkdtemp(join(tmpdir(), "open-rules-examples-"));
  try {
    await mkdir(join(temporary, "cases"));
    for (const [index, example] of examples.entries()) {
      await writeFile(join(temporary, "cases", `example-${index + 1}.rules.md`), example);
    }
    await lintYaml(temporary);
    // Run the stable specification-lint hook too, including after replacement.
    const checker = Bun.spawn([process.execPath, resolve(import.meta.dir, "lint-spec.ts"), temporary], {
      cwd: resolve(import.meta.dir, ".."), stdout: "pipe", stderr: "pipe",
    });
    const [stdout, stderr, exitCode] = await Promise.all([
      new Response(checker.stdout).text(), new Response(checker.stderr).text(), checker.exited,
    ]);
    if (exitCode !== 0) throw new Error(`Skill examples failed specification lint:\n${stdout}${stderr}`);
    return { references: checked.size - 1, examples: examples.length, specResult: stdout.trim() };
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
}

if (import.meta.main) {
  const result = await lintSkill(process.argv[2]);
  console.log(`Skill lint: ${result.references} references and ${result.examples} case examples checked`);
  console.log(`Skill examples only: ${result.specResult}`);
}

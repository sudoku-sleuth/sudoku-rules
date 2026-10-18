import { afterAll, beforeAll, expect, test } from "bun:test";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { caseExamples, lintSkill } from "../scripts/lint-skill";
import { frontMatter } from "../scripts/content";
import { lintYaml } from "../scripts/lint-yaml";

const repo = resolve(import.meta.dir, "..");
const skill = join(repo, "plugins/open-rules/skills/open-rules");
let temporary: string;
beforeAll(async () => { temporary = await mkdtemp(join(tmpdir(), "open-rules-skill-test-")); });
afterAll(async () => { await rm(temporary, { recursive: true, force: true }); });

test("the distributed skill's references and all three case examples pass repository lint", async () => {
  const result = await lintSkill(skill);
  expect(result.references).toBe(5);
  expect(result.examples).toBe(3);
});

test("examples extraction retains nested rules and custom definitions", async () => {
  const examples = caseExamples(await readFile(join(skill, "references/examples.md"), "utf8"));
  expect(examples).toHaveLength(3);
  for (const example of examples) {
    expect(frontMatter(example, "example.rules.md").metadata.format).toBe("open-rules");
    expect(example).toContain("```rules\nsudoku 9x9\n");
    expect(example).toContain("## Setter wording");
  }
  expect(examples[2]).toContain("```custom-rules\n");
  expect(examples[2]).toContain("D(line[2]) = D(line[0]) + 2 × D(line[1])");
});

test("skill lint rejects missing front matter, wrong name, empty and oversized descriptions", async () => {
  const raw = await readFile(join(skill, "SKILL.md"), "utf8");
  const cases = [
    { raw: "# No front matter\n", error: "missing YAML front matter" },
    { raw: raw.replace("name: open-rules", "name: different-name"), error: "Skill name must match its folder" },
    { raw: raw.replace(/^description:.*$/m, 'description: ""'), error: "Skill description must be nonempty" },
    { raw: raw.replace(/^description:.*$/m, `description: ${"x".repeat(1024)}`), error: "under 1024 characters" },
  ];
  for (const [index, invalid] of cases.entries()) {
    const directory = join(temporary, `metadata-${index}`, "open-rules");
    await cp(skill, directory, { recursive: true });
    await writeFile(join(directory, "SKILL.md"), invalid.raw);
    await expect(lintSkill(directory)).rejects.toThrow(invalid.error);
  }
});

test("skill lint rejects a missing reference and a broken case example", async () => {
  const missing = join(temporary, "missing-reference/open-rules");
  await cp(skill, missing, { recursive: true });
  await rm(join(missing, "references/terms.md"));
  await expect(lintSkill(missing)).rejects.toThrow("referenced file does not exist");

  const invalid = join(temporary, "invalid-example/open-rules");
  await cp(skill, invalid, { recursive: true });
  const examplesPath = join(invalid, "references/examples.md");
  await writeFile(examplesPath, (await readFile(examplesPath, "utf8")).replace("setter: Example Setter\n", ""));
  await expect(lintSkill(invalid)).rejects.toThrow("setter must be a string");
});

test("YAML lint accepts a single case or rule file and rejects malformed files", async () => {
  expect(await lintYaml(join(repo, "tests/fixtures/cases/to-the-revolution.rules.md"))).toBe(1);
  expect(await lintYaml(join(repo, "tests/fixtures/rules/thermo.md"))).toBe(1);
  const invalid = join(temporary, "invalid.rules.md");
  await writeFile(invalid, "---\nformat: open-rules\n---\n");
  await expect(lintYaml(invalid)).rejects.toThrow("title must be a string");
});

test("marketplace routes its sole plugin to the bundled skill directory", async () => {
  const marketplace = JSON.parse(await readFile(join(repo, ".claude-plugin/marketplace.json"), "utf8"));
  expect(marketplace.name).toBe("sudoku-rules");
  expect(marketplace.plugins).toHaveLength(1);
  const entry = marketplace.plugins[0];
  expect(entry.name).toBe("open-rules");
  const pluginRoot = resolve(repo, entry.source);
  const plugin = JSON.parse(await readFile(join(pluginRoot, ".claude-plugin/plugin.json"), "utf8"));
  expect(plugin.name).toBe(entry.name);
  expect(plugin.skills).toEqual(["./skills/"]);
  expect(await Bun.file(join(pluginRoot, plugin.skills[0], "open-rules/SKILL.md")).exists()).toBe(true);
});

test("Codex and Claude marketplaces use the same plugin folder and skill", async () => {
  // An explicit override also lets the owner validate a staged manifest before placement.
  const codexPath = process.env.OPEN_RULES_CODEX_MARKETPLACE ?? join(repo, ".agents/plugins/marketplace.json");
  const codex = JSON.parse(await readFile(codexPath, "utf8"));
  const claude = JSON.parse(await readFile(join(repo, ".claude-plugin/marketplace.json"), "utf8"));
  expect(codex.name).toBe("sudoku-rules");
  expect(codex.plugins).toHaveLength(1);
  const entry = codex.plugins[0];
  expect(entry.name).toBe("open-rules");
  expect(entry.source).toEqual({ source: "local", path: "./plugins/open-rules" });
  expect(entry.policy).toEqual({ installation: "AVAILABLE", authentication: "ON_INSTALL" });
  expect(entry.category).toBe("Productivity");
  expect(entry.source.path).toBe(claude.plugins[0].source);
  const pluginRoot = resolve(repo, entry.source.path);
  const plugin = JSON.parse(await readFile(join(pluginRoot, ".codex-plugin/plugin.json"), "utf8"));
  expect(plugin.name).toBe(entry.name);
  expect(plugin.skills).toBe("./skills/");
  expect(resolve(pluginRoot, plugin.skills, "open-rules")).toBe(skill);
});

test("all manifests and package metadata identify Sudoku Sleuth consistently", async () => {
  const codexPath = process.env.OPEN_RULES_CODEX_MARKETPLACE ?? join(repo, ".agents/plugins/marketplace.json");
  const marketplaceFiles = [join(repo, ".claude-plugin/marketplace.json"), codexPath];
  const documents = await Promise.all([
    join(repo, "package.json"),
    join(repo, "plugins/open-rules/.claude-plugin/plugin.json"),
    join(repo, "plugins/open-rules/.codex-plugin/plugin.json"),
    ...marketplaceFiles,
  ].map(async file => JSON.parse(await readFile(file, "utf8"))));
  const author = { name: "Sudoku Sleuth", email: "setters@sudoku-sleuth.com" };
  for (const [index, document] of documents.entries()) {
    const metadata = index < 3 ? document : document.plugins[0];
    expect(metadata.author).toEqual(author);
    expect(metadata.homepage).toBe("https://rules.sudoku-sleuth.com/");
    expect(metadata.repository).toBe("https://github.com/sudoku-sleuth/sudoku-rules");
    expect(metadata.license).toBe("MIT");
    if (index >= 3) expect(document.owner).toEqual({ ...author, url: metadata.homepage });
  }
});


test("skill checker labels its temporary case counts as examples only", async () => {
  const process = Bun.spawn(["bun", "run", "lint:skill"], { cwd: repo, stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr] = await Promise.all([new Response(process.stdout).text(), new Response(process.stderr).text()]);
  expect(await process.exited).toBe(0);
  expect(stderr).not.toContain("E_");
  expect(stdout).toContain("Skill examples only: Formula lint:");
  expect(stdout).toContain("Cases: 3 headers/reference lists; 11 references; 0 deferred URLs");
  expect(stdout).not.toMatch(/^Formula lint:/m);
});

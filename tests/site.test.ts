import { afterAll, beforeAll, expect, test, setDefaultTimeout } from "bun:test";

import { mkdtemp, readFile, readdir, rm, writeFile, mkdir, symlink } from "node:fs/promises";
import { join, resolve } from "node:path";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import { buildSite } from "../scripts/build";
import { frontMatter, renderMarkdown, ruleShape, summary } from "../scripts/content";
import { lintYaml } from "../scripts/lint-yaml";

// These tests build the whole library (86 pages, 3,892 cases); allow for slower CI runners.
setDefaultTimeout(30_000);

const fixtures = resolve(import.meta.dir, "fixtures");
let temporary: string;
let output: string;
beforeAll(async () => {
  temporary = await mkdtemp(join(tmpdir(), "open-rules-test-"));
  output = join(temporary, "site");
  await buildSite(fixtures, output);
});
afterAll(async () => { await rm(temporary, { recursive: true, force: true }); });

test("every raw page and case is byte-identical to its source", async () => {
  for (const slug of ["thermo", "modular", "renban", "predicates"]) {
    expect(await readFile(join(output, `${slug}.md`))).toEqual(await readFile(join(fixtures, "rules", `${slug}.md`)));
  }
  const file = "cases/to-the-revolution.rules.md";
  expect(await readFile(join(output, file))).toEqual(await readFile(join(fixtures, file)));
});

test("each rule and the shared definitions have an HTML page", async () => {
  for (const slug of ["thermo", "modular", "renban", "predicates"]) {
    const html = await readFile(join(output, slug, "index.html"), "utf8");
    expect(html).toContain("<h1 id=");
    expect(html).toContain(`href="/${slug}.md"`);
    expect(html).not.toContain("<script src=");
  }
  const thermo = await readFile(join(output, "thermo/index.html"), "utf8");
  expect(thermo).toContain("∀i ∈");
  expect(thermo).toContain("<table>");
  expect(thermo).toContain('<math xmlns="http://www.w3.org/1998/Math/MathML"');
  expect(thermo).toContain('class="language-markdown"');
  expect(thermo).toContain("Satisfies the rule:");
  expect(thermo).toContain('href="/predicates/"');
});

test("index lists every rule with meaning, class, shape, and shared definitions", async () => {
  const html = await readFile(join(output, "index.html"), "utf8");
  for (const slug of ["thermo", "modular", "renban"]) {
    const { body } = frontMatter(await readFile(join(fixtures, "rules", `${slug}.md`), "utf8"), slug);
    expect(html).toContain(`href="/${slug}/"`);
    expect(html).toContain(summary(body));
  }
  expect(html).toContain("first-order");
  expect(html).toContain("<h2>Lines</h2>");
  expect(html).toContain('href="/predicates/"');
});

test("build writes Pages metadata and rebuild removes stale output", async () => {
  expect(await readFile(join(output, "CNAME"), "utf8")).toBe("rules.sudoku-sleuth.com\n");
  expect(await readFile(join(output, ".nojekyll"), "utf8")).toBe("");
  await writeFile(join(output, "stale.md"), "old rule");
  await buildSite(fixtures, output);
  expect(await Bun.file(join(output, "stale.md")).exists()).toBe(false);
});

test("source HTML and executable links cannot introduce scripts", () => {
  const html = renderMarkdown('<script>alert(1)</script>\n\n[bad](javascript:alert)\n\n[good](https://example.com)');
  expect(html).not.toContain("<script>");
  expect(html).not.toContain('href="javascript:');
  expect(html).toContain('href="https://example.com"');
});

test("headings support fragment links and duplicate heading names", () => {
  const html = renderMarkdown("## Maths\n\n## Maths\n\n[Formula](#maths)");
  expect(html).toContain('id="maths"');
  expect(html).toContain('id="maths-1"');
  expect(html).toContain('href="#maths"');
});

test("shape grouping follows parameters and accepts explicit shape", () => {
  expect(ruleShape({ parameters: { line: {} } })).toBe("Lines");
  expect(ruleShape({ parameters: { ray: {} } })).toBe("Outside");
  expect(ruleShape({ kind: "cage", parameters: { cells: {} } })).toBe("Cages");
  expect(ruleShape({ shape: "Edges", parameters: { line: {} } })).toBe("Edges");
});

test("index rule has its own route without overwriting the library homepage", async () => {
  const source = join(temporary, "index-rule");
  await mkdir(join(source, "rules"), { recursive: true });
  await writeFile(join(source, "rules/index.md"), "---\nname: Index\nkind: index\nurl: https://rules.sudoku-sleuth.com/index.md\n---\n# Index\n\nA digit points to its own position.\n");
  const result = await buildSite(source, join(temporary, "index-site"));
  expect(await readFile(join(result.output, "index.html"), "utf8")).toContain('href="/index/"');
  expect(await readFile(join(result.output, "index/index.html"), "utf8")).toContain('<h1 id="index">Index</h1>');
  expect(await readFile(join(result.output, "index.md"))).toEqual(await readFile(join(source, "rules/index.md")));
});

test("case reading view preserves attribution and points to its unchanged raw file", async () => {
  const html = await readFile(join(output, "cases/to-the-revolution/index.html"), "utf8");
  expect(html).toContain("John Laurens");
  expect(html).toContain('href="/cases/to-the-revolution.rules.md"');
  expect(html).toContain('class="language-rules"');
});

test("MathML preserves complete cell names and cannot inject source HTML", () => {
  const html = renderMarkdown('```math\n|V(r1c4) − V(r1c5)| ≥ 5\n```');
  expect(html).toContain('mathvariant="italic">r1c4</mi>');
  expect(html).toContain('mathvariant="italic">r1c5</mi>');
  expect(html).not.toContain('<msub>');
  expect(html).toContain('<annotation encoding="text/plain">');
  expect(renderMarkdown('```math\n<script>alert(1)</script>\n```')).not.toContain('<script>');
});

test("front matter lint parses the approved fixtures and rejects duplicate keys", async () => {
  expect(await lintYaml(fixtures)).toBe(5);
  expect(() => frontMatter("---\nname: One\nname: Two\n---\n", "duplicate.md")).toThrow();
  expect(() => frontMatter("---\nname: [broken\n---\n", "invalid.md")).toThrow();
});

test("default source excludes fixtures", async () => {
  const source = join(temporary, "empty-source");
  await mkdir(join(source, "tests/fixtures/rules"), { recursive: true });
  await writeFile(join(source, "tests/fixtures/rules/thermo.md"), await readFile(join(fixtures, "rules/thermo.md")));
  const result = await buildSite(source, join(temporary, "empty-site"));
  expect(result.pages).toBe(0);
  expect(await Bun.file(join(result.output, "thermo.md")).exists()).toBe(false);
});

test("lint and build reject invalid page slugs and metadata consistently", async () => {
  const invalidPages = [
    { slug: "Bad_Name", metadata: "name: Invalid\nkind: Bad_Name", error: "invalid page slug" },
    { slug: "thermo.rules", metadata: "name: Invalid\nkind: thermo.rules", error: "invalid page slug" },
    ...["cases", "style"].map(slug => ({ slug, metadata: `name: Reserved\nkind: ${slug}`, error: "reserved page slug" })),
    { slug: "thermo", metadata: "name: Thermo\nkind: 42", error: "kind must be a string" },
    { slug: "thermo", metadata: "name: Thermo\nkind: false", error: "kind must be a string" },
    { slug: "thermo", metadata: "name: Thermo\nkind: null", error: "kind must be a string" },
    { slug: "thermo", metadata: 'name: Thermo\nkind: ""', error: "kind must match filename" },
    { slug: "thermo", metadata: "name: Thermo\nkind: modular", error: "kind must match filename" },
    { slug: "thermo", metadata: "kind: thermo", error: "name must be a nonempty string" },
    { slug: "thermo", metadata: 'name: " "\nkind: thermo', error: "name must be a nonempty string" },
    { slug: "thermo", metadata: "name: 42\nkind: thermo", error: "name must be a nonempty string" },
    { slug: "thermo", metadata: "name: Thermo\nkind: thermo", url: "https://example.com/thermo.md", error: "url must be" },
    { slug: "thermo", metadata: "name: Thermo\nkind: thermo", url: "https://rules.sudoku-sleuth.com/thermo", error: "url must be" },
  ];
  for (const [i, page] of invalidPages.entries()) {
    const source = join(temporary, `invalid-${i}`);
    await mkdir(join(source, "rules"), { recursive: true });
    await writeFile(join(source, "rules", `${page.slug}.md`), `---\n${page.metadata}\nurl: ${page.url ?? `https://rules.sudoku-sleuth.com/${page.slug}.md`}\n---\n# Example\n`);
    await expect(lintYaml(source)).rejects.toThrow(page.error);
    await expect(buildSite(source, join(temporary, `invalid-site-${i}`))).rejects.toThrow(page.error);
  }
});

test("symlinked rule and case files are skipped by lint and build", async () => {
  const source = join(temporary, "symlink-source");
  await mkdir(join(source, "rules"), { recursive: true });
  await mkdir(join(source, "cases"), { recursive: true });
  await writeFile(join(source, "rules/thermo.md"), await readFile(join(fixtures, "rules/thermo.md")));
  await symlink(join(fixtures, "rules/modular.md"), join(source, "rules/modular.md"));
  await symlink(join(fixtures, "cases/to-the-revolution.rules.md"), join(source, "cases/to-the-revolution.rules.md"));
  await symlink(join(temporary, "missing.md"), join(source, "rules/missing.md"));
  expect(await lintYaml(source)).toBe(1);
  const result = await buildSite(source, join(temporary, "symlink-site"));
  expect(result.pages).toBe(1);
  expect(result.cases).toBe(0);
  expect(await Bun.file(join(result.output, "thermo.md")).exists()).toBe(true);
  expect(await Bun.file(join(result.output, "modular.md")).exists()).toBe(false);
  expect(await Bun.file(join(result.output, "modular/index.html")).exists()).toBe(false);
  expect(await Bun.file(join(result.output, "cases/to-the-revolution.rules.md")).exists()).toBe(false);
});


test("index rule and alias routes coexist with the home catalogue", async () => {
  const source=join(temporary,"alias-source");
  await mkdir(join(source,"rules"),{recursive:true});
  for(const [slug,extra] of [["index",""],["cage",""],["killer","alias_of: cage\n"]]) {
    await writeFile(join(source,`rules/${slug}.md`),`---\nname: ${slug}\nkind: ${slug}\nurl: https://rules.sudoku-sleuth.com/${slug}.md\n${extra}---\n# ${slug}\n`);
  }
  expect(await lintYaml(source)).toBe(3);
  const built=await buildSite(source,join(temporary,"alias-site"));
  for(const slug of ["index","cage","killer"]) {
    expect(await readFile(join(built.output,`${slug}.md`))).toEqual(await readFile(join(source,`rules/${slug}.md`)));
    expect(await Bun.file(join(built.output,slug,"index.html")).exists()).toBe(true);
  }
  expect(await readFile(join(built.output,"index.html"),"utf8")).toContain('href="/index/"');
  expect(await readFile(join(built.output,"index/index.html"),"utf8")).toContain("<h1");
  await writeFile(join(source,"rules/killer.md"),(await readFile(join(source,"rules/killer.md"),"utf8")).replace("alias_of: cage","alias_of: absent"));
  await expect(lintYaml(source)).rejects.toThrow("must be an existing definition");
  await expect(buildSite(source,join(temporary,"alias-site"))).rejects.toThrow("must be an existing definition");
  expect(await Bun.file(join(built.output,"index/index.html")).exists()).toBe(true);
});

test("the full imported library and case collection have byte-identical public routes", async () => {
  const built=await buildSite(".",join(temporary,"production-site"));
  expect(built.pages).toBe(86);expect(built.cases).toBe(3892);
  const home=await readFile(join(built.output,"index.html"),"utf8");
  for(const name of await readdir("rules")) {
    if(!name.endsWith(".md"))continue;
    const slug=name.slice(0,-3);
    expect(await readFile(join(built.output,name))).toEqual(await readFile(join("rules",name)));
    expect(await Bun.file(join(built.output,slug,"index.html")).exists()).toBe(true);
    expect(home).toContain(`href="/${slug}/"`);
  }
  const names=await readdir("cases");
  for(let i=0;i<names.length;i+=32)await Promise.all(names.slice(i,i+32).filter(name=>name.endsWith(".rules.md")).map(async name=>{
    expect(await readFile(join(built.output,"cases",name))).toEqual(await readFile(join("cases",name)));
  }));
});

test("theme bootstrap is hash-authorised before the stylesheet on every reading surface", async () => {
  for (const route of ["index.html", "thermo/index.html", "cases/to-the-revolution/index.html"]) {
    const html = await readFile(join(output, route), "utf8");
    const script = /<script>([\s\S]*?)<\/script>/.exec(html)![1];
    const hash = createHash("sha256").update(script).digest("base64");
    expect(html).toContain(`'sha256-${hash}'`);
    expect(html.indexOf(`<script>${script}</script>`)).toBeLessThan(html.indexOf('<link rel="stylesheet"'));
    expect(html).toContain('aria-label="Colour theme"');
    for (const theme of ["light", "dark", "system"]) expect(html).toContain(`data-theme-choice="${theme}"`);
    expect(html).not.toContain("unsafe-inline");
  }
});

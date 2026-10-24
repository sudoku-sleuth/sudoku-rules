import { afterAll, beforeAll, expect, test } from "bun:test";

import { mkdtemp, readFile, readdir, rm, writeFile, mkdir, symlink, stat } from "node:fs/promises";
import { join, resolve, dirname } from "node:path";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import { buildSite } from "../scripts/build";
import { frontMatter, renderMarkdown, ruleShape, summary } from "../scripts/content";
import { lintYaml } from "../scripts/lint-yaml";



async function checkSiteLinks(root: string) {
  root=resolve(root); const files:string[]=[];
  async function walk(dir:string){for(const item of await readdir(dir,{withFileTypes:true})){const p=join(dir,item.name);if(item.isDirectory())await walk(p);else if(item.name.endsWith('.html'))files.push(p);}}
  await walk(root); const failures=new Set<string>();let count=0;
  for(const file of files){const html=await readFile(file,'utf8');for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    const href=m[1].replaceAll('&amp;','&');if(/^(?:https?:|mailto:|data:)/.test(href))continue;
    const [path,hash]=href.split('#'); const target=path?resolve(path.startsWith('/')?root:dirname(file),'.'+(path.startsWith('/')?path:'/'+path)):file;
    let destination=target;try{if((await stat(destination)).isDirectory())destination=join(destination,'index.html');await stat(destination);}catch{failures.add(`${file.slice(root.length)} → ${href}`);continue;}
    if(hash&&destination.endsWith('.html')){const text=await readFile(destination,'utf8');if(!text.includes(`id="${decodeURIComponent(hash)}"`))failures.add(`${file.slice(root.length)} → ${href} (missing fragment)`);}
    count++;
  }}return {pages:files.length,links:count,failures:[...failures]};
}

const fixtures = resolve(import.meta.dir, "fixtures");
let temporary: string;
let output: string;
beforeAll(async () => {
  temporary = await mkdtemp(join(tmpdir(), "open-rules-test-"));
  output = join(temporary, "site");
  await buildSite(fixtures, output);
});
afterAll(async () => { await rm(temporary, { recursive: true, force: true }); });

test("every raw page is byte-identical to its source", async () => {
  for (const slug of ["thermo", "modular", "renban", "predicates"]) {
    expect(await readFile(join(output, `${slug}.md`))).toEqual(await readFile(join(fixtures, "rules", `${slug}.md`)));
  }
  expect(await Bun.file(join(output, "cases")).exists()).toBe(false);
});

test("each rule and the shared definitions have an HTML page", async () => {
  for (const slug of ["thermo", "modular", "renban", "predicates"]) {
    const html = await readFile(join(output, slug, "index.html"), "utf8");
    expect(html).toContain("<h1 id=");
    expect(html).toContain(`href="/${slug}.md"`);
    expect(html).not.toContain('<script src="/library.js"');
    expect(html).toContain('<script src="/interactions.js" defer>');
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
  expect(await readFile(join(result.output, "index/index.html"), "utf8")).toContain('<h1 id="index"><span class="rule-heading">');
  expect(await readFile(join(result.output, "index.md"))).toEqual(await readFile(join(source, "rules/index.md")));
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

test("symlinked rule files are skipped by lint and build", async () => {
  const source = join(temporary, "symlink-source");
  await mkdir(join(source, "rules"), { recursive: true });
  await writeFile(join(source, "rules/thermo.md"), await readFile(join(fixtures, "rules/thermo.md")));
  await symlink(join(fixtures, "rules/modular.md"), join(source, "rules/modular.md"));
  await symlink(join(temporary, "missing.md"), join(source, "rules/missing.md"));
  expect(await lintYaml(source)).toBe(1);
  const result = await buildSite(source, join(temporary, "symlink-site"));
  expect(result.pages).toBe(1);
  expect(await Bun.file(join(result.output, "thermo.md")).exists()).toBe(true);
  expect(await Bun.file(join(result.output, "modular.md")).exists()).toBe(false);
  expect(await Bun.file(join(result.output, "modular/index.html")).exists()).toBe(false);
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

test("the full library has byte-identical public routes", async () => {
  const built=await buildSite(".",join(temporary,"production-site"));
  const baseline=await Bun.file("tests/fixtures/library-6d9e954.json").json();
  for(const page of baseline.pages){
    const slug=/^kind: (.+)$/m.exec(page.text)?.[1];
    if(!slug)continue;
    expect(await Bun.file(join(built.output,`${slug}.md`)).exists(),`Published Markdown route: ${slug}`).toBe(true);
    expect(await Bun.file(join(built.output,slug,"index.html")).exists(),`Published HTML route: ${slug}`).toBe(true);
  }
  expect(built.pages).toBe((await readdir("rules")).filter(n => n.endsWith(".md")).length);
  const icons: Record<string,string> = JSON.parse(await readFile("site/icons/rules.json","utf8"));
  for (const slug of ["kropki","bremban","slow-thermo","quadruple","anti-king","anti-knight"]) {
    const ownIcon=(await readFile(join("site/icons",icons[slug]),"utf8")).replace("<svg ",'<svg class="rule-icon" focusable="false" ');
    expect(await readFile(join(built.output,slug,"index.html"),"utf8")).toContain(ownIcon);
  }
  const home=await readFile(join(built.output,"index.html"),"utf8");
  const blocks = await readFile(join(built.output,"blocks/index.html"),"utf8");
  for(const name of await readdir("rules")) {
    if(!name.endsWith(".md"))continue;
    const slug=name.slice(0,-3);
    expect(await readFile(join(built.output,name))).toEqual(await readFile(join("rules",name)));
    expect(await Bun.file(join(built.output,slug,"index.html")).exists()).toBe(true);
    const {libraryLayers}=await import("../src/library-layers");
    const catalogue=libraryLayers[slug]==="block"?blocks:home;
    if(slug!=="index-count"&&slug!=="aggregate-relation")expect(catalogue).toContain(`href="/${slug}/"`);
  }
});

test("theme bootstrap is hash-authorised before the stylesheet on every reading surface", async () => {
  for (const route of ["index.html", "thermo/index.html"]) {
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

test("rule symbols cover the published page set and stay decorative and theme-aware", async () => {
  const icons: Record<string, string> = JSON.parse(await readFile("site/icons/rules.json", "utf8"));
  const slugs = (await readdir("rules")).filter(n => n.endsWith(".md")).map(n => n.slice(0,-3));
  const {libraryLayers}=await import('../src/library-layers');
  const rules=Object.keys(libraryLayers).filter(k=>libraryLayers[k]==='rule');
  expect(rules.filter(slug=>!icons[slug])).toEqual([]);
  expect(Object.keys(libraryLayers).filter(k=>libraryLayers[k]==='block'&&icons[k])).toEqual([]);
  for (const [slug, path] of Object.entries(icons)) {
    expect(slugs).toContain(slug);
    const svg = await readFile(join("site/icons", path), "utf8");
    expect(svg).toContain('aria-hidden="true"');
    expect(svg).toContain('stroke="currentColor"');
    expect(svg).not.toMatch(/<(title|desc|script)\b|\b(role|aria-label|style)=|#[0-9a-f]{3,8}\b/i);
    expect(await readFile(join(output, "icons", path), "utf8")).toBe(svg);
  }
  const home = await readFile(join(output, "index.html"), "utf8");
  expect(home).toContain('class="rule-name"><svg class="rule-icon" focusable="false" aria-hidden="true"');
  const page = await readFile(join(output, "thermo/index.html"), "utf8");
  expect(page).toContain('class="rule-heading"><svg class="rule-icon"');
  expect(await readFile("site/style.css", "utf8")).toContain('.rule-icon .accent { stroke: var(--blue); }');
});

test("production catalogue separates familiar rules, blocks and predicates",async()=>{
 const destination=join(temporary,'production');
 const built=await buildSite('.',destination);
 const home=await readFile(join(destination,'index.html'),'utf8');
 const blocks=await readFile(join(destination,'blocks/index.html'),'utf8');
 const aliases:Record<string,string[]>={
  regions:['regions','boxes','irregular regions','extra regions','disjoint','disjoint groups'],
  'parity-line':['parity'], 'odd-even-cells':['odd/even cells','parity cells','odd and even digits'], 'between-line':['between'],
  'diagonal-sum':['little killer'], 'whispers-5':['german whispers'], 'whispers-4':['dutch whispers'],
  arrow:['pill','pill arrow','arrow pill'],kropki:['white dot','black dot','kropki dots'],xv:['x and v','xv clues'],
 };
 for(const [kind,names]of Object.entries(aliases)){
  const search=home.match(new RegExp(`<tr data-rule data-search="([^"]+)"[^>]*><th scope="row"><a href="/${kind}/"`))?.[1];
  expect(search).toBeDefined();
  for(const name of names)expect(search).toContain(name);
 }
 for(const [oldKind,kind] of Object.entries({'extra-regions':'regions',parity:'parity-line','parity-cells':'odd-even-cells',between:'between-line'})){
  expect(await readFile(join(destination,`${oldKind}/index.html`),'utf8')).toContain(`href="/${kind}/"`);
  expect(await readFile(join(destination,`${oldKind}.md`),'utf8')).toBe(await readFile(`rules/${oldKind}.md`,'utf8'));
  const icons=JSON.parse(await readFile('site/icons/rules.json','utf8'));
  expect(icons[kind]).toBe(icons[oldKind]);
 }
 const links=await checkSiteLinks(destination);
 expect(links.failures).toEqual([]);
 expect(links.pages).toBeGreaterThan(built.pages);
 for(const route of ["rules","write","invent","build","how-it-works","predicate-guide"]) expect(await Bun.file(join(destination,route,"index.html")).exists()).toBe(true);
 const oldPage=await readFile(join(destination,'little-killer/index.html'),'utf8');
 expect(oldPage).toContain('href="/diagonal-sum/"');
 expect(await readFile(join(destination,'little-killer.md'),'utf8')).toBe(await readFile('rules/little-killer.md','utf8'));
 expect(home).toContain('href="/whispers/"');
 expect(home).toContain('href="/cage/"');
 expect(home).toContain('href="/regions/"');
 for(const alias of ['whisper','killer','unique'])expect(home).toContain(`href="/${alias}/"`);
 expect(home).toContain('href="/blocks/"');
 expect(home).not.toContain('href="/aggregate-equation/"');
 expect(home).not.toContain('href="/assignment/"');
 expect(blocks).toContain('href="/aggregate-equation/"');
 expect(blocks).toContain('href="/assignment/"');
 expect(blocks).toContain('href="/predicates/"');
 const rule=await readFile(join(destination,'whispers/index.html'),'utf8');
 expect(rule).toContain('Block:');expect(rule).toContain('href="/difference-line/"');
 const block=await readFile(join(destination,'difference-line/index.html'),'utf8');
 expect(block).not.toContain('class="rule-icon"');
});


test("catalogue totals and shape counts follow library additions at build time", async () => {
  const source=join(temporary,"growing-library");
  const destination=join(temporary,"growing-site");
  await mkdir(join(source,"rules"),{recursive:true});
  for(const kinds of [["first"],["first","second"]]) {
    for(const kind of kinds) await writeFile(join(source,`rules/${kind}.md`),`---\nname: ${kind}\nkind: ${kind}\nlayer: rule\nshape: Lines\nurl: https://rules.sudoku-sleuth.com/${kind}.md\n---\n# ${kind}\n\nAn example line.\n`);
    await buildSite(source,destination);
    const home=await readFile(join(destination,"index.html"),"utf8");
    const catalogue=await readFile(join(destination,"rules/index.html"),"utf8");
    expect(home).toContain(`Browse the library of ${kinds.length} rules.`);
    for(const html of [home,catalogue]) {
      expect(html).toContain(`Browse all ${kinds.length} rules`);
      expect(html).toContain(`Lines<small>${kinds.length}</small>`);
      expect(html).toContain("Cells<small>0</small>");
    }
    expect(catalogue).toContain(`${kinds.length} familiar meanings.`);
  }
});

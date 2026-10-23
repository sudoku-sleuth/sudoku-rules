import { cp, mkdir, rm, writeFile, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join, resolve, sep } from "node:path";
import { escapeHtml as e, markdownFiles, readPage, renderMarkdown, renderRuleLines, ruleShape, summary, validateAliases, validatePage } from "./content";
import { renderMath } from "./mathml";
const themeScript = await readFile(new URL("../site/theme.js", import.meta.url), "utf8");
const themeHash = createHash("sha256").update(themeScript).digest("base64");
const iconPaths: Record<string, string> = JSON.parse(await readFile(new URL("../site/icons/rules.json", import.meta.url), "utf8"));
const ruleIcons = new Map(await Promise.all(Object.entries(iconPaths).map(async ([slug, path]) =>
  [slug, (await readFile(new URL(`../site/icons/${path}`, import.meta.url), "utf8"))
    .replace("<svg ", '<svg class="rule-icon" focusable="false" ')] as const)));
const icon = (slug: string) => ruleIcons.get(slug) ?? "";
const github = "https://github.com/sudoku-sleuth/sudoku-rules";
const searchNames: Record<string, string[]> = {
  "close-whispers": ["shout-n"], index: ["159 indexing", "row indexing", "column indexing"],
  "window-classes": ["global entropy", "global modularity"], extremum: ["fortress", "minimum", "maximum"],
  "look-and-say": ["look-and-say diagonals"], "absent-digits": ["anti-quadruples"],
  "extra-regions": ["unique", "disjoint groups"], "constructed-regions": ["chaos construction"],
};
const shapes = ["Lines", "Edges", "Cells", "Cages", "Outside", "Regions", "Global"];
function document(title: string, content: string, raw?: string, home = false) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light dark"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self'; font-src 'self'; style-src 'self'; script-src 'self' 'sha256-${themeHash}'; base-uri 'none'; form-action 'none'"><script>${themeScript}</script><title>${e(title)} · Open Rules</title><link rel="stylesheet" href="/style.css">${home ? '<script src="/library.js" defer></script>' : ""}</head><body><a class="skip" href="#main">Skip to content</a><header class="site-header"><a class="brand" href="/"><img src="/mark.svg" width="48" height="62" alt=""><span>Open Rules<small>A section of Sudoku Sleuth’s Bureau</small></span></a><nav aria-label="Site">${raw ? `<a href="${e(raw)}">Read Markdown</a>` : ""}<a href="https://sudoku-sleuth.com/">Sudoku Sleuth ↗</a><a href="${github}">GitHub ↗</a></nav><div class="theme-control" role="group" aria-label="Colour theme" hidden><button type="button" data-theme-choice="light" aria-pressed="false">Light</button><button type="button" data-theme-choice="dark" aria-pressed="false">Dark</button><button type="button" data-theme-choice="system" aria-pressed="true">System</button></div></header><main id="main" class="${home ? "home" : "reading"}">${content}</main><footer><div>Part of Sudoku Sleuth <a href="https://sudoku-sleuth.com/">sudoku-sleuth.com →</a></div><div><a href="${github}/blob/main/LICENSE">MIT-licensed</a> · <a href="${github}/blob/main/CONTRIBUTING.md">Open to contributions</a><a href="${github}">GitHub ↗</a></div></footer></body></html>\n`;
}
function installs() {
  return `<div class="install"><div><h3>Claude Code</h3><pre><code>claude plugin marketplace add sudoku-sleuth/sudoku-rules\nclaude plugin install open-rules@sudoku-rules</code></pre></div><div><h3>Codex</h3><pre><code>codex plugin marketplace add sudoku-sleuth/sudoku-rules\ncodex plugin add open-rules@sudoku-rules</code></pre></div></div>`;
}
function writing() {
  return `<section class="contribute" aria-label="Use and contribute"><div><h2>Write a case file</h2><p>Give each rule a name and say where it applies. Use the checker and AI skill to help you write it.</p><div class="actions"><a href="/writing/#checker">Use the checker →</a><a href="/writing/#ai-skill">Use the AI skill →</a></div>${installs()}</div><div><h2>Propose a rule</h2><p>Add a rule definition and a worked case.<br>Open a pull request.</p><a href="/contributing/">Read the contribution guide →</a></div></section>`;
}
export async function buildSite(source = ".", output = "_site") {
  source = resolve(source); output = resolve(output);
  if (source === output || source.startsWith(output + sep) || output === join(source, "rules")) throw new Error("Output must be separate from source content");
  const pages = await Promise.all((await markdownFiles(source, "rules")).map(async file => { const page = await readPage(file); return { ...page, slug: validatePage(page.metadata, file) }; }));
  validateAliases(pages);
  // Validate before replacing the previous site.
  await rm(output, { recursive: true, force: true }); await mkdir(output, { recursive: true });
  const names = new Set(pages.map(page => page.slug));
  const bySlug = new Map(pages.map(page => [page.slug, page]));
  const definition = (page: typeof pages[number]) => bySlug.get(String(page.metadata.alias_of ?? page.metadata.aliasOf)) ?? page;
  for (const page of pages) {
    await writeFile(join(output, `${page.slug}.md`), page.bytes); await mkdir(join(output, page.slug), { recursive: true });
    const toc = [...page.body.matchAll(/^## (.+)$/gm)].map(match => `<li><a href="#${e(match[1].toLowerCase().replace(/[^\p{L}\p{N} -]/gu, "").trim().replace(/\s+/g, "-"))}">${e(match[1])}</a></li>`).join("");
    await writeFile(join(output, page.slug, "index.html"), document(String(page.metadata.name), `<div class="breadcrumbs"><a href="/">Library</a>${page.metadata.layer === "block" ? ` / <a href="/blocks/">Building blocks</a>` : page.metadata.kind ? ` / <a href="/#${ruleShape(page.metadata).toLowerCase()}">${ruleShape(page.metadata)}</a>` : ""}</div><div class="article-layout"><nav class="contents" aria-label="On this page"><strong>On this page</strong><ul>${toc}</ul><a href="/${page.slug}.md">Read Markdown</a></nav><article class="prose">${renderMarkdown(page.metadata.domain ? page.body.replace(/^(Class: \*\*[^*]+\*\*\.)$/m, `$1\n\nDomain: **${page.metadata.domain}**.`) : page.slug === "kropki" ? page.body.replace("A white relation joins values one apart. A black relation joins values where one is twice the other.", "White means a difference of 1; black means one is double the other.") : page.body, names).replace(/(<h1[^>]*>)([\s\S]*?)(<\/h1>)/, (_, open, title, close) => `${open}<span class="rule-heading">${page.metadata.layer === "block" ? "" : icon(page.slug) || icon(definition(page).slug)}<span>${title}</span></span>${close}`)}</article></div>`, `/${page.slug}.md`));
  }
  const libraryHome = await readFile(join(source, "rules/README.md")).catch(() => null);
  if (libraryHome) await writeFile(join(output, "README.md"), libraryHome);
  const canonical = pages.filter(page => typeof page.metadata.kind === "string" && (page.metadata.layer === "rule" || page.metadata.layer === undefined && page.metadata.alias_of === undefined && page.metadata.aliasOf === undefined)).sort((a, b) => String(a.metadata.name).localeCompare(String(b.metadata.name)));
  const groups = shapes.map(shape => {
    const rows = canonical.filter(page => ruleShape(page.metadata) === shape).map(page => {
      const aliases = pages.filter(alias => alias.metadata.equivalent_to === page.slug || alias.metadata.layer === undefined && (alias.metadata.alias_of ?? alias.metadata.aliasOf) === page.slug);
      const meaning = page.slug === "kropki" ? "White means a difference of 1; black means one is double the other." : summary(page.body);
      const keywords = [page.slug, page.metadata.name, meaning, ...(searchNames[page.slug] ?? []), ...aliases.flatMap(alias => [alias.slug, alias.metadata.name, summary(alias.body), ...(searchNames[alias.slug] ?? []), ...(alias.slug === "whispers" ? ["German whispers gap 5", "Dutch whispers gap 4"] : []), ...(alias.slug === "pair" ? ["XV dots difference ratio sum"] : [])]), ...(page.slug === "whispers" ? ["German whispers gap 5", "Dutch whispers gap 4"] : []), ...(page.slug === "pair" ? ["XV dots difference ratio sum"] : [])].join(" ");
      return `<tr data-rule data-search="${e(keywords.toLowerCase())}"><th scope="row"><a href="/${page.slug}/" class="rule-name">${icon(page.slug)}<span>${e(String(page.metadata.name))}</span></a><span class="kind">${page.slug}${aliases.length ? ` · also ${aliases.map(alias => `<a href="/${alias.slug}/">${alias.slug}</a>`).join(", ")}` : ""}</span></th><td>${renderMarkdown(meaning, names)}</td><td class="rule-class">${e(/Class:\s*\*\*([^*]+)\*\*/.exec(definition(page).body)?.[1] ?? "")}</td></tr>`;
    }).join("");
    return `<section class="rule-group" id="${shape.toLowerCase()}" data-group="${shape}"><h2>${shape}</h2><table><thead><tr><th scope="col">Rule</th><th scope="col">Meaning</th><th scope="col" class="rule-class">Class</th></tr></thead><tbody>${rows}</tbody></table></section>`;
  }).join("");
  const definitions = pages.filter(page => page.metadata.kind === undefined).map(page => `<li><a href="/${page.slug}/" class="rule-name">${icon(page.slug)}<span>${e(String(page.metadata.name))}</span></a></li>`).join("");
  await writeFile(join(output, "index.html"), document("Library", `<h1><span class="rule-heading">${icon("README")}<span>Open Rules</span></span></h1><p class="lede">Familiar Sudoku rules, built from shared constraints and mathematical predicates.</p><section class="featured" aria-label="A real rule example"><div><span class="eyebrow">Featured example</span>${renderRuleLines("whispers r1c4-r1c5 gap 5")}</div><div><div class="example-math">${renderMath("|V(r1c4) − V(r1c5)| ≥ 5")}</div><p>The values in row 1, columns 4 and 5 differ by at least five.</p><div class="example-credit"><span>From the <a href="/whispers/">whispers</a> rule</span></div></div></section><section class="library" aria-labelledby="library-title"><div class="library-heading"><h2 id="library-title">Browse the library</h2><div><a href="/syntax/">Rule-line syntax →</a><a href="/blocks/">Building blocks →</a><a href="/predicates/">Predicates →</a></div></div><div class="search-control" hidden><label for="rule-search">Search rules</label><input type="search" id="rule-search" placeholder="Search by name, keyword or syntax…" autocomplete="off"><p class="search-status" role="status" aria-live="polite"></p></div><nav class="shapes" aria-label="Browse by shape">${shapes.map(shape => `<a href="#${shape.toLowerCase()}" data-shape="${shape}"><img src="/icons/${shape.toLowerCase()}.svg" width="40" height="40" alt=""><span>${shape}</span></a>`).join("")}</nav><div class="rule-groups">${groups}</div><p class="no-results" hidden>No rules match. Try another name, keyword or shape.</p></section>${definitions ? `<section class="shared-definitions"><h2>Shared definitions</h2><ul>${definitions}</ul></section>` : ""}${writing()}`, undefined, true));
  const blocks = pages.filter(page => page.metadata.layer === "block").sort((a,b)=>String(a.metadata.name).localeCompare(String(b.metadata.name)));
  await mkdir(join(output, "blocks"), {recursive:true});
  await writeFile(join(output,"blocks/index.html"), document("Building blocks", `<div class="breadcrumbs"><a href="/">Library</a></div><article class="prose"><h1>Building blocks</h1><p>Blocks express reusable constraints using the <a href="/predicates/">mathematical predicates</a>. Familiar <a href="/">rules</a> bind their settings. Use a block directly in a case file to describe an unusual puzzle.</p><ul>${blocks.map(page=>`<li><a href="/${page.slug}/">${e(String(page.metadata.name))}</a> — ${e(summary(page.body))}</li>`).join("")}</ul></article>`));
  const contributing = await readFile(new URL("../CONTRIBUTING.md", import.meta.url), "utf8");
  await mkdir(join(output, "contributing"), { recursive: true });
  await writeFile(join(output, "contributing/index.html"), document("Propose a rule", `<div class="breadcrumbs"><a href="/">Library</a></div><article class="prose">${renderMarkdown(contributing, names)}<p><a href="${github}/compare">Open a pull request on GitHub →</a></p></article>`));
  const migration = await readFile(new URL("../docs/migration.md", import.meta.url), "utf8");
  await mkdir(join(output, "migration"), { recursive: true });
  await writeFile(join(output, "migration/index.html"), document("Upgrade a case file", `<div class="breadcrumbs"><a href="/">Library</a></div><article class="prose">${renderMarkdown(migration, names)}</article>`));
  await writeFile(join(output, "migration.md"), migration);
  await mkdir(join(output, "writing"), { recursive: true });
  await writeFile(join(output, "writing/index.html"), document("Write a case file", `<div class="breadcrumbs"><a href="/">Library</a></div><article class="prose"><h1>Write a case file</h1><p class="lede">Give each rule a name and say where it applies.</p><p>Declare the library root once, credit the setter and source, then write one line for each rule. <a href="/syntax/">Read the rule-line syntax</a> or <a href="/fog/">see a feature page</a>.</p><h2 id="checker">Use the checker</h2><p>From a checkout of <a href="${github}">Open Rules</a>, install dependencies and check a rule definition:</p><pre><code>bun install --frozen-lockfile\nbun run openrules lint rules/whispers.md</code></pre><p>The checker checks rule formulas. See the <a href="${github}#formula-package">checker documentation</a>.</p><p><a href="/migration/">Upgrade a 0.3 case file →</a></p><h2 id="ai-skill">Use the AI skill</h2><p>The Open Rules skill helps turn puzzle text and drawings into a case file, or draft a rule definition and pull-request description.</p>${installs()}<p>In Claude Code, invoke <code>/open-rules:open-rules</code>. In Codex, select the Open Rules skill or invoke <code>$open-rules</code>.</p></article>`));
  for (const asset of ["style.css", "library.js", "mark.svg", "icons", "fonts"]) await cp(new URL(`../site/${asset}`, import.meta.url), join(output, asset), { recursive: true });
  await writeFile(join(output, ".nojekyll"), ""); await writeFile(join(output, "CNAME"), "rules.sudoku-sleuth.com\n");
  return { pages: pages.length, output };
}
if (import.meta.main) {
  const args = process.argv.slice(2);
  if (args.length && (args[0] !== "--source" || args.length !== 2)) throw new Error("Usage: bun run build [--source folder]");
  const result = await buildSite(args[1] ?? "."); console.log(`Built ${result.pages} pages → ${result.output}`);
}

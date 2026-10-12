import { cp, mkdir, rm, writeFile, readFile } from "node:fs/promises";
import { basename, join, resolve, sep } from "node:path";
import { escapeHtml as e, markdownFiles, readPage, renderMarkdown, ruleShape, summary, validateAliases, validatePage } from "./content";
import { renderMath } from "./mathml";
const github = "https://github.com/sudoku-sleuth/sudoku-rules";
const shapes = ["Lines", "Edges", "Cells", "Cages", "Outside", "Regions", "Global"];
function document(title: string, content: string, raw?: string, home = false) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light dark"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src 'self'; font-src 'self'; style-src 'self'; script-src 'self'; base-uri 'none'; form-action 'none'"><title>${e(title)} · Open Rules</title><link rel="stylesheet" href="/style.css">${home ? '<script src="/library.js" defer></script>' : ""}</head><body><a class="skip" href="#main">Skip to content</a><header class="site-header"><a class="brand" href="/"><img src="/mark.svg" width="48" height="62" alt=""><span>Open Rules<small>A section of Sudoku Sleuth’s Bureau</small></span></a><nav aria-label="Site">${raw ? `<a href="${e(raw)}">Read Markdown</a>` : ""}<a href="https://sudoku-sleuth.com/">Sudoku Sleuth ↗</a><a href="${github}">GitHub ↗</a></nav></header><main id="main" class="${home ? "home" : "reading"}">${content}</main><footer><div>Part of Sudoku Sleuth <a href="https://sudoku-sleuth.com/">sudoku-sleuth.com →</a></div><div><a href="${github}/blob/main/LICENSE">MIT-licensed</a> · <a href="${github}/blob/main/CONTRIBUTING.md">Open to contributions</a><a href="${github}">GitHub ↗</a></div></footer></body></html>\n`;
}
function installs() {
  return `<div class="install"><div><h3>Claude Code</h3><pre><code>claude plugin marketplace add sudoku-sleuth/sudoku-rules\nclaude plugin install open-rules@sudoku-rules</code></pre></div><div><h3>Codex</h3><pre><code>codex plugin marketplace add sudoku-sleuth/sudoku-rules\ncodex plugin add open-rules@sudoku-rules</code></pre></div></div>`;
}
function writing() {
  return `<section class="contribute" aria-label="Use and contribute"><div><h2>Write a case file</h2><p>Give each rule a name and say where it applies. Use the checker and AI skill to help you write it.</p><div class="actions"><a href="/writing/#checker">Use the checker →</a><a href="/writing/#ai-skill">Use the AI skill →</a></div>${installs()}</div><div><h2>Propose a rule</h2><p>Add a rule definition and a worked case.<br>Open a pull request.</p><a href="/contributing/">Read the contribution guide →</a></div></section>`;
}
export async function buildSite(source = ".", output = "_site") {
  source = resolve(source); output = resolve(output);
  if (source === output || source.startsWith(output + sep) || output === join(source, "rules") || output === join(source, "cases")) throw new Error("Output must be separate from source content");
  const pages = await Promise.all((await markdownFiles(source, "rules")).map(async file => { const page = await readPage(file); return { ...page, slug: validatePage(page.metadata, file) }; }));
  validateAliases(pages);
  const cases = await markdownFiles(source, "cases", ".rules.md");
  const casePages = await Promise.all(cases.map(async file => ({ ...(await readPage(file)), slug: basename(file, ".rules.md") })));
  // Validate before replacing the previous site.
  await rm(output, { recursive: true, force: true }); await mkdir(output, { recursive: true });
  const names = new Set(pages.map(page => page.slug));
  const bySlug = new Map(pages.map(page => [page.slug, page]));
  const definition = (page: typeof pages[number]) => bySlug.get(String(page.metadata.alias_of ?? page.metadata.aliasOf)) ?? page;
  for (const page of pages) {
    await writeFile(join(output, `${page.slug}.md`), page.bytes); await mkdir(join(output, page.slug), { recursive: true });
    const toc = [...page.body.matchAll(/^## (.+)$/gm)].map(match => `<li><a href="#${e(match[1].toLowerCase().replace(/[^\p{L}\p{N} -]/gu, "").trim().replace(/\s+/g, "-"))}">${e(match[1])}</a></li>`).join("");
    await writeFile(join(output, page.slug, "index.html"), document(String(page.metadata.name), `<div class="breadcrumbs"><a href="/">Library</a>${page.metadata.kind ? ` / <a href="/#${ruleShape(definition(page).metadata).toLowerCase()}">${ruleShape(definition(page).metadata)}</a>` : ""}</div><div class="article-layout"><nav class="contents" aria-label="On this page"><strong>On this page</strong><ul>${toc}</ul><a href="/${page.slug}.md">Read Markdown</a></nav><article class="prose">${renderMarkdown(page.slug === "kropki" ? page.body.replace("A white relation joins values one apart. A black relation joins values where one is twice the other.", "White means a difference of 1; black means one is double the other.") : page.body, names)}</article></div>`, `/${page.slug}.md`));
  }
  const libraryHome = await readFile(join(source, "rules/README.md")).catch(() => null);
  if (libraryHome) await writeFile(join(output, "README.md"), libraryHome);
  const canonical = pages.filter(page => typeof page.metadata.kind === "string" && page.metadata.alias_of === undefined && page.metadata.aliasOf === undefined).sort((a, b) => String(a.metadata.name).localeCompare(String(b.metadata.name)));
  const groups = shapes.map(shape => {
    const rows = canonical.filter(page => ruleShape(page.metadata) === shape).map(page => {
      const aliases = pages.filter(alias => (alias.metadata.alias_of ?? alias.metadata.aliasOf) === page.slug);
      const meaning = page.slug === "kropki" ? "White means a difference of 1; black means one is double the other." : summary(page.body);
      const keywords = [page.slug, page.metadata.name, meaning, ...aliases.map(alias => alias.slug), ...(page.slug === "whispers" ? ["German whispers gap 5", "Dutch whispers gap 4"] : []), ...(page.slug === "pair" ? ["XV dots difference ratio sum"] : [])].join(" ");
      return `<tr data-rule data-search="${e(keywords.toLowerCase())}"><th scope="row"><a href="/${page.slug}/">${e(String(page.metadata.name))}</a><span class="kind">${page.slug}${aliases.length ? ` · alias ${aliases.map(alias => `<a href="/${alias.slug}/">${alias.slug}</a>`).join(", ")}` : ""}</span></th><td>${renderMarkdown(meaning, names)}</td><td class="rule-class">${e(/Class:\s*\*\*([^*]+)\*\*/.exec(page.body)?.[1] ?? "")}</td></tr>`;
    }).join("");
    return `<section class="rule-group" id="${shape.toLowerCase()}" data-group="${shape}"><h2>${shape}</h2><table><thead><tr><th scope="col">Rule</th><th scope="col">Meaning</th><th scope="col" class="rule-class">Class</th></tr></thead><tbody>${rows}</tbody></table></section>`;
  }).join("");
  const definitions = pages.filter(page => page.metadata.kind === undefined).map(page => `<li><a href="/${page.slug}/">${e(String(page.metadata.name))}</a></li>`).join("");
  await writeFile(join(output, "index.html"), document("Library", `<h1>Open Rules</h1><p class="lede">A shared library of Sudoku rules, with precise definitions and worked examples.</p><section class="featured" aria-label="A real rule example"><div><span class="eyebrow">Featured example</span><pre><code>whispers r1c4-r1c5 gap 5</code></pre></div><div><div class="example-math">${renderMath("|V(r1c4) − V(r1c5)| ≥ 5")}</div><p>The values in row 1, columns 4 and 5 differ by at least five.</p><div class="example-credit"><span>From <em>To the Revolution</em> · John Laurens</span><a href="/cases/to-the-revolution/">Read case file →</a></div></div></section><section class="library" aria-labelledby="library-title"><div class="library-heading"><h2 id="library-title">Browse the library</h2><div><a href="/syntax/">Rule-line syntax →</a><a href="/predicates/">Shared predicates →</a></div></div><div class="search-control" hidden><label for="rule-search">Search rules</label><input type="search" id="rule-search" placeholder="Search by name, keyword or syntax…" autocomplete="off"><p class="search-status" role="status" aria-live="polite"></p></div><nav class="shapes" aria-label="Browse by shape">${shapes.map(shape => `<a href="#${shape.toLowerCase()}" data-shape="${shape}"><img src="/icons/${shape.toLowerCase()}.svg" width="40" height="40" alt=""><span>${shape}</span></a>`).join("")}</nav><div class="rule-groups">${groups}</div><p class="no-results" hidden>No rules match. Try another name, keyword or shape.</p></section>${definitions ? `<section class="shared-definitions"><h2>Shared definitions</h2><ul>${definitions}</ul></section>` : ""}${writing()}`, undefined, true));
  await mkdir(join(output, "cases"), { recursive: true });
  for (const page of casePages) {
    await writeFile(join(output, "cases", `${page.slug}.rules.md`), page.bytes); await mkdir(join(output, "cases", page.slug), { recursive: true });
    const link = (value: unknown, label: string) => typeof value === "string" && /^https:\/\/[^\s]+$/.test(value) ? `<a href="${e(value)}">${label}</a>` : "";
    await writeFile(join(output, "cases", page.slug, "index.html"), document(String(page.metadata.title ?? page.slug), `<div class="breadcrumbs"><a href="/">Library</a> / Case file</div><article class="prose case-file"><span class="eyebrow">Case file</span><h1>${e(String(page.metadata.title ?? page.slug))}</h1><p class="lede">By ${e(String(page.metadata.setter ?? ""))}</p><div class="case-links">${link(page.metadata.source, "Original puzzle")}${link(page.metadata.case, "Open at Sudoku Sleuth")}</div>${page.metadata.givens ? `<p><strong>Givens:</strong> <code>${e(String(page.metadata.givens))}</code></p>` : ""}${renderMarkdown(page.body, names)}</article>`, `/cases/${page.slug}.rules.md`));
  }
  const contributing = await readFile(new URL("../CONTRIBUTING.md", import.meta.url), "utf8");
  await mkdir(join(output, "contributing"), { recursive: true });
  await writeFile(join(output, "contributing/index.html"), document("Propose a rule", `<div class="breadcrumbs"><a href="/">Library</a></div><article class="prose">${renderMarkdown(contributing, names)}<p><a href="${github}/compare">Open a pull request on GitHub →</a></p></article>`));
  await mkdir(join(output, "writing"), { recursive: true });
  await writeFile(join(output, "writing/index.html"), document("Write a case file", `<div class="breadcrumbs"><a href="/">Library</a></div><article class="prose"><h1>Write a case file</h1><p class="lede">Give each rule a name and say where it applies.</p><p>Declare the library root once, credit the setter and source, then write one line for each rule. <a href="/syntax/">Read the rule-line syntax</a> or <a href="/cases/to-the-revolution/">read To the Revolution by John Laurens</a>.</p><h2 id="checker">Use the checker</h2><p>From a checkout of <a href="${github}">Open Rules</a>, install dependencies and check a rule definition:</p><pre><code>bun install --frozen-lockfile\nbun run openrules lint rules/whispers.md</code></pre><p>The checker checks rule formulas. See the <a href="${github}#formula-package">checker documentation</a>.</p><h2 id="ai-skill">Use the AI skill</h2><p>The Open Rules skill helps turn puzzle text and drawings into a case file, or draft a rule definition and pull-request description.</p>${installs()}<p>In Claude Code, invoke <code>/open-rules:open-rules</code>. In Codex, select the Open Rules skill or invoke <code>$open-rules</code>.</p></article>`));
  for (const asset of ["style.css", "library.js", "mark.svg", "icons", "fonts"]) await cp(new URL(`../site/${asset}`, import.meta.url), join(output, asset), { recursive: true });
  await writeFile(join(output, ".nojekyll"), ""); await writeFile(join(output, "CNAME"), "rules.sudoku-sleuth.com\n");
  return { pages: pages.length, cases: cases.length, output };
}
if (import.meta.main) {
  const args = process.argv.slice(2);
  if (args.length && (args[0] !== "--source" || args.length !== 2)) throw new Error("Usage: bun run build [--source folder]");
  const result = await buildSite(args[1] ?? "."); console.log(`Built ${result.pages} pages and ${result.cases} cases → ${result.output}`);
}

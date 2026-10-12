import { mkdir, rm, writeFile, readFile } from "node:fs/promises";
import { basename, join, resolve, sep } from "node:path";
import { escapeHtml, markdownFiles, readPage, renderMarkdown, ruleShape, summary, validateAliases, validatePage } from "./content";

function document(title: string, content: string, raw?: string) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; base-uri 'none'; form-action 'none'">
<title>${escapeHtml(title)} · Open Rules</title><link rel="stylesheet" href="/style.css"></head>
<body><a class="skip" href="#main">Skip to content</a><header><a class="brand" href="/">Open Rules</a><nav aria-label="Library">${raw ? `<a href="/${raw}.md">Read Markdown</a>` : ""}</nav></header>
<main id="main">${content}</main><footer>Open Rules · <a href="https://github.com/sudoku-sleuth/sudoku-rules">Contribute on GitHub</a></footer></body></html>\n`;
}

export async function buildSite(source = ".", output = "_site") {
  source = resolve(source);
  output = resolve(output);
  if (source === output || source.startsWith(output + sep) || output === join(source, "rules") || output === join(source, "cases")) {
    throw new Error("Output must be separate from source content");
  }
  const pages = await Promise.all((await markdownFiles(source, "rules")).map(async file => {
    const page = await readPage(file);
    const slug = validatePage(page.metadata, file);
    return { ...page, slug };
  }));
  validateAliases(pages);
  // Parse before clearing output so invalid content leaves the last build intact.
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  const names = new Set(pages.map(page => page.slug));
  for (const page of pages) {
    await writeFile(join(output, `${page.slug}.md`), page.bytes);
    await mkdir(join(output, page.slug), { recursive: true });
    await writeFile(join(output, page.slug, "index.html"), document(String(page.metadata.name ?? page.slug), renderMarkdown(page.body, names), page.slug));
  }
  const bySlug = new Map(pages.map(page => [page.slug, page]));
  const definition = (page: typeof pages[number]) => bySlug.get(String(page.metadata.alias_of ?? page.metadata.aliasOf)) ?? page;
  const groups = new Map<string, typeof pages>();
  for (const page of pages.filter(page => typeof page.metadata.kind === "string")) {
    const shape = ruleShape(definition(page).metadata);
    groups.set(shape, [...(groups.get(shape) ?? []), page]);
  }
  const sections = [...groups].sort(([a], [b]) => a.localeCompare(b)).map(([shape, rules]) =>
    `<section><h2>${escapeHtml(shape)}</h2><div class="table-scroll" role="region" aria-label="${escapeHtml(shape)}" tabindex="0"><table><thead><tr><th scope="col">Rule</th><th scope="col">Meaning</th><th scope="col">Class</th></tr></thead><tbody>${rules.map(page => {
      const ruleClass = /Class:\s*\*\*([^*]+)\*\*/.exec(definition(page).body)?.[1] ?? "—";
      return `<tr><th scope="row"><a href="/${page.slug}/">${escapeHtml(String(page.metadata.name))}</a><span class="kind">${page.slug}</span></th><td>${renderMarkdown(summary(definition(page).body), names)}</td><td>${escapeHtml(ruleClass)}</td></tr>`;
    }).join("")}</tbody></table></div></section>`).join("\n");
  const definitions = pages.filter(page => !page.metadata.kind).map(page => `<li><a href="/${page.slug}/">${escapeHtml(String(page.metadata.name ?? page.slug))}</a></li>`).join("");
  await writeFile(join(output, "index.html"), document("Library", `<h1>Open Rules</h1><p>A shared library of Sudoku rules. Each rule has a name, a precise meaning, and a worked example.</p>${definitions ? `<section><h2>Shared definitions</h2><ul>${definitions}</ul></section>` : ""}${sections}`));
  const cases = await markdownFiles(source, "cases", ".rules.md");
  await mkdir(join(output, "cases"), { recursive: true });
  for (const file of cases) await writeFile(join(output, "cases", basename(file)), await readFile(file));
  await writeFile(join(output, "style.css"), await readFile(new URL("../site/style.css", import.meta.url)));
  await writeFile(join(output, ".nojekyll"), "");
  await writeFile(join(output, "CNAME"), "rules.sudoku-sleuth.com\n");
  return { pages: pages.length, cases: cases.length, output };
}

if (import.meta.main) {
  const args = process.argv.slice(2);
  if (args.length && (args[0] !== "--source" || args.length !== 2)) throw new Error("Usage: bun run build [--source folder]");
  const result = await buildSite(args[1] ?? ".");
  console.log(`Built ${result.pages} pages and ${result.cases} cases → ${result.output}`);
}

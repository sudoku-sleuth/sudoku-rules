import { readdir, readFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { parseDocument } from "yaml";
import { marked } from "marked";
import { parseFormula } from "../src/language/parser";
import { renderMath } from "./mathml";

export const origin = "https://rules.sudoku-sleuth.com";
export type Metadata = Record<string, unknown>;

export function validatePage(metadata: Metadata, file: string) {
  const slug = basename(file, ".md");
  if (slug === "README" && metadata.document === "home" && metadata.kind === undefined) {
    if (typeof metadata.name !== "string" || !metadata.name.trim()) throw new Error(`${file}: name must be a nonempty string`);
    if (metadata.url !== `${origin}/README.md`) throw new Error(`${file}: url must be ${origin}/README.md`);
    return slug;
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error(`${file}: invalid page slug ${slug}`);
  if (["cases", "style"].includes(slug)) throw new Error(`${file}: reserved page slug ${slug}`);
  if (metadata.kind !== undefined) {
    if (typeof metadata.kind !== "string") throw new Error(`${file}: kind must be a string`);
    if (metadata.kind !== slug) throw new Error(`${file}: kind must match filename`);
  }
  const alias = metadata.alias_of ?? metadata.aliasOf;
  if (metadata.alias_bind !== undefined && alias === undefined) throw new Error(`${file}: alias_bind needs alias_of`);
  if (alias !== undefined && (typeof alias !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(alias) || alias === slug)) throw new Error(`${file}: alias target must be a different rule kind`);
  if (metadata.alias_of !== undefined && metadata.aliasOf !== undefined) throw new Error(`${file}: declare alias_of only once`);
  if (alias !== undefined && (metadata.kind !== slug || (metadata.parameters !== undefined && metadata.alias_bind === undefined))) throw new Error(`${file}: alias pages declare their own kind and no parameters`);
  if (typeof metadata.name !== "string" || !metadata.name.trim()) throw new Error(`${file}: name must be a nonempty string`);
  if (metadata.url !== `${origin}/${slug}.md`) throw new Error(`${file}: url must be ${origin}/${slug}.md`);
  return slug;
}

export function frontMatter(raw: string, file: string) {
  const match = /^(?:\uFEFF)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(raw);
  if (!match) throw new Error(`${file}: missing YAML front matter`);
  const doc = parseDocument(match[1], { uniqueKeys: true });
  if (doc.errors.length) throw new Error(`${file}: ${doc.errors.map(e => e.message).join("; ")}`);
  const metadata: unknown = doc.toJS({ maxAliasCount: 0 });
  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    throw new Error(`${file}: front matter must be a mapping`);
  }
  return { metadata: metadata as Metadata, body: raw.slice(match[0].length) };
}

export async function markdownFiles(root: string, folder: string, suffix = ".md") {
  const directory = join(root, folder);
  const entries = await readdir(directory, { withFileTypes: true }).catch(error => {
    if (error.code === "ENOENT") return [];
    throw error;
  });
  return entries.filter(e => e.isFile() && e.name.endsWith(suffix) && !["AGENTS.md", "CLAUDE.md"].includes(e.name))
    .map(e => join(directory, e.name)).sort();
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export function renderRuleLines(text: string) {
  return `<div class="rules-code"><span class="code-label">rules</span><pre role="region" aria-label="Rules" tabindex="0"><code class="language-rules">${escapeHtml(text)}</code></pre></div>`;
}

// Case examples use an outer Markdown fence containing front matter and rules.
// Keep the header as code and give each embedded rules fence the same presentation.
function renderCaseExample(text: string) {
  const fence = /^(`{3,}|~{3,})rules[^\n]*\n([\s\S]*?)^\1[ \t]*$/gm;
  let result = "", end = 0;
  for (const match of text.matchAll(fence)) {
    const before = text.slice(end, match.index).trim();
    if (before) result += `<pre><code class="language-markdown">${escapeHtml(before)}</code></pre>`;
    result += renderRuleLines(match[2].trimEnd());
    end = match.index + match[0].length;
  }
  if (!result) return;
  const after = text.slice(end).trim();
  if (after) result += `<pre><code class="language-markdown">${escapeHtml(after)}</code></pre>`;
  return `<div class="case-example">${result}</div>`;
}

export function renderMarkdown(body: string, pageNames: Set<string> = new Set()) {
  const renderer = new marked.Renderer();
  const headingIds = new Map<string, number>();
  renderer.heading = function ({ depth, text, tokens }) {
    const base = text.toLowerCase().replace(/[^\p{L}\p{N} -]/gu, "").trim().replace(/\s+/g, "-") || "section";
    const count = headingIds.get(base) ?? 0;
    headingIds.set(base, count + 1);
    const id = count ? `${base}-${count}` : base;
    return `<h${depth} id="${escapeHtml(id)}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
  };
  // Source HTML is text; Markdown links cannot introduce executable URLs.
  renderer.html = ({ text }) => escapeHtml(text);
  renderer.code = ({ text, lang }) => {
    if (lang === "rules") return renderRuleLines(text) + "\n";
    if (lang === "markdown") {
      const example = renderCaseExample(text);
      if (example) return example + "\n";
    }
    if (lang === "math" || ((lang === "text" || (lang === "openrules" && !/^(?:play\s+)?(?:input|primitive|term|type)\s/m.test(text))) && (/[∀∃∧∨↔→]|[=<>≥≤]/u.test(text) || parseFormula(text).value))) {
      return `<div class="formula" role="region" aria-label="Mathematical formula" tabindex="0">${renderMath(text)}</div>\n`;
    }
    return `<pre><code${lang ? ` class="language-${escapeHtml(lang)}"` : ""}>${escapeHtml(text)}</code></pre>\n`;
  };
  renderer.codespan = ({ text }) => {
    const rule = /^(?:not\s+)*([a-z][a-z0-9-]*)\s+(?:r\d+c\d+|\d+x\d+)/.exec(text);
    // Marked has already escaped codespan text; leave that escaping intact.
    if (rule && (rule[1] === "sudoku" || pageNames.has(rule[1]))) {
      return `<span class="rules-inline" role="region" aria-label="Rules" tabindex="0"><span class="code-label">rules</span><code class="language-rules">${text}</code></span>`;
    }
    return `<code>${text}</code>`;
  };
  renderer.image = ({ text }) => escapeHtml(text);
  renderer.link = function ({ href, title, tokens }) {
    const label = this.parser.parseInline(tokens);
    if (/[\s\u0000-\u001f\u007f]/.test(href) || href.startsWith("//") || (/^[\w+.-]+:/.test(href) && !/^(https?:\/\/|mailto:)/i.test(href))) return label;
    // Keep raw links in source untouched; HTML readers navigate rendered pages.
    const local = href.replace(`${origin}/`, "").replace(/^\/?rules\//, "").replace(/^\//, "");
    const match = /^([a-z0-9-]+)\.md(#[\w-]+)?$/.exec(local);
    if (match && pageNames.has(match[1])) href = `/${match[1]}/${match[2] ?? ""}`;
    if (/^(spec|tests)\//.test(href)) href = `https://github.com/sudoku-sleuth/sudoku-rules/blob/main/${href}`;
    return `<a href="${escapeHtml(href)}"${title ? ` title="${escapeHtml(title)}"` : ""}>${label}</a>`;
  };
  return marked.parse(body, { renderer, gfm: true, async: false }) as string;
}

export function summary(body: string) {
  const paragraph = marked.lexer(body).find(token => token.type === "paragraph");
  return paragraph?.type === "paragraph" ? paragraph.text.replace(/\s+/g, " ").trim() : "";
}

export function ruleShape(metadata: Metadata) {
  if (typeof metadata.shape === "string" && ["Lines", "Edges", "Cells", "Cages", "Outside", "Regions", "Global"].includes(metadata.shape)) return metadata.shape;
  const parameters = metadata.parameters as Metadata | undefined;
  const keys = Object.keys(parameters ?? {});
  const kind = String(metadata.kind);
  if (["pair", "kropki", "negative"].includes(kind)) return "Edges";
  if (["constructed-regions", "unique", "extra-regions"].includes(kind)) return "Regions";
  if (["arrow", "double-arrow", "coordinate-arrows", "hidden-modular", "run-sum"].includes(kind)) return "Lines";
  if (["little-killer", "sandwich", "x-sum", "skyscraper", "numbered-room", "outside", "ordered-block", "doll-sum", "pointing-arrow"].includes(kind)) return "Outside";
  if (["sudoku", "anti-king", "anti-knight", "diagonal", "diagonal-lines", "flat-mates", "index", "magic-square", "rotational-sums", "scoped-move", "value-modifier", "window-classes", "yin-yang"].includes(kind)) return "Global";
  if (keys.includes("line") || keys.includes("lines")) return "Lines";
  if (keys.includes("ray")) return "Outside";
  if (keys.includes("cage") || keys.includes("cages") || /cage|vault|look-and-say|n-mate|killer/.test(kind)) return "Cages";
  return "Cells";
}

export async function readPage(file: string) {
  const bytes = await readFile(file);
  return { bytes, ...frontMatter(bytes.toString("utf8"), file) };
}

export function validateAliases(pages: {slug: string; metadata: Metadata; body: string}[]) {
  const bySlug = new Map(pages.map(page => [page.slug, page]));
  for (const page of pages) {
    const target = page.metadata.alias_of ?? page.metadata.aliasOf;
    if (target === undefined) continue;
    const definition = bySlug.get(String(target));
    if (!definition?.metadata.kind || definition.metadata.alias_of !== undefined || definition.metadata.aliasOf !== undefined) throw new Error(`${page.slug}: alias target ${target} must be an existing definition, not an alias`);
    if (/^\s*```(?:text|openrules)\s*$/m.test(page.body)) throw new Error(`${page.slug}: alias pages must not redefine a formula`);
  }
}

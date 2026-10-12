import { readdir, readFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { parseDocument } from "yaml";
import { marked } from "marked";

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
  if (alias !== undefined && (typeof alias !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(alias) || alias === slug)) throw new Error(`${file}: alias target must be a different rule kind`);
  if (metadata.alias_of !== undefined && metadata.aliasOf !== undefined) throw new Error(`${file}: declare alias_of only once`);
  if (alias !== undefined && (metadata.kind !== slug || metadata.parameters !== undefined)) throw new Error(`${file}: alias pages declare their own kind and no parameters`);
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
  renderer.image = ({ text }) => escapeHtml(text);
  renderer.link = function ({ href, title, tokens }) {
    const label = this.parser.parseInline(tokens);
    if (/[\s\u0000-\u001f\u007f]/.test(href) || href.startsWith("//") || (/^[\w+.-]+:/.test(href) && !/^(https?:\/\/|mailto:)/i.test(href))) return label;
    // Keep raw links in source untouched; HTML readers navigate rendered pages.
    const local = href.replace(`${origin}/`, "").replace(/^\/?rules\//, "").replace(/^\//, "");
    const match = /^([a-z0-9-]+)\.md(#[\w-]+)?$/.exec(local);
    if (match && pageNames.has(match[1])) href = `/${match[1]}/${match[2] ?? ""}`;
    return `<a href="${escapeHtml(href)}"${title ? ` title="${escapeHtml(title)}"` : ""}>${label}</a>`;
  };
  return marked.parse(body, { renderer, gfm: true, async: false }) as string;
}

export function summary(body: string) {
  const paragraph = marked.lexer(body).find(token => token.type === "paragraph");
  return paragraph?.type === "paragraph" ? paragraph.text.replace(/\s+/g, " ").trim() : "";
}

export function ruleShape(metadata: Metadata) {
  if (typeof metadata.shape === "string") return metadata.shape;
  const parameters = metadata.parameters as Metadata | undefined;
  const keys = Object.keys(parameters ?? {});
  const kind = String(metadata.kind);
  if (["arrow", "double-arrow", "pointing-arrow", "coordinate-arrows"].includes(kind)) return "Arrows";
  if (["little-killer", "sandwich", "x-sum", "skyscraper", "numbered-room", "run-sum", "outside", "ordered-block", "doll-sum"].includes(kind)) return "Outside clues";
  if (keys.includes("line") || keys.includes("lines")) return "Lines";
  if (keys.includes("ray")) return "Outside clues";
  if (keys.includes("cage") || keys.includes("cages") || /cage|vault|look-and-say|n-mate|killer/.test(kind)) return "Cages";
  if (keys.includes("cells") || keys.includes("cell")) return "Cells and groups";
  return "Board and other rules";
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

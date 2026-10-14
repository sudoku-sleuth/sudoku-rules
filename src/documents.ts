import { parseDeclaredRuleLine, type LineDeclaration } from "./rule-lines.js";
import { isMap, isScalar, parseDocument, visit, isAlias } from "yaml";
import { diagnostic, location, type Diagnostic, type Result } from "./language/diagnostics.js";
import { compilePage, compilePrelude, formulaBlocks, type PageSource, type CompiledPage } from "./library.js";
import type { CheckedPrelude } from "./language/checker.js";
export const documentChecks = ["E_HEADER_REQUIRED", "E_HEADER_TYPE", "E_LIBRARY_URL", "E_RULES_REQUIRED", "E_KIND_UNKNOWN", "E_ALIAS_TARGET"] as const;
export interface Header {
    metadata: Record<string, unknown>;
    offset: number;
    field: (name: string) => ReturnType<typeof location>;
}
export function readHeader(page: PageSource): Result<Header> {
    const match = /^(?:\uFEFF)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(page.text);
    if (!match)
        return { diagnostics: [diagnostic("E_HEADER_REQUIRED", location(page, 0, 0), "Start this file with a --- header containing its named fields.")] };
    const offset = match[0].indexOf(match[1]);
    const doc = parseDocument(match[1], { uniqueKeys: true });
    if (doc.errors.length)
        return { diagnostics: doc.errors.map(error => diagnostic("E_FORMULA_SYNTAX", location(page, offset + error.pos[0], offset + error.pos[1]), "This header cannot be read; check the field names, colons, indentation and brackets.", `${error.code}: ${error.message}`)) };
    const aliases: Diagnostic[] = [];
    visit(doc, (_, node) => { if (isAlias(node))
        aliases.push(diagnostic("E_FORMULA_SYNTAX", location(page, offset + (node.range?.[0] ?? 0), offset + (node.range?.[1] ?? 0)), "Write each header value directly; references to other header values using *name are not supported.")); });
    if (aliases.length)
        return { diagnostics: aliases };
    const metadata = doc.toJS({ maxAliasCount: 0 });
    if (!metadata || typeof metadata !== "object" || Array.isArray(metadata))
        return { diagnostics: [diagnostic("E_HEADER_TYPE", location(page, 0, 0), "Write the header as named fields, rather than a list or single value.")] };
    const field = (name: string) => { const pair = isMap(doc.contents) ? doc.contents.items.find(pair => isScalar(pair.key) && pair.key.value === name) : undefined; if (!pair)
        return location(page, 0, 0); const node = pair.value ?? pair.key; return location(page, offset + (node?.range?.[0] ?? 0), offset + (node?.range?.[1] ?? 0)); };
    return { value: { metadata, offset: match[0].length, field }, diagnostics: [] };
}
export interface RuleRegistry {
    kinds: Set<string>;
    urls: Set<string>;
    lines?: Map<string, LineDeclaration>;
}
export interface CaseReference {
    kind: string;
    url: string;
    span: ReturnType<typeof location>;
}
export function checkCaseReferences(page: PageSource, registry: RuleRegistry): Result<{
    references: CaseReference[];
    deferred: string[];
}> {
    const header = readHeader(page);
    if (!header.value)
        return { diagnostics: header.diagnostics };
    const { metadata, field, offset } = header.value;
    const errors: Diagnostic[] = [];
    for (const name of ["format", "title", "setter", "source", "case", "library", "status"]) {
        if (metadata[name] === undefined)
            errors.push(diagnostic("E_HEADER_REQUIRED", field(name), `Add the ${name} field to the case header.`));
        else if (typeof metadata[name] !== "string")
            errors.push(diagnostic("E_HEADER_TYPE", field(name), `The ${name} field must be written as text.`));
    }
    if (typeof metadata.format === "string" && metadata.format !== "open-rules")
        errors.push(diagnostic("E_HEADER_TYPE", field("format"), "Set format to open-rules for an Open Rules case file."));
    if (typeof metadata.status === "string" && !["read", "confirmed", "flagged"].includes(metadata.status))
        errors.push(diagnostic("E_HEADER_TYPE", field("status"), "Set status to read, confirmed or flagged."));
    if (metadata.flags !== undefined && metadata.status !== "flagged")
        errors.push(diagnostic("E_HEADER_TYPE", field("flags"), `A ${String(metadata.status)} case cannot have flags; use flagged status to record unresolved meanings.`));
    if (metadata.status === "flagged" && (!Array.isArray(metadata.flags) || !metadata.flags.length || metadata.flags.some(flag => typeof flag !== "string" || !flag.trim())))
        errors.push(diagnostic("E_HEADER_TYPE", field("flags"), "A flagged case needs a nonempty list of flags describing its unresolved meanings."));
    let root: URL | undefined;
    try {
        root = new URL(String(metadata.library));
        if (!["https:", "http:"].includes(root.protocol) || !root.pathname.endsWith("/") || root.search || root.hash || root.username || root.password)
            throw Error();
    }
    catch {
        errors.push(diagnostic("E_LIBRARY_URL", field("library"), "The library field must be a full HTTP or HTTPS URL ending in /, without a query, fragment or login."));
    }
    const references: CaseReference[] = [];
    const deferred: string[] = [];
    const rest = page.text.slice(offset);
    const fence = /^ {0,3}```rules\s*\r?\n([\s\S]*?)^ {0,3}```\s*$/gm;
    let block: RegExpExecArray | null;
    let found = false;
    while ((block = fence.exec(rest))) {
        found = true;
        const start = offset + block.index + block[0].indexOf(block[1]);
        let at = start;
        for (const line of block[1].split(/(?<=\n)/)) {
            const match = /^\s*(?:[\p{L}\p{N}_-]+:\s+)?(?:not\s+)*([^\s]+)/u.exec(line);
            if (match && !match[1].startsWith("#")) {
                const kind = match[1];
                const begin = at + match[0].lastIndexOf(kind);
                const span = location(page, begin, begin + kind.length);
                let url: URL | undefined;
                try {
                    url = root ? new URL(kind.endsWith(".md") || /^https?:\/\//.test(kind) ? kind : `${kind}.md`, root) : undefined;
                }
                catch { }
                if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(kind) && !/^https?:\/\/[^\s]+\.md$/.test(kind))
                    errors.push(diagnostic("E_KIND_UNKNOWN", span, `${kind} is not a rule kind or a full Markdown rule URL.`));
                else if (url && registry.urls.has(url.href)) {
                    references.push({ kind, url: url.href, span });
                    const declaration = registry.lines?.get(url.href);
                    if (declaration) {
                        const tail = begin + kind.length - at;
                        errors.push(...parseDeclaredRuleLine({ file: page.file, text: line.slice(tail).trimEnd(), document: page.text, offset: at + tail }, declaration).diagnostics);
                    }
                }
                else if (url && ![...registry.urls].some(address => url!.href.startsWith(new URL(".", address).href))) {
                    deferred.push(url.href);
                    references.push({ kind, url: url.href, span });
                }
                else
                    errors.push(diagnostic("E_KIND_UNKNOWN", span, `${kind} has no definition in this library; use a declared kind or a full URL for another rule.`));
            }
            at += line.length;
        }
    }
    if (!found)
        errors.push(diagnostic("E_RULES_REQUIRED", location(page, offset, offset), "Add a fenced rules block containing the puzzle's rule references."));
    return errors.length ? { diagnostics: errors } : { value: { references, deferred }, diagnostics: [] };
}
export interface PublicLibrary {
    prelude: CheckedPrelude;
    rules: Map<string, CompiledPage>;
    aliases: Map<string, string>;
    documents: number;
    registry: RuleRegistry;
}
export function compilePublicLibrary(pages: PageSource[]): Result<PublicLibrary> {
    const headers = new Map(pages.map(page => [page.file, readHeader(page)]));
    const diagnostics = [...headers.values()].flatMap(result => result.diagnostics);
    const shared = pages.filter(page => headers.get(page.file)?.value?.metadata.document === "prelude");
    if (shared.length !== 1)
        return { diagnostics: [...diagnostics, diagnostic("E_SIGNATURE_REQUIRED", location(pages[0] ?? { file: "<library>", text: "" }, 0, 0), "Declare exactly one shared definitions page with document: prelude.")] };
    const parsed = compilePrelude(shared[0]);
    diagnostics.push(...parsed.diagnostics);
    if (!parsed.value)
        return { diagnostics };
    const rules = new Map<string, CompiledPage>();
    const aliases = new Map<string, string>();
    const registry: RuleRegistry = { kinds: new Set(), urls: new Set(), lines: new Map() };
    let documents = 0;
    for (const page of pages) {
        const header = headers.get(page.file)?.value;
        if (!header)
            continue;
        const { metadata, field } = header;
        if (metadata.document !== undefined) {
            if (!["prelude", "syntax", "home", "feature"].includes(String(metadata.document)) || metadata.kind !== undefined || metadata.parameters !== undefined || metadata.alias_of !== undefined || metadata.aliasOf !== undefined)
                diagnostics.push(diagnostic("E_HEADER_TYPE", field("document"), "A shared document must declare document: prelude, document: syntax, document: feature or document: home, and must not declare a rule kind, parameters or an alias."));
            else {
                documents++;
                if (metadata.document === "home" && formulaBlocks(page).length) diagnostics.push(diagnostic("E_FORMULA_SYNTAX",field("document"),"The home index cannot declare formulas; put a rule's formula on its kind page."));
                if (metadata.document === "feature" && formulaBlocks(page).length) diagnostics.push(diagnostic("E_FORMULA_SYNTAX",field("document"),"A setup feature page cannot declare rule formulas; write its maths in a math block."));
                if (metadata.document === "syntax" && formulaBlocks(page).length) {
                    const checked = compilePrelude(page);
                    diagnostics.push(...checked.diagnostics);
                }
            }
            continue;
        }
        const kind = metadata.kind;
        if (typeof kind !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(kind)) {
            diagnostics.push(diagnostic("E_HEADER_TYPE", field("kind"), "Declare this rule's kind as a lowercase name, with hyphens between words."));
            continue;
        }
        if (registry.kinds.has(kind))
            diagnostics.push(diagnostic("E_HEADER_TYPE", field("kind"), `The kind ${kind} is declared twice; each kind needs one definition.`));
        registry.kinds.add(kind);
        if (typeof metadata.url === "string")
            registry.urls.add(metadata.url);
        const alias = metadata.alias_of ?? metadata.aliasOf;
        if (alias !== undefined) {
            if (typeof alias !== "string" || metadata.parameters !== undefined || metadata.alias_of !== undefined && metadata.aliasOf !== undefined || formulaBlocks(page).length)
                diagnostics.push(diagnostic("E_ALIAS_TARGET", field(metadata.alias_of !== undefined ? "alias_of" : "aliasOf"), `The alias ${kind} must name one target and must not declare parameters or a formula.`));
            else
                aliases.set(kind, alias);
            continue;
        }
        const checked = compilePage(page, parsed.value);
        diagnostics.push(...checked.diagnostics);
        if (checked.value) {
            rules.set(kind, checked.value);
            if (checked.value.line && typeof metadata.url === "string") registry.lines!.set(metadata.url, checked.value.line);
        }
    }
    for (const [kind, target] of aliases) {
        if (!rules.has(target)) {
            const page = pages.find(page => headers.get(page.file)?.value?.metadata.kind === kind)!;
            diagnostics.push(diagnostic("E_ALIAS_TARGET", headers.get(page.file)!.value!.field(headers.get(page.file)!.value!.metadata.alias_of !== undefined ? "alias_of" : "aliasOf"), `The alias ${kind} must point to an existing rule definition; ${target} is missing, invalid or another alias.`));
        }
    }
    for (const page of pages) {
        const metadata = headers.get(page.file)?.value?.metadata;
        if (typeof metadata?.url === "string" && typeof metadata.kind === "string") {
            const target = aliases.get(metadata.kind);
            const targetPage = target && pages.find(p => headers.get(p.file)?.value?.metadata.kind === target);
            const targetUrl = targetPage && headers.get(targetPage.file)?.value?.metadata.url;
            const declaration = typeof targetUrl === "string" ? registry.lines!.get(targetUrl) : undefined;
            if (declaration) registry.lines!.set(metadata.url, declaration);
        }
    }
    return diagnostics.length ? { diagnostics } : { value: { prelude: parsed.value, rules, aliases, documents, registry }, diagnostics: [] };
}

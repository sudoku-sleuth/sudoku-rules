import { checkBoard, checkParameterAST, parameterGrammar, explicitBoardParameters, object, type CaseBoard, type CaseParameters } from "./case-values.js";
import { caseBlocks, readCustomDefinitions, checkCustomParameters, customParameterContract } from "./custom-definitions.js";
import { declarationLibrary, defaultCasePrelude } from "./declaration-library.js";
import { declarationParameters, parseDeclaration, type DeclarationAST } from "./declarations.js";
import { type LineDeclaration } from "./rule-lines.js";
import { isMap, isScalar, parseDocument, visit, isAlias } from "yaml";
import { diagnostic, location, type Diagnostic, type Result } from "./language/diagnostics.js";
import { compilePage, compilePrelude, formulaBlocks, type PageSource, type CompiledPage } from "./library.js";
import { checkFeatureBlocks, compileFeature, type CompiledFeature } from "./features.js";
import type { Type } from "./language/ast.js";
import type { CheckedPrelude } from "./language/checker.js";
export const documentChecks = ["E_HEADER_REQUIRED", "E_HEADER_TYPE", "E_LIBRARY_URL", "E_RULES_REQUIRED", "E_KIND_UNKNOWN", "E_ALIAS_TARGET", "E_FEATURE_REQUIRES", "E_FEATURE_CONFLICT"] as const;
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
    parameters?: Map<string, CaseParameters>;
    /** Setup features, whose header blocks are checked in a case. */
    features?: CompiledFeature[];
    prelude?: CheckedPrelude;
}
export interface CaseReference {
    kind: string;
    url: string;
    custom?: boolean;
    scope?: string;
    span: ReturnType<typeof location>;
}
export function checkCaseReferences(page: PageSource, registry: RuleRegistry, context?: CaseBoard): Result<{
    declarations: DeclarationAST[];
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
    const declarations: DeclarationAST[] = [];
    const references: CaseReference[] = [];
    const deferred: string[] = [];
    const blocks = caseBlocks(page);
    const custom = readCustomDefinitions(page, blocks, registry.kinds, registry.prelude ?? defaultCasePrelude(), registry.urls);
    errors.push(...custom.diagnostics);
    const usedCustom = new Set<string>();
    const resolveCustom = (reference: string) => custom.definitions.get(reference) ??
        (/^https:\/\//.test(reference) ? [...custom.definitions.values()].find(d => d.metadata.url === reference) : undefined);
    const ruleBlocks = blocks.filter(b => b.language === "rules");
    const parsedLines: {declaration: DeclarationAST}[] = [];
    const parseErrors: Diagnostic[] = [];
    for (const block of ruleBlocks) {
        let at = block.offset;
        for (const line of block.text.split(/(?<=\n)/)) {
            const parsed = parseDeclaration({file:page.file, text:line.trimEnd(), document:page.text, offset:at}, kind => {
                let url: string | undefined;
                try { url = root ? new URL(kind.endsWith(".md") || /^https?:/.test(kind) ? kind : `${kind}.md`, root).href : undefined; } catch {}
                const local = resolveCustom(kind) ?? (url ? resolveCustom(url) : undefined);
                const contract = local ? customParameterContract(local) : url ? registry.parameters?.get(url) : undefined;
                // A reference-only registry still recognises published surface forms.
                const published = (url ? declarationLibrary.parameters?.get(url) : undefined) ??
                    (registry.kinds.has(kind) ? [...declarationLibrary.parameters ?? []].find(([address]) => address.endsWith(`/${kind}.md`))?.[1] : undefined);
                const line = url ? registry.lines?.get(url) : undefined;
                const positional = (contract ?? published)?.positional;
                return {...parameterGrammar(contract), positional, line, opaque: !contract && !line && !positional};
            });
            parseErrors.push(...parsed.diagnostics);
            const declaration = parsed.value;
            if(declaration) parsedLines.push({declaration});
            at += line.length;
        }
    }
    const dimensions = (ast: DeclarationAST) => ast.parameters.find(p=>p.name.value === "board")?.value.value as {rows:number;cols:number}|undefined;
    const standard = (ast: DeclarationAST) => /(?:^|\/)sudoku(?:\.md)?$/.test(ast.kind.value) && dimensions(ast)?.rows === 9 && dimensions(ast)?.cols === 9;
    const board = context ? {board: context, diagnostics: []} : checkBoard(metadata, parsedLines.filter(({declaration})=>standard(declaration)).length, field);
    // A hand-built registry can check references without providing parameter contracts.
    if (registry.parameters) errors.push(...board.diagnostics);
    errors.push(...parseErrors);
    let hasHouse = false;
    const found = ruleBlocks.length > 0;
    for (const {declaration} of parsedLines) {
        declarations.push(declaration);
        const kind = declaration.kind.value;
        const span = declaration.kind.span;
        const local = resolveCustom(kind);
        if (local || kind.startsWith("#")) {
            if (!local) errors.push(diagnostic("E_CUSTOM_DEFINITION", span, `${kind} has no complete in-file definition.`));
            else { usedCustom.add(local.url); references.push({kind, url: local.url, span, custom: true, ...(local.url.startsWith("#") ? {scope: page.file} : {})}); errors.push(...checkCustomParameters(declaration, span, local, board.board)); }
        } else {
            let url: URL | undefined;
            try { url = root ? new URL(kind.endsWith(".md") || /^https?:\/\//.test(kind) ? kind : `${kind}.md`, root) : undefined; } catch {}
            if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(kind) && !/^https?:\/\/[^\s]+\.md$/.test(kind))
                errors.push(diagnostic("E_KIND_UNKNOWN", span, `${kind} is not a rule kind or a full Markdown rule URL.`));
            else if (url && registry.urls.has(url.href)) {
                const positive = declaration.negations.length % 2 === 0;
                const house = new URL(url.href).pathname.split("/").at(-1);
                if (positive && !declaration.condition && (house === "unique.md" || house === "sudoku.md" && standard(declaration))) hasHouse = true;
                references.push({kind, url: url.href, span});
                if (registry.parameters?.has(url.href)) {
                    errors.push(...checkParameterAST(declaration, span, registry.parameters.get(url.href)!, board.board));
                }
            } else if (url && custom.definitions.has(url.href)) {
                usedCustom.add(url.href); references.push({kind, url: url.href, span}); errors.push(...checkCustomParameters(declaration, span, custom.definitions.get(url.href)!, board.board));
            } else if (url && ![...registry.urls].some(address => url!.href.startsWith(new URL(".", address).href))) {
                deferred.push(url.href); references.push({kind, url: url.href, span});
            } else errors.push(diagnostic("E_KIND_UNKNOWN", span, `${kind} has no definition in this library; use a declared kind or a full URL for another rule.`));
        }
    }
    const explicitBoard = object(metadata.board) ? metadata.board : {};
    const hasRegions = [metadata.regions, explicitBoard.regions].some(regions => Array.isArray(regions) && regions.length > 0);
    if (registry.parameters && hasRegions && !hasHouse)
        errors.push(diagnostic("W_CASE_HOUSES", field(explicitBoard.regions !== undefined ? "board" : "regions"), "Regions describe membership only; no house constraint is declared. If normal Sudoku applies, declare every row, column and region with unique (or use sudoku 9x9 on a standard board)."));
    if (registry.features?.length) {
        const declared = metadata.board && typeof metadata.board === "object" ? metadata.board as Record<string, unknown> : {};
        const written = parsedLines.map(({declaration})=>dimensions(declaration)).find(Boolean);
        const rows = typeof declared.rows === "number" ? declared.rows : written?.rows;
        const cols = typeof declared.cols === "number" ? declared.cols : written?.cols;
        errors.push(...checkFeatureBlocks(registry.features, { metadata, field, board: { rows, cols } }));
    }
    if (!found)
        errors.push(diagnostic("E_RULES_REQUIRED", location(page, offset, offset), "Add a fenced rules block containing the puzzle's rule references."));
    const publishedKind = (ast: DeclarationAST) => references.find(r => r.span.start.offset === ast.kind.span.start.offset)?.url;
    const validateClues = (ast: DeclarationAST, depth = 0): void => {
        if (depth > 32) { errors.push(diagnostic("E_CASE_PARAMETERS", ast.span, "Clue counts may nest at most 32 levels.")); return; }
        const count = ast.parameters.find(p => p.name.value === "count");
        if (typeof count?.value.value === "number" && count.value.value < 0)
            errors.push(diagnostic("E_CASE_PARAMETERS", count.value.span, "A false-clue count must be nonnegative."));
        const clues = ast.parameters.find(p => p.name.value === "clues")?.value;
        const ids = new Set<string>();
        for (const node of clues?.children ?? []) {
            if (!object(node.value) || typeof node.value.rule !== "string" || !object(node.value.args)) continue;
            const record = node.value;
            if (ids.has(String(record.id))) errors.push(diagnostic("E_CASE_PARAMETERS", node.span, "Use distinct clue IDs within each count."));
            ids.add(String(record.id));
            const reference = record.rule as string;
            const local = resolveCustom(reference);
            let url: string | undefined;
            try { url = root ? new URL(reference.endsWith(".md") || /^https?:/.test(reference) ? reference : `${reference}.md`, root).href : undefined; } catch {}
            const definition = local ?? (url ? resolveCustom(url) : undefined);
            const contract = definition ? customParameterContract(definition) : url ? registry.parameters?.get(url) : undefined;
            if (!contract) { errors.push(diagnostic("E_CASE_PARAMETERS", node.span, `Resolve the complete rule contract for ${reference} before counting it.`)); continue; }
            if (url === "https://rules.sudoku-sleuth.com/decoration.md") { errors.push(diagnostic("E_CASE_PARAMETERS", node.span, "Decoration is not a counted clue.")); continue; }
            if (definition) usedCustom.add(definition.url);
            const args = node.fields?.find(f => f.name.value === "args")?.value;
            const nested: DeclarationAST = {kind:{value:reference,span:node.span}, negations:[], span:node.span,
                parameters:(args?.fields ?? []).map(f => ({name:f.name,value:f.value,span:f.span}))};
            errors.push(...checkParameterAST(nested, node.span, contract, board.board));
            const line = url ? registry.lines?.get(url) : undefined;
            if (line) {
                const data = record.args as Record<string, unknown>;
                const cells = data[line.cells.name];
                const parameter = line.parameter;
                const selection = data[parameter.name];
                const keyword = parameter.tag && object(selection) ? selection[parameter.tag] : selection;
                const operands = typeof keyword === "string" ? parameter.keywords[keyword] : undefined;
                if (!Array.isArray(cells) || cells.length !== line.cells.count || !operands ||
                    operands.some(o => !object(selection) || !Number.isInteger(selection[o.field])))
                    errors.push(diagnostic("E_CASE_PARAMETERS", node.span, "Use the referenced rule's cell count and whole-number keyword operands."));
            }
            if (url === "https://rules.sudoku-sleuth.com/clue-count.md") validateClues(nested, depth + 1);
        }
    };
    for (const ast of declarations) if (publishedKind(ast) === "https://rules.sudoku-sleuth.com/clue-count.md") validateClues(ast);
    const decorations = declarations.filter(ast => publishedKind(ast) === "https://rules.sudoku-sleuth.com/decoration.md");
    for (const ast of decorations) {
        if (ast.negations.length || ast.condition)
            errors.push(diagnostic("E_CASE_PARAMETERS", ast.condition?.span ?? ast.negations[0].span, "Decoration carries no rule; omit negation and conditions."));
    }
    for (const [url, definition] of custom.definitions) if (!usedCustom.has(url)) errors.push(diagnostic("E_CUSTOM_DEFINITION", definition.span, `Reference ${url} from a rules declaration or remove its unused definition.`));
    const warnings: Diagnostic[] = [];
    for (const decoration of decorations) {
        const data = declarationParameters(decoration, "cells");
        if (typeof data.element !== "string" || !data.element) continue;
        const cells = Array.isArray(data.cells) ? data.cells : [];
        for (const other of declarations) {
            if (decorations.includes(other)) continue;
            const customDefinition = resolveCustom(other.kind.value) ?? resolveCustom(publishedKind(other) ?? "");
            const contract = customDefinition ? customParameterContract(customDefinition) : registry.parameters?.get(publishedKind(other) ?? "");
            const values = declarationParameters(other, parameterGrammar(contract).primary);
            const containsOverlap = (value: unknown, type?: Type, depth = 0): boolean => {
                if (!type || depth > 128) return false;
                const alias = contract?.types[type.name];
                if (alias) return containsOverlap(value, alias, depth + 1);
                if (type.name === "cell") return cells.includes(value);
                if (type.name === "optional") return containsOverlap(value, type.args?.[0], depth + 1);
                if (["set", "list", "path", "collection"].includes(type.name) && Array.isArray(value))
                    return value.some(item => containsOverlap(item, type.args?.[0], depth + 1));
                if (type.name === "record" && object(value))
                    return Object.entries(type.fields ?? {}).some(([name, field]) => containsOverlap(value[name], field, depth + 1));
                return false;
            };
            const overlap = contract ? Object.entries(values).some(([name, value]) => containsOverlap(value, contract.parameters[name]?.type))
                : Array.isArray(other.cells?.value) && other.cells.value.some(cell => cells.includes(cell));
            if (values.element === data.element && overlap)
                warnings.push(diagnostic("W_DECORATION_OVERLAP", decoration.span,
                    `Drawn element ${JSON.stringify(data.element)} is decorative and constrained on overlapping cells; check which declaration describes the mark.`,
                    `Constraining declaration at ${other.span.file}:${other.span.start.line}:${other.span.start.column}.`));
        }
    }
    return errors.length ? { diagnostics: [...errors, ...warnings] } : { value: { declarations, references, deferred }, diagnostics: warnings };
}
export interface PublicLibrary {
    prelude: CheckedPrelude;
    rules: Map<string, CompiledPage>;
    aliases: Map<string, string>;
    documents: number;
    features: CompiledFeature[];
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
    const features: CompiledFeature[] = [];
    const registry: RuleRegistry = { kinds: new Set(), urls: new Set(), lines: new Map(), parameters: new Map(), features, prelude: parsed.value };
    let documents = 0;
    const listed = headers.get(shared[0].file)?.value?.metadata.feature_predicates;
    if (listed !== undefined && (!Array.isArray(listed) || listed.some(name => typeof name !== "string")))
        diagnostics.push(diagnostic("E_HEADER_TYPE", headers.get(shared[0].file)!.value!.field("feature_predicates"), "List the predicates a feature may define as names, for example feature_predicates: [visible]."));
    const definable: string[] = Array.isArray(listed) ? listed.filter((name): name is string => typeof name === "string") : [];
    for (const page of pages) {
        const header = headers.get(page.file)?.value;
        if (!header)
            continue;
        const { metadata, field } = header;
        if (metadata.document !== undefined) {
            if (!["prelude", "syntax", "home", "feature"].includes(String(metadata.document)) || metadata.kind !== undefined || metadata.parameters !== undefined && metadata.document !== "feature" || metadata.alias_of !== undefined || metadata.aliasOf !== undefined)
                diagnostics.push(diagnostic("E_HEADER_TYPE", field("document"), "A shared document must declare document: prelude, document: syntax, document: feature or document: home, and must not declare a rule kind, parameters or an alias."));
            else {
                documents++;
                if (metadata.document === "home" && formulaBlocks(page).length) diagnostics.push(diagnostic("E_FORMULA_SYNTAX",field("document"),"The home index cannot declare formulas; put a rule's formula on its kind page."));
                if (metadata.document === "feature" && metadata.domain !== undefined) {
                    const compiled = compileFeature(page, parsed.value, definable);
                    diagnostics.push(...compiled.diagnostics);
                    if (compiled.value) {
                        if (features.some(feature => feature.header === compiled.value!.header)) diagnostics.push(diagnostic("E_HEADER_TYPE", field("header"), `The header key ${compiled.value.header} is already read by another feature.`));
                        else features.push(compiled.value);
                    }
                }
                else if (metadata.document === "feature" && formulaBlocks(page).length) diagnostics.push(diagnostic("E_FORMULA_SYNTAX",field("document"),"A setup feature page declares formulas only with domain: play-state; otherwise write its maths in a math block."));
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
            if (typeof metadata.url === "string") {
                const raw = object(metadata.parameters) ? metadata.parameters : {};
                registry.parameters!.set(metadata.url, { types: parsed.value.environment.types ?? {}, explicit: explicitBoardParameters[kind], positional: Object.entries(raw).some(([,v]) => object(v) && object(v.syntax) && v.syntax.form === "dimensions") ? {name: Object.entries(raw).find(([,v]) => object(v) && object(v.syntax) && v.syntax.form === "dimensions")![0], form: "dimensions"} : undefined, parameters: Object.fromEntries([["element", {type: {name: "string"}, required: false}], ...checked.value.parameters.map(p => [p.name, { type: p.type, required: object(raw[p.name]) && /^Required\b/.test(String((raw[p.name] as Record<string, unknown>).default)) }])]) });
            }
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
            const parameters = typeof targetUrl === "string" ? registry.parameters!.get(targetUrl) : undefined;
            if (parameters) registry.parameters!.set(metadata.url, parameters);
        }
    }
    return diagnostics.length ? { diagnostics } : { value: { prelude: parsed.value, rules, aliases, documents, features, registry }, diagnostics: [] };
}

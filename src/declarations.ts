import { capture, fail, location, type DiagnosticCode, type Result, type Source, type Span } from './language/diagnostics.js';
import type { LineDeclaration } from './rule-lines.js';
export type DeclarationTokenKind = 'identifier' | 'keyword' | 'cell' | 'path' | 'number' | 'string' | 'json' | 'not' | 'if' | 'unless' | 'comment' | 'id' | 'eof';
export interface DeclarationToken {
    kind: DeclarationTokenKind;
    text: string;
    span: Span;
}
export interface DeclarationValue {
    kind: 'value';
    value: unknown;
    raw: string;
    span: Span;
    children?: DeclarationValue[];
    fields?: {
        name: DeclarationName;
        value: DeclarationValue;
        span: Span;
    }[];
}
export interface DeclarationName {
    value: string;
    span: Span;
}
export interface DeclarationParameter {
    notation?: 'keywords' | 'dimensions';
    name: DeclarationName;
    value: DeclarationValue;
    span: Span;
}
export interface DeclarationAST {
    kind: DeclarationName;
    instance?: DeclarationName;
    negations: {
        span: Span;
    }[];
    cells?: DeclarationValue;
    arguments?: DeclarationValue[];
    parameters: DeclarationParameter[];
    /** Knowledge and drawing data, separate from mathematical inputs. */
    meta?: DeclarationValue;
    condition?: {
        unless: boolean;
        predicate: DeclarationName;
        span: Span;
    };
    comment?: DeclarationName;
    span: Span;
}
export interface DeclarationGrammar {
    optionalLine?: boolean;
    line?: LineDeclaration;
    positional?: {
        name: string;
        form: 'dimensions';
    };
    primary?: string;
    total?: boolean;
    opaque?: boolean;
}
const instanceName = /^[\p{L}0-9][\p{L}\p{M}0-9_.-]*$/u;
const reservedInstanceNames = new Set(['not', 'if', 'unless', 'true', 'false', 'null', 'uniform', 'distinct', 'connected']);
const numberToken = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/;
// Instance names have their own syntax; formula identifiers and references do not change.
function bareInstanceName(value: string): boolean {
    return instanceName.test(value) && !reservedInstanceNames.has(value)
        && !path.test(value) && !/^\d+x\d+$/.test(value) && !numberToken.test(value);
}
const cell = /^r[1-9]\d*c[1-9]\d*$/;
const path = /^r\d+c\d+(?:[-,]r\d+c\d+)*$/;
/** Lex one declaration, retaining UTF-16 offsets and Unicode source columns. */
export function lexDeclaration(source: Source, code: DiagnosticCode = 'E_CASE_PARAMETERS'): Result<DeclarationToken[]> {
    return capture(() => {
        const out: DeclarationToken[] = [], text = source.text;
        let i = 0;
        const emit = (kind: DeclarationTokenKind, start: number) => out.push({ kind, text: text.slice(start, i), span: location(source, start, i) });
        while (i < text.length) {
            if (/\s/u.test(text[i])) {
                i++;
                continue;
            }
            const start = i;
            if (out.length && out.at(-1)!.span.end.offset === location(source, i, i).start.offset)
                fail(code, location(source, i, i + 1), 'Separate declaration tokens with whitespace.');
            if (text[i] === '#' && (text[i + 1] === undefined || /\s/u.test(text[i + 1]))) {
                i = text.trimEnd().length;
                emit('comment', start);
                break;
            }
            if ('"[{'.includes(text[i])) {
                const stack: string[] = [];
                let quoted = false, escaped = false;
                do {
                    const c = text[i++];
                    if (quoted) {
                        if (escaped) {
                            if (!'"\\/bfnrtu'.includes(c))
                                fail(code, location(source, i - 1, i), 'Use a JSON string escape after the backslash.');
                            if (c === 'u' && !/^[0-9a-fA-F]{4}$/.test(text.slice(i, i + 4)))
                                fail(code, location(source, i - 1, Math.min(i + 4, text.length)), 'A Unicode escape needs four hexadecimal digits.');
                            escaped = false;
                        }
                        else if (c === '\\')
                            escaped = true;
                        else if (c === '"')
                            quoted = false;
                        else if (c.charCodeAt(0) < 32)
                            fail(code, location(source, i - 1, i), 'Escape control characters inside JSON strings.');
                    }
                    else if (c === '"')
                        quoted = true;
                    else if (c === '[' || c === '{')
                        stack.push(c === '[' ? ']' : '}');
                    else if (c === ']' || c === '}') {
                        if (stack.pop() !== c)
                            fail(code, location(source, i - 1, i), 'Close each structured value with its matching bracket.');
                    }
                } while (i < text.length && (quoted || stack.length));
                if (quoted || stack.length)
                    fail(code, location(source, start, i), 'Close each quoted string and structured value.');
                if (text[start] === '"' && text[i] === ':') {
                    i++;
                    emit('id', start);
                }
                else
                    emit(text[start] === '"' ? 'string' : 'json', start);
            }
            else {
                while (i < text.length && !/\s/u.test(text[i]))
                    i++;
                const raw = text.slice(start, i);
                emit(raw.endsWith(':') && !raw.includes('://') ? 'id' : cell.test(raw) ? 'cell' : path.test(raw) ? 'path' : numberToken.test(raw) ? 'number' : ['not', 'if', 'unless'].includes(raw) ? raw as 'not' | 'if' | 'unless' : ['true', 'false', 'null', 'uniform', 'distinct', 'connected'].includes(raw) ? 'keyword' : 'identifier', start);
            }
        }
        out.push({ kind: 'eof', text: '', span: location(source, text.trimEnd().length, text.trimEnd().length) });
        return out;
    });
}
/** Structured JSON nodes include the spans of every item, field name and value. */
function valueNode(token: DeclarationToken, code: DiagnosticCode, depth = 0): DeclarationValue {
    if (depth > 128)
        fail(code, token.span, "Structured values must nest at most 128 levels.");
    const raw = token.text;
    const make = (value: unknown): DeclarationValue => ({ kind: 'value', value, raw, span: token.span });
    if (token.kind === 'cell')
        return make(raw);
    if (token.kind === 'path') {
        const node = make(raw.split(/[-,]/));
        let at = 0;
        node.children = (node.value as string[]).map(value => { const start = at; at += value.length + 1; return { kind: 'value', value, raw: value, span: subspan(token, start, start + value.length) }; });
        return node;
    }
    let value: unknown;
    try {
        // Cell paths may appear inside structured lists as well as at top level.
        const structured = raw.replace(/"(?:\\.|[^"\\])*"|r[1-9]\d*c[1-9]\d*(?:-r[1-9]\d*c[1-9]\d*)*/g, token =>
            token.startsWith('"') ? token : token.includes('-') ? JSON.stringify(token.split('-')) : JSON.stringify(token));
        value = JSON.parse(structured);
    }
    catch {
        fail(code, token.span, 'Write each parameter value as JSON or a cell in r1c1 form; close every string and bracket.');
    }
    if (typeof value === 'number' && !Number.isFinite(value))
        fail(code, token.span, 'Write a finite number.');
    const node = make(value);
    if (Array.isArray(value) || value && typeof value === 'object') {
        // JSON has already been validated; scan its members for exact child locations.
        let i = 1;
        const whitespace = () => { while (/\s/.test(raw[i] ?? '') && i < raw.length)
            i++; };
        const next = (): DeclarationValue => {
            whitespace();
            const start = i;
            let quoted = false, escaped = false, nesting = 0;
            while (i < raw.length) {
                const c = raw[i];
                if (!quoted && nesting === 0 && (c === ',' || c === ']' || c === '}'))
                    break;
                i++;
                if (quoted) {
                    if (escaped)
                        escaped = false;
                    else if (c === '\\')
                        escaped = true;
                    else if (c === '"')
                        quoted = false;
                }
                else if (c === '"')
                    quoted = true;
                else if (c === '[' || c === '{')
                    nesting++;
                else if (c === ']' || c === '}')
                    nesting--;
            }
            const text = raw.slice(start, i).trimEnd();
            return valueNode({ kind: cell.test(text) ? 'cell' : path.test(text) ? 'path' : text[0] === '"' ? 'string' : 'json', text, span: subspan(token, start, start + text.length) }, code, depth + 1);
        };
        whitespace();
        if (Array.isArray(value)) {
            node.children = [];
            while (i < raw.length - 1) {
                node.children.push(next());
                whitespace();
                if (raw[i] === ',')
                    i++;
                whitespace();
            }
        }
        else {
            node.fields = [];
            while (i < raw.length - 1) {
                whitespace();
                const start = i++;
                let escaped = false;
                while (i < raw.length) {
                    const c = raw[i++];
                    if (escaped)
                        escaped = false;
                    else if (c === '\\')
                        escaped = true;
                    else if (c === '"')
                        break;
                }
                const end = i, name = { value: JSON.parse(raw.slice(start, end)) as string, span: subspan(token, start, end) };
                whitespace();
                i++;
                const child = next();
                node.fields.push({ name, value: child, span: { file: token.span.file, start: name.span.start, end: child.span.end } });
                whitespace();
                if (raw[i] === ',')
                    i++;
                whitespace();
            }
        }
    }
    return node;
}
function subspan(token: DeclarationToken, start: number, end: number): Span {
    const position = (n: number) => {
        const prefix = token.text.slice(0, n), lines = prefix.split('\n');
        return { offset: token.span.start.offset + n, line: token.span.start.line + lines.length - 1, column: lines.length === 1 ? token.span.start.column + [...prefix].length : [...lines.at(-1)!].length + 1 };
    };
    return { file: token.span.file, start: position(start), end: position(end) };
}
const nameOf = (token: DeclarationToken): DeclarationName => ({ value: token.text, span: token.span });
/** Parse the common prefix once, then select the page-declared parameter grammar. */
export function parseDeclaration(source: Source, grammar: DeclarationGrammar | ((kind: string) => DeclarationGrammar) = {}): Result<DeclarationAST | null> {
    const lexed = lexDeclaration(source);
    if (!lexed.value)
        return { diagnostics: lexed.diagnostics };
    return capture(() => {
        const tokens = lexed.value!;
        let i = 0;
        if (tokens[i].kind === 'eof' || tokens[i].kind === 'comment')
            return null;
        let instance: DeclarationName | undefined;
        if (tokens[i].kind === 'id') {
            const token = tokens[i++], raw = token.text.slice(0, -1);
            if (!raw.startsWith('"') && !bareInstanceName(raw))
                fail('E_CASE_PARAMETERS', token.span, 'Use a letter or digit followed by letters, combining marks, digits, underscores, hyphens or dots for an instance ID; quote reserved words, cells, paths, dimensions, numbers and other names as JSON strings.');
            instance = { value: raw.startsWith('"') ? JSON.parse(raw) : raw, span: token.span };
        }
        const negations: {
            span: Span;
        }[] = [];
        while (tokens[i].kind === 'not')
            negations.push({ span: tokens[i++].span });
        const reference = tokens[i++];
        if (!reference || reference.kind === 'eof')
            fail('E_KIND_UNKNOWN', tokens[i - 1].span, 'Supply a rule kind after the instance ID and negation.');
        const selected = typeof grammar === 'function' ? grammar(reference.text) : grammar;
        const tail = parseDeclarationTailTokens(tokens.slice(i), selected);
        if (!tail.value)
            throwDiagnostic(tail.diagnostics[0]);
        const end = tokens.filter(t => t.kind !== 'eof').at(-1)!.span.end;
        return { kind: nameOf(reference), ...(instance ? { instance } : {}), negations, ...tail.value!, span: { file: source.file, start: tokens[0].span.start, end } };
    });
}
function throwDiagnostic(d: import('./language/diagnostics.js').Diagnostic): never { fail(d.code, d.span, d.message, d.detail); }
export type DeclarationTail = Pick<DeclarationAST, 'cells' | 'parameters' | 'condition' | 'comment' | 'arguments' | 'meta'>;
export function parseDeclarationTail(source: Source, grammar: DeclarationGrammar = {}): Result<DeclarationTail> {
    const lexed = lexDeclaration(source, grammar.line ? 'E_LINE_SYNTAX' : 'E_CASE_PARAMETERS');
    return lexed.value ? parseDeclarationTailTokens(lexed.value, grammar) : { diagnostics: lexed.diagnostics };
}
function parseDeclarationTailTokens(all: DeclarationToken[], grammar: DeclarationGrammar): Result<DeclarationTail> {
    return capture(() => {
        const comment = all.find(t => t.kind === 'comment');
        const tokens = all.filter(t => t.kind !== 'comment' && t.kind !== 'eof');
        const eof = all.at(-1)!;
        let i = 0;
        const here = () => tokens[i]?.span ?? eof.span;
        const result: DeclarationTail = { parameters: [], ...(comment ? { comment: nameOf(comment) } : {}) };
        const add = (name: string, value: DeclarationValue, span: Span, nameSpan = span) => result.parameters.push({ name: { value: name, span: nameSpan }, value, span });
        const line = grammar.line;
        if (line && (!grammar.optionalLine || path.test(tokens[i]?.text ?? ''))) {
            const t = tokens[i], cells = t?.text.split(/[-,]/) ?? [];
            if (cells.length !== line.cells.count || cells.some(c => !cell.test(c)))
                fail('E_LINE_SYNTAX', here(), `Write ${line.cells.count} cells for ${line.cells.name}, joined by hyphens, such as r1c1-r1c2.`);
            result.cells = valueNode({ ...t, kind: 'path' }, 'E_LINE_SYNTAX');
            i++;
            const p = line.parameter;
            const parameterName = p.named && tokens[i]?.text === p.name ? tokens[i++] : undefined;
            const keywordToken = tokens[i];
            let keyword = keywordToken?.text ?? '';
            if (p.named && keywordToken?.kind === 'string') {
                try {
                    keyword = JSON.parse(keyword);
                }
                catch { }
            }
            if (!Object.hasOwn(p.keywords, keyword))
                fail('E_LINE_KEYWORD', here(), `${keyword || 'This line'} is not a ${p.name} keyword; choose ${Object.keys(p.keywords).join(', ')}.`);
            i++;
            const fields: NonNullable<DeclarationValue['fields']> = [];
            const value: Record<string, unknown> = p.tag ? { [p.tag]: keyword } : {};
            if (p.tag)
                fields.push({ name: { value: p.tag, span: keywordToken.span }, value: { kind: 'value', value: keyword, raw: JSON.stringify(keyword), span: keywordToken.span }, span: keywordToken.span });
            for (const operand of p.keywords[keyword]) {
                const token = tokens[i];
                if (!token || ['if', 'unless'].includes(token.text))
                    fail('E_LINE_VALUE', here(), `${keyword} needs a ${operand.field}; write a whole number after ${keyword}.`);
                if (!/^-?\d+$/.test(token.text))
                    fail('E_LINE_TYPE', here(), `The ${keyword} ${operand.field} must be a whole number; ${token.text} is not a whole number.`);
                value[operand.field] = BigInt(token.text).toString();
                fields.push({ name: { value: operand.field, span: token.span }, value: { kind: 'value', value: value[operand.field], raw: token.text, span: token.span }, span: token.span });
                i++;
            }
            const span = { file: keywordToken.span.file, start: keywordToken.span.start, end: tokens[i - 1].span.end };
            add(p.name, { kind: 'value', value: p.tag ? value : keyword, raw: tokens.slice(tokens.indexOf(keywordToken), i).map(t => t.text).join(' '), span, ...(p.tag ? { fields } : {}) }, span);
            result.parameters.at(-1)!.notation = 'keywords';
            if (parameterName) {
                result.parameters.at(-1)!.name.span = parameterName.span;
                result.parameters.at(-1)!.span = { ...span, start: parameterName.span.start };
            }
        }
        else if (grammar.opaque) {
            if (tokens[i] && path.test(tokens[i].text))
                result.cells = valueNode({ ...tokens[i++], kind: 'path' }, 'E_CASE_PARAMETERS');
            const marker = tokens.findIndex(t => t.kind === 'if' || t.kind === 'unless');
            const end = marker < 0 ? tokens.length : marker;
            result.arguments = tokens.slice(i,end).map(t => ({ kind: 'value', value: t.text, raw: t.text, span: t.span }));
            i = end;
        }
        else {
            if (tokens[i] && path.test(tokens[i].text)) {
                result.cells = valueNode({ ...tokens[i++], kind: 'path' }, 'E_CASE_PARAMETERS');
            }
            if (grammar.positional && tokens[i] && /^\d+x\d+$/.test(tokens[i].text)) {
                const token = tokens[i++], [rows, cols] = token.text.split('x').map(Number);
                if (!Number.isFinite(rows) || !Number.isFinite(cols))
                    fail('E_CASE_PARAMETERS', token.span, 'Write finite board dimensions.');
                const split = token.text.indexOf('x');
                const fields = [['rows', rows, 0, split], ['cols', cols, split + 1, token.text.length]].map(([name, value, start, end]) => {
                    const span = subspan(token, Number(start), Number(end));
                    return { name: { value: String(name), span }, value: { kind: 'value' as const, value, raw: String(value), span }, span };
                });
                add(grammar.positional.name, { kind: 'value', value: { rows, cols }, raw: token.text, span: token.span, fields }, token.span);
                result.parameters.at(-1)!.notation = 'dimensions';
            }
        }
        if (!grammar.opaque) {
            while (i < tokens.length && !['if', 'unless'].includes(tokens[i].kind)) {
                const name = tokens[i++], value = tokens[i++];
                if (!value)
                    fail('E_CASE_PARAMETERS', name.span, 'Write parameters as name/value pairs.');
                let text = name.text;
                if (name.kind === 'string') {
                    try {
                        text = JSON.parse(text);
                    }
                    catch {
                        fail('E_CASE_PARAMETERS', name.span, 'A parameter name must be text.');
                    }
                }
                if (['cells', 'line'].includes(text) && grammar.primary)
                    text = grammar.primary;
                if (text === 'sum' && grammar.primary === 'cells' && grammar.total)
                    text = 'total';
                if (text === 'meta') {
                    if (result.meta) fail('E_CASE_PARAMETERS', name.span, 'Declare meta once.');
                    result.meta = valueNode(value, 'E_CASE_PARAMETERS');
                    continue;
                }
                add(text, valueNode(value, 'E_CASE_PARAMETERS'), { file: name.span.file, start: name.span.start, end: value.span.end }, name.span);
            }
        }
        if (i < tokens.length) {
            const marker = tokens[i++], predicate = tokens[i++];
            if (!predicate || !['uniform', 'distinct', 'connected'].includes(predicate.text) || i !== tokens.length)
                fail('E_CASE_PARAMETERS', predicate?.span ?? marker.span, 'Use uniform, distinct or connected for a condition.');
            result.condition = { unless: marker.kind === 'unless', predicate: nameOf(predicate), span: { file: marker.span.file, start: marker.span.start, end: predicate.span.end } };
        }
        return result;
    });
}
export function declarationParameters(ast: DeclarationTail, primary = 'cells'): Record<string, unknown> {
    const data: Record<string, unknown> = Object.create(null);
    if (ast.cells)
        data[primary] = ast.cells.value;
    for (const parameter of ast.parameters)
        data[parameter.name.value] = parameter.value.value;
    return data;
}
/** Canonical text retains optional authored labels, negation count, cell order and exact keyword integers.
 * Positional semantic identities are provenance only and are never printed as labels. */
export function printDeclaration(ast: DeclarationAST, grammar: DeclarationGrammar = {}): string {
    const parts: string[] = [];
    if (ast.instance)
        parts.push(`${bareInstanceName(ast.instance.value) ? ast.instance.value : JSON.stringify(ast.instance.value)}:`);
    parts.push(...ast.negations.map(() => 'not'), ast.kind.value);
    if (ast.cells)
        parts.push((ast.cells.value as string[]).join('-'));
    if (ast.arguments)
        parts.push(...ast.arguments.map(a => a.raw));
    for (const p of ast.parameters) {
        if (grammar.line && p.name.value === grammar.line.parameter.name) {
            const spec = grammar.line.parameter, value = p.value.value, keyword = spec.tag ? (value as Record<string, unknown>)[spec.tag] as string : value as string;
            parts.push(keyword, ...spec.keywords[keyword].map(o => String((value as Record<string, unknown>)[o.field])));
        }
        else if (p.notation === 'keywords') {
            const values = p.value.fields?.map(f => f.value.value) ?? [p.value.value];
            parts.push(...values.map(String));
        }
        else if (p.notation === 'dimensions') {
            const v = p.value.value as {
                rows: number;
                cols: number;
            };
            parts.push(`${BigInt(v.rows)}x${BigInt(v.cols)}`);
        }
        else
            parts.push(/^[a-z][a-z0-9-]*$/i.test(p.name.value) && !['if', 'unless'].includes(p.name.value) ? p.name.value : JSON.stringify(p.name.value), printValue(p.value));
    }
    if (ast.meta) parts.push('meta', printValue(ast.meta));
    if (ast.condition)
        parts.push(ast.condition.unless ? 'unless' : 'if', ast.condition.predicate.value);
    if (ast.comment)
        parts.push(ast.comment.value);
    return parts.join(' ');
}
function printValue(node: DeclarationValue): string {
    if (node.fields)
        return `{${node.fields.map(field => `${JSON.stringify(field.name.value)}:${printValue(field.value)}`).join(',')}}`;
    if (node.children)
        return `[${node.children.map(printValue).join(',')}]`;
    if (typeof node.value === 'number' && !Number.isFinite(node.value))
        throw new Error('Write a finite number.');
    if (Object.is(node.value, -0)) return '-0';
    return JSON.stringify(node.value, (_, value) => {
        if (typeof value === 'number' && !Number.isFinite(value))
            throw new Error('Write a finite number.');
        return value;
    });
}

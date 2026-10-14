export const languageChecks = [
  "E_FORMULA_SYNTAX", "E_FORMULA_REQUIRED", "E_SIGNATURE_REQUIRED", "E_NAME_UNDEFINED",
  "E_NAME_UNBOUND", "E_CALL_ARITY", "E_TYPE", "E_NAME_SHADOW", "E_RECURSION",
  "E_OPERATION_UNGUARDED", "E_LOGIC_CLASS", "E_ARITHMETIC", "E_LANGUAGE_LIMIT",
] as const;
export type DiagnosticCode = typeof languageChecks[number] | "E_HEADER_REQUIRED" | "E_HEADER_TYPE" | "E_LIBRARY_URL" | "E_RULES_REQUIRED" | "E_KIND_UNKNOWN" | "E_ALIAS_TARGET" | "E_LINE_DECLARATION" | "E_LINE_KEYWORD" | "E_LINE_VALUE" | "E_LINE_TYPE" | "E_LINE_SYNTAX" | "E_READING_FIELD" | "E_READING_PLACEHOLDER" | "E_READING_PARAMETER" | "E_READING_EXAMPLE";
export interface Position { offset: number; line: number; column: number }
export interface Span { file: string; start: Position; end: Position }
export interface Diagnostic { code: DiagnosticCode; check: DiagnosticCode; message: string; span: Span; detail?: string }
export interface Source { text: string; file: string; offset?: number; document?: string }
export interface Result<T> { value?: T; diagnostics: Diagnostic[] }

export class LanguageError extends Error {
  constructor(public diagnostic: Diagnostic) { super(diagnostic.message); }
}
export function location(source: Source, start: number, end = start + 1): Span {
  const document = source.document ?? source.text;
  const base = source.offset ?? 0;
  let index = locations.get(source);
  if (!index) {
    index = { lines: [0], surrogatePairs: [] };
    for (let i = 0; i < document.length; i++) {
      if (document[i] === "\n") index.lines.push(i + 1);
      if (document.charCodeAt(i) >= 0xdc00 && document.charCodeAt(i) <= 0xdfff && i > 0 && document.charCodeAt(i - 1) >= 0xd800 && document.charCodeAt(i - 1) <= 0xdbff) index.surrogatePairs.push(i);
    }
    locations.set(source, index);
  }
  const position = (at: number): Position => {
    const line = upperBound(index.lines, at);
    const beginning = index.lines[line - 1];
    const pairs = upperBound(index.surrogatePairs, at - 1) - upperBound(index.surrogatePairs, beginning - 1);
    return { offset: at, line, column: at - beginning - pairs + 1 };
  };
  return { file: source.file, start: position(base + start), end: position(base + end) };
}
const locations = new WeakMap<Source, { lines: number[]; surrogatePairs: number[] }>();
function upperBound(values: number[], at: number): number {
  let low = 0, high = values.length;
  while (low < high) { const mid = (low + high) >>> 1; if (values[mid] <= at) low = mid + 1; else high = mid; }
  return low;
}
export function diagnostic(code: DiagnosticCode, span: Span, message: string, detail?: string): Diagnostic {
  return { code, check: code, message, span, ...(detail === undefined ? {} : { detail }) };
}
export function fail(code: DiagnosticCode, span: Span, message: string, detail?: string): never {
  throw new LanguageError(diagnostic(code, span, message, detail));
}
export function capture<T>(operation: () => T): Result<T> {
  try { return { value: operation(), diagnostics: [] }; }
  catch (error) {
    if (error instanceof LanguageError) return { diagnostics: [error.diagnostic] };
    throw error;
  }
}

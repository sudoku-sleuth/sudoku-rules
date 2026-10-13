import type { Type } from "./language/ast.js";
import type { CheckedPrelude } from "./language/checker.js";
import { capture, fail, location, type Result, type Source, type Span } from "./language/diagnostics.js";
import type { CompiledPage } from "./library.js";

/** Opt-in line syntax belongs to parameter declarations, not to kind names. */
export const ruleLineChecks = ["E_LINE_DECLARATION", "E_LINE_KEYWORD", "E_LINE_VALUE", "E_LINE_TYPE", "E_LINE_SYNTAX"] as const;
interface Operand { field: string; type: "integer" }
export interface KeywordParameter { name: string; tag?: string; keywords: Record<string, Operand[]>; named: boolean }
export interface LineDeclaration { cells: { name: string; count: number }; parameter: KeywordParameter }
const object = (value: unknown): value is Record<string, unknown> => !!value && typeof value === "object" && !Array.isArray(value);
const resolve = (type: Type, prelude: CheckedPrelude): Type => prelude.environment.types?.[type.name] ?? type;

export function declareRuleLine(metadata: Record<string, unknown>, page: CompiledPage, prelude: CheckedPrelude, span: Span): Result<LineDeclaration | undefined> {
  return capture(() => {
    const parameters = object(metadata.parameters) ? metadata.parameters : {};
    const marked = Object.entries(parameters).filter(([, value]) => object(value) && value.syntax !== undefined);
    if (!marked.length) return undefined;
    const invalid = (): never => fail("E_LINE_DECLARATION", span, "The rule-line syntax must declare one cell list and one keyword parameter, with choices and fields matching their declared types.");
    let cells: LineDeclaration["cells"] | undefined, parameter: KeywordParameter | undefined;
    for (const [name, raw] of marked) {
      if (!object(raw) || !object(raw.syntax)) invalid();
      const syntax = (raw as { syntax: Record<string, unknown> }).syntax;
      const declared = page.parameters.find(p => p.name === name);
      if (!declared) invalid();
      const type = resolve(declared!.type, prelude);
      if (syntax.form === "cells") {
        if (cells || !["list", "path"].includes(type.name) || type.args?.[0]?.name !== "cell" || !Number.isSafeInteger(syntax.count) || Number(syntax.count) < 1) invalid();
        cells = { name, count: Number(syntax.count) };
      } else if (syntax.form === "keywords") {
        if (parameter || !object(syntax.choices) || syntax.named !== undefined && typeof syntax.named !== "boolean") invalid();
        const tag = syntax.tag;
        const enumType = tag === undefined ? type : typeof tag === "string" && type.name === "record" ? type.fields?.[tag] : undefined;
        if (enumType?.name !== "enum") invalid();
        const choices = syntax.choices as Record<string, unknown>;
        if (Object.keys(choices).sort().join("\0") !== [...enumType!.members!].sort().join("\0")) invalid();
        const keywords: Record<string, Operand[]> = Object.create(null);
        for (const [keyword, fields] of Object.entries(choices)) {
          if (!/^[a-z]+(?:-[a-z]+)*$/.test(keyword) || !object(fields)) invalid();
          keywords[keyword] = [];
          for (const [field, codec] of Object.entries(fields as Record<string, unknown>)) {
            const fieldType = type.fields?.[field];
            const valueType = fieldType?.name === "optional" ? fieldType.args?.[0] : fieldType;
            if (field === tag || codec !== "integer" || !valueType || !["number", "position", "digit", "value"].includes(valueType.name)) invalid();
            keywords[keyword].push({ field, type: "integer" });
          }
          // Every non-optional record field other than the discriminator must be supplied.
          for (const [field, valueType] of Object.entries(type.fields ?? {}))
            if (field !== tag && valueType.name !== "optional" && !Object.hasOwn(fields as object, field)) invalid();
        }
        parameter = { name, ...(typeof tag === "string" ? { tag } : {}), keywords, named: syntax.named === true };
      } else invalid();
    }
    if (!cells || !parameter) invalid();
    return { cells: cells!, parameter: parameter! };
  });
}

/** Parse only declared line parameters; board bounds and composition are later checks. */
export function parseDeclaredRuleLine(source: Source, declaration: LineDeclaration): Result<Record<string, unknown>> {
  return capture(() => {
    const tokens = [...source.text.matchAll(/"(?:[^"\\]|\\.)*"|\S+/g)];
    let i = 0;
    const here = () => tokens[i] ? location(source, tokens[i].index!, tokens[i].index! + tokens[i][0].length) : location(source, source.text.trimEnd().length, source.text.trimEnd().length);
    const cellToken = tokens[i]?.[0] ?? "";
    const cells = cellToken.split(/[-,]/);
    if (cells.length !== declaration.cells.count || cells.some(cell => !/^r[1-9]\d*c[1-9]\d*$/.test(cell)))
      fail("E_LINE_SYNTAX", here(), `Write ${declaration.cells.count} cells for ${declaration.cells.name}, joined by hyphens, such as r1c1-r1c2.`);
    i++;
    const parameter = declaration.parameter;
    if (parameter.named && tokens[i]?.[0] === parameter.name) i++;
    let keyword = tokens[i]?.[0] ?? "";
    if (parameter.named && keyword.startsWith('"')) {
      try { keyword = JSON.parse(keyword); } catch { /* reported as an unknown keyword below */ }
    }
    if (!Object.hasOwn(parameter.keywords, keyword))
      fail("E_LINE_KEYWORD", here(), `${keyword || "This line"} is not a ${parameter.name} keyword; choose ${Object.keys(parameter.keywords).join(", ")}.`);
    i++;
    const value: Record<string, unknown> = parameter.tag ? { [parameter.tag]: keyword } : {};
    for (const operand of parameter.keywords[keyword]) {
      const token = tokens[i]?.[0];
      if (token === undefined || ["if", "unless"].includes(token))
        fail("E_LINE_VALUE", here(), `${keyword} needs a ${operand.field}; write a whole number after ${keyword}.`);
      if (!/^-?\d+$/.test(token))
        fail("E_LINE_TYPE", here(), `The ${keyword} ${operand.field} must be a whole number; ${token} is not a whole number.`);
      // Keep the exact decimal spelling: no floating-point rounding or safe-integer restriction.
      value[operand.field] = BigInt(token).toString();
      i++;
    }
    if (i < tokens.length && !(["if", "unless"].includes(tokens[i][0]) && tokens.length === i + 2 && ["uniform", "distinct", "connected"].includes(tokens[i + 1][0])))
      fail("E_LINE_SYNTAX", here(), `Unexpected ${tokens[i][0]} after ${keyword}; use only its declared values and an optional if or unless condition.`);
    return { [declaration.cells.name]: cells, [parameter.name]: parameter.tag ? value : keyword };
  });
}

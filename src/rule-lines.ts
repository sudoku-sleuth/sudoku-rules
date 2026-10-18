import { parseDeclarationTail, declarationParameters } from "./declarations.js";
import type { Type } from "./language/ast.js";
import type { CheckedPrelude } from "./language/checker.js";
import { capture, fail, type Result, type Source, type Span } from "./language/diagnostics.js";
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
    const dimensions = Object.entries(parameters).filter(([,raw]) => object(raw) && object(raw.syntax) && raw.syntax.form === "dimensions");
    for(const [name,raw] of dimensions) {
      const type = page.parameters.find(p => p.name === name)?.type;
      const syntax = (raw as {syntax:Record<string,unknown>}).syntax;
      if(dimensions.length !== 1 || Object.keys(syntax).some(k=>k!=="form") || type?.name !== "record" || Object.keys(type.fields ?? {}).sort().join(",") !== "cols,rows" || type.fields?.rows.name !== "position" || type.fields?.cols.name !== "position")
        fail("E_LINE_DECLARATION",span,"Dimension syntax needs one record parameter with rows and cols of type position.");
    }
    const marked = Object.entries(parameters).filter(([, value]) => object(value) && value.syntax !== undefined && (!object(value.syntax) || value.syntax.form !== "dimensions"));
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
  const parsed = parseDeclarationTail(source, {line: declaration});
  return parsed.value ? {value: declarationParameters(parsed.value, declaration.cells.name), diagnostics: []} : {diagnostics: parsed.diagnostics};
}

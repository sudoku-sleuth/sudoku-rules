import type { Span } from "./diagnostics.js";

export interface Type { name: string; args?: Type[]; result?: Type; fields?: Record<string, Type>; members?: string[] }
export interface Binder { name: string; span: Span; type?: Type }
export interface Expr {
  kind: "number" | "literal" | "boolean" | "name" | "unary" | "binary" | "call" | "index" | "member" | "interval" | "set" | "comprehension" | "image" | "quantifier" | "aggregate" | "lambda" | "conditional" | "let";
  span: Span;
  value?: string;
  children: Expr[];
  binders?: Binder[];
  hasDomain?: boolean;
  inclusive?: boolean;
}
export interface TypedExpr extends Omit<Expr, "children"> {
  type: Type;
  children: TypedExpr[];
  constant?: string;
}
export interface Parameter { name: string; type: Type; span: Span }
export interface Declaration {
  kind: "input" | "primitive" | "term" | "type";
  name: string;
  span: Span;
  parameters: Parameter[];
  generics: string[];
  result: Type;
  body?: Expr;
  requires?: Expr;
}
export interface TypedDeclaration extends Omit<Declaration, "body" | "requires"> { body?: TypedExpr; requires?: TypedExpr }
export type LogicClass = "first-order" | "with aggregates" | "existential";
export interface CheckedFormula { ast: TypedExpr; logicClass: LogicClass }
export const scalar = (name: string): Type => ({ name });
export const collection = (name: string, item: Type): Type => ({ name, args: [item] });
export function typeName(type: Type): string {
  if (type.name === "record") return `record{${Object.entries(type.fields ?? {}).map(([name, value]) => `${name}:${typeName(value)}`).join(",")}}`;
  if (type.name === "enum" || type.name === "literal") return `${type.name}{${type.members?.join(",")}}`;
  if (type.name === "fn") return `fn(${(type.args ?? []).map(typeName).join(",")})->${typeName(type.result!)}`;
  return type.name + (type.args ? `<${type.args.map(typeName).join(",")}>` : "");
}

import type { Expr, Type } from "./ast.js";

/** Use source names and notation, never internal model paths, in setter messages. */
export function expressionLabel(node: Expr, depth = 0): string {
  if (depth > 4) return "…";
  const child = (i: number) => expressionLabel(node.children[i], depth + 1);
  let text: string;
  switch (node.kind) {
    case "name": case "number": case "boolean": text = node.value!; break;
    case "literal": text = JSON.stringify(node.value); break;
    case "call": text = `${child(0)}(${node.children.slice(1, 5).map(value => expressionLabel(value, depth + 1)).join(", ")}${node.children.length > 5 ? ", …" : ""})`; break;
    case "index": text = `${child(0)}[${child(1)}]`; break;
    case "member": text = `${child(0)}.${node.value}`; break;
    case "binary": text = `(${child(0)} ${node.value} ${child(1)})`; break;
    case "unary": text = node.value === "magnitude" ? `|${child(0)}|` : node.value === "floor" ? `⌊${child(0)}⌋` : `${node.value}(${child(0)})`; break;
    case "interval": text = `[${child(0)}, ${child(1)}${node.inclusive ? "]" : ")"}`; break;
    case "set": text = node.children.length ? "this set" : "the empty set"; break;
    default: text = `this ${({ aggregate: "sum or count", quantifier: "condition", comprehension: "set", lambda: "function", conditional: "choice", let: "local value" } as const)[node.kind]}`;
  }
  return text.length > 100 ? `${text.slice(0, 97)}…` : text;
}

export function describeType(type: Type, depth = 0): string {
  if (depth > 4) return "an item";
  const item = () => describeType(type.args![0], depth + 1);
  switch (type.name) {
    case "cell": return "a cell";
    case "digit": return "a face digit";
    case "value": return "an effective value";
    case "position": return "a whole-number position";
    case "number": return "a number";
    case "boolean": return "a true-or-false condition";
    case "path": return `a connected ordered list whose items are each ${item()}`;
    case "list": return `an ordered list whose items are each ${item()}`;
    case "set": return `a set whose items are each ${item()}`;
    case "optional": return `${item()}, or a missing answer`;
    case "fn": return `a function taking ${(type.args ?? []).map(value => describeType(value, depth + 1)).join(", ") || "no arguments"} and returning ${describeType(type.result!, depth + 1)}`;
    case "record": return `a group of named fields (${Object.keys(type.fields ?? {}).join(", ")})`;
    case "enum": return `one of the choices ${(type.members ?? []).join(", ")}`;
    case "literal": return `the choice ${(type.members ?? []).join(", ")}`;
    case "empty": return "an item of an empty set";
    default: return `the declared type ${type.name}`;
  }
}

import { declarationParameters, type DeclarationValue, type DeclarationTail, type DeclarationGrammar } from "./declarations.js";
import type { Type } from "./language/ast.js";
import { diagnostic, type Diagnostic, type Span } from "./language/diagnostics.js";

export const object = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v);
export interface CaseBoard { rows?: number; cols?: number; symbols?: number[]; standard: boolean }
export interface SharedParameter { role: "construct" | "read" | "conjoin"; type: "route" | "network" | "partition" | "selection" | "choice" | "assignment" | "value" | "symbol" }
export interface CaseParameters { parameters: Record<string, { type?: Type; required: boolean; default?: unknown; emptyWhen?: string; shared?: SharedParameter }>; types: Record<string, Type>; explicit?: string[]; positional?: DeclarationGrammar["positional"] }
export const explicitBoardParameters: Record<string, string[]> = {
  "liar-cells": ["groups", "values"],
  summit: ["loop"], whispers: ["loop"], parity: ["loop"], modular: ["loop", "modulus"],
  entropic: ["loop"], primality: ["loop"], "line-choice": ["loop"],
  nabner: ["distinct"], cage: ["repeats"], sandwich: ["crusts"],
};
export const caseValueChecks = ["E_CASE_BOARD", "E_CASE_PARAMETERS", "E_CUSTOM_DEFINITION", "W_CASE_HOUSES"] as const;

const cellPattern = /^r([1-9]\d*)c([1-9]\d*)$/;
export function cellValid(value: unknown, board: CaseBoard): boolean {
  if (typeof value !== "string") return false;
  const m = cellPattern.exec(value);
  return !!m && (board.rows === undefined || Number(m[1]) <= board.rows) && (board.cols === undefined || Number(m[2]) <= board.cols);
}

/** Decode case JSON against the same signatures used by the formula compiler. */
export function valueProblem(value: unknown, type: Type, types: Record<string, Type>, board: CaseBoard, depth = 0): string | undefined {
  if (depth > 128) return "exceeds the type nesting limit";
  const alias = Object.hasOwn(types, type.name) ? types[type.name] : undefined;
  if (alias) return valueProblem(value, alias, types, board, depth + 1);
  const child = (v: unknown, t: Type) => valueProblem(v, t, types, board, depth + 1);
  switch (type.name) {
    case "optional": return value === undefined ? undefined : child(value, type.args![0]);
    case "cell": return cellValid(value, board) ? undefined : "must be an in-board cell in r1c1 form";
    case "number": case "value": case "digit": case "position":
      return typeof value === "bigint" || typeof value === "number" && Number.isFinite(value) && (!["position", "digit"].includes(type.name) || Number.isInteger(value)) ? undefined : `must be a ${["position", "digit"].includes(type.name) ? "whole number" : "finite number"}`;
    case "string": return typeof value === "string" ? undefined : "must be text";
    case "boolean": return typeof value === "boolean" ? undefined : "must be true or false";
    case "enum": return typeof value === "string" && type.members?.includes(value) ? undefined : `must be one of ${type.members?.join(", ")}`;
    case "set": case "list": case "path": case "collection":
      if (!Array.isArray(value)) return "must be a list";
      for (const [i, v] of value.entries()) { const problem = child(v, type.args![0]); if (problem) return `item ${i + 1} ${problem}`; }
      return;
    case "record":
      if (!object(value)) return "must be an object";
      for (const key of Object.keys(value)) if (!Object.hasOwn(type.fields ?? {}, key)) return `has unknown field ${key}`;
      for (const [key, t] of Object.entries(type.fields ?? {})) { const problem = child(value[key], t); if (problem) return `${key} ${problem}`; }
      return;
    case "clause":
      return object(value) && Object.keys(value).every(k => ["id", "rule", "args"].includes(k)) && typeof value.id === "string" && !!value.id.trim() && typeof value.rule === "string" && !!value.rule && object(value.args) ? undefined : "must be a clue record with id, rule and named args";
    case "expression":
      // Expressions are authored JSON arithmetic trees, not executable source strings.
      if (!object(value)) return "must be an arithmetic expression";
      if (value.op === "number" && typeof value.value === "number" && Number.isFinite(value.value) && Object.keys(value).length === 2) return;
      if (value.op === "letter" && typeof value.name === "string" && Object.keys(value).length === 2) return;
      if (typeof value.op === "string" && ["+", "-", "*", "/", "^"].includes(value.op) && Object.keys(value).every(k => ["op", "left", "right"].includes(k)))
        return child(value.left, type) ?? child(value.right, type);
      return "must be an arithmetic expression";
    default: return `has unsupported case type ${type.name}`;
  }
}

export function checkBoard(metadata: Record<string, unknown>, standardCount: number, field: (name: string) => Span): { board: CaseBoard; diagnostics: Diagnostic[] } {
  const diagnostics: Diagnostic[] = [];
  const add = (name: string, message: string) => diagnostics.push(diagnostic("E_CASE_BOARD", field(name), message));
  const raw = metadata.board;
  const standard = standardCount > 0;
  const board: CaseBoard = { rows: standard ? 9 : undefined, cols: standard ? 9 : undefined, symbols: standard ? [1,2,3,4,5,6,7,8,9] : undefined, standard };
  if (standardCount > 1) add("board", "Declare sudoku 9x9 once.");
  if (raw !== undefined) {
    if (!object(raw)) add("board", "Write board as rows, cols, symbols, givens and regions.");
    else {
      for (const key of Object.keys(raw)) if (!["rows", "cols", "symbols", "givens", "regions"].includes(key)) add("board", `Unknown board field ${key}.`);
      for (const key of ["rows", "cols"] as const) {
        if (!Number.isSafeInteger(raw[key]) || Number(raw[key]) < 1) add("board", `board.${key} must be a positive whole number.`);
        else board[key] = Number(raw[key]);
      }
      if (!Array.isArray(raw.symbols) || !raw.symbols.length || raw.symbols.some(v => typeof v !== "number" || !Number.isFinite(v)) || new Set(raw.symbols).size !== raw.symbols.length) add("board", "board.symbols must be a nonempty list of distinct finite numbers.");
      else board.symbols = raw.symbols as number[];
      if (standard && (board.rows !== 9 || board.cols !== 9 || board.symbols?.join(",") !== "1,2,3,4,5,6,7,8,9")) add("board", "sudoku 9x9 requires the standard 1–9 board.");
    }
  }
  if (!standard && raw === undefined) add("board", "Declare a board or sudoku 9x9.");
  board.standard = board.rows === 9 && board.cols === 9 && board.symbols?.join(",") === "1,2,3,4,5,6,7,8,9";
  const explicit = object(raw) ? raw : {};
  if (metadata.givens !== undefined && explicit.givens !== undefined) add("givens", "Declare givens once, in the header or in board.givens.");
  for (const [name, givens] of [["givens", metadata.givens], ["board", explicit.givens]] as const) {
    if (givens === undefined) continue;
    let entries: unknown = givens;
    if (typeof givens === "string") {
      if (!givens.trim()) entries = [];
      else if (givens.includes("=")) {
        entries = givens.trim().split(/\s+/).map(pair => { const [cell, digit, extra] = pair.split("="); return { cell, digit: digit && extra === undefined ? Number(digit) : NaN }; });
      } else if (board.rows && board.cols && givens.length === board.rows * board.cols) {
        entries = [...givens].flatMap((s, i) => s === "." ? [] : [{ cell: `r${Math.floor(i / board.cols!) + 1}c${i % board.cols! + 1}`, digit: /^[0-9]$/.test(s) ? Number(s) : NaN }]);
      } else { add(name, "A given grid needs one character per cell; use . for empty cells."); continue; }
    }
    if (!Array.isArray(entries)) { add(name, "Write givens as a grid, cell=digit pairs or a list of cell/digit objects."); continue; }
    const seen = new Set<string>();
    for (const entry of entries) {
      if (!object(entry) || Object.keys(entry).some(k => !["cell", "digit"].includes(k)) || !cellValid(entry.cell, board) || typeof entry.digit !== "number" || !board.symbols?.includes(entry.digit)) { add(name, "Each given needs an in-board cell and a declared digit."); continue; }
      if (seen.has(String(entry.cell))) add(name, `Cell ${entry.cell} has more than one given.`);
      seen.add(String(entry.cell));
    }
  }
  if (!standard && metadata.regions !== undefined) add("regions", "Use board.regions when sudoku 9x9 is absent.");
  if (standard && Array.isArray(explicit.regions) && explicit.regions.length) add("board", "sudoku 9x9 supplies boxes; list extra regions at the top level.");
  for (const [name, regions] of [["regions", metadata.regions], ["board", explicit.regions]] as const) if (regions !== undefined && (!Array.isArray(regions) || regions.some(r => !Array.isArray(r) || r.some(c => !cellValid(c, board))))) add(name, "Regions must be lists of in-board cells.");
  return { board, diagnostics };
}

export function parameterGrammar(contract?: CaseParameters): DeclarationGrammar {
  const parameters = contract?.parameters ?? {};
  return {primary: Object.hasOwn(parameters, "cells") ? "cells" : Object.hasOwn(parameters, "line") ? "line" : undefined, total: Object.hasOwn(parameters, "total"), positional: contract?.positional};
}
export function checkParameterAST(ast: DeclarationTail, span: Span, contract: CaseParameters, board: CaseBoard): Diagnostic[] {
  const bad = (message: string, at = span) => [diagnostic("E_CASE_PARAMETERS", at, message)];
  const parameters = contract.parameters, primary = parameterGrammar(contract).primary;
  if(ast.cells && !primary) return bad("This rule has no primary cell list; name each parameter.", ast.cells.span);
  const data = declarationParameters(ast, primary);
  const seen = new Set(ast.cells && primary ? [primary] : []);
  for(const parameter of ast.parameters) {
    const name = parameter.name.value;
    // Keyword operands are exact integers. Validate their decoded numeric value
    // against the same page type without changing their AST representation.
    if (parameter.notation === 'keywords' && parameter.value.fields) {
      const record = {...parameter.value.value as Record<string, unknown>};
      for (const field of parameter.value.fields) if (/^-?\d+$/.test(field.value.raw))
        record[field.name.value] = BigInt(field.value.raw);
      data[name] = record;
    }
    if(!Object.hasOwn(parameters,name)) return bad(`Unknown parameter ${name}; use the parameters on the rule page.`, parameter.name.span);
    if(seen.has(name)) return bad(`Declare ${name} once.`, parameter.name.span);
    seen.add(name);
  }
  if(ast.condition && (!primary || !Array.isArray(data[primary]) || !(data[primary] as unknown[]).length)) return bad("A condition needs a nonempty primary cell list.", ast.condition.span);
  for (const [name, parameter] of Object.entries(parameters)) {
    if (!Object.hasOwn(data, name)) {
      if (parameter.required || (!board.standard && contract.explicit?.includes(name))) return bad(`State ${name} explicitly${parameter.required ? " for this rule" : " on this board"}.`);
      continue;
    }
    const node = ast.parameters.find(p=>p.name.value === name)?.value ?? (name === primary ? ast.cells : undefined);
    if (name === "kind" && typeof data[name] !== "string") return bad("A custom kind must be text.", node?.span);
    const problem = parameter.type ? valueProblem(data[name], parameter.type, contract.types, board) : undefined;
    if (problem) return bad(`${name} ${problem}.`, node && parameter.type ? problemSpan(node, data[name], parameter.type, contract.types, board) : span);
    if (parameter.required && Array.isArray(data[name]) && !(data[name] as unknown[]).length && !(parameter.emptyWhen && data[parameter.emptyWhen] !== undefined)) return bad(`${name} must not be empty.`, node?.span);
  }
  return [];
}

/** Locate the first value rejected by the shared type contract. */
function problemSpan(node: DeclarationValue, value: unknown, type: Type, types: Record<string, Type>, board: CaseBoard, depth = 0): Span {
  if (depth > 128) return node.span;
  const alias = Object.hasOwn(types, type.name) ? types[type.name] : undefined;
  if (alias) return problemSpan(node, value, alias, types, board, depth + 1);
  if (type.name === 'optional') return problemSpan(node, value, type.args![0], types, board, depth + 1);
  if (['set','list','path','collection'].includes(type.name) && Array.isArray(value)) {
    const index = value.findIndex(v => valueProblem(v, type.args![0], types, board) !== undefined);
    if (index >= 0 && node.children?.[index]) return problemSpan(node.children[index], value[index], type.args![0], types, board, depth + 1);
  }
  if (type.name === 'record' && object(value)) {
    const unknown = node.fields?.find(f => !Object.hasOwn(type.fields ?? {}, f.name.value));
    if (unknown) return unknown.name.span;
    for (const [name, childType] of Object.entries(type.fields ?? {})) {
      if (!valueProblem(value[name], childType, types, board)) continue;
      const field = node.fields?.filter(f => f.name.value === name).at(-1);
      return field ? problemSpan(field.value, value[name], childType, types, board, depth + 1) : node.span;
    }
  }
  return node.span;
}

/** Fixed defaults are read from the page's human-readable default declaration. */
export function declaredDefault(raw: unknown, type: Type, types: Record<string, Type>): {default?: unknown} {
  if (typeof raw === "boolean" || typeof raw === "number") return {default: raw};
  if (typeof raw !== "string") return {};
  const value = raw.trim();
  if (/^(Empty list|Empty set|No authored strips|\[\])/.test(value)) return {default: []};
  const token = value.split(/[ .;(]/, 1)[0];
  const resolved = types[type.name] ?? type;
  if (resolved.name === "string") {
    const match = /^"(?:[^"\\]|\\.)*"(?=[.; ]|$)/.exec(value);
    if (match) { try { return {default: JSON.parse(match[0])}; } catch { return {}; } }
  }
  if (resolved.name === "boolean" && ["true", "false"].includes(token)) return {default: token === "true"};
  if (resolved.name === "enum" && resolved.members?.includes(token)) return {default: token};
  if (["number", "position", "digit", "value"].includes(resolved.name)) {
    const match = /^(-?\d+(?:\.\d+)?)(?:[.; (]|$)/.exec(value);
    if (match) return {default: Number(match[1])};
  }
  if (value === "difference 0 (equal).") return {default: {op: "difference", value: 0}};
  return {};
}

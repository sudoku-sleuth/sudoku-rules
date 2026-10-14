import { parseCellRef } from "./case.js";
import type { Part } from "./types.js";

/** The small template language of `reading` blocks: `{name}`, `{name.prop}`, `{name|format}`, `{part:name}`. */
export class Unrenderable extends Error {}

export interface WhenCase { when?: Record<string, unknown>; text?: string }
export type TypeReadings = Record<string, Record<string, string | { one?: string; many?: string }>>;

/** A named condition answers from case-level facts. `value` is the number a placeholder of the same name shows. */
export type Condition = (name: string) => { ok: boolean; value?: number } | undefined;

export interface Scope {
  /** Parameters of the group (equal across the group by `group_by`), or of one instance. */
  params: Record<string, unknown>;
  /** Declared types of those parameters, as written on the page. */
  types: Record<string, string>;
  /** Every instance of the group, for `{x.min}`, `{x.max}` and `varies`. */
  instances: Record<string, unknown>[];
  count: number;
  covered?: number;
  /** Parameters that hold the cells of the rule, in declaration order, for `{cells}`. */
  cellParams: string[];
  items?: () => Part[][];
  parts?: Record<string, WhenCase[]>;
  names?: string[];
  houses?: Part[];
  condition: Condition;
  typeReadings: TypeReadings;
}

/** Placeholder names that need no declaration on the page. */
export const builtins = ["count", "covered", "cells", "items", "names", "houses"] as const;
export const formats = ["words", "Words", "a", "range", "list", "and", "or", "dots", "rectangle", "one", "every"] as const;

const small = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
export const words = (n: number): string => Number.isInteger(n) && n >= 0 && n <= 20 ? small[n] : String(n);
export const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);
const article = (n: number): string => (/^(8|11$|18$|8\d+$)/.test(String(n)) ? "an" : "a");

export const isCellList = (type = ""): boolean => /^(list|set|path)<cell>$/.test(type);
export const isNestedCells = (type = ""): boolean => /^(list|set)<(list|set)<cell>>$/.test(type) || /^optional<(list|set)<(list|set)<cell>>>$/.test(type);
const isNumeric = (type = ""): boolean => ["number", "position", "digit", "value"].includes(type);
const unwrap = (type = ""): string => (/^optional<(.*)>$/.exec(type)?.[1] ?? type);

export function parsePlaceholders(template: string): { expr: string; start: number; end: number }[] {
  return [...template.matchAll(/\{([^{}]*)\}/g)].map(m => ({ expr: m[1], start: m.index!, end: m.index! + m[0].length }));
}

export function splitExpr(expr: string): { head: string; props: string[]; format?: string; part?: string } {
  if (expr.startsWith("part:")) return { head: "", props: [], part: expr.slice(5) };
  const [path, format] = expr.split("|");
  const [head, ...props] = path.split(".");
  return { head, props, ...(format ? { format } : {}) };
}

export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b || a === null || b === null || typeof a !== "object") return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  if (Array.isArray(a)) return a.length === (b as unknown[]).length && a.every((x, i) => deepEqual(x, (b as unknown[])[i]));
  const ka = Object.keys(a as object), kb = Object.keys(b as object);
  return ka.length === kb.length && ka.every(k => deepEqual((a as Record<string, unknown>)[k], (b as Record<string, unknown>)[k]));
}

const isObject = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v);
const specialKeys = ["length", "present", "absent", "varies"];

function lengthOf(actual: unknown): number | undefined {
  return Array.isArray(actual) ? actual.length : typeof actual === "string" ? actual.length : undefined;
}

export function matchValue(actual: unknown, expected: unknown, instances: Record<string, unknown>[], name: string): boolean {
  if (expected === "present") return actual !== undefined && actual !== null;
  if (expected === "absent") return actual === undefined || actual === null;
  if (isObject(expected) && Object.keys(expected).length && Object.keys(expected).every(k => specialKeys.includes(k))) {
    for (const [key, want] of Object.entries(expected)) {
      if (key === "present" && (want ? actual == null : actual != null)) return false;
      if (key === "absent" && (want ? actual != null : actual == null)) return false;
      if (key === "length") {
        const n = lengthOf(actual);
        if (n === undefined) return false;
        if (typeof want === "number") { if (n !== want) return false; }
        else if (isObject(want)) {
          if (typeof want.min === "number" && n < want.min) return false;
          if (typeof want.max === "number" && n > want.max) return false;
        }
      }
      if (key === "varies") {
        const seen = new Set(instances.map(i => JSON.stringify(i[name])));
        if ((seen.size > 1) !== Boolean(want)) return false;
      }
    }
    return true;
  }
  if (isObject(expected)) return isObject(actual) && Object.entries(expected).every(([k, v]) => matchValue(actual[k], v, [], k));
  return deepEqual(actual, expected);
}

/** Does `when` hold for these parameters? Absent booleans count as false. */
export function matchWhen(when: Record<string, unknown> | undefined, scope: Pick<Scope, "params" | "types" | "instances" | "condition">): boolean {
  if (!when) return true;
  for (const [key, expected] of Object.entries(when)) {
    if (key === "condition") {
      const result = scope.condition(String(expected));
      if (!result?.ok) return false;
      continue;
    }
    if (key === "same") {
      const [a, b] = expected as [string, string];
      const x = scope.params[a], y = scope.params[b];
      if (!Array.isArray(x) || !Array.isArray(y) || x.length !== y.length || ![...x].every(c => y.includes(c))) return false;
      continue;
    }
    let actual = scope.params[key];
    if (actual === undefined && unwrap(scope.types[key]) === "boolean") actual = false;
    if (!matchValue(actual, expected, scope.instances, key)) return false;
  }
  return true;
}

function joinWords(items: string[], last: "and" | "or"): string {
  return items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} ${last} ${items[items.length - 1]}`;
}

function typeReading(scope: Scope, type: string, key: string, value: unknown, one: boolean): Part[] {
  const entry = scope.typeReadings[type]?.[key];
  if (entry === undefined) throw new Unrenderable(`No wording for ${type} ${key}`);
  const text = typeof entry === "string" ? entry : (one ? entry.one : entry.many) ?? entry.many ?? entry.one;
  if (!text) throw new Unrenderable(`No wording for ${type} ${key}`);
  const inner: Scope = { ...scope, params: isObject(value) ? value : {}, types: { value: "number" }, instances: [], count: 1, parts: undefined };
  return render(text, inner);
}

function cellsPart(cells: string[], join?: "list" | "and"): Part { return join ? { cells: cells.join(","), join } : { cells: cells.join(",") }; }

/** The cells of a cell part, as a list. */
export const partCells = (part: { cells: string }): string[] => part.cells.split(",");

function rectangle(cells: string[]): Part[] | undefined {
  if (cells.length < 4 || new Set(cells).size !== cells.length) return undefined;
  const refs = cells.map(parseCellRef);
  const r0 = Math.min(...refs.map(r => r.row)), r1 = Math.max(...refs.map(r => r.row));
  const c0 = Math.min(...refs.map(r => r.col)), c1 = Math.max(...refs.map(r => r.col));
  if (r0 === r1 || c0 === c1 || (r1 - r0 + 1) * (c1 - c0 + 1) !== cells.length) return undefined;
  return ["the block ", cellsPart([`r${r0}c${c0}`]), " to ", cellsPart([`r${r1}c${c1}`])];
}

export function rangeText(values: number[]): string {
  const lo = Math.min(...values), hi = Math.max(...values);
  return lo === hi ? String(lo) : `${lo} to ${hi}`;
}

function compress(parts: Part[]): Part[] {
  const out: Part[] = [];
  for (const part of parts) {
    if (typeof part === "string") {
      if (!part) continue;
      if (typeof out[out.length - 1] === "string") out[out.length - 1] += part;
      else out.push(part);
    } else out.push(part);
  }
  return out;
}

export function render(template: string, scope: Scope): Part[] {
  const out: Part[] = [];
  let at = 0;
  for (const placeholder of parsePlaceholders(template)) {
    out.push(template.slice(at, placeholder.start));
    out.push(...resolve(placeholder.expr, scope));
    at = placeholder.end;
  }
  out.push(template.slice(at));
  return compress(out);
}

function formatNumber(n: number, format?: string): Part[] {
  switch (format) {
    case undefined: return [String(n)];
    case "words": return [words(n)];
    case "Words": return [cap(words(n))];
    case "a": return [`${article(n)} ${n}`];
    default: throw new Unrenderable(`Format ${format} does not apply to a number`);
  }
}

function resolve(expr: string, scope: Scope): Part[] {
  const { head, props, format, part } = splitExpr(expr);
  if (part !== undefined) {
    const cases = scope.parts?.[part];
    if (!cases) throw new Unrenderable(`Unknown part ${part}`);
    const hit = cases.find(c => matchWhen(c.when, scope));
    return hit?.text ? render(hit.text, scope) : [];
  }
  if (head === "count") return formatNumber(scope.count, format);
  if (head === "covered") return formatNumber(scope.covered ?? 0, format);
  if (head === "items") {
    if (!scope.items) throw new Unrenderable("No items here");
    const lines = scope.items();
    const out: Part[] = [];
    const sep = format === "and" ? " and " : format === "or" ? " or " : " · ";
    lines.forEach((line, i) => {
      if (i > 0) out.push(format === "and" || format === "or" ? (i === lines.length - 1 ? sep : ", ") : sep);
      out.push(...line);
    });
    return out;
  }
  if (head === "names") {
    const names = scope.names ?? [];
    if (format === "every") return [names.length ? joinWords(names.map(n => `every ${n}`), "and") : "every such pair"];
    return [joinWords(names, "and")];
  }
  if (head === "houses") {
    if (!scope.houses) throw new Unrenderable("No houses here");
    return scope.houses;
  }
  const named = scope.condition(head);
  if (named?.value !== undefined && !(head in scope.params)) return formatNumber(named.value, format);

  let value: unknown;
  let type: string;
  if (head === "cells" && !("cells" in scope.params)) {
    value = scope.cellParams.flatMap(name => (scope.params[name] as string[] | undefined) ?? []);
    type = "list<cell>";
  } else {
    if (!(head in scope.params) && !(head in scope.types)) throw new Unrenderable(`${head} is not declared`);
    value = scope.params[head];
    type = scope.types[head] ?? "";
  }
  type = unwrap(type);
  if (value === undefined || value === null) throw new Unrenderable(`${head} is not set`);

  for (const prop of props) {
    if (prop === "length" && Array.isArray(value)) { value = value.length; type = "number"; }
    else if (prop === "first" && Array.isArray(value)) { value = value[0]; type = isCellList(type) ? "cell" : type; }
    else if (prop === "last" && Array.isArray(value)) { value = value[value.length - 1]; type = isCellList(type) ? "cell" : type; }
    else if ((prop === "op" || prop === "value") && value && typeof value === "object" && !Array.isArray(value)) {
      value = (value as Record<string, unknown>)[prop];
      type = typeof value === "number" ? "number" : "";
    } else if (prop === "min" || prop === "max") {
      const nums = scope.instances.map(i => i[head]).filter((x): x is number => typeof x === "number");
      if (!nums.length) throw new Unrenderable(`${head} has no numbers`);
      value = prop === "min" ? Math.min(...nums) : Math.max(...nums);
      type = "number";
    } else throw new Unrenderable(`Unknown property ${prop}`);
  }

  if (format === "range") {
    const nums = Array.isArray(value) ? value : scope.instances.map(i => i[head]);
    if (!nums.length || nums.some(n => typeof n !== "number")) throw new Unrenderable("range needs numbers");
    const sorted = [...(nums as number[])].sort((a, b) => a - b);
    // A list of digits is a range only when it has no gaps; otherwise it is listed.
    if (Array.isArray(value) && sorted.some((n, i) => i > 0 && n !== sorted[i - 1] + 1)) return [joinWords(sorted.map(String), "and")];
    return [rangeText(sorted)];
  }
  if (isNumeric(type) && typeof value === "number") return formatNumber(value, format);
  if (type === "cell" && typeof value === "string") return [cellsPart([value])];
  if (isCellList(type) && Array.isArray(value)) {
    const cells = value as string[];
    if (format === "rectangle") return rectangle(cells) ?? [cellsPart(cells, "and")];
    if (format === "list") return [cellsPart(cells, "list")];
    if (format === "and") return [cellsPart(cells, "and")];
    if (format !== undefined) throw new Unrenderable(`Format ${format} does not apply to cells`);
    return [cellsPart(cells)];
  }
  if (type === "PairRelation" && isObject(value)) return typeReading(scope, "PairRelation", String(value.op), value, format === "one");
  if (type === "list<PairRelation>" && Array.isArray(value)) {
    const parts: Part[] = [];
    value.forEach((v, i) => {
      if (i > 0) parts.push(" or ");
      parts.push(...typeReading(scope, "PairRelation", String((v as Record<string, unknown>).op), v, format === "one"));
    });
    return parts;
  }
  if ((type === "list<digit>" || type === "set<digit>") && Array.isArray(value)) {
    const digits = value.map(String);
    if (format === "range") return [rangeText(value as number[])];
    return [joinWords(digits, format === "or" ? "or" : "and")];
  }
  if (typeof value === "string" || typeof value === "number") return [String(value)];
  throw new Unrenderable(`${head} cannot be written in a sentence`);
}

/** The first letter of the first text part, capitalised. Cell chips stay as they are. */
export function sentenceCase(parts: Part[]): Part[] {
  if (!parts.length || typeof parts[0] !== "string") return parts;
  return [cap(parts[0]), ...parts.slice(1)];
}

export function partText(parts: Part[]): string {
  return parts.map(p => {
    if (typeof p === "string") return p;
    const cells = partCells(p);
    if (p.join === "list") return cells.join(", ");
    if (p.join === "and") return joinWords(cells, "and");
    return cells.join("-");
  }).join("");
}

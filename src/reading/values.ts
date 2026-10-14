import { cellPattern } from "./case.js";

const isObject = (v: unknown): v is Record<string, unknown> => !!v && typeof v === "object" && !Array.isArray(v);

/** Splits `rows:position,cols:position` at its top-level commas. */
function fields(body: string): [string, string][] {
  const out: [string, string][] = [];
  let depth = 0, start = 0;
  for (let i = 0; i <= body.length; i++) {
    const ch = body[i];
    if (ch === "<" || ch === "{") depth++;
    else if (ch === ">" || ch === "}") depth--;
    else if ((ch === "," && depth === 0) || i === body.length) {
      const [name, ...rest] = body.slice(start, i).split(":");
      if (name) out.push([name, rest.join(":")]);
      start = i + 1;
    }
  }
  return out;
}

/** Does a value written in a case file have the type its page declares? Types this check does not know accept anything. */
export function valueFits(type: string, value: unknown): boolean {
  const t = type.trim();
  const optional = /^optional<(.*)>$/.exec(t);
  if (optional) return value === undefined || value === null || valueFits(optional[1], value);
  if (t === "number" || t === "value") return typeof value === "number" && Number.isFinite(value);
  if (t === "position" || t === "digit") return typeof value === "number" && Number.isInteger(value);
  if (t === "boolean") return typeof value === "boolean";
  if (t === "cell") return typeof value === "string" && cellPattern.test(value);
  const collection = /^(?:list|set|path)<(.*)>$/.exec(t);
  if (collection) return Array.isArray(value) && value.every(v => valueFits(collection[1], v));
  if (t === "PairRelation") return isObject(value) && typeof value.op === "string" && (value.value === undefined || (typeof value.value === "number" && Number.isFinite(value.value)));
  if (t.startsWith("enum{")) return typeof value === "string";
  const record = /^record\{(.*)\}$/.exec(t);
  if (record) return isObject(value) && fields(record[1]).every(([name, inner]) => valueFits(inner, value[name]));
  return true;
}

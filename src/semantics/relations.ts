/** Published pair predicates over exact whole-number values. */
export interface Relation { op: string; value?: number }
export function relation(raw: unknown): Relation {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw Error("Supply a pair relation record.");
  const r = raw as Record<string, unknown>;
  if (typeof r.op !== "string" || !["difference", "at-least", "ratio", "sum", "less", "multiple", "shift"].includes(r.op)) throw Error("Unknown pair relation.");
  const valued = ["difference", "at-least", "ratio", "sum"].includes(r.op);
  if (Object.keys(r).some(k => k !== "op" && k !== "value") || (valued ? !Number.isSafeInteger(r.value) : Object.hasOwn(r, "value"))) throw Error("Supply exactly the relation's required whole-number fields.");
  return r as unknown as Relation;
}
export function holds(r: Relation, x: number, y: number): boolean {
  const a = BigInt(x), b = BigInt(y), v = BigInt(r.value ?? 0);
  const diff = a > b ? a - b : b - a;
  switch (r.op) {
    case "difference": return diff === v;
    case "at-least": return diff >= v;
    case "ratio": return a * v === b || b * v === a;
    case "sum": return a + b === v;
    case "less": return a < b;
    case "multiple": { const lo = a < b ? a : b, hi = a > b ? a : b; return a === 0n && b === 0n || lo !== 0n && hi % lo === 0n; }
    case "shift": return x !== 5 && y !== 5 && ((Math.abs(x % 2) === Math.abs(y % 2)) !== ((x > 5) === (y > 5)));
    default: throw Error("Unknown pair relation.");
  }
}

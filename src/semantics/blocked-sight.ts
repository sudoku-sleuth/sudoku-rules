import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { sortedCells } from "./board.js";
import { all, sumTotal, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

const never: Formula = { op: "Any", children: [] };
const cellList = (raw: unknown): Cell[] => Array.isArray(raw) ? raw as Cell[] : [];
const whole = (value: unknown, name: string): number => {
  if (!Number.isSafeInteger(value)) throw new UnsupportedSemantics(`A ${name} that is not a safe integer is not lowered; the whole instance remains uncovered.`);
  return value as number;
};

/**
 * Blocked sight with listed blockers: each ray is read from its nearest cell up to its first listed blocker, which is kept only
 * with `includeBlocker`, and the origin joins once with `includeOrigin`. The blockers are fixed cells, so the selected cells are a
 * fixed set S whatever the digits are, and the clue compares a fixed count or the sum over S, plus `offset`, with the stated
 * `total`, the sum over `targetCells`, or the origin digit. A ray that contains the origin, or a missing origin, can never be
 * met. Count against a fixed number is then a constant; count against the origin or the target cells is one Allowed or SumTotal;
 * sum against a fixed number is one SumTotal; sum against the origin or the target cells with no offset is one SumEqual, and
 * sum against the origin with an offset is a disjunction over the origin's digits. Blocking by digit, shading or region, record
 * highs, occurrence counts and the effective-value channel stay uncovered.
 */
export function lowerBlockedSight(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  const reason = (what: string) => new UnsupportedSemantics(`Blocked sight with ${what} is not lowered; the whole instance remains uncovered.`);
  if (p.blocking !== undefined && p.blocking !== "listed") throw reason("blocking that depends on digits, shading or regions");
  if (p.records === true) throw reason("record highs");
  if (p.occurrences === true) throw reason("occurrence counts");
  if (p.channel !== undefined && p.channel !== "D") throw reason("the effective-value channel");
  if (p.output !== "count" && p.output !== "sum") throw Error('Choose output "count" or "sum".');
  const rays = Array.isArray(p.rays) ? p.rays.map(cellList) : [];
  const blockers = new Set(cellList(p.blockers));
  const targets = cellList(p.targetCells);
  const origin = typeof p.cell === "string" ? p.cell as Cell : undefined;
  const offset = p.offset === undefined ? 0 : whole(p.offset, "offset");
  const total = p.total === undefined ? undefined : whole(p.total, "total");
  if (targets.length !== new Set(targets).size) throw reason("a target cell listed twice");
  if (!origin || rays.some(ray => ray.includes(origin))) return never;
  const selected = new Set<Cell>(p.includeOrigin === true ? [origin] : []);
  for (const ray of rays) for (const cell of ray) {
    if (blockers.has(cell)) { if (p.includeBlocker === true) selected.add(cell); break; }
    selected.add(cell);
  }
  const sight = sortedCells([...selected]);
  // A count, or a sum over no cells, is a fixed number.
  const fixed = p.output === "count" ? sight.length + offset : sight.length ? undefined : offset;
  if (fixed !== undefined) {
    if (total !== undefined) return fixed === total ? all([]) : never;
    if (targets.length) return sumTotal(targets, fixed, "D");
    return board.alphabet.includes(fixed) ? { op: "Allowed", channel: "D", cell: origin, values: [fixed] } : never;
  }
  if (total !== undefined) return sumTotal(sight, total - offset, "D");
  if (offset === 0) return { op: "SumEqual", channel: "D", left: sight, right: targets.length ? sortedCells(targets) : [origin] };
  if (targets.length) throw reason("an offset against the sum of target cells");
  return { op: "Any", children: board.alphabet.map((v): Formula => all([{ op: "Allowed", channel: "D", cell: origin, values: [v] }, sumTotal(sight, v - offset, "D")])) };
}

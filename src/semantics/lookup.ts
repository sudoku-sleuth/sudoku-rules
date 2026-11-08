import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { lookupHit, type Lookup } from "./lookup-query.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import { holds, relation as readRelation } from "./relations.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

const never: Formula = { op: "Any", children: [] };

/**
 * Lookup: for a source cell s, the printed digit of s plus `offset` is a one-based position along `cells`, and the cell there stands
 * in `relation` to the target (a fixed `target`, else the digit of `targetCell`, else the digit of s itself). A position that is not
 * a whole number from 1 to the list length misses. With `firstMatch` no earlier cell of the list stands in the relation to the
 * target. Each source is one bounded lookup, an exact disjunction over the alphabet digits of s. `total` is the required number of
 * hits: in single mode the one source `cell` hits (1) or misses (0); in count mode all of the `sources` hit (total is their number)
 * or none does (0). An optional `increasing` path must strictly increase, and be nonempty with `nonempty`.
 * Uncovered: queries mode, partial counts, the effective-value channel and `firstMatch` with a reversed
 * `less`. Printed digits only.
 */
export function lowerLookup(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const p = instance.parameters;
  const refuse = (what: string) => new UnsupportedSemantics(`Lookup with ${what} is not lowered; the whole instance remains uncovered.`);
  const mode = p.mode ?? "single";
  if (mode === "queries") throw refuse("explicit queries");
  if (mode !== "single" && mode !== "count") throw Error('Choose mode "single", "count" or "queries".');
  if ((p.channel !== undefined && p.channel !== "D") || (p.indexChannel !== undefined && p.indexChannel !== "D")) throw refuse("the effective-value channel");
  const rel = readRelation(p.relation ?? { op: "difference", value: 0 });
  const offset = p.offset === undefined ? 0 : p.offset, total = p.total === undefined ? 1 : p.total;
  if (typeof offset !== "number" || typeof total !== "number" || !Number.isSafeInteger(offset) || !Number.isSafeInteger(total)) throw refuse("an offset or total that is not a safe integer");
  const reverse = p.reverseRelation === true, firstMatch = p.firstMatch === true;
  if (firstMatch && reverse && rel.op === "less") throw refuse("firstMatch and a reversed less relation");
  // Every other relation is symmetric, so reading it in reverse changes nothing.
  const forward = (x: number, y: number) => holds(rel, x, y);
  const test = reverse && rel.op === "less" ? (x: number, y: number) => holds(rel, y, x) : forward;

  const rise: Formula[] = [];
  const path = Array.isArray(p.increasing) ? p.increasing as Cell[] : [];
  if (p.nonempty === true && !path.length) return never;
  for (let i = 0; i + 1 < path.length; i++) rise.push(path[i] === path[i + 1] ? never : pair(board, path[i], path[i + 1], (a, b) => a < b));

  const cells = instance.cells ?? [];
  const sources: Cell[] = mode === "single" ? (typeof p.cell === "string" ? [p.cell as Cell] : []) : (Array.isArray(p.sources) ? p.sources as Cell[] : []);
  if (mode === "single" && !sources.length) return never;
  const fixed = typeof p.target === "number" ? p.target : undefined;
  const hit = (source: Cell): Formula => {
    const lookup: Lookup = { cells, index: source, offset, firstMatch, test,
      target: fixed ?? (typeof p.targetCell === "string" ? p.targetCell as Cell : source) };
    return lookupHit(lookup, board);
  };
  const hits = sources.map(hit);
  if (total === sources.length) return all([...rise, ...hits]);
  if (total === 0) return all([...rise, ...hits.map((h): Formula => ({ op: "Not", child: h }))]);
  if (total < 0 || total > sources.length) return never;
  throw refuse("a count strictly between none and all of the sources");
}

import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/** Most finite value combinations an aggregate group expansion may charge. */
const maxWork = 1_000_000;
/** Most occurrences a comparison may repeat in one equation. */
const maxOccurrences = 10_000;
const none: Formula = { op: "Any", children: [] };
const unsupported = (message: string) => new UnsupportedSemantics(`${message}; the whole instance remains uncovered.`);
const multiset = (cells: Cell[]) => sortedCells(cells).map(c => `${c}x${cells.filter(x => x === c).length}`).join(",");

/**
 * Aggregate groups: every group has the same aggregate of its printed digits. A group is a list of cells, so a cell listed twice
 * counts twice. With `repeats` false the digits within each group must also differ (a cell listed twice then differs from
 * itself). The aggregate is, by `operation`:
 * - sum (the default): equal sums, each group after the first a SumEqual against the first; an empty group totals zero;
 * - count: equal lengths, true when every group has the same number of cells and false otherwise;
 * - mean: cross multiplication, so an empty group places no condition. Each other nonempty group is a SumEqual against the
 *   first nonempty one, with the first group's cells repeated once per cell of the other and the other's once per cell of the first;
 * - product: lowered when every group has at most one cell (an empty group multiplies to one) or all groups list the same cells
 *   the same number of times; other products stay uncovered.
 * A supplied `line`, and the V channel, stay uncovered. `loop` and `combine` only act with a line, so they change nothing without one.
 */
export function lowerAggregateGroups(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const p = instance.parameters;
  const raw = p.groups;
  if (!Array.isArray(raw) || raw.some(g => !Array.isArray(g) || g.some(c => !board.activeCells.includes(c as Cell)))) throw Error("Supply groups as lists of active board cells.");
  const groups = raw as Cell[][];
  const operation = p.operation ?? "sum";
  if (typeof operation !== "string" || !["sum", "product", "count", "mean"].includes(operation)) throw Error("Choose operation sum, product, count or mean.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  if (p.repeats !== undefined && typeof p.repeats !== "boolean") throw Error("repeats must be true or false.");
  for (const flag of ["loop", "combine"]) if (p[flag] !== undefined && typeof p[flag] !== "boolean") throw Error(`${flag} must be true or false.`);
  // The reader hands a supplied line over as the declaration's cell list.
  if (instance.cells !== undefined) throw unsupported("Groups validated as the runs of a line are not lowered");
  if (p.channel === "V") throw unsupported("The V channel of aggregate groups is not lowered");
  let work = 0;
  const distinctness: Formula[] = [];
  if (p.repeats === false) for (const g of groups) {
    work += g.length * (g.length - 1) / 2 * board.alphabet.length ** 2;
    if (work > maxWork) throw new UnsupportedSemantics("Finite pair expansion exceeds 1,000,000 value combinations for this declaration.");
    if (g.length > 1) distinctness.push({ op: "Distinct", channel: "D", collection: "list", cells: g });
  }
  const equation = (left: Cell[], right: Cell[]): Formula => {
    if (left.length + right.length > maxOccurrences) throw unsupported("A comparison that repeats cells more than 10,000 times is not lowered");
    return { op: "SumEqual", channel: "D", left, right };
  };
  // Every aggregate comparison is symmetric, so the groups are ordered by their cells and the order they were written in changes nothing.
  const ordered = groups.map(g => [...g].sort()).sort((x, y) => multiset(x) < multiset(y) ? -1 : multiset(x) > multiset(y) ? 1 : 0);
  const first = ordered[0];
  const rest = ordered.slice(1);
  let comparison: Formula[];
  switch (operation) {
    case "sum": comparison = rest.map(g => equation(first, g)); break;
    case "count": comparison = ordered.every(g => g.length === first.length) ? [] : [none]; break;
    case "mean": {
      const nonempty = ordered.filter(g => g.length);
      comparison = nonempty.slice(1).map(g => equation(nonempty[0].flatMap(c => Array<Cell>(g.length).fill(c)), g.flatMap(c => Array<Cell>(nonempty[0].length).fill(c))));
      break;
    }
    default: {
      if (ordered.every(g => multiset(g) === multiset(first))) { comparison = []; break; }
      if (ordered.some(g => g.length > 1)) throw unsupported("A product of groups that differ and have more than one cell is not lowered");
      // Each group multiplies to its one digit, or to one when empty.
      comparison = rest.map((g): Formula => g.length && first.length ? equation(first, g) : g.length || first.length ? { op: "Allowed", channel: "D", cell: (g[0] ?? first[0]), values: board.alphabet.filter(d => d === 1) } : all([]));
    }
  }
  return all([...distinctness, ...comparison]);
}

import { key, sortedCells } from "./board.js";
import { pair } from "./lower.js";
import type { CanonicalBoard, Cell, Formula, Rewrite, SemanticSource, SourceLink } from "./types.js";

export interface CanonicalState {
  board: CanonicalBoard; links: Map<string, SemanticSource[]>; rewrites: Rewrite[];
  houses: Map<string, { cells: Cell[]; sources: SemanticSource[] }>;
}
export function addSources(state: CanonicalState, term: Formula | string, sources: SemanticSource[]): void {
  const id = typeof term === "string" ? term : key(term);
  const old = state.links.get(id) ?? [];
  state.links.set(id, [...new Map([...old, ...sources].map(s => [key(s), s])).values()]);
}
function rewrite(state: CanonicalState, rule: Rewrite["rule"], before: Formula, after: Formula, sources: SemanticSource[], witness?: Cell[]): void {
  if (key(before) !== key(after) || witness) state.rewrites.push({ rule, version: 1, before: key(before), after: key(after), sources, ...(witness ? { witness } : {}) });
}
function truth(node: Formula): boolean | undefined {
  return (node.op === "All" || node.op === "Any") && !node.children.length ? node.op === "All" : undefined;
}
export function canonicalise(input: Formula, state: CanonicalState, sources: SemanticSource[], positive = true): Formula {
  sources = [...new Map([...sources, ...(state.links.get(key(input)) ?? [])].map(s => [key(s), s])).values()];
  let result: Formula;
  switch (input.op) {
    case "Distinct": {
      const cells = input.collection === "list" ? input.cells : sortedCells(input.cells);
      const children = cells.flatMap((a, i) => cells.slice(i + 1).map(b => pair(state.board, a, b, (x, y) => x !== y)));
      // V distinctness is only constructed after V=D has been established by the caller.
      const expanded: Formula = { op: "All", children };
      rewrite(state, "distinct-pairs", input, expanded, sources);
      result = canonicalise(expanded, state, sources, positive);
      break;
    }
    case "Pair": {
      const reverse = input.cells[0] > input.cells[1];
      const table = [...new Map(input.table.map(([x, y]) => { const p: [number, number] = reverse ? [y, x] : [x, y]; return [key(p), p]; })).values()].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      const node: Formula & { op: "Pair" } = { op: "Pair", channel: input.channel, cells: reverse ? [input.cells[1], input.cells[0]] : [...input.cells], table };
      rewrite(state, "pair-order", input, node, sources);
      const isUnequal = node.channel === "D" && key(node.table) === key((pair(state.board, ...node.cells, (x, y) => x !== y) as typeof node).table.sort((a, b) => a[0] - b[0] || a[1] - b[1]));
      const witness = positive && isUnequal ? [...state.houses.values()].find(h => node.cells.every(c => h.cells.includes(c))) : undefined;
      if (node.cells[0] === node.cells[1]) {
        result = canonicalise({ op: "Allowed", channel: node.channel, cell: node.cells[0], values: node.table.filter(([a,b]) => a === b).map(([a]) => a) }, state, sources, positive);
        rewrite(state, "boolean-canonical", node, result, sources);
      } else if (witness) {
        result = { op: "All", children: [] };
        addSources(state, `house:${key(witness.cells)}`, [...sources, ...witness.sources]);
        rewrite(state, "house-implied", node, result, [...sources, ...witness.sources], witness.cells);
      } else if (node.table.length === state.board.alphabet.length ** 2 || !node.table.length) {
        result = { op: node.table.length ? "All" : "Any", children: [] };
        rewrite(state, "boolean-canonical", node, result, sources);
      } else result = node;
      break;
    }
    case "CountAtLeast": {
      let count = input.count;
      const weights = new Map<Cell, number>();
      for (const cell of input.cells) weights.set(cell, (weights.get(cell) ?? 0) + 1);
      if (count <= 0) result = { op: "All", children: [] };
      else if (count > input.cells.length) result = { op: "Any", children: [] };
      else {
        // Matching occurrences of one cell move together. Reduce their common
        // factor before capping weights; capping may expose another factor.
        const gcd = (a: number, b: number): number => b ? gcd(b, a % b) : a;
        for (;;) {
          const divisor = [...weights.values()].reduce(gcd, 0);
          count = Math.ceil(count / divisor);
          let capped = false;
          for (const [cell, weight] of weights) {
            const reduced = weight / divisor;
            weights.set(cell, Math.min(reduced, count));
            capped ||= reduced > count;
          }
          if (!capped) break;
        }
        const cells = [...weights].sort(([a],[b]) => a < b ? -1 : a > b ? 1 : 0).flatMap(([cell, weight]) => Array<Cell>(weight).fill(cell));
        result = weights.size === 1
          ? canonicalise({ op: "Allowed", channel: input.channel, cell: cells[0], values: [input.digit] }, state, sources, positive)
          : { ...input, cells, count };
      }
      rewrite(state, "boolean-canonical", input, result, sources);
      break;
    }
    case "Allowed": {
      const node: Formula = { op: "Allowed", channel: input.channel, cell: input.cell, values: [...new Set(input.values)].sort((a, b) => a - b) };
      result = node.values.length === state.board.alphabet.length || !node.values.length ? { op: node.values.length ? "All" : "Any", children: [] } : node;
      rewrite(state, "boolean-canonical", input, result, sources);
      break;
    }
    case "Not": {
      const child = canonicalise(input.child, state, sources, false);
      const value = truth(child);
      if (child.op === "Not") { result = child.child; rewrite(state, "double-not", input, result, sources); }
      else if (value !== undefined) { result = { op: value ? "Any" : "All", children: [] }; rewrite(state, "boolean-canonical", input, result, sources); }
      else if (child.op === "Pair") {
        const excluded = new Set(child.table.map(key));
        const table: [number,number][] = [];
        for (const a of state.board.alphabet) for (const b of state.board.alphabet) if (!excluded.has(key([a,b]))) table.push([a,b]);
        result = canonicalise({ ...child, table }, state, sources, positive);
        rewrite(state, "boolean-canonical", input, result, sources);
      } else result = { op: "Not", child };
      break;
    }
    default: {
      const children = input.children.map(child => canonicalise(child, state, sources, positive && input.op === "All"));
      sources = [...new Map([...sources, ...input.children.flatMap(child => state.links.get(key(child)) ?? [])].map(s => [key(s), s])).values()];
      const annihilator = children.find(c => truth(c) === (input.op === "Any"));
      if (annihilator) result = annihilator;
      else {
        const flattened = children.flatMap(c => c.op === input.op ? c.children : [c]).filter(c => truth(c) !== (input.op === "All"));
        const unique = [...new Map(flattened.map(c => [key(c), c])).entries()].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([, c]) => c);
        result = unique.length === 1 ? unique[0] : { op: input.op, children: unique };
      }
      rewrite(state, "boolean-canonical", input, result, sources);
    }
  }
  addSources(state, input, sources); addSources(state, result, sources);
  return result;
}
export function sourceLinks(state: CanonicalState): SourceLink[] {
  return [...state.links.entries()].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([primitive, sources]) => ({ primitive, sources: sources.sort((a, b) => a.span.file.localeCompare(b.span.file, "en") || a.span.start.offset - b.span.start.offset) }));
}

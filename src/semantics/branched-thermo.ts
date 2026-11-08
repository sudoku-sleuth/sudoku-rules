import type { DeclarationAST } from "../declarations.js";
import { coordinates, key } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

/**
 * Branched thermo: every directed edge [lower, higher] of orthogonally adjacent cells rises, strictly unless `strict` is false, on the
 * stated channel (effective values by default). The network must be nonempty, connected when read without direction, free of
 * directed cycles (a pair listed in both directions is one), and made of edges between two different active cells. Direction is the
 * order of each pair and nothing else, so the order the edges are listed in does not matter and an edge listed twice is one edge.
 * The result is one explicit pair table per edge; an invalid network is rejected.
 */
export function lowerBranchedThermo(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const p = semanticDeclaration(ast).parameters;
  if (p.strict !== undefined && typeof p.strict !== "boolean") throw Error("strict must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const raw = p.edges;
  if (!Array.isArray(raw) || !raw.length) throw Error("Supply a nonempty list of directed edges.");
  const active = new Set(board.activeCells);
  if (raw.some(e => !Array.isArray(e) || e.length !== 2 || e.some(c => !active.has(c)))) throw Error("Every edge needs exactly two active board cells.");
  const edges = [...new Map((raw as [Cell, Cell][]).map(e => [key(e), e])).values()];
  for (const [a, b] of edges) {
    if (a === b) throw Error("An edge needs two different cells.");
    const [ar, ac] = coordinates(a), [br, bc] = coordinates(b);
    if (Math.abs(ar - br) + Math.abs(ac - bc) !== 1) throw Error("An edge needs two orthogonally adjacent cells.");
  }
  const cells = [...new Set(edges.flat())];
  const reached = new Set<Cell>([cells[0]]);
  for (let grew = true; grew;) { grew = false; for (const [a, b] of edges) if (reached.has(a) !== reached.has(b)) { reached.add(a); reached.add(b); grew = true; } }
  if (reached.size !== cells.length) throw Error("The edges must form one connected network.");
  // Peel cells with no incoming edge; any cell left over lies on or beyond a directed cycle.
  const incoming = new Map(cells.map(c => [c, edges.filter(([, b]) => b === c).length]));
  const ready = cells.filter(c => !incoming.get(c));
  let peeled = 0;
  while (ready.length) {
    const cell = ready.pop()!;
    peeled++;
    for (const [a, b] of edges) if (a === cell) { incoming.set(b, incoming.get(b)! - 1); if (!incoming.get(b)) ready.push(b); }
  }
  if (peeled !== cells.length) throw Error("The edges must not contain a directed cycle.");
  if (edges.length * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite branched-thermo expansion exceeds 1,000,000 value combinations for this declaration.");
  const channel = p.channel === "D" ? "D" : "V";
  const rises = p.strict === false ? (x: number, y: number) => x <= y : (x: number, y: number) => x < y;
  return all(edges.map(([a, b]) => ({ ...pair(board, a, b, rises), channel }) as Formula));
}

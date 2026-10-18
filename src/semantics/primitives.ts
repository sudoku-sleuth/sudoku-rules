import { sortedCells } from "./board.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

export class UnsupportedSemantics extends Error {}

export function all(children: Formula[]): Formula { return { op: "All", children }; }
export const distinct = (cells: Cell[]): Formula => ({ op: "Distinct", channel: "D", collection: "set", cells: sortedCells(cells) });
export function pair(board: CanonicalBoard, a: Cell, b: Cell, test: (x: number, y: number) => boolean): Formula {
  const table: [number, number][] = [];
  for (const x of board.alphabet) for (const y of board.alphabet) if (test(x, y)) table.push([x, y]);
  return { op: "Pair", channel: "D", cells: [a, b], table };
}

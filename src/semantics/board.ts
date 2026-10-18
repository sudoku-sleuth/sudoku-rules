import type { BoardContext, CanonicalBoard, Cell, SemanticSource } from "./types.js";
export const key = (value: unknown): string => JSON.stringify(value);
export const sortedCells = (cells: Cell[]): Cell[] => [...new Set(cells)].sort();
export const groups = (sets: Cell[][]): Cell[][] => [...new Map(sets.map(cells => { const sorted = sortedCells(cells); return [key(sorted), sorted]; })).values()].sort((a, b) => key(a).localeCompare(key(b), "en"));
export function coordinates(cell: Cell): [number, number] {
  const match = /^r([1-9]\d*)c([1-9]\d*)$/.exec(cell);
  if (!match) throw Error(`Invalid cell ${cell}.`);
  return [Number(match[1]), Number(match[2])];
}
export const cellAt = (row: number, col: number): Cell => `r${row}c${col}`;
export function canonicalBoard(board: BoardContext): CanonicalBoard {
  const fields = new Set(["rows", "cols", "alphabet", "activeCells", "regions", "houses", "givens"]);
  if (!board || Object.keys(board).some(k => !fields.has(k))) throw Error("Supply one board with a single alphabet; multiple boards and unknown board fields are unsupported.");
  if (!Number.isSafeInteger(board.rows) || !Number.isSafeInteger(board.cols) || board.rows < 1 || board.cols < 1) throw Error("Board rows and columns must be positive safe integers.");
  if (!Array.isArray(board.alphabet) || !board.alphabet.length || board.alphabet.length > 64 || board.alphabet.some(d => !Number.isSafeInteger(d)) || new Set(board.alphabet).size !== board.alphabet.length) throw Error("Supply an ordered alphabet of 1–64 distinct safe integers.");
  if (!Array.isArray(board.activeCells) || !board.activeCells.length || board.activeCells.length > 1024 || new Set(board.activeCells).size !== board.activeCells.length) throw Error("Supply 1–1024 distinct active cells for one board.");
  const active = new Set(board.activeCells);
  for (const cell of active) { const [r, c] = coordinates(cell); if (r > board.rows || c > board.cols) throw Error(`${cell} is outside the board.`); }
  const check = (cells: Cell[]) => { for (const c of cells) if (!active.has(c)) throw Error(`${c} is not an active board cell.`); };
  const regions = board.regions ?? [];
  const regionCells = regions.flat();
  regions.forEach(check);
  if (regions.some(r => !r.length) || new Set(regionCells).size !== regionCells.length || (regions.length && regionCells.length !== active.size)) throw Error("Primary regions must partition the active cells exactly once.");
  const houses = (board.houses ?? []).map(h => h.cells); houses.forEach(check);
  const givens = board.givens ?? []; const seen = new Set<Cell>();
  for (const given of givens) {
    check([given.cell]);
    if (seen.has(given.cell) || !board.alphabet.includes(given.digit)) throw Error(`Give ${given.cell} one digit from the board alphabet.`);
    seen.add(given.cell);
  }
  return { rows: board.rows, cols: board.cols, alphabet: [...board.alphabet], activeCells: sortedCells(board.activeCells), regions: groups(regions), houses: groups(houses), givens: givens.map(({ cell, digit }) => ({ cell, digit })).sort((a, b) => a.cell.localeCompare(b.cell, "en")) };
}
export function standardHouses(): Cell[][] {
  const houses: Cell[][] = [];
  for (let r = 1; r <= 9; r++) houses.push(Array.from({ length: 9 }, (_, c) => cellAt(r, c + 1)));
  for (let c = 1; c <= 9; c++) houses.push(Array.from({ length: 9 }, (_, r) => cellAt(r + 1, c)));
  for (let r = 1; r <= 9; r += 3) for (let c = 1; c <= 9; c += 3) houses.push(Array.from({ length: 9 }, (_, i) => cellAt(r + Math.floor(i / 3), c + i % 3)));
  return houses;
}
export function boardHouseSources(board: BoardContext): Map<string, SemanticSource[]> {
  const sources = new Map<string, SemanticSource[]>();
  for (const house of board.houses ?? []) {
    const id = key(sortedCells(house.cells));
    sources.set(id, [...(sources.get(id) ?? []), ...(house.source ? [{ span: house.source, kind: "house", ...(house.id ? { instance: house.id } : {}) }] : [])]);
  }
  return sources;
}

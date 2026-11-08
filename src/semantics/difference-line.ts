import type { DeclarationAST } from "../declarations.js";
import { sortedCells } from "./board.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import type { CanonicalBoard, Cell, Channel, Formula } from "./types.js";

/** Most finite value combinations a difference line may charge. */
const maxWork = 1_000_000;
const none: Formula = { op: "Any", children: [] };
const any = (children: Formula[]): Formula => ({ op: "Any", children });
const gap = (x: number, y: number): bigint => BigInt(x) > BigInt(y) ? BigInt(x) - BigInt(y) : BigInt(y) - BigInt(x);

/** The parameters of the difference-line block as the lowering reads them. */
export interface DifferenceLine {
  mode: "same" | "different" | "signed-step" | "at-least" | "at-most" | "turning";
  loop: boolean; channel: Channel; diamonds: Cell[]; gap: number; turnDigits: number[];
}

/**
 * Difference line: the two-cell windows of the ordered line are its edges, and the three-cell windows are its consecutive triples.
 * An open line of n cells has n-1 edges and n-2 triples. A closed line also has the last-to-first edge and, from three cells,
 * wraps its triples. A closed line of two cells has the one edge twice, once in each direction.
 * Every mode is an exact formula over those windows on the stated channel:
 * - at-least and at-most bound each edge's absolute difference by gap (a real gap is rounded to the integer bound it implies).
 * - same is a disjunction over the common absolute difference d: every edge has difference d and every diamond cell holds d.
 * - different says any two edges on different cell pairs have different absolute differences, one exclusion per difference.
 * - signed-step is a disjunction over the one signed step s that every directed edge takes, so a closed line needs step 0.
 * - turning needs unequal neighbours and, at each interior cell, a change of direction when it holds a turn digit and none otherwise.
 * Same, different and signed-step need at least one edge, and diamond cells are refused (false) outside same.
 * An explicit edge network is not lowered.
 */
export function lowerDifferenceLine(cells: Cell[], line: DifferenceLine, board: CanonicalBoard): Formula {
  const { alphabet } = board, { channel } = line;
  let work = 0;
  const charge = (n: number) => { work += n; if (work > maxWork) throw new UnsupportedSemantics("Finite difference-line expansion exceeds 1,000,000 value combinations for this declaration."); };
  const edge = (a: Cell, b: Cell, test: (x: number, y: number) => boolean): Formula => {
    charge(alphabet.length ** 2);
    return { ...pair(board, a, b, test), channel } as Formula;
  };
  const allowed = (cell: Cell, values: number[]): Formula => { charge(values.length + 1); return { op: "Allowed", channel, cell, values }; };
  const n = cells.length, closed = line.loop;
  const edges: [Cell, Cell][] = [];
  for (let i = 0; i < (closed ? (n >= 2 ? n : 0) : n - 1); i++) edges.push([cells[i], cells[(i + 1) % n]]);
  const triples: [Cell, Cell, Cell][] = [];
  for (let i = 0; i < (closed ? (n >= 3 ? n : 0) : n - 2); i++) triples.push([cells[i], cells[(i + 1) % n], cells[(i + 2) % n]]);
  const bound = (test: (d: bigint) => boolean) => all(edges.map(([a, b]) => edge(a, b, (x, y) => test(gap(x, y)))));
  const sameCells = (e: [Cell, Cell], f: [Cell, Cell]) => sortedCells([...e]).join() === sortedCells([...f]).join();
  if (line.mode === "at-least" || line.mode === "at-most") {
    if (line.diamonds.length) return none;
    return line.mode === "at-least" ? bound(d => d >= BigInt(Math.ceil(line.gap))) : bound(d => d <= BigInt(Math.floor(line.gap)));
  }
  if (line.mode === "turning") {
    const turn = alphabet.filter(d => line.turnDigits.includes(d));
    return all([
      ...edges.map(([a, b]) => edge(a, b, (x, y) => x !== y)),
      ...triples.map(([a, b, c]): Formula => {
        const turns = allowed(b, turn);
        const up = (p: Cell, q: Cell) => edge(p, q, (x, y) => x < y), down = (p: Cell, q: Cell) => edge(p, q, (x, y) => x > y);
        return any([
          all([turns, any([all([up(a, b), down(b, c)]), all([down(a, b), up(b, c)])])]),
          all([{ op: "Not", child: turns }, any([all([up(a, b), up(b, c)]), all([down(a, b), down(b, c)])])]),
        ]);
      }),
    ]);
  }
  // The remaining modes need an edge to compare.
  if (!edges.length) return none;
  if (line.mode === "signed-step") {
    if (line.diamonds.length) return none;
    const steps = [...new Set(alphabet.flatMap(x => alphabet.map(y => BigInt(y) - BigInt(x))))].sort((x, y) => x < y ? -1 : x > y ? 1 : 0);
    return any(steps.map(s => all(edges.map(([a, b]) => edge(a, b, (x, y) => BigInt(y) - BigInt(x) === s)))));
  }
  const differences = [...new Set(alphabet.flatMap(x => alphabet.map(y => gap(x, y))))].sort((x, y) => x < y ? -1 : x > y ? 1 : 0);
  if (line.mode === "same") {
    return any(differences.map(d => all([
      ...line.diamonds.map(g => allowed(g, alphabet.filter(v => BigInt(v) === d))),
      ...edges.map(([a, b]) => edge(a, b, (x, y) => gap(x, y) === d)),
    ])));
  }
  if (line.diamonds.length) return none;
  // Different: for each difference, no two edges on different cell pairs both take it.
  const exclusions: Formula[] = [];
  edges.forEach((e, i) => edges.slice(i + 1).forEach(f => {
    if (sameCells(e, f)) return;
    for (const d of differences) exclusions.push({ op: "Not", child: all([edge(e[0], e[1], (x, y) => gap(x, y) === d), edge(f[0], f[1], (x, y) => gap(x, y) === d)]) });
  }));
  return all(exclusions);
}

/** Read the difference-line parameters from a declaration; summit is this block in turning mode with turn digits 1 and 9. */
export function lowerDifferenceLineDeclaration(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast), p = instance.parameters;
  const cells = instance.cells ?? [];
  const summit = instance.kind === "summit";
  const mode = summit ? "turning" : p.mode;
  if (typeof mode !== "string" || !["same", "different", "signed-step", "at-least", "at-most", "turning"].includes(mode)) throw Error("Choose a mode: same, different, signed-step, at-least, at-most or turning.");
  if (p.loop !== undefined && typeof p.loop !== "boolean") throw Error("loop must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  if (p.gap !== undefined && (typeof p.gap !== "number" || !Number.isFinite(p.gap))) throw Error("Supply a finite numeric gap.");
  const diamonds = p.diamonds ?? [], turnDigits = summit ? [1, 9] : p.turnDigits ?? [];
  if (!Array.isArray(diamonds) || diamonds.some(c => !board.activeCells.includes(c))) throw Error("Supply diamonds as active board cells.");
  if (!Array.isArray(turnDigits) || turnDigits.some(d => typeof d !== "number" || !Number.isFinite(d))) throw Error("Supply turnDigits as numbers.");
  if (p.edges !== undefined) throw new UnsupportedSemantics("The edges parameter of difference-line is not lowered; the whole instance remains uncovered.");
  return lowerDifferenceLine(cells, {
    mode: mode as DifferenceLine["mode"], loop: p.loop === true, channel: p.channel === "V" ? "V" : "D",
    diamonds: sortedCells(diamonds as Cell[]), gap: (p.gap ?? 0) as number, turnDigits: turnDigits as number[],
  }, board);
}

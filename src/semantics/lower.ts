import { declarationLibrary } from "../declaration-library.js";
import { lowerArrow } from "./arrow.js";
import { lowerEndpointRange } from "./between.js";
import { lowerDoubleArrow } from "./double-arrow.js";
import { lowerSandwich, lowerXSum } from "./sandwich.js";
import { lowerSkyscraper } from "./skyscraper.js";
import { lowerIndex, lowerNumberedRoom } from "./numbered-room.js";
import { lowerBlockedSight } from "./blocked-sight.js";
import { lowerIndexLine } from "./index-line.js";
import { lowerNMate } from "./n-mate.js";
import { lowerSuperIndexing } from "./super-indexing.js";
import { lowerCoordinateArrows } from "./coordinate-arrows.js";
import { lowerFlatMates } from "./flat-mates.js";
import { lowerExtremum } from "./extremum.js";
import { lowerEqualityCage } from "./equality-cage.js";
import { lowerVault } from "./vault.js";
import { lowerCountingCircles } from "./counting-circles.js";
import { lowerSameClass, lowerWindowClasses } from "./window-classes.js";
import { edgeLines, lineFields, lowerLine } from "./lines.js";
import { holds, relation } from "./relations.js";
import { cellAt, coordinates, groups, key, sortedCells, standardHouses } from "./board.js";
import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import type { CanonicalBoard, Cell, Formula } from "./types.js";

export { all, distinct, pair, UnsupportedSemantics } from "./primitives.js";
import { all, distinct, pair, sumTotal, UnsupportedSemantics } from "./primitives.js";
function digitList(raw: unknown, board: CanonicalBoard): number[] {
  if (!Array.isArray(raw) || raw.some(d => !Number.isSafeInteger(d) || !board.alphabet.includes(d))) throw Error("Supply a digit list drawn from the board alphabet.");
  return raw;
}
const fields: Record<string, string[]> = {
  ...lineFields,
  pair: ["relation"], kropki: ["colour", "white", "black", "allGiven"],
  xv: ["mark", "x", "v", "allGiven"], "marked-pairs": ["x", "v", "white", "black", "allGiven"], quadruple: ["digits"], outside: ["digits"],
  negative: ["relations", "except", "within", "direction"],
  cage: ["total", "sum", "repeats"], killer: ["total", "sum", "repeats"],
  arrow: ["partial", "bulb"], "double-arrow": ["ends", "channel", "repeats"], between: ["ends"], lockout: ["ends", "gap"], sandwich: ["sum", "endpointOccurrences", "crusts"], "x-sum": ["sum", "count"], "equal-sums": ["groups", "channel", "repeats"], "diagonal-sum": ["sum", "channel", "repeats"],
  "equality-cage": [], vault: ["sum", "neighbours"], "counting-circles": [], "window-classes": ["classes"], "same-class": ["classes"], "numbered-room": ["digit"], "flat-mates": ["digit", "above", "below"], index: ["axis"], "blocked-sight": ["cell", "rays", "blockers", "includeBlocker", "includeOrigin", "channel", "offset", "output", "records", "total", "blocking", "targetCells", "occurrences"], skyscraper: ["visible", "channel"], sudoku: ["size"], unique: [], clone: [], diagonal: ["direction"], "anti-knight": [], "anti-king": [], "index-line": [], "n-mate": ["cell", "ray", "cage"], "super-indexing": [], "coordinate-arrows": ["arrows"],
  "scoped-move": ["move", "relation", "digits"], "allowed-digits": ["digits"], "absent-digits": ["digits"], "parity-cells": ["parity"],
  extremum: ["type", "exhaustive", "neighbourhood", "boundary", "channel", "neighbours"],
};
export function validateCells(ast: DeclarationAST, board: CanonicalBoard): void {
  const instance=semanticDeclaration(ast);
  for (const cell of instance.cells ?? []) if (!board.activeCells.includes(cell)) throw Error(`${cell} is not an active board cell.`);
}
/** Validate completely before wrapping with negation or a condition. */
export function lower(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance=semanticDeclaration(ast);
  const { parameters: p } = instance;
  // regions, extra-regions, disjoint-sets and irregular-regions are spellings of the same distinct-cells meaning as unique.
  const kind = ["regions", "extra-regions", "disjoint-sets", "irregular-regions"].includes(instance.kind) ? "unique" : instance.kind === "neighbour-extremum" ? "extremum" : instance.kind === "little-killer" ? "diagonal-sum" : instance.kind;
  const written = instance.kind;
  const allowed = fields[kind];
  if (!allowed) throw Error(`No lowering for ${written}.`);
  const extensions: Record<string,string[]> = {
    thermo:["strict","orientation","channel"], "slow-thermo":["orientation","channel"],
    renban:["edges","channel","repeats","selection"], nabner:["edges","channel","separated","selection"],
    bremban:["edges","selection"], "shifter-line":["edges"],
    modular:["edges","length"], entropic:["edges"], parity:["edges"], whispers:["edges"], whisper:["edges"],
    "close-whispers":["edges","channel"], primality:["edges"], summit:["edges"], "region-sum":["channel"],
    pair:["channel"], cage:["channel"], killer:["channel"], "scoped-move":["scope","channel"],
  };
  for (const name of Object.keys(p)) {
    if (allowed.includes(name)) continue;
    if (name === "edges" && edgeLines.includes(kind)) continue;
    if (name === "channel" && (kind === "cage" || kind === "killer") && (p.channel === "D" || p.channel === "V")) continue;
    // A thermometer reads its three parameters in lowerLine.
    if (kind === "thermo" && ["strict", "orientation", "channel"].includes(name)) continue;
    // Renban reads these three in lowerLine; its explicit edges stay uncovered.
    if (kind === "renban" && ["channel", "repeats", "selection"].includes(name)) continue;
    // Region sum reads its channel in lowerLine.
    if (kind === "region-sum" && name === "channel") continue;
    // A pair reads its channel below.
    if (kind === "pair" && name === "channel") continue;
    if (extensions[kind]?.includes(name)) {
      const parameter = declarationLibrary.parameters?.get(`https://rules.sudoku-sleuth.com/${kind}.md`)?.parameters[name];
      if (parameter && Object.hasOwn(parameter, "default") && JSON.stringify(parameter.default) === JSON.stringify(p[name])) continue;
      throw new UnsupportedSemantics(`The ${name} parameter of ${written} is not lowered; the whole instance remains uncovered.`);
    }
    throw Error(`${written} has no parameter ${name}.`);
  }
  if (kind === "same-class" && (instance.cells ?? []).some(cell => !board.activeCells.includes(cell))) throw new UnsupportedSemantics("A same-class cell that is inactive is not lowered; the whole instance remains uncovered.");
  validateCells(ast, board);
  const needsCells = Object.hasOwn(lineFields, kind) || ["arrow", "double-arrow", "between", "lockout", "sandwich", "x-sum", "numbered-room", "index", "index-line", "equality-cage", "vault", "counting-circles", "skyscraper", "diagonal-sum", "unique", "clone", "allowed-digits", "absent-digits", "parity-cells", "cage", "killer", "pair", "quadruple", "outside", "extremum", "same-class"].includes(kind);
  if (needsCells && !instance.cells?.length && !(p.edges !== undefined && edgeLines.includes(kind))) throw Error(`${written} needs a nonempty cell list.`);
  if (!needsCells && !["xv", "kropki"].includes(kind) && instance.cells) throw Error(`${written} does not take a cell list.`);
  if (Object.hasOwn(lineFields, kind)) return lowerLine(ast, board);
  if (kind === "arrow") return lowerArrow(ast, board);
  if (kind === "between" || kind === "lockout") return lowerEndpointRange(ast, board);
  if (kind === "double-arrow") return lowerDoubleArrow(ast, board);
  if (kind === "sandwich") return lowerSandwich(ast, board);
  if (kind === "x-sum") return lowerXSum(ast, board);
  if (kind === "skyscraper") return lowerSkyscraper(ast, board);
  if (kind === "numbered-room") return lowerNumberedRoom(ast, board);
  if (kind === "index") return lowerIndex(ast, board);
  if (kind === "blocked-sight") return lowerBlockedSight(ast, board);
  if (kind === "index-line") return lowerIndexLine(ast, board);
  if (kind === "n-mate") return lowerNMate(ast, board);
  if (kind === "super-indexing") return lowerSuperIndexing(board);
  if (kind === "coordinate-arrows") return lowerCoordinateArrows(ast, board);
  if (kind === "flat-mates") return lowerFlatMates(ast, board);
  if (kind === "extremum") return lowerExtremum(ast, board);
  if (kind === "equality-cage") return lowerEqualityCage(ast, board);
  if (kind === "vault") return lowerVault(ast, board);
  if (kind === "counting-circles") return lowerCountingCircles(ast, board);
  if (kind === "window-classes") return lowerWindowClasses(ast, board);
  if (kind === "same-class") return lowerSameClass(ast, board);
  if (kind === "equal-sums") return lowerEqualSums(p, board);
  const cells = sortedCells(instance.cells ?? []);
  const checkPairExpansion = () => {
    if (cells.length * (cells.length - 1) / 2 * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite pair expansion exceeds 1,000,000 value combinations for this declaration.");
  };
  if (instance.condition && !cells.length) throw Error("A condition needs a nonempty primary cell list.");
  switch (kind) {
    case "xv": case "kropki": case "marked-pairs": return lowerMarks(kind, p, instance.cells, board);
    case "pair": {
      if (instance.cells!.length !== 2) throw Error(`${kind} requires exactly two cell positions.`);
      const r = relation(p.relation);
      if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
      return { ...pair(board, instance.cells![0], instance.cells![1], (a,b) => holds(r,a,b)), channel: p.channel === "D" ? "D" : "V" } as Formula;
    }
    case "quadruple": case "outside": {
      const digits = digitList(p.digits, board);
      const positions = kind === "quadruple" ? cells : [...instance.cells!].sort();
      return all([...new Set(digits)].map(digit => ({ op: "CountAtLeast", channel: "D", cells: positions, digit, count: digits.filter(d => d === digit).length })));
    }
    case "negative": return lowerNegative(p, board);
    case "sudoku": {
      if (p.size !== "9x9") throw Error("The sudoku definition requires 9x9; supply nonstandard board houses through BoardContext and unique declarations.");
      if (board.rows !== 9 || board.cols !== 9 || board.activeCells.length !== 81 || board.alphabet.join() !== "1,2,3,4,5,6,7,8,9") throw Error("sudoku 9x9 requires a complete 9x9 board with ordered alphabet 1–9.");
      if (board.regions.length && key(board.regions) !== key(groups(standardHouses().slice(18)))) throw Error("sudoku 9x9 requires standard 3x3 primary regions.");
      return all(standardHouses().map(distinct));
    }
    case "cage": case "killer": {
      if (p.repeats !== undefined && typeof p.repeats !== "boolean") throw Error("repeats must be true or false.");
      if (p.total !== undefined && p.sum !== undefined) throw Error("Use total once; sum is its alias.");
      const total = p.total !== undefined ? p.total : p.sum;
      if (total !== undefined && (typeof total !== "number" || !Number.isFinite(total))) throw Error("The cage total must be a number.");
      if (total !== undefined && !Number.isSafeInteger(total)) throw new UnsupportedSemantics("A cage total that is not a safe integer is not lowered; the whole cage remains uncovered.");
      // Face digits differ unless repeats is true; the total reads the effective value channel, or the printed digits when channel is "D".
      if (p.repeats !== true) checkPairExpansion();
      if (total === undefined) return p.repeats === true ? all([]) : distinct(cells);
      return all([...(p.repeats === true ? [] : [distinct(cells)]), sumTotal(cells, total as number, p.channel === "D" ? "D" : "V")]);
    }
    case "diagonal-sum": return lowerDiagonalSum(p, instance.cells!, board);
    case "unique": checkPairExpansion(); return distinct(cells);
    case "clone": checkPairExpansion(); return all(cells.flatMap((a, i) => cells.slice(i + 1).map(b => pair(board, a, b, (x, y) => x === y))));
    case "diagonal": {
      if (typeof p.direction !== "string" || !["main", "anti"].includes(p.direction)) throw Error('Choose direction "main" or "anti".');
      return distinct(board.activeCells.filter(c => { const [r, col] = coordinates(c); return p.direction === "main" ? r === col : r + col === board.cols + 1; }));
    }
    case "allowed-digits": {
      const values = digitList(p.digits, board);
      return all(cells.map(cell => ({ op: "Allowed", channel: "D", cell, values })));
    }
    case "absent-digits": {
      // No marked cell holds a listed digit. Listed digits outside the alphabet exclude nothing; order and repeats do not matter.
      if (!Array.isArray(p.digits) || p.digits.some(d => !Number.isSafeInteger(d))) throw Error("Supply a digit list of whole numbers.");
      const values = board.alphabet.filter(d => !(p.digits as number[]).includes(d));
      return all(cells.map(cell => ({ op: "Allowed", channel: "D", cell, values })));
    }
    case "parity-cells": {
      if (typeof p.parity !== "string" || !["odd", "even"].includes(p.parity)) throw Error('Choose parity "odd" or "even".');
      const values = board.alphabet.filter(d => Math.abs(d % 2) === (p.parity === "odd" ? 1 : 0));
      return all(cells.map(cell => ({ op: "Allowed", channel: "V", cell, values })));
    }
    default: {
      const move = kind === "anti-knight" ? "knight" : kind === "anti-king" ? "king" : p.move;
      if (typeof move !== "string" || !["knight", "king", "orthogonal", "bishop"].includes(move)) throw Error("Choose a knight, king, orthogonal or bishop move.");
      if (kind === "scoped-move" && (typeof p.relation !== "string" || !["same", "consecutive"].includes(p.relation))) throw Error('Choose relation "same" or "consecutive".');
      const digits = kind === "scoped-move" ? digitList(p.digits, board) : board.alphabet;
      const nodes: Formula[] = [];
      board.activeCells.forEach((a, i) => board.activeCells.slice(i + 1).forEach(b => {
        const [ar, ac] = coordinates(a), [br, bc] = coordinates(b);
        const dr = Math.abs(ar - br), dc = Math.abs(ac - bc);
        const edge = move === "knight" ? dr * dc === 2 : move === "king" ? Math.max(dr, dc) === 1 : move === "orthogonal" ? dr + dc === 1 : dr === dc;
        if (edge && (nodes.length + 1) * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite move expansion exceeds 1,000,000 value combinations for this declaration.");
        if (edge) nodes.push(pair(board, a, b, (x, y) => !(digits.includes(x) || digits.includes(y)) || (p.relation === "consecutive" ? Math.abs(x - y) !== 1 : x !== y)));
      }));
      return all(nodes);
    }
  }
}
/** Most value assignments of the repeated cells of a ray that are enumerated. */
const maxRepeatReadings = 20_000;
/**
 * Diagonal sum (Little Killer): the values of the listed cells, each cell counted once per occurrence, add up to the sum.
 * With repeats false the values on the ray must also differ, and a cell listed twice then differs from itself, so no
 * assignment holds. A ray with a repeated cell is written as an exact disjunction over the values of its repeated cells,
 * each leaving a plain total over the cells listed once. The channel is left as written; the caller converts V to D.
 */
export function lowerDiagonalSum(p: Record<string, unknown>, listed: Cell[], board: CanonicalBoard): Formula {
  if (p.repeats !== undefined && typeof p.repeats !== "boolean") throw Error("repeats must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const total = p.sum;
  if (typeof total !== "number" || !Number.isFinite(total)) throw Error("The sum must be a number.");
  if (!Number.isSafeInteger(total)) throw new UnsupportedSemantics("A diagonal sum that is not a safe integer is not lowered; the whole instance remains uncovered.");
  const channel = p.channel === "V" ? "V" : "D";
  const times = new Map<Cell, number>();
  for (const cell of listed) times.set(cell, (times.get(cell) ?? 0) + 1);
  const repeated = [...times].filter(([, n]) => n > 1).sort(([a], [b]) => a < b ? -1 : 1);
  if (p.repeats === false) {
    if (repeated.length) return { op: "Any", children: [] };
    if (listed.length * (listed.length - 1) / 2 * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite pair expansion exceeds 1,000,000 value combinations for this declaration.");
    return all([{ op: "Distinct", channel, collection: "set", cells: sortedCells(listed) }, sumTotal(listed, total, channel)]);
  }
  if (!repeated.length) return sumTotal(listed, total, channel);
  if (board.alphabet.length ** repeated.length > maxRepeatReadings) throw new UnsupportedSemantics("A ray with more than 20,000 readings of its repeated cells is not lowered; the whole instance remains uncovered.");
  const once = sortedCells(listed.filter(c => times.get(c) === 1));
  const lowest = Math.min(...board.alphabet), highest = Math.max(...board.alphabet);
  let readings: { values: number[]; part: number }[] = [{ values: [], part: 0 }];
  for (const [, n] of repeated) readings = readings.flatMap(r => board.alphabet.map(d => ({ values: [...r.values, d], part: r.part + n * d })));
  const branches: Formula[] = [];
  for (const { values, part } of readings) {
    const rest = total - part;
    if (once.length ? rest < once.length * lowest || rest > once.length * highest : rest !== 0) continue;
    branches.push(all([
      ...repeated.map(([cell], i): Formula => ({ op: "Allowed", channel, cell, values: [values[i]] })),
      ...(once.length ? [sumTotal(once, rest, channel)] : []),
    ]));
  }
  return { op: "Any", children: branches };
}
/**
 * Equal sums: every group has the same total on the channel. Each group after the first is a SumEqual against the first.
 * Groups are sets of cells, so a cell listed twice in one group counts once; an empty group totals zero.
 * With repeats false the values read on the channel differ within each group. The channel is left as written;
 * the caller converts V to D.
 */
function lowerEqualSums(p: Record<string, unknown>, board: CanonicalBoard): Formula {
  if (p.repeats !== undefined && typeof p.repeats !== "boolean") throw Error("repeats must be true or false.");
  if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
  const raw = p.groups;
  if (!Array.isArray(raw) || raw.some(g => !Array.isArray(g) || g.some(c => !board.activeCells.includes(c as Cell)))) throw Error("Supply groups as lists of active board cells.");
  const channel = p.channel === "V" ? "V" : "D";
  const sets = (raw as Cell[][]).map(g => sortedCells([...new Set(g)]));
  if (p.repeats === false) for (const g of sets) if (g.length * (g.length - 1) / 2 * board.alphabet.length ** 2 > 1_000_000) throw new UnsupportedSemantics("Finite pair expansion exceeds 1,000,000 value combinations for this declaration.");
  return all([
    ...(p.repeats === false ? sets.filter(g => g.length > 1).map((g): Formula => ({ op: "Distinct", channel, collection: "set", cells: g })) : []),
    ...sets.slice(1).map((g): Formula => ({ op: "SumEqual", channel, left: sets[0], right: g })),
  ]);
}
/** Negative scope is shared by explicit negatives and each all-given mark kind. */
function lowerNegative(p: Record<string, unknown>, board: CanonicalBoard): Formula {
  if (!Array.isArray(p.relations)) throw Error("Supply a list of relations.");
  const relations = [...new Map(p.relations.map(raw => { const r = relation(raw); return [key([r.op, r.value]), r]; })).values()];
  const cellGroups = (raw: unknown): Cell[][] => {
    if (!Array.isArray(raw) || raw.some(g => !Array.isArray(g) || g.some(c => !board.activeCells.includes(c)))) throw Error("Supply lists of active board cells.");
    return raw;
  };
  const except = cellGroups(p.except);
  if (except.some(g => g.length !== 2)) throw Error("Every exception needs exactly two cells.");
  const within = p.within === undefined ? undefined : cellGroups(p.within);
  if (p.direction !== undefined && (typeof p.direction !== "string" || !["horizontal", "vertical"].includes(p.direction))) throw Error("Choose horizontal or vertical.");
  const nodes: Formula[] = [];
  const ordered = [...board.activeCells].sort((a,b) => { const [ar,ac] = coordinates(a), [br,bc] = coordinates(b); return ar-br || ac-bc; });
  ordered.forEach((a,i) => ordered.slice(i+1).forEach(b => {
    const [ar,ac] = coordinates(a), [br,bc] = coordinates(b);
    if (Math.abs(ar-br)+Math.abs(ac-bc) !== 1 || p.direction === "horizontal" && ar !== br || p.direction === "vertical" && ac !== bc || within && !within.some(g => g.includes(a) && g.includes(b)) || except.some(g => g.includes(a) && g.includes(b))) return;
    for (const r of relations) {
      if ((nodes.length+1)*board.alphabet.length**2 > 1_000_000) throw new UnsupportedSemantics("Finite negative expansion exceeds 1,000,000 value combinations.");
      nodes.push(pair(board,a,b,(x,y) => !holds(r,x,y)));
    }
  }));
  return all(nodes);
}

function lowerMarks(kind: string, p: Record<string, unknown>, cells: Cell[] | undefined, board: CanonicalBoard): Formula {
  const names = kind === "xv" ? ["x", "v"] : kind === "kropki" ? ["white", "black"] : ["x", "v", "white", "black"];
  const specs = {x: {op: "sum", value: 10}, v: {op: "sum", value: 5}, white: {op: "difference", value: 1}, black: {op: "ratio", value: 2}} as const;
  const marks = new Map<string, Cell[][]>();
  for (const name of names) {
    const raw = p[name] ?? [];
    if (!Array.isArray(raw) || raw.some(g => !Array.isArray(g) || g.length !== 2 || g.some(c => !board.activeCells.includes(c)))) throw Error("Every mark needs exactly two active board cells.");
    marks.set(name, [...raw]);
  }
  if (cells?.length) {
    if (cells.length !== 2) throw Error(`${kind} requires exactly two cell positions.`);
    const name = kind === "xv" ? p.mark ?? "x" : p.colour ?? "white";
    if (typeof name !== "string" || !names.includes(name)) throw Error("Choose a mark kind from this family.");
    marks.get(name)!.push(cells);
  }
  const selected = p.allGiven ?? [];
  if (!Array.isArray(selected) || selected.some(name => !names.includes(name))) throw Error("Choose allGiven kinds from this family.");
  const nodes: Formula[] = [];
  let expansion = 0;
  for (const [name, pairs] of marks) {
    const r = relation(specs[name as keyof typeof specs]);
    for (const [a,b] of new Map(pairs.map(g => [key([...g].sort()), g])).values()) {
      expansion += board.alphabet.length ** 2;
      if (expansion > 1_000_000) throw new UnsupportedSemantics("Finite marked-pair expansion exceeds 1,000,000 value combinations.");
      nodes.push({...pair(board, a, b, (x,y) => holds(r,x,y)), channel: "V"} as Formula);
    }
    if (selected.includes(name)) {
      const negative = lowerNegative({relations: [specs[name as keyof typeof specs]], except: pairs}, board);
      // Negative emits one full alphabet table for each covered orthogonal edge.
      expansion += (negative.op === "All" ? negative.children.length : 0) * board.alphabet.length ** 2;
      if (expansion > 1_000_000) throw new UnsupportedSemantics("Finite marked-pair expansion exceeds 1,000,000 value combinations.");
      nodes.push(negative);
    }
  }
  return all(nodes);
}

export function condition(ast: DeclarationAST, base: Formula, board: CanonicalBoard, negated = ast.negations.length % 2 === 1): Formula {
  const instance={...semanticDeclaration(ast),negated};
  if (instance.negated) base = { op: "Not", child: base };
  const cond = instance.condition;
  if (!cond) return base;
  const cells = instance.cells!;
  let predicate: Formula;
  if (cond.predicate === "distinct") predicate = (Object.hasOwn(lineFields, instance.kind) || ["allowed-digits", "outside", "pair", "kropki"].includes(instance.kind)) ? { op: "Distinct", channel: "D", collection: "list", cells } : distinct(cells);
  else if (cond.predicate === "connected") {
    const reached = new Set<Cell>([cells[0]]);
    let changed = true;
    while (changed) { changed = false; for (const c of cells) if (!reached.has(c)) {
      const [r, col] = coordinates(c);
      if ([cellAt(r - 1, col), cellAt(r + 1, col), cellAt(r, col - 1), cellAt(r, col + 1)].some(n => reached.has(n))) { reached.add(c); changed = true; }
    } }
    predicate = { op: reached.size === new Set(cells).size ? "All" : "Any", children: [] };
  } else throw Error("Uniform conditions require the shared shading interpretation.");
  // P -> R = not(P) or R; unless first complements P.
  if (cond.unless) predicate = { op: "Not", child: predicate };
  return { op: "Any", children: [{ op: "Not", child: predicate }, base] };
}

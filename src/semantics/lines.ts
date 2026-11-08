import type { CanonicalBoard, Cell, Formula } from "./types.js";
import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import { key, sortedCells } from "./board.js";
import { lowerDifferenceLineDeclaration } from "./difference-line.js";

export const lineFields: Record<string, string[]> = {
  thermo: [], "slow-thermo": [], whispers: ["gap", "loop"], whisper: ["gap", "loop"],
  "close-whispers": ["gap"], parity: ["loop"], modular: ["modulus", "loop"],
  entropic: ["loop"], palindrome: [], renban: [], bremban: [], nabner: ["distinct"],
  "region-sum": ["segments", "combine", "loop"], primality: ["loop"], summit: ["loop"], "difference-line": ["mode", "loop", "channel", "diamonds", "gap", "turnDigits"], "shifter-line": [], zipper: ["centre"],
};
/** Line kinds whose meaning is a test on each adjacent pair: an explicit edge list yields that test on exactly those edges. */
export const edgeLines = ["whispers", "whisper", "close-whispers", "parity", "primality", "shifter-line"];
export const valueLines = ["thermo", "branched-thermo", "whispers", "whisper", "whispers-4", "whispers-5", "dutch-whispers", "german-whispers", "palindrome", "renban", "region-sum"];
const any = (children: Formula[]): Formula => ({ op: "Any", children });
const parity = (x: number) => Math.abs(x % 2);
/** Deterministic Miller–Rabin on the safe-integer domain. */
function prime(value: number): boolean {
  if (value < 2) return false;
  const n = BigInt(value);
  for (const p of [2n,3n,5n,7n,11n,13n,17n,19n,23n,29n,31n,37n]) if (n % p === 0n) return n === p;
  let d = n - 1n, s = 0; while (d % 2n === 0n) { d /= 2n; s++; }
  const power = (a: bigint, b: bigint) => { let r = 1n; for (; b; b /= 2n, a = a*a%n) if (b%2n) r = r*a%n; return r; };
  for (const base of [2n,325n,9375n,28178n,450775n,9780504n,1795265022n]) {
    if (base % n === 0n) continue;
    let x = power(base % n, d); if (x === 1n || x === n-1n) continue;
    let passed = false; for (let r = 1; r < s; r++) { x = x*x%n; if (x === n-1n) { passed = true; break; } }
    if (!passed) return false;
  }
  return true;
}

/**
 * Read an explicit `edges` list on an edge line. Returns the deduplicated undirected edges in
 * row-major order and the cells they touch, or undefined when the declaration has no edges.
 */
function explicitEdges(instance: ReturnType<typeof semanticDeclaration>, board: CanonicalBoard): { edges: [Cell, Cell][]; cells: Cell[] } | undefined {
  const { kind, parameters: p } = instance;
  if (p.edges === undefined) return undefined;
  if (!edgeLines.includes(kind)) throw new UnsupportedSemantics(`The edges parameter of ${kind} is not lowered; the whole instance remains uncovered.`);
  const raw = p.edges;
  if (!Array.isArray(raw) || raw.some(e => !Array.isArray(e) || e.length !== 2 || e.some(c => !board.activeCells.includes(c)))) throw Error("Every edge needs exactly two active board cells.");
  // Well-typed edge lists that no assignment can satisfy are left to the evaluator.
  if (p.loop === true) throw new UnsupportedSemantics("A closed network is not lowered; the whole instance remains uncovered.");
  if (instance.condition) throw new UnsupportedSemantics("Conditions on a network are not lowered; the whole instance remains uncovered.");
  if (!raw.length || raw.some(([a,b]) => a === b)) throw new UnsupportedSemantics("Edges must name two different cells each; the whole instance remains uncovered.");
  const edges = [...new Map((raw as [Cell,Cell][]).map(([a,b]) => { const e: [Cell,Cell] = sortedCells([a,b]) as [Cell,Cell]; return [key(e), e]; })).values()]
    .sort((x,y) => key(x).localeCompare(key(y),"en"));
  const cells = sortedCells(edges.flat());
  const reached = new Set<Cell>([cells[0]]);
  for (let grew = true; grew;) { grew = false; for (const [a,b] of edges) if (reached.has(a) !== reached.has(b)) { reached.add(a); reached.add(b); grew = true; } }
  if (reached.size !== cells.length) throw new UnsupportedSemantics("Edges must form one connected network; the whole instance remains uncovered.");
  const line = instance.cells ?? [];
  if (line.some(c => !cells.includes(c))) throw new UnsupportedSemantics("Every line cell must lie on the network; the whole instance remains uncovered.");
  return { edges, cells };
}

export function lowerLine(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const { kind, parameters: p } = instance;
  if (kind === "difference-line" || kind === "summit") return lowerDifferenceLineDeclaration(ast, board);
  const network = explicitEdges(instance, board);
  const path = network ? network.cells : instance.cells!;
  for (const name of ["loop", "distinct", "combine"]) if (p[name] !== undefined && typeof p[name] !== "boolean") throw Error(`${name} must be true or false.`);
  if (["whispers", "whisper", "close-whispers"].includes(kind) && (typeof p.gap !== "number" || !Number.isFinite(p.gap))) throw Error("Supply a finite numeric gap.");
  const modulus = p.modulus === undefined ? 3 : p.modulus;
  if (kind === "modular" && (!Number.isSafeInteger(modulus) || (modulus as number) < 1)) throw Error("modulus must be a positive safe integer.");
  if (kind === "entropic" && board.alphabet.length % 3 !== 0) throw Error("Entropic lines require three equal alphabet thirds.");
  if (["renban", "nabner"].includes(kind) && new Set(path).size !== path.length) throw Error(`${kind} requires a path without repeated cells.`);
  const region = (c: Cell) => board.regions.findIndex(r => r.includes(c));
  if (kind === "region-sum" && (!Array.isArray(p.segments) || !p.segments.length || p.segments.some(s => !Array.isArray(s) || !s.length || s.some(c => !board.activeCells.includes(c))))) throw Error("Supply nonempty segments of active cells.");
  if (["region-sum", "shifter-line"].includes(kind) && path.some(c => region(c) < 0)) throw new UnsupportedSemantics("Supply primary board regions for every path occurrence.");
  const nodes: Formula[] = [];
  let work = 0;
  const charged = new Set<string>();
  const charge = (n: number) => { work += n; if (work > 1_000_000) throw new UnsupportedSemantics("Finite line expansion exceeds 1,000,000 value combinations."); };
  const edge = (a: Cell, b: Cell, test: (x: number,y: number) => boolean) => {
    const node = pair(board,a,b,test) as Formula & { op: "Pair" };
    const id = a > b ? key([b,a,node.table.map(([x,y]) => [y,x]).sort(([x,y],[u,v]) => x-u || y-v)]) : key([a,b,[...node.table].sort(([x,y],[u,v]) => x-u || y-v)]);
    if (!charged.has(id)) { charge(board.alphabet.length ** 2); charged.add(id); }
    return node;
  };
  const allowed = (cell: Cell, values: number[]): Formula => { charge(values.length + 1); return { op: "Allowed", channel: "D", cell, values }; };
  const edges = (test: (x: number,y: number,a: Cell,b: Cell) => boolean) => {
    if (network) { for (const [a,b] of network.edges) nodes.push(edge(a,b,(x,y) => test(x,y,a,b))); return; }
    for (let i = 0; i < path.length - (p.loop && path.length > 2 ? 0 : 1); i++) {
      const a = path[i], b = path[(i+1)%path.length]; nodes.push(edge(a,b,(x,y) => test(x,y,a,b)));
    }
  };
  if (kind === "thermo") {
    // Strictness, orientation and channel: reverse reads the listed tip as the bulb, either chooses one direction for the whole line.
    if (p.strict !== undefined && typeof p.strict !== "boolean") throw Error("strict must be true or false.");
    if (p.orientation !== undefined && (typeof p.orientation !== "string" || !["forward", "reverse", "either"].includes(p.orientation))) throw Error('orientation must be "forward", "reverse" or "either".');
    if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
    const rises = p.strict === false ? (x: number, y: number) => x <= y : (x: number, y: number) => x < y;
    const direction = (reversed: boolean): Formula => {
      const steps: Formula[] = [];
      for (let i = 0; i < path.length - 1; i++) {
        const a = path[i], b = path[i + 1];
        steps.push(reversed ? edge(b, a, rises) : edge(a, b, rises));
      }
      return all(steps);
    };
    nodes.push(p.orientation === "either" && path.length > 1 ? any([direction(false), direction(true)]) : direction(p.orientation === "reverse"));
  }
  else if (kind === "slow-thermo") edges((x,y) => x <= y);
  else if (["whispers", "whisper", "close-whispers"].includes(kind)) edges((x,y) => {
    const diff = BigInt(x) > BigInt(y) ? BigInt(x)-BigInt(y) : BigInt(y)-BigInt(x);
    // Integer differences compared to a finite real bound, without rounding digits.
    return kind === "close-whispers" ? diff <= BigInt(Math.floor(p.gap as number)) : diff >= BigInt(Math.ceil(p.gap as number));
  });
  else if (kind === "parity") edges((x,y) => parity(x) !== parity(y));
  else if (kind === "primality") {
    const primes = new Set(board.alphabet.filter(prime));
    nodes.push(...sortedCells(path).map(c => allowed(c,board.alphabet.filter(d => d > 1))));
    edges((x,y) => primes.has(x) !== primes.has(y));
  } else if (kind === "shifter-line") {
    nodes.push(...sortedCells(path).map(c => allowed(c,board.alphabet.filter(d => d !== 5))));
    edges((x,y,a,b) => { const P = parity(x) === parity(y), Q = (x > 5) === (y > 5); return region(a) === region(b) ? P && Q : P !== Q; });
  } else if (kind === "modular" || kind === "entropic") {
    const cls = (x: number) => kind === "entropic" ? Math.floor(board.alphabet.indexOf(x)/(board.alphabet.length/3)) : Number((BigInt(x)%BigInt(modulus as number)+BigInt(modulus as number))%BigInt(modulus as number));
    const window = (positions: Cell[]) => positions.forEach((a,i) => positions.slice(i+1).forEach(b => nodes.push(edge(a,b,(x,y) => cls(x) !== cls(y)))));
    if (!p.loop && path.length === 2) window(path);
    for (let i = 0; i < (p.loop && path.length >= 3 ? path.length : path.length-2); i++) window([path[i], path[(i+1)%path.length], path[(i+2)%path.length]]);
  } else if (kind === "palindrome") {
    for (let i = 0; i < Math.floor(path.length/2); i++) nodes.push(edge(path[i],path[path.length-1-i],(x,y) => x === y));
  } else if (kind === "zipper") {
    const centre = p.centre === undefined ? "when-odd" : p.centre;
    if (typeof centre !== "string" || !["when-odd", "ignore", "required"].includes(centre)) throw Error('centre must be "when-odd", "ignore" or "required".');
    const half = Math.floor(path.length/2), odd = path.length % 2 === 1;
    // Every mirrored pair shares the first pair's sum. A cell visited twice is one cell, so its digit counts at each visit.
    const sum = (i: number) => [path[i], path[path.length-1-i]];
    for (let i = 1; i < half; i++) nodes.push({ op: "SumEqual", channel: "D", left: sum(0), right: sum(i) });
    if (centre === "required" && !odd) nodes.push(any([]));
    if (centre !== "ignore" && odd) for (let i = 0; i < half; i++) nodes.push({ op: "SumEqual", channel: "D", left: sum(i), right: [path[half]] });
  } else if (kind === "nabner") {
    path.forEach((a,i) => path.slice(i+1).forEach(b => nodes.push(edge(a,b,(x,y) => {
      const d = BigInt(x)-BigInt(y); return d !== 1n && d !== -1n && (!p.distinct || x !== y);
    }))));
  } else if (kind === "renban" || kind === "bremban") {
    const alphabet = [...board.alphabet].sort((a,b) => a-b);
    // The distinct values of the cells form a run of consecutive alphabet values; `exact` also fixes the run's length to the number of cells.
    const consecutive = (set: Cell[], exact: boolean): Formula => {
      const cells = sortedCells(set), intervals: Formula[] = [];
      for (let i = 0; i < alphabet.length; i++) for (let j = i; j < alphabet.length; j++) {
        if (j > i && BigInt(alphabet[j])-BigInt(alphabet[j-1]) !== 1n) break;
        const values = alphabet.slice(i,j+1);
        if (exact && values.length !== cells.length) continue;
        intervals.push(all([
          ...cells.map(c => allowed(c,values)),
          ...values.map(d => any(cells.map(c => allowed(c,[d])))),
        ]));
      }
      return any(intervals);
    };
    if (kind === "renban") {
      if (p.repeats !== undefined && typeof p.repeats !== "boolean") throw Error("repeats must be true or false.");
      if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
    }
    const repeats = kind === "bremban" || p.repeats === true;
    const apart = (set: Cell[]): Formula[] => repeats ? [] : set.flatMap((a,i) => set.slice(i+1).map(b => edge(a,b,(x,y) => x !== y)));
    if (kind === "renban" && p.selection !== undefined) nodes.push(prefixBranches(p.selection, path, board, alphabet, allowed, set => all([consecutive(set, !repeats), ...apart(set)])));
    else {
      nodes.push(consecutive(path, !repeats));
      nodes.push(...apart(path));
    }
  } else if (kind === "region-sum") {
    if (p.channel !== undefined && p.channel !== "D" && p.channel !== "V") throw Error('Choose channel "D" or "V".');
    const segments = p.segments as Cell[][];
    const runs: Cell[][] = [];
    let ordered = path;
    if (p.loop) {
      const crossing = path.findIndex((c,i) => region(c) !== region(path[(i+path.length-1)%path.length]));
      if (crossing > 0) ordered = [...path.slice(crossing), ...path.slice(0,crossing)];
    }
    for (const c of ordered) { const last = runs.at(-1); if (last && region(last[0]) === region(c)) last.push(c); else runs.push([c]); }
    const matches = p.loop
      ? runs.length === 1
        ? segments.length === 1 && path.some((_,i) => key([...path.slice(i),...path.slice(0,i)]) === key(segments[0]))
        : runs.some((_,i) => key([...runs.slice(i),...runs.slice(0,i)]) === key(segments))
      : key(runs) === key(segments);
    if (!matches) throw Error("segments must match the ordered maximal region runs of the path, retaining every occurrence.");
    const groups = p.combine ? board.regions.map(r => path.filter(c => r.includes(c))).filter(r => r.length) : segments;
    const sums = [...new Map(groups.map(s => [key([...s].sort()), [...s].sort() as Cell[]])).values()].sort((a,b) => key(a).localeCompare(key(b),"en"));
    for (let i = 1; i < sums.length; i++) nodes.push({ op: "SumEqual", channel: "D", left: sums[0], right: sums[i] });
  }
  const result = all(nodes);
  const effective = (f: Formula): Formula => printed.has(f) ? f : f.op === "All" || f.op === "Any" ? { ...f, children: f.children.map(effective) }
    : f.op === "Not" ? { ...f, child: effective(f.child) }
    : "channel" in f ? { ...f, channel: "V" } as Formula : f;
  // A line that states channel D reads printed digits whatever the value domain.
  return valueLines.includes(kind) && p.channel !== "D" ? effective(result) : result;
}

/** Nodes that read printed digits whatever the line's channel, which the effective-value rewrite leaves alone. */
const printed = new WeakSet<Formula>();
/**
 * A prefix selection on an ordered line: the line stops at its first stopping cell (a cell reading the target, a cell holding a crust
 * digit, or a given cell), which the prefix keeps when `include` is true, and a missing stopping cell fails the rule. This is an exact
 * disjunction over the position of that first stopping cell, each branch giving the cells before it none of the stopping values and the
 * stopping cell one of them. An empty prefix has no values to be consecutive and fails.
 */
function prefixBranches(raw: unknown, line: Cell[], board: CanonicalBoard, alphabet: number[], allowed: (cell: Cell, values: number[]) => Formula, rule: (prefix: Cell[]) => Formula): Formula {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw Error("Supply a prefix selection record.");
  const s = raw as Record<string, unknown>;
  if (typeof s.stop !== "string" || !["target", "given", "crust"].includes(s.stop)) throw Error('stop must be "target", "given" or "crust".');
  if (typeof s.include !== "boolean") throw Error("include must be true or false.");
  if (s.crusts !== undefined && (!Array.isArray(s.crusts) || s.crusts.some(d => !Number.isSafeInteger(d)))) throw Error("crusts must be a list of digits.");
  if (s.target !== undefined && (typeof s.target !== "number" || !Number.isFinite(s.target))) throw Error("target must be a number.");
  const none: Formula = { op: "Any", children: [] };
  const prefix = (stop: number) => line.slice(0, s.include ? stop + 1 : stop);
  const branches: Formula[] = [];
  if (s.stop === "given") {
    const stop = line.findIndex(c => board.givens.some(g => g.cell === c));
    return stop < 0 || !prefix(stop).length ? none : rule(prefix(stop));
  }
  const stops = alphabet.filter(d => s.stop === "target" ? d === s.target : (s.crusts as number[] | undefined ?? []).includes(d));
  const others = alphabet.filter(d => !stops.includes(d));
  line.forEach((cell, stop) => {
    if (!prefix(stop).length || stop > 0 && !others.length || !stops.length) return;
    // A crust is a printed digit, so its stopping tests stay on D when the rest of the line reads effective values.
    const test = (c: Cell, values: number[]): Formula => { const node = allowed(c, values); if (s.stop === "crust") printed.add(node); return node; };
    branches.push({ op: "All", children: [...line.slice(0, stop).map(c => test(c, others)), test(cell, stops), rule(prefix(stop))] });
  });
  return { op: "Any", children: branches };
}

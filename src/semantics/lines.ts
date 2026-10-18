import type { CanonicalBoard, Cell, Formula } from "./types.js";
import type { DeclarationAST } from "../declarations.js";
import { semanticDeclaration } from "./declaration.js";
import { all, pair, UnsupportedSemantics } from "./primitives.js";
import { key, sortedCells } from "./board.js";

export const lineFields: Record<string, string[]> = {
  thermo: [], "slow-thermo": [], whispers: ["gap", "loop"], whisper: ["gap", "loop"],
  "close-whispers": ["gap"], parity: ["loop"], modular: ["modulus", "loop"],
  entropic: ["loop"], palindrome: [], renban: [], bremban: [], nabner: ["distinct"],
  "region-sum": ["segments"], primality: ["loop"], summit: ["loop"], "shifter-line": [],
};
export const valueLines = ["thermo", "whispers", "whisper", "palindrome", "renban", "region-sum"];
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

export function lowerLine(ast: DeclarationAST, board: CanonicalBoard): Formula {
  const instance = semanticDeclaration(ast);
  const { kind, parameters: p } = instance;
  const path = instance.cells!;
  for (const name of ["loop", "distinct"]) if (p[name] !== undefined && typeof p[name] !== "boolean") throw Error(`${name} must be true or false.`);
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
    for (let i = 0; i < path.length - (p.loop && path.length > 2 ? 0 : 1); i++) {
      const a = path[i], b = path[(i+1)%path.length]; nodes.push(edge(a,b,(x,y) => test(x,y,a,b)));
    }
  };
  if (kind === "thermo") edges((x,y) => x < y);
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
  } else if (kind === "nabner") {
    path.forEach((a,i) => path.slice(i+1).forEach(b => nodes.push(edge(a,b,(x,y) => {
      const d = BigInt(x)-BigInt(y); return d !== 1n && d !== -1n && (!p.distinct || x !== y);
    }))));
  } else if (kind === "renban" || kind === "bremban") {
    const cells = sortedCells(path), alphabet = [...board.alphabet].sort((a,b) => a-b);
    const intervals: Formula[] = [];
    for (let i = 0; i < alphabet.length; i++) for (let j = i; j < alphabet.length; j++) {
      if (j > i && BigInt(alphabet[j])-BigInt(alphabet[j-1]) !== 1n) break;
      const values = alphabet.slice(i,j+1);
      if (kind === "renban" && values.length !== path.length) continue;
      intervals.push(all([
        ...cells.map(c => allowed(c,values)),
        ...values.map(d => any(cells.map(c => allowed(c,[d])))),
      ]));
    }
    nodes.push(any(intervals));
    if (kind === "renban") path.forEach((a,i) => path.slice(i+1).forEach(b => nodes.push(edge(a,b,(x,y) => x !== y))));
  } else if (kind === "summit") {
    edges((x,y) => x !== y);
    for (let i = 0; i < (p.loop && path.length >= 3 ? path.length : path.length-2); i++) {
      const a = path[i], b = path[(i+1)%path.length], c = path[(i+2)%path.length];
      const turns = allowed(b,board.alphabet.filter(d => d === 1 || d === 9));
      const up = edge(a,b,(x,y) => x < y), down = edge(a,b,(x,y) => x > y);
      const rising = edge(b,c,(x,y) => x < y), falling = edge(b,c,(x,y) => x > y);
      nodes.push(any([all([turns,any([all([up,falling]),all([down,rising])])]), all([{ op: "Not", child: turns },any([all([up,rising]),all([down,falling])])])]));
    }
  } else if (kind === "region-sum") {
    const segments = p.segments as Cell[][];
    const runs: Cell[][] = [];
    for (const c of path) { const last = runs.at(-1); if (last && region(last[0]) === region(c)) last.push(c); else runs.push([c]); }
    if (key(runs) !== key(segments)) throw Error("segments must match the ordered maximal region runs of the path, retaining every occurrence.");
    const sums = [...new Map(segments.map(s => [key([...s].sort()), [...s].sort() as Cell[]])).values()].sort((a,b) => key(a).localeCompare(key(b),"en"));
    for (let i = 1; i < sums.length; i++) nodes.push({ op: "SumEqual", channel: "D", left: sums[0], right: sums[i] });
  }
  const result = all(nodes);
  const effective = (f: Formula): Formula => f.op === "All" || f.op === "Any" ? { ...f, children: f.children.map(effective) }
    : f.op === "Not" ? { ...f, child: effective(f.child) }
    : "channel" in f ? { ...f, channel: "V" } as Formula : f;
  return valueLines.includes(kind) ? effective(result) : result;
}

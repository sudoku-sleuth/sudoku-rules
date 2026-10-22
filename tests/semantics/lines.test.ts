import { expect, test } from "bun:test";
import { normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { canonicalise, type CanonicalState } from "../../src/semantics/canonical";
import { standardHouses } from "../../src/semantics/board";
const a: Cell = "r1c1", b: Cell = "r1c2", c: Cell = "r1c3", d: Cell = "r1c4";
const board: BoardContext = { rows: 1, cols: 4, activeCells: [a,b,c,d], alphabet: [1,2,3,4,5,6,7,8,9], regions: [[a,b],[c,d]] };
const file = (rules: string) => ({ file: "synthetic.rules.md", text: `---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n\`\`\`rules\n${rules}\n\`\`\`` });
// Synthetic nonstandard boards state the standard fixture choices explicitly.
function explicitFixture(rules: string): string {
  return rules.split("\n").map(line => {
    const kind = /^(?:\w+: )?(?:not )?([a-z-]+)/.exec(line)?.[1];
    const choices: Record<string, Record<string, number | boolean>> = {
      whispers: {loop:false}, whisper: {loop:false}, parity: {loop:false},
      modular: {loop:false,modulus:3}, entropic: {loop:false}, primality: {loop:false},
      summit: {loop:false}, nabner: {distinct:false},
    };
    for (const [name,value] of Object.entries(choices[kind ?? ""] ?? {})) {
      if (new RegExp(`\\b${name}\\s`).test(line)) continue;
      const condition = line.search(/ (?:if|unless) /);
      const at = condition < 0 ? line.length : condition;
      line = line.slice(0,at) + ` ${name} ${value}` + line.slice(at);
    }
    return line;
  }).join("\n");
}
const nf = (rules: string, context = board) => normalise(file(explicitFixture(rules)),context);
function form(rules: string, context = board) { const n = nf(rules,context); expect(n.issues).toEqual([]); expect(n.status).toBe("complete"); return n.normalForm!; }
function eq(x: string,y: string,context = board) { expect(compare(nf(x,context),nf(y,context)).status).toBe("equivalent"); }
function differs(x: string,y: string,context = board) { expect(compare(nf(x,context),nf(y,context)).covered).toBe("structural-difference"); }
function evaluate(f: Formula, values: Record<string,number>): boolean {
  switch (f.op) {
    case "All": return f.children.every(x => evaluate(x,values));
    case "Any": return f.children.some(x => evaluate(x,values));
    case "Not": return !evaluate(f.child,values);
    case "Pair": return f.table.some(([x,y]) => x === values[f.cells[0]] && y === values[f.cells[1]]);
    case "Allowed": return f.values.includes(values[f.cell]);
    case "Distinct": return new Set(f.cells.map(c => values[c])).size === f.cells.length;
    case "CountAtLeast": return f.cells.filter(c => values[c] === f.digit).length >= f.count;
    case "SumEqual": return f.left.reduce((n,c) => n+BigInt(values[c]),0n) === f.right.reduce((n,c) => n+BigInt(values[c]),0n);
  }
}
const assignment = (v: number[]) => Object.fromEntries([a,b,c,d].map((c,i) => [c,v[i] ?? 1]));
const fixtures: [string,number[],number[]][] = [
  [`thermo ${a}-${b}-${c}`, [1,2,3],[1,2,2]],
  [`slow-thermo ${a}-${b}-${c}`, [2,2,3],[2,1,3]],
  [`whispers ${a}-${b}-${c} gap 5`,[1,6,1],[1,5,1]],
  [`whisper ${a}-${b} gap 4`,[1,5],[1,4]],
  [`close-whispers ${a}-${b} gap 2`,[1,3],[1,4]],
  [`parity ${a}-${b}-${c}`, [1,2,3],[1,3,2]],
  [`modular ${a}-${b}-${c}`, [1,2,3],[1,2,4]],
  [`entropic ${a}-${b}-${c}`, [1,4,7],[1,4,6]],
  [`palindrome ${a}-${b}-${c}`, [1,2,1],[1,2,3]],
  [`renban ${a}-${b}-${c}`, [2,1,3],[2,1,4]],
  [`bremban ${a}-${b}-${c}`, [1,2,1],[1,3,1]],
  [`nabner ${a}-${b}-${c}`, [1,3,1],[1,3,2]],
  [`nabner ${a}-${b} distinct true`, [1,3],[1,1]],
  [`primality ${a}-${b}-${c}`, [2,4,3],[2,4,1]],
  [`summit ${a}-${b}-${c}`, [2,9,3],[2,8,3]],
  [`shifter-line ${a}-${b}-${c}`, [1,3,4],[1,2,4]],
  [`region-sum ${a}-${b}-${c} segments [["${a}","${b}"],["${c}"]]`, [1,2,3],[1,2,4]],
];
for (const [rule,yes,no] of fixtures) test(`satisfying and near-miss: ${rule}`, () => {
  const f = form(rule);
  expect(evaluate(f.solution,assignment(yes))).toBe(true);
  expect(evaluate(f.solution,assignment(no))).toBe(false);
  const negated = form(`not ${rule}`);
  expect(evaluate(negated.solution,assignment(yes))).toBe(false);
  expect(evaluate(negated.solution,assignment(no))).toBe(true);
  const conditional = form(`${rule} if distinct`);
  const unless = form(`${rule} unless distinct`);
  for (const values of [yes,no,[1,1,1]]) {
    const v = assignment(values), unique = new Set(values).size === values.length;
    expect(evaluate(conditional.solution,v)).toBe(!unique || evaluate(f.solution,v));
    expect(evaluate(unless.solution,v)).toBe(unique || evaluate(f.solution,v));
  }
  const duplicated = form(`x: ${rule}\ny: ${rule}`);
  expect(duplicated.solution).toEqual(f.solution);
  expect(duplicated.sources.find(s => s.primitive === JSON.stringify(duplicated.solution))!.sources.map(s => s.instance)).toEqual(["x","y"]);
  const state: CanonicalState = { board: f.board, links: new Map(), rewrites: [], houses: new Map() };
  expect(canonicalise(f.solution,state,[])).toEqual(f.solution);
});

test("adjacency split/join is exact, directional bulbs and branch edges survive", () => {
  for (const [kind,params] of [["thermo",""],["slow-thermo",""],["whispers"," gap 5"],["close-whispers"," gap 2"],["parity",""],["primality",""],["shifter-line",""]]) {
    eq(`${kind} ${a}-${b}-${c}${params}`,`x: ${kind} ${a}-${b}${params}\ny: ${kind} ${b}-${c}${params}`);
    differs(`x: ${kind} ${a}-${b}${params}\ny: ${kind} ${a}-${c}${params}`,`${kind} ${a}-${b}-${c}${params}`);
    if (["thermo","slow-thermo"].includes(kind)) differs(`${kind} ${a}-${b}-${c}`,`${kind} ${c}-${b}-${a}`);
    else eq(`${kind} ${a}-${b}-${c}${params}`,`${kind} ${c}-${b}-${a}${params}`);
  }
});

test("closing edges, rotations, repeated closing occurrences and window closure", () => {
  for (const [kind,params] of [["whispers"," gap 4"],["parity",""],["primality",""]]) {
    eq(`${kind} ${a}-${b}-${c}-${d}${params} loop true`,`${kind} ${a}-${b}-${c}-${d}-${a}${params}`);
    eq(`${kind} ${a}-${b}-${c}-${d}${params} loop true`,`${kind} ${c}-${d}-${a}-${b}${params} loop true`);
    differs(`${kind} ${a}-${b}-${c}-${d}${params} loop true`,`${kind} ${a}-${b}-${c}-${d}${params}`);
  }
  for (const kind of ["modular","entropic","summit"]) {
    eq(`${kind} ${a}-${b}-${c} loop true`,`${kind} ${b}-${c}-${a} loop true`);
    eq(`${kind} ${a}-${b}-${c} loop true`,`${kind} ${c}-${b}-${a} loop true`);
    eq(`${kind} ${a}-${b}-${c} loop true`,`${kind} ${a}-${b}-${c}-${a}-${b}`);
    differs(`${kind} ${a}-${b}-${c}-${d}`,`${kind} ${a}-${b}-${c}-${d} loop true`);
    // Explicit duplicate endpoints on a loop are real additional occurrences.
    expect(evaluate(form(`${kind} ${a}-${b}-${c}-${a} loop true`).solution,assignment([1,4,7]))).toBe(false);
  }
});

test("whole-line scopes, repeated visits and crossing windows are retained", () => {
  differs(`palindrome ${a}-${b}-${c}`,`x: palindrome ${a}-${b}\ny: palindrome ${b}-${c}`);
  for (const kind of ["modular","entropic","summit","renban","bremban","nabner"]) {
    eq(`${kind} ${a}-${b}-${c}`,`${kind} ${c}-${b}-${a}`);
    differs(`${kind} ${a}-${b}-${c}`,`x: ${kind} ${a}-${b}\ny: ${kind} ${b}-${c}`);
  }
  expect(evaluate(form(`thermo ${a}-${b}-${a}`).solution,assignment([1,2]))).toBe(false);
  expect(evaluate(form(`slow-thermo ${a}-${b}-${a}`).solution,assignment([2,2]))).toBe(true);
  eq(`bremban ${a}-${b}-${a}`,`bremban ${b}-${a}`);
  expect(nf(`renban ${a}-${b}-${a}`).status).toBe("invalid");
  expect(nf(`nabner ${a}-${b}-${a}`).status).toBe("invalid");
  differs(`palindrome ${a}-${b}-${a}`,`palindrome ${a}-${b}`);
});

test("class defaults use actual digits, alphabet thirds and fixed constants", () => {
  eq(`modular ${a}-${b}-${c}`,`modular ${a}-${b}-${c} modulus 3`);
  differs(`modular ${a}-${b}-${c}`,`modular ${a}-${b}-${c} modulus 4`);
  const context = { ...board, alphabet: [-3,-2,-1,0,1,2] };
  expect(evaluate(form(`modular ${a}-${b}-${c}`,context).solution,assignment([-3,-2,-1]))).toBe(true);
  expect(evaluate(form(`entropic ${a}-${b}-${c}`,context).solution,assignment([-3,-1,1]))).toBe(true);
  const shuffled = { ...board, alphabet: [9,1,7,2,8,3] };
  expect(evaluate(form(`entropic ${a}-${b}-${c}`,shuffled).solution,assignment([9,7,8]))).toBe(true);
  const ten = { ...board, alphabet: [0,1,2,3,4,5,6,7,8,9,10] };
  expect(evaluate(form(`summit ${a}-${b}-${c}`,ten).solution,assignment([2,10,3]))).toBe(false);
  expect(evaluate(form(`summit ${a}-${b}-${c}`,ten).solution,assignment([2,9,3]))).toBe(true);
  expect(evaluate(form(`shifter-line ${a}`,ten).solution,assignment([5]))).toBe(false);
  expect(evaluate(form(`primality ${a}`,ten).solution,assignment([0]))).toBe(false);
  expect(evaluate(form(`primality ${a}`,ten).solution,assignment([1]))).toBe(false);
});

test("ill-typed fields are rejected before conditions, negation and coverage", () => {
  for (const rule of [`modular ${a}-${b} modulus 0`,`modular ${a}-${b} modulus "3"`,`whispers ${a}-${b} gap "5"`,`parity ${a}-${b} loop 1`,`nabner ${a}-${b} distinct "false"`,`thermo ${a}-${b} loop true`,`entropic ${a}-${b}`]) {
    const context = rule.startsWith("entropic") ? { ...board, alphabet: [1,2,3,4] } : board;
    for (const prefix of ["","not "]) expect(nf(`${prefix}${rule} if distinct`,context).status).toBe("invalid");
  }
  for (const kind of ["thermo","whispers","palindrome","renban","region-sum"]) {
    const tail = kind === "whispers" ? " gap 5" : kind === "region-sum" ? ` segments [["${a}","${b}"]]` : "";
    const n = nf(`value-modifier name "doubler" factor 2 offset 0 exactly [["r1c1"]] count 1 atMostOne [["r1c1"]] distinct true\n${kind} ${a}-${b}${tail}`);
    expect(n.status).toBe("partial"); expect(n.normalForm!.coverage.find(c => c.kind === kind)!.status).toBe("unsupported");
    expect(compare(n,n).status).toBe("unresolved");
  }
});

test("region sums validate runs, preserve occurrence weights and reverse exactly", () => {
  const rule = `region-sum ${a}-${b}-${c} segments [["${a}","${b}"],["${c}"]]`;
  eq(rule,`region-sum ${c}-${b}-${a} segments [["${c}"],["${b}","${a}"]]`);
  for (const segments of [`[["${a}"],["${b}"],["${c}"]]`,`[["${a}","${c}"],["${b}"]]`,`[["${a}","${b}"]]`]) expect(nf(`region-sum ${a}-${b}-${c} segments ${segments}`).status).toBe("invalid");
  const weighted = form(`region-sum ${a}-${b}-${a}-${c} segments [["${a}","${b}","${a}"],["${c}"]]`);
  expect(evaluate(weighted.solution,assignment([1,2,4]))).toBe(true);
  expect(evaluate(weighted.solution,assignment([1,2,3]))).toBe(false);
  const returned = form(`region-sum ${a}-${c}-${b} segments [["${a}"],["${c}"],["${b}"]]`);
  expect(evaluate(returned.solution,assignment([2,2,2]))).toBe(true);
  expect(evaluate(returned.solution,assignment([1,2,3]))).toBe(false);
  const missing = nf(rule,{ ...board, regions: undefined });
  expect(missing.status).toBe("partial"); expect(compare(missing,missing).status).toBe("unresolved");
});

test("sudoku resolves standard regions before regional lines, including under negation", () => {
  const context: BoardContext = {
    rows: 9, cols: 9, alphabet: [1,2,3,4,5,6,7,8,9],
    activeCells: standardHouses().slice(0,9).flat(),
  };
  const explicit = { ...context, regions: standardHouses().slice(18) };
  for (const sudoku of ["sudoku 9x9", "not sudoku 9x9"]) {
    for (const line of [
      "shifter-line r1c1-r1c2",
      'region-sum r1c1-r1c2-r1c3-r1c4 segments [["r1c1","r1c2","r1c3"],["r1c4"]]',
    ]) {
      const resolved = nf(`${sudoku}\n${line}`,context);
      const supplied = nf(`${sudoku}\n${line}`,explicit);
      expect(resolved.issues).toEqual([]);
      expect(resolved.status).toBe("complete");
      expect(supplied.status).toBe("complete");
      expect(compare(resolved,supplied).status).toBe("equivalent");
    }
  }
});

test("property: every declaration permutation preserves coverage for resolved region geometry", () => {
  function* permutations(lines: string[]): Generator<string[]> {
    if (!lines.length) { yield []; return; }
    for (let i = 0; i < lines.length; i++) {
      for (const rest of permutations(lines.filter((_,j) => i !== j))) yield [lines[i],...rest];
    }
  }
  const standard: BoardContext = {
    rows: 9, cols: 9, alphabet: [1,2,3,4,5,6,7,8,9],
    activeCells: standardHouses().slice(0,9).flat(),
  };
  const regional = ['shifter-line r1c1-r1c2-r1c3-r1c4', 'region-sum r1c1-r1c2-r1c3-r1c4 segments [["r1c1","r1c2","r1c3"],["r1c4"]]'];
  const scenarios: [BoardContext,string[]][] = [
    [standard,["sudoku 9x9",...regional,"thermo r2c1-r2c2"]],
    [{ ...standard, regions: standardHouses().slice(18) },["sudoku 9x9",...regional,"thermo r2c1-r2c2"]],
    // The nonrectangular partition has a boundary between b and c.
    [{ ...board, regions: [[a,b,d],[c]] },[
      `shifter-line ${a}-${b}-${c}-${d}`,
      `region-sum ${a}-${b}-${c}-${d} segments [["${a}","${b}"],["${c}"],["${d}"]]`,
      `unique ${a}-${b}`, `thermo ${b}-${c}`,
    ]],
  ];
  for (const [context,lines] of scenarios) {
    const original = nf(lines.join("\n"),context);
    expect(original.status).toBe("complete");
    const coverage = (n: ReturnType<typeof nf>) => n.normalForm!.coverage.map(({kind,status,reason}) => ({kind,status,reason}));
    for (const permutation of permutations(lines)) {
      const result = nf(permutation.join("\n"),context);
      expect(result.issues).toEqual([]);
      expect(result.status).toBe("complete");
      expect(coverage(result)).toEqual(coverage(original));
      expect(compare(result,original).status).toBe("equivalent");
    }
  }
});

test("exhaustive small-assignment properties match independent line definitions", () => {
  const alphabet = [0,1,2,3,4,9], context = { ...board, alphabet };
  const rules: [string,(x: number,y: number,z: number) => boolean][] = [
    ["thermo",(x,y,z) => x<y && y<z], ["slow-thermo",(x,y,z) => x<=y && y<=z],
    ["modular",(x,y,z) => new Set([x%3,y%3,z%3]).size === 3],
    ["entropic",(x,y,z) => new Set([x,y,z].map(v => Math.floor(alphabet.indexOf(v)/2))).size === 3],
    ["renban",(x,y,z) => new Set([x,y,z]).size === 3 && Math.max(x,y,z)-Math.min(x,y,z) === 2],
    ["bremban",(x,y,z) => new Set([x,y,z]).size === Math.max(x,y,z)-Math.min(x,y,z)+1],
    ["summit",(x,y,z) => x!==y && y!==z && ([1,9].includes(y) ? (y-x)*(z-y)<0 : (y-x)*(z-y)>0)],
  ];
  for (const [kind,predicate] of rules) {
    const f = form(`${kind} ${a}-${b}-${c}`,context), rev = form(`${kind} ${c}-${b}-${a}`,context);
    for (const x of alphabet) for (const y of alphabet) for (const z of alphabet) {
      const values = assignment([x,y,z]); expect(evaluate(f.solution,values)).toBe(predicate(x,y,z));
      if (!["thermo","slow-thermo"].includes(kind)) expect(evaluate(rev.solution,values)).toBe(predicate(x,y,z));
    }
  }
});

test("declaration permutations retain every source and expansion bounds stay unresolved", () => {
  const declarations = [`x: whispers ${a}-${b} gap 4`,`y: modular ${a}-${b}-${c}`,`z: palindrome ${a}-${b}-${c}`];
  const original = form(declarations.join("\n"));
  for (let i = 0; i < declarations.length; i++) {
    const rotated = [...declarations.slice(i),...declarations.slice(0,i)].join("\n");
    eq(rotated,declarations.join("\n")); expect(form(rotated).sources.length).toBe(original.sources.length);
  }
  const activeCells = Array.from({length:64},(_,i) => `r1c${i+1}` as Cell);
  const large = nf(`nabner ${activeCells.join("-")}`,{ rows: 1, cols: 64, activeCells, alphabet: Array.from({length:64},(_,i) => i) });
  eq(`parity ${Array.from({length:600},(_,i) => i%2 ? b : a).join("-")}`,`parity ${a}-${b}`);
  expect(large.status).toBe("partial"); expect(compare(large,large).status).toBe("unresolved");
});

test("short loops follow published next, consecutive and window guards", () => {
  for (const kind of ["whispers", "parity", "primality", "summit"]) {
    const params = kind === "whispers" ? " gap 5" : "";
    eq(`${kind} ${a}${params} loop true`,`${kind} ${a}${params}`);
    eq(`${kind} ${a}-${b}${params} loop true`,`${kind} ${a}-${b}${params}`);
  }
  for (const kind of ["modular","entropic"]) {
    eq(`${kind} ${a}-${b} loop true`,`unique ${a}`);
    differs(`${kind} ${a}-${b} loop true`,`${kind} ${a}-${b}`);
    eq(`${kind} ${a} loop true`,`unique ${a}`);
  }
});

test("sum-equation cancellation and factor rewrites retain exact meaning and provenance", () => {
  const f = form(`region-sum ${a}-${a}-${c}-${c} segments [["${a}","${a}"],["${c}","${c}"]]`);
  const simple = form(`region-sum ${a}-${c} segments [["${a}"],["${c}"]]`);
  expect(f.solution).toEqual(simple.solution);
  expect(f.rewrites.some(r => r.rule === "sum-equation" && r.sources.length > 0)).toBe(true);
  expect(evaluate(f.solution,assignment([2,1,2]))).toBe(true);
  expect(evaluate(f.solution,assignment([2,1,3]))).toBe(false);
  const state: CanonicalState = { board: f.board, links: new Map(), rewrites: [], houses: new Map() };
  const cancelled = canonicalise({ op: "SumEqual", channel: "D", left: [a,b,a], right: [a,c,a] },state,[]);
  expect(cancelled).toEqual({op:"SumEqual",channel:"D",left:[b],right:[c]});
});

test("fractional gaps and extreme safe digits retain exact pair differences", () => {
  eq(`whispers ${a}-${b} gap 4.5`,`whispers ${a}-${b} gap 5`);
  eq(`close-whispers ${a}-${b} gap 2.5`,`close-whispers ${a}-${b} gap 2`);
  const context = { ...board, alphabet: [-Number.MAX_SAFE_INTEGER,0,1,Number.MAX_SAFE_INTEGER] };
  const f = form(`whispers ${a}-${b} gap 18014398509481984`,context);
  expect(evaluate(f.solution,assignment([-Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER]))).toBe(false);
  const primality = form(`primality ${a}-${b}`,{ ...board, alphabet: [2,4,341550071728321,2147483647] });
  expect(evaluate(primality.solution,assignment([2,341550071728321]))).toBe(true);
  expect(evaluate(primality.solution,assignment([2,2147483647]))).toBe(false);
});

test("nonstandard line omissions use the same checker validation", () => {
  for (const rule of ["whispers r1c1-r1c2 gap 5", "modular r1c1-r1c2", "nabner r1c1-r1c2"]) {
    const result = normalise(file(rule), board);
    expect(result.status).toBe("invalid");
    expect(result.issues.some(issue => issue.message.includes("explicitly on this board"))).toBe(true);
  }
});


test("region-sum combined visits retain occurrences and the default separate-visit meaning", () => {
  const rule = `region-sum ${a}-${c}-${b} segments [["${a}"],["${c}"],["${b}"]]`;
  eq(rule, rule + " combine false");
  const combined = form(rule + " combine true").solution;
  const separate = form(rule).solution;
  expect(evaluate(combined, assignment([1,2,3]))).toBe(true);
  expect(evaluate(separate, assignment([1,2,3]))).toBe(false);
  expect(evaluate(combined, assignment([3,3,3]))).toBe(false);
  expect(evaluate(separate, assignment([3,3,3]))).toBe(true);
  expect(evaluate(combined, assignment([1,2,4]))).toBe(false);
  const repeated = form(`region-sum ${a}-${c}-${a} segments [["${a}"],["${c}"],["${a}"]] combine true`).solution;
  expect(evaluate(repeated, assignment([2,1,4]))).toBe(true);
  expect(evaluate(repeated, assignment([2,1,2]))).toBe(false);
});

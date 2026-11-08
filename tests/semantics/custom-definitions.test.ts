import { beforeAll, expect, test } from "bun:test";
import { stringify } from "yaml";
import { compare, compileCase, evaluate, normalise, type BoardContext, type Cell, type Formula, type Normalisation } from "../../src";
import { caseBlocks, readCustomDefinitions } from "../../src/custom-definitions";
import { declarationLibrary, defaultCasePrelude } from "../../src/declaration-library";
import { canonicalBoard } from "../../src/semantics/board";
import { CustomUnsupported, customRefusals, lowerCustom, type CustomRefusal } from "../../src/semantics/custom";
import { parseDeclaration } from "../../src/declarations";

const [a, b, c, d]: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4"];
const digits9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cells = (n: number): Cell[] => [a, b, c, d].slice(0, n);
const context = (n = 4, alphabet = digits9): BoardContext => ({ rows: 1, cols: n, activeCells: cells(n), alphabet, regions: [cells(n)] });
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const path = { type: "path<cell>", description: "Ordered cells." };
const number = { type: "number", description: "A number." };

interface Definition { id: string; parameters: Record<string, unknown>; maths: string; class?: string }
/** The custom-rules fence for definitions, each under the first logic class that lets its formula check. */
function fence(...definitions: Definition[]): string {
  const entries = definitions.map(def => {
    for (const logicClass of def.class ? [def.class] : ["first-order", "with aggregates", "existential"]) {
      const entry = { id: def.id, name: def.id, class: logicClass, parameters: def.parameters, definition: "A synthetic rule.", maths: def.maths, example: "Fives break it." };
      const page = { file: "probe.md", text: `${header}---\n\`\`\`custom-rules\n${stringify([entry])}\`\`\`` };
      const read = readCustomDefinitions(page, caseBlocks(page), declarationLibrary.kinds, defaultCasePrelude(), declarationLibrary.urls);
      if (!read.diagnostics.length) return entry;
    }
    throw new Error(`The synthetic definition ${def.maths} does not check.`);
  });
  return "```custom-rules\n" + stringify(entries) + "```";
}
const caseFile = (rules: string, ...definitions: Definition[]) => ({ file: "synthetic.rules.md", text: `${header}---\n\n${definitions.length ? fence(...definitions) : ""}\n\`\`\`rules\n${rules}\n\`\`\`` });
const nf = (rules: string, definitions: Definition[], board = context()): Normalisation => normalise(caseFile(rules, ...definitions), board);
const custom = (maths: string, parameters: Record<string, unknown> = { cells: path }, id = "probe"): Definition => ({ id, parameters, maths });
const coverageOf = (result: Normalisation) => result.normalForm!.coverage;
const solution = (result: Normalisation) => JSON.stringify(result.normalForm!.solution);
function equal(left: Normalisation, right: Normalisation): boolean {
  expect([left.status, right.status]).toEqual(["complete", "complete"]);
  return compare(left, right).status === "equivalent";
}

// The first compile and normalise pay a one-time setup cost; keep it out of the individual tests.
beforeAll(() => {
  nf(`#probe ${a}-${b}`, [custom("∀c∈cells:D(c)!=5")], context(2));
  compileCase(caseFile(`#probe ${a}-${b}`, custom("∀c∈cells:D(c)!=5")));
});

test("an instance of a definition is lowered to the same finite primitives as the library uses", () => {
  const result = nf(`#probe ${a}-${b}-${c}`, [custom("|cells| = 3 ∧ D(cells[2]) = D(cells[0]) + 2 × D(cells[1])")], context(3));
  expect(result.issues).toEqual([]);
  expect(result.status).toBe("complete");
  expect(coverageOf(result)).toMatchObject([{ kind: "#probe", status: "lowered", source: { custom: true } }]);
  expect(result.normalForm!.solution).toEqual({ op: "SumEqual", channel: "D", left: [a, b, b], right: [c] });
});

test("equal definitions written with other names, parameter order and spelling give equal normal forms", () => {
  const one = nf(`#probe ${a}-${b}-${c} total 14`, [custom("Σ_{x∈cells} D(x) = total ∧ ∀i∈[0,|cells|-1): D(cells[i]) < D(cells[i+1])", { cells: path, total: number })], context(3));
  const two = nf(`#other 14 ${a}-${b}-${c}`.replace(/^(#other) (14) (.*)$/, `$1 ${"$3"} goal 14`), [{
    id: "other", parameters: { goal: number, line: path },
    maths: "(∀k∈[0,|line|-1): D(line[k+1]) > D(line[k])) ∧ goal = Σ_{y∈line} D(y)",
  }], context(3));
  expect(equal(one, two)).toBe(true);
  expect(solution(one)).toBe(solution(two));
  // The parameter values matter: another total is another rule.
  expect(equal(one, nf(`#probe ${a}-${b}-${c} total 15`, [custom("Σ_{x∈cells} D(x) = total ∧ ∀i∈[0,|cells|-1): D(cells[i]) < D(cells[i+1])", { cells: path, total: number })], context(3)))).toBe(false);
});

test("a near miss gives a different normal form", () => {
  const base = nf(`#probe ${a}-${b}`, [custom("∀i∈[0,|cells|-1): D(cells[i]) < D(cells[i+1])")], context(2));
  for (const maths of ["∀i∈[0,|cells|-1): D(cells[i]) <= D(cells[i+1])", "∀i∈[0,|cells|-1): D(cells[i]) + 1 < D(cells[i+1])", "∀i∈[0,|cells|-1): D(cells[i]) > D(cells[i+1])"]) {
    const near = nf(`#probe ${a}-${b}`, [custom(maths)], context(2));
    expect([maths, near.status]).toEqual([maths, "complete"]);
    expect([maths, compare(base, near).status]).toEqual([maths, "unresolved"]);
  }
  const sum = (maths: string) => nf(`#probe ${a}-${b}-${c}`, [custom(maths)], context(3));
  expect(compare(sum("Σ_{x∈cells} D(x) = 14"), sum("Σ_{x∈cells} D(x) = 15")).status).toBe("unresolved");
  expect(compare(sum("Σ_{x∈cells} D(x) = 14"), sum("Σ_{x∈cells} D(x) <= 14")).status).toBe("unresolved");
});

test("a definition equal to a library rule's formula gives the rule's own normal form", () => {
  const pairs: [string, string, Definition][] = [
    ["a cage total", `cage ${a}-${b}-${c} total 10 repeats true`, custom("Σ_{x∈cells} D(x) = 10")],
    ["distinct cells", `unique ${a}-${b}-${c}`, custom("∀p∈cells: ∀q∈cells: p!=q → D(p)!=D(q)")],
    ["a double arrow", `double-arrow ${b}-${c} ends ["${a}","${d}"]`, custom("|ends| = 2 ∧ Σ_{x∈line} D(x) = D(ends[0]) + D(ends[1])", { line: path, ends: { type: "list<cell>", description: "The end cells." } })],
    ["allowed digits", `allowed-digits ${a}-${b} digits [2,4,6]`, custom("∀x∈line: D(x) ∈ digits", { line: path, digits: { type: "list<digit>", description: "The permitted digits." } })],
    ["clones", `clone ${a}-${b}-${c}`, custom("∀p∈cells: ∀q∈cells: D(p) = D(q)")],
  ];
  for (const [label, rule, definition] of pairs) {
    const params = definition.parameters;
    const instance = "ends" in params ? `#probe ${b}-${c} ends ["${a}","${d}"]` : "digits" in params ? `#probe ${a}-${b} digits [2,4,6]` : `#probe ${a}-${b}-${c}`;
    const own = nf(rule, [], context());
    const lowered = nf(instance, [definition]);
    expect([label, own.status, lowered.status]).toEqual([label, "complete", "complete"]);
    expect([label, solution(lowered)]).toEqual([label, solution(own)]);
    expect([label, compare(own, lowered).status]).toEqual([label, "equivalent"]);
  }
});

test("a king-move definition built on a shared term equals the anti-king rule", () => {
  const board: BoardContext = { rows: 2, cols: 3, activeCells: ["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3"], alphabet: digits9, regions: [["r1c1", "r1c2", "r1c3", "r2c1", "r2c2", "r2c3"]] };
  const own = nf("anti-king", [], board);
  const lowered = nf("#kings", [{ id: "kings", parameters: {}, maths: '∀p∈C: ∀q∈C: moveRelation("king",p,q) ∧ p!=q → D(p)!=D(q)' }], board);
  expect(compare(own, lowered).status).toBe("equivalent");
});

test("a definition may use shared terms, local bindings and nested quantifiers", () => {
  const cases: [string, string, (digits: number[]) => boolean][] = [
    ["a shared term over a digit", "∃x∈cells: odd(D(x))", d => d.some(x => x % 2 === 1)],
    ["a residue on both sides", "|cells| = 3 ∧ rem(D(cells[0]),3) = rem(D(cells[1]),3)", d => d[0] % 3 === d[1] % 3],
    ["a difference", "∀i∈[0,|cells|-1): |D(cells[i]) - D(cells[i+1])| >= 2", d => d.slice(1).every((x, i) => Math.abs(d[i] - x) >= 2)],
    ["a local binding", "let t = Σ_{x∈cells} D(x); t >= 9 ∧ t <= 12", d => { const t = d.reduce((n, x) => n + x, 0); return t >= 9 && t <= 12; }],
    ["a condition on a condition", "|cells| = 3 ∧ (D(cells[0]) > 3 → D(cells[1]) < D(cells[2]))", d => !(d[0] > 3) || d[1] < d[2]],
    ["a choice by a condition", "|cells| = 3 ∧ (if D(cells[0]) > 3 then D(cells[1]) < D(cells[2]) else D(cells[1]) > D(cells[2]))", d => d[0] > 3 ? d[1] < d[2] : d[1] > d[2]],
    ["a biconditional", "|cells| = 3 ∧ (D(cells[0]) > 3 ↔ D(cells[1]) > 3)", d => (d[0] > 3) === (d[1] > 3)],
    ["distinct results", "allDifferent(cells, λx:cell: D(x) mod 3)", d => new Set(d.map(x => x % 3)).size === d.length],
    ["a membership test", "∀x∈cells: D(x) ∈ {1,3,5}", d => d.every(x => [1, 3, 5].includes(x))],
    ["not in a set", "|cells| = 3 ∧ D(cells[0]) ∉ {2,4}", d => ![2, 4].includes(d[0])],
    ["a weighted sum", "|cells| = 3 ∧ D(cells[0]) + 2 × D(cells[1]) + D(cells[2]) = 12", d => d[0] + 2 * d[1] + d[2] === 12],
    ["a sum bound", "Σ_{x∈cells} D(x) < 7", d => d.reduce((n, x) => n + x, 0) < 7],
    ["a ratio", "|cells| = 3 ∧ 2 × D(cells[0]) = 3 × D(cells[1])", d => 2 * d[0] === 3 * d[1]],
    ["an unequal sum equation", "|cells| = 3 ∧ D(cells[0]) + D(cells[1]) != D(cells[2])", d => d[0] + d[1] !== d[2]],
    ["a difference of sums", "|cells| = 3 ∧ D(cells[2]) = D(cells[0]) + D(cells[1])", d => d[2] === d[0] + d[1]],
    ["an existential pair", "∃p,q∈cells: p!=q ∧ D(p) = D(q)", d => new Set(d).size < d.length],
  ];
  for (const [label, maths, expected] of cases) {
    const alphabet = [1, 2, 3, 4, 5, 6];
    const result = nf(`#probe ${a}-${b}-${c}`, [custom(maths)], context(3, alphabet));
    expect([label, result.issues, result.status]).toEqual([label, [], "complete"]);
    // Every assignment of the three cells agrees with the formula the definition states.
    for (const x of alphabet) for (const y of alphabet) for (const z of alphabet) {
      expect([label, x, y, z, holds(result.normalForm!.solution, { [a]: x, [b]: y, [c]: z })]).toEqual([label, x, y, z, expected([x, y, z])]);
    }
  }
});

test("the lowered formula agrees with the public evaluator on a small board", () => {
  const cases: [string, Definition][] = [
    ["weighted", custom("|cells| = 3 ∧ D(cells[2]) = D(cells[0]) + 2 × D(cells[1])")],
    ["increasing sum", custom("Σ_{x∈cells} D(x) >= 8 ∧ ∀i∈[0,|cells|-1): D(cells[i]) < D(cells[i+1])")],
    ["spread", custom("∀p∈cells: ∀q∈cells: p!=q → |D(p) - D(q)| >= 2")],
    ["residues", custom("|cells| = 3 ∧ rem(D(cells[0]),2) = rem(D(cells[2]),2) ∧ odd(D(cells[1]))")],
  ];
  const alphabet = [1, 2, 3, 4, 5, 6];
  for (const [label, definition] of cases) {
    const rules = `#probe ${a}-${b}-${c}`;
    const result = nf(rules, [definition], context(3, alphabet));
    expect([label, result.status]).toEqual([label, "complete"]);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [${alphabet.join(",")}], regions: [[r1c1, r1c2, r1c3]]}\n---\n${fence(definition)}\n\`\`\`rules\n${rules}\n\`\`\`` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const rule = compiled.value!.rules[0];
    for (const x of alphabet) for (const y of alphabet) for (const z of alphabet) {
      const values = { [a]: x, [b]: y, [c]: z };
      expect([label, x, y, z, holds(result.normalForm!.solution, values)]).toEqual([label, x, y, z, evaluate(rule, { digits: values }).status === "holds"]);
    }
  }
});

test("negation, a condition and several instances combine as they do for library rules", () => {
  const sum = custom("Σ_{x∈cells} D(x) = 7");
  const positive = nf(`#probe ${a}-${b}`, [sum], context(2));
  const negated = nf(`not #probe ${a}-${b}`, [sum], context(2));
  expect(negated.normalForm!.solution).toEqual({ op: "Not", child: positive.normalForm!.solution });
  const twice = nf(`#probe ${a}-${b}\n#probe ${b}-${c}`, [sum], context(3));
  expect(twice.normalForm!.solution).toMatchObject({ op: "All" });
  // Two instances of one definition with different parameters are different constraints.
  const total = custom("Σ_{x∈cells} D(x) = n", { cells: path, n: number });
  expect(compare(nf(`#probe ${a}-${b} n 7`, [total], context(2)), nf(`#probe ${a}-${b} n 8`, [total], context(2))).status).toBe("unresolved");
  const merged = nf(`#probe ${a}-${b} n 7\n#probe ${a}-${b} n 8`, [total], context(2));
  expect(merged.normalForm!.solution).toMatchObject({ op: "All", children: [{}, {}] });
});

/** An evaluator for the finite primitives, independent of the library's own. */
function holds(f: Formula, v: Record<string, number>): boolean {
  switch (f.op) {
    case "All": return f.children.every(x => holds(x, v));
    case "Any": return f.children.some(x => holds(x, v));
    case "Not": return !holds(f.child, v);
    case "Pair": return f.table.some(([x, y]) => x === v[f.cells[0]] && y === v[f.cells[1]]);
    case "Allowed": return f.values.includes(v[f.cell]);
    case "Distinct": return new Set(f.cells.map(q => v[q])).size === f.cells.length;
    case "CountAtLeast": return f.cells.filter(q => v[q] === f.digit).length >= f.count;
    case "SumEqual": return f.left.reduce((n, q) => n + BigInt(v[q]), 0n) === f.right.reduce((n, q) => n + BigInt(v[q]), 0n);
    case "SumTotal": return f.cells.reduce((n, q) => n + BigInt(v[q]), 0n) === BigInt(f.total);
  }
}

const reason = (refusal: CustomRefusal, detail?: string) => new CustomUnsupported(refusal, detail).message;
/** One instance that cannot be lowered, with the typed reason its coverage must carry. A null detail checks the lead only. */
function refused(maths: string, refusal: CustomRefusal, detail: string | undefined | null, parameters: Record<string, unknown> = { cells: path }, rules = `#probe ${a}-${b}-${c}`, board = context(3)): void {
  const result = nf(rules, [custom(maths, parameters)], board);
  expect([maths, result.issues]).toEqual([maths, []]);
  expect([maths, result.status]).toEqual([maths, "partial"]);
  const probe = coverageOf(result).find(x => x.kind === "#probe")!;
  expect([maths, probe.status]).toEqual([maths, "unsupported"]);
  expect(probe.reason).toStartWith(customRefusals[refusal]);
  if (detail !== null) expect([maths, probe.reason]).toEqual([maths, reason(refusal, detail)]);
}

test("every refusal names what is missing", () => {
  refused("∀x∈cells: V(x) != 5", "effectiveValue", undefined);
  refused("∃n∈ℤ: n * n = 4", "unbounded", "the integers");
  refused("∃S:set<cell>: S ⊆ cells ∧ |S| = 2", "witness", "a set of cell", { cells: { type: "set<cell>", description: "Cells." } });
  refused("|cells| = 3 ∧ D(cells[0]) * D(cells[1]) = 6", "nonlinear", "* of two cell-digit expressions");
  refused("|cells| = 3 ∧ D(cells[0]) + D(cells[1]) < D(cells[2]) + 1", "relation", "3 cells");
  refused("(count x∈cells: D(x) = 1) >= 2", "collected", "a count of conditions on cell digits");
  refused("|H| = 2", "answer", "the shaded cells");
  refused("|cells| = 3 ∧ ∀i∈[0,200000): D(cells[0]) != 5", "expansion", "an interval of more than 100,000 positions");
  refused("connected(cells)", "primitive", "connected");
});

/** Lowers one instance directly, without the case reader's own parameter checks. */
function direct(maths: string, parameters: Record<string, unknown>, declaration: string, board: BoardContext, steps?: number) {
  const page = caseFile(declaration, custom(maths, parameters));
  const read = readCustomDefinitions(page, caseBlocks(page), declarationLibrary.kinds, defaultCasePrelude(), declarationLibrary.urls);
  const ast = parseDeclaration({ file: "x", text: declaration }, () => ({ primary: "cells" })).value!;
  return () => lowerCustom(read.definitions.get("#probe")!, ast, canonicalBoard(board), defaultCasePrelude(), steps);
}

test("a cell outside the board's active cells has no digit to read", () => {
  const holed: BoardContext = { rows: 1, cols: 3, activeCells: [a, c], alphabet: digits9, regions: [[a, c]] };
  const lower = direct("D(x) = 1", { cells: path, x: { type: "cell", description: "A cell." } }, `#probe ${a}-${c} x ${b}`, holed);
  expect(lower).toThrow(reason("undefined", "r1c2 is not an active board cell"));
});

test("a definition that spends more than its step allowance is refused", () => {
  const lower = direct("∀p∈cells: ∀q∈cells: D(p) + D(q) != 100", { cells: path }, `#probe ${a}-${b}-${c}`, context(3), 20);
  expect(lower).toThrow(reason("expansion", "more than 20 evaluation steps"));
});

test("a refusal leaves the other instances covered", () => {
  const result = nf(`#probe ${a}-${b}\nunique ${a}-${b}-${c}`, [custom("∀x∈cells: V(x) != 5")], context(3));
  expect(result.status).toBe("partial");
  expect(coverageOf(result).map(x => [x.kind, x.status])).toEqual([["#probe", "unsupported"], ["unique", "lowered"]]);
});

test("the checker's own refusals and unknown references keep the older reasons", () => {
  const external = normalise(caseFile(`https://example.test/elsewhere.md ${a}-${b}`), context(2));
  const probe = coverageOf(external).find(x => x.kind === "https://example.test/elsewhere.md");
  expect(probe).toMatchObject({ status: "unsupported", reason: "The referenced definition and its dependencies have not been resolved." });
});

test("a definition the checker rejected has no meaning to lower", () => {
  const page = caseFile(`#probe ${a}-${b}`, custom("∀x∈cells: D(x) != 5"));
  const read = readCustomDefinitions(page, caseBlocks(page), declarationLibrary.kinds, defaultCasePrelude(), declarationLibrary.urls);
  const unchecked = { ...read.definitions.get("#probe")!, checked: undefined };
  const ast = parseDeclaration({ file: "x", text: `#probe ${a}-${b}` }, () => ({ primary: "cells" })).value!;
  expect(() => lowerCustom(unchecked, ast!, canonicalBoard(context(2)), defaultCasePrelude())).toThrow(reason("unchecked"));
});

test("a shared term that calls itself is refused as recursion", () => {
  const page = caseFile(`#probe ${a}-${b}`, custom("∀x∈cells: D(x) != 5"));
  const read = readCustomDefinitions(page, caseBlocks(page), declarationLibrary.kinds, defaultCasePrelude(), declarationLibrary.urls);
  const definition = read.definitions.get("#probe")!;
  const base = defaultCasePrelude();
  const loop = { ...base.environment.terms.high, name: "loop", parameters: [], body: { kind: "call", span: base.environment.terms.high.body!.span, type: { name: "boolean" }, children: [{ kind: "name", value: "loop", span: base.environment.terms.high.body!.span, type: { name: "fn" }, children: [] }] } };
  const prelude = { ...base, environment: { ...base.environment, terms: { ...base.environment.terms, loop } } };
  const call = { kind: "call", value: undefined, span: base.environment.terms.high.body!.span, type: { name: "boolean" }, children: [{ kind: "name", value: "loop", span: base.environment.terms.high.body!.span, type: { name: "fn" }, children: [] }] };
  const ast = parseDeclaration({ file: "x", text: `#probe ${a}-${b}` }, () => ({ primary: "cells" })).value!;
  const recursive = { ...definition, checked: { ...definition.checked!, ast: call as never } };
  expect(() => lowerCustom(recursive, ast, canonicalBoard(context(2)), prelude as never)).toThrow(reason("recursion", "loop"));
});

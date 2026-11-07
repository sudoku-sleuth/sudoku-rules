import { beforeAll, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { stringify } from "yaml";
import { compileCase, evaluate, normalise, type BoardContext, type Cell, type Formula, type Normalisation } from "../../src";
import { caseBlocks, readCustomDefinitions } from "../../src/custom-definitions";
import { declarationLibrary, defaultCasePrelude } from "../../src/declaration-library";
import { compilePrelude } from "../../src/library";
import { definitionTouchesValues, valueFreePrimitives } from "../../src/semantics/values";

// The first compile and normalise pay a one-time setup cost; keep it out of the individual tests.
beforeAll(() => {
  const warm = { file: "warm.rules.md", text: `${"---\nformat: open-rules\ntitle: Warm\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n"}board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n---\n\`\`\`rules\nkropki r1c1-r1c2 white\n\`\`\`` };
  compileCase(warm);
  normalise(warm, { rows: 1, cols: 3, activeCells: ["r1c1", "r1c2", "r1c3"], alphabet: [1, 2, 3], regions: [["r1c1", "r1c2", "r1c3"]] });
});
const [a, b, c]: Cell[] = ["r1c1", "r1c2", "r1c3"];
const digits9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const board: BoardContext = { rows: 1, cols: 3, activeCells: [a, b, c], alphabet: digits9, regions: [[a, b, c]] };
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const cellsParameter = { type: "path<cell>", description: "Ordered cells." };
const definition = (maths: string, parameters: Record<string, unknown> = { cells: cellsParameter }, id = "probe", logicClass = "first-order") =>
  "\n```custom-rules\n" + stringify([{ id, name: "Probe", class: logicClass, parameters, definition: "A synthetic probe rule.", maths, example: "Fives break it." }]) + "```";
/** Reads one definition through the library's own checker and asks the semantics folder about it. */
function touches(maths: string, parameters?: Record<string, unknown>): boolean {
  // The definition must check cleanly under the one logic class that fits it.
  for (const logicClass of ["first-order", "with aggregates", "existential"]) {
    const page = { file: "probe.md", text: `${header}---\n${definition(maths, parameters, "probe", logicClass)}` };
    const read = readCustomDefinitions(page, caseBlocks(page), declarationLibrary.kinds, defaultCasePrelude(), declarationLibrary.urls);
    if (!read.diagnostics.length) return definitionTouchesValues(read.definitions.get("#probe")!, defaultCasePrelude());
  }
  throw new Error(`The synthetic definition ${maths} does not check.`);
}
/** The definition text under the one logic class that makes it check cleanly. */
function fitted(maths: string, parameters?: Record<string, unknown>): string {
  for (const logicClass of ["first-order", "with aggregates", "existential"]) {
    const text = definition(maths, parameters, "probe", logicClass);
    const page = { file: "probe.md", text: `${header}---\n${text}` };
    if (!readCustomDefinitions(page, caseBlocks(page), declarationLibrary.kinds, defaultCasePrelude(), declarationLibrary.urls).diagnostics.length) return text;
  }
  throw new Error(`The synthetic definition ${maths} does not check.`);
}
const valueRules = `kropki ${a}-${b} white\ncage ${b}-${c} total 7 repeats false`;
const file = (rules: string, custom: string, extra = "") => ({ file: "synthetic.rules.md", text: `${header}${extra}---\n${custom}\n\`\`\`rules\n${rules}\n\`\`\`` });
const run = (maths: string, parameters?: Record<string, unknown>, context = board): Normalisation =>
  normalise(file(`#probe ${a}-${b}\n${valueRules}`, definition(maths, parameters)), context);
const status = (result: Normalisation, kind: string) => result.normalForm!.coverage.find(x => x.kind === kind)!;
const unresolved = "Effective-value domain is unresolved because value bindings or definitions are uncovered.";

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

test("a definition that reads only face digits leaves Kropki and a cage total lowered on D", () => {
  for (const maths of ["∀c∈cells:D(c)!=5", "∀c∈cells: let d=D(c); d>1 ∨ row(c)=0", "∀c∈cells: given(c) → givenValue(c)>0"]) {
    const result = run(maths);
    expect(result.issues).toEqual([]);
    expect(result.status).toBe("partial");
    expect(status(result, "kropki").status).toBe("lowered");
    expect(status(result, "cage").status).toBe("lowered");
    expect(result.normalForm!.rewrites.filter(r => r.rule === "value-channel")).toHaveLength(2);
    // The custom declaration itself stays uncovered with its existing reason.
    const custom = result.normalForm!.coverage.find(x => x.status === "unsupported")!;
    expect(custom).toMatchObject({ status: "unsupported", reason: "The referenced definition and its dependencies have not been resolved." });
    expect(result.normalForm!.coverage.filter(x => x.status === "unsupported")).toHaveLength(1);
  }
});

test("a definition that is not used by a value rule can sit beside it, and negation does not change the verdict", () => {
  const result = normalise(file(`not #probe ${a}-${b}\n${valueRules}`, definition("∀c∈cells:D(c)!=5")), board);
  expect(status(result, "kropki").status).toBe("lowered");
  expect(status(result, "cage").status).toBe("lowered");
});

test("a definition that reads the effective value keeps value rules uncovered", () => {
  const channel = { type: "Channel", description: "Channel to read.", default: "D" };
  const reads: [string, string, Record<string, unknown>?][] = [
    ["direct V", "∀c∈cells:V(c)!=5"],
    ["effective", "∀c∈cells:effective(c)!=5"],
    ["read with literal V", '∀c∈cells:read(c,"V")!=5'],
    ["channel parameter defaulting to V", "∀c∈cells:read(c,channel)!=5", { cells: cellsParameter, channel: { ...channel, default: "V" } }],
    ["channel parameter defaulting to D", "∀c∈cells:read(c,channel)!=5", { cells: cellsParameter, channel }],
  ];
  for (const [label, maths, parameters] of reads) {
    const result = normalise(file(`#probe ${a}-${b}\n${valueRules}`, definition(maths, parameters)), board);
    expect([label, result.issues]).toEqual([label, []]);
    expect([label, status(result, "kropki")]).toMatchObject([label, { status: "unsupported", reason: unresolved }]);
    expect([label, status(result, "cage")]).toMatchObject([label, { status: "unsupported", reason: unresolved }]);
    expect([label, result.normalForm!.rewrites.filter(r => r.rule === "value-channel")]).toEqual([label, []]);
  }
});

test("the value check reads the typed formula and everything it reaches", () => {
  const channel = { type: "Channel", description: "Channel to read.", default: "D" };
  const label = { type: "string", description: "A name.", default: "D" };
  const touching: [string, string, Record<string, unknown>?][] = [
    ["V", "∀c∈cells:V(c)!=5"],
    ["effective", "∀c∈cells:effective(c)!=5"],
    ["read, literal V", '∀c∈cells:read(c,"V")!=5'],
    ["channel parameter used", "∀c∈cells:read(c,channel)!=5", { cells: cellsParameter, channel }],
    ["channel parameter unused", "∀c∈cells:D(c)!=5", { cells: cellsParameter, channel }],
    ["library function passed V", 'aggregate(cells,"V","sum")>3', undefined],
    ["library function through a let", 'let ch="D"; aggregate(cells,ch,"sum")>3', undefined],
    ["library function through a bound variable", '∀ch∈{"D"}: aggregate(cells,ch,"sum")>3', undefined],
    ["library function with a channel default of V", 'aggregate(cells,channel,"sum")>3', { cells: cellsParameter, channel: { type: "Channel", description: "Channel to read.", default: "V" } }],
    ["library function, one channel D and one V", 'classCount(cells,{1},"V")>0 ∧ aggregate(cells,"D","sum")>3', undefined],
    ["library function given a channel parameter", 'aggregate(cells,channel,"sum")>3', { cells: cellsParameter, channel }],
    ["wrapper, literal V", '∀c∈cells:channelValue("V",c)!=5'],
    ["wrapper, name from a parameter", "∀c∈cells:channelValue(label,c)!=5", { cells: cellsParameter, label }],
    ["shared value answer", '∀c∈cells:valueAnswer("w",c)!=5'],
    ["shared value answer through a wrapper", '∀c∈cells:channelValue("w",c)!=5'],
    ["literal V as a mark name", '∀c∈cells:marked("V",c)'],
    ["an opaque input", "|ValuedRuleMeanings|>0"],
  ];
  for (const [name, maths, parameters] of touching) expect([name, touches(maths, parameters)]).toEqual([name, true]);
  const neutral: [string, string, Record<string, unknown>?][] = [
    ["face digits", "∀c∈cells:D(c)!=5"],
    ["face digits through a let", "∀c∈cells: let d=D(c); d>1 ∨ row(c)=0"],
    ["guarded given value", "∀c∈cells: given(c) → givenValue(c)>0"],
    ["a selection mark with another name", '∀c∈cells:marked("A",c)'],
    ["geometry and a house", "∀c∈cells:c∈C ∧ row(c)<rows"],
    ["a counted shape", "countWhere(cells,λc:cell:D(c)=5)<=1", undefined],
    ["read, literal D", '∀c∈cells:read(c,"D")!=5'],
    ["aggregate, literal D", 'aggregate(cells,"D","sum")>3'],
    ["aggregate nested in a let", 'let total=aggregate(cells,"D","product"); total>3'],
    ["a term reaching read through a lambda", 'classCount(cells,{1,2},"D")>0'],
    ["a term reaching aggregate and a repeat policy", 'repeatPolicy(cells,"D",false)'],
  ];
  for (const [name, maths, parameters] of neutral) expect([name, touches(maths, parameters)]).toEqual([name, false]);
});

test("a call with the digit channel stays value-neutral and lowers beside value rules", () => {
  for (const maths of ['aggregate(cells,"D","sum")>3', '∀c∈cells:read(c,"D")!=5', 'classCount(cells,{1,2},"D")>0']) {
    const result = normalise(file(`#probe ${a}-${b}\n${valueRules}`, fitted(maths)), board);
    expect([maths, result.issues]).toEqual([maths, []]);
    expect([maths, status(result, "kropki").status]).toEqual([maths, "lowered"]);
    expect([maths, status(result, "cage").status]).toEqual([maths, "lowered"]);
  }
});

test("the same calls with another channel keep value rules uncovered", () => {
  const channel = { type: "Channel", description: "Channel to read.", default: "D" };
  const refused: [string, string, Record<string, unknown>?][] = [
    ["aggregate, V", 'aggregate(cells,"V","sum")>3'],
    ["read, V", '∀c∈cells:read(c,"V")!=5'],
    ["aggregate, parameter", "aggregate(cells,channel,\"sum\")>3", { cells: cellsParameter, channel }],
    ["aggregate, default V", "aggregate(cells,channel,\"sum\")>3", { cells: cellsParameter, channel: { ...channel, default: "V" } }],
    ["aggregate, let", 'let ch="D"; aggregate(cells,ch,"sum")>3'],
    ["classCount, variable", '∀ch∈{"D"}: classCount(cells,{1},ch)>0'],
  ];
  for (const [label, maths, parameters] of refused) {
    const result = normalise(file(`#probe ${a}-${b}\n${valueRules}`, fitted(maths, parameters)), board);
    expect([label, result.issues]).toEqual([label, []]);
    expect([label, status(result, "kropki")]).toMatchObject([label, { status: "unsupported", reason: unresolved }]);
    expect([label, status(result, "cage")]).toMatchObject([label, { status: "unsupported", reason: unresolved }]);
  }
});

test("an unchecked definition counts as touching values", () => {
  const page = { file: "probe.md", text: `${header}---\n${definition("∀c∈cells:D(c)!=")}` };
  const read = readCustomDefinitions(page, caseBlocks(page), declarationLibrary.kinds, defaultCasePrelude(), declarationLibrary.urls);
  expect(read.diagnostics.length).toBeGreaterThan(0);
  expect(read.definitions.get("#probe")?.checked).toBeUndefined();
  const unchecked = read.definitions.get("#probe");
  if (unchecked) expect(definitionTouchesValues(unchecked, defaultCasePrelude())).toBe(true);
});

test("one reading definition is enough, and modifiers keep the domain unresolved beside a neutral one", () => {
  const two = definition("∀c∈cells:D(c)!=5") + definition("∀c∈cells:V(c)!=5", { cells: cellsParameter }, "reader");
  const mixed = normalise(file(`#probe ${a}-${b}\n#reader ${b}-${c}\n${valueRules}`, two), board);
  expect(status(mixed, "kropki").status).toBe("unsupported");
  const modifier = normalise(file(`#probe ${a}-${b}\n${valueRules}\nvalue-modifier factor 2 offset 0 exactly [["${c}"]] count 1 atMostOne [["${c}"]] distinct false`, definition("∀c∈cells:D(c)!=5")), board);
  expect(status(modifier, "kropki").status).toBe("unsupported");
});

test("the lowered value rules and the public evaluator agree on every board beside a face-digit definition", () => {
  const maths = "∀c∈cells:D(c)!=5";
  const shapes = ["kropki r1c1-r1c2 white", "kropki r1c1-r1c2 black", "cage r1c1-r1c2-r1c3 total 12 repeats false", "cage r1c2-r1c3 total 7 repeats true", "pair r1c1-r1c2 sum 5"];
  for (const symbols of [digits9, [0, 2, 3, 5, 10]]) for (const shape of shapes) for (const negated of [false, true]) {
    const rules = `#probe ${a}-${b}\n${negated ? "not " : ""}${shape}`;
    const context = { ...board, alphabet: symbols };
    const n = normalise(file(rules, definition(maths)), context);
    expect(n.issues).toEqual([]);
    expect(status(n, shape.split(" ")[0]).status).toBe("lowered");
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [${symbols.join(",")}], regions: [[r1c1, r1c2, r1c3]]}\n---\n${definition(maths)}\n\`\`\`rules\n${rules}\n\`\`\`` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const valueRule = compiled.value!.rules[1];
    for (const x of symbols) for (const y of symbols) for (const z of symbols) {
      const values = { [a]: x, [b]: y, [c]: z };
      const expected = evaluate(valueRule, { digits: values }).status === "holds";
      expect([rules, symbols.join(), x, y, z, holds(n.normalForm!.solution, values)]).toEqual([rules, symbols.join(), x, y, z, expected]);
    }
  }
});

test("a mixed case with digit-channel calls agrees with the public evaluator", () => {
  const maths = 'aggregate(cells,"D","sum")>3 ∧ ∀c∈cells:read(c,"D")!=5';
  const rules = `#probe ${a}-${b}\nkropki ${a}-${b} white\ncage ${b}-${c} total 7 repeats false`;
  const symbols = [1, 2, 5];
  const n = normalise(file(rules, fitted(maths)), { ...board, alphabet: symbols });
  expect(n.issues).toEqual([]);
  expect(n.normalForm!.coverage.filter(x => x.status === "unsupported").map(x => x.kind)).toEqual(["#probe"]);
  const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [${symbols.join(",")}], regions: [[r1c1, r1c2, r1c3]]}\n---\n${fitted(maths)}\n\`\`\`rules\n${rules}\n\`\`\`` });
  expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
  const [custom, ...valueOnes] = compiled.value!.rules;
  for (const x of symbols) for (const y of symbols) for (const z of symbols) {
    const values = { [a]: x, [b]: y, [c]: z };
    const digits = { digits: values };
    expect([x, y, z, holds(n.normalForm!.solution, values)]).toEqual([x, y, z, valueOnes.every(rule => evaluate(rule, digits).status === "holds")]);
    expect(evaluate(custom, digits).status === "holds").toBe(x + y > 3 && x !== 5 && y !== 5);
  }
});

const urlDefinition = (url: string, maths: string) =>
  "\n```custom-rules\n" + stringify([{ url, name: "Probe", class: "first-order", parameters: { cells: cellsParameter }, definition: "A synthetic probe rule.", maths, example: "Fives break it." }]) + "```";

test("a definition published at its own URL is treated like a local one", () => {
  const url = "https://example.test/probe.md";
  const neutral = normalise(file(`${url} ${a}-${b}\n${valueRules}`, urlDefinition(url, "∀c∈cells:D(c)!=5")), board);
  expect(neutral.issues).toEqual([]);
  expect(status(neutral, "kropki").status).toBe("lowered");
  expect(status(neutral, "cage").status).toBe("lowered");
  const reading = normalise(file(`${url} ${a}-${b}\n${valueRules}`, urlDefinition(url, "∀c∈cells:V(c)!=5")), board);
  expect(status(reading, "kropki")).toMatchObject({ status: "unsupported", reason: unresolved });
});

test("a reference to a definition that is not in the file keeps value rules uncovered beside a neutral local one", () => {
  const result = normalise(file(`#probe ${a}-${b}\nhttps://example.test/elsewhere.md ${b}-${c}\n${valueRules}`, definition("∀c∈cells:D(c)!=5")), board);
  expect(result.issues).toEqual([]);
  expect(status(result, "kropki")).toMatchObject({ status: "unsupported", reason: unresolved });
  expect(status(result, "cage")).toMatchObject({ status: "unsupported", reason: unresolved });
});

test("a conditioned or negated instance of a neutral definition still leaves value rules lowered", () => {
  for (const instance of [`#probe ${a}-${b} if uniform`, `#probe ${a}-${b} unless uniform`, `not #probe ${a}-${b}`]) {
    const result = normalise(file(`${instance}\n${valueRules}`, definition("∀c∈cells:D(c)!=5")), board);
    expect([instance, result.issues]).toEqual([instance, []]);
    expect([instance, status(result, "kropki").status]).toEqual([instance, "lowered"]);
    expect([instance, status(result, "cage").status]).toEqual([instance, "lowered"]);
  }
});

test("on a whole case with a neutral definition the lowered D formulas agree with the evaluator, custom rule included", () => {
  const maths = "∀c∈cells:D(c)!=5";
  const rules = `#probe ${a}-${b}\nkropki ${a}-${b} white\ncage ${b}-${c} total 7 repeats false`;
  for (const symbols of [digits9, [0, 2, 3, 5, 10]]) {
    const n = normalise(file(rules, definition(maths)), { ...board, alphabet: symbols });
    expect(n.issues).toEqual([]);
    expect(n.normalForm!.coverage.filter(x => x.status === "unsupported").map(x => x.kind)).toEqual(["#probe"]);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 3, symbols: [${symbols.join(",")}], regions: [[r1c1, r1c2, r1c3]]}\n---\n${definition(maths)}\n\`\`\`rules\n${rules}\n\`\`\`` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const [custom, ...valueOnes] = compiled.value!.rules;
    expect(valueOnes).toHaveLength(2);
    for (const x of symbols) for (const y of symbols) for (const z of symbols) {
      const values = { [a]: x, [b]: y, [c]: z };
      const digits = { digits: values };
      const valueHolds = valueOnes.every(rule => evaluate(rule, digits).status === "holds");
      const customHolds = evaluate(custom, digits).status === "holds";
      const whole = compiled.value!.rules.every(rule => evaluate(rule, digits).status === "holds");
      // The lowered formulas match the value rules, and the custom rule only adds its own face-digit condition.
      expect([symbols.join(), x, y, z, holds(n.normalForm!.solution, values)]).toEqual([symbols.join(), x, y, z, valueHolds]);
      expect(whole).toBe(valueHolds && customHolds);
      expect(customHolds).toBe(x !== 5 && y !== 5);
    }
  }
});

/** The shared prelude plus test-only terms, so the Channel shortcut can be tried on small bodies. */
const probePrelude = (() => {
  const source = readFileSync(new URL("../../rules/predicates.md", import.meta.url), "utf8");
  const terms = [
    'term pickEq(c:cell,ch:Channel):boolean = if ch="D" then D(c)!=5 else V(c)!=5;',
    'term pickReversed(c:cell,ch:Channel):boolean = if "D"=ch then D(c)!=5 else V(c)!=5;',
    'term pickNotEqual(c:cell,ch:Channel):boolean = if ch!="D" then V(c)!=5 else D(c)!=5;',
    'term pickNested(c:cell,ch:Channel):boolean = if ch="D" then (if ch="V" then V(c)!=5 else D(c)!=5) else V(c)!=5;',
    'term pickOnlyV(c:cell,ch:Channel):boolean = if ch="V" then V(c)!=5 else D(c)!=5;',
    'term pickVThen(c:cell,ch:Channel):boolean = if ch="D" then V(c)!=5 else D(c)!=5;',
    'term pickOutside(c:cell,ch:Channel):boolean = ch="D" ∧ D(c)!=5;',
  ];
  const prelude = compilePrelude({ file: "rules/predicates.md", text: `${source}\n\n\`\`\`openrules\n${terms.join("\n")}\n\`\`\`\n` });
  expect(prelude.diagnostics).toEqual([]);
  return prelude.value!;
})();
function touchesProbe(maths: string): boolean {
  const page = { file: "probe.md", text: `${header}---\n${definition(maths)}` };
  const read = readCustomDefinitions(page, caseBlocks(page), declarationLibrary.kinds, probePrelude, declarationLibrary.urls);
  expect([maths, read.diagnostics]).toEqual([maths, []]);
  return definitionTouchesValues(read.definitions.get("#probe")!, probePrelude);
}

test("a fixed digit channel chooses the branch it selects and nothing else", () => {
  const neutral = [
    ["equals, with a V else-branch skipped", '∀c∈cells:pickEq(c,"D")'],
    ["reversed operand order", '∀c∈cells:pickReversed(c,"D")'],
    ["not equal", '∀c∈cells:pickNotEqual(c,"D")'],
    ["nested", '∀c∈cells:pickNested(c,"D")'],
    ["a V comparison skips its then-branch", '∀c∈cells:pickOnlyV(c,"D")'],
  ];
  for (const [name, maths] of neutral) expect([name, touchesProbe(maths)]).toEqual([name, false]);
  const touching = [
    ["the V branch is the one selected", '∀c∈cells:pickVThen(c,"D")'],
    ["the same term with V", '∀c∈cells:pickEq(c,"V")'],
    ["a fixed parameter used outside a call or condition", '∀c∈cells:pickOutside(c,"D")'],
  ];
  for (const [name, maths] of touching) expect([name, touchesProbe(maths)]).toEqual([name, true]);
});

test("no primitive that takes a Channel is treated as value-free", () => {
  const { terms } = defaultCasePrelude().environment;
  for (const name of valueFreePrimitives) {
    const declaration = Object.hasOwn(terms, name) ? terms[name] : undefined;
    if (declaration && !declaration.body) expect([name, declaration.parameters.some(p => p.type.name === "Channel")]).toEqual([name, false]);
  }
});

import { expect, test } from "bun:test";
import { compileCase, evaluate, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";

const [a, b, c, d] = ["r1c1", "r1c2", "r1c3", "r1c4"] as Cell[];
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const context = (symbols: number[], givens: { cell: Cell; digit: number }[] = []): BoardContext => ({ rows: 1, cols: 4, activeCells: [a, b, c, d], alphabet: symbols, regions: [[a, b, c, d]], givens });
const nf = (rules: string, symbols = [1, 2, 3, 4, 5], givens: { cell: Cell; digit: number }[] = [], extra = "") => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(`${rules}${extra}`)}` }, context(symbols, givens));
const eq = (x: string, y: string) => expect(compare(nf(x), nf(y)).status).toBe("equivalent");
const differs = (x: string, y: string) => { const r = compare(nf(x), nf(y)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };
const modifier = `\nvalue-modifier factor 2 offset 0 exactly [["${d}"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
const target = (n: number, include: boolean) => `selection {"stop":"target","target":${n},"crusts":[],"include":${include}}`;
const crust = (list: number[], include: boolean) => `selection {"stop":"crust","crusts":[${list}],"include":${include}}`;
const given = (include: boolean) => `selection {"stop":"given","crusts":[],"include":${include}}`;

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

test("channel, repeats and prefix selection normalise with nothing uncovered", () => {
  for (const params of [' channel "D"', " repeats true", ` ${target(5, false)}`, ` ${crust([1, 5], true)}`, ` channel "D" repeats true ${target(5, true)}`]) {
    const n = nf(`renban ${a}-${b}-${c}${params}`);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
  }
  const withGiven = nf(`renban ${a}-${b}-${c} ${given(false)}`, [1, 2, 3, 4, 5], [{ cell: c, digit: 2 }]);
  expect(withGiven.issues).toEqual([]);
  expect(withGiven.status).toBe("complete");
});

test("spellings of the same line compare equivalent", () => {
  eq(`renban ${a}-${b}-${c}`, `renban ${a}-${b}-${c} channel "V" repeats false`);
  eq(`renban ${a}-${b}-${c} channel "D"`, `renban ${a}-${b}-${c}`);
  // Renban without its no-repeat condition is Bremban.
  eq(`renban ${a}-${b}-${c} repeats true channel "D"`, `bremban ${a}-${b}-${c}`);
  eq(`renban ${a}-${b}-${c} repeats true`, `bremban ${c}-${a}-${b}`);
  eq(`renban ${a}-${b}-${c} ${target(5, false)}`, `renban ${a}-${b}-${c} channel "V" repeats false ${target(5, false)}`);
});

test("different channel handling, repeats or selection give different normal forms", () => {
  differs(`renban ${a}-${b}-${c}`, `renban ${a}-${b}-${c} repeats true`);
  differs(`renban ${a}-${b}-${c} ${target(5, false)}`, `renban ${a}-${b}-${c} ${target(5, true)}`);
  differs(`renban ${a}-${b}-${c} ${target(5, false)}`, `renban ${a}-${b}-${c} ${target(4, false)}`);
  differs(`renban ${a}-${b}-${c} ${target(5, false)}`, `renban ${a}-${b}-${c}`);
  differs(`renban ${a}-${b}-${c} ${crust([1, 5], true)}`, `renban ${a}-${b}-${c} ${crust([1], true)}`);
  differs(`renban ${a}-${b}-${c} ${target(5, false)}`, `renban ${c}-${b}-${a} ${target(5, false)}`);
  const withGiven = (list: string, digit: number) => compare(nf(`renban ${list} ${given(true)}`, [1, 2, 3, 4, 5], [{ cell: b, digit }]), nf(`renban ${list} ${given(true)}`, [1, 2, 3, 4, 5], [{ cell: c, digit }]));
  expect(withGiven(`${a}-${b}-${c}`, 3).status).not.toBe("equivalent");
});

test("an explicit edge list stays uncovered with a reason", () => {
  const n = nf(`renban ${a}-${b}-${c} edges [["${a}","${b}"],["${b}","${c}"]]`);
  expect(n.normalForm!.coverage.find(x => x.kind === "renban")).toMatchObject({ status: "unsupported" });
});

test("channel D stays covered when the effective-value domain is unresolved, channel V does not", () => {
  const read = (params: string) => nf(`renban ${a}-${b}${params}`, [1, 2, 3, 4, 5], [], modifier).normalForm!.coverage.find(x => x.kind === "renban")!;
  expect(read(' channel "D" repeats true')).toMatchObject({ status: "lowered" });
  expect(read(` channel "D" ${target(5, false)}`)).toMatchObject({ status: "lowered" });
  expect(read("")).toMatchObject({ status: "unsupported" });
  expect(read(" repeats true")).toMatchObject({ status: "unsupported" });
});

/**
 * The evaluator runs a lowered declaration's own formula unless the assignment supplies effective values and the formula reads them,
 * so the expectation comes from the published definition: the declaration is written on channel V (the default) and evaluated with
 * effective values equal to the digits, which is what channel D reads. Bremban is Renban with repeats true on that channel.
 */
const oracle = (text: string) => text.replace(/ channel "D"/g, "").replace(/bremban ([^ ]+)/, "renban $1 repeats true");
/** An entry marked "none" is a declaration no assignment satisfies and "all" one every assignment satisfies, so agreement there is checked against the empty or the full set. */
type Entry = string | [string, "none" | "all"];
function differential(symbols: number[], entries: Entry[], givens: { cell: Cell; digit: number }[] = []) {
  const cells = [a, b, c, d];
  const given = givens.length ? `givens: ${givens.map(g => `${g.cell}=${g.digit}`).join(" ")}\n` : "";
  const compile = (text: string) => {
    const compiled = compileCase({ file: "example.md", text: `${header}${given}board: {rows: 1, cols: 4, symbols: [${symbols}], regions: [[${cells.join(", ")}]]}\n---${body(text)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    return compiled.value!.rules[0];
  };
  for (const entry of entries) {
    const [text, extreme] = typeof entry === "string" ? [entry, undefined] : entry;
    const n = nf(text, symbols, givens);
    expect(n.issues).toEqual([]);
    expect(n.status).toBe("complete");
    const rule = compile(oracle(text));
    let satisfied = 0, total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === cells.length) {
        const expected = evaluate(rule, { digits: values, values }).status === "holds";
        expect([text, JSON.stringify(values), holds(n.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        total++;
        if (expected) satisfied++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [cells[index]]: x });
    };
    walk(0, {});
    // Agreement is never vacuous: a declaration is satisfied by some assignments and broken by others unless it is marked "none" or "all".
    expect([text, satisfied > 0, satisfied < total]).toEqual([text, extreme !== "none", extreme !== "all"]);
  }
}

// One test for each declaration keeps every test small.
const at = (cell: Cell, digit: number) => [{ cell, digit }];
const cases: [Entry, { cell: Cell; digit: number }[]?][] = [
  [`renban ${a}-${b}-${c} repeats true`], [`renban ${a}-${b}-${c} channel "D"`], [`renban ${a}-${b}-${c}-${d} repeats true channel "D"`], [`not renban ${a}-${b}-${c} repeats true`],
  [`renban ${a}-${b}-${c} ${target(3, false)}`], [`renban ${a}-${b}-${c} ${target(3, true)}`], [`renban ${a}-${b}-${c}-${d} ${target(1, true)} repeats true`],
  [[`renban ${a}-${b}-${c} ${target(9, true)}`, "none"]], [`renban ${a}-${b}-${c} ${crust([1, 3], false)}`], [`renban ${a}-${b}-${c}-${d} ${crust([3], true)} channel "D"`],
  [[`renban ${a}-${b}-${c} ${crust([], true)}`, "none"]], [[`renban ${a}-${b}-${c} ${crust([1, 2, 3], true)}`, "all"]], [`not renban ${a}-${b}-${c} ${target(2, true)}`],
  [`renban ${a}-${b}-${c}-${d} ${given(true)}`, at(c, 2)], [`renban ${a}-${b}-${c}-${d} ${given(false)} repeats true`, at(c, 2)], [`renban ${a}-${b}-${c} ${given(false)}`, at(c, 2)],
  [[`renban ${a}-${b} ${given(true)}`, "none"], at(c, 2)], [[`renban ${a}-${b}-${c} ${given(false)}`, "none"], at(a, 3)],
];
for (const [entry, givens] of cases) {
  test(`the lowered formula and the public evaluator agree on every assignment: ${typeof entry === "string" ? entry : entry[0]}`, () => differential([1, 2, 3], [entry], givens));
}

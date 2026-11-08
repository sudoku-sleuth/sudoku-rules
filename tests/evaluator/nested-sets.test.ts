import { expect, test } from "bun:test";
import { stringify } from "yaml";
import { compare, compileCase, evaluate, normalise, type BoardContext, type Cell } from "../../src";

const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const cells: Cell[] = ["r1c1", "r1c2", "r1c3"];
const [a, b, c] = cells;
const board: BoardContext = { rows: 1, cols: 3, activeCells: cells, alphabet: [1, 2, 3], regions: [cells] };
const cage = (list: Cell[], total: number) => ({ cells: list, expression: { op: "number", value: total } });
const rule = (cages: object[]) => `cage-expressions cages ${JSON.stringify(cages)} distinct false`;
const text = (rules: string, extra = "", boardText = "board: {rows: 1, cols: 3, symbols: [1,2,3], regions: [[r1c1, r1c2, r1c3]]}\n") =>
  `${header}${boardText}---\n\`\`\`rules\n${rules}\n\`\`\`${extra ? `\n${extra}` : ""}`;
const compiled = (rules: string, extra?: string, boardText?: string) => {
  const result = compileCase({ file: "example.md", text: text(rules, extra, boardText) });
  expect(result.diagnostics.filter(d => !d.code.startsWith("W_"))).toEqual([]);
  return result.value!.rules[0];
};
const nf = (rules: string) => normalise({ file: "synthetic.rules.md", text: text(rules) }, board);

test("the library loads", () => {
  evaluate({ ...compiled(rule([cage([a], 1)])), finite: undefined }, { digits: {} });
}, 30000);

test("a nested set of cells is distinct and in numeric row then column order; lists and top-level sets are left as written", () => {
  const custom = "```custom-rules\n" + stringify([{
    id: "nest", name: "Nest", class: "with aggregates",
    parameters: { groups: { type: "list<record{cells:set<cell>,order:list<cell>}>", description: "Groups." }, loose: { type: "set<cell>", description: "Cells." } },
    definition: "Every group sums to its size.", maths: "∀g∈groups: Σ_{c∈g.cells} D(c)=|g.cells|", example: "Ones satisfy.",
  }]) + "```";
  const group = { cells: ["r10c1", "r2c1", "r2c1", "r1c1"], order: ["r10c1", "r2c1", "r2c1", "r1c1"] };
  const rule = compiled(`#nest groups [${JSON.stringify(group)}] loose [r10c1, r2c1, r2c1]`, custom, "board: {rows: 10, cols: 1, symbols: [1,2,3,4,5,6,7,8,9,10]}\n");
  const [read] = rule.parameters.groups as { cells: string[]; order: string[] }[];
  expect(read.cells).toEqual(["r1c1", "r2c1", "r10c1"]);
  expect(read.order).toEqual(["r10c1", "r2c1", "r2c1", "r1c1"]);
  expect(rule.parameters.loose).toEqual(["r10c1", "r2c1", "r2c1"]);
});

// Digits for the cells, and effective values that differ from them: the rule reads printed digits only.
function verdicts(rules: string): string[] {
  const published = { ...compiled(rules), finite: undefined };
  const out: string[] = [];
  for (const x of [1, 2, 3]) for (const y of [1, 2, 3]) for (const z of [1, 2, 3]) {
    const digits = { [a]: x, [b]: y, [c]: z };
    const values = { [a]: 2 * x + 1, [b]: 2 * y + 1, [c]: 2 * z + 1 };
    const plain = evaluate(published, { digits }).status, shifted = evaluate(published, { digits, values }).status;
    expect(shifted).toBe(plain);
    out.push(plain);
  }
  return out;
}

test("a cell repeated or reordered inside a nested set changes neither the verdict nor the normal form", () => {
  const written = [rule([cage([a, b], 5), cage([c], 3)]), rule([cage([b, a], 5), cage([c], 3)]), rule([cage([a, a, b], 5), cage([c, c], 3)]), rule([cage([b, a, b, a], 5), cage([c], 3)])];
  const expected = verdicts(written[0]);
  expect(expected.filter(v => v === "holds").length).toBeGreaterThan(0);
  expect(expected.filter(v => v === "broken").length).toBeGreaterThan(0);
  for (const other of written.slice(1)) {
    expect(verdicts(other)).toEqual(expected);
    expect(nf(other).issues).toEqual([]);
    expect(compare(nf(written[0]), nf(other)).status).toBe("equivalent");
  }
  // Counted once: the cell a=2 and b=3 reach the total 5 only when a is not added twice.
  expect(evaluate({ ...compiled(written[2]), finite: undefined }, { digits: { [a]: 2, [b]: 3, [c]: 3 } }).status).toBe("holds");
});

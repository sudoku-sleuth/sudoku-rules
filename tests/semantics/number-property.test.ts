import { expect, test } from "bun:test";
import { compileCase, normalise, compare, type BoardContext, type Cell, type Formula } from "../../src";
import { published } from "./published";
import { isPrime } from "../../src/semantics/number-property";

// Mutation-tested: counting `composite` as an even number (`n % 2n === 0n`) fails the sum and decimal differentials.
const cells: Cell[] = ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"];
const [a, b, c, d] = cells;
const header = "---\nformat: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const body = (rules: string) => `\n\`\`\`rules\n${rules}\n\`\`\``;
const nine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const boardOf = (n: number, alphabet = nine): BoardContext => ({ rows: 1, cols: n, activeCells: cells.slice(0, n), alphabet, regions: [cells.slice(0, n)] });
const nf = (rules: string, n = 6, alphabet = nine) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, boardOf(n, alphabet));
const eq = (x: string, y: string, n = 6, alphabet = nine) => expect(compare(nf(x, n, alphabet), nf(y, n, alphabet)).status).toBe("equivalent");
const differs = (x: string, y: string, n = 6, alphabet = nine) => { const r = compare(nf(x, n, alphabet), nf(y, n, alphabet)); expect(r.status).not.toBe("equivalent"); expect(r.covered).toBe("structural-difference"); };

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
function form(rules: string, n = 6, alphabet = nine) { const r = nf(rules, n, alphabet); expect(r.issues).toEqual([]); expect(r.status).toBe("complete"); return r.normalForm!.solution; }
const at = (...v: number[]) => Object.fromEntries(v.map((x, i) => [cells[i], x]));
const list = (...xs: Cell[]) => `[${xs.map(x => `"${x}"`).join(",")}]`;
const operand = (xs: Cell[], operation = "sum", repeats = true, extra = "") => `{"cells":${list(...xs)},"channel":"D","operation":"${operation}","repeats":${repeats}${extra}}`;
const prop = (o: string, property: string, extra = "") => `number-property operand ${o} property "${property}"${extra}`;
const coverageOf = (rules: string, kind: string, alphabet = nine) => nf(rules, 6, alphabet).normalForm!.coverage.find(x => x.kind === kind);

// The first library load is slow on CI, so it is timed on its own with a longer limit; the tests below reuse it.
test("the library loads", () => {
  nf(prop(operand([a, b]), "prime"));
  compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: 2, symbols: [1,2,3,4,5,6,7,8,9], regions: [[r1c1, r1c2]]}\n---${body(prop(operand([a, b]), "prime"))}` });
}, 30000);

test("a sum is prime, composite, a power, divisible or of a given length", () => {
  const prime = form(prop(operand([a, b]), "prime"));
  expect(holds(prime, at(1, 2))).toBe(true);
  expect(holds(prime, at(6, 7))).toBe(true);
  expect(holds(prime, at(3, 3))).toBe(false);
  expect(holds(prime, at(1, 1))).toBe(true);
  const composite = form(prop(operand([a, b]), "composite"));
  expect(holds(composite, at(3, 3))).toBe(true);
  expect(holds(composite, at(1, 2))).toBe(false);
  expect(holds(composite, at(4, 5))).toBe(true);
  const square = form(prop(operand([a, b]), "power"));
  expect(holds(square, at(2, 2))).toBe(true);
  expect(holds(square, at(7, 9))).toBe(true);
  expect(holds(square, at(2, 3))).toBe(false);
  const cube = form(prop(operand([a, b]), "power", " argument 3"));
  expect(holds(cube, at(4, 4))).toBe(true);
  expect(holds(cube, at(4, 5))).toBe(false);
  const five = form(prop(operand([a, b]), "divisible", " argument 5"));
  expect(holds(five, at(4, 6))).toBe(true);
  expect(holds(five, at(4, 5))).toBe(false);
  const places = form(prop(operand([a, b]), "places", " argument 2"));
  expect(holds(places, at(4, 6))).toBe(true);
  expect(holds(places, at(4, 5))).toBe(false);
  expect(holds(places, at(9, 9))).toBe(true);
});

test("a decimal operand reads its digits in order", () => {
  const f = form(prop(operand([a, b], "decimal"), "prime"), 2);
  expect(holds(f, at(1, 3))).toBe(true);
  expect(holds(f, at(3, 1))).toBe(true);
  expect(holds(f, at(2, 3))).toBe(true);
  expect(holds(f, at(2, 1))).toBe(false);
  expect(holds(f, at(4, 9))).toBe(false);
  expect(holds(f, at(7, 9))).toBe(true);
  const square = form(prop(operand([a, b], "decimal"), "power"), 2);
  expect(holds(square, at(4, 9))).toBe(true);
  expect(holds(square, at(9, 4))).toBe(false);
  // Zero is a decimal digit, so a leading zero reads as a shorter number.
  const zero = form(prop(operand([a, b], "decimal"), "places", " argument 1"), 2, [0, 1, 2]);
  expect(holds(zero, at(0, 2))).toBe(true);
  expect(holds(zero, at(1, 0))).toBe(false);
  // A digit above 9 can never be read as a decimal digit.
  const wide = form(prop(operand([a, b], "decimal"), "divisible", " argument 1"), 2, [10, 11]);
  expect(wide).toEqual({ op: "Any", children: [] });
});

test("reverse also accepts the reversed reading", () => {
  const plain = form(prop(operand([a, b], "decimal"), "prime"), 2);
  const either = form(prop(operand([a, b], "decimal"), "prime", " reverse true"), 2);
  expect(holds(plain, at(3, 1))).toBe(true);
  expect(holds(plain, at(1, 3))).toBe(true);
  // 14 is not prime but its reversal 41 is.
  expect(holds(plain, at(1, 4))).toBe(false);
  expect(holds(either, at(1, 4))).toBe(true);
  expect(holds(either, at(4, 1))).toBe(true);
  // 91 is not prime but 19 is; 66 and 66 reversed are not.
  expect(holds(plain, at(9, 1))).toBe(false);
  expect(holds(either, at(9, 1))).toBe(true);
  expect(holds(either, at(6, 6))).toBe(false);
});

test("a remainder replaces the property", () => {
  const f = form(prop(operand([a, b]), "prime", " argument 3 remainder 1"));
  expect(holds(f, at(1, 3))).toBe(true);
  expect(holds(f, at(2, 2))).toBe(true);
  expect(holds(f, at(1, 2))).toBe(false);
  expect(holds(f, at(6, 7))).toBe(true);
  // A remainder outside 0..argument-1 is never met.
  expect(form(prop(operand([a, b]), "prime", " argument 3 remainder 3"))).toEqual({ op: "Any", children: [] });
  expect(form(prop(operand([a, b]), "prime", " argument 3 remainder -1"))).toEqual({ op: "Any", children: [] });
  eq(prop(operand([a, b]), "prime", " argument 3 remainder 1"), prop(operand([a, b]), "places", " argument 3 remainder 1"));
});

test("allowed restricts the forward number and distinct compares the operands", () => {
  const only = form(prop(operand([a, b]), "prime", " allowed [3,7,9]"));
  expect(holds(only, at(1, 2))).toBe(true);
  expect(holds(only, at(3, 4))).toBe(true);
  expect(holds(only, at(2, 3))).toBe(false);
  const two = form(`number-property operand ${operand([a])} property "prime" operands [${operand([a, b])},${operand([c, d])}] distinct true`, 4);
  // The sums 3 and 3 are equal; 3 and 5 differ and are prime; 3 and 7 differ; 3 and 4 differ but 4 is not prime.
  expect(holds(two, at(1, 2, 2, 1))).toBe(false);
  expect(holds(two, at(1, 2, 2, 3))).toBe(true);
  expect(holds(two, at(1, 2, 3, 4))).toBe(true);
  expect(holds(two, at(1, 2, 1, 3))).toBe(false);
  // With no operands there is nothing to check.
  expect(form(`number-property operand ${operand([a])} property "prime" operands []`)).toEqual({ op: "All", children: [] });
});

test("repeats false makes the digits differ", () => {
  const f = form(prop(operand([a, b], "sum", false), "prime"));
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(1, 1))).toBe(false);
  const dec = form(prop(operand([a, b], "decimal", false), "prime"), 2);
  expect(holds(dec, at(1, 3))).toBe(true);
  expect(holds(dec, at(1, 1))).toBe(false);
  differs(prop(operand([a, b], "sum", false), "prime"), prop(operand([a, b], "sum", true), "prime"));
  // A cell listed twice differs from itself.
  expect(form(prop(operand([a, a], "sum", false), "prime"))).toEqual({ op: "Any", children: [] });
});

test("a decimal reads a cell listed twice at each place", () => {
  const f = form(prop(operand([a, b, a], "decimal"), "divisible", " argument 11"), 2);
  // 121 = 11 * 11 is divisible by 11; 131 and 101 are not.
  expect(holds(f, at(1, 2))).toBe(true);
  expect(holds(f, at(1, 3))).toBe(false);
  expect(holds(f, at(1, 0))).toBe(false);
  const g = form(prop(operand([a, b, a], "decimal"), "places", " argument 3"), 2, [0, 1, 2]);
  expect(holds(g, at(1, 0))).toBe(true);
  expect(holds(g, at(0, 1))).toBe(false);
});

test("a slice of the operand cells", () => {
  const sliced = prop(operand([a, b, c], "sum", true, ',"start":1,"length":2'), "prime");
  eq(sliced, prop(operand([b, c]), "prime"));
  expect(form(prop(operand([a, b], "sum", true, ',"start":1,"length":2'), "prime"))).toEqual({ op: "Any", children: [] });
});

test("the remainder-cage alias is the same sum with a remainder", () => {
  eq(`remainder-cage ${a}-${b} modulus 3 remainder 1 distinct false`, prop(operand([a, b]), "divisible", " argument 3 remainder 1"));
  eq(`remainder-cage ${b}-${a} modulus 3 remainder 1 distinct true`, prop(operand([a, b], "sum", false), "divisible", " argument 3 remainder 1"));
  const f = form(`remainder-cage ${a}-${b} modulus 3 remainder 1 distinct true`);
  expect(holds(f, at(1, 3))).toBe(true);
  expect(holds(f, at(2, 2))).toBe(false);
  expect(holds(f, at(1, 2))).toBe(false);
  differs(`remainder-cage ${a}-${b} modulus 3 remainder 1 distinct true`, `remainder-cage ${a}-${b} modulus 3 remainder 1 distinct false`);
  differs(`remainder-cage ${a}-${b} modulus 3 remainder 1 distinct false`, `remainder-cage ${a}-${b} modulus 3 remainder 2 distinct false`);
  differs(`remainder-cage ${a}-${b} modulus 3 remainder 1 distinct false`, `remainder-cage ${a}-${b} modulus 4 remainder 1 distinct false`);
  differs(`remainder-cage ${a}-${b} modulus 3 remainder 1 distinct false`, `remainder-cage ${a}-${c} modulus 3 remainder 1 distinct false`);
  expect(form(`remainder-cage ${a}-${b} modulus 1 remainder 0 distinct false`)).toEqual({ op: "All", children: [] });
});

test("the unique-primes alias reads each group as a different prime from the list", () => {
  const rule = `unique-primes groups [${list(a, b)},${list(c, d)}] allowed [11,13,17,19]`;
  const f = form(rule, 4, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(holds(f, at(1, 1, 1, 3))).toBe(true);
  expect(holds(f, at(1, 1, 1, 1))).toBe(false);
  expect(holds(f, at(1, 7, 1, 7))).toBe(false);
  expect(holds(f, at(1, 7, 1, 9))).toBe(true);
  expect(holds(f, at(2, 3, 1, 3))).toBe(false);
  eq(rule, `number-property operand ${operand([a])} property "prime" operands [${operand([a, b], "decimal")},${operand([c, d], "decimal")}] allowed [11,13,17,19] distinct true`, 4);
  eq(rule, `unique-primes groups [${list(c, d)},${list(a, b)}] allowed [19,17,13,11,11]`, 4);
  differs(rule, `unique-primes groups [${list(a, b)},${list(d, c)}] allowed [11,13,17,19]`, 4);
  differs(rule, `unique-primes groups [${list(a, b)},${list(c, d)}] allowed [11,13,17]`, 4);
  differs(rule, `unique-primes groups [${list(a, b)}] allowed [11,13,17,19]`, 4);
});

test("near misses compare as different", () => {
  const base = prop(operand([a, b]), "prime");
  differs(base, prop(operand([a, b]), "composite"));
  differs(base, prop(operand([a, c]), "prime"));
  differs(base, prop(operand([a, b, c]), "prime"));
  differs(base, prop(operand([a, b], "decimal"), "prime"));
  differs(prop(operand([a, b], "decimal"), "prime"), prop(operand([b, a], "decimal"), "prime"));
  differs(prop(operand([a, b], "decimal"), "prime"), prop(operand([a, b], "decimal"), "prime", " reverse true"));
  differs(prop(operand([a, b]), "power"), prop(operand([a, b]), "power", " argument 3"));
  differs(base, prop(operand([a, b]), "prime", " allowed [3,5,7]"));
  differs(base, `not ${base}`);
  differs(prop(operand([a, b]), "divisible", " argument 2"), prop(operand([a, b]), "divisible", " argument 3"));
  differs(prop(operand([a, b]), "divisible", " argument 3 remainder 1"), prop(operand([a, b]), "divisible", " argument 3"));
  // The argument of prime and composite is unused, and an unused slice is no slice.
  eq(base, prop(operand([a, b]), "prime", " argument 5"));
  eq(base, prop(operand([a, b], "sum", true, ',"start":0'), "prime"));
});

test("what Number Property does not lower stays uncovered with a reason", () => {
  const reason = (rules: string) => coverageOf(rules, "number-property");
  expect(reason(`number-property operand ${operand([a, b])} property "prime" alternating true line ${list(a, b)}`)).toMatchObject({ status: "unsupported", reason: expect.stringContaining("alternating") });
  expect(reason(prop(operand([a, b], "product"), "prime"))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("product") });
  expect(reason(prop(operand([a, b], "count"), "prime"))).toMatchObject({ status: "unsupported" });
  expect(reason(prop(`{"cells":${list(a, b)},"channel":"V","operation":"sum","repeats":true}`, "prime"))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("effective values") });
  expect(reason(prop(operand([a, b], "sum", true, ',"stop":"given"'), "prime"))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("stopping") });
  expect(reason(prop(operand([a, a], "sum", true), "prime"))).toMatchObject({ status: "unsupported", reason: expect.stringContaining("listed twice") });
  // Six decimal digits over ten symbols is a million readings.
  expect(coverageOf(prop(operand(cells, "decimal"), "prime"), "number-property", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toMatchObject({ status: "unsupported", reason: expect.stringContaining("100,000") });
});

test("it reads printed digits, so a value modifier leaves it covered", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["r1c6"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  const n = nf(`${prop(operand([a, b]), "prime")}\n${modifier}`);
  expect(n.normalForm!.coverage.find(x => x.kind === "number-property")).toMatchObject({ status: "lowered" });
});

test("a cell that is not an active cell is rejected", () => {
  const r = nf(`remainder-cage ${a}-${c} modulus 3 remainder 1 distinct false`, 2);
  expect(r.status).toBe("invalid");
});

function differentialTests(title: string, n: number, symbols: number[], entries: string[]): void {
  for (const entry of entries) test(`${title}: ${entry}`, () => differential(n, symbols, [entry]));
}
function differential(n: number, symbols: number[], entries: string[], extra = ""): void {
  const used = cells.slice(0, n);
  const board: BoardContext = { rows: 1, cols: n, activeCells: used, alphabet: symbols, regions: [used] };
  for (const text of entries) {
    const r = normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(text + extra)}` }, board);
    expect(r.issues).toEqual([]);
    expect(r.normalForm!.coverage.filter(x => ["number-property", "remainder-cage", "unique-primes"].includes(x.kind)).every(x => x.status === "lowered")).toBe(true);
    const compiled = compileCase({ file: "example.md", text: `${header}board: {rows: 1, cols: ${n}, symbols: [${symbols}], regions: [[${used.join(", ")}]]}\n---${body(text + extra)}` });
    expect(compiled.diagnostics.filter(x => !x.code.startsWith("W_"))).toEqual([]);
    const compiledRule = compiled.value!.rules[0];
    let total = 0;
    const walk = (index: number, values: Record<string, number>) => {
      if (index === used.length) {
        const expected = extra ? published(compiledRule, values, values) : published(compiledRule, values);
        // A rule that reads printed digits ignores the effective values, even when one of them is doubled.
        expect([text, JSON.stringify(values), published(compiledRule, values, { ...values, [used[0]]: 2 * values[used[0]] })]).toEqual([text, JSON.stringify(values), expected]);
        expect([text, JSON.stringify(values), holds(r.normalForm!.solution, values)]).toEqual([text, JSON.stringify(values), expected]);
        total++;
        return;
      }
      for (const x of symbols) walk(index + 1, { ...values, [used[index]]: x });
    };
    walk(0, {});
    expect(total).toBeGreaterThan(0);
  }
}

test("sums agree with the published definition on every assignment", () => {
  differential(3, [1, 2, 3], [
    prop(operand([a, b, c]), "prime"), prop(operand([a, b, c]), "composite"), prop(operand([a, b]), "power"), prop(operand([a, b, c]), "power", " argument 3"),
    prop(operand([a, b, c]), "divisible", " argument 3"), prop(operand([a, b, c]), "divisible", " argument 0"), prop(operand([a, b, c]), "places", " argument 1"), prop(operand([a, b, c]), "places", " argument 2"),
    prop(operand([a, b, c], "sum", false), "prime"), prop(operand([a, b, c]), "prime", " argument 4 remainder 1"), prop(operand([a, b]), "prime", " argument 3 remainder 5"),
  ]);
});

test("sums with a list, a remainder and several operands agree with the published definition", () => {
  differential(3, [1, 2, 3], [
    prop(operand([a, b]), "power", " allowed [4,6]"), prop(operand([a, b, c]), "composite", " argument 0 remainder 0"),
    `not ${prop(operand([a, b, c]), "prime")}`, prop(operand([b, c], "sum", true, ',"start":1,"length":1'), "prime"),
    `number-property operand ${operand([a])} property "prime" operands [${operand([a, b]) },${operand([c])}] distinct true`,
    `number-property operand ${operand([a])} property "composite" operands [${operand([a, b]) },${operand([b, c])}] allowed [4,5,6] distinct true`,
    `remainder-cage ${a}-${b}-${c} modulus 3 remainder 1 distinct false`, `remainder-cage ${a}-${b} modulus 4 remainder 3 distinct true`, `remainder-cage ${a}-${b} modulus 5 remainder 7 distinct false`,
  ]);
});

test("decimal readings agree with the published definition", () => {
  differential(3, [0, 1, 2], [
    prop(operand([a, b, c], "decimal"), "prime"), prop(operand([a, b, c], "decimal"), "prime", " reverse true"), prop(operand([a, b], "decimal"), "power"),
    prop(operand([a, b, c], "decimal"), "divisible", " argument 7"), prop(operand([a, b, c], "decimal"), "places", " argument 2"), prop(operand([a, b, c], "decimal"), "places", " argument 3 reverse true"),
  ]);
});

test("decimals with repeats, remainders and several operands agree with the published definition", () => {
  differential(3, [0, 1, 2], [
    prop(operand([a, b, a], "decimal"), "composite"), prop(operand([a, b, c], "decimal", false), "prime"), prop(operand([a, b, c], "decimal"), "prime", " argument 3 remainder 2"),
    prop(operand([a, b, c], "decimal"), "composite", " allowed [4,6,9,10] reverse true"),
    `number-property operand ${operand([a])} property "prime" operands [${operand([a, b], "decimal")},${operand([b, c], "decimal")}] distinct true`,
    `number-property operand ${operand([a])} property "power" operands [${operand([a, b], "decimal")},${operand([c], "decimal")}] distinct true`,
    `unique-primes groups [${list(a, b)},${list(c)}] allowed [2,3,5,7,11,13]`, `unique-primes groups [${list(a, b)},${list(b, c)}] allowed [2,3,5,7,11,13,23]`,
  ]);
});

test("negative digits agree with the published definition", () => {
  differential(3, [-2, 0, 3], [
    prop(operand([a, b, c]), "divisible", " argument 3 remainder 1"), prop(operand([a, b]), "divisible", " argument 4 remainder 2"), prop(operand([a, b, c]), "divisible", " argument 2"),
    prop(operand([a, b, c]), "power"), prop(operand([a, b, c]), "prime"), `remainder-cage ${a}-${b} modulus 3 remainder 2 distinct false`,
    prop(operand([a, b], "decimal"), "prime"),
  ]);
});

test("a modifier board: D agrees with the evaluator where V would differ", () => {
  const modifier = `value-modifier factor 2 offset 0 exactly [["r1c3"]] count 1 atMostOne [] distinct false meta {"name":"Doubler","stated":true}`;
  differential(3, [1, 2, 3], [prop(operand([a, b]), "prime"), `remainder-cage ${a}-${b} modulus 3 remainder 1 distinct false`], `\n${modifier}`);
});

test("no operands leave the remainder and every other setting vacuous", () => {
  const empty = (extra: string) => `number-property operand ${operand([a])} property "prime" operands []${extra}`;
  expect(form(empty(" remainder 0.5 argument 3"))).toEqual({ op: "All", children: [] });
  expect(form(empty(" remainder 7 argument 3"))).toEqual({ op: "All", children: [] });
  // With an operand the same remainder cannot be met.
  expect(form(`number-property operand ${operand([a])} property "prime" remainder 0.5 argument 3`)).toEqual({ op: "Any", children: [] });
});

test("an exponent or digit count above 64 stays uncovered", () => {
  for (const property of ["power", "places"]) {
    const rules = prop(operand([a, b]), property, " argument 1000000000000000");
    expect(coverageOf(rules, "number-property")).toMatchObject({ status: "unsupported", reason: expect.stringContaining("above 64") });
  }
  // In remainder mode the argument is only a modulus.
  expect(coverageOf(prop(operand([a, b]), "power", " argument 1000000000000000 remainder 3"), "number-property")).toMatchObject({ status: "lowered" });
  expect(coverageOf(prop(operand([a, b]), "places", " argument 64"), "number-property")).toMatchObject({ status: "lowered" });
});

test("a sixteen-digit decimal is judged by exact primality and root tests", () => {
  const sixteen = Array.from({ length: 16 }, (_, i) => `r${Math.floor(i / 4) + 1}c${i % 4 + 1}` as Cell);
  const board: BoardContext = { rows: 4, cols: 4, activeCells: sixteen, alphabet: [0, 1], regions: [sixteen] };
  const read = (rules: string) => normalise({ file: "synthetic.rules.md", text: `${header}---\n${body(rules)}` }, board);
  const prime = read(prop(operand(sixteen, "decimal"), "prime"));
  expect(prime.status).toBe("complete");
  const bits = (n: number) => Object.fromEntries(sixteen.map((cell, i) => [cell, n >> (15 - i) & 1]));
  // The digits spell the decimal number 10^k, written with ones and zeros: 11 is prime, 101 is prime, 1001 is not.
  expect(holds(prime.normalForm!.solution, bits(0b11))).toBe(true);
  expect(holds(prime.normalForm!.solution, bits(0b101))).toBe(true);
  expect(holds(prime.normalForm!.solution, bits(0b1001))).toBe(false);
  const square = read(prop(operand(sixteen, "decimal"), "power"));
  expect(holds(square.normalForm!.solution, bits(0b10000))).toBe(true);
  expect(holds(square.normalForm!.solution, bits(0b11))).toBe(false);
  // 10^14 is a square and 10^15 is not.
  expect(holds(square.normalForm!.solution, bits(0b100000000000000))).toBe(true);
  expect(holds(square.normalForm!.solution, bits(0b1000000000000000))).toBe(false);
}, 30000);

test("Places holds for sums above nine and negation is exact", () => {
  const f = form(prop(operand([a, b]), "places", " argument 2"));
  expect(holds(f, at(5, 5))).toBe(true);
  expect(holds(f, at(4, 5))).toBe(false);
  expect(holds(f, at(9, 9))).toBe(true);
  const g = form(`not ${prop(operand([a, b]), "places", " argument 2")}`);
  expect(holds(g, at(5, 5))).toBe(false);
  expect(holds(g, at(4, 5))).toBe(true);
});

differentialTests("sums above nine agree with the published definition", 3, [3, 6, 9], [
  prop(operand([a, b, c]), "places", " argument 2"), prop(operand([a, b, c]), "places", " argument 1"), prop(operand([a, b, c]), "power"), prop(operand([a, b, c]), "composite"),
]);
differentialTests("digits above nine beside zero to nine agree with the published definition", 3, [0, 3, 12], [
  prop(operand([a, b, c], "decimal"), "composite"), prop(operand([a, b], "decimal"), "divisible", " argument 3"), prop(operand([a, b, c]), "divisible", " argument 4"),
]);
differentialTests("arguments of zero agree with the published definition", 3, [1, 2, 3], [
  prop(operand([a, b, c]), "power", " argument 0"), prop(operand([a, b, c]), "places", " argument 0"), prop(operand([a, b, c], "decimal"), "power", " argument 0"),
]);
differentialTests("negated number properties agree with the published definition", 3, [0, 1, 2], [
  `not ${prop(operand([a, b, c], "decimal"), "prime")}`, `not ${prop(operand([a, b, c]), "power")}`, `not remainder-cage ${a}-${b}-${c} modulus 3 remainder 1 distinct true`,
  `not unique-primes groups [${list(a, b)},${list(c)}] allowed [2,3,5,7,11,13]`, `not ${prop(operand([a, b, c], "decimal"), "prime", " reverse true")}`,
]);

test("primality is exact, including the smallest composite that twelve bases miss", () => {
  // 318665857834031151167461 is composite, yet the first twelve primes all call it prime.
  expect(isPrime(318665857834031151167461n)).toBe(false);
  expect(isPrime(3825123056546413051n)).toBe(false);
  expect(isPrime(2n ** 61n - 1n)).toBe(true);
  expect(isPrime(1000000007n)).toBe(true);
  expect(isPrime(1000000007n * 998244353n)).toBe(false);
  expect(() => isPrime(10n ** 30n + 57n)).toThrow();
});

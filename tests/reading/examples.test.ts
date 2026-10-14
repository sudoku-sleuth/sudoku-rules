import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { align, itemsLabel, partText, readCase, readingText, type CaseReading } from "../../src";
import { caseFile, library, nonBlankRuleLines } from "./library";

// The seven worked examples, read from the real published case files. Golden text is reviewed data.
const examples = ["l7-weenie", "a-killer-teacher", "li-l-worms", "twin-pines-mall", "accounting-through-the-fog", "33-x-s", "have-a-killer-birthday-bremster"];
const read = async (name: string) => {
  const text = await Bun.file(`cases/${name}.rules.md`).text();
  return { text, reading: readCase(text, library), lines: nonBlankRuleLines(text) };
};

for (const name of examples) {
  test(`worked example ${name} reads as its golden text`, async () => {
    const { reading, lines } = await read(name);
    expect(readingText(reading, lines) + "\n").toBe(await Bun.file(`tests/reading/golden/${name}.txt`).text());
  });
}

test("a row's lines point at the case's rule lines, and every rule line is in a row", async () => {
  for (const name of examples) {
    const { reading, lines } = await read(name);
    const covered = reading.rows.flatMap(row => row.lines).sort((a, b) => a - b);
    expect(covered).toEqual(lines.map((_, i) => i));
    expect(reading.lineCount).toBe(lines.length);
  }
});

test("slice-one kinds read in full; modular, entropic and region-sum lines show as written", async () => {
  for (const name of ["a-killer-teacher", "li-l-worms", "twin-pines-mall", "33-x-s", "have-a-killer-birthday-bremster"]) expect((await read(name)).reading.complete).toBe(true);
  const l7 = (await read("l7-weenie")).reading;
  expect(l7.complete).toBe(false);
  expect(l7.rows.filter(r => r.asWritten).map(r => r.kind)).toEqual(["entropic", "modular"]);
});

test("fog links are a spoiler part: the list is marked and the sentence never names a link", async () => {
  const { reading } = await read("have-a-killer-birthday-bremster");
  const fog = reading.rows.find(r => r.kind === "fog")!;
  expect(fog.items!.spoiler).toBe("reveals part of the puzzle");
  expect(itemsLabel(fog.items!)).toBe("Show the 13 fog links: reveals part of the puzzle");
  expect(fog.items!.lines[0].map(p => (typeof p === "string" ? p : p.cells)).join("")).toBe("A right digit in r1c2 lights r2c3,r2c4,r2c5.");
  expect(partText(fog.items!.lines[0])).toBe("A right digit in r1c2 lights r2c3, r2c4, r2c5.");
  const sentence = partText(fog.sentence);
  expect(sentence).not.toContain("r1c2");
  expect(readingText(reading)).not.toContain("lights r2c3");
});

test("other lists are not spoilers", async () => {
  const { reading } = await read("li-l-worms");
  expect(reading.rows.flatMap(r => (r.items ? [r.items.spoiler] : []))).toEqual([undefined, undefined]);
});

test("pairing: setter sentences pair with rows by terms, and a sentence naming an absent kind is found", async () => {
  const { reading } = await read("twin-pines-mall");
  const sentences = [
    "Normal sudoku rules apply.",
    "Begin by filling in the blue cages with digits from the four previous puzzles.",
    "Along green lines, adjacent digits differ by at least 5.",
    "Digits in cages must sum to the given value.",
    "A digit on a flame indicates how many flames contain that digit.",
  ];
  const result = align(sentences, reading, library);
  const kindOfRow = (r: number) => reading.rows[r].kind;
  expect(result.pairs.map(p => [p.sentence, p.rows.map(kindOfRow)])).toEqual([[0, ["sudoku"]], [1, ["cage"]], [2, ["whispers"]], [3, ["cage"]]]);
  expect(result.missing).toEqual([{ sentence: 4, kinds: ["counting-circles"] }]);
  expect(result.unpaired.map(kindOfRow)).toEqual(["givens"]);
});

test("pairing: X and V sentences pair with the X/V row and Kropki sentences with the dots row", async () => {
  const { reading } = await read("l7-weenie");
  const result = align([
    "Digits joined by an X sum to 10. Digits joined by a V sum to 5.",
    "Digits joined by a white dot are consecutive. Digits joined by a black dot are in a 2:1 ratio.",
    "Not all Xs, Vs, or dots are necessarily given.",
  ], reading, library);
  const kinds = (i: number) => result.pairs.find(p => p.sentence === i)?.rows.map(r => reading.rows[r].kind);
  expect(kinds(0)).toEqual(["pair"]);
  expect(kinds(1)).toEqual(["kropki"]);
  expect(result.missing).toEqual([]);
});

test("pairing: a one-letter term never makes a sentence look like it names a missing rule", async () => {
  const { reading } = await read("a-killer-teacher");
  expect(align(["Place the digits X and Y once in each row."], reading, library).missing).toEqual([]);
});

test("pairing is deterministic", async () => {
  const { reading } = await read("twin-pines-mall");
  const s = ["Normal sudoku rules apply.", "A digit on a flame indicates how many flames contain that digit."];
  expect(JSON.stringify(align(s, reading, library))).toBe(JSON.stringify(align(s, reading, library)));
});

test("every case file reads without throwing, deterministically, and most read in full", async () => {
  let complete = 0, total = 0, biggest = 0;
  for (const name of (await readdir("cases")).filter(n => n.endsWith(".rules.md"))) {
    const text = await Bun.file(`cases/${name}`).text();
    const a = readCase(text, library);
    total++;
    if (a.complete) complete++;
    const json = JSON.stringify(a);
    biggest = Math.max(biggest, json.length);
    // Every rule line belongs to exactly one row.
    const covered = a.rows.flatMap(row => row.lines);
    expect(new Set(covered).size).toBe(covered.length);
    expect(covered.length).toBe(nonBlankRuleLines(text).filter(l => !l.trim().startsWith("#")).length);
    if (total % 97 === 0) expect(JSON.stringify(readCase(text, library))).toBe(json);
  }
  expect(total).toBeGreaterThan(3800);
  expect(complete).toBeGreaterThan(2400);
  // The stored shape stays far below the 128 KiB a host keeps for a whole case record.
  expect(biggest).toBeLessThan(100_000);
}, 60_000);

test("a file that cannot be read shows as written instead of failing", () => {
  const broken = readCase("not a case file", library);
  expect(broken.complete).toBe(false);
  expect(broken.rows).toEqual([]);
  const odd: CaseReading = readCase("---\nformat: open-rules\ntitle: T\nsetter: S\nsource: ''\ncase: ''\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n```rules\nsudoku 9x9\ncage r1c1-r1c2 total [1\nwhat is this\npair r1c1-r1c2 sum x\n```\n", library);
  expect(odd.complete).toBe(false);
  expect(odd.rows.filter(r => r.asWritten).map(r => r.kind).sort()).toEqual(["cage", "pair", "what"]);
});

test("modifiers show as written: not, if and unless are not read away", () => {
  const text = "---\nformat: open-rules\ntitle: T\nsetter: S\nsource: ''\ncase: ''\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n---\n\n```rules\nsudoku 9x9\ncage-1: not cage r1c1-r1c2 total 3\ncage-2: cage r2c1-r2c2 total 3 if uniform\n```\n";
  const reading = readCase(text, library);
  expect(reading.rows.filter(r => r.asWritten).map(r => r.lines)).toEqual([[1, 2]]);
});

test("pairing: shifter dots pair with the pair row; parity and polarity alone never mark a missing rule", () => {
  const withPair = readCase(caseFile(["pair r1c1-r1c2 shift"]), library);
  const sentence = "Shifter dots: digits on different sides of a shifter dot share either parity or polarity.";
  expect(align([sentence], withPair, library).pairs).toEqual([{ sentence: 0, rows: [0] }]);
  const none = readCase(caseFile(["thermo r1c1-r1c2"]), library);
  expect(align([sentence], none, library).missing).toEqual([{ sentence: 0, kinds: ["pair"] }]);
  expect(align(["Digits on the line alternate parity.", "Neighbours share polarity."], none, library).missing).toEqual([]);
});

import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { parse } from "yaml";
import { itemLines, publicReading, readCase, readingText, type CaseReading } from "../../src";
import { partText } from "../../src";
import { caseFile, library } from "./library";

const read = (rules: string[], extra = ""): CaseReading => readCase(caseFile(rules, extra), library);
const writtenKinds = (r: CaseReading) => r.rows.filter(row => row.asWritten).map(row => row.kind).sort();

test("a value that is not of its declared type shows the line as written", () => {
  const bad = [
    "cage-1: cage r1c1-r1c2 total \"seven\"",
    "whispers-1: whispers r2c1-r2c2 gap [5]",
    "arrow-1: arrow r3c2-r3c3 bulb \"r3c1\"",
    "thermo r4c1-r4c9x",
    "renban-1: renban r5c1-r5c2 loop 3",
    "pair-1: pair r6c1-r6c2 sum 10",
  ];
  const r = read(bad);
  expect(writtenKinds(r)).toEqual(["arrow", "cage", "thermo", "whispers"]);
  // The one good line is still read.
  expect(r.rows.find(row => row.kind === "pair")?.asWritten).toBeUndefined();
  expect(r.complete).toBe(false);
});

test("a boolean given as text and a cell list with a bad cell are written as they are", () => {
  const r = read(["cage-1: cage r1c1-r1c2 total 3 repeats \"yes\"", "little-killer r2c1-r2c2 sum 1.5x"]);
  expect(writtenKinds(r)).toEqual(["cage", "little-killer"]);
});

test("a negative with a relation that is not an object is written as it is", () => {
  const r = read(["negative relations [3] except []"]);
  expect(writtenKinds(r)).toEqual(["negative"]);
});

test("a malformed fog block is a problem, not silence", () => {
  for (const fog of ["fog: true\n", "fog: [1, 2]\n", "fog:\n  initiallyLit: nope\n", "fog:\n  initiallyLit: [r1c1]\n  links: 3\n", "fog:\n  initiallyLit: [r1c1]\n  links:\n    - trigger: [r1c2]\n"]) {
    const r = read(["sudoku 9x9"], fog);
    expect(r.complete).toBe(false);
    expect(r.rows.find(row => row.kind === "fog")).toMatchObject({ header: true, asWritten: true, sentence: [] });
    expect(r.problems?.some(p => p.startsWith("The fog header"))).toBe(true);
  }
});

test("a fog link with an empty trigger is unreadable", () => {
  const r = read(["sudoku 9x9"], "fog:\n  initiallyLit: [r1c1]\n  links:\n    - trigger: []\n      lights: [r2c2]\n");
  expect(r.rows.find(row => row.kind === "fog")).toMatchObject({ asWritten: true });
  expect(r.problems?.join(" ")).toContain("a link needs a trigger");
});

test("lit cells written twice are counted once", () => {
  const r = read(["sudoku 9x9"], "fog:\n  initiallyLit: [r1c1, r1c1, r1c2]\n");
  expect(partText(r.rows[0].sentence)).toContain("Two cells are clear at the start: r1c1 and r1c2.");
});

test("one link reads in the singular", () => {
  const r = read(["sudoku 9x9"], "fog:\n  initiallyLit: [r1c1]\n  links:\n    - trigger: [r1c2]\n      lights: [r2c2]\n");
  expect(partText(r.rows[0].sentence)).toContain("in the marked cell");
  expect(r.rows[0].items?.count).toBe(1);
});

test("fog numbers need a board to be read", () => {
  const r = readCase("---\nformat: open-rules\ntitle: T\nsetter: S\nsource: ''\ncase: ''\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\nfog:\n  initiallyLit: [3]\n---\n\n```rules\nthermo r1c1-r1c2\n```\n", library);
  expect(r.rows.find(row => row.kind === "fog")?.asWritten).toBe(true);
});

test("an off-grid trigger is found only when the board size is known", () => {
  const links = "fog:\n  initiallyLit: [r1c1]\n  links:\n    - trigger: [r10c1]\n      lights: [r2c2]\n";
  const known = read(["sudoku 9x9"], links).rows[0];
  expect(known.items?.notes?.map(partText).join(" ")).toContain("never light anything");
  const unknown = readCase(`---\nformat: open-rules\ntitle: T\nsetter: S\nsource: ''\ncase: ''\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n${links}---\n\n\`\`\`rules\nthermo r1c1-r1c2\n\`\`\`\n`, library).rows[0];
  expect(unknown.items?.notes).toBeUndefined();
});

test("under fog the givens are a spoiler part, and the fog's own notes sit inside the fog spoiler", () => {
  const r = read(["sudoku 9x9"], "givens: r1c2=3 r5c5=4\nfog:\n  initiallyLit: [r1c1]\n  links:\n    - trigger: [r1c2]\n      lights: [r2c1]\n    - trigger: [r10c3]\n      lights: [r3c3]\n");
  const givens = r.rows.find(row => row.kind === "givens")!;
  expect(givens.items?.spoiler).toBe("reveals cells under fog");
  expect(partText(givens.sentence)).toBe("Two digits are given. Two of them start hidden under fog.");
  const fog = r.rows.find(row => row.kind === "fog")!;
  expect(fog.notes).toBeUndefined();
  expect(fog.items?.notes?.map(partText)).toEqual([
    "A given in a trigger cell lights its link only when the player types that digit over it.",
    "Some links (1) name a cell outside the grid and never light anything.",
  ]);
});

test("the givens sentence says only what the reader can tell", () => {
  const fog = (givens: string, lit: string) => read(["sudoku 9x9"], `givens: ${givens}\nfog:\n  initiallyLit: [${lit}]\n`).rows.find(row => row.kind === "givens")!;
  expect(partText(fog("r5c5=4", "r1c1").sentence)).toBe("One digit is given, and its cell starts hidden under fog.");
  expect(partText(fog("r1c1=4 r5c5=3 r6c6=2", "r1c1").sentence)).toBe("Three digits are given. Two of them start hidden under fog.");
  expect(fog("r5c5=4", "r1c1").items?.spoiler).toBe("reveals cells under fog");
  // Every given sits in a clear cell: nothing is hidden, so nothing is a spoiler.
  expect(fog("r1c1=4", "r1c1").items).toBeUndefined();
  // Fog that cannot be read: the reader cannot tell which cells are clear, so it claims only what is certain.
  const unknown = read(["sudoku 9x9"], "givens: r1c1=4\nfog:\n  initiallyLit: nope\n").rows.find(row => row.kind === "givens")!;
  expect(partText(unknown.sentence)).toBe("One digit is given. Fog may hide it until its cell is lit.");
  const several = read(["sudoku 9x9"], "givens: r1c1=4 r2c2=5\nfog:\n  initiallyLit: nope\n").rows.find(row => row.kind === "givens")!;
  expect(partText(several.sentence)).toBe("Two digits are given. Fog hides those whose cells are not yet lit.");
});

test("without fog the givens stay in plain sight", () => {
  expect(read(["sudoku 9x9"], "givens: r1c2=3\n").rows[0].items).toBeUndefined();
});

test("publicReading and itemLines leave spoiler parts out", () => {
  const r = read(["sudoku 9x9"], "givens: r1c2=3\nfog:\n  initiallyLit: [r1c1]\n  links:\n    - trigger: [r1c2]\n      lights: [r2c1]\n    - trigger: [r3c3]\n      lights: [r4c4]\n");
  const fog = r.rows.find(row => row.kind === "fog")!;
  expect(itemLines(fog.items!)).toEqual([]);
  expect(itemLines(fog.items!, true).length).toBe(2);
  const open = JSON.stringify(publicReading(r));
  expect(open).not.toContain("r4c4");
  expect(open).not.toContain("lights r2c1");
  expect(publicReading(r).rows.every(row => !row.items?.spoiler)).toBe(true);
});

/** The cells that are clear at the start of a fog case, read from its header. */
function clearCells(text: string): Set<string> | undefined {
  const header = parse(/^---\r?\n([\s\S]*?)\r?\n---/.exec(text)![1]) as { fog?: { initiallyLit?: unknown[] }; board?: { cols?: number } };
  if (!header.fog) return undefined;
  const cols = header.board?.cols ?? 9;
  return new Set((header.fog.initiallyLit ?? []).map(c => (typeof c === "number" ? `r${Math.floor(c / cols) + 1}c${(c % cols) + 1}` : String(c))));
}
const cellsIn = (parts: readonly (string | { cells: string })[]): string[] => parts.flatMap(p => (typeof p === "string" ? [] : p.cells.split(",")));

test("in every fog case, no text outside a spoiler part names a cell that starts hidden", async () => {
  let checked = 0, withDrawn = 0;
  for (const name of (await readdir("cases")).filter(n => n.endsWith(".rules.md"))) {
    const text = await Bun.file(`cases/${name}`).text();
    const clear = clearCells(text);
    if (!clear) continue;
    const open = publicReading(readCase(text, library));
    for (const row of open.rows) {
      if (row.stated || row.asWritten) continue;
      const named = [...cellsIn(row.sentence), ...(row.notes ?? []).flatMap(cellsIn), ...(row.items?.lines ?? []).flatMap(cellsIn)];
      const hidden = named.filter(c => !clear.has(c));
      if (hidden.length) throw new Error(`${name}: ${row.heading} names ${hidden.slice(0, 3).join(", ")} outside a spoiler`);
      if (row.kind !== "fog" && row.kind !== "givens" && row.kind !== "board") withDrawn++;
    }
    checked++;
  }
  expect(checked).toBeGreaterThan(200);
  expect(withDrawn).toBeGreaterThan(200);
}, 60_000);

test("clues behind fog keep their rule in view and their positions in a spoiler list", () => {
  const fog = "fog:\n  initiallyLit: [r1c1, r1c2]\n";
  const hidden = read(["thermo-1: thermo r5c5-r5c6", "thermo-2: thermo r6c5-r6c6-r6c7"], fog);
  const row = hidden.rows.find(r => r.kind === "thermo")!;
  expect(row.heading).toBe("Thermometers");
  expect(partText(row.sentence)).toBe("On each, the digits strictly increase from the bulb to the tip.");
  expect(row.items).toMatchObject({ noun: "clues under fog", count: 2, spoiler: "reveals cells under fog" });
  expect(readingText(hidden)).toContain("Thermometers. On each, the digits strictly increase from the bulb to the tip.\n  Show the 2 clues under fog: reveals cells under fog");
  expect(readingText(publicReading(hidden))).not.toContain("r5c5");
});

test("visible clues stay, hidden ones move into a spoiler list under their own heading", () => {
  const fog = "fog:\n  initiallyLit: [r1c1, r1c2]\n";
  const r = read(["thermo-1: thermo r1c1-r1c2", "thermo-2: thermo r5c5-r5c6", "thermo-3: thermo r1c2-r2c2"], fog);
  const text = readingText(publicReading(r));
  expect(text).toContain("Thermometers. The digits along r1c1-r1c2 strictly increase from the bulb to the tip.");
  // A line with any cell outside the clear ones is hidden, even where part of it shows.
  expect(text).toContain("Thermometers under fog. On each, the digits strictly increase from the bulb to the tip.");
  expect(text).not.toContain("r2c2");
  const fogged = r.rows.find(row => row.heading === "Thermometers under fog")!;
  expect(fogged.items?.count).toBe(2);
  expect(fogged.lines).toEqual([1, 2]);
});

test("a single hidden clue reads in the singular, and a cage's total stays hidden with its cells", () => {
  const r = read(["cage r5c5-r5c6 total 7", "cage-2: cage r1c1-r1c2 total 3"], "fog:\n  initiallyLit: [r1c1, r1c2]\n");
  const text = readingText(publicReading(r));
  expect(text).toContain("Cages. The digits in r1c1-r1c2 are different and sum to 3.");
  expect(text).toContain("Cages under fog. In each, the digits are different and sum to the cage's total.");
  expect(readingText(r)).toContain("Show the clue under fog: reveals cells under fog");
  expect(text).not.toContain("7");
});

test("stated rules and the houses are not clues behind fog", () => {
  const r = read(["renban r5c5-r5c6 stated true", "unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9"], "fog:\n  initiallyLit: [r1c1]\nboard:\n  rows: 9\n  cols: 9\n  symbols: [1, 2, 3, 4, 5, 6, 7, 8, 9]\n");
  expect(r.rows.some(row => row.items?.noun === "clues under fog")).toBe(false);
  expect(readingText(r)).toContain("The digits along r5c5-r5c6");
});

test("a fog block that cannot be read counts every clue as hidden", () => {
  const r = read(["thermo r1c1-r1c2"], "fog:\n  initiallyLit: nope\n");
  expect(r.rows.find(row => row.kind === "thermo")?.items?.spoiler).toBe("reveals cells under fog");
});

test("without fog nothing is behind it", () => {
  expect(read(["thermo r5c5-r5c6"]).rows.some(row => row.items?.noun === "clues under fog")).toBe(false);
});

test("no two read rows of a case share a heading", async () => {
  const clashes: string[] = [];
  for (const name of (await readdir("cases")).filter(n => n.endsWith(".rules.md"))) {
    const reading = readCase(await Bun.file(`cases/${name}`).text(), library);
    const seen = new Set<string>();
    for (const row of reading.rows) {
      if (row.asWritten) continue;
      const key = `${row.stated ? "s:" : ""}${row.heading}`;
      if (seen.has(key)) clashes.push(`${name}: ${row.heading}`);
      seen.add(key);
    }
  }
  expect(clashes.slice(0, 10)).toEqual([]);
}, 60_000);

test("a partial set of houses is not called normal sudoku rules", () => {
  const rows = ["r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9", "r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9"].map((c, i) => `unique-${i + 1}: unique ${c}`);
  const r = read(rows, "board:\n  rows: 9\n  cols: 9\n  symbols: [1, 2, 3, 4, 5, 6, 7, 8, 9]\n");
  expect(readingText(r)).toBe("Unique houses. The two lines are the two rows.");
});

test("a throw inside one rule's read costs only that rule", () => {
  // A value shaped to pass the type check but not the template: cells of a thermo with a repeated cell list.
  const r = read(["thermo r1c1-r1c2", "pair r2c1-r2c2 sum 10"]);
  expect(r.rows.map(row => row.kind)).toEqual(["thermo", "pair"]);
});

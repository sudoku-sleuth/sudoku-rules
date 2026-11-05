import { expect, test } from "bun:test";
import { compare, normalise, type BoardContext, type Cell } from "../../src";
import { METADATA_HEADERS } from "../../src/semantics/headers";

const cells: Cell[] = ["r1c1", "r1c2", "r1c3"];
const board: BoardContext = { rows: 1, cols: 3, activeCells: cells, alphabet: [1, 2, 3, 4, 5, 6, 7, 8, 9], regions: [cells] };
const base = "format: open-rules\ntitle: Synthetic\nsetter: Example\nsource: \"\"\ncase: \"\"\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\n";
const fields = (over: Record<string, string>, extra = "") => {
  const merged: Record<string, string> = { format: "open-rules", title: "Synthetic", setter: "Example", source: "\"\"", case: "\"\"", library: "https://rules.sudoku-sleuth.com/", status: "read", ...over };
  return Object.entries(merged).map(([k, v]) => `${k}: ${v}\n`).join("") + extra;
};
const file = (over: Record<string, string>, extra = "", rules = rule) => ({ file: "synthetic.rules.md", text: `---\n${fields(over, extra)}---\n\n\`\`\`rules\n${rules}\n\`\`\`` });
const rule = "whispers r1c1-r1c2-r1c3 gap 5 loop false";
const sample: Record<string, Record<string, string>> = {
  title: { title: "Other" }, setter: { setter: "Someone" }, source: { source: "elsewhere" }, case: { case: "c-1" },
  status: { status: "confirmed" }, flags: { status: "flagged", flags: "[\"one\"]" },
};
const uncovered = (extra: string) => normalise(file({}, extra), board).normalForm!.coverage.filter(c => c.status === "unsupported");

test("each metadata header leaves the file equivalent to the same file without it", () => {
  const plain = normalise(file({}), board);
  expect(plain.status).toBe("complete");
  for (const name of METADATA_HEADERS) {
    const other = normalise(file(sample[name]), board);
    expect(other.issues).toEqual([]);
    expect(other.status).toBe("complete");
    expect(compare(plain, other).status).toBe("equivalent");
  }
});

test("a value-reading rule beside metadata headers is covered", () => {
  const n = normalise(file({ title: "Another", status: "confirmed" }), board);
  expect(n.status).toBe("complete");
  expect(n.normalForm!.coverage.every(c => c.status === "lowered")).toBe(true);
  expect(n.normalForm!.rewrites.some(r => r.rule === "value-channel")).toBe(true);
});

test("an unknown header keeps its uncovered result and blocks value rules", () => {
  const found = uncovered("notes: free text\n");
  const reasons = found.map(c => (c as { reason: string }).reason);
  expect(found.map(c => c.kind)).toContain("header:notes");
  expect(reasons).toContain("The notes header's semantic meaning is not lowered.");
  expect(reasons).toContain("Effective-value domain is unresolved because value bindings or definitions are uncovered.");
});

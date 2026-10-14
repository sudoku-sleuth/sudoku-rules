import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { checkCaseReferences, compilePublicLibrary } from "../../src";
import { order, visibleCells, type FogFixture } from "./evaluate";

const names = (await readdir("tests/fog")).filter(name => name.endsWith(".json")).sort();
const pages = await Promise.all((await readdir("rules")).filter(name => name.endsWith(".md")).map(async name => ({ file: `rules/${name}`, text: await Bun.file(`rules/${name}`).text() })));
const library = compilePublicLibrary(pages);
const fog = library.value!.features.find(feature => feature.header === "fog")!;

test("the library compiles and fog is a play-state feature that defines visible", () => {
  expect(library.diagnostics).toEqual([]);
  expect(fog.defines).toBe("visible");
  expect(fog.formula.logicClass).toBe("first-order");
});

test("the fixtures cover each rule of the fog page", () => {
  const fixtures = names.map(name => name.replace(/\.json$/, ""));
  for (const needed of ["neighbourhood-reveal", "neighbourhood-clamped-at-the-corner", "given-lights-nothing", "typed-over-given-lights-itself", "wrong-digit-lights-nothing", "link-fires", "given-trigger-needs-a-typed-digit", "empty-links-light-nothing", "trigger-off-the-grid-never-fires", "chain-and-erase", "no-answer-accepts-any-digit", "empty-trigger-is-rejected", "no-answer-given-needs-its-digit", "shared-trigger-two-links", "trigger-fired-in-hidden-cell", "unknown-answer-is-never-correct"])
    expect(fixtures).toContain(needed);
});

for (const name of names) {
  test(`fog fixture ${name}: the page's formula shows exactly the stated cells`, async () => {
    const fixture: FogFixture = await Bun.file(`tests/fog/${name}`).json();
    expect(fixture.name + ".json").toBe(name);
    if (fixture.rejected) {
      // A link without a trigger is not a fog block: the case is rejected with the page's message.
      const links = fixture.links!.map(l => `    - trigger: [${l.trigger.join(", ")}]\n      lights: [${l.lights.join(", ")}]\n`).join("");
      const text = `---\nformat: open-rules\ntitle: Example\nsetter: Example\nsource: ""\ncase: ""\nlibrary: https://rules.sudoku-sleuth.com/\nstatus: read\nfog:\n  initiallyLit: [${fixture.initiallyLit.join(", ")}]\n  links:\n${links}---\n\n\`\`\`rules\nsudoku ${fixture.rows}x${fixture.cols}\n\`\`\`\n`;
      const result = checkCaseReferences({ file: "fixture.rules.md", text }, library.value!.registry);
      expect(result.diagnostics.map(d => d.code)).toEqual(["E_FEATURE_REQUIRES"]);
      expect(result.diagnostics[0].message).toContain(fixture.rejected);
      return;
    }
    expect(fixture.steps.length).toBeGreaterThan(0);
    for (const step of fixture.steps) expect(visibleCells(fog, fixture, step.entries)).toEqual(order(step.lit));
  });
}

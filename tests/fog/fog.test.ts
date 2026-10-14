import { expect, test } from "bun:test";
import { readdir } from "node:fs/promises";
import { lit, order, type FogFixture } from "./lit";

const names = (await readdir("tests/fog")).filter(name => name.endsWith(".json")).sort();

test("the fixtures cover each rule of the fog page", () => {
  const fixtures = names.map(name => name.replace(/\.json$/, ""));
  for (const needed of ["neighbourhood-reveal", "neighbourhood-clamped-at-the-corner", "given-lights-nothing", "typed-over-given-lights-itself", "wrong-digit-lights-nothing", "link-fires", "given-trigger-needs-a-typed-digit", "empty-links-light-nothing", "trigger-off-the-grid-never-fires", "chain-and-erase", "no-answer-accepts-any-digit", "empty-trigger-is-rejected"])
    expect(fixtures).toContain(needed);
});

for (const name of names) {
  test(`fog fixture ${name}: each step lights exactly the stated cells`, async () => {
    const fixture: FogFixture = await Bun.file(`tests/fog/${name}`).json();
    expect(fixture.name + ".json").toBe(name);
    if (fixture.rejected) return;
    expect(fixture.steps.length).toBeGreaterThan(0);
    for (const step of fixture.steps) expect(lit(fixture, step.entries)).toEqual(order(step.lit));
  });
}

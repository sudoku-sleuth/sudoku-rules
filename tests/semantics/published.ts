import { evaluate } from "../../src";

type Rule = Parameters<typeof evaluate>[0];
/**
 * The verdict of the published definition. The public evaluator runs the library's own lowered formula whenever a rule has
 * one, so a comparison against it proves nothing about the lowering. Dropping the lowered formula makes the evaluator read the
 * published formula itself, with `values` as the effective values. A comparison that is undecided proves nothing either, so it
 * is reported as an error.
 */
export function published(rule: Rule, digits: Record<string, number>, values?: Record<string, number>): boolean {
  const { status } = evaluate({ ...rule, finite: undefined }, { digits, ...(values ? { values } : {}) });
  if (status === "undecided") throw Error(`The published definition is undecided for ${JSON.stringify(digits)} ${JSON.stringify(values)}.`);
  return status === "holds";
}

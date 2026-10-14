import { expect, test } from "bun:test";
import { termMatches } from "../../src/reading/align";

test("a term matches whole words, ignoring case and punctuation", () => {
  expect(termMatches("Digits joined by a White dot are consecutive.", "white dot")).toBe(true);
  expect(termMatches("A whitedot is not a white dot", "white dot")).toBe(true);
  expect(termMatches("whiteboard dots", "white dot")).toBe(false);
});

test("a star stands for one word", () => {
  expect(termMatches("how many flames contain that digit", "how many * contain that digit")).toBe(true);
  expect(termMatches("how many flames and emeralds contain that digit", "how many * contain that digit")).toBe(false);
});

test("a leading equals sign makes the match case-sensitive", () => {
  expect(termMatches("Digits separated by an X sum to 10", "=X")).toBe(true);
  expect(termMatches("the x sum", "=X")).toBe(false);
});

import { compare as compareRationals, type Rational } from "./language/exact.js";
import { compare as compareNormalForms } from "./semantics/index.js";
import type { Comparison, Normalisation } from "./semantics/types.js";

/** Compares normalisation results; the existing exact-rational overload is retained. */
export function compare(a: Normalisation, b: Normalisation): Comparison;
export function compare(a: Rational, b: Rational): -1 | 0 | 1;
export function compare(a: Normalisation | Rational, b: Normalisation | Rational): Comparison | -1 | 0 | 1 {
  if ("numerator" in a && "numerator" in b) return compareRationals(a, b);
  if ("status" in a && "status" in b) return compareNormalForms(a, b);
  throw new TypeError("Compare two normalisation results or two exact rationals.");
}

import { fail, type Span } from "./diagnostics.js";

export interface Rational { numerator: bigint; denominator: bigint }
const synthetic: Span = { file: "<arithmetic>", start: { offset: 0, line: 1, column: 1 }, end: { offset: 0, line: 1, column: 1 } };
const abs = (n: bigint) => n < 0n ? -n : n;
function gcd(a: bigint, b: bigint): bigint { while (b !== 0n) [a, b] = [b, a % b]; return abs(a); }
export function rational(numerator: bigint, denominator = 1n, span = synthetic): Rational {
  if (denominator === 0n) fail("E_ARITHMETIC", span, "This calculation divides by zero; the divisor must not be zero.");
  if (abs(numerator).toString().length > 16384 || abs(denominator).toString().length > 16384) fail("E_LANGUAGE_LIMIT", span, "This calculation needs more than 16,384 digits; simplify it to stay within the exact arithmetic limit.");
  const sign = denominator < 0n ? -1n : 1n;
  const divisor = gcd(numerator, denominator);
  return { numerator: numerator / divisor * sign, denominator: abs(denominator) / divisor };
}
export function exact(text: string, span = synthetic): Rational {
  if (!/^[+-]?\d+(?:\.\d+)?$/.test(text)) fail("E_ARITHMETIC", span, "Write this number as a whole number or decimal, such as 3 or 0.5.");
  const digits = text.replace(/^[+-]/, "").replace(".", "");
  if (digits.length > 4096) fail("E_LANGUAGE_LIMIT", span, "This number has more than 4,096 digits; use a shorter number.");
  const places = text.includes(".") ? text.length - text.indexOf(".") - 1 : 0;
  return rational(BigInt(digits) * (text.startsWith("-") ? -1n : 1n), 10n ** BigInt(places), span);
}
export function arithmetic(op: string, a: Rational, b: Rational, span = synthetic): Rational {
  switch (op) {
    case "+": return rational(a.numerator * b.denominator + b.numerator * a.denominator, a.denominator * b.denominator, span);
    case "-": return rational(a.numerator * b.denominator - b.numerator * a.denominator, a.denominator * b.denominator, span);
    case "*": return rational(a.numerator * b.numerator, a.denominator * b.denominator, span);
    case "/": return rational(a.numerator * b.denominator, a.denominator * b.numerator, span);
    case "mod": {
      if (a.denominator !== 1n || b.denominator !== 1n || b.numerator <= 0n) fail("E_ARITHMETIC", span, "For mod, both numbers must be whole numbers and the divisor must be greater than zero.");
      return rational((a.numerator % b.numerator + b.numerator) % b.numerator);
    }
    case "^": {
      if (b.denominator !== 1n || b.numerator < 0n) fail("E_ARITHMETIC", span, "The power must be a whole number greater than or equal to zero.");
      if (b.numerator > 4096n || BigInt(abs(a.numerator).toString().length) * b.numerator > 16384n || BigInt(a.denominator.toString().length) * b.numerator > 16384n) {
        fail("E_LANGUAGE_LIMIT", span, "This power is too large to calculate exactly within the checking limit; use a smaller power or base.");
      }
      return rational(a.numerator ** b.numerator, a.denominator ** b.numerator, span);
    }
    default: fail("E_ARITHMETIC", span, `The arithmetic operation ${op} is not supported.`);
  }
}
export function compare(a: Rational, b: Rational): -1 | 0 | 1 {
  const difference = a.numerator * b.denominator - b.numerator * a.denominator;
  return difference < 0n ? -1 : difference > 0n ? 1 : 0;
}
export function floor(a: Rational): bigint {
  const quotient = a.numerator / a.denominator;
  return a.numerator < 0n && a.numerator % a.denominator !== 0n ? quotient - 1n : quotient;
}
export function printExact(a: Rational): string {
  return a.denominator === 1n ? String(a.numerator) : `${a.numerator}/${a.denominator}`;
}

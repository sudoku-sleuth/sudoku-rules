---
name: Remainder Cage
url: https://rules.sudoku-sleuth.com/remainder-cage.md
kind: remainder-cage
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  modulus:
    description: The divisor used to take remainders.
    default: Required. modulus ≥ 1.
    type: position
  remainder:
    description: The remainder required after division by the modulus.
    default: Required.
    type: position
  distinct:
    description: Whether repeated digits are forbidden.
    default: Required.
    type: boolean
---

# Remainder Cage

The cage total has the stated remainder after division by the modulus. The distinct parameter forbids repeated digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| modulus | The divisor used to take remainders. | Required. modulus ≥ 1. |
| remainder | The remainder required after division by the modulus. | Required. |
| distinct | Whether repeated digits are forbidden. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
modulus>=1 ∧ rem(sum_D(cells),modulus)=remainder ∧ (distinct → distinct_D(cells))
```

The normalised remainder of the digit sum modulo modulus equals remainder. If distinct, the digits also differ.

## Example

````markdown
---
format: open-rules
title: Remainder Cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
remainder-cage r1c1-r1c2 modulus 3 remainder 1 distinct false
```
````

Satisfies the rule: r1c1=1, r1c2=3. The total 4 has remainder 1 modulo 3.

Breaks the rule: r1c1=1, r1c2=2. The total 3 has remainder 0 modulo 3.

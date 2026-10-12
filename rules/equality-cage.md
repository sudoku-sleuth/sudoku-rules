---
name: Equality Cage
url: https://rules.sudoku-sleuth.com/equality-cage.md
kind: equality-cage
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
---

# Equality Cage

Cage digits are different. The number of low odd digits equals the number of high even digits; low even and high odd counts also match.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
distinct_D(cells) ∧ (∀c∈cells: D(c)!=(|𝔄|+1)/2)
∧ countWhere(cells,λc:cell: D(c)<(|𝔄|+1)/2 ∧ odd(D(c)))=countWhere(cells,λc:cell: D(c)>(|𝔄|+1)/2 ∧ ¬odd(D(c)))
∧ countWhere(cells,λc:cell: D(c)<(|𝔄|+1)/2 ∧ ¬odd(D(c)))=countWhere(cells,λc:cell: D(c)>(|𝔄|+1)/2 ∧ odd(D(c)))
```

Digits are distinct. Low-odd count equals high-even count and low-even count equals high-odd count. Low/high use the lower/upper halves of 1..n; an odd alphabet’s middle digit is forbidden.

## Example

````markdown
---
format: open-rules
title: Equality Cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equality-cage r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=6. One low odd digit balances one high even digit.

Breaks the rule: r1c1=1, r1c2=7. A high odd digit replaces the required high even digit.

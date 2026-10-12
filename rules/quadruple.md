---
name: Quadruple
url: https://rules.sudoku-sleuth.com/quadruple.md
kind: quadruple
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  digits:
    description: The allowed or required digits, listed explicitly; repeats in the list count where the rule says so.
    default: Required.
    type: list<digit>
---

# Quadruple

The surrounding cells contain every listed digit, including the stated number of copies.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| digits | The allowed or required digits, listed explicitly; repeats in the list count where the rule says so. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀d∈digits: countWhere(cells,λc:cell: D(c)=d)>=multiplicity(digits,d)
```

For every listed digit d, its occurrences among cells are at least its multiplicity in digits. Extra copies and unlisted digits are allowed by this check.

## Example

````markdown
---
format: open-rules
title: Quadruple example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c1=1, r2c2=1. Every listed digit appears around the clue.

Breaks the rule: r1c1=1, r1c2=3, r2c1=1, r2c2=1. A listed digit is missing around the clue.

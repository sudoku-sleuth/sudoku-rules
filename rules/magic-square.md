---
name: Magic Square
url: https://rules.sudoku-sleuth.com/magic-square.md
kind: magic-square
parameters:
  places:
    description: The nine cells of each candidate magic square, in row order.
    default: Required.
    type: list<list<cell>>
---

# Magic Square

At least one listed square contains 1 to 9 once each. Its rows, columns and both diagonals each sum to 15.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| places | The nine cells of each candidate magic square, in row order. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∃P∈places: |P|=9 ∧ distinctAt(P,λoccurrence:cell: D(occurrence)) ∧ (∀c∈P: D(c)∈[1,10)) ∧ (∀T∈magicLines(P): sum_D(T)=15)
```

At least one place holds all digits 1..9 once and has sum 15 in its three rows, three columns and two diagonals.

## Example

````markdown
---
format: open-rules
title: Magic Square example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
magic-square places [["r1c1","r1c2","r1c3","r1c4","r1c5","r1c6","r1c7","r1c8","r1c9"]]
```
````

Satisfies the rule: r1c8=9, r1c9=2, r1c1=8, r1c2=1, r1c3=6, r1c4=3, r1c5=5, r1c6=7, r1c7=4. All nine digits occur once and each listed square line totals 15.

Breaks the rule: r1c8=2, r1c9=9, r1c1=8, r1c2=1, r1c3=6, r1c4=3, r1c5=5, r1c6=7, r1c7=4. At least one listed square line has the wrong total.

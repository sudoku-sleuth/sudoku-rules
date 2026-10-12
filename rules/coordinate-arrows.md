---
name: Coordinate Arrows
url: https://rules.sudoku-sleuth.com/coordinate-arrows.md
kind: coordinate-arrows
parameters:
  arrows:
    description: The base and tip cells of each arrow, one ordered pair per arrow.
    default: Required.
    type: list<list<cell>>
---

# Coordinate Arrows

The base and tip digits give the row and column of a cell, counted from 1. That cell contains their sum. Every arrow names a different coordinate pair.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| arrows | The base and tip cells of each arrow, one ordered pair per arrow. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀p∈arrows: |p|=2 ∧ let a=D(p[0]); let b=D(p[1]);
  1<=a<=rows ∧ 1<=b<=cols ∧ D(boardCell(a-1,b-1))=a+b)
∧ (∀i,j∈[0,|arrows|): i!=j → |arrows[i]|=2 ∧ |arrows[j]|=2
  ∧ (D(arrows[i][0])!=D(arrows[j][0]) ∨ D(arrows[i][1])!=D(arrows[j][1])))
```

Each base digit names a row and its tip digit names a column, both one-based and within the board. The targeted digit equals their sum. All arrows name different ordered coordinate pairs.

## Example

````markdown
---
format: open-rules
title: Coordinate Arrows example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
coordinate-arrows arrows [["r1c4","r1c5"]]
```
````

Satisfies the rule: r1c2=3, r1c4=1, r1c5=2. The coordinates 1 and 2 select a cell containing their sum 3.

Breaks the rule: r1c2=4, r1c4=1, r1c5=2. The selected cell contains 4 instead of 3.

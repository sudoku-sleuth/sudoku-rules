---
name: Minesweeper Circles
url: https://rules.sudoku-sleuth.com/minesweeper.md
kind: minesweeper
layer: rule
shape: Cells
parameters:
  cells:
    type: set<cell>
    description: Unshaded circles; each counts its touching shaded neighbours.
    default: Required.
---

# Minesweeper Circles

Each circle is unshaded. Its digit counts shaded cells touching it orthogonally or diagonally. The circle itself is excluded.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | Unshaded circles; each counts its touching shaded neighbours. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and operations.

```text
∀c∈cells:c∉H ∧ D(c)=countWhere(C,λb:cell:moveRelation("king",c,b) ∧ b∈H)
```

## Example

````markdown
---
format: open-rules
title: Minesweeper Circles example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 2, "cols": 2, "symbols": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
---

```rules
minesweeper cells ["r1c1"]
```
````

Satisfies the rule: r1c1=1, r1c2=1, r2c1=1, r2c2=1. Shade r2c2 only.

Breaks the rule: Keep the other digits and shading, but set r1c1=2.

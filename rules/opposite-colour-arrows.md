---
name: Opposite-colour Arrows
url: https://rules.sudoku-sleuth.com/opposite-colour-arrows.md
kind: opposite-colour-arrows
shape: Cells
aliases: ["Opposite-colour directional count"]
parameters:
  clue:
    type: cell
    description: The arrow cell.
    default: Required.
  cells:
    type: set<cell>
    description: The cells on the indicated rays, excluding the clue.
    default: Required.
layer: rule
---

# Opposite-colour Arrows

The arrow digit counts all cells of the opposite colour on its indicated rays. Cells of either colour do not block the count. Combine rays in one declaration when the arrows give one combined count; use separate declarations when each arrow gives its own count.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| clue | `cell` | The arrow cell. | Required. |
| cells | `set<cell>` | The cells on the indicated rays, excluding the clue. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
clue∉cells ∧ D(clue)=countWhere(cells,λc:cell:¬((c∈H)↔(clue∈H)))
```

## Example

````markdown
---
format: open-rules
title: Opposite-colour Arrows example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
opposite-colour-arrows clue r1c1 cells ["r1c2","r1c3","r1c4"]
```
````

Satisfies the rule: r1c1=2, r1c2=1, r1c3=1, r1c4=1. Shade r1c1 and r1c3; the other two cells count.

Breaks the rule: r1c1=1, r1c2=1, r1c3=1, r1c4=1 with the same shading. There are still two opposite-colour cells.

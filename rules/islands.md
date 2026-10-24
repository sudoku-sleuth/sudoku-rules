---
name: Islands
url: https://rules.sudoku-sleuth.com/islands.md
kind: islands
shape: Regions
aliases: ["Nurikabe", "Nurikabe islands and sight-counted water"]
parameters:
  name:
    type: string
    description: The shared island partition name.
    default: Required.
    shared:
      role: construct
      type: partition
  circles:
    type: set<cell>
    description: Island-size clue cells.
    default: Required.
  waterclues:
    type: set<cell>
    description: Water sight clue cells.
    default: Empty set.
layer: rule
---

# Islands

Unshaded cells form islands separated by shaded water. Each island contains exactly one size circle, whose digit gives its area. Water is orthogonally connected and contains no complete 2×2 square. A water sight clue counts itself and every water cell visible along its row and column, stopping at islands.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| name | `string` | The shared island partition name. | Required. |
| circles | `set<cell>` | Island-size clue cells. | Required. |
| waterclues | `set<cell>` | Water sight clue cells. | Empty set. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let P=partitionAnswer(name); componentPartition(P,{c∈C:c∉H}) ∧ connected(H) ∧ (∀c∈circles:c∉H) ∧ (∀R∈P:countWhere(circles,λc:cell:c∈R)=1 ∧ (∀c∈circles:c∈R → D(c)=|R|)) ∧ (∀r∈[0,rows-1):∀k∈[0,cols-1):¬(window2(r,k)⊆H)) ∧ (∀c∈waterclues:c∈H ∧ D(c)=countWhere(C,λb:cell: b∈H ∧ ((row(c)=row(b) ∧ (∀z∈C:row(z)=row(c) ∧ minimumPair(col(c),col(b))<=col(z)<=maximumPair(col(c),col(b)) → z∈H)) ∨ (col(c)=col(b) ∧ (∀z∈C:col(z)=col(c) ∧ minimumPair(row(c),row(b))<=row(z)<=maximumPair(row(c),row(b)) → z∈H)))))
```

## Example

````markdown
---
format: open-rules
title: Islands example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 2, "cols": 2, "symbols": [1, 2, 3]}
---

```rules
islands name "islands" circles ["r1c1"] waterclues ["r1c2"]
```
````

Satisfies the rule: The island partition is {{r1c1}}; all other cells are water. r1c1=1, r1c2=2, r2c1=1, r2c2=1. The sight clue sees itself and r2c2.

Breaks the rule: Use the same partition and water, with r1c1=1, r1c2=3, r2c1=1, r2c2=1. The sight count is still two.

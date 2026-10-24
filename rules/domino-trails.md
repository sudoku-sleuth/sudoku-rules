---
name: Domino Trails
url: https://rules.sudoku-sleuth.com/domino-trails.md
kind: domino-trails
shape: Regions
aliases: ["Domino trail layout"]
parameters:
  name:
    type: string
    description: The shared domino partition name.
    default: Required.
    shared:
      role: construct
      type: partition
  clues:
    type: list<cell>
    description: Trail sight clue cells, in clue order.
    default: Empty list.
  totals:
    type: list<number>
    description: Corresponding domino sums, in the same order.
    default: Empty list.
layer: rule
---

# Domino Trails

Unshaded trail cells form one orthogonally connected area with no cycle in their orthogonal adjacency graph. Every 2×2 square contains both trail and hedge cells. Tile all trail cells with nonoverlapping orthogonal dominoes. A marked trail cell counts visible trail cells, including itself, before a hedge blocks sight; its corner clue gives the sum of its domino. Diagonal trail contacts are allowed, and hedges need not reach the border.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| name | `string` | The shared domino partition name. | Required. |
| clues | `list<cell>` | Trail sight clue cells, in clue order. | Empty list. |
| totals | `list<number>` | Corresponding domino sums, in the same order. | Empty list. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let trail={c∈C:c∉H}; let P=partitionAnswer(name); connected(trail) ∧ (Σ_{a∈trail} countWhere(trail,λb:cell:moveRelation("orthogonal",a,b) ∧ cellIndex(a)<cellIndex(b)))=|trail|-1 ∧ (∀r∈[0,rows-1):∀k∈[0,cols-1):(∃a∈window2(r,k):a∈H) ∧ (∃b∈window2(r,k):b∉H)) ∧ partition(P,trail) ∧ (∀R∈P:|R|=2 ∧ (∀a,b∈R:a!=b → moveRelation("orthogonal",a,b))) ∧ |clues|=|totals| ∧ (∀c∈clues:c∈trail ∧ D(c)=countWhere(C,λb:cell: b∈trail ∧ ((row(c)=row(b) ∧ (∀z∈C:row(z)=row(c) ∧ minimumPair(col(c),col(b))<=col(z)<=maximumPair(col(c),col(b)) → z∈trail)) ∨ (col(c)=col(b) ∧ (∀z∈C:col(z)=col(c) ∧ minimumPair(row(c),row(b))<=row(z)<=maximumPair(row(c),row(b)) → z∈trail))))) ∧ (∀i∈[0,|clues|):∀R∈P:clues[i]∈R → aggregate(R,"D","sum")=totals[i])
```

## Example

````markdown
---
format: open-rules
title: Domino Trails example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 2, "cols": 2, "symbols": [1, 2, 3, 4]}
---

```rules
domino-trails name "dominoes" clues ["r1c1"] totals [3]
```
````

Satisfies the rule: The top row is trail and the bottom row is shaded. The partition contains the top-row domino. r1c1=2, r1c2=1, r2c1=1, r2c2=1. The marked cell sees two trail cells and its domino sums to three.

Breaks the rule: Keep the same shading and domino, with r1c1=2, r1c2=2, r2c1=1, r2c2=1. The domino total is four.

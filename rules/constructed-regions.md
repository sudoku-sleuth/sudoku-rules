---
name: Constructed Regions
url: https://rules.sudoku-sleuth.com/constructed-regions.md
kind: constructed-regions
parameters:
  size:
    description: The number of cells in each constructed region or cage.
    default: Required.
    type: position
  borders:
    description: Pairs of neighbouring cells that must belong to different regions.
    default: Required.
    type: list<list<cell>>
  joins:
    description: Pairs of cells that must belong to the same region.
    default: Required.
    type: list<list<cell>>
---

# Constructed Regions

Divide the board into connected regions of the stated size. Each region contains different digits. Borders separate regions; joins put cells in the same region.

This is the local existential form of [Region Partition](region-partition.md) with scope C, sizes [size], distinct true, channel D, the same joins and borders, and no count or separation. Region Partition owns the general partition meaning; this page chooses a local partition rather than exposing a shared name.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| size | The number of cells in each constructed region or cage. | Required. |
| borders | Pairs of neighbouring cells that must belong to different regions. | Required. |
| joins | Pairs of cells that must belong to the same region. | Required. |

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∃P:set<set<cell>>: partition(P,C)
  ∧ (∀R∈P: |R|=size ∧ connectedCells(R) ∧ distinct_D(R))
  ∧ (∀p∈joins: |p|=2 ∧ samePartition(P,p[0],p[1]))
  ∧ (∀p∈borders: |p|=2 ∧ ¬samePartition(P,p[0],p[1]))
```

There is a partition of the board into orthogonally connected sets of size cells. Each set has distinct digits; each border separates sets and each join identifies one set. With size equal to the alphabet size, each set contains every symbol.

## Example

````markdown
---
format: open-rules
title: Constructed Regions example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 1
  cols: 3
  symbols:
    - 1
    - 2
    - 3
---

```rules
constructed-regions size 3 borders [] joins []
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. The three connected cells form one region with different digits.

Breaks the rule: r1c1=1, r1c2=1, r1c3=3. The only possible three-cell region repeats 1.

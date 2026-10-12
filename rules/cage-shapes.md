---
name: Cage Shapes
url: https://rules.sudoku-sleuth.com/cage-shapes.md
kind: cage-shapes
parameters:
  size:
    description: The number of cells in each constructed region or cage.
    default: Required.
    type: position
  hidden:
    description: "Each hidden cage: its clue cell, total and known member cells."
    default: Required.
    type: list<record{clue:cell,sum:number,known:set<cell>}>
  free:
    description: Cells excluded from all hidden cages.
    default: Required.
    type: set<cell>
---

# Cage Shapes

Construct the hidden cages around their clues. Each cage has the stated size, includes its known cells, avoids free cells, and contains different digits adding to its total. Cages are connected and do not overlap.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| size | The number of cells in each constructed region or cage. | Required. |
| hidden | Each hidden cage: its clue cell, total and known member cells. | Required. |
| free | Cells excluded from all hidden cages. | Required. |

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∃chosen:list<set<cell>>:
  |chosen|=|hidden|
  ∧ (∀i∈[0,|hidden|): let h=hidden[i]; let cageSet=chosen[i];
    |cageSet|=size ∧ cageSet⊆C ∧ connected(cageSet) ∧ h.known⊆cageSet
    ∧ cageSet∩free=∅ ∧ h.clue∈cageSet ∧ (∀c∈cageSet: cellIndex(h.clue)<=cellIndex(c))
    ∧ distinct_D(cageSet) ∧ sum_D(cageSet)=h.sum)
  ∧ (∀i,j∈[0,|hidden|): i!=j → chosen[i]∩chosen[j]=∅)
```

There is one size-cell orthogonally connected shape for each hidden cage. It contains known, excludes free, starts at clue in reading order, has distinct digits totalling sum, and overlaps no other hidden cage. With hidden empty, this constraint adds no finished-grid condition.

## Example

````markdown
---
format: open-rules
title: Cage Shapes example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 1
  cols: 2
  symbols:
    - 1
    - 2
    - 3
---

```rules
cage-shapes size 2 hidden [{"clue":"r1c1","sum":3,"known":["r1c1","r1c2"]}] free []
```
````

Satisfies the rule: r1c1=1, r1c2=2. The known connected cells have different digits totalling 3.

Breaks the rule: r1c1=1, r1c2=3. The known cells have the wrong total.

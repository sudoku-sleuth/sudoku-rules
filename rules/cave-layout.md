---
name: Cave Layout
url: https://rules.sudoku-sleuth.com/cave-layout.md
kind: cave-layout
layer: rule
shape: Regions
parameters:
  name:
    type: string
    description: Name of the shared wall-component partition.
    default: Required.
    shared:
      role: construct
      type: partition
  clues:
    type: set<cell>
    description: Unshaded sight clue cells.
    default: Empty set.
---

# Cave Layout

Unshaded cave cells form one orthogonally connected area containing every sight clue. Every maximal shaded wall component touches the edge of the board.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| name | `string` | Name of the shared wall-component partition. | Required. |
| clues | `set<cell>` | Unshaded sight clue cells. | Empty set. |

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and operations.

```text
connected({c∈C:c∉H}) ∧ clues⊆{c∈C:c∉H} ∧ componentPartition(partitionAnswer(name),H) ∧ (∀R∈partitionAnswer(name):∃c∈R:row(c)=0 ∨ col(c)=0 ∨ row(c)=rows-1 ∨ col(c)=cols-1)
```

## Example

````markdown
---
format: open-rules
title: Cave Layout example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 3, "cols": 3, "symbols": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
---

```rules
cave-layout name "walls" clues ["r2c2"]
```
````

Satisfies the rule: r1c1=1, r1c2=1, r1c3=1, r2c1=1, r2c2=1, r2c3=1, r3c1=1, r3c2=1, r3c3=1. Shade r1c1 only. The walls partition contains the singleton {r1c1}.

Breaks the rule: Keep the digits, shade only r2c2, and set walls to {{r2c2}}. This wall does not touch the board edge and contains the sight clue.

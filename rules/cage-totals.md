---
name: Cage Totals
url: https://rules.sudoku-sleuth.com/cage-totals.md
kind: cage-totals
shape: Cages
aliases: ["Permitted cage totals", "Perfect square", "Perfect cube"]
parameters:
  cells:
    type: set<cell>
    description: The cage cells.
    default: Required.
  totals:
    type: list<number>
    description: The permitted effective-value totals.
    default: Required.
layer: rule
---

# Cage Totals

The effective values in the cage sum to one of the listed totals. Declare digit distinctness separately when required.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The cage cells. | Required. |
| totals | `list<number>` | The permitted effective-value totals. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
aggregate(cells,"V","sum")∈totals
```

## Example

````markdown
---
format: open-rules
title: Cage Totals example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-totals cells ["r1c1","r1c2"] totals [4,9,16]
```
````

Satisfies the rule: r1c1=4, r1c2=5. With effective values equal to digits, the total is nine.

Breaks the rule: r1c1=4, r1c2=6. With effective values equal to digits, ten is absent from the list.

---
name: Counting Diagonals
url: https://rules.sudoku-sleuth.com/counting-diagonals.md
kind: counting-diagonals
shape: Outside
aliases: ["Counting little killer diagonals", "Counting Little Killers"]
parameters:
  groups:
    type: list<list<cell>>
    description: The marked diagonals, once per arrow.
    default: Required.
layer: rule
---

# Counting Diagonals

Every digit on a marked diagonal equals the number of marked diagonals containing that digit. A digit repeated within one diagonal counts that diagonal once. Any printed diagonal sums are separate clues.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| groups | `list<list<cell>>` | The marked diagonals, once per arrow. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
∀G∈groups:∀c∈G:countWhere(groups,λT:list<cell>:∃b∈T:D(b)=D(c))=D(c)
```

## Example

````markdown
---
format: open-rules
title: Counting Diagonals example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
counting-diagonals groups [["r1c1","r2c2"],["r1c2","r2c1"]]
```
````

Satisfies the rule: r1c1=2, r2c2=2, r1c2=2, r2c1=1. Two occurs on both diagonals and one on only the second.

Breaks the rule: r1c1=2, r2c2=2, r1c2=1, r2c1=1. Two now occurs on only one diagonal.

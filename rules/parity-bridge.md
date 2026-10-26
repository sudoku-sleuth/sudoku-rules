---
name: Parity Bridge
url: https://rules.sudoku-sleuth.com/parity-bridge.md
kind: parity-bridge
layer: rule
shape: Lines
parameters:
  cells:
    type: list<cell>
    description: Interior cells, excluding the attached circles.
    default: Required.
  ends:
    type: list<cell>
    description: Two distinct attached circle cells, excluded from the interior.
    default: Required.
---

# Parity Bridge

One attached circle is odd and the other even. Each circle digit counts interior digits of its own parity; neither endpoint counts itself.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | Interior cells, excluding the attached circles. | Required. |
| ends | `list<cell>` | Two distinct attached circle cells, excluded from the interior. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and operations.

```text
|ends|=2 ∧ ends[0]!=ends[1] ∧ (∀e∈ends:e∉cells) ∧ rem(D(ends[0]),2)!=rem(D(ends[1]),2) ∧ (∀e∈ends:D(e)=countWhere(cells,λc:cell:rem(D(c),2)=rem(D(e),2)))
```

## Example

````markdown
---
format: open-rules
title: Parity Bridge example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 1, "cols": 5, "symbols": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
---

```rules
parity-bridge cells ["r1c2","r1c3","r1c4"] ends ["r1c1","r1c5"]
```
````

Satisfies the rule: r1c1=1, r1c2=1, r1c3=2, r1c4=4, r1c5=2.

Breaks the rule: Keep the other digits, but set r1c4=3.

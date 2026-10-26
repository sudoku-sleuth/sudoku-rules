---
name: Shade Run Sums
url: https://rules.sudoku-sleuth.com/shade-run-sums.md
kind: shade-run-sums
layer: rule
shape: Lines
parameters:
  cells:
    type: list<cell>
    description: All occurrences along the line, in order.
    default: Required.
  total:
    type: number
    description: Required total for each maximal same-colour run.
    default: Required.
  loop:
    type: boolean
    description: Close the last-to-first join.
    default: false.
---

# Shade Run Sums

Each maximal same-colour segment along the line sums to the given total. Neighbouring segments have different colours. Repeated digits are allowed.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | All occurrences along the line, in order. | Required. |
| total | `number` | Required total for each maximal same-colour run. | Required. |
| loop | `boolean` | Close the last-to-first join. | false. |

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and operations.

```text
|cells|>0 ∧ (∀a∈[0,|cells|):∀k∈[1,|cells|+1):start(cells,k,a,loop) ∧ uniform({c:c∈window(cells,k,a,loop)}) ∧ (if loop then (k=|cells| ∨ (¬(marked("H",cells[rem(a-1,|cells|)]) ↔ marked("H",cells[a])) ∧ ¬(marked("H",cells[rem(a+k,|cells|)]) ↔ marked("H",cells[a])))) else ((a=0 ∨ (0<=a-1 ∧ a-1<|cells| ∧ ¬(marked("H",cells[a-1]) ↔ marked("H",cells[a])))) ∧ (a+k=|cells| ∨ (0<=a+k ∧ a+k<|cells| ∧ ¬(marked("H",cells[a+k]) ↔ marked("H",cells[a])))))) → aggregate(window(cells,k,a,loop),"D","sum")=total)
```

## Example

````markdown
---
format: open-rules
title: Shade Run Sums example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 1, "cols": 4, "symbols": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
---

```rules
shade-run-sums cells ["r1c1","r1c2","r1c3","r1c4"] total 7 loop false
```
````

Satisfies the rule: r1c1=2, r1c2=5, r1c3=3, r1c4=4. Shade r1c1, r1c2 only.

Breaks the rule: Keep the other digits and shading, but set r1c4=5.

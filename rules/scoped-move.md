---
name: Scoped Move
url: https://rules.sudoku-sleuth.com/scoped-move.md
kind: scoped-move
parameters:
  move:
    description: The chess move connecting the compared cells.
    default: Required.
    type: Move
  relation:
    description: 'The relationship to enforce: its operation and any required value, for example {"op":"difference","value":1}.'
    default: Required.
    type: enum{same,consecutive}
  digits:
    description: The allowed or required digits, listed explicitly; repeats in the list count where the rule says so.
    default: Required.
    type: list<digit>
---

# Scoped Move

For the listed digits and chess move, prohibit either equal digits or consecutive digits in the related cells.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| move | The chess move connecting the compared cells. | Required. |
| relation | The relationship to enforce: its operation and any required value, for example {"op":"difference","value":1}. | Required. |
| digits | The allowed or required digits, listed explicitly; repeats in the list count where the rule says so. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀a,b∈C: moveRelation(move,a,b) ∧ (D(a)∈digits ∨ D(b)∈digits) → ¬((relation="same" ∧ D(a)=D(b)) ∨ (relation="consecutive" ∧ |D(a)-D(b)|=1))
```

For every pair at move, forbid equal digits (same) or difference 1 (consecutive) when either endpoint’s digit belongs to digits. bishop includes every distance on a diagonal.

## Example

````markdown
---
format: open-rules
title: Scoped Move example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
scoped-move move "knight" relation "same" digits [1]
```
````

Satisfies the rule: r1c1=1, r2c3=6. The specified digit does not repeat across a knight move.

Breaks the rule: r1c1=1, r2c3=1. The specified digit repeats across a knight move.

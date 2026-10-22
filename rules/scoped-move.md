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
    type: enum{same,consecutive}
    description: "The prohibited relationship: equal values or values one apart."
    default: Required.
  digits:
    description: The allowed or required digits, listed explicitly; repeats in the list count where the rule says so.
    default: Required.
    type: list<digit>
  scope:
    type: set<cell>
    description: Compare only pairs whose two cells belong to this scope.
    default: C (the whole board).
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
---

# Scoped Move

For the listed digits and chess move, prohibit either equal digits or consecutive digits in the related cells.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| move | The chess move connecting the compared cells. | Required. |
| relation | The prohibited relationship: equal values or values one apart. | Required. |
| digits | The allowed or required digits, listed explicitly; repeats in the list count where the rule says so. | Required. |
| scope | Compare only pairs whose two cells belong to this scope. | C (the whole board). |
| channel | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
scopedMove(move,relation,digits,scope,channel)
```

Either endpoint must have a listed face digit; both endpoints must be in scope. The selected channel supplies the compared numbers.

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

---
name: Subset Total
url: https://rules.sudoku-sleuth.com/subset-total.md
kind: subset-total
shape: Cages
parameters:
  cells:
    type: set<cell>
    description: Cells from which to select a nonempty subset.
    default: Required.
  total:
    type: number
    description: The selected sum.
    default: Required.
  forbid:
    type: boolean
    description: Require the absence of such a subset.
    default: false.
  minimum:
    type: position
    description: Minimum subset size.
    default: "1."
  maximum:
    type: optional<position>
    description: Maximum subset size.
    default: Absent; use the whole scope size.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
layer: block
composition: Existential subset selection with total and size bounds.
---

# Subset Total

A nonempty subset of the cells has the stated total and size bounds. With `forbid true`, no such subset exists. Each cell can appear only once; order is irrelevant.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | Cells from which to select a nonempty subset. | Required. |
| total | `number` | The selected sum. | Required. |
| forbid | `boolean` | Require the absence of such a subset. | false. |
| minimum | `position` | Minimum subset size. | 1. |
| maximum | `optional<position>` | Maximum subset size. | Absent; use the whole scope size. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
minimum>=1 ∧ let has=(∃S:set<cell>: S⊆cells ∧ minimum<=|S| ∧ |S|<=(if present(maximum) then unwrap(maximum) else |cells|) ∧ aggregate(S,channel,"sum")=total); if forbid then ¬has else has
```

## Example

````markdown
---
format: open-rules
title: Subset Total example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
subset-total cells ["r1c1","r1c2","r1c3"] total 5
```
````

Satisfies the rule: Digits 2,3,8 contain the subset 2,3.

Breaks the rule: Digits 2,4,8 contain no subset totalling 5.

---
name: Rotational Sums
url: https://rules.sudoku-sleuth.com/rotational-sums.md
kind: rotational-sums
parameters:
  sums:
    description: The permitted or required totals.
    default: Required.
    type: list<number>
layer: rule
alias_of: mirrored-pairs
alias_bind:
  line: orderedCells({})
  geometry: '"rotation"'
  mode: '"allowed-sum"'
  channel: '"D"'
  sums: sums
  centre: '"ignore"'
---

# Rotational Sums

Each digit and the digit opposite it after a half turn add up to one of the listed totals.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| sums | `list<number>` | The permitted or required totals. | Required. |

## Definition

Block: [mirrored-pairs](mirrored-pairs.md) — `line=orderedCells({}); geometry="rotation"; mode="allowed-sum"; channel="D"; sums=sums; centre="ignore"`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



Each cell digit and its half-turn counterpart sum to one of sums. The centre pairs with itself.

## Example

````markdown
---
format: open-rules
title: Rotational Sums example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
rotational-sums sums [10]
```
````

Satisfies the rule: r1c1=1, r9c9=9. The half-turn pair totals the allowed 10.

Breaks the rule: r1c1=2, r9c9=9. A half-turn pair has a different total.

---
name: Equal Sums
url: https://rules.sudoku-sleuth.com/equal-sums.md
kind: equal-sums
parameters:
  groups:
    description: The cells in each group, one list per group.
    default: Required.
    type: list<set<cell>>
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  repeats:
    type: boolean
    description: Whether numbers may repeat within each group.
    default: true.
---

# Equal Sums

Every listed group has the same total.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| groups | The cells in each group, one list per group. | Required. |
| channel | Read printed digits (D) or effective values (V). | D. |
| repeats | Whether numbers may repeat within each group. | true. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀G∈groups:repeatPolicy(G,channel,repeats)) ∧ ∀A,B∈groups: aggregate(A,channel,"sum")=aggregate(B,channel,"sum")
```

All supplied operands have the same total in the selected channel.

## Example

````markdown
---
format: open-rules
title: Equal Sums example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equal-sums groups [["r1c1","r1c2"],["r1c3"]]
```
````

Satisfies the rule: r1c3=3, r1c1=1, r1c2=2. The two groups both total 3.

Breaks the rule: r1c3=4, r1c1=1, r1c2=2. The two groups have different totals.

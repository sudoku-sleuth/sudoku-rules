---
name: Equal Sums
url: https://rules.sudoku-sleuth.com/equal-sums.md
kind: equal-sums
parameters:
  groups:
    description: The cells in each group, one list per group.
    default: Required.
    type: list<set<cell>>
---

# Equal Sums

Every listed group has the same total.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| groups | The cells in each group, one list per group. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀A,B ∈ groups: sum_D(A)=sum_D(B)
```

Every group has the same sum of D digits.

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

---
name: Mean Lines
url: https://rules.sudoku-sleuth.com/mean-lines.md
kind: mean-lines
parameters:
  lines:
    description: The cells in each line, in order.
    default: Required.
    type: list<list<cell>>
---

# Mean Lines

Every listed line has the same average digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| lines | The cells in each line, in order. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀A,B ∈ lines: |B| × sum_D(A) = |A| × sum_D(B)
```

Every listed line has the same average digit. Each line contains at least one cell.

## Example

````markdown
---
format: open-rules
title: Mean Lines example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
mean-lines lines [["r1c1","r1c2"],["r1c3"]]
```
````

Satisfies the rule: r1c3=2, r1c1=1, r1c2=3. Both lines have average 2.

Breaks the rule: r1c3=3, r1c1=1, r1c2=3. The second line has average 3 instead of 2.

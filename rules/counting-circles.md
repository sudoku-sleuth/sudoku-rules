---
name: Counting Circles
url: https://rules.sudoku-sleuth.com/counting-circles.md
kind: counting-circles
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
---

# Counting Circles

Each digit appearing in the circles tells you how many circles contain that digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀d∈faceDigits(cells): countWhere(cells,λc:cell: D(c)=d)=d
```

Each digit occurring in cells occurs exactly as many times as its digit.

## Example

````markdown
---
format: open-rules
title: Counting Circles example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
counting-circles r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=2. 1 appears once and 2 appears twice.

Breaks the rule: r1c1=1, r1c2=2, r1c3=3. 2 and 3 each appear only once.

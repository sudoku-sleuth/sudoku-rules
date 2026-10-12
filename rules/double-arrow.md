---
name: Double Arrow
url: https://rules.sudoku-sleuth.com/double-arrow.md
kind: double-arrow
parameters:
  ends:
    description: The two end cells, in their stated order.
    default: Required.
    type: list<cell>
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Double Arrow

Digits between the two ends add up to the sum of the end digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| ends | The two end cells, in their stated order. | Required. |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|ends|=2 ∧ sum_D(line)=D(ends[0])+D(ends[1])
```

The path digits sum to the two endpoint digits.

## Example

````markdown
---
format: open-rules
title: Double Arrow example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
double-arrow r1c2 ends ["r1c1","r1c3"]
```
````

Satisfies the rule: r1c2=5, r1c1=2, r1c3=3. The middle digit 5 equals the two ends added together.

Breaks the rule: r1c2=6, r1c1=2, r1c3=3. The middle digit 6 differs from the end total 5.

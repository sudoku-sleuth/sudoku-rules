---
name: Endpoint Range
url: https://rules.sudoku-sleuth.com/endpoint-range.md
kind: endpoint-range
layer: block
parameters:
  ends:
    type: list<cell>
    description: The two endpoints.
    default: Required.
  line:
    type: path<cell>
    description: Interior cells in drawing order.
    default: Required.
  outside:
    type: boolean
    description: Use the complement of the closed interval.
    default: false.
  gap:
    type: number
    description: Minimum endpoint difference when outside is true.
    default: "0."
---

# Endpoint Range

Compare interior digits with the interval between two endpoints; optionally require a minimum endpoint gap.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| ends | `list<cell>` | The two endpoints. | Required. |
| line | `path<cell>` | Interior cells in drawing order. | Required. |
| outside | `boolean` | Use the complement of the closed interval. | false. |
| gap | `number` | Minimum endpoint difference when outside is true. | 0. |

## Maths

Class: **first-order**.

The [predicates](predicates.md) define the mathematical functions.

```text
|ends|=2 ∧ (if outside then pairRelation(relationSpec("at-least",gap),D(ends[0]),D(ends[1])) ∧ (∀c∈line: ¬numericBetween(D(c),D(ends[0]),D(ends[1]),true)) else ∀c∈line: numericBetween(D(c),D(ends[0]),D(ends[1]),false))
```

## Example


````markdown
---
format: open-rules
title: Between example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
endpoint-range r1c2 ends ["r1c1","r1c3"]
```
````

Satisfies the rule: r1c2=2, r1c1=1, r1c3=3. 2 lies strictly between end digits 1 and 3.

Breaks the rule: r1c2=4, r1c1=1, r1c3=3. 4 is outside the interval between 1 and 3.

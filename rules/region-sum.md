---
name: Region Sum
url: https://rules.sudoku-sleuth.com/region-sum.md
kind: region-sum
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  segments:
    description: The cells in each segment, listed in path order.
    default: Required.
    type: list<list<cell>>
---

# Region Sum

Each listed segment of the line has the same total value. Crossing a region boundary begins a new segment.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| segments | The cells in each segment, listed in path order. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀A,B ∈ segments: valueSum(A)=valueSum(B)
```

Every explicit segment has the same sum of V values. Segments are ordered runs within one authored region; returning to a region begins a new segment.

## Example

````markdown
---
format: open-rules
title: Region Sum example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum r1c1-r1c2-r1c3 segments [["r1c1","r1c2"],["r1c3"]]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. Both listed segments total 3.

Breaks the rule: r1c1=1, r1c2=2, r1c3=4. The listed segments have totals 3 and 4.

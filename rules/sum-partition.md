---
name: Sum Partition
url: https://rules.sudoku-sleuth.com/sum-partition.md
kind: sum-partition
shape: Lines
parameters:
  line:
    type: path<cell>
    description: The ordered line.
    default: Required.
  total:
    type: number
    description: The sum required for every segment.
    default: Required.
  mode:
    type: enum{cover,partition}
    description: Cover every position with a target-sum interval, or partition the whole line into disjoint target-sum intervals.
    default: Required.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  repeats:
    type: boolean
    description: Whether numbers may repeat inside a segment.
    default: true.
  loop:
    type: boolean
    description: Whether intervals may cross the last-to-first join.
    default: false.
---

# Sum Partition

A target-sum segment is a nonempty consecutive interval of the line. Cover mode requires every position to belong to at least one target-sum interval; intervals may overlap. Partition mode splits the entire line into disjoint consecutive target-sum intervals. Neither mode selects arbitrary nonconsecutive subsets. With `loop true`, intervals may cross the last-to-first join; a partition chooses a cut of the cycle. This is also called an N-line when the target is N.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| loop | Allow intervals to cross the last-to-first join. | false. |
| line | The ordered line. | Required. |
| total | The sum required for every segment. | Required. |
| mode | Cover every position with a target-sum interval, or partition the whole line into disjoint target-sum intervals. | Required. |
| channel | Read printed digits (D) or effective values (V). | D. |
| repeats | Whether numbers may repeat inside a segment. | true. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and every named predicate.

```text
sumLineMeaning(line,total,mode,channel,repeats,loop)
```

## Example

````markdown
---
format: open-rules
title: Sum Partition example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
sum-partition r1c1-r1c2-r1c3 total 5 mode "cover"
```
````

Satisfies the rule: Digits 2,3,2: overlapping intervals 2+3 and 3+2 cover the line.

Breaks the rule: The same line cannot partition into disjoint intervals of total 5.

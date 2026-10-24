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
layer: block
composition: Partition ordered lists into configurable target-total segments.
---

# Sum Partition

A target-sum segment is a nonempty consecutive interval of the line. Cover mode requires every position to belong to at least one target-sum interval; intervals may overlap. Partition mode splits the entire line into disjoint consecutive target-sum intervals. Neither mode selects arbitrary nonconsecutive subsets. With `loop true`, intervals may cross the last-to-first join; a partition chooses a cut of the cycle. This is also called an N-line when the target is N.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The ordered line. | Required. |
| total | `number` | The sum required for every segment. | Required. |
| mode | `enum{cover,partition}` | Cover every position with a target-sum interval, or partition the whole line into disjoint target-sum intervals. | Required. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| repeats | `boolean` | Whether numbers may repeat inside a segment. | true. |
| loop | `boolean` | Whether intervals may cross the last-to-first join. | false. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and every named predicate.

```text
((|line| > 0) and if (mode = "partition") then if loop then exists s∈[0,|line|): partitionSums(cyclicCut(line,s),total,channel,repeats) else partitionSums(line,total,channel,repeats) else if loop then forall i∈[0,|line|): exists s∈[0,|line|): exists k∈[1,(|line| + 1)): (((start(line,k,s,true) and exists j∈[0,k): (rem((s + j),|line|) = i)) and repeatPolicy(window(line,k,s,true),channel,repeats)) and (aggregate(window(line,k,s,true),channel,"sum") = total)) else forall i∈[0,|line|): exists a∈[0,|line|): exists b∈[(a + 1),(|line| + 1)): (((a <= i) and (i < b)) and sumSegment(line,a,b,total,channel,repeats)))
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

Breaks the rule: Digits 2,2,2 have no interval totalling 5.

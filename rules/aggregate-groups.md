---
name: Aggregate Groups
url: https://rules.sudoku-sleuth.com/aggregate-groups.md
kind: aggregate-groups
shape: Cages
parameters:
  groups:
    type: list<list<cell>>
    description: Occurrence lists to compare.
    default: Required.
  operation:
    type: enum{sum,product,count,mean}
    description: Aggregate to compare.
    default: sum.
  channel:
    type: Channel
    description: Read face digits D or effective values V.
    default: D.
  repeats:
    type: boolean
    description: Allow equal read values within each group.
    default: true.
  line:
    type: optional<list<cell>>
    description: Validate groups as maximal primary-region runs of this line.
    default: Absent.
  loop:
    type: boolean
    description: Close the supplied line, joining its last and first positions.
    default: false.
  combine:
    type: boolean
    description: Combine separate visits to each primary region.
    default: false.
layer: block
---

# Aggregate Groups

All groups have equal aggregate results. Empty groups contribute zero to sums and one to products. Mean comparisons use cross multiplication, so an empty group places no condition on other groups.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| groups | `list<list<cell>>` | Occurrence lists to compare. | Required. |
| operation | `enum{sum,product,count,mean}` | Aggregate to compare. | sum. |
| channel | `Channel` | Read face digits D or effective values V. | D. |
| repeats | `boolean` | Allow equal read values within each group. | true. |
| line | `optional<list<cell>>` | Validate groups as maximal primary-region runs of this line. | Absent. |
| combine | `boolean` | Combine separate visits to each primary region. | false. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
if present(line) then regionRuns(unwrap(line),groups,loop) ∧ (if combine then equalAggregates({⟨c:c∈unwrap(line),c∈R⟩:R∈{S∈Regions:∃d∈unwrap(line):d∈S}},channel,operation,repeats) else equalAggregates(groups,channel,operation,repeats)) else equalAggregates(groups,channel,operation,repeats)
```

## Example

````markdown
---
format: open-rules
title: Aggregate Groups example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
aggregate-groups groups [["r1c1"],["r1c2"]]
```
````

Satisfies the rule: r1c1=3, r1c2=3. Both singleton groups sum to 3.

Breaks the rule: r1c1=1, r1c2=3. The sums differ.

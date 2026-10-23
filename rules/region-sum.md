---
name: Region Sum
url: https://rules.sudoku-sleuth.com/region-sum.md
kind: region-sum
parameters:
  combine:
    description: Whether separate visits to the same region contribute to one regional total.
    default: false (each visit is summed separately).
    type: boolean
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  segments:
    description: The cells in each segment, listed in path order.
    default: Required.
    type: list<list<cell>>
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: V.
layer: rule
alias_of: aggregate-groups
alias_bind:
  groups: segments
  operation: '"sum"'
  channel: channel
  repeats: "true"
  line: some(line)
  combine: combine
---

# Region Sum

Region boundaries split the line into segments. By default, each segment has the same total value. With combine true, all visits to a region contribute to one total, equal across the regions visited.

The board’s primary regions supply the boundaries: standard boxes on a normal Sudoku board, or the declared regions on an irregular board. List the maximal runs in `segments` in path order, including every return to a region. `combine false` keeps those visits separate; `combine true` adds their values together within each region. State the choice explicitly when a line re-enters a region. Digits may repeat when other rules allow; each occurrence on the supplied path contributes to its sum.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| combine | `boolean` | Whether separate visits to the same region contribute to one regional total. | false (each visit is summed separately). |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| segments | `list<list<cell>>` | The cells in each segment, listed in path order. | Required. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | V. |

## Definition

Block: [aggregate-groups](aggregate-groups.md) — `groups=segments; operation="sum"; channel=channel; repeats=true; line=some(line); combine=combine`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



Segments must be exactly the ordered maximal primary-region runs, retaining every path occurrence. The selected channel is summed per visit or per visited region.

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
region-sum r1c2-r1c3-r1c4 segments [["r1c2","r1c3"],["r1c4"]]
```
````

Satisfies the rule: r1c2=1, r1c3=2, r1c4=3. Both listed segments total 3.

Breaks the rule: r1c2=1, r1c3=2, r1c4=4. The listed segments have totals 3 and 4.

### Returning to a region

```rules
region-sum r1c3-r1c4-r2c3 segments [["r1c3"],["r1c4"],["r2c3"]] combine true
```

Satisfies the rule: r1c3=1, r1c4=3, r2c3=2. The first box contributes 1+2 and the second contributes 3. Breaks the rule: r1c3=1, r1c4=4, r2c3=2 gives totals 3 and 4. With combine false, [3,3,3] satisfies the three separate segment sums but fails the combined totals of 6 and 3.

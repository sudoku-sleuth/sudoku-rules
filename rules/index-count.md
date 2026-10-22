---
name: Index Count
url: https://rules.sudoku-sleuth.com/index-count.md
kind: index-count
shape: Cells
parameters:
  sources:
    type: list<cell>
    description: Index cells; repeated occurrences count separately.
    default: Required.
  cells:
    type: list<cell>
    description: Cells in one-based lookup order.
    default: Required.
  target:
    type: number
    description: The comparison target.
    default: Required.
  relation:
    type: PairRelation
    description: Relation from each lookup result to the target.
    default: difference 0 (equal).
  indexChannel:
    type: Channel
    description: Channel supplying each index.
    default: D.
  offset:
    type: position
    description: Offset added before bounded lookup.
    default: '0.'
  total:
    type: position
    description: Required number of successful lookups.
    default: Required.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
---

# Index Count

Count successful lookups from the source occurrences. A fractional or out-of-range index is a miss. A hit compares the looked-up number with the target using the shared pair relation. Coordinate transforms can supply ordered strips to the same bounded `indexHit` predicate.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| sources | Index cells; repeated occurrences count separately. | Required. |
| cells | Cells in one-based lookup order. | Required. |
| target | The comparison target. | Required. |
| relation | Relation from each lookup result to the target. | difference 0 (equal). |
| indexChannel | Channel supplying each index. | D. |
| offset | Offset added before bounded lookup. | 0. |
| total | Required number of successful lookups. | Required. |
| channel | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
total=countWhere(sources,λs:cell:indexHit(cells,s,indexChannel,channel,offset,target,relation))
```

## Example

````markdown
---
format: open-rules
title: Index Count example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
index-count sources ["r1c1","r1c2"] cells ["r1c3","r1c4"] target 7 total 1
```
````

Satisfies the rule: With source digits 1,3 and lookup digits 7,4, only position 1 hits.

Breaks the rule: With source digits 2,3 and the same lookup digits, neither hits.

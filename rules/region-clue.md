---
name: Region Clue
url: https://rules.sudoku-sleuth.com/region-clue.md
kind: region-clue
shape: Regions
parameters:
  name:
    type: string
    description: The shared region collection name.
    default: Required.
  markers:
    type: list<cell>
    description: Cells whose containing region is constrained.
    default: Required.
  operation:
    type: enum{sum,product,count}
    description: Aggregate over each containing region.
    default: sum.
  target:
    type: optional<number>
    description: Fixed aggregate target.
    default: Absent; read the marker number.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  perRegion:
    type: optional<position>
    description: Require this many marker occurrences in every region.
    default: Absent; no marker count condition.
  crossings:
    type: list<record{cells:list<cell>,total:position}>
    description: Ordered rays and their required count of changes between regions.
    default: Empty list.
---

# Region Clue

Each marker compares its region aggregate with a fixed target or its own number. Repeated markers count as separate occurrences for per-region counts. A crossing clue counts consecutive pairs belonging to different regions of this shared partition; every ray cell must belong to the partition. Returning to a previously visited region counts another boundary crossing.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | The shared region collection name. | Required. |
| markers | Cells whose containing region is constrained. | Required. |
| operation | Aggregate over each containing region. | sum. |
| target | Fixed aggregate target. | Absent; read the marker number. |
| channel | Read printed digits (D) or effective values (V). | D. |
| perRegion | Require this many marker occurrences in every region. | Absent; no marker count condition. |
| crossings | Ordered rays and their required count of changes between regions. | Empty list. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let P=partitionAnswer(name); (∀m∈markers: ∃R∈P: m∈R ∧ aggregate(R,channel,operation)=(if present(target) then unwrap(target) else read(m,channel))) ∧ (present(perRegion) → ∀R∈P:countWhere(markers,λm:cell:m∈R)=unwrap(perRegion)) ∧ (∀g∈crossings: (∀c∈g.cells:∃R∈P:c∈R) ∧ g.total=(count i∈[0,|g.cells|-1): ¬samePartition(P,g.cells[i],g.cells[i+1])))
```

## Example

````markdown
---
format: open-rules
title: Region Clue example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-clue name "areas" markers ["r1c1"] operation "count"
```
````

Satisfies the rule: The marker reads 2 and belongs to a two-cell region.

Breaks the rule: The marker reads 3 in that same two-cell region.

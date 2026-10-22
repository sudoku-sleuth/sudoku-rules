---
name: Region Partition
url: https://rules.sudoku-sleuth.com/region-partition.md
kind: region-partition
shape: Regions
parameters:
  name:
    type: string
    description: The shared region collection name.
    default: Required.
  scope:
    type: set<cell>
    description: Cells covered exactly once.
    default: Required.
  sizes:
    type: list<position>
    description: Allowed region sizes.
    default: Empty list; any positive size.
  count:
    type: optional<position>
    description: Required number of regions.
    default: Absent; no count condition.
  distinct:
    type: boolean
    description: Require different numbers in each region.
    default: false.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  joins:
    type: list<list<cell>>
    description: Cell pairs required to share a region.
    default: Empty list.
  borders:
    type: list<list<cell>>
    description: Cell pairs required to occupy different regions.
    default: Empty list.
  separation:
    type: optional<Move>
    description: Forbid this move between different regions.
    default: Absent; regions may touch.
---

# Region Partition

Partition the scope into nonempty orthogonally connected regions. Choose allowed sizes, a region count, distinct numbers, joins and borders. A scope smaller than the board constructs islands or selected areas; other cells belong to no region in this assignment. Every joined or separated pair must lie in scope. The same name lets shape rules and numeric clues constrain this exact partition.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | The shared region collection name. | Required. |
| scope | Cells covered exactly once. | Required. |
| sizes | Allowed region sizes. | Empty list; any positive size. |
| count | Required number of regions. | Absent; no count condition. |
| distinct | Require different numbers in each region. | false. |
| channel | Read printed digits (D) or effective values (V). | D. |
| joins | Cell pairs required to share a region. | Empty list. |
| borders | Cell pairs required to occupy different regions. | Empty list. |
| separation | Forbid this move between different regions. | Absent; regions may touch. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let P=partitionAnswer(name); connectedRegionPartition(P,scope) ∧ (present(count) → |P|=unwrap(count)) ∧ (∀R∈P: (|sizes|>0 → |R|∈sizes) ∧ (distinct → repeatPolicy(R,channel,false))) ∧ (∀e∈joins: |e|=2 ∧ e[0]∈scope ∧ e[1]∈scope ∧ samePartition(P,e[0],e[1])) ∧ (∀e∈borders: |e|=2 ∧ e[0]∈scope ∧ e[1]∈scope ∧ ¬samePartition(P,e[0],e[1])) ∧ (present(separation) → separatedRegions(P,unwrap(separation)))
```

## Example

````markdown
---
format: open-rules
title: Region Partition example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-partition name "areas" scope ["r1c1","r1c2","r2c1","r2c2"] sizes [2] count 2
```
````

Satisfies the rule: The two horizontal pairs form connected two-cell regions.

Breaks the rule: The two diagonal pairs are disconnected.

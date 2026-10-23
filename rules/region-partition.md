---
name: Region Partition
url: https://rules.sudoku-sleuth.com/region-partition.md
kind: region-partition
shape: Regions
parameters:
  name:
    shared:
      role: construct
      type: partition
    type: string
    description: The shared region collection name.
    default: '"". Choose a local partition.'
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
layer: block
composition: Named connected partitions with sizes, joins and borders.
---

# Region Partition

Partition the scope into nonempty orthogonally connected regions. Choose positive allowed sizes, a region count, distinct numbers, joins and borders. A scope smaller than the board constructs islands or selected areas; other cells belong to no region in this assignment. Every joined or separated pair must lie in scope. The same name lets shape rules and numeric clues constrain this exact partition.

The scope must be nonempty. An empty name chooses a local existential partition; a nonempty name constructs the shared partition.

[Constructed Regions](constructed-regions.md) is the local existential equivalent with scope C, one allowed size, distinct printed digits, the same joins and borders, and no count or separation. It exposes no shared name.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| name | `string` | The shared region collection name. | "". Choose a local partition. |
| scope | `set<cell>` | Cells covered exactly once. | Required. |
| sizes | `list<position>` | Allowed region sizes. | Empty list; any positive size. |
| count | `optional<position>` | Required number of regions. | Absent; no count condition. |
| distinct | `boolean` | Require different numbers in each region. | false. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| joins | `list<list<cell>>` | Cell pairs required to share a region. | Empty list. |
| borders | `list<list<cell>>` | Cell pairs required to occupy different regions. | Empty list. |
| separation | `optional<Move>` | Forbid this move between different regions. | Absent; regions may touch. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
if name="" then ∃P:set<set<cell>>: partitionMeaning(P,scope,sizes,count,distinct,channel,joins,borders,separation) else partitionMeaning(partitionAnswer(name),scope,sizes,count,distinct,channel,joins,borders,separation)
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

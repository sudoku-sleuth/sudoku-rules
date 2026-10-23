---
name: Constructed Regions
url: https://rules.sudoku-sleuth.com/constructed-regions.md
kind: constructed-regions
parameters:
  size:
    description: The number of cells in each constructed region or cage.
    default: Required.
    type: position
  borders:
    description: Pairs of neighbouring cells that must belong to different regions.
    default: Empty list.
    type: list<list<cell>>
  joins:
    description: Pairs of cells that must belong to the same region.
    default: Empty list.
    type: list<list<cell>>
alias_of: region-partition
alias_bind:
  name: '""'
  scope: C
  sizes: ⟨size:i∈[0,1)⟩
  count: absent(|C|)
  distinct: "true"
  channel: '"D"'
  joins: joins
  borders: borders
  separation: absent("orthogonal")
layer: rule
---

# Constructed Regions

Divide the board into connected regions of the stated size. Each region contains different digits. Borders separate regions; joins put cells in the same region.

This is the local existential form of [Region Partition](region-partition.md) with scope C, sizes [size], distinct true, channel D, the same joins and borders, and no count or separation. Region Partition owns the general partition meaning; this page chooses a local partition rather than exposing a shared name.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| size | `position` | The number of cells in each constructed region or cage. | Required. |
| borders | `list<list<cell>>` | Pairs of neighbouring cells that must belong to different regions. | Empty list. |
| joins | `list<list<cell>>` | Pairs of cells that must belong to the same region. | Empty list. |

## Definition

Block: [region-partition](region-partition.md) — `name=""; scope=C; sizes=⟨size:i∈[0,1)⟩; count=absent(|C|); distinct=true; channel="D"; joins=joins; borders=borders; separation=absent("orthogonal")`.


## Example

````markdown
---
format: open-rules
title: Constructed Regions example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 1
  cols: 3
  symbols:
    - 1
    - 2
    - 3
---

```rules
constructed-regions size 3 borders [] joins []
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. The three connected cells form one region with different digits.

Breaks the rule: r1c1=1, r1c2=1, r1c3=3. The only possible three-cell region repeats 1.

---
name: Lookup
url: https://rules.sudoku-sleuth.com/lookup.md
kind: lookup
shape: Cells
parameters:
  cells:
    type: list<cell>
    description: The cells in lookup order, starting at position one.
    default: Required.
  cell:
    type: cell
    description: The cell whose number gives the lookup position.
    default: Required.
  indexChannel:
    type: Channel
    description: The channel supplying the position.
    default: D.
  channel:
    type: Channel
    description: The channel supplying the looked-up and target numbers.
    default: D.
  offset:
    type: position
    description: Add this offset to the index number before looking up the position.
    default: 0.
  target:
    type: optional<number>
    description: A fixed comparison target, taking precedence over targetCell.
    default: Absent; use targetCell or the index cell.
  targetCell:
    type: optional<cell>
    description: The cell supplying the comparison target.
    default: Absent; use the index cell.
  relation:
    type: PairRelation
    description: The relation from the looked-up number to the target number.
    default: difference 0 (equal).
---

# Lookup

A number gives a position in an ordered cell list. The number at that position obeys the stated relation with a fixed target, another cell, or the index cell itself.

Positions start at one. Add `offset` before looking up the position. The result must be a whole number within the list. `indexChannel` supplies the position; `channel` supplies the compared numbers. Both read printed digits by default.

[Index](index.md), [Index Line](index-line.md), [Numbered Room](numbered-room.md) and [Pointing Arrow](pointing-arrow.md) use the same bounded lookup with their own strips and targets.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The lookup cells in order. | Required. |
| cell | The index cell. | Required. |
| indexChannel | Channel supplying the position. | D. |
| channel | Channel supplying compared numbers. | D. |
| offset | Offset added to the index. | 0. |
| target | Fixed comparison target. | Absent; use targetCell or the index cell. |
| targetCell | Cell supplying the target. | Absent; use the index cell. |
| relation | Shared relation from lookup result to target. | difference 0 (equal). |

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define bounded lookup and each pair relation.

```text
let n=read(cell,indexChannel)+offset;
⌊n⌋=n ∧ ∃k∈[1,|cells|+1): k=n ∧ lookupRelated(cells,k,if present(target) then unwrap(target) else if present(targetCell) then read(unwrap(targetCell),channel) else read(cell,channel),channel,relation)
```

## Example

````markdown
---
format: open-rules
title: Lookup example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
lookup r1c2-r1c3 cell "r1c1" target 4
```
````

Satisfies the rule: r1c1=2, r1c2=3, r1c3=4. Position two in the list contains 4.

Breaks the rule: r1c1=3. The list has only two positions.

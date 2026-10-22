---
name: Neighbour Count
url: https://rules.sudoku-sleuth.com/neighbour-count.md
kind: neighbour-count
shape: Cells
parameters:
  cell:
    type: cell
    description: The origin and first number in each comparison.
    default: Required.
  scope:
    type: set<cell>
    description: The bounded neighbour scope.
    default: Required.
  move:
    type: Move
    description: Neighbour geometry.
    default: orthogonal.
  includeSelf:
    type: boolean
    description: Include the origin when it belongs to scope.
    default: false.
  relations:
    type: list<PairRelation>
    description: Inclusive alternatives from origin to neighbour.
    default: Required.
  total:
    type: optional<position>
    description: Fixed count; otherwise read the origin.
    default: Absent; use the origin number.
  exhaustive:
    type: boolean
    description: Require every neighbour to match.
    default: false.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
---

# Neighbour Count

Count neighbours satisfying at least one relation with the origin. Each neighbour counts once even if several alternatives hold. Without a fixed total, the origin number gives the count. Exhaustive mode also requires all selected neighbours to match. The origin is included only when explicitly requested and inside scope.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cell | The origin and first number in each comparison. | Required. |
| scope | The bounded neighbour scope. | Required. |
| move | Neighbour geometry. | orthogonal. |
| includeSelf | Include the origin when it belongs to scope. | false. |
| relations | Inclusive alternatives from origin to neighbour. | Required. |
| total | Fixed count; otherwise read the origin. | Absent; use the origin number. |
| exhaustive | Require every neighbour to match. | false. |
| channel | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let S=selectedNeighbours(cell,scope,move,includeSelf); let n=countWhere(S,λd:cell:relatedAny(relations,read(cell,channel),read(d,channel))); n=(if present(total) then unwrap(total) else read(cell,channel)) ∧ (exhaustive → n=|S|)
```

## Example

````markdown
---
format: open-rules
title: Neighbour Count example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
neighbour-count cell "r1c1" scope ["r1c1","r1c2","r2c1"] relations [{"op":"difference","value":1}] total 1
```
````

Satisfies the rule: Origin 3 with neighbours 4 and 6 has one consecutive companion.

Breaks the rule: Origin 3 with neighbours 4 and 2 has two consecutive companions.

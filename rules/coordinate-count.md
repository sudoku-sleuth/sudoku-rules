---
name: Coordinate Count
url: https://rules.sudoku-sleuth.com/coordinate-count.md
kind: coordinate-count
shape: Cells
parameters:
  sources:
    type: list<cell>
    description: Source occurrences supplying coordinate indices.
    default: Required.
  scope:
    type: set<cell>
    description: Allowed destination cells.
    default: Required.
  rowBase:
    type: position
    description: Zero-based row before adding the transformed index.
    default: 0.
  colBase:
    type: position
    description: Zero-based column before adding the transformed index.
    default: 0.
  rowFactor:
    type: position
    description: Multiply the offset index by this row coefficient.
    default: 0.
  colFactor:
    type: position
    description: Multiply the offset index by this column coefficient.
    default: 1.
  offset:
    type: position
    description: Add this integer before applying the coordinate coefficients.
    default: -1.
  indexChannel:
    type: Channel
    description: Channel supplying the coordinate index.
    default: D.
  channel:
    type: Channel
    description: Channel supplying destination numbers.
    default: D.
  target:
    type: number
    description: The destination comparison target.
    default: Required.
  relation:
    type: PairRelation
    description: Relation from the destination number to the target.
    default: difference 0 (equal).
  total:
    type: position
    description: Required number of successful source occurrences.
    default: Required.
---

# Coordinate Count

Transform each source number into a board coordinate and count successful destinations. Add the offset, multiply by the row and column coefficients, then add the base coordinates. A whole-number index hits only when its destination belongs to scope and satisfies the stated relation with the target. Fractional indices and destinations outside scope are misses. Repeated source occurrences count separately.

The defaults index across the first row using one-based source numbers. Negative factors reverse a direction; setting both factors to zero selects one fixed destination for every integer source number.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| sources | Source occurrences. | Required. |
| scope | Allowed destinations. | Required. |
| rowBase, colBase | Zero-based base coordinate. | 0, 0. |
| rowFactor, colFactor | Coefficients of the offset index. | 0, 1. |
| offset | Integer added before scaling. | -1. |
| indexChannel | Index channel. | D. |
| channel | Destination channel. | D. |
| target | Destination comparison target. | Required. |
| relation | Destination-to-target relation. | difference 0 (equal). |
| total | Required hit count. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define coordinate hits and shared pair relations.

```text
total=countWhere(sources,λs:cell:coordinateHit(s,scope,rowBase,colBase,rowFactor,colFactor,offset,indexChannel,channel,target,relation))
```

## Example

````markdown
---
format: open-rules
title: Coordinate Count example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
coordinate-count sources ["r2c1"] scope ["r1c1","r1c2"] target 7 total 1
```
````

Satisfies the rule: r2c1=2 and r1c2=7. The destination is the second cell of the first row.

Breaks the rule: r2c1=3. The destination falls outside scope.

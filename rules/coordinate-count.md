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
    type: number
    description: Zero-based row before adding the transformed index.
    default: 0
  colBase:
    type: number
    description: Zero-based column before adding the transformed index.
    default: 0
  rowFactor:
    type: number
    description: Multiply the offset index by this row coefficient.
    default: 0
  colFactor:
    type: number
    description: Multiply the offset index by this column coefficient.
    default: 1
  offset:
    type: number
    description: Add this integer before applying the coordinate coefficients.
    default: -1
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
layer: block
composition: Configurable coordinate transforms and destination counts.
---

# Coordinate Count

Transform each source number into a board coordinate and count successful destinations. Add the offset, multiply by the row and column coefficients, then add the base coordinates. A whole-number index hits only when its destination belongs to scope and satisfies the stated relation with the target. Fractional indices and destinations outside scope are misses. Repeated source occurrences count separately.

The bases, coefficients and offset must all be integers.

The defaults index across the first row using one-based source numbers. Negative factors reverse a direction; setting both factors to zero selects one fixed destination for every integer source number.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| sources | `list<cell>` | Source occurrences supplying coordinate indices. | Required. |
| scope | `set<cell>` | Allowed destination cells. | Required. |
| rowBase | `number` | Zero-based row before adding the transformed index. | 0 |
| colBase | `number` | Zero-based column before adding the transformed index. | 0 |
| rowFactor | `number` | Multiply the offset index by this row coefficient. | 0 |
| colFactor | `number` | Multiply the offset index by this column coefficient. | 1 |
| offset | `number` | Add this integer before applying the coordinate coefficients. | -1 |
| indexChannel | `Channel` | Channel supplying the coordinate index. | D. |
| channel | `Channel` | Channel supplying destination numbers. | D. |
| target | `number` | The destination comparison target. | Required. |
| relation | `PairRelation` | Relation from the destination number to the target. | difference 0 (equal). |
| total | `position` | Required number of successful source occurrences. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define coordinate hits and shared pair relations.

```text
integerCoordinates(rowBase,colBase,rowFactor,colFactor,offset) ∧ total=countWhere(sources,λs:cell:coordinateHit(s,scope,rowBase,colBase,rowFactor,colFactor,offset,indexChannel,channel,target,relation))
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

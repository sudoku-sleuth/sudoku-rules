---
name: Pressure Gauge
url: https://rules.sudoku-sleuth.com/pressure-gauge.md
kind: pressure-gauge
parameters:
  type:
    description: Low counts larger neighbours; high counts smaller neighbours.
    default: Required.
    type: enum{low,high}
  cell:
    description: The clue cell.
    default: Required.
    type: cell
  neighbours:
    description: The cells counted or compared around the clue.
    default: Required.
    type: set<cell>
---

# Pressure Gauge

The marked digit counts its listed neighbours that are greater than it for a low gauge, or smaller for a high gauge.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| type | Low counts larger neighbours; high counts smaller neighbours. | Required. |
| cell | The clue cell. | Required. |
| neighbours | The cells counted or compared around the clue. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(type="low" → countWhere(neighbours,λc:cell: D(c)>D(cell))=D(cell)) ∧ (type="high" → countWhere(neighbours,λc:cell: D(c)<D(cell))=D(cell))
```

With n=D(cell), exactly n neighbours are larger than n (low), or smaller than n (high).

## Example

````markdown
---
format: open-rules
title: Pressure Gauge example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pressure-gauge type "low" cell "r1c1" neighbours ["r1c2","r1c3"]
```
````

Satisfies the rule: r1c3=1, r1c1=1, r1c2=2. The marked 1 has exactly one larger neighbour.

Breaks the rule: r1c3=3, r1c1=1, r1c2=2. The marked 1 has two larger neighbours.

---
name: Pointing Arrow
url: https://rules.sudoku-sleuth.com/pointing-arrow.md
kind: pointing-arrow
parameters:
  cell:
    description: The clue cell.
    default: Required.
    type: cell
  ray:
    description: The cells along the ray, nearest first.
    default: Required.
    type: list<cell>
  target:
    description: "The target relationship: greater, less, source or first-five."
    default: Required.
    type: enum{greater,less,source,"first-five"}
  source:
    description: The cell whose digit the target must match.
    default: Absent; source target requires it.
    type: optional<cell>
layer: rule
alias_of: lookup
alias_bind:
  mode: '"queries"'
  cells: orderedCells({})
  cell: boardCell(1,1)
  sources: orderedCells({})
  indexChannel: '"D"'
  channel: '"D"'
  offset: "0"
  target: absent(0)
  targetCell: absent(boardCell(1,1))
  relation: relationSpec("difference",0)
  queries: ⟨lookupQuery(ray,D(cell),if target="source" ∧ present(source) then D(unwrap(source)) else if target="first-five" then 5 else D(cell),"D",relationSpec(if target="less" ∨ target="greater" then "less" else "difference",0)):i∈[0,1),target!="source" ∨ present(source)⟩
  total: "1"
  firstMatch: target="first-five"
  reverseRelation: target="greater"
  increasing: orderedCells({})
  nonempty: "false"
---

# Pointing Arrow

Count along the ray by the marked digit to find its target. The mode states whether the target is greater, smaller, equal to the source, or the first 5.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cell | `cell` | The clue cell. | Required. |
| ray | `list<cell>` | The cells along the ray, nearest first. | Required. |
| target | `enum{greater,less,source,"first-five"}` | The target relationship: greater, less, source or first-five. | Required. |
| source | `optional<cell>` | The cell whose digit the target must match. | Absent; source target requires it. |

## Definition

Block: [lookup](lookup.md) — `queries=⟨lookupQuery(ray,D(cell),if target="source" ∧ present(source) then D(unwrap(source)) else if target="first-five" then 5 else D(cell),"D",relationSpec(if target="less" ∨ target="greater" then "less" else "difference",0)):i∈[0,1),target!="source" ∨ present(source)⟩; total=1; firstMatch=target="first-five"; reverseRelation=target="greater"; increasing=orderedCells({}); nonempty=false`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



The shared bounded lookup reads the target. first-five also excludes earlier fives.

## Example

````markdown
---
format: open-rules
title: Pointing Arrow example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pointing-arrow cell "r1c1" ray ["r1c2","r1c3"] target "greater"
```
````

Satisfies the rule: r1c3=3, r1c1=2, r1c2=1. The digit 2 selects the second ray cell, whose 3 is greater.

Breaks the rule: r1c3=2, r1c1=2, r1c2=1. The selected ray cell equals 2 rather than exceeding it.

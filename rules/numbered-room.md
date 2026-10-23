---
name: Numbered Room
url: https://rules.sudoku-sleuth.com/numbered-room.md
kind: numbered-room
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  digit:
    description: The specified digit.
    default: Required.
    type: digit
alias_of: lookup
alias_bind:
  mode: '"queries"'
  cells: orderedCells({})
  cell: absent(boardCell(1,1))
  sources: orderedCells({})
  indexChannel: '"D"'
  channel: '"D"'
  offset: "0"
  target: absent(0)
  targetCell: absent(boardCell(1,1))
  relation: relationSpec("difference",0)
  queries: ⟨lookupQuery(cells,D(cells[i]),digit,"D",relationSpec("difference",0)):i∈[0,|cells|),i=0⟩
  total: "1"
  firstMatch: "false"
  reverseRelation: "false"
  increasing: orderedCells({})
  nonempty: "false"
layer: rule
---


# Numbered Room

Count from the clue by the first digit. The cell reached contains the stated digit.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| digit | `digit` | The specified digit. | Required. |

## Definition

Block: [lookup](lookup.md) — `queries=⟨lookupQuery(cells,D(cells[i]),digit,"D",relationSpec("difference",0)):i∈[0,|cells|),i=0⟩; total=1; firstMatch=false; reverseRelation=false; increasing=orderedCells({}); nonempty=false`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [lookup](lookup.md). Its header binds every canonical parameter.

The first digit selects a bounded one-based position containing the clue digit.

## Example

````markdown
---
format: open-rules
title: Numbered Room example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
numbered-room r1c1-r1c2-r1c3 digit 3
```
````

Satisfies the rule: r1c1=2, r1c2=3, r1c3=1. The first digit 2 selects a cell containing the required 3.

Breaks the rule: r1c1=2, r1c2=4, r1c3=1. The selected cell contains 4 instead of 3.

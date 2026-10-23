---
name: Index Line
url: https://rules.sudoku-sleuth.com/index-line.md
kind: index-line
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required. No repeated cell; 2 ≤ n ≤ min(16,\|𝔄\|).
    type: path<cell>
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
  queries: ⟨lookupQuery(line,D(line[i]),i+1,"D",relationSpec("difference",0)):i∈[0,|line|)⟩
  total: "|line|"
  firstMatch: "false"
  reverseRelation: "false"
  increasing: orderedCells({})
  nonempty: "false"
layer: rule
---


# Index Line

Count positions from the marked end, starting at 1. A digit X in position N means the digit in position X is N.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. No repeated cell; 2 ≤ n ≤ min(16,\\|𝔄\\|). |

## Definition

Block: [lookup](lookup.md) — `queries=⟨lookupQuery(line,D(line[i]),i+1,"D",relationSpec("difference",0)):i∈[0,|line|)⟩; total=|line|; firstMatch=false; reverseRelation=false; increasing=orderedCells({}); nonempty=false`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [lookup](lookup.md). Its header binds every canonical parameter.

Each digit selects a bounded one-based position containing its original position.

## Example

````markdown
---
format: open-rules
title: Index Line example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
index-line r1c1-r1c2
```
````

Satisfies the rule: r1c1=2, r1c2=1. Positions 1 and 2 point to each other.

Breaks the rule: r1c1=2, r1c2=2. Position 2 does not point back to position 1.

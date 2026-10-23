---
name: Look And Say
url: https://rules.sudoku-sleuth.com/look-and-say.md
kind: look-and-say
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  counts:
    type: list<record{digit:digit,count:position}>
    description: Each digit and the exact number of times it must appear.
    default: Required.
alias_of: digit-profile
alias_bind:
  cells: orderedCells(cells)
  classes: ⟨⟨p.digit:i∈[0,1)⟩:p∈counts⟩
  counts: ⟨p.count:p∈counts⟩
  exhaustive: "false"
  channel: '"D"'
  selfCount: "false"
  windowLength: absent(|{}|)
  loop: "false"
  comparison: '"exact"'
  maximumDistinct: absent(|{}|)
  repeats: "true"
  balancePairs: ⟨⟨n:n∈[0,0)⟩:i∈[0,0)⟩
  sumFree: absent(|{}|)
layer: rule
---



# Look And Say

Each listed digit occurs exactly the stated number of times in the marked cells.

The marked cells may be a cage, a diagonal or another stated group. Read a printed clue as count–digit pairs: 1432 means one 4 and three 2s, written `counts [{"digit":4,"count":1},{"digit":2,"count":3}]`. Unlisted digits may appear. The clue imposes no sum or general no-repeat condition. An empty `counts` list imposes no restriction.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| counts | `list<record{digit:digit,count:position}>` | Each digit and the exact number of times it must appear. | Required. |

## Definition

Block: [digit-profile](digit-profile.md) — `cells=orderedCells(cells); classes=⟨⟨p.digit:i∈[0,1)⟩:p∈counts⟩; counts=⟨p.count:p∈counts⟩; exhaustive=false; channel="D"; selfCount=false; windowLength=absent(|{}|); loop=false; comparison="exact"; maximumDistinct=absent(|{}|); repeats=true; balancePairs=⟨⟨n:n∈[0,0)⟩:i∈[0,0)⟩`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [digit-profile](digit-profile.md). Its header supplies every parameter of that rule.

For each {digit,count}, that digit occurs in exactly count cells. Unlisted digits are unconstrained.

## Example

````markdown
---
format: open-rules
title: Look And Say example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
look-and-say r1c1-r1c2 counts [{"digit":1,"count":1}]
```
````

Satisfies the rule: r1c1=1, r1c2=2. Digit 1 appears exactly once.

Breaks the rule: r1c1=1, r1c2=1. Digit 1 appears a different number of times.

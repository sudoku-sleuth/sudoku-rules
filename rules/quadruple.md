---
name: Quadruple
url: https://rules.sudoku-sleuth.com/quadruple.md
kind: quadruple
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  digits:
    description: The allowed or required digits, listed explicitly; repeats in the list count where the rule says so.
    default: Required.
    type: list<digit>
alias_of: digit-profile
alias_bind:
  cells: orderedCells({c∈cells:true})
  classes: ⟨⟨d:i∈[0,1)⟩:d∈digits⟩
  counts: ⟨multiplicity(digits,d):d∈digits⟩
  channel: '"D"'
  loop: "false"
  selfCount: "false"
  windowLength: absent(|{}|)
  exhaustive: "false"
  comparison: '"at-least"'
  maximumDistinct: absent(|{}|)
  repeats: "true"
  balancePairs: ⟨⟨n:n∈[0,0)⟩:i∈[0,0)⟩
  sumFree: absent(|{}|)
layer: rule
---


# Quadruple

The surrounding cells contain every listed digit, including the stated number of copies.

The binding explicitly selects each cell once before counting digits.

For a circle at a grid intersection, list the four touching cells. Listing a digit once requires at least one copy; listing it twice requires at least two copies. Additional copies and unlisted digits are allowed. An empty `digits` list imposes no restriction; an empty circle has no implied total or distinctness rule.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| digits | `list<digit>` | The allowed or required digits, listed explicitly; repeats in the list count where the rule says so. | Required. |

## Definition

Block: [digit-profile](digit-profile.md) — `cells=orderedCells({c∈cells:true}); classes=⟨⟨d:i∈[0,1)⟩:d∈digits⟩; counts=⟨multiplicity(digits,d):d∈digits⟩; channel="D"; loop=false; selfCount=false; windowLength=absent(|{}|); exhaustive=false; comparison="at-least"; maximumDistinct=absent(|{}|); repeats=true; balancePairs=⟨⟨n:n∈[0,0)⟩:i∈[0,0)⟩`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.


For every listed digit d, its occurrences among cells are at least its multiplicity in digits. Extra copies and unlisted digits are allowed by this check.

## Example

````markdown
---
format: open-rules
title: Quadruple example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c1=1, r2c2=1. Every listed digit appears around the clue.

Breaks the rule: r1c1=1, r1c2=3, r2c1=1, r2c2=1. A listed digit is missing around the clue.

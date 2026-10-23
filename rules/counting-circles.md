---
name: Counting Circles
url: https://rules.sudoku-sleuth.com/counting-circles.md
kind: counting-circles
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
alias_of: digit-profile
alias_bind:
  cells: orderedCells(cells)
  classes: ⟨⟨0:i∈[0,0)⟩:j∈[0,0)⟩
  counts: ⟨|C|:i∈[0,0)⟩
  exhaustive: "false"
  channel: '"D"'
  selfCount: "true"
  windowLength: absent(|C|)
  loop: "false"
  comparison: '"exact"'
  maximumDistinct: absent(|{}|)
  repeats: "true"
  balancePairs: ⟨⟨n:n∈[0,0)⟩:i∈[0,0)⟩
  sumFree: absent(|{}|)
layer: rule
---




# Counting Circles

Each digit appearing in the circles tells you how many circles contain that digit.

This is [Digit Profile](digit-profile.md) with cells listed once, channel D, selfCount true, classes [], counts [], exhaustive false and no windowLength. Digit Profile owns the general frequency meaning.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Definition

Block: [digit-profile](digit-profile.md) — `cells=orderedCells(cells); classes=⟨⟨0:i∈[0,0)⟩:j∈[0,0)⟩; counts=⟨|C|:i∈[0,0)⟩; exhaustive=false; channel="D"; selfCount=true; windowLength=absent(|C|); loop=false; comparison="exact"; maximumDistinct=absent(|{}|); repeats=true; balancePairs=⟨⟨n:n∈[0,0)⟩:i∈[0,0)⟩`.


## Example

````markdown
---
format: open-rules
title: Counting Circles example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
counting-circles r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=2. 1 appears once and 2 appears twice.

Breaks the rule: r1c1=1, r1c2=2, r1c3=3. 2 and 3 each appear only once.

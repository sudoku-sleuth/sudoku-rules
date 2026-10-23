---
name: Run Sum
url: https://rules.sudoku-sleuth.com/run-sum.md
kind: run-sum
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  sum:
    description: The total the digits or values must add up to.
    default: Required.
    type: number
layer: rule
alias_of: selected-stretch
alias_bind:
  cells: cells
  selection: '"consecutive"'
  sum: sum
  count: absent(|{}|)
  sums: ⟨n:n∈[0,0)⟩
  crusts: absent(⟨d:d∈𝔄⟩)
  endpointOccurrences: '"none"'
---

# Run Sum

Count each digit once when a neighbour along the line differs by 1. These digits add up to the clue.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| sum | `number` | The total the digits or values must add up to. | Required. |

## Definition

Block: [selected-stretch](selected-stretch.md) — `cells=cells; selection="consecutive"; sum=sum; count=absent(|{}|); sums=⟨n:n∈[0,0)⟩; crusts=absent(⟨d:d∈𝔄⟩); endpointOccurrences="none"`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



Sum each position once when at least one neighbouring position on the line differs by exactly 1. This sum equals sum.

## Example

````markdown
---
format: open-rules
title: Run Sum example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
run-sum r1c1-r1c2-r1c3 sum 6
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. All three consecutive-run digits contribute to total 6.

Breaks the rule: r1c1=1, r1c2=2, r1c3=5. A digit outside the run leaves the wrong contributing total.

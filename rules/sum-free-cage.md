---
name: Sum Free Cage
url: https://rules.sudoku-sleuth.com/sum-free-cage.md
kind: sum-free-cage
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  modulus:
    description: The divisor used to take remainders.
    default: Required. modulus ≥ 1.
    type: position
layer: rule
alias_of: digit-profile
alias_bind:
  cells: orderedCells(cells)
  classes: ⟨⟨d:d∈𝔄⟩:i∈[0,0)⟩
  counts: ⟨i:i∈[0,0)⟩
  exhaustive: "false"
  channel: '"D"'
  selfCount: "false"
  windowLength: absent(|{}|)
  loop: "false"
  comparison: '"exact"'
  maximumDistinct: absent(0)
  repeats: "false"
  balancePairs: ⟨⟨d:d∈𝔄⟩:i∈[0,0)⟩
  sumFree: some(modulus)
---

# Sum Free Cage

Cage digits are different. Adding any two cage digits, including a digit to itself, and taking the stated remainder never produces another cage digit.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| modulus | `position` | The divisor used to take remainders. | Required. modulus ≥ 1. |

## Definition

Block: [digit-profile](digit-profile.md), with ordered cage cells, channel `D`, no repeats and `sumFree=some(modulus)`; all other profile checks use their defaults.

## Example

````markdown
---
format: open-rules
title: Sum Free Cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
sum-free-cage r1c1-r1c2 modulus 10
```
````

Satisfies the rule: r1c1=1, r1c2=3. Adding cage digits never gives a cage digit modulo 10.

Breaks the rule: r1c1=1, r1c2=2. 1 plus 1 gives the cage digit 2.

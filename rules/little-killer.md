---
name: Little Killer
url: https://rules.sudoku-sleuth.com/little-killer.md
kind: little-killer
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  sum:
    description: The total the digits or values must add up to.
    default: Required.
    type: number
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  repeats:
    type: boolean
    description: Whether numbers may repeat on the ray.
    default: true.
alias_of: aggregate-equation
alias_bind:
  left: ⟨weightedOperand(aggregateOperand(cells,channel,"sum",repeats),1,1):termIndex∈[0,1)⟩
  right: ⟨weightedOperand(aggregateOperand(⟨c:c∈orderedCells(C),false⟩,"D","count",true),sum,0):termIndex∈[0,1)⟩
  leftOperation: '"sum"'
  rightOperation: '"sum"'
  relation: relationSpec("difference",0)
layer: rule
---


# Little Killer

Digits along the listed ray add up to the clue. Repeats are allowed by this rule.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| sum | `number` | The total the digits or values must add up to. | Required. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| repeats | `boolean` | Whether numbers may repeat on the ray. | true. |

## Definition

Block: [aggregate-equation](aggregate-equation.md) — `left=⟨weightedOperand(aggregateOperand(cells,channel,"sum",repeats),1,1):termIndex∈[0,1)⟩; right=⟨weightedOperand(aggregateOperand(⟨c:c∈orderedCells(C),false⟩,"D","count",true),sum,0):termIndex∈[0,1)⟩; leftOperation="sum"; rightOperation="sum"; relation=relationSpec("difference",0)`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [aggregate-equation](aggregate-equation.md). Its header supplies every parameter of that rule.

The selected numbers sum to the clue. Repeats are allowed by default.

## Example

````markdown
---
format: open-rules
title: Little Killer example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
little-killer r1c1-r1c2 sum 3
```
````

Satisfies the rule: r1c1=1, r1c2=2. The ray digits 1 and 2 total 3.

Breaks the rule: r1c1=1, r1c2=3. The ray digits 1 and 3 total 4 instead of 3.

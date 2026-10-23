---
name: Cage
url: https://rules.sudoku-sleuth.com/cage.md
kind: cage
aliases: [Killer Cage, Killer]
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  total:
    description: The total the digits or values must add up to.
    default: No total imposed.
    type: optional<number>
  repeats:
    description: Whether repeated digits are allowed.
    default: false (distinct digits).
    type: boolean
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: V.
alias_of: aggregate-equation
alias_bind:
  left: ⟨if termIndex=0 then weightedOperand(aggregateOperand(orderedCells(cells),"D","count",repeats),0,1) else weightedOperand(aggregateOperand(orderedCells(cells),channel,"sum",true),if present(total) then 1 else 0,1):termIndex∈[0,2)⟩
  right: ⟨weightedOperand(aggregateOperand(⟨c:c∈orderedCells(C),false⟩,"D","count",true),if present(total) then unwrap(total) else 0,0):termIndex∈[0,1)⟩
  leftOperation: '"sum"'
  rightOperation: '"sum"'
  relation: relationSpec("difference",0)
layer: rule
---


# Cage

Cage digits add up to the stated total value. Digits are different unless repeats are allowed. A cage without a total supplies the repeat rule alone.

Also known as Killer Cage or Killer. The published [killer route](killer.md) points here. Legacy `killer` and `killer-cage` declarations load and migrate to `cage`.

Omit `total` for a cage with no printed sum. A blank clue is not a total of zero. Use `total 0` only when zero is the required total. With `repeats true` and no total, this declaration adds no restriction.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| total | `optional<number>` | The total the digits or values must add up to. | No total imposed. |
| repeats | `boolean` | Whether repeated digits are allowed. | false (distinct digits). |
| channel | `Channel` | Read printed digits (D) or effective values (V). | V. |

## Definition

Block: [aggregate-equation](aggregate-equation.md) — `left=⟨if termIndex=0 then weightedOperand(aggregateOperand(orderedCells(cells),"D","count",repeats),0,1) else weightedOperand(aggregateOperand(orderedCells(cells),channel,"sum",true),if present(total) then 1 else 0,1):termIndex∈[0,2)⟩; right=⟨weightedOperand(aggregateOperand(⟨c:c∈orderedCells(C),false⟩,"D","count",true),if present(total) then unwrap(total) else 0,0):termIndex∈[0,1)⟩; leftOperation="sum"; rightOperation="sum"; relation=relationSpec("difference",0)`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [aggregate-equation](aggregate-equation.md). Its header supplies every parameter of that rule.

Face digits differ unless repeats are allowed. The selected channel supplies the optional total.

## Example

````markdown
---
format: open-rules
title: Cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r1c1-r1c2 total 3
```
````

Satisfies the rule: r1c1=1, r1c2=2. The different digits 1 and 2 total 3.

Breaks the rule: r1c1=1, r1c2=3. The digits 1 and 3 total 4 instead of 3.

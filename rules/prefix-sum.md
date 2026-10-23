---
name: Prefix Sum
url: https://rules.sudoku-sleuth.com/prefix-sum.md
kind: prefix-sum
shape: Outside
parameters:
  cells:
    type: list<cell>
    description: The ordered ray from the clue.
    default: Required.
  stop:
    type: enum{target,given,crust}
    description: Stop at the first target number, supplied given, or listed crust digit.
    default: Required.
  target:
    type: optional<number>
    description: The target number; required for target mode.
    default: Absent.
  crusts:
    type: list<digit>
    description: The crust digits; the first encountered crust stops the prefix.
    default: Empty list.
  include:
    type: boolean
    description: Include the stopping cell in the total.
    default: false.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  total:
    type: number
    description: The required selected total.
    default: Required.
alias_of: aggregate-equation
alias_bind:
  left: ⟨weightedOperand(prefixOperand(cells,channel,stop,target,crusts,include),1,1):termIndex∈[0,1)⟩
  right: ⟨weightedOperand(aggregateOperand(⟨c:c∈orderedCells(C),false⟩,"D","count",true),total,0):termIndex∈[0,1)⟩
  leftOperation: '"sum"'
  rightOperation: '"sum"'
  relation: relationSpec("difference",0)
layer: rule
---


# Prefix Sum

Read from the clue up to the first stopping cell. Stop at a target number in the selected channel, a given, or a listed crust digit. The stopping cell is excluded unless include is true. A stopping cell must exist.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | The ordered ray from the clue. | Required. |
| stop | `enum{target,given,crust}` | Stop at the first target number, supplied given, or listed crust digit. | Required. |
| target | `optional<number>` | The target number; required for target mode. | Absent. |
| crusts | `list<digit>` | The crust digits; the first encountered crust stops the prefix. | Empty list. |
| include | `boolean` | Include the stopping cell in the total. | false. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| total | `number` | The required selected total. | Required. |

## Definition

Defined by [aggregate-equation](aggregate-equation.md) with the settings in `alias_bind`.



The [shared predicates](predicates.md) define the notation and every named predicate.

This is a bound shorthand for [aggregate-equation](aggregate-equation.md). Its header supplies every parameter of that rule.

## Example

````markdown
---
format: open-rules
title: Prefix Sum example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
prefix-sum r1c1-r1c2-r1c3 stop "target" target 9 total 3
```
````

Satisfies the rule: Digits 1,2,9: the prefix before 9 totals 3.

Breaks the rule: Digits 1,3,9: the prefix totals 4.

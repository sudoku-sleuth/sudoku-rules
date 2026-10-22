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
---

# Prefix Sum

Read from the clue up to the first stopping cell. Stop at a target number in the selected channel, a given, or a listed crust digit. The stopping cell is excluded unless include is true. A stopping cell must exist.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The ordered ray from the clue. | Required. |
| stop | Stop at the first target number, supplied given, or listed crust digit. | Required. |
| target | The target number; required for target mode. | Absent. |
| crusts | The crust digits; the first encountered crust stops the prefix. | Empty list. |
| include | Include the stopping cell in the total. | false. |
| channel | Read printed digits (D) or effective values (V). | D. |
| total | The required selected total. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and every named predicate.

```text
let stopAt=λc:cell: prefixStop(c,stop,target,crusts,channel);
(∃c∈cells:stopAt(c)) ∧ aggregate(blockedPrefix(cells,stopAt,include),channel,"sum")=total
```

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

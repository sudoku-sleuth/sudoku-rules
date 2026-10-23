---
name: Outside
url: https://rules.sudoku-sleuth.com/outside.md
kind: outside
parameters:
  cells:
    type: collection<cell>
    description: The marked cells. Lists retain repeated positions; sets contain each cell once.
    default: Required.
  digits:
    description: The allowed or required digits, listed explicitly; repeats in the list count where the rule says so.
    default: Required.
    type: list<digit>
alias_of: digit-profile
alias_bind:
  cells: orderedCells(cells)
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


# Outside

The listed cells contain every stated digit, including its stated number of copies.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `collection<cell>` | The marked cells. Lists retain repeated positions; sets contain each cell once. | Required. |
| digits | `list<digit>` | The allowed or required digits, listed explicitly; repeats in the list count where the rule says so. | Required. |

## Definition

Defined by [digit-profile](digit-profile.md) with the settings in `alias_bind`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [digit-profile](digit-profile.md). Its header supplies every parameter of that rule.

Each required digit occurs at least as often as it is listed.

## Example

````markdown
---
format: open-rules
title: Outside example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
outside r1c1-r1c2-r1c3 digits [1,2]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=3. The listed digits occur in the indicated cells.

Breaks the rule: r1c1=1, r1c2=3, r1c3=4. A required digit is absent.

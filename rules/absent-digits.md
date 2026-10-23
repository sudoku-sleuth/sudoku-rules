---
name: Absent Digits
url: https://rules.sudoku-sleuth.com/absent-digits.md
kind: absent-digits
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2.
    default: Required.
    type: set<cell>
  digits:
    description: The digits that must be absent, for example [2,4].
    default: Required.
    type: list<digit>
alias_of: digit-profile
alias_bind:
  cells: orderedCells(cells)
  classes: ⟨⟨d:d∈digits⟩:i∈[0,1)⟩
  counts: ⟨|{}|:i∈[0,1)⟩
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



# Absent Digits

None of the listed digits appears in the marked cells.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2. | Required. |
| digits | `list<digit>` | The digits that must be absent, for example [2,4]. | Required. |

## Definition

Defined by [digit-profile](digit-profile.md) with the settings in `alias_bind`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [digit-profile](digit-profile.md). Its header supplies every parameter of that rule.

None of the listed face digits appears in the marked cells.
This general authoring-library rule represents absence directly, independently of clue type or shading.

## Example

````markdown
---
format: open-rules
title: Absent Digits example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 1
  cols: 2
  symbols:
    - 1
    - 2
    - 3
    - 4
---

```rules
absent-digits r1c1-r1c2 digits [2,4]
```
````

Satisfies the rule: r1c1=1, r1c2=3. Neither 2 nor 4 appears.

Breaks the rule: r1c1=2, r1c2=3. The forbidden digit 2 appears.

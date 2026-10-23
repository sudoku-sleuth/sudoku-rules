---
name: Limited Digits
url: https://rules.sudoku-sleuth.com/limited-digits.md
kind: limited-digits
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  max:
    description: The greatest number of listed rules or different digits allowed.
    default: Required.
    type: number
alias_of: digit-profile
alias_bind:
  cells: line
  classes: ⟨⟨n:n∈[0,0)⟩:i∈[0,0)⟩
  counts: ⟨i:i∈[0,0)⟩
  channel: '"D"'
  loop: "false"
  selfCount: "false"
  windowLength: absent(|{}|)
  exhaustive: "false"
  comparison: '"exact"'
  maximumDistinct: some(max)
  repeats: "true"
  balancePairs: ⟨⟨n:n∈[0,0)⟩:i∈[0,0)⟩
  sumFree: absent(|{}|)
layer: rule
---


# Limited Digits

The marked cells contain at most the stated number of different digits.

The limit is an upper bound. For exactly n distinct digits, also negate a second Limited Digits declaration with `max n-1` replaced by its numeric value. For an anti-diagonal requiring exactly three distinct digits, apply both bounds separately to each full main diagonal.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| max | `number` | The greatest number of listed rules or different digits allowed. | Required. |

## Definition

Defined by [digit-profile](digit-profile.md) with the settings in `alias_bind`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [digit-profile](digit-profile.md). Its header supplies every parameter of that rule.

The number of distinct D values in cells is at most max.

## Example

````markdown
---
format: open-rules
title: Limited Digits example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
limited-digits r1c1-r1c2-r1c3 max 2
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=1. Only two different digits occur.

Breaks the rule: r1c1=1, r1c2=2, r1c3=3. Three different digits occur, exceeding the limit 2.

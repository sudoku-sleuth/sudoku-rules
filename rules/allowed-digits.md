---
name: Allowed Digits
url: https://rules.sudoku-sleuth.com/allowed-digits.md
kind: allowed-digits
parameters:
  line:
    description: The marked cells, listed with hyphens; their order does not affect this rule.
    default: Required.
    type: path<cell>
  digits:
    description: The permitted digits. Listing a digit does not require it to appear.
    default: Required.
    type: list<digit>
alias_of: digit-profile
alias_bind:
  cells: line
  classes: ⟨⟨d:d∈digits⟩:i∈[0,1)⟩
  counts: ⟨|line|:i∈[0,1)⟩
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



# Allowed Digits

Every marked cell contains one of the listed digits. The cells can form a path, a cage, a shaded area or a scattered group. The drawing does not add a sum or a no-repeat condition.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The marked cells, listed with hyphens; their order does not affect this rule. | Required. |
| digits | `list<digit>` | The permitted digits. Listing a digit does not require it to appear. | Required. |

## Definition

Defined by [digit-profile](digit-profile.md) with the settings in `alias_bind`.



The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a bound shorthand for [digit-profile](digit-profile.md). Its header supplies every parameter of that rule.

Every listed cell contains an allowed digit. Cell order and repeated entries in the allowed list do not change this condition. It does not require every allowed digit to occur.

## Example

````markdown
---
format: open-rules
title: Allowed Digits example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
allowed-digits r1c1-r1c2 digits [2,3,5,7]
```
````

Satisfies the rule: r1c1=2, r1c2=3. Both marked digits belong to the allowed list.

Breaks the rule: r1c1=2, r1c2=4. 4 is absent from the allowed list.

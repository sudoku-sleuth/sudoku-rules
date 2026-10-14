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
reading:
  group_by: []
  terms: [little killer, little killers]
  variants:
    - heading: Little killer clues
      noun: clues
      item: "{cells} = {sum}"
      one: "The digits along {cells} add up to {sum}."
      many: "{count|Words} little killer clues. In each, the digits along the ray of cells add up to the clue."
---

# Little Killer

Digits along the listed ray add up to the clue. Repeats are allowed by this rule.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| sum | The total the digits or values must add up to. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
sum_D(cells)=sum
```

The digits along the supplied ray sum to sum. No distinctness is added.

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

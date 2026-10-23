---
name: Doll Sum
url: https://rules.sudoku-sleuth.com/doll-sum.md
kind: doll-sum
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  sums:
    description: The permitted or required totals.
    default: Required.
    type: list<number>
layer: rule
alias_of: selected-stretch
alias_bind:
  cells: cells
  selection: '"balanced"'
  sum: "0"
  count: absent(|{}|)
  sums: sums
  crusts: absent(⟨d:d∈𝔄⟩)
  endpointOccurrences: '"none"'
---

# Doll Sum

For each listed total, two digits sum to that total and all digits strictly between them also sum to it.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| sums | `list<number>` | The permitted or required totals. | Required. |

## Definition

Block: [selected-stretch](selected-stretch.md) — `cells=cells; selection="balanced"; sum=0; count=absent(|{}|); sums=sums; crusts=absent(⟨d:d∈𝔄⟩); endpointOccurrences="none"`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



For every listed sum, there are two positions whose endpoint digits sum to it. The digits strictly between those positions also sum to it.

## Example

````markdown
---
format: open-rules
title: Doll Sum example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
doll-sum r1c1-r1c2-r1c3 sums [5]
```
````

Satisfies the rule: r1c1=2, r1c2=5, r1c3=3. The end digits total 5, matching the digit between them.

Breaks the rule: r1c1=2, r1c2=4, r1c3=3. The digit between the ends differs from their total.

---
name: Minmax Cages
url: https://rules.sudoku-sleuth.com/minmax-cages.md
kind: minmax-cages
shape: Cages
aliases: ["Minmax killer cage", "Minmax total"]
parameters:
  cells:
    type: set<cell>
    description: The nonempty cage.
    default: Required.
  total:
    type: number
    description: The sum of the smallest and largest digits.
    default: Required.
layer: rule
---

# Minmax Cages

Digits in a cage are distinct. The smallest digit plus the largest digit equals the clue. A one-cell cage counts its digit twice.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The nonempty cage. | Required. |
| total | `number` | The sum of the smallest and largest digits. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
|cells|>0 ∧ allDifferent(cells,λc:cell:D(c)) ∧ minimumDigit({D(c):c∈cells})+maximumDigit({D(c):c∈cells})=total
```

## Example

````markdown
---
format: open-rules
title: Minmax Cages example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
minmax-cages cells ["r1c1","r1c2","r1c3"] total 9
```
````

Satisfies the rule: r1c1=1, r1c2=3, r1c3=8. The extrema sum to nine.

Breaks the rule: r1c1=1, r1c2=3, r1c3=7. The extrema sum to eight.

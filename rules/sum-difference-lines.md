---
name: Sum/Difference Lines
url: https://rules.sudoku-sleuth.com/sum-difference-lines.md
kind: sum-difference-lines
shape: Lines
aliases: ["Sum/difference line"]
parameters:
  cells:
    type: path<cell>
    description: Interior cells only, in order.
    default: Required.
  bulbs:
    type: list<cell>
    description: The two endpoint circles.
    default: Required.
layer: rule
---

# Sum/Difference Lines

One circled endpoint gives the sum of the interior digits. The other gives the largest interior digit minus the smallest. Choose the roles independently for each line, including when lines share an endpoint.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `path<cell>` | Interior cells only, in order. | Required. |
| bulbs | `list<cell>` | The two endpoint circles. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
|cells|>0 ∧ |bulbs|=2 ∧ let s=aggregate(cells,"D","sum"); let d=maximumDigit({D(c):c∈cells})-minimumDigit({D(c):c∈cells}); (D(bulbs[0])=s ∧ D(bulbs[1])=d) ∨ (D(bulbs[1])=s ∧ D(bulbs[0])=d)
```

## Example

````markdown
---
format: open-rules
title: Sum/Difference Lines example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
sum-difference-lines cells ["r1c2","r1c3","r1c4"] bulbs ["r1c1","r1c5"]
```
````

Satisfies the rule: r1c1=8, r1c2=1, r1c3=5, r1c4=2, r1c5=4. The interior sums to eight and spans four.

Breaks the rule: r1c1=8, r1c2=1, r1c3=5, r1c4=2, r1c5=3. The range is four, not three.

---
name: Sum Free Cage
url: https://rules.sudoku-sleuth.com/sum-free-cage.md
kind: sum-free-cage
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  modulus:
    description: The divisor used to take remainders.
    default: Required. modulus ≥ 1.
    type: position
---

# Sum Free Cage

Cage digits are different. Adding any two cage digits, including a digit to itself, and taking the stated remainder never produces another cage digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| modulus | The divisor used to take remainders. | Required. modulus ≥ 1. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
modulus>=1 ∧ distinct_D(cells) ∧ ∀a,b,c∈cells: rem(D(a)+D(b),modulus)!=D(c)
```

Digits are distinct. For every pair of digits a,b in the cage (including a=b), normalised (a+b) modulo modulus is absent from its digit set.

## Example

````markdown
---
format: open-rules
title: Sum Free Cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
sum-free-cage r1c1-r1c2 modulus 10
```
````

Satisfies the rule: r1c1=1, r1c2=3. Adding cage digits never gives a cage digit modulo 10.

Breaks the rule: r1c1=1, r1c2=2. 1 plus 1 gives the cage digit 2.

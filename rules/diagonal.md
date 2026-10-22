---
name: Diagonal
url: https://rules.sudoku-sleuth.com/diagonal.md
kind: diagonal
parameters:
  direction:
    description: The chosen diagonal or neighbour orientation, as named in the definition.
    default: Required.
    type: enum{main,anti}
---

# Diagonal

Digits on the stated main or opposite diagonal are different.

Here `direction "anti"` selects the top-right to bottom-left diagonal and still forbids repeats. It does not mean the variant called anti-diagonal, which limits the number of distinct digits. Declare both directions separately when both diagonals must be unique.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| direction | The chosen diagonal or neighbour orientation, as named in the definition. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
distinct_D(diagonal(direction))
```

All D digits on the chosen main diagonal are distinct. main runs top-left to bottom-right; anti runs top-right to bottom-left for min(rows,cols) cells.

## Example

````markdown
---
format: open-rules
title: Diagonal example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
diagonal direction "main"
```
````

Satisfies the rule: r1c1=1, r2c2=2, r3c3=3, r4c4=4, r5c5=5, r6c6=6, r7c7=7, r8c8=8, r9c9=9. The main diagonal contains nine different digits.

Breaks the rule: r1c1=1, r2c2=1, r3c3=3, r4c4=4, r5c5=5, r6c6=6, r7c7=7, r8c8=8, r9c9=9. The main diagonal repeats a digit.

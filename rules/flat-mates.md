---
name: Flat Mates
url: https://rules.sudoku-sleuth.com/flat-mates.md
kind: flat-mates
parameters:
  digit:
    description: The specified digit.
    default: Required.
    type: digit
  above:
    description: The digit immediately above the marked digit.
    default: Required.
    type: digit
  below:
    description: The digit immediately below the marked digit.
    default: Required.
    type: digit
---

# Flat Mates

Every occurrence of the marked digit has the stated above digit immediately above it, or the stated below digit immediately below it.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| digit | The specified digit. | Required. |
| above | The digit immediately above the marked digit. | Required. |
| below | The digit immediately below the marked digit. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀c ∈ C: D(c)=digit → ∃a ∈ C: (aboveCell(a,c) ∧ D(a)=above) ∨ (aboveCell(c,a) ∧ D(a)=below)
```

Every occurrence of digit has above immediately above it or below immediately below it (or both). An out-of-board neighbour cannot satisfy the condition.

## Example

````markdown
---
format: open-rules
title: Flat Mates example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```
````

Satisfies the rule: r1c1=1, r2c1=5, r3c1=1. The marked 5 has the required 1 directly above it.

Breaks the rule: r1c1=5, r2c1=1, r3c1=1. The marked 5 is on the top edge and lacks its required neighbour below.

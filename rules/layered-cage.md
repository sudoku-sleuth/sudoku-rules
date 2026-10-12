---
name: Layered Cage
url: https://rules.sudoku-sleuth.com/layered-cage.md
kind: layered-cage
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  upper:
    description: The digits treated as the upper layer.
    default: Required.
    type: set<digit>
---

# Layered Cage

Each occupied row of the cage contains only upper digits or only other digits. Every upper row is above every other row.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| upper | The digits treated as the upper layer. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀a,b ∈ cells:
  (row(a)=row(b) → ((D(a)∈upper) ↔ (D(b)∈upper)))
  ∧ (D(a)∈upper ∧ D(b)∉upper → row(a)<row(b))
```

Each occupied row of cells contains only upper digits or only non-upper digits. Every upper row precedes every non-upper row from top to bottom. Sums and distinctness belong to a separate cage rule.

## Example

````markdown
---
format: open-rules
title: Layered Cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
layered-cage r1c1-r2c1 upper [2,4,6,8]
```
````

Satisfies the rule: r1c1=2, r2c1=1. The upper digit is above the other layer.

Breaks the rule: r1c1=1, r2c1=2. The upper digit is below the other layer.

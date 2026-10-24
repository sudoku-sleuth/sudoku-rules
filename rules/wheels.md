---
name: Wheels
url: https://rules.sudoku-sleuth.com/wheels.md
kind: wheels
shape: Cells
aliases: ["Rotating digit wheel", "Wheel in fixed circular order"]
parameters:
  cells:
    type: list<cell>
    description: Four touched cells in clockwise order from the top.
    default: Required.
  digits:
    type: list<digit>
    description: Four wheel labels in the same clockwise order.
    default: Required.
layer: rule
---

# Wheels

The four cells contain the wheel digits in the given circular order. Rotate the wheel by any number of quarter turns to fit the cells. Reflection is not allowed.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `list<cell>` | Four touched cells in clockwise order from the top. | Required. |
| digits | `list<digit>` | Four wheel labels in the same clockwise order. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
|cells|=4 ∧ |digits|=4 ∧ (∃k∈[0,4):∀i∈[0,4):0<=rem(i+k,4)<|digits| ∧ D(cells[i])=digits[rem(i+k,4)])
```

## Example

````markdown
---
format: open-rules
title: Wheels example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
wheels cells ["r1c1","r1c2","r2c2","r2c1"] digits [1,2,3,4]
```
````

Satisfies the rule: r1c1=2, r1c2=3, r2c2=4, r2c1=1. This is a rotation.

Breaks the rule: r1c1=1, r1c2=4, r2c2=3, r2c1=2. This reflects the order.

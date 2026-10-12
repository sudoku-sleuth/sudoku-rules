---
name: Clone
url: https://rules.sudoku-sleuth.com/clone.md
kind: clone
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
---

# Clone

All listed cells contain the same digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀a,b ∈ cells: D(a)=D(b)
```

Every cell in the group contains the same digit.

## Example

````markdown
---
format: open-rules
title: Clone example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
clone r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=1. Both cells contain 1.

Breaks the rule: r1c1=1, r1c2=2. The cells contain different digits.

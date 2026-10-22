---
name: Yin Yang
url: https://rules.sudoku-sleuth.com/yin-yang.md
kind: yin-yang
parameters: {}
---

# Yin Yang

Shade the board so each colour forms one connected group and every 2×2 contains both colours.

## Parameters

No parameters. It applies to the whole declared board and uses the shared shading answer.

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
connectedCells({c ∈ C: shaded(c)}) ∧ connectedCells({c ∈ C: ¬shaded(c)})
∧ ∀r ∈ [0,rows−1): ∀k ∈ [0,cols−1):
  (∃a ∈ window2(r,k): shaded(a)) ∧ (∃b ∈ window2(r,k): ¬shaded(b))
```

Both colours are nonempty and orthogonally connected; every 2×2 contains both colours.
This is a general authoring-library rule over the one typed shading answer, rather than a newly recognised decoded constraint.

## Example

````markdown
---
format: open-rules
title: Yin Yang example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 2
  cols: 2
  symbols:
    - 1
    - 2
    - 3
    - 4
---

```rules
yin-yang
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c1=3, r2c2=4; shaded cells r1c1-r1c2. Each colour forms one connected row.

Breaks the rule: r1c1=1, r1c2=2, r2c1=3, r2c2=4; shaded cells r1c1-r2c2. Each colour is separated diagonally.

---
name: Anti King
url: https://rules.sudoku-sleuth.com/anti-king.md
kind: anti-king
parameters: {}
---

# Anti King

Cells a chess king move apart contain different digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀a,b ∈ C: king(a,b) → D(a)≠D(b)
```

For every distinct pair at Chebyshev distance 1: their digits differ.

## Example

````markdown
---
format: open-rules
title: Anti King example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
```
````

Satisfies the rule: r1c1=1, r2c2=5. The cells share a corner and contain different digits.

Breaks the rule: r1c1=1, r2c2=1. A king-related pair repeats a digit.

---
name: Anti King
url: https://rules.sudoku-sleuth.com/anti-king.md
kind: anti-king
parameters: {}
alias_of: scoped-move
alias_bind:
  move: '"king"'
  relation: '"same"'
  digits: 𝔄
  scope: C
  channel: '"D"'
---

# Anti King

Cells a chess king move apart contain different digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |

## Maths

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a shorthand for [scoped-move](scoped-move.md). Its header binds the canonical parameters; its own parameters retain the defaults listed above.

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

---
name: Anti Knight
url: https://rules.sudoku-sleuth.com/anti-knight.md
kind: anti-knight
parameters: {}
alias_of: scoped-move
alias_bind:
  move: '"knight"'
  relation: '"same"'
  digits: 𝔄
  scope: C
  channel: '"D"'
---

# Anti Knight

Cells a chess knight move apart contain different digits.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |

## Maths

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

This is a shorthand for [scoped-move](scoped-move.md). Its header binds the canonical parameters; its own parameters retain the defaults listed above.

For every in-board pair separated by (±1,±2) or (±2,±1): their digits differ.

## Example

````markdown
---
format: open-rules
title: Anti Knight example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
```
````

Satisfies the rule: r1c1=1, r2c3=6. The cells are a knight move apart and contain different digits.

Breaks the rule: r1c1=1, r2c3=1. A knight-related pair repeats a digit.

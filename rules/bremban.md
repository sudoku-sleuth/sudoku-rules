---
name: Bremban
url: https://rules.sudoku-sleuth.com/bremban.md
kind: bremban
parameters:
  line:
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
---

# Bremban

The different digits on the line form a consecutive run. Digits may repeat where the other rules allow it.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|line|>0 ∧ max_D(line)-min_D(line)+1=|faceDigits(line)|
```

The set of distinct D values is an integer interval: max(D)−min(D)+1 equals the number of distinct digits. Repeats remain subject to other rules.

## Example

````markdown
---
format: open-rules
title: Bremban example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
bremban r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=1. The different digits are 1 and 2, a consecutive run.

Breaks the rule: r1c1=1, r1c2=3, r1c3=1. The different digits 1 and 3 miss 2.

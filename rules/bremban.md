---
name: Bremban
url: https://rules.sudoku-sleuth.com/bremban.md
kind: bremban
parameters:
  line:
    description: The marked cells; order does not affect the consecutive set.
    default: Required.
    type: path<cell>
---

# Bremban

The distinct digits in the marked cells form a consecutive run, in any order. Digits may repeat where the other rules allow it. This is Renban without its no-repeat condition.

The marked cells can also be a cage. Declare its sum separately with [Cage](https://rules.sudoku-sleuth.com/cage.md), using `repeats true` when repetitions are allowed.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The marked cells; order does not affect the consecutive set. | Required. |

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
bremban r1c3-r1c4-r2c4
```
````

Satisfies the rule: r1c3=1, r1c4=2, r2c4=1. The different digits are 1 and 2, a consecutive run.

Breaks the rule: r1c3=1, r1c4=3, r2c4=1. The different digits 1 and 3 miss 2.

### A consecutive cage with repeats

```rules
cage r1c3-r1c4-r2c4 total 7 repeats true
bremban r1c3-r1c4-r2c4
```

Satisfies both rules: 2, 3, 2 totals 7, and its distinct digits are the consecutive set {2,3}. Breaks Bremban while satisfying the cage sum: 1, 5, 1 totals 7, but {1,5} has gaps.

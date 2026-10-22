---
name: Bremban
url: https://rules.sudoku-sleuth.com/bremban.md
kind: bremban
parameters:
  line:
    description: The marked cells; order does not affect the consecutive set.
    default: Required.
    type: path<cell>
    empty_when: edges
  edges:
    type: optional<list<list<cell>>>
    description: The edges of a connected network.
    default: Absent; use the listed cells.
  selection:
    type: optional<PrefixSelection>
    description: A stopping prefix of the ordered list.
    default: Absent; use the whole cell set.
alias_of: renban
alias_bind:
  line: line
  edges: edges
  channel: '"D"'
  repeats: "true"
  selection: selection
---

# Bremban

The distinct digits in the marked cells form a consecutive run, in any order. Digits may repeat where the other rules allow it. This is Renban without its no-repeat condition.

The marked cells can also be a cage. Declare its sum separately with [Cage](https://rules.sudoku-sleuth.com/cage.md), using `repeats true` when repetitions are allowed.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| edges | Explicit connected network. | Absent; use the listed cells. |
| selection | A stopping prefix. | Absent; use the whole cell set. |
| line | The marked cells; order does not affect the consecutive set. | Required. |

## Maths

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

Bremban binds [Renban](renban.md) to printed digits with repeats allowed. Its header supplies the canonical parameters.

The distinct printed digits form one consecutive run; repeats are allowed.

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

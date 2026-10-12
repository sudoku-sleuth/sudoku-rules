---
name: N Mate
url: https://rules.sudoku-sleuth.com/n-mate.md
kind: n-mate
parameters:
  cell:
    description: The clue cell.
    default: Required.
    type: cell
  ray:
    description: The cells along the ray, nearest first.
    default: Required.
    type: list<cell>
  cage:
    description: The cells in the cage.
    default: Required.
    type: set<cell>
---

# N Mate

Count along the ray by the clue digit. That target digit plus the clue equals the cage total. Cage digits are different.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cell | The clue cell. | Required. |
| ray | The cells along the ray, nearest first. | Required. |
| cage | The cells in the cage. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
let n=D(cell); 1<=n<=|ray| ∧ n+D(ray[n-1])=sum_D(cage) ∧ distinct_D(cage)
```

The marked digit names a one-based position within ray. The marked and target digits sum to the cage total. Cage digits are distinct.

## Example

````markdown
---
format: open-rules
title: N Mate example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
n-mate cell "r1c1" ray ["r1c2","r1c3"] cage ["r1c4"]
```
````

Satisfies the rule: r1c4=3, r1c1=1, r1c2=2, r1c3=4. The clue and its selected ray digit add up to the cage total.

Breaks the rule: r1c4=4, r1c1=1, r1c2=2, r1c3=4. The selected ray digit gives the wrong total.

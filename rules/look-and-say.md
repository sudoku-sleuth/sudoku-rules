---
name: Look And Say
url: https://rules.sudoku-sleuth.com/look-and-say.md
kind: look-and-say
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  counts:
    type: list<record{digit:digit,count:position}>
    description: Each digit and the exact number of times it must appear.
    default: Required.
---

# Look And Say

Each listed digit occurs exactly the stated number of times in the marked cells.

The marked cells may be a cage, a diagonal or another stated group. Read a printed clue as count–digit pairs: 1432 means one 4 and three 2s, written `counts [{"digit":4,"count":1},{"digit":2,"count":3}]`. Unlisted digits may appear. The clue imposes no sum or general no-repeat condition. An empty `counts` list imposes no restriction.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| counts | Each digit and the exact number of times it must appear. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀p∈counts: countWhere(cells,λc:cell: D(c)=p.digit)=p.count
```

For each {digit,count}, that digit occurs in exactly count cells. Unlisted digits are unconstrained.

## Example

````markdown
---
format: open-rules
title: Look And Say example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
look-and-say r1c1-r1c2 counts [{"digit":1,"count":1}]
```
````

Satisfies the rule: r1c1=1, r1c2=2. Digit 1 appears exactly once.

Breaks the rule: r1c1=1, r1c2=1. Digit 1 appears a different number of times.

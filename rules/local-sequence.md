---
name: Local Sequence
url: https://rules.sudoku-sleuth.com/local-sequence.md
kind: local-sequence
shape: Lines
parameters:
  line:
    type: path<cell>
    description: The ordered cells.
    default: Required.
  mode:
    type: enum{transitions,divisors,recurrence}
    description: Allowed directed pairs, successive divisibility, or a two-term linear recurrence.
    default: Required.
  allowed:
    type: list<list<number>>
    description: Allowed ordered number pairs.
    default: Empty list.
  a:
    type: number
    description: Coefficient of the earlier recurrence term.
    default: "1."
  b:
    type: number
    description: Coefficient of the later recurrence term.
    default: "1."
  loop:
    type: boolean
    description: Include the closing transition; recurrence uses an open line.
    default: false.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
layer: block
composition: Explicit transition tables, divisibility and linear recurrences.
---

# Local Sequence

Successive numbers follow the chosen sequence. Transitions use explicit ordered pairs. Divisors requires each number to be a nonzero integer divisor of the next. Recurrence requires each number after the first two to equal `a` times the earlier number plus `b` times the later one. A closed sequence has at least three cells. A one- or two-cell recurrence has no three-cell condition.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| line | `path<cell>` | The ordered cells. | Required. |
| mode | `enum{transitions,divisors,recurrence}` | Allowed directed pairs, successive divisibility, or a two-term linear recurrence. | Required. |
| allowed | `list<list<number>>` | Allowed ordered number pairs. | Empty list. |
| a | `number` | Coefficient of the earlier recurrence term. | 1. |
| b | `number` | Coefficient of the later recurrence term. | 1. |
| loop | `boolean` | Include the closing transition; recurrence uses an open line. | false. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(((((|line| > 0) and (loop implies (|line| >= 3))) and ((mode = "recurrence") implies not(loop))) and ((mode = "transitions") implies forall p∈allowed: (|p| = 2))) and if (mode = "recurrence") then forall i∈[0,(|line| - 2)): (read(line[(i + 2)],channel) = ((a * read(line[i],channel)) + (b * read(line[(i + 1)],channel)))) else forall i,j∈[0,|line|): (next(line,i,j,loop) implies if (mode = "divisors") then divides(read(line[i],channel),read(line[j],channel)) else transitionAllowed(read(line[i],channel),read(line[j],channel),allowed)))
```

## Example

````markdown
---
format: open-rules
title: Local Sequence example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
local-sequence r1c1-r1c2-r1c3 mode "recurrence"
```
````

Satisfies the rule: Digits 2,3,5 obey 2+3=5.

Breaks the rule: Digits 2,3,6 fail the recurrence.

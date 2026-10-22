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
    default: '1.'
  b:
    type: number
    description: Coefficient of the later recurrence term.
    default: '1.'
  loop:
    type: boolean
    description: Include the closing transition; recurrence uses an open line.
    default: false.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
---

# Local Sequence

Successive numbers follow the chosen sequence. Transitions use explicit ordered pairs. Divisors requires each number to be a nonzero integer divisor of the next. Recurrence requires each number after the first two to equal `a` times the earlier number plus `b` times the later one. A closed sequence has at least three cells. A one- or two-cell recurrence has no three-cell condition.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The ordered cells. | Required. |
| mode | Allowed directed pairs, successive divisibility, or a two-term linear recurrence. | Required. |
| allowed | Allowed ordered number pairs. | Empty list. |
| a | Coefficient of the earlier recurrence term. | 1. |
| b | Coefficient of the later recurrence term. | 1. |
| loop | Include the closing transition; recurrence uses an open line. | false. |
| channel | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
sequenceMeaning(line,channel,mode,allowed,a,b,loop)
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

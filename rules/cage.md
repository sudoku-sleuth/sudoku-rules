---
name: Killer cage
url: https://rules.sudoku-sleuth.com/cage.md
kind: cage
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  total:
    description: The total the digits or values must add up to.
    default: No total imposed.
    type: optional<number>
  repeats:
    description: Whether repeated digits are allowed.
    default: false (distinct digits).
    type: boolean
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: V.
---

# Killer cage

Cage digits add up to the stated total value. Digits are different unless repeats are allowed. A cage without a total supplies the repeat rule alone.

Omit `total` for a cage with no printed sum. A blank clue is not a total of zero. Use `total 0` only when zero is the required total. With `repeats true` and no total, this declaration adds no restriction.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| total | The total the digits or values must add up to. | No total imposed. |
| repeats | Whether repeated digits are allowed. | false (distinct digits). |
| channel | Read printed digits (D) or effective values (V). | V. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(¬repeats → distinct_D(cells)) ∧ (present(total) → aggregate(cells,channel,"sum")=unwrap(total))
```

Face digits differ unless repeats are allowed. The selected channel supplies the optional total.

## Example

````markdown
---
format: open-rules
title: Killer cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r1c1-r1c2 total 3
```
````

Satisfies the rule: r1c1=1, r1c2=2. The different digits 1 and 2 total 3.

Breaks the rule: r1c1=1, r1c2=3. The digits 1 and 3 total 4 instead of 3.

---
name: Numbered Room
url: https://rules.sudoku-sleuth.com/numbered-room.md
kind: numbered-room
parameters:
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: list<cell>
  digit:
    description: The specified digit.
    default: Required.
    type: digit
---

# Numbered Room

Count from the clue by the first digit. The cell reached contains the stated digit.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| digit | The specified digit. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
|cells|>0 ∧ lookupEquals(cells,D(cells[0]),digit,"D")
```

The first digit selects a bounded one-based position containing the clue digit.

## Example

````markdown
---
format: open-rules
title: Numbered Room example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
numbered-room r1c1-r1c2-r1c3 digit 3
```
````

Satisfies the rule: r1c1=2, r1c2=3, r1c3=1. The first digit 2 selects a cell containing the required 3.

Breaks the rule: r1c1=2, r1c2=4, r1c3=1. The selected cell contains 4 instead of 3.

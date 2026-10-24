---
name: Bipolar Quadruples
url: https://rules.sudoku-sleuth.com/bipolar-quadruples.md
kind: bipolar-quadruples
shape: Cells
aliases: ["Bipolar quadruple"]
parameters:
  cells:
    type: set<cell>
    description: The four cells around the clue.
    default: Required.
  digits:
    type: list<digit>
    description: Distinct listed clue digits; exactly half must occur.
    default: Required.
layer: rule
---

# Bipolar Quadruples

Exactly half of the listed digits occur among the four surrounding cells. The other listed digits are absent. Repeated occurrences of a digit count only once.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | The four cells around the clue. | Required. |
| digits | `list<digit>` | Distinct listed clue digits; exactly half must occur. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
|cells|=4 ∧ |digits|>0 ∧ |digits| mod 2=0 ∧ allDifferent(digits,λd:digit:d) ∧ 2*countWhere(digits,λd:digit:∃c∈cells:D(c)=d)=|digits|
```

## Example

````markdown
---
format: open-rules
title: Bipolar Quadruples example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
bipolar-quadruples cells ["r1c1","r1c2","r2c1","r2c2"] digits [1,2,3,4]
```
````

Satisfies the rule: r1c1=1, r1c2=1, r2c1=2, r2c2=5. Only the listed digits one and two occur.

Breaks the rule: r1c1=1, r1c2=2, r2c1=3, r2c2=5. Three listed digits occur.

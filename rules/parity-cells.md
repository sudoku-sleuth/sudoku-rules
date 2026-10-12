---
name: Parity Cells
url: https://rules.sudoku-sleuth.com/parity-cells.md
kind: parity-cells
parameters:
  parity:
    description: "The required parity: odd or even."
    default: Required.
    type: enum{odd,even}
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
---

# Parity Cells

Values in the marked cells have the stated parity: odd or even.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| parity | The required parity: odd or even. | Required. |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀c∈cells: ⌊V(c)⌋=V(c) ∧ (parity="odd" → odd(V(c))) ∧ (parity="even" → rem(V(c),2)=0)
```

Every V value has parity named by parity: odd has absolute remainder 1, even remainder 0 modulo 2.

## Example

````markdown
---
format: open-rules
title: Parity Cells example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
parity-cells r1c1-r1c2 parity "odd"
```
````

Satisfies the rule: r1c1=1, r1c2=3. Both marked digits are odd.

Breaks the rule: r1c1=1, r1c2=2. A marked cell contains the even digit 2.

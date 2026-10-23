---
name: Molecules
url: https://rules.sudoku-sleuth.com/molecules.md
kind: molecules
parameters:
  atoms:
    description: The electron cells touching each atom, one list per atom.
    default: Required.
    type: list<set<cell>>
  sum:
    description: The total the digits or values must add up to.
    default: Required.
    type: number
  electronMax:
    description: Every digit at or below this number must be an electron.
    default: Required.
    type: digit
layer: rule
---

# Molecules

Electron digits around each atom add up to its stated total. All cells at or below the electron threshold are electrons; higher digits may also be chosen. Touching atoms share the same electron choices.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| atoms | `list<set<cell>>` | The electron cells touching each atom, one list per atom. | Required. |
| sum | `number` | The total the digits or values must add up to. | Required. |
| electronMax | `digit` | Every digit at or below this number must be an electron. | Required. |

## Maths

Class: **existential**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∃E:set<cell>: E⊆allCells(atoms)
  ∧ (∀c∈allCells(atoms): D(c)<=electronMax → c∈E)
  ∧ (∀A∈atoms: aggregate(A∩E,"D","sum")=sum)
```

There is one Boolean electron choice per cell shared by every atom touching it. Cells with D(c) ≤ electronMax are electrons. Each atom’s electron digits sum to sum; higher digits may be electrons or not.

## Example

````markdown
---
format: open-rules
title: Molecules example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
molecules atoms [["r1c1","r1c2"]] sum 3 electronMax 2
```
````

Satisfies the rule: r1c1=1, r1c2=2. Electron digits 1 and 2 total 3.

Breaks the rule: r1c1=2, r1c2=2. The two required electron digits 2 total 4.

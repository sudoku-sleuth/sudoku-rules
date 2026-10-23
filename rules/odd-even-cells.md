---
name: Odd Even Cells
url: https://rules.sudoku-sleuth.com/odd-even-cells.md
kind: odd-even-cells
aliases: ["odd/even cells", "parity cells", "odd and even digits"]
parameters:
  parity:
    description: "The required parity: odd or even."
    default: Required.
    type: enum{odd,even}
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
layer: rule
alias_of: class-pattern
alias_bind:
  line: orderedCells(cells)
  edges: absent(⟨orderedCells(C):n∈[0,0)⟩)
  loop: "false"
  classification: '"residue"'
  modulus: "2"
  length: "2"
  geometry: '"cells"'
  mode: '"same"'
  fixedClass: some(if parity="odd" then |{0}| else |{}|)
  channel: '"V"'
---

# Odd Even Cells

Values in the marked cells have the stated parity: odd or even.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| parity | `enum{odd,even}` | The required parity: odd or even. | Required. |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Definition

Block: [class-pattern](class-pattern.md) — `line=orderedCells(cells); edges=absent(⟨orderedCells(C):n∈[0,0)⟩); loop=false; classification="residue"; modulus=2; length=2; geometry="cells"; mode="same"; fixedClass=some(if parity="odd" then |{0}| else |{}|); channel="V"`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.



Every V value has parity named by parity: odd has absolute remainder 1, even remainder 0 modulo 2.

## Example

````markdown
---
format: open-rules
title: Odd Even Cells example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
odd-even-cells r1c1-r1c2 parity "odd"
```
````

Satisfies the rule: r1c1=1, r1c2=3. Both marked digits are odd.

Breaks the rule: r1c1=1, r1c2=2. A marked cell contains the even digit 2.

---
name: Symbol House
url: https://rules.sudoku-sleuth.com/symbol-house.md
kind: symbol-house
shape: Regions
parameters:
  name:
    type: string
    description: "Symbol channel name; D reads one face digit per cell."
    default: '"D".'
  houses:
    type: list<set<cell>>
    description: "Groups whose symbol multiplicities are constrained."
    default: "Required."
  digits:
    type: list<digit>
    description: "Distinct symbols to count."
    default: "Required."
  counts:
    type: list<position>
    description: "Exact counts in the same order as digits."
    default: "Required."
---

# Symbol House

Each supplied house has exactly the stated multiplicity of each listed symbol across all entries of its cells in a shared symbol channel. No other symbol is allowed there. Zero counts express missing symbols; counts above one express repeated symbols. Houses are sets of cells; multiple entries within a cell count separately. The default name `D` counts the face digits, once per cell. Use Cell Entries to set the per-cell symbol domain and relationship to D.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | Symbol channel name; D reads one face digit per cell. | "D". |
| houses | Groups whose symbol multiplicities are constrained. | Required. |
| digits | Distinct symbols to count. | Required. |
| counts | Exact counts in the same order as digits. | Required. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
|digits|=|counts| ∧ distinctAt(digits,λd:digit:d) ∧ (∀d∈digits:d∈𝔄) ∧ (∀n∈counts:n>=0) ∧ ∀G∈houses: (∀c∈G:∀d∈cellSymbols(name,c):d∈digits) ∧ (∀i∈[0,|digits|): 0<=i ∧ i<|counts| ∧ (Σ_{c∈G}symbolFrequency(cellSymbols(name,c),digits[i]))=counts[i])
```

## Example

````markdown
---
format: open-rules
title: Symbol House example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cell-entries name "pencil" scope ["r1c1","r1c2"] minimum 0 maximum 3
symbol-house name "pencil" houses [["r1c1","r1c2"]] digits [1,2,3] counts [2,1,0]
```
````

Satisfies the rule: Entries [1,2] in r1c1 and [1] in r1c2.

Breaks the rule: Entries [1,2] and [3] include the forbidden symbol 3.

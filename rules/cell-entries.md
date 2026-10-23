---
name: Cell Entries
url: https://rules.sudoku-sleuth.com/cell-entries.md
kind: cell-entries
shape: Cells
parameters:
  name:
    shared:
      role: construct
      type: symbol
    type: string
    description: Shared symbol channel name.
    default: Required.
  scope:
    type: set<cell>
    description: Cells whose entries are constrained.
    default: Required.
  minimum:
    type: position
    description: Minimum entries per cell.
    default: "1."
  maximum:
    type: position
    description: Maximum entries per cell.
    default: "1."
  distinct:
    type: boolean
    description: Require distinct symbols within each cell.
    default: true.
  faceMode:
    type: enum{independent,sum,first}
    description: Relationship to the face digit D.
    default: independent.
layer: block
composition: Shared symbol lists with configurable size and multiplicity.
---

# Cell Entries

Give every cell in scope a list of symbols from the board alphabet, with the stated size bounds and repeat policy. The names `D` and `V` are reserved for face digits and effective values and cannot be written. These are additional solution entries, read through symbolAnswer(name,c); they do not replace D. Optionally equate D to their sum or first entry. First-entry mode requires a nonempty list even when minimum is zero. Lists preserve order and repeated symbols; cells outside scope are unconstrained by this declaration.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| name | `string` | Shared symbol channel name. | Required. |
| scope | `set<cell>` | Cells whose entries are constrained. | Required. |
| minimum | `position` | Minimum entries per cell. | 1. |
| maximum | `position` | Maximum entries per cell. | 1. |
| distinct | `boolean` | Require distinct symbols within each cell. | true. |
| faceMode | `enum{independent,sum,first}` | Relationship to the face digit D. | independent. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
name!="D" ∧ name!="V" ∧ minimum>=0 ∧ maximum>=minimum ∧ ∀c∈scope: let xs=symbolAnswer(name,c); minimum<=|xs| ∧ |xs|<=maximum ∧ (∀d∈xs:d∈𝔄) ∧ (distinct → allDifferent(xs,λd:digit:d)) ∧ (faceMode="sum" → D(c)=Σ_{d∈xs}d) ∧ (faceMode="first" → |xs|>0 ∧ D(c)=xs[0])
```

## Example

````markdown
---
format: open-rules
title: Cell Entries example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cell-entries name "pencil" scope ["r1c1"] minimum 2 maximum 2 faceMode "sum"
```
````

Satisfies the rule: r1c1 has entries [1,2] and face digit 3.

Breaks the rule: r1c1 has entries [1,1]; the default repeat policy rejects them.

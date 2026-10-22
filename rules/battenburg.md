---
name: Battenburg
url: https://rules.sudoku-sleuth.com/battenburg.md
kind: battenburg
shape: Global
parameters:
  marks:
    type: list<record{r:position,k:position}>
    description: "Zero-based top-left coordinates of marked squares."
    default: "Required."
  scope:
    type: set<cell>
    description: "Cells on which squares may lie."
    default: "Required."
  mode:
    type: enum{parity,selection}
    description: "The two-class source."
    default: "parity."
  selectionRef:
    shared: {role: read, type: selection}
    type: string
    description: "Selection name used in selection mode."
    default: '"H".'
  positive:
    type: boolean
    description: Require marked squares to alternate.
    default: true.
  exhaustive:
    type: boolean
    description: "Forbid the pattern on unmarked squares inside scope."
    default: "false."
---

# Battenburg

By default, every marked 2×2 square alternates between two classes across each edge, with equal classes on diagonals. Use face-digit parity or a shared selection. Exhaustive mode also forbids this pattern in unmarked squares wholly inside scope. Set `positive false` for marks that impose no positive condition. Every supplied mark must identify a complete square inside scope.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| marks | Zero-based top-left coordinates of marked squares. | Required. |
| scope | Cells on which squares may lie. | Required. |
| mode | The two-class source. | parity. |
| selectionRef | Selection name used in selection mode. | "H". |
| positive | Require marked squares to alternate. | true. |
| exhaustive | Forbid the pattern on unmarked squares inside scope. | false. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(∀m∈marks:0<=m.r ∧ m.r<rows-1 ∧ 0<=m.k ∧ m.k<cols-1 ∧ window2(m.r,m.k)⊆scope) ∧ ∀r∈[0,rows-1): ∀k∈[0,cols-1): window2(r,k)⊆scope → let pattern=alternatingSquare(r,k,λc:cell:if mode="parity" then odd(D(c)) else marked(selectionRef,c)); let shown=∃m∈marks:m.r=r ∧ m.k=k; (positive ∧ shown → pattern) ∧ (exhaustive ∧ ¬shown → ¬pattern)
```

## Example

````markdown
---
format: open-rules
title: Battenburg example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
battenburg marks [{"r":0,"k":0}] scope ["r1c1","r1c2","r2c1","r2c2"]
```
````

Satisfies the rule: Rows 1,2 and 4,3 alternate odd and even.

Breaks the rule: Rows 1,3 and 2,4 put equal parities together.

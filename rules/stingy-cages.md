---
name: Stingy Cages
url: https://rules.sudoku-sleuth.com/stingy-cages.md
kind: stingy-cages
shape: Cages
aliases:
- Stingy intersections
parameters:
  groups:
    type: list<set<cell>>
    description: All cage cell sets to compare.
    default: Required.
layer: rule
alias_of: profile-relation
alias_bind:
  left: orderedCells({})
  right: orderedCells({})
  multiset: 'false'
  channel: '"D"'
  groups: some(⟨orderedCells(g):g∈groups⟩)
  maximumShared: some(|{0}|)
---

# Stingy Cages

Any two different cages share at most one face digit. Repeated copies of a digit count once when comparing cages. Declare cage totals and within-cage distinctness separately.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| groups | `list<set<cell>>` | All cage cell sets to compare. | Required. |

## Definition

Block: [profile-relation](profile-relation.md) — `left=orderedCells({}); right=orderedCells({}); multiset=false; channel="D"; groups=some(⟨orderedCells(g):g∈groups⟩); maximumShared=some(|{0}|)`.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

## Example

````markdown
---
format: open-rules
title: Stingy Cages example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
stingy-cages groups [["r1c1","r1c2"],["r2c1","r2c2"]]
```
````

Satisfies the rule: r1c1=1, r1c2=3, r2c1=3, r2c2=5. Only 3 is shared.

Breaks the rule: r1c1=1, r1c2=3, r2c1=3, r2c2=1. Both 1 and 3 are shared.

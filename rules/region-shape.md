---
name: Region Shape
url: https://rules.sudoku-sleuth.com/region-shape.md
kind: region-shape
shape: Regions
parameters:
  name:
    type: string
    description: The shared region collection name.
    default: Required.
  shapes:
    type: list<set<cell>>
    description: Allowed template shapes.
    default: Empty list; no template condition.
  rotations:
    type: boolean
    description: Allow quarter-turn rotations of templates.
    default: true.
  reflections:
    type: boolean
    description: Allow reflected templates.
    default: true.
  uses:
    type: optional<list<position>>
    description: Exact number of regions congruent to each template, in order.
    default: Absent; templates may be reused.
  centres:
    type: optional<list<RegionCentre>>
    description: Doubled zero-based galaxy centre coordinates.
    default: Absent; no symmetry condition.
---

# Region Shape

Constrain a shared region collection by template shape, template counts or half-turn symmetry. Translations always preserve a template. Rotations and reflections are independent options. Each region must match an allowed template when templates are supplied. Template counts count each match, so congruent templates describe the same matching class. For galaxies, every region contains exactly one listed centre and is symmetric about it; every listed centre lies inside a region. A centre on an edge or corner requires all adjacent cells to belong to its region.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | The shared region collection name. | Required. |
| shapes | Allowed template shapes. | Empty list; no template condition. |
| rotations | Allow quarter-turn rotations of templates. | true. |
| reflections | Allow reflected templates. | true. |
| uses | Exact number of regions congruent to each template, in order. | Absent; templates may be reused. |
| centres | Doubled zero-based galaxy centre coordinates. | Absent; no symmetry condition. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let P=partitionAnswer(name); (|shapes|>0 → ∀R∈P: ∃S∈shapes:congruent(S,R,rotations,reflections)) ∧ (present(uses) → |shapes|=|unwrap(uses)| ∧ ∀i∈[0,|shapes|): 0<=i ∧ i<|unwrap(uses)| ∧ countWhere(P,λR:set<cell>:congruent(shapes[i],R,rotations,reflections))=unwrap(uses)[i]) ∧ (present(centres) → (∀i,j∈[0,|unwrap(centres)|): i!=j → (unwrap(centres)[i].row2!=unwrap(centres)[j].row2 ∨ unwrap(centres)[i].col2!=unwrap(centres)[j].col2)) ∧ (∀R∈P: countWhere(unwrap(centres),λg:RegionCentre:centreInside(R,g))=1 ∧ ∀g∈unwrap(centres):centreInside(R,g) → symmetricRegion(R,g.row2,g.col2)) ∧ (∀g∈unwrap(centres):∃R∈P:centreInside(R,g)))
```

## Example

````markdown
---
format: open-rules
title: Region Shape example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-shape name "areas" shapes [["r1c1","r1c2"]]
```
````

Satisfies the rule: Every shared region is a two-cell horizontal or vertical domino.

Breaks the rule: A three-cell region matches no domino template.

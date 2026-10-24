---
name: Shaded Successors
url: https://rules.sudoku-sleuth.com/shaded-successors.md
kind: shaded-successors
shape: Cells
aliases: ["Exactly the shaded successors", "One-higher shading within boxes"]
parameters:
  cells:
    type: set<cell>
    description: All shaded cells; the shading is exhaustive.
    default: Required.
layer: rule
---

# Shaded Successors

A cell is shaded exactly when its digit is one greater than at least one orthogonal or diagonal neighbour in the same region. Every qualifying cell must be shaded.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | All shaded cells; the shading is exhaustive. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
∀a∈C:(a∈cells) ↔ (∃b∈C:(∃R∈Regions:a∈R ∧ b∈R) ∧ moveRelation("king",a,b) ∧ D(a)=D(b)+1)
```

## Example

````markdown
---
format: open-rules
title: Shaded Successors example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 1, "cols": 3, "symbols": [1, 2, 3, 4], "regions": [["r1c1", "r1c2", "r1c3"]]}
---

```rules
regions cells ["r1c1","r1c2","r1c3"]
shaded-successors cells ["r1c2"]
```
````

Satisfies the rule: r1c1=1, r1c2=2, r1c3=4. Only r1c2 has a neighbour one lower in its region.

Breaks the rule: r1c1=1, r1c2=2, r1c3=3. The unshaded r1c3 also has a neighbour one lower.

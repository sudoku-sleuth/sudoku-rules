---
name: Signed Shading Cage
url: https://rules.sudoku-sleuth.com/signed-shading-cage.md
kind: signed-shading-cage
layer: rule
shape: Cages
parameters:
  cells:
    type: set<cell>
    description: Cage cells.
    default: Required.
  total:
    type: number
    description: Signed cage total; supply zero explicitly for an unlabelled zero cage.
    default: Required.
  unshadedRequired:
    type: boolean
    description: Whether the cage must contain an unshaded cell; false allows a wholly shaded cage.
    default: Required.
---

# Signed Shading Cage

Cage digits do not repeat. Shaded digits count positively and unshaded digits negatively. Unshaded cells in the cage form one orthogonally connected group. The explicit unshadedRequired setting controls whether a wholly shaded cage is allowed.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| cells | `set<cell>` | Cage cells. | Required. |
| total | `number` | Signed cage total; supply zero explicitly for an unlabelled zero cage. | Required. |
| unshadedRequired | `boolean` | Whether the cage must contain an unshaded cell; false allows a wholly shaded cage. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and operations.

```text
|cells|>0 ∧ allDifferent(cells,λc:cell:D(c)) ∧ (Σ_{c∈cells} (if c∈H then D(c) else -D(c)))=total ∧ ((¬unshadedRequired ∧ |{c∈cells:c∉H}|=0) ∨ connected({c∈cells:c∉H}))
```

## Example

````markdown
---
format: open-rules
title: Signed Shading Cage example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 1, "cols": 2, "symbols": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
---

```rules
signed-shading-cage cells ["r1c1","r1c2"] total 3 unshadedRequired true
```
````

Satisfies the rule: r1c1=5, r1c2=2. Shade r1c1 only.

Breaks the rule: Keep the other digits and shading, but set r1c2=3.

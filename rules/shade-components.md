---
name: Shade Components
url: https://rules.sudoku-sleuth.com/shade-components.md
kind: shade-components
shape: Regions
parameters:
  name:
    type: string
    description: "The selection name; H means board shading."
    default: "Required."
  components:
    type: string
    description: "The shared partition name for the components."
    default: "Required."
  scope:
    type: set<cell>
    description: "The scope in which components are computed."
    default: "Required."
  selected:
    type: boolean
    description: "Use selected cells; false uses the complement in scope."
    default: "true."
  count:
    type: optional<position>
    description: "Required component count."
    default: "Absent; no count condition."
---

# Shade Components

The named partition is exactly the maximal orthogonally connected components of selected cells in scope, or of their complement within scope. Empty selected scopes have zero components. Region Shape and Region Clue can constrain this same partition by name.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | The selection name; H means board shading. | Required. |
| components | The shared partition name for the components. | Required. |
| scope | The scope in which components are computed. | Required. |
| selected | Use selected cells; false uses the complement in scope. | true. |
| count | Required component count. | Absent; no count condition. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let S={c∈scope:marked(name,c) ↔ selected}; let P=partitionAnswer(components); componentPartition(P,S) ∧ (present(count) → |P|=unwrap(count))
```

## Example

````markdown
---
format: open-rules
title: Shade Components example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
shade-components name "H" components "islands" scope ["r1c1","r1c2","r1c3"] count 2
```
````

Satisfies the rule: r1c1 and r1c3 are shaded; islands contains their two singleton sets.

Breaks the rule: All three cells are shaded; they form one component.

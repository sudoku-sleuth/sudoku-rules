---
name: Selection
url: https://rules.sudoku-sleuth.com/selection.md
kind: selection
shape: Cells
parameters:
  name:
    shared:
      role: construct
      type: selection
    type: string
    description: The shared selection name; H means board shading.
    default: Required.
  scope:
    type: set<cell>
    description: The cells eligible for selection.
    default: Required.
  include:
    type: set<cell>
    description: Cells that must be selected.
    default: Empty list.
  exclude:
    type: set<cell>
    description: Cells that must be unselected.
    default: Empty list.
  minimum:
    type: position
    description: Minimum selected size.
    default: "0."
  maximum:
    type: optional<position>
    description: Maximum selected size.
    default: Absent; no upper bound.
  groups:
    type: list<set<cell>>
    description: Groups with an exact selection count.
    default: Empty list.
  count:
    type: position
    description: Selected cells required in each group.
    default: "1."
layer: block
composition: Shared subsets for other constraints to consume.
---

# Selection

Choose one shared set of marked cells inside the scope. Include and exclude fixed cells, bound its size, and require a count in each supplied group. The reserved name `H` reads the board shading used by Yin Yang; every other name reads an independent selection. Empty selections are allowed when the bounds and groups permit them.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| name | `string` | The shared selection name; H means board shading. | Required. |
| scope | `set<cell>` | The cells eligible for selection. | Required. |
| include | `set<cell>` | Cells that must be selected. | Empty list. |
| exclude | `set<cell>` | Cells that must be unselected. | Empty list. |
| minimum | `position` | Minimum selected size. | 0. |
| maximum | `optional<position>` | Maximum selected size. | Absent; no upper bound. |
| groups | `list<set<cell>>` | Groups with an exact selection count. | Empty list. |
| count | `position` | Selected cells required in each group. | 1. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let M=selectedCells(name); M⊆scope ∧ include⊆M ∧ exclude⊆scope ∧ |exclude∩M|=0 ∧ minimum>=0 ∧ |M|>=minimum ∧ (present(maximum) → unwrap(maximum)>=minimum ∧ |M|<=unwrap(maximum)) ∧ count>=0 ∧ (∀G∈groups:G⊆scope ∧ |G∩M|=count)
```

## Example

````markdown
---
format: open-rules
title: Selection example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
selection name "ink" scope ["r1c1","r1c2"] minimum 1 maximum 1
```
````

Satisfies the rule: Only r1c1 belongs to ink.

Breaks the rule: Both cells belong to ink.

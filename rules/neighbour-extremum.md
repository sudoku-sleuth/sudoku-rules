---
name: Neighbour Extremum
url: https://rules.sudoku-sleuth.com/neighbour-extremum.md
kind: neighbour-extremum
parameters:
  type:
    description: The mode named in the definition, such as min or max.
    default: Required.
    type: enum{min,max}
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
  exhaustive:
    description: Whether every occurrence is marked, so unmarked cells obey the opposite condition.
    default: Required.
    type: boolean
  neighbourhood:
    type: Move
    description: The move defining neighbours.
    default: orthogonal.
  boundary:
    type: boolean
    description: Compare marked cells only with neighbours outside the marked set.
    default: true.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  neighbours:
    type: optional<set<cell>>
    description: Explicit comparison neighbours, replacing move-selected neighbours.
    default: Absent.
layer: block
---

# Neighbour Extremum

Each marked digit is smaller than all its unmarked neighbours for a minimum, or larger for a maximum. Exhaustive marking also constrains every unmarked cell.

Neighbours here are orthogonally adjacent cells outside the entire marked set. With `type "max" exhaustive false`, this gives fortress cells: adjacent marked cells are not compared. To compare a minimum or maximum with every orthogonally adjacent cell, declare that cell on its own. With `exhaustive true`, each unmarked cell must have a strictly smaller neighbour for min, or a strictly larger neighbour for max.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| type | `enum{min,max}` | The mode named in the definition, such as min or max. | Required. |
| cells | `set<cell>` | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| exhaustive | `boolean` | Whether every occurrence is marked, so unmarked cells obey the opposite condition. | Required. |
| neighbourhood | `Move` | The move defining neighbours. | orthogonal. |
| boundary | `boolean` | Compare marked cells only with neighbours outside the marked set. | true. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | D. |
| neighbours | `optional<set<cell>>` | Explicit comparison neighbours, replacing move-selected neighbours. | Absent. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀a∈cells: extremumAt(a,(if present(neighbours) then unwrap(neighbours) else {b∈C:moveRelation(neighbourhood,a,b) ∧ (¬boundary ∨ b∉cells)}),type,channel))
∧ (exhaustive → ∀a∈C: a∉cells → ∃b∈C: moveRelation(neighbourhood,a,b) ∧ extremumAt(b,{a},type,channel))
```

Marked extrema compare the selected neighbours, excluding the marked set when boundary is true. Exhaustive marking retains the requirement for a strictly lower or higher neighbour at each unmarked cell.

## Example

````markdown
---
format: open-rules
title: Extremum example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
neighbour-extremum r1c1 type "min" exhaustive false
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c1=2. The marked 1 is smaller than its neighbours.

Breaks the rule: r1c1=1, r1c2=1, r2c1=1. An adjacent 1 equals the marked minimum.

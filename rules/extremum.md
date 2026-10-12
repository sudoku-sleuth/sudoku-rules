---
name: Extremum
url: https://rules.sudoku-sleuth.com/extremum.md
kind: extremum
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
---

# Extremum

Each marked digit is smaller than all its unmarked neighbours for a minimum, or larger for a maximum. Exhaustive marking also constrains every unmarked cell.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| type | The mode named in the definition, such as min or max. | Required. |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |
| exhaustive | Whether every occurrence is marked, so unmarked cells obey the opposite condition. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
(∀a∈cells: ∀b∈C: orth(a,b) ∧ b∉cells → ((type="min" ∧ D(a)<D(b)) ∨ (type="max" ∧ D(a)>D(b))))
∧ (exhaustive → ∀a∈C: a∉cells → ∃b∈C: orth(a,b) ∧ ((type="min" ∧ D(b)<D(a)) ∨ (type="max" ∧ D(b)>D(a))))
```

Every marked cell is strictly smaller (min) or larger (max) than each orthogonal neighbour outside cells. If exhaustive, every unmarked cell has a strictly smaller (min) or larger (max) orthogonal neighbour.

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
extremum r1c1 type "min" exhaustive false
```
````

Satisfies the rule: r1c1=1, r1c2=2, r2c1=2. The marked 1 is smaller than its neighbours.

Breaks the rule: r1c1=1, r1c2=1, r2c1=1. An adjacent 1 equals the marked minimum.

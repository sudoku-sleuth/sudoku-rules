---
name: Pointing Arrow
url: https://rules.sudoku-sleuth.com/pointing-arrow.md
kind: pointing-arrow
parameters:
  cell:
    description: The clue cell.
    default: Required.
    type: cell
  ray:
    description: The cells along the ray, nearest first.
    default: Required.
    type: list<cell>
  target:
    description: "The target relationship: greater, less, source or first-five."
    default: Required.
    type: enum{greater,less,source,"first-five"}
  source:
    description: The cell whose digit the target must match.
    default: Absent; source target requires it.
    type: optional<cell>
---

# Pointing Arrow

Count along the ray by the marked digit to find its target. The mode states whether the target is greater, smaller, equal to the source, or the first 5.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cell | The clue cell. | Required. |
| ray | The cells along the ray, nearest first. | Required. |
| target | The target relationship: greater, less, source or first-five. | Required. |
| source | The cell whose digit the target must match. | Absent; source target requires it. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
let n=D(cell); 1<=n<=|ray| ∧ let t=D(lookup(ray,n));
(target="greater" → t>n) ∧ (target="less" → t<n)
∧ (target="source" → present(source) ∧ t=D(unwrap(source)))
∧ (target="first-five" → t=5 ∧ ∀i∈[0,n-1): D(ray[i])!=5)
```

The shared bounded lookup reads the target. first-five also excludes earlier fives.

## Example

````markdown
---
format: open-rules
title: Pointing Arrow example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pointing-arrow cell "r1c1" ray ["r1c2","r1c3"] target "greater"
```
````

Satisfies the rule: r1c3=3, r1c1=2, r1c2=1. The digit 2 selects the second ray cell, whose 3 is greater.

Breaks the rule: r1c3=2, r1c1=2, r1c2=1. The selected ray cell equals 2 rather than exceeding it.

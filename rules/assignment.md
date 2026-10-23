---
name: Assignment
url: https://rules.sudoku-sleuth.com/assignment.md
kind: assignment
shape: Global
parameters:
  name:
    shared:
      role: construct
      type: assignment
    type: string
    description: The shared assignment name.
    default: Required.
  size:
    type: position
    description: Number of ordered slots.
    default: Required.
  labels:
    type: position
    description: Number of available labels.
    default: Required.
  bijective:
    type: boolean
    description: Require a bijection between slots and labels.
    default: false.
layer: block
composition: Shared label assignments over arbitrary ordered slots.
---

# Assignment

Assign a zero-based label to each ordered slot. The named list has exactly size entries, all in [0,labels). Bijective mode uses every label exactly once. Custom formulas read this same assignment to apply each chosen meaning; labels identify meanings rather than implying a numeric relation.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| name | `string` | The shared assignment name. | Required. |
| size | `position` | Number of ordered slots. | Required. |
| labels | `position` | Number of available labels. | Required. |
| bijective | `boolean` | Require a bijection between slots and labels. | false. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(((((size >= 0) and (labels >= 0)) and (|assignmentAnswer(name)| = size)) and forall x∈assignmentAnswer(name): ((0 <= x) and (x < labels))) and (bijective implies ((size = labels) and allDifferent(assignmentAnswer(name),λx:position:x))))
```

## Example

````markdown
---
format: open-rules
title: Assignment example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
assignment name "colours" size 2 labels 2 bijective true
```
````

Satisfies the rule: colours=[1,0].

Breaks the rule: colours=[1,1].

---
name: Marking Relation
url: https://rules.sudoku-sleuth.com/marking-relation.md
kind: marking-relation
shape: Edges
parameters:
  selectionRef:
    shared:
      role: read
      type: selection
    type: string
    description: The shared selection name; H means board shading.
    default: Required.
  pairs:
    type: list<list<cell>>
    description: Ordered cell pairs.
    default: Empty list.
  relation:
    type: enum{same,different,"implies"}
    description: Relationship between pair marks.
    default: different.
  line:
    type: list<cell>
    description: Occurrences along which to count mark changes.
    default: Empty list.
  transitions:
    type: optional<position>
    description: Required number of changes.
    default: Absent; no count condition.
layer: block
composition: Relations over arbitrary shared cell markings.
---

# Marking Relation

Each ordered pair has the stated relationship between its two marks. Same and different are symmetric; implies runs from the first cell to the second. Optional transition counting counts changes along the supplied list, including repeated visits. It does not connect the list geometrically.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| selectionRef | `string` | The shared selection name; H means board shading. | Required. |
| pairs | `list<list<cell>>` | Ordered cell pairs. | Empty list. |
| relation | `enum{same,different,"implies"}` | Relationship between pair marks. | different. |
| line | `list<cell>` | Occurrences along which to count mark changes. | Empty list. |
| transitions | `optional<position>` | Required number of changes. | Absent; no count condition. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(∀p∈pairs: |p|=2 ∧ markingRelation(p[0],p[1],selectionRef,relation)) ∧ (present(transitions) → countWhere([0,|line|-1),λi:position:0<=i ∧ i<|line| ∧ 0<=i+1 ∧ i+1<|line| ∧ ¬(marked(selectionRef,line[i]) ↔ marked(selectionRef,line[i+1])))=unwrap(transitions))
```

## Example

````markdown
---
format: open-rules
title: Marking Relation example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
marking-relation selectionRef "H" pairs [["r1c1","r1c2"]]
```
````

Satisfies the rule: Only r1c1 is shaded.

Breaks the rule: Both endpoints are shaded.

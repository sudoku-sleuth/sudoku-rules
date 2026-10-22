---
name: Summit
url: https://rules.sudoku-sleuth.com/summit.md
kind: summit
parameters:
  line:
    empty_when: edges
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  loop:
    description: Whether the line closes, joining its last cell back to its first.
    default: false (open path).
    type: boolean
  edges:
    type: optional<list<list<cell>>>
    description: All edges of one connected network.
    default: Absent; use the ordered line.
---

# Summit

Neighbouring digits differ. Digits rise or fall along the line, changing direction only at 1 or 9.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |
| edges | All edges of one connected network. | Absent; use the ordered line. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
lineGeometry(line,edges,loop)
∧ (∀W∈lineWindows(line,edges,2,loop): |W|=2 → D(W[0])!=D(W[1]))
∧ ∀W∈lineWindows(line,edges,3,loop): |W|=3 →
  ((D(W[1])∈{1,9} → (D(W[1])-D(W[0]))*(D(W[2])-D(W[1]))<0)
  ∧ (D(W[1])∉{1,9} → (D(W[1])-D(W[0]))*(D(W[2])-D(W[1]))>0))
```

Neighbouring digits differ. At each internal position the two successive differences have the same sign unless its digit is 1 or 9, where the sign reverses. A loop checks all positions cyclically.

## Example

````markdown
---
format: open-rules
title: Summit example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
summit r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=2, r1c2=9, r1c3=3. 2, 9, 3 changes direction at 9.

Breaks the rule: r1c1=2, r1c2=8, r1c3=3. 2, 8, 3 changes direction at 8.

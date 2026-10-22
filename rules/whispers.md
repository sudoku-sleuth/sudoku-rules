---
name: Whisper
url: https://rules.sudoku-sleuth.com/whispers.md
kind: whispers
parameters:
  line:
    empty_when: edges
    description: The cells in order, for example r1c1-r1c2-r1c3.
    default: Required.
    type: path<cell>
  gap:
    description: "The least difference between neighbours: 5 for German whispers, 4 for Dutch whispers."
    default: Required.
    type: number
  loop:
    description: Whether the line closes, joining its last cell back to its first.
    default: false (open path).
    type: boolean
  edges:
    type: optional<list<list<cell>>>
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
---

# Whisper

Neighbouring values along the line differ by at least the stated gap.

Whisper-n lines use `gap n`; German whispers normally use 5 and Dutch whispers 4. Consecutive means adjacent positions along the path. Digits may repeat at non-neighbouring positions when other rules allow.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| gap | The least difference between neighbours: 5 for German whispers, 4 for Dutch whispers. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |
| edges | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
lineGeometry(line,edges,loop) ∧ ∀W∈lineWindows(line,edges,2,loop): |W|=2 → |V(W[0])-V(W[1])|>=gap
```

Every drawn edge is compared, including branches and junctions.

## Example

````markdown
---
format: open-rules
title: Whisper example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers r1c1-r1c2 gap 5
```
````

Satisfies the rule: r1c1=1, r1c2=6. 1 and 6 differ by 5.

Breaks the rule: r1c1=1, r1c2=5. 1 and 5 differ by only 4.

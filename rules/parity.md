---
name: Parity
url: https://rules.sudoku-sleuth.com/parity.md
kind: parity
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
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
---

# Parity

Digits alternate between odd and even along the line.

With explicit `edges`, supply one connected network and write `line []` when no ordered list is needed. The window checks include every simple traversal through its junctions.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| line | The cells in order, for example r1c1-r1c2-r1c3. | Required. |
| loop | Whether the line closes, joining its last cell back to its first. | false (open path). |
| edges | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
parityMeaning(line,edges,loop)
```

Every drawn adjacency has different digit parity, including network edges and a loop join.

## Example

````markdown
---
format: open-rules
title: Parity example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
parity r1c1-r1c2
```
````

Satisfies the rule: r1c1=1, r1c2=2. 1 is odd and 2 is even.

Breaks the rule: r1c1=1, r1c2=3. 1 and 3 are both odd.

---
name: Renban
url: https://rules.sudoku-sleuth.com/renban.md
kind: renban
parameters:
  line:
    empty_when: edges
    type: list<cell>
    description: All cells of the line or cell set; order does not affect its consecutive values.
    default: Required.
  edges:
    type: optional<list<list<cell>>>
    description: Explicit undirected edges of one connected network; each edge lists two different cells.
    default: Absent; use the ordered line.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: V.
  repeats:
    type: boolean
    description: Whether equal values may repeat.
    default: false.
  selection:
    type: optional<PrefixSelection>
    description: A prefix ending at the first target, given or listed crust; include chooses whether to keep that cell.
    default: Absent; use the whole cell set or network.
---

# Renban

The marked cells contain a consecutive run of values, in any order. Values are distinct by default. `repeats true` permits repeated values; `channel "D"` reads printed digits instead of effective values.

A cell set need not trace a path. With explicit `edges`, the rule applies once to the whole connected network, including every branch.

With `selection`, apply the rule to a stopping prefix of the ordered line. The prefix ends at the first target number, given or listed crust digit. `include` controls whether that cell is kept. A stopping cell must exist. Prefix selection uses the stated channel and an ordered line.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| selection | A stopping prefix, with its target or crust digits and inclusion policy. | Absent; use the whole cell set or network. |
| line | All cells of the line or cell set; order does not affect its consecutive values. | Required. |
| edges | Explicit undirected edges of one connected network; each edge lists two different cells. | Absent; use the ordered line. |
| channel | Read printed digits (D) or effective values (V). | V. |
| repeats | Whether equal values may repeat. | false. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
if present(selection) then ¬present(edges) ∧ selectionValid(line,unwrap(selection),channel) ∧ consecutiveValues(selectedPrefix(line,unwrap(selection),channel),channel,repeats)
else lineGeometry(line,edges,false) ∧ (if present(edges) then consecutiveValues(graphVertices(unwrap(edges)),channel,repeats) else consecutiveValues(line,channel,repeats))
```

The whole supplied cell set or network component forms one consecutive set. Repeats are optional; every step between its least and greatest values is present.

## Example

````markdown
---
format: open-rules
title: Renban example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban r1c1-r1c2-r1c3
```
````

Satisfies the rule: r1c1=2, r1c2=1, r1c3=3. 2, 1, 3 contains the consecutive digits 1–3.

Breaks the rule: r1c1=2, r1c2=1, r1c3=4. 2, 1, 4 misses 3 and has a gap in its run.

### Cell sets and stopping prefixes

```rules
renban r1c1-r2c3-r4c5 channel "D" repeats true
renban r3c1-r3c2-r3c3 channel "D" selection {"stop":"target","target":9,"crusts":[],"include":false}
```

The first declaration compares the whole cell set, regardless of drawing order. The second requires the digits before the first 9 to form a distinct consecutive run; that 9 must occur and is excluded.

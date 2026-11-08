---
name: Branched Thermo
url: https://rules.sudoku-sleuth.com/branched-thermo.md
kind: branched-thermo
shape: Lines
parameters:
  edges:
    description: The directed edges of the thermometer, each a pair [lower, higher] of orthogonally adjacent cells.
    default: Required.
    type: list<list<cell>>
  strict:
    description: Whether each edge must strictly increase.
    default: true.
    type: boolean
  channel:
    description: Read printed digits (D) or effective values (V).
    default: V.
    type: Channel
layer: rule
---

# Branched Thermo

A thermometer with branches, or with arms that rejoin. Each edge is a pair of orthogonally adjacent cells written [lower, higher], and the value rises along every edge, from the first cell of the pair to the second.

A cell with no incoming edge is a bulb, so a network may have several bulbs. A cell that several edges lead into obeys every one of them. The direction of an edge is the order of its pair: it is never inferred from distance or from the order in which the edges are listed. The edges form one connected network with no directed cycle, and an edge listed twice is the same edge.

By default every edge is strict and reads effective values. `strict false` permits equal neighbours.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| edges | `list<list<cell>>` | The directed edges of the thermometer, each a pair [lower, higher] of orthogonally adjacent cells. | Required. |
| strict | `boolean` | Whether each edge must strictly increase. | true. |
| channel | `Channel` | Read printed digits (D) or effective values (V). | V. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
validNetwork(edges) ∧ acyclic(edges) ∧ ∀e∈edges: |e|=2 → (moveRelation("orthogonal",e[0],e[1]) ∧ (if strict then read(e[0],channel) < read(e[1],channel) else read(e[0],channel) <= read(e[1],channel)))
```

## Example

A fork: the bulb in r2c2 has two arms.

````markdown
---
format: open-rules
title: Branched Thermo fork example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
branched-thermo edges [["r2c2","r2c3"],["r2c2","r1c2"]]
```
````

Satisfies the rule: r2c2=1, r2c3=5, r1c2=3. Both arms rise from the bulb.

Breaks the rule: r2c2=4, r2c3=5, r1c2=3. The arm to r1c2 falls.

A diamond: two arms leave the bulb in r1c1 and rejoin in r2c2.

````markdown
---
format: open-rules
title: Branched Thermo diamond example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
branched-thermo edges [["r1c1","r1c2"],["r1c1","r2c1"],["r1c2","r2c2"],["r2c1","r2c2"]]
```
````

Satisfies the rule: r1c1=1, r1c2=4, r2c1=2, r2c2=6. The rejoining cell r2c2 is above both of its neighbours.

Breaks the rule: r1c1=1, r1c2=4, r2c1=7, r2c2=6. The rejoining cell r2c2 is below r2c1.

---
name: Maze
url: https://rules.sudoku-sleuth.com/maze.md
kind: maze
shape: Lines
parameters:
  name:
    shared: {role: construct, type: network}
    type: string
    description: The shared network name.
    default: Required.
  scope:
    type: set<cell>
    description: The exact nonempty vertex set.
    default: Required.
  move:
    type: Move
    description: Allowed edge geometry.
    default: orthogonal.
  tree:
    type: boolean
    description: Require a connected acyclic network.
    default: true.
  requiredEdges:
    type: list<list<cell>>
    description: Undirected edges that must be present.
    default: Empty list.
  forbiddenEdges:
    type: list<list<cell>>
    description: Undirected edges that must be absent.
    default: Empty list.
  leaves:
    type: optional<set<cell>>
    description: The exact cells with degree one.
    default: Absent; no leaf condition.
  maximumDegree:
    type: optional<position>
    description: Maximum number of incident edges per vertex.
    default: Absent; no degree bound.
---

# Maze

Construct a connected named network on exactly the scoped cells. Edges join two different cells by the chosen move, and no undirected edge is repeated. A tree has no cycle and gives a unique route between each pair of vertices. With tree false, cycles are allowed. A one-cell tree has no edges and no degree-one leaves.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | The shared network name. | Required. |
| scope | The exact nonempty vertex set. | Required. |
| move | Allowed edge geometry. | orthogonal. |
| tree | Require a connected acyclic network. | true. |
| requiredEdges | Undirected edges that must be present. | Empty list. |
| forbiddenEdges | Undirected edges that must be absent. | Empty list. |
| leaves | The exact cells with degree one. | Absent; no leaf condition. |
| maximumDegree | Maximum number of incident edges per vertex. | Absent; no degree bound. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let E=networkAnswer(name); networkOn(E,scope,move) ∧ (tree → |E|=|scope|-1) ∧ (∀e∈requiredEdges: |e|=2 ∧ graphEdge(E,e[0],e[1])) ∧ (∀e∈forbiddenEdges: |e|=2 ∧ ¬graphEdge(E,e[0],e[1])) ∧ (present(leaves) → {c∈scope:networkDegree(E,c)=1}=unwrap(leaves)) ∧ (present(maximumDegree) → ∀c∈scope:networkDegree(E,c)<=unwrap(maximumDegree))
```

## Example

````markdown
---
format: open-rules
title: Maze example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
maze name "passages" scope ["r1c1","r1c2","r2c1","r2c2"]
```
````

Satisfies the rule: Edges r1c1-r1c2, r1c1-r2c1 and r2c1-r2c2 form a tree.

Breaks the rule: Adding r1c2-r2c2 creates a cycle.

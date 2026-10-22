---
name: Network Clue
url: https://rules.sudoku-sleuth.com/network-clue.md
kind: network-clue
shape: Lines
parameters:
  name:
    type: string
    description: The shared network name.
    default: Required.
  line:
    type: optional<string>
    description: A shared open route whose steps must use the network.
    default: Absent; no route condition.
  relations:
    type: list<PairRelation>
    description: Inclusive alternatives on each undirected edge, ordered by board cell index.
    default: Empty list; no numeric edge condition.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
  degrees:
    type: list<record{cell:cell,degree:position}>
    description: Required incident-edge counts at marked vertices.
    default: Empty list.
---

# Network Clue

Constrain the edges and degrees of a shared network. An optional named open route must use its edges. Numeric edge relations follow increasing board cell order, so directed relations have a fixed orientation. A Maze declaration supplies connectivity and vertex scope.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| name | The shared network name. | Required. |
| line | A shared open route whose steps must use the network. | Absent; no route condition. |
| relations | Inclusive alternatives on each undirected edge, ordered by board cell index. | Empty list; no numeric edge condition. |
| channel | Read printed digits (D) or effective values (V). | D. |
| degrees | Required incident-edge counts at marked vertices. | Empty list. |

## Maths

Class: **with aggregates**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let E=networkAnswer(name); (|relations|>0 → ∀a,b∈graphVertices(E): cellIndex(a)<cellIndex(b) ∧ graphEdge(E,a,b) → relatedAny(relations,read(a,channel),read(b,channel))) ∧ (∀d∈degrees: networkDegree(E,d.cell)=d.degree) ∧ (present(line) → let L=routeAnswer(unwrap(line)); ∀i∈[0,|L|-1):graphEdge(E,L[i],L[i+1]))
```

## Example

````markdown
---
format: open-rules
title: Network Clue example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
network-clue name "passages" degrees [{"cell":"r1c1","degree":2}]
```
````

Satisfies the rule: The shared network has exactly two edges incident to r1c1.

Breaks the rule: It has three edges incident to r1c1.

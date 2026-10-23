---
name: Route
url: https://rules.sudoku-sleuth.com/route.md
kind: route
shape: Lines
parameters:
  name:
    shared:
      role: construct
      type: route
    type: string
    description: The shared route name.
    default: Required.
  scope:
    type: set<cell>
    description: Cells the route may use.
    default: Required.
  move:
    type: Move
    description: Allowed step geometry.
    default: orthogonal.
  loop:
    type: boolean
    description: Require a simple closed cycle.
    default: false.
  cover:
    type: boolean
    description: Visit every cell in scope.
    default: false.
  minimum:
    type: position
    description: Minimum number of visited cells.
    default: "1."
  maximum:
    type: optional<position>
    description: Maximum number of visited cells.
    default: Absent; use scope size.
  startCell:
    type: optional<cell>
    description: Required first cell of an open route.
    default: Absent; either endpoint.
  endCell:
    type: optional<cell>
    description: Required last cell of an open route.
    default: Absent; either endpoint.
  through:
    type: set<cell>
    description: Cells that must be visited.
    default: Empty set.
  requiredEdges:
    type: list<list<cell>>
    description: Undirected edges the route must use.
    default: Empty list.
  forbiddenEdges:
    type: list<list<cell>>
    description: Undirected edges the route must avoid.
    default: Empty list.
  noTouch:
    type: optional<Move>
    description: Forbid this move between nonconsecutive route cells.
    default: Absent; no additional touch condition.
  crossings:
    type: boolean
    description: Allow crossings between straight steps of any length.
    default: false.
layer: block
composition: Named path construction with configurable steps and endpoints.
---

# Route

Construct one named route with distinct cells and allowed steps. A loop closes its last cell to its first and has at least three cells. An open route may specify endpoints. Covering visits every cell in scope once. Required and forbidden edges are undirected. Touch restrictions exclude consecutive steps; proper interior step crossings are checked separately. Crossings mean interior intersections of straight segments of any length, including bishop and knight steps; shared endpoints and collinear overlaps are excluded. The same name in another declaration refers to this same route, including its order.

A long step passing through a visited cell is allowed by `crossings false` when that cell is an endpoint of the other step. Only intersections strictly inside both steps count; collinear overlaps do not count.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| name | `string` | The shared route name. | Required. |
| scope | `set<cell>` | Cells the route may use. | Required. |
| move | `Move` | Allowed step geometry. | orthogonal. |
| loop | `boolean` | Require a simple closed cycle. | false. |
| cover | `boolean` | Visit every cell in scope. | false. |
| minimum | `position` | Minimum number of visited cells. | 1. |
| maximum | `optional<position>` | Maximum number of visited cells. | Absent; use scope size. |
| startCell | `optional<cell>` | Required first cell of an open route. | Absent; either endpoint. |
| endCell | `optional<cell>` | Required last cell of an open route. | Absent; either endpoint. |
| through | `set<cell>` | Cells that must be visited. | Empty set. |
| requiredEdges | `list<list<cell>>` | Undirected edges the route must use. | Empty list. |
| forbiddenEdges | `list<list<cell>>` | Undirected edges the route must avoid. | Empty list. |
| noTouch | `optional<Move>` | Forbid this move between nonconsecutive route cells. | Absent; no additional touch condition. |
| crossings | `boolean` | Allow crossings between straight steps of any length. | false. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
let L=routeAnswer(name); simpleRoute(L,scope,move,routeClosed(name)) ∧ minimum>=1 ∧ minimum<=|L| ∧ |L|<=(if present(maximum) then unwrap(maximum) else |scope|) ∧ (cover → routeCells(L)=scope) ∧ through⊆routeCells(L) ∧ (present(startCell) → ¬loop ∧ |L|>0 ∧ L[0]=unwrap(startCell)) ∧ (present(endCell) → ¬loop ∧ |L|>0 ∧ L[|L|-1]=unwrap(endCell)) ∧ (∀e∈requiredEdges: |e|=2 ∧ routeEdge(L,e[0],e[1],loop)) ∧ (∀e∈forbiddenEdges: |e|=2 ∧ ¬routeEdge(L,e[0],e[1],loop)) ∧ (present(noTouch) → noRouteTouch(L,unwrap(noTouch),loop)) ∧ (crossings ∨ ¬routeCrosses(L,L,loop,loop))
```

## Example

````markdown
---
format: open-rules
title: Route example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
route name "trail" scope ["r1c1","r1c2","r1c3"] cover true startCell "r1c1" endCell "r1c3"
```
````

Satisfies the rule: The shared trail is r1c1-r1c2-r1c3.

Breaks the rule: The shared trail r1c1-r1c3-r1c2 makes a forbidden two-cell jump.

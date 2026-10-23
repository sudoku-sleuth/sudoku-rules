---
name: Route Group
url: https://rules.sudoku-sleuth.com/route-group.md
kind: route-group
shape: Lines
parameters:
  routes:
    shared:
      role: read
      type: route
    type: list<string>
    description: Shared route names, each listed once.
    default: Required.
  disjoint:
    type: boolean
    description: Require different routes to share no cells.
    default: true.
  noTouch:
    type: optional<Move>
    description: Forbid this move between cells of different routes.
    default: Absent; no extra separation.
  crossings:
    type: boolean
    description: Allow crossings between straight steps of any length of different routes.
    default: false.
  cover:
    type: optional<set<cell>>
    description: Require the union of routes to equal this cell set.
    default: Absent; no covering condition.
layer: block
composition: Relations between arbitrary named routes.
---

# Route Group

Relate at least two distinct named routes. They may be disjoint, separated by a chosen move, free from proper interior step crossings, or together cover a cell set. Each route receives its topology from a Route declaration using the same name. The group reads each route’s closure separately, so open routes and closed loops can share a group.

A long step passing through a visited cell is allowed by `crossings false` when that cell is an endpoint of the other step. Only intersections strictly inside both steps count; collinear overlaps do not count.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| routes | `list<string>` | Shared route names, each listed once. | Required. |
| disjoint | `boolean` | Require different routes to share no cells. | true. |
| noTouch | `optional<Move>` | Forbid this move between cells of different routes. | Absent; no extra separation. |
| crossings | `boolean` | Allow crossings between straight steps of any length of different routes. | false. |
| cover | `optional<set<cell>>` | Require the union of routes to equal this cell set. | Absent; no covering condition. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
|routes|>=2 ∧ (∀n∈routes: |routeAnswer(n)|>0) ∧ (∀i,j∈[0,|routes|): i!=j → routes[i]!=routes[j]) ∧ (∀i,j∈[0,|routes|): i<j → let L=routeAnswer(routes[i]); let M=routeAnswer(routes[j]); (disjoint → ∀c∈L:c∉M) ∧ (present(noTouch) → ∀a∈L: ∀b∈M: ¬moveRelation(unwrap(noTouch),a,b)) ∧ (crossings ∨ ¬routeCrosses(L,M,routeClosed(routes[i]),routeClosed(routes[j])))) ∧ (present(cover) → {c∈C:∃n∈routes:c∈routeAnswer(n)}=unwrap(cover))
```

## Example

````markdown
---
format: open-rules
title: Route Group example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
route-1: route name "upper" scope ["r1c1","r1c2"]
route-2: route name "lower" scope ["r2c1","r2c2"]
route-group routes ["upper","lower"]
```
````

Satisfies the rule: Routes r1c1-r1c2 and r2c1-r2c2 share no cells.

Breaks the rule: Routes r1c1-r1c2 and r1c2-r2c2 share r1c2.

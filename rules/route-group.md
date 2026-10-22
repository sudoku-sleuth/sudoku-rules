---
name: Route Group
url: https://rules.sudoku-sleuth.com/route-group.md
kind: route-group
shape: Lines
parameters:
  names:
    type: list<string>
    description: Shared route names, each listed once.
    default: Required.
  loops:
    type: boolean
    description: Treat every route as closed for edge and crossing tests.
    default: false.
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
    description: Allow crossings between unit diagonal steps of different routes.
    default: false.
  cover:
    type: optional<set<cell>>
    description: Require the union of routes to equal this cell set.
    default: Absent; no covering condition.
---

# Route Group

Relate several named routes. They may be disjoint, separated by a chosen move, free from unit diagonal crossings, or together cover a cell set. Each route receives its topology from a Route declaration using the same name. The group supplies no step geometry of its own.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| names | Shared route names, each listed once. | Required. |
| loops | Treat every route as closed for edge and crossing tests. | false. |
| disjoint | Require different routes to share no cells. | true. |
| noTouch | Forbid this move between cells of different routes. | Absent; no extra separation. |
| crossings | Allow crossings between unit diagonal steps of different routes. | false. |
| cover | Require the union of routes to equal this cell set. | Absent; no covering condition. |

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(∀i,j∈[0,|names|): i!=j → names[i]!=names[j]) ∧ (∀i,j∈[0,|names|): i<j → let L=routeAnswer(names[i]); let M=routeAnswer(names[j]); (disjoint → ∀c∈L:c∉M) ∧ (present(noTouch) → ∀a∈L: ∀b∈M: ¬moveRelation(unwrap(noTouch),a,b)) ∧ (crossings ∨ ¬routeCrosses(L,M,loops,loops))) ∧ (present(cover) → {c∈C:∃n∈names:c∈routeAnswer(n)}=unwrap(cover))
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
route-group names ["upper","lower"]
```
````

Satisfies the rule: Routes r1c1-r1c2 and r2c1-r2c2 share no cells.

Breaks the rule: Routes r1c1-r1c2 and r1c2-r2c2 share r1c2.

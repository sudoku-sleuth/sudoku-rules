---
name: Paired Roles
url: https://rules.sudoku-sleuth.com/paired-roles.md
kind: paired-roles
shape: Global
parameters:
  left:
    shared:
      role: read
      type: selection
    type: string
    description: Left selection name.
    default: Required.
  right:
    shared:
      role: read
      type: selection
    type: string
    description: Right selection name.
    default: Required.
  name:
    shared:
      role: construct
      type: network
    type: string
    description: Shared network name containing undirected pairs.
    default: Required.
  scope:
    type: set<cell>
    description: Cells covered by the two roles.
    default: Required.
  relation:
    type: PairRelation
    description: Numeric relation from left to right.
    default: Required.
  channel:
    type: Channel
    description: Read face digits D or effective values V.
    default: D.
layer: block
composition: Bijections between shared cell roles.
---

# Paired Roles

Pair each cell in the left role with exactly one cell in the right role, covering scope. The roles are disjoint shared selections with different names. Network edges are undirected; the numeric relation always reads the left-role cell first and the right-role cell second. Empty roles and an empty pairing are allowed only for empty scope.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| left | `string` | Left selection name. | Required. |
| right | `string` | Right selection name. | Required. |
| name | `string` | Shared network name containing undirected pairs. | Required. |
| scope | `set<cell>` | Cells covered by the two roles. | Required. |
| relation | `PairRelation` | Numeric relation from left to right. | Required. |
| channel | `Channel` | Read face digits D or effective values V. | D. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
left!=right ∧ let A=selectedCells(left); let B=selectedCells(right); let E=networkAnswer(name); A∪B=scope ∧ |A∩B|=0 ∧ canonicalEdges(E) ∧ (∀e∈E:|e|=2 ∧ ((e[0]∈A ∧ e[1]∈B) ∨ (e[1]∈A ∧ e[0]∈B))) ∧ (∀a∈A:∀b∈B:graphEdge(E,a,b) → pairRelation(relation,read(a,channel),read(b,channel))) ∧ (∀c∈scope:networkDegree(E,c)=1)
```

## Example

````markdown
---
format: open-rules
title: Paired Roles example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
selection-1: selection name "hot" scope ["r1c1","r1c2"]
selection-2: selection name "cold" scope ["r1c1","r1c2"]
paired-roles left "hot" right "cold" name "partners" scope ["r1c1","r1c2"] relation {"op":"sum","value":5}
```
````

Satisfies the rule: hot={r1c1}, cold={r1c2}, partners=[[r1c1,r1c2]], digits 2 and 3.

Breaks the rule: The same roles with no partner edge.

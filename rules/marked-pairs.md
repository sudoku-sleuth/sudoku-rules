---
name: Marked Pairs
url: https://rules.sudoku-sleuth.com/marked-pairs.md
kind: marked-pairs
shape: Edges
parameters:
  x:
    type: list<list<cell>>
    description: Pairs marked x; each pair has exactly two cells.
    default: Empty list.
  v:
    type: list<list<cell>>
    description: Pairs marked v; each pair has exactly two cells.
    default: Empty list.
  white:
    type: list<list<cell>>
    description: Pairs marked white; each pair has exactly two cells.
    default: Empty list.
  black:
    type: list<list<cell>>
    description: Pairs marked black; each pair has exactly two cells.
    default: Empty list.
  allGiven:
    type: list<enum{x,v,white,black}>
    description: Kinds for which every possible orthogonal mark is given.
    default: Empty list.
layer: block
---

# Marked Pairs

X pairs sum to ten, V pairs sum to five, white pairs differ by one and black pairs have ratio two. `allGiven` forbids each selected relationship on every orthogonally adjacent pair without that kind of mark.

Use XV for X and V marks, Kropki for white and black dots, and this block for a declaration that mixes both families. Declare all marks for a selected kind together. Only its own list supplies exceptions; marks in other declarations do not. An X never exempts a pair from the V restriction, and a black dot never exempts a pair from the white restriction. Independent rules keep their full scope, including orthogonal nonconsecutive. Marked relationships read effective values V; the all-given restrictions read printed digits D, as Negative does.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| x | `list<list<cell>>` | Pairs marked x; each pair has exactly two cells. | Empty list. |
| v | `list<list<cell>>` | Pairs marked v; each pair has exactly two cells. | Empty list. |
| white | `list<list<cell>>` | Pairs marked white; each pair has exactly two cells. | Empty list. |
| black | `list<list<cell>>` | Pairs marked black; each pair has exactly two cells. | Empty list. |
| allGiven | `list<enum{x,v,white,black}>` | Kinds for which every possible orthogonal mark is given. | Empty list. |

Use `["x","v"]` for all Xs and Vs, `["x"]` for only Xs, `["v"]` for only Vs, `["white","black"]` for all dots, or either dot kind alone. An empty mark list with that kind in `allGiven` forbids its relationship on every orthogonal edge.

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(∀p∈x: |p|=2 ∧ pairRelation(relationSpec("sum",10),V(p[0]),V(p[1]))) ∧
("x"∈allGiven → (∀a,b∈C: moveRelation("orthogonal",a,b) ∧ ¬graphEdge(x,a,b) → ¬pairRelation(relationSpec("sum",10),D(a),D(b)))) ∧
(∀p∈v: |p|=2 ∧ pairRelation(relationSpec("sum",5),V(p[0]),V(p[1]))) ∧
("v"∈allGiven → (∀a,b∈C: moveRelation("orthogonal",a,b) ∧ ¬graphEdge(v,a,b) → ¬pairRelation(relationSpec("sum",5),D(a),D(b)))) ∧
(∀p∈white: |p|=2 ∧ pairRelation(relationSpec("difference",1),V(p[0]),V(p[1]))) ∧
("white"∈allGiven → (∀a,b∈C: moveRelation("orthogonal",a,b) ∧ ¬graphEdge(white,a,b) → ¬pairRelation(relationSpec("difference",1),D(a),D(b)))) ∧
(∀p∈black: |p|=2 ∧ pairRelation(relationSpec("ratio",2),V(p[0]),V(p[1]))) ∧
("black"∈allGiven → (∀a,b∈C: moveRelation("orthogonal",a,b) ∧ ¬graphEdge(black,a,b) → ¬pairRelation(relationSpec("ratio",2),D(a),D(b))))
```

## Example

````markdown
---
format: open-rules
title: Marked pairs example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
marked-pairs x [r1c1-r1c2] white [r2c1-r2c2] allGiven ["x","white"]
```
````

Satisfies the rule: the X joins 4 and 6, the white dot joins 1 and 2, and every other orthogonal pair neither sums to ten nor differs by one.

Breaks the rule: an unmarked orthogonal pair contains 3 and 7.

---
name: Relation Scope
url: https://rules.sudoku-sleuth.com/relation-scope.md
kind: relation-scope
shape: Global
parameters:
  cells:
    type: set<cell>
    description: The bounded cell scope.
    default: Required.
  relations:
    type: list<PairRelation>
    description: Inclusive alternatives for each selected pair.
    default: Required.
  mode:
    type: enum{all,moves,incident}
    description: Select all pairs, move neighbours, or move neighbours incident to anchors.
    default: moves.
  move:
    type: Move
    description: The neighbour move.
    default: orthogonal.
  anchors:
    type: set<cell>
    description: Cells incident to covered edges.
    default: Empty set.
  except:
    type: list<list<cell>>
    description: Undirected pairs exempt from the condition.
    default: Empty list.
  negative:
    type: boolean
    description: Forbid every alternative on selected pairs.
    default: false.
  channel:
    type: Channel
    description: Read printed digits (D) or effective values (V).
    default: D.
---

# Relation Scope

Every selected pair satisfies at least one listed relation. With `negative true`, it fails every listed relation. All pairs stay inside `cells`; incident scope also requires at least one endpoint in `anchors`. Exceptions are undirected. Directed relations such as `less` follow increasing board cell order.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cells | The bounded cell scope. | Required. |
| relations | Inclusive alternatives for each selected pair. | Required. |
| mode | Select all pairs, move neighbours, or move neighbours incident to anchors. | moves. |
| move | The neighbour move. | orthogonal. |
| anchors | Cells incident to covered edges. | Empty set. |
| except | Undirected pairs exempt from the condition. | Empty list. |
| negative | Forbid every alternative on selected pairs. | false. |
| channel | Read printed digits (D) or effective values (V). | D. |

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
(∀p∈except: |p|=2) ∧ ∀a,b∈cells: cellIndex(a)<cellIndex(b) ∧ selectedPair(a,b,cells,mode,move,anchors) ∧ ¬graphEdge(except,a,b) → (if negative then ¬relatedAny(relations,read(a,channel),read(b,channel)) else relatedAny(relations,read(a,channel),read(b,channel)))
```

## Example

````markdown
---
format: open-rules
title: Relation Scope example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
relation-scope cells ["r1c1","r1c2"] relations [{"op":"difference","value":1},{"op":"sum","value":10}]
```
````

Satisfies the rule: Digits 3 and 7 total 10.

Breaks the rule: Digits 3 and 5 satisfy neither alternative.

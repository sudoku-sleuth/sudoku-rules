---
name: Crossed Paths
url: https://rules.sudoku-sleuth.com/crossed-paths.md
kind: crossed-paths
shape: Lines
aliases: ["Two hidden ascending paths", "Disjoint ordered digit paths"]
parameters:
  horizontal:
    type: string
    description: The shared left-to-right route name.
    default: Required.
    shared:
      role: construct
      type: route
  vertical:
    type: string
    description: The shared top-to-bottom route name.
    default: Required.
    shared:
      role: construct
      type: route
  excluded:
    type: set<cell>
    description: All cells forbidden to either path.
    default: Empty set.
layer: rule
---

# Crossed Paths

Find two paths containing digits one to nine in order. The left-to-right path places each digit in its corresponding column; the top-to-bottom path places each digit in its corresponding row. Successive cells touch orthogonally or diagonally. The paths share no cells and avoid every excluded cell.

## Parameters

| Parameter | Type | Meaning | Default |
| --- | --- | --- | --- |
| horizontal | `string` | The shared left-to-right route name. | Required. |
| vertical | `string` | The shared top-to-bottom route name. | Required. |
| excluded | `set<cell>` | All cells forbidden to either path. | Empty set. |

## Maths

Class: **existential**.

The [shared predicates](predicates.md) define the notation and operations.

```text
rows=9 ∧ cols=9 ∧ horizontal!=vertical ∧ let L=routeAnswer(horizontal); let M=routeAnswer(vertical); |L|=9 ∧ |M|=9 ∧ simpleRoute(L,C,"king",false) ∧ simpleRoute(M,C,"king",false) ∧ (∀i∈[0,9):col(L[i])=i ∧ row(M[i])=i ∧ D(L[i])=i+1 ∧ D(M[i])=i+1 ∧ L[i]∉excluded ∧ M[i]∉excluded) ∧ (∀a∈L:∀b∈M:a!=b)
```

## Example

````markdown
---
format: open-rules
title: Crossed Paths example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
crossed-paths horizontal "across" vertical "down"
```
````

Satisfies the rule: Across uses r4c1-r4c2-r4c3-r4c4-r5c5-r5c6-r5c7-r5c8-r5c9. Down uses r1c5-r2c5-r3c5-r4c5-r5c4-r6c4-r7c4-r8c4-r9c4. Put digits one to nine in order on each route and ones elsewhere. Their diagonal steps cross between cells without sharing a cell.

Breaks the rule: Keep these routes and digits, but change r5c9 to eight. The horizontal path must end on nine.

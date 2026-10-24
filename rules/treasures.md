---
name: Treasures
url: https://rules.sudoku-sleuth.com/treasures.md
kind: treasures
shape: Global
aliases: ["Guarded treasure", "Guarded treasures"]
parameters: {}
layer: rule
---

# Treasures

Every orthogonal neighbour of a digit five has a digit at most four. This applies to every five in the grid.

## Parameters

None.

## Maths

Class: **first-order**.

The [shared predicates](predicates.md) define the notation and operations.

```text
∀a,b∈C:D(a)=5 ∧ moveRelation("orthogonal",a,b) → D(b)<=4
```

## Example

````markdown
---
format: open-rules
title: Treasures example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board: {"rows": 1, "cols": 3, "symbols": [1, 2, 3, 4, 5, 6, 7, 8, 9]}
---

```rules
treasures
```
````

Satisfies the rule: r1c1=5, r1c2=4, r1c3=9. The only neighbour of five is four.

Breaks the rule: r1c1=5, r1c2=5, r1c3=9. A five cannot neighbour another five.

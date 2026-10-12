---
name: Tardis
url: https://rules.sudoku-sleuth.com/tardis.md
kind: tardis
parameters:
  cell:
    description: The clue cell.
    default: Required.
    type: cell
  neighbours:
    description: The cells counted or compared around the clue.
    default: Required. neighbours disjoint from {cell}.
    type: set<cell>
---

# Tardis

The marked digit is greater than every listed neighbour.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| cell | The clue cell. | Required. |
| neighbours | The cells counted or compared around the clue. | Required. neighbours disjoint from {cell}. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀c ∈ neighbours: D(cell)>D(c)
```

The marked digit exceeds every listed neighbour digit.

## Example

````markdown
---
format: open-rules
title: Tardis example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
tardis cell "r1c1" neighbours ["r1c2"]
```
````

Satisfies the rule: r1c1=3, r1c2=2. The marked 3 is greater than its neighbour 2.

Breaks the rule: r1c1=2, r1c2=3. The marked 2 is smaller than its neighbour 3.

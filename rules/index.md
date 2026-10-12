---
name: Index
url: https://rules.sudoku-sleuth.com/index.md
kind: index
parameters:
  strips:
    description: The marked cells in each straight strip.
    default: No authored strips.
    type: list<list<cell>>
  axis:
    description: "The indexing direction: row or column."
    default: Required.
    type: enum{row,column}
  cells:
    description: The marked cells, for example r1c1-r1c2-r2c2.
    default: Required.
    type: set<cell>
---

# Index

A digit points to its own position in the stated row or column axis. The digit in the pointed cell gives the position of the original cell.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| strips | The marked cells in each straight strip. | No authored strips. |
| axis | The indexing direction: row or column. | Required. |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **first-order**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀c∈cells: (axis="column" → 1<=D(c)<=cols ∧ D(boardCell(row(c),D(c)-1))=col(c)+1) ∧ (axis="row" → 1<=D(c)<=rows ∧ D(boardCell(D(c)-1,col(c)))=row(c)+1)
```

For column axis, each marked digit names a one-based column in its row; that target contains the marked cell’s column number. Row axis exchanges rows and columns. The named position must be within the board.

## Example

````markdown
---
format: open-rules
title: Index example
setter: Example
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
index r1c1 axis "column"
```
````

Satisfies the rule: r1c1=2, r1c2=1. The 2 points to the second cell, which contains the original position 1.

Breaks the rule: r1c1=2, r1c2=3. The pointed cell contains 3 instead of position 1.

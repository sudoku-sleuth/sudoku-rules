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

Each marked digit gives a position along its row or column. The cell at that position contains the marked cell’s column number for column indexing, or row number for row indexing.

With `axis "column"`, a marked cell in column k contains the column position of digit k in its row. This is column indexing; marking cells only in columns 1, 5 and 9 gives 159 indexing. With `axis "row"`, a marked cell in row k contains the row position of digit k in its column. Use separate declarations for the two axes. Positions start at 1.

## Parameters

| Parameter | Meaning | Default |
| --- | --- | --- |
| strips | The marked cells in each straight strip. | No authored strips. |
| axis | The indexing direction: row or column. | Required. |
| cells | The marked cells, for example r1c1-r1c2-r2c2. | Required. |

## Maths

Class: **with aggregates**.

The [shared predicates](https://rules.sudoku-sleuth.com/predicates.md) define the notation and every named predicate.

```text
∀c∈cells: if axis="column" then lookupEquals(⟨boardCell(row(c),k):k∈[0,cols)⟩,D(c),col(c)+1,"D") else lookupEquals(⟨boardCell(r,col(c)):r∈[0,rows)⟩,D(c),row(c)+1,"D")
```

The shared bounded lookup uses a one-based position in the selected row or column.

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

---
format: open-rules
title: High Index
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/j5csfo99oo
case: https://sudoku-sleuth.com/cases/high-index
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=6 r4c1=5 r4c8=7
---

```rules
sudoku 9x9
extremum r3c3-r1c3-r2c2-r1c1-r3c1-r2c7-r1c8-r2c9-r3c8-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9-r4c7-r8c2-r9c1-r7c3-r3c6 type "max" exhaustive false
index r1c3-r3c3-r2c2-r1c1-r3c1-r2c7-r1c8-r2c9-r3c8-r4c7-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9-r8c2-r9c1-r7c3-r3c6 axis "column"
```

**Sudoku, Maximum, Column Indexing**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Maximum: Digits in marked cells are larger than all orthogonally adjacent cells.
- Column Indexing: Digits in marked cells indicate the position of the corresponding column number in that row.

All marked cells are both maximums AND column indexers.

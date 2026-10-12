---
format: open-rules
title: Stepping Stones
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1svuhokrzx
case: https://sudoku-sleuth.com/cases/stepping-stones
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=7 r5c5=1
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 8 connected true
cage-2: cage r1c8-r1c9 total 10 connected true
cage-3: cage r8c1-r9c1 total 13 connected true
cage-4: cage r8c9-r9c8-r9c9 total 8 connected true
cage-5: cage r6c7-r7c6-r7c7 total 11 connected true
cage-6: cage r3c4-r4c3-r4c4 total 13 connected true
index-1: index r5c1-r1c2-r1c8-r3c7-r8c1-r6c1-r9c9-r8c8-r6c7-r5c4-r8c4 axis "column"
index-2: index r1c5-r2c1-r1c9-r7c3-r9c1-r1c6-r7c6 axis "row"
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Row Indexing: Digits placed in green cells indicate the position of the corresponding row number in that column. For example, if r2c1 were a 6, then r6c1 would be a 2.
- Column Indexing: Digits placed in red cells indicate the position of the corresponding column number in that row. For example, if r1c2 were a 6, then r1c6 would be a 2.

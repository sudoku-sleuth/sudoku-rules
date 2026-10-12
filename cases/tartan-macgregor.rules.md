---
format: open-rules
title: Tartan MacGregor
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8fzzkjmkpp
case: https://sudoku-sleuth.com/cases/tartan-macgregor
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c4=5 r4c7=2 r6c3=3 r7c6=6
---

```rules
sudoku 9x9
index-1: index r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 axis "column"
index-2: index r5c4-r5c5-r5c6-r8c4-r8c5-r8c6-r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r5c1-r5c2-r5c3-r5c7-r5c8-r5c9-r8c1-r8c2-r8c3-r8c7-r8c8-r8c9 axis "row"
```

-Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Column Indexing: Digits placed in red cells indicate the position of the corresponding column number (2,5, or 8) in that row. For example, if r1c2 were a 6, then r1c6 would be a 2.
- Row Indexing: Digits placed in green cells indicate the position of the corresponding row number (2, 5, or 8) in that column. For example, if r2c1 were a 6, then r6c1 would be a 2.

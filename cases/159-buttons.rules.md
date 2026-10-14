---
format: open-rules
title: 159 Buttons
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/47v3hhy55c
case: https://sudoku-sleuth.com/cases/159-buttons
library: https://rules.sudoku-sleuth.com/
status: read
exported: 42c3264eb77d123d4438df4a14d9afa6
---

```rules
sudoku 9x9
quadruple-1: quadruple r5c2-r5c3-r6c2-r6c3 digits [7,8]
quadruple-2: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,3]
quadruple-3: quadruple r4c2-r4c3-r5c2-r5c3 digits [4,5]
quadruple-4: quadruple r8c2-r8c3-r9c2-r9c3 digits [5,6]
quadruple-5: quadruple r1c7-r1c8-r2c7-r2c8 digits [1,3]
quadruple-6: quadruple r2c7-r2c8-r3c7-r3c8 digits [7,8]
quadruple-7: quadruple r8c7-r8c8-r9c7-r9c8 digits [1,2]
quadruple-8: quadruple r7c7-r7c8-r8c7-r8c8 digits [4,5]
quadruple-9: quadruple r5c7-r5c8-r6c7-r6c8 digits [5,6]
quadruple-10: quadruple r4c7-r4c8-r5c7-r5c8 digits [8,9]
quadruple-11: quadruple r3c1-r3c2-r4c1-r4c2 digits [9]
quadruple-12: quadruple r3c8-r3c9-r4c8-r4c9 digits [5]
quadruple-13: quadruple r6c1-r6c2-r7c1-r7c2 digits [3]
quadruple-14: quadruple r1c2-r1c3-r2c2-r2c3 digits [8,9]
quadruple-15: quadruple r2c5-r2c6-r3c5-r3c6 digits [5]
quadruple-16: quadruple r1c4-r1c5-r2c4-r2c5 digits [6]
quadruple-17: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,2]
quadruple-18: quadruple r4c4-r4c5-r5c4-r5c5 digits [3]
quadruple-19: quadruple r7c4-r7c5-r8c4-r8c5 digits [4]
quadruple-20: quadruple r5c5-r5c6-r6c5-r6c6 digits [5]
quadruple-21: quadruple r8c5-r8c6-r9c5-r9c6 digits [6]
quadruple-22: quadruple r6c8-r6c9-r7c8-r7c9 digits [5]
index r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 axis "column"
```

**Sudoku, Quadruples, Column Indexing**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Column Indexing: Digits placed in red cells indicate the position of the corresponding column number in that row.

---
format: open-rules
title: Super Index
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/super-index
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r2c2 colour "black"
kropki-2: kropki r1c2-r1c3 colour "black"
kropki-3: kropki r4c4-r4c5 colour "black"
kropki-4: kropki r4c4-r5c4 colour "black"
kropki-5: kropki r8c7-r8c8 colour "black"
kropki-6: kropki r8c6-r8c7 colour "black"
kropki-7: kropki r6c5-r6c6 colour "black"
```

Normal Sudoku Rules apply. ALL CELLS ON THE GRID ARE SUPER INDEXED- Except for the special cases, where the cell is indexed to itself, all cells are each connected to 2 other cells in the grid, found by switching number, row and column. Example: If number 7 is at row 2 column 4, then number 2 is at row 4 column 7 AND number 4 is at row 7 column 2. (The row becomes the number, the column becomes the row, and the number becomes the column) Numbers with a black dot between them are in a ratio of 2:1. Not all dots are given.

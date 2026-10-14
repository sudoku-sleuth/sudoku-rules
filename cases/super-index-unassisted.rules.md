---
format: open-rules
title: Super Index (Unassisted)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/super-index-unassisted
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c1=1
exported: 1604b4d4309c70b5ffcf2605a3c59d6d
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5-r1c6 total 15 connected true
cage-2: cage r2c4-r2c5-r2c6 total 15 connected true
cage-3: cage r3c4-r3c5-r3c6 total 15 connected true
cage-4: cage r2c9-r3c9 total 5 connected true
cage-5: cage r2c8-r3c8 total 15 connected true
cage-6: cage r4c2-r4c3 total 15 connected true
cage-7: cage r8c9-r9c9 total 9 connected true
magic-square places [["r1c1","r1c2","r1c3","r2c1","r2c2","r2c3","r3c1","r3c2","r3c3"]]
```

Normal Sudoku rules apply. Box 1 is a magic square. ALL CELLS ON THE GRID ARE SUPER INDEXED- Cells are each connected to 2 other cells in the grid, found by switching number, row and column. Example: If number 7 is at row 2 column 4, then number 2 is at row 4 column 7 AND number 4 is at row 7 column 2. (The row becomes the number, the column becomes the row, and the number becomes the column). Numbers in cages sum to the number in the top left corner of the cage.

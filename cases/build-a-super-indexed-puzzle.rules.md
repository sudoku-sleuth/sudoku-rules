---
format: open-rules
title: Build A Super Indexed Puzzle
setter: Will Power
source: https://sudokupad.app/pler3f28nu
case: https://sudoku-sleuth.com/cases/build-a-super-indexed-puzzle
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r2c3 colour "black"
kropki-2: kropki r2c3-r3c3 colour "black"
kropki-3: kropki r2c1-r3c1 colour "black"
kropki-4: kropki r1c5-r1c6 colour "black"
kropki-5: kropki r5c5-r6c5 colour "black"
kropki-6: kropki r7c8-r8c8 colour "black"
kropki-7: kropki r7c9-r8c9 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,1.5],[2.5,2.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
```

Normal Sudoku Rules apply. CELLS ON THE GRID ARE SUPER INDEXED- Except for some special cases, where cells are indexed to themselves, cells are each connected to 2 other cells in the grid, found by switching row, column and digit. Example: If row 7, column 2 is the digit 4, then row 2 column 4 is the digit 7 AND row 4 column 7 is the digit 2 (7,2,4 > 2,4,7 > 4,7,2). An example of a self-referenced cell is if row 1, column 1, contains the digit 1. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all dots are given. PURPLE LINE- Neighbors on a purple line are consecutive. HINT: A property of a super indexed puzzle is- Within ALL boxes, the low numbers (1,2,3) must each be in different columns and rows than one another. The same is true for the middle (4,5,6) and the high (7,8,9) numbers.

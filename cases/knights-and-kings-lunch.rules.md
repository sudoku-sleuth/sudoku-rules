---
format: open-rules
title: Knights and Kings Lunch
setter: Chip Sounder
source: https://sudokupad.app/yhbyi5hjrl
case: https://sudoku-sleuth.com/cases/knights-and-kings-lunch
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c1=1
---

```rules
sudoku 9x9
cage r5c1-r6c1 total 8 connected true
anti-knight
anti-king
kropki-1: kropki r8c9-r9c9 colour "black"
kropki-2: kropki r2c8-r3c8 colour "black"
pair-1: pair r7c4-r8c4 sum 5
pair-2: pair r1c6-r2c6 sum 5
pair-3: pair r6c8-r6c9 sum 5
pair-4: pair r5c2-r6c2 sum 5
pair-5: pair r2c1-r2c2 sum 5
sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 13
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a Knight's move (in chess) cannot contain the same digit.
Cells separated by a king's move (in chess) cannot contain the same digit.
Clues outside the grid sum the digits between the 1 and 9 in their respective row/column.
Cells separated by a V sum to 5.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Digits in a cage sum to 8.

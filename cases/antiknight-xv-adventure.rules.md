---
format: open-rules
title: Antiknight XV adventure
setter: Chip Sounder
source: https://sudokupad.app/jy4ugppfo1
case: https://sudoku-sleuth.com/cases/antiknight-xv-adventure
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7f1610ea15ff6fe187069ef02f9b683c
---

```rules
sudoku 9x9
anti-knight
kropki r9c3-r9c4 black
pair-1: pair r8c5-r8c6 sum 10
pair-2: pair r5c6-r6c6 sum 10
pair-3: pair r1c5-r2c5 sum 10
pair-4: pair r9c8-r9c9 sum 10
pair-5: pair r1c1-r2c1 sum 10
pair-6: pair r2c7-r3c7 sum 10
pair-7: pair r8c3-r8c4 sum 5
pair-8: pair r7c8-r8c8 sum 5
pair-9: pair r2c7-r2c8 sum 5
pair-10: pair r2c3-r3c3 sum 5
pair-11: pair r5c4-r6c4 sum 5
pair-12: pair r8c5-r9c5 sum 5
pair-13: pair r6c1-r7c1 sum 5
pair-14: pair r2c6-r3c6 sum 5
pair-15: pair r6c5-r6c6 sum 5
little-killer-1: little-killer r7c9-r8c8-r9c7 sum 14
little-killer-2: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 25
little-killer-3: little-killer r6c1-r7c2-r8c3-r9c4 sum 15
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a knight's move (in chess) cannot contain the same digit.  
Cells separated by an X sum to 10.
Cells separated by a V sum to 5.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Clues outside the grid sum the digits along the indicated diagonal, digits may repeat.
No negative constraints.

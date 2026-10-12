---
format: open-rules
title: One Quad Knight
setter: Meggen033
source: https://sudokupad.app/j2opqfym16
case: https://sudoku-sleuth.com/cases/one-quad-knight
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3 total 5 connected true
cage-2: cage r8c7-r8c8 total 15 connected true
cage-3: cage r7c4-r8c4 total 6 connected true
cage-4: cage r2c6-r3c6 total 8 connected true
cage-5: cage r4c6-r4c7 total 6 connected true
cage-6: cage r6c2-r6c3 total 10 connected true
cage-7: cage r2c8-r3c8 total 10 connected true
anti-knight
quadruple-1: quadruple r6c6-r6c7-r7c6-r7c7 digits [6,7,8,9]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,2,3,4]
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits in a white circle must appear at least once in the four surrounding cells.

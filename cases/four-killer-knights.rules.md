---
format: open-rules
title: Four Killer Knights
setter: Meggen033
source: https://sudokupad.app/8w7ezacka5
case: https://sudoku-sleuth.com/cases/four-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
exported: 79d75d06ebb6be487f0ed5eb86e10d09
---

```rules
sudoku 9x9
cage-1: cage r3c4-r4c3-r4c4 total 7 connected true
cage-2: cage r3c6-r4c6-r4c7 total 8 connected true
cage-3: cage r4c1-r5c1 total 7 connected true
cage-4: cage r3c9-r4c9 total 7 connected true
cage-5: cage r8c5-r9c5 total 8 connected true
cage-6: cage r8c7-r9c6-r9c7 total 9 connected true
cage-7: cage r1c5-r1c6-r2c5 total 13 connected true
cage-8: cage r1c3-r2c3 total 9 connected true
cage-9: cage r9c8-r9c9 total 15 connected true
cage-10: cage r7c1-r7c2 total 12 connected true
cage-11: cage r2c1-r3c1 total 11 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

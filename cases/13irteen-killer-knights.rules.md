---
format: open-rules
title: 13irteen Killer Knights
setter: Meggen033
source: https://sudokupad.app/pebwp3bbp9
case: https://sudoku-sleuth.com/cases/13irteen-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
exported: 034c17a70ea21a0f7b28783e04a3b880
---

```rules
sudoku 9x9
cage-1: cage r3c6-r4c6-r4c7 total 9 connected true
cage-2: cage r4c3-r4c4 total 5 connected true
cage-3: cage r4c1-r4c2 total 8 connected true
cage-4: cage r6c3-r6c4-r7c4 total 21 connected true
cage-5: cage r6c6-r6c7 total 15 connected true
cage-6: cage r6c8-r6c9 total 9 connected true
cage-7: cage r8c7-r8c8 total 8 connected true
cage-8: cage r8c1-r8c2 total 13 connected true
cage-9: cage r8c5-r9c5 total 14 connected true
cage-10: cage r1c5-r2c5 total 10 connected true
cage-11: cage r2c9-r3c9 total 14 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

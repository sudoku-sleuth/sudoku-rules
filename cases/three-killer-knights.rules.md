---
format: open-rules
title: Three Killer Knights
setter: Meggen033
source: https://sudokupad.app/i2awukl9m0
case: https://sudoku-sleuth.com/cases/three-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r4c1 total 9 connected true
cage-2: cage r2c9-r3c9-r4c9 total 21 connected true
cage-3: cage r2c2-r2c3-r3c3 total 8 connected true
cage-4: cage r2c7-r2c8-r3c7 total 22 connected true
cage-5: cage r4c3-r4c4 total 5 connected true
cage-6: cage r4c6-r4c7 total 15 connected true
cage-7: cage r6c2-r6c3 total 6 connected true
cage-8: cage r5c5-r6c5 total 17 connected true
cage-9: cage r6c7-r6c8 total 6 connected true
cage-10: cage r8c2-r9c2 total 10 connected true
cage-11: cage r8c8-r9c8 total 9 connected true
cage-12: cage r8c4-r8c5-r8c6 total 15 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

---
format: open-rules
title: Six Killer Knights
setter: Meggen033
source: https://sudokupad.app/mn5jrn47n2
case: https://sudoku-sleuth.com/cases/six-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2 total 7 connected true
cage-2: cage r5c1-r5c2-r5c3 total 7 connected true
cage-3: cage r5c7-r5c8-r5c9 total 15 connected true
cage-4: cage r7c8-r8c8 total 12 connected true
cage-5: cage r7c5-r8c5 total 15 connected true
cage-6: cage r2c5-r3c5 total 12 connected true
cage-7: cage r7c2-r7c3 total 10 connected true
cage-8: cage r3c3-r4c3 total 11 connected true
cage-9: cage r3c7-r3c8 total 8 connected true
cage-10: cage r3c6-r4c6 total 11 connected true
cage-11: cage r8c7-r9c7 total 14 connected true
cage-12: cage r8c3-r9c3 total 12 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

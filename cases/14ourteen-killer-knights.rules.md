---
format: open-rules
title: 14ourteen Killer Knights
setter: Meggen033
source: https://sudokupad.app/3u7kvbgb58
case: https://sudoku-sleuth.com/cases/14ourteen-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c3-r5c3 total 5 connected true
cage-2: cage r4c5-r5c5 total 6 connected true
cage-3: cage r4c7-r5c7 total 5 connected true
cage-4: cage r7c3-r8c3 total 7 connected true
cage-5: cage r7c7-r8c7 total 7 connected true
cage-6: cage r7c5-r8c5 total 9 connected true
cage-7: cage r3c4-r3c5-r3c6 total 9 connected true
cage-8: cage r1c5-r2c5 total 12 connected true
cage-9: cage r1c7-r2c7 total 13 connected true
cage-10: cage r2c1-r2c2 total 15 connected true
cage-11: cage r4c1-r4c2 total 15 connected true
cage-12: cage r6c1-r6c2 total 9 connected true
cage-13: cage r6c8-r6c9 total 7 connected true
cage-14: cage r7c8-r7c9 total 12 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

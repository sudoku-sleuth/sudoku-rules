---
format: open-rules
title: Ten Killer Knights
setter: Meggen033
source: https://sudokupad.app/cg3lntc2ze
case: https://sudoku-sleuth.com/cases/ten-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
exported: 95de306603736ded26d4feac188534cc
---

```rules
sudoku 9x9
cage-1: cage r1c8-r2c7-r2c8-r2c9 total 12 connected true
cage-2: cage r4c8-r5c8 total 6 connected true
cage-3: cage r4c6-r5c6-r6c6 total 9 connected true
cage-4: cage r8c1-r8c2-r8c3-r9c2 total 28 connected true
cage-5: cage r5c2-r6c2 total 14 connected true
cage-6: cage r4c4-r5c4-r6c4 total 21 connected true
cage-7: cage r1c6-r2c6 total 8 connected true
cage-8: cage r8c4-r9c4 total 12 connected true
cage-9: cage r8c6-r8c7 total 11 connected true
cage-10: cage r2c3-r2c4 total 9 connected true
cage-11: cage r7c7-r7c8 total 13 connected true
cage-12: cage r3c2-r3c3 total 7 connected true
cage-13: cage r3c6-r3c7-r4c7 total 21 connected true
cage-14: cage r6c3-r7c3-r7c4 total 15 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

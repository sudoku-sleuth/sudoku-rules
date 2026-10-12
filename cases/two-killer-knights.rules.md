---
format: open-rules
title: Two Killer Knights
setter: Meggen033
source: https://sudokupad.app/r45ehh63xp
case: https://sudoku-sleuth.com/cases/two-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3 total 6 connected true
cage-2: cage r3c5-r4c5 total 7 connected true
cage-3: cage r3c7-r4c7 total 5 connected true
cage-4: cage r6c6-r7c6 total 13 connected true
cage-5: cage r6c8-r7c8 total 14 connected true
cage-6: cage r6c4-r7c4 total 15 connected true
cage-7: cage r4c1-r4c2 total 8 connected true
cage-8: cage r6c2-r6c3 total 9 connected true
cage-9: cage r2c2-r3c2 total 7 connected true
cage-10: cage r2c7-r2c8 total 9 connected true
cage-11: cage r8c4-r8c5 total 5 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

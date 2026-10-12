---
format: open-rules
title: Eight Killer Knights
setter: Meggen033
source: https://sudokupad.app/einiwgv9u2
case: https://sudoku-sleuth.com/cases/eight-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r5c3-r5c4-r6c4 total 10 connected true
cage-2: cage r4c6-r5c6-r5c7-r6c6 total 24 connected true
cage-3: cage r2c6-r3c6 total 10 connected true
cage-4: cage r7c4-r8c4 total 9 connected true
cage-5: cage r2c2-r2c3 total 5 connected true
cage-6: cage r8c7-r8c8 total 5 connected true
cage-7: cage r5c1-r5c2 total 7 connected true
cage-8: cage r4c9-r5c9 total 12 connected true
cage-9: cage r7c2-r8c2 total 7 connected true
cage-10: cage r1c8-r2c8 total 12 connected true
cage-11: cage r3c1-r4c1 total 10 connected true
cage-12: cage r7c9-r8c9 total 9 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

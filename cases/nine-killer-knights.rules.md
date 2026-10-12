---
format: open-rules
title: Nine Killer Knights
setter: Meggen033
source: https://sudokupad.app/gpet0mumeu
case: https://sudoku-sleuth.com/cases/nine-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5-r6c5 total 6 connected true
cage-2: cage r5c7-r5c8 total 7 connected true
cage-3: cage r5c2-r5c3 total 7 connected true
cage-4: cage r4c6-r4c7-r4c8 total 9 connected true
cage-5: cage r6c2-r6c3-r6c4 total 9 connected true
cage-6: cage r2c7-r2c8 total 7 connected true
cage-7: cage r8c2-r8c3 total 7 connected true
cage-8: cage r1c1-r2c1-r3c1 total 15 connected true
cage-9: cage r2c3-r3c3 total 15 connected true
cage-10: cage r7c9-r8c9-r9c9 total 10 connected true
cage-11: cage r7c7-r8c7 total 7 connected true
cage-12: cage r8c4-r9c4 total 5 connected true
cage-13: cage r1c6-r2c6 total 5 connected true
cage-14: cage r7c5-r7c6 total 9 connected true
cage-15: cage r3c4-r3c5 total 15 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

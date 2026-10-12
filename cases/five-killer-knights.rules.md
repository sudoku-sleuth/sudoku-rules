---
format: open-rules
title: Five Killer Knights
setter: Meggen033
source: https://sudokupad.app/txml5rw7k7
case: https://sudoku-sleuth.com/cases/five-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c2-r8c3 total 5 connected true
cage-2: cage r8c7-r8c8 total 6 connected true
cage-3: cage r2c2-r2c3 total 15 connected true
cage-4: cage r2c7-r2c8 total 14 connected true
cage-5: cage r6c7-r6c8 total 8 connected true
cage-6: cage r4c7-r4c8 total 10 connected true
cage-7: cage r4c2-r4c3 total 9 connected true
cage-8: cage r6c2-r6c3 total 9 connected true
cage-9: cage r7c5-r8c5 total 8 connected true
cage-10: cage r2c5-r3c5 total 13 connected true
cage-11: cage r4c6-r5c6 total 6 connected true
cage-12: cage r5c4-r6c4 total 11 connected true
cage-13: cage r7c6-r7c7 total 9 connected true
cage-14: cage r7c3-r7c4 total 9 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

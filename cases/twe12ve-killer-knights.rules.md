---
format: open-rules
title: Twe12ve Killer Knights
setter: Meggen033
source: https://sudokupad.app/a544342mhn
case: https://sudoku-sleuth.com/cases/twe12ve-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
exported: 554c4a6f26ff6faa11aae3ee6fff4089
---

```rules
sudoku 9x9
cage-1: cage r4c2-r5c2-r6c2 total 10 connected true
cage-2: cage r4c4-r5c3-r5c4 total 10 connected true
cage-3: cage r5c6-r5c7-r6c6 total 20 connected true
cage-4: cage r4c8-r5c8-r6c8 total 20 connected true
cage-5: cage r1c8-r2c8-r2c9 total 24 connected true
cage-6: cage r8c1-r8c2-r9c2 total 7 connected true
cage-7: cage r7c7-r8c7-r8c8 total 20 connected true
cage-8: cage r1c2-r2c2-r2c3 total 16 connected true
cage-9: cage r8c4-r8c5 total 7 connected true
cage-10: cage r1c5-r2c4-r2c5 total 14 connected true
cage-11: cage r8c6-r9c6 total 10 connected true
cage-12: cage r3c5-r3c6 total 9 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

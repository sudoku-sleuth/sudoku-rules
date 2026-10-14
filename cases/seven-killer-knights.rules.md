---
format: open-rules
title: Seven Killer Knights
setter: Meggen033
source: https://sudokupad.app/w0k9wxhvpu
case: https://sudoku-sleuth.com/cases/seven-killer-knights
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8a54825edd4d367361f15f336aa69277
---

```rules
sudoku 9x9
cage-1: cage r3c5-r4c5 total 15 connected true
cage-2: cage r3c6-r3c7-r4c7 total 22 connected true
cage-3: cage r1c8-r2c8-r2c9 total 23 connected true
cage-4: cage r5c6-r5c7 total 12 connected true
cage-5: cage r5c3-r5c4 total 10 connected true
cage-6: cage r6c5-r7c5 total 11 connected true
cage-7: cage r7c6-r7c7-r8c7 total 15 connected true
cage-8: cage r3c2-r3c3-r4c3 total 8 connected true
cage-9: cage r8c8-r9c8-r9c9 total 17 connected true
cage-10: cage r1c1-r2c1-r2c2 total 17 connected true
cage-11: cage r7c2-r8c2-r8c3 total 22 connected true
cage-12: cage r8c4-r8c5 total 10 connected true
cage-13: cage r5c2-r6c2 total 8 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

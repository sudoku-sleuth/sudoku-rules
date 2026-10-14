---
format: open-rules
title: Rooks are Better
setter: Meggen033
source: https://sudokupad.app/d6u11chlmj
case: https://sudoku-sleuth.com/cases/rooks-are-better
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0870c55b2f7c3b795994f4232b2b406c
---

```rules
sudoku 9x9
cage-1: cage r3c4-r4c3-r4c4 total 21 connected true
cage-2: cage r3c6-r4c6-r4c7 total 18 connected true
cage-3: cage r6c6-r6c7-r7c6 total 21 connected true
cage-4: cage r6c3-r6c4-r7c4 total 23 connected true
cage-5: cage r5c1-r5c2 total 9 connected true
cage-6: cage r5c8-r5c9 total 9 connected true
cage-7: cage r7c1-r7c2 total 12 connected true
cage-8: cage r8c4-r8c5 total 9 connected true
cage-9: cage r9c1-r9c2 total 12 connected true
cage-10: cage r2c2-r2c3 total 12 connected true
cage-11: cage r8c7-r8c8 total 12 connected true
cage-12: cage r2c7-r2c8 total 13 connected true
cage-13: cage r3c1-r4c1-r4c2 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

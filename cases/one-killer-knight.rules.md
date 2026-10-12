---
format: open-rules
title: One Killer Knight
setter: Meggen033
source: https://sudokupad.app/6l7u7cbwta
case: https://sudoku-sleuth.com/cases/one-killer-knight
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c3-r7c3-r7c4 total 23 connected true
cage-2: cage r7c6-r7c7 total 14 connected true
cage-3: cage r3c6-r3c7-r4c7 total 7 connected true
cage-4: cage r3c3-r3c4 total 6 connected true
cage-5: cage r1c4-r1c5-r1c6 total 9 connected true
cage-6: cage r9c4-r9c5-r9c6 total 21 connected true
cage-7: cage r4c3-r5c3 total 11 connected true
cage-8: cage r5c7-r6c7 total 8 connected true
cage-9: cage r7c9-r8c9 total 9 connected true
cage-10: cage r2c1-r3c1 total 12 connected true
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.

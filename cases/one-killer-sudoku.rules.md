---
format: open-rules
title: One Killer Sudoku
setter: Meggen033
source: https://sudokupad.app/mub6qc4j1d
case: https://sudoku-sleuth.com/cases/one-killer-sudoku
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c3-r5c3-r5c4-r6c3 total 11 connected true
cage-2: cage r4c7-r5c6-r5c7-r6c7 total 29 connected true
cage-3: cage r1c3-r2c3 total 5 connected true
cage-4: cage r8c7-r9c7 total 15 connected true
cage-5: cage r7c7-r7c8 total 10 connected true
cage-6: cage r3c2-r3c3 total 10 connected true
cage-7: cage r8c8-r9c8 total 13 connected true
cage-8: cage r1c2-r2c2 total 7 connected true
cage-9: cage r1c8-r1c9 total 14 connected true
cage-10: cage r9c1-r9c2 total 6 connected true
cage-11: cage r9c5-r9c6 total 10 connected true
cage-12: cage r1c4-r1c5 total 10 connected true
cage-13: cage r3c5-r4c5 total 8 connected true
cage-14: cage r6c5-r7c5 total 12 connected true
cage-15: cage r3c9-r4c9 total 14 connected true
cage-16: cage r6c1-r7c1 total 6 connected true
cage-17: cage r2c5-r2c6 total 10 connected true
cage-18: cage r8c4-r8c5 total 10 connected true
cage-19: cage r6c6-r7c6 total 9 connected true
cage-20: cage r3c4-r4c4 total 11 connected true
cage-21: cage r3c6-r3c7 total 9 connected true
cage-22: cage r7c3-r7c4 total 11 connected true
```

•	Normal Sudoku rules apply. 
•	Digits in a cage do not repeat and sum to the clue in the top left.

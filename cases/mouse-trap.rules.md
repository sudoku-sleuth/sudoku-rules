---
format: open-rules
title: Mouse Trap
setter: Meggen033
source: https://sudokupad.app/fsgbrms89p
case: https://sudoku-sleuth.com/cases/mouse-trap
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r4c3 total 9 connected true
cage-2: cage r4c8-r4c9 total 7 connected true
cage-3: cage r1c4-r2c4-r3c4 total 21 connected true
cage-4: cage r8c4-r9c4 total 13 connected true
cage-5: cage r3c6-r4c6-r4c7 total 23 connected true
cage-6: cage r6c3-r6c4-r7c4 total 7 connected true
cage-7: cage r8c6-r9c6 total 8 connected true
cage-8: cage r6c8-r6c9 total 12 connected true
cage-9: cage r6c2-r7c2 total 15 connected true
cage-10: cage r2c6-r2c7 total 5 connected true
cage-11: cage r7c5-r7c6 total 9 connected true
cage-12: cage r5c7-r6c7 total 11 connected true
cage-13: cage r9c7-r9c8-r9c9 total 9 connected true
cage-14: cage r7c8-r8c7-r8c8 total 13 connected true
cage-15: cage r1c2-r1c3-r2c3 total 16 connected true
cage-16: cage r1c1-r2c1-r3c1 total 22 connected true
cage-17: cage r8c1-r9c1 total 10 connected true
cage-18: cage r1c8-r1c9 total 11 connected true
```

•	Normal Sudoku rules apply. 
•	Digits in a cage do not repeat and sum to the clue in the top left.

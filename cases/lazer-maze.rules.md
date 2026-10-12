---
format: open-rules
title: Lazer Maze
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/lazer-maze
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1 total 10 connected true
cage-2: cage r1c3-r2c3 total 13 connected true
cage-3: cage r1c4-r2c4 total 5 connected true
cage-4: cage r1c6-r2c6 total 10 connected true
cage-5: cage r1c8-r1c9-r2c8 total 10 connected true
cage-6: cage r4c2-r4c3 total 7 connected true
cage-7: cage r5c1-r5c2-r5c3 total 15 connected true
cage-8: cage r4c6-r4c7 total 13 connected true
cage-9: cage r6c4-r6c5-r6c6 total 15 connected true
cage-10: cage r5c7-r5c8-r5c9 total 9 connected true
cage-11: cage r7c1-r8c1-r9c1 total 20 connected true
cage-12: cage r8c2-r8c3-r8c4 total 9 connected true
cage-13: cage r7c3-r7c4 total 10 connected true
cage-14: cage r9c4-r9c5 total 7 connected true
cage-15: cage r7c6-r8c6-r9c6 total 21 connected true
cage-16: cage r7c8-r8c8-r9c8 total 9 connected true
cage-17: cage r8c9-r9c9 total 11 connected true
```

Normal Sudoku rules apply.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

Exported from sudokulab.net

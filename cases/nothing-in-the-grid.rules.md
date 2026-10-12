---
format: open-rules
title: Nothing in the Grid
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/nothing-in-the-grid
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
little-killer-1: little-killer r9c8-r8c9 sum 16
little-killer-2: little-killer r9c5-r8c6-r7c7-r6c8-r5c9 sum 15
little-killer-3: little-killer r9c7-r8c8-r7c9 sum 19
little-killer-4: little-killer r9c9-r8c8-r7c7-r6c6-r5c5-r4c4-r3c3-r2c2-r1c1 sum 20
little-killer-5: little-killer r9c3-r8c4-r7c5-r6c6-r5c7-r4c8-r3c9 sum 24
little-killer-6: little-killer r8c1-r7c2-r6c3-r5c4-r4c5-r3c6-r2c7-r1c8 sum 68
little-killer-7: little-killer r9c6-r8c7-r7c8-r6c9 sum 11
sandwich-1: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 13
sandwich-2: sandwich r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 8
sandwich-3: sandwich r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 33
```

Normal Sudoku rules apply. LITTLE KILLER- Numbers toward the bottom of the cage are the sum of the numbers on the indicated diagonal. Numbers may repeat on diagonals, if other rules allow. SANDWICH- Numbers above the cage indicate the sum of all numbers between the 1 and 9 in that column, excluding the 1 and 9.

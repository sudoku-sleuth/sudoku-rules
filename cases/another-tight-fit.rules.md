---
format: open-rules
title: Another Tight Fit
setter: The Bard
source: https://sudokupad.app/z0lgcxggn2
case: https://sudoku-sleuth.com/cases/another-tight-fit
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 30 connected true
cage-2: cage r8c8-r8c9-r9c8-r9c9 total 30 connected true
cage-3: cage r1c8-r1c9-r2c8-r2c9 total 29 connected true
cage-4: cage r8c1-r8c2-r9c1-r9c2 total 10 connected true
cage-5: cage r1c7-r2c7 total 7 connected true
cage-6: cage r3c1-r3c2 total 9 connected true
cage-7: cage r8c3-r9c3 total 17 connected true
cage-8: cage r7c1-r7c2 total 13 connected true
cage-9: cage r8c7-r9c7 total 6 connected true
cage-10: cage r4c1-r4c2-r5c1 total 10 connected true
cage-11: cage r9c4-r9c5-r9c6 total 15 connected true
cage-12: cage r5c4-r5c5 total 15 connected true
cage-13: cage r4c9-r5c9-r6c9 total 9 connected true
cage-14: cage r1c4-r1c5 total 10 connected true
cage-15: cage r4c6-r5c6 total 9 connected true
region-sum-1: region-sum r4c4-r5c5-r6c6-r6c7-r5c7-r4c7-r3c6-r3c5-r3c4-r4c3-r5c2-r6c1-r7c2-r8c3-r9c3-r8c4-r7c5-r7c6 segments [["r4c4","r5c5","r6c6"],["r6c7","r5c7","r4c7"],["r3c6","r3c5","r3c4"],["r4c3","r5c2","r6c1"],["r7c2","r8c3","r9c3"],["r8c4","r7c5","r7c6"]]
region-sum-2: region-sum r8c8-r9c7-r9c6-r8c5 segments [["r8c8","r9c7"],["r9c6","r8c5"]]
region-sum-3: region-sum r2c8-r3c8-r4c8-r5c8 segments [["r2c8","r3c8"],["r4c8","r5c8"]]
```

Normal Sudoku Rules Apply. Place each digit 1-9 into each row, column, and box.
Killer Cages: Digits in cages add up to the value in the corner and cannot repeat.
Region Sum Lines: Digits in each box along the marked lines add up to the same value. Different lines may have different values.

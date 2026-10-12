---
format: open-rules
title: Tight Fit 5
setter: The Bard
source: https://sudokupad.app/9x8mwba1xt
case: https://sudoku-sleuth.com/cases/tight-fit-5
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6 total 7 connected true
cage-2: cage r2c4-r2c5-r2c6 total 23 connected true
cage-3: cage r8c9-r9c8-r9c9 total 7 connected true
cage-4: cage r8c1-r9c1-r9c2 total 23 connected true
cage-5: cage r3c7-r4c7 total 10 connected true
cage-6: cage r3c3-r4c3 total 10 connected true
cage-7: cage r1c8-r1c9-r2c9 total 15 connected true
cage-8: cage r1c1-r1c2-r2c1 total 14 connected true
cage-9: cage r6c7-r7c7 total 14 connected true
cage-10: cage r6c3-r7c3 total 10 connected true
cage-11: cage r5c1-r5c2 total 3 connected true
cage-12: cage r5c8-r5c9 total 17 connected true
cage-13: cage r8c4-r9c4 total 4 connected true
cage-14: cage r8c6-r9c6 total 9 connected true
cage-15: cage r6c5-r7c5 total 3 connected true
cage-16: cage r4c4-r5c4 total 9 connected true
cage-17: cage r4c6-r5c6 total 15 connected true
cage-18: cage r8c5-r9c5 total 17 connected true
region-sum-1: region-sum r5c3-r4c3-r3c4-r2c5-r3c6-r4c7-r5c7 segments [["r5c3","r4c3"],["r3c4","r2c5","r3c6"],["r4c7","r5c7"]]
region-sum-2: region-sum r1c7-r2c8-r3c9-r4c9-r5c9-r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r9c4-r9c3-r8c2-r7c1-r6c1-r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5-r1c6 segments [["r1c7","r2c8","r3c9"],["r4c9","r5c9","r6c9"],["r7c9","r8c8","r9c7"],["r9c6","r9c5","r9c4"],["r9c3","r8c2","r7c1"],["r6c1","r5c1","r4c1"],["r3c1","r2c2","r1c3"],["r1c4","r1c5","r1c6"]]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Killer: Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within a cage.

Region Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value.

---
format: open-rules
title: Tight Fit 3
setter: The Bard
source: https://sudokupad.app/kimk47rym6
case: https://sudoku-sleuth.com/cases/tight-fit-3
library: https://rules.sudoku-sleuth.com/
status: read
exported: c34a011a973f0e3d369ceaecdc422637
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2 total 3 connected true
cage-2: cage r6c3-r6c4 total 7 connected true
cage-3: cage r6c5-r6c6 total 11 connected true
cage-4: cage r6c7-r6c8 total 15 connected true
cage-5: cage r1c8-r1c9 total 3 connected true
cage-6: cage r1c6-r1c7 total 7 connected true
cage-7: cage r1c4-r1c5 total 11 connected true
cage-8: cage r1c2-r1c3 total 15 connected true
cage-9: cage r2c1-r3c1 total 4 connected true
cage-10: cage r7c1-r8c1 total 15 connected true
cage-11: cage r4c2-r5c2 total 17 connected true
cage-12: cage r2c9-r3c9 total 9 connected true
cage-13: cage r7c9-r8c9 total 14 connected true
cage-14: cage r8c5-r9c5 total 7 connected true
cage-15: cage r4c5-r5c5 total 10 connected true
cage-16: cage r4c8-r4c9 total 7 connected true
cage-17: cage r5c8-r5c9 total 8 connected true
cage-18: cage r2c2-r2c3 total 10 connected true
region-sum-1: region-sum r5c4-r6c5-r7c6-r8c7-r7c8-r6c9 segments [["r5c4","r6c5"],["r7c6"],["r8c7","r7c8"],["r6c9"]]
region-sum-2: region-sum r6c6-r5c7-r4c7-r3c7-r3c6-r2c5-r2c4 segments [["r6c6"],["r5c7","r4c7"],["r3c7"],["r3c6","r2c5","r2c4"]]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.

Killer: Digits in cages must sum to the number in the top left corner of the cage. Digits may not repeat within a cage.

Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value.

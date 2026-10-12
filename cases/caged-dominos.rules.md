---
format: open-rules
title: Caged Dominos
setter: The Bard
source: https://sudokupad.app/u2bn76qqmd
case: https://sudoku-sleuth.com/cases/caged-dominos
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r9c1-r9c2 total 3 connected true
cage-2: cage r9c3-r9c4 total 7 connected true
cage-3: cage r9c5-r9c6 total 17 connected true
cage-4: cage r1c1-r2c1 total 4 connected true
cage-5: cage r3c1-r4c1 total 9 connected true
cage-6: cage r5c9-r6c9 total 12 connected true
cage-7: cage r3c9-r4c9 total 7 connected true
cage-8: cage r1c8-r1c9 total 9 connected true
cage-9: cage r1c6-r1c7 total 6 connected true
cage-10: cage r1c3-r1c4 total 16 connected true
cage-11: cage r2c2-r3c2 total 17 connected true
cage-12: cage r4c2-r5c2 total 11 connected true
cage-13: cage r8c2-r8c3 total 8 connected true
cage-14: cage r8c5-r8c6 total 13 connected true
cage-15: cage r7c8-r8c8 total 5 connected true
cage-16: cage r3c8-r4c8 total 7 connected true
cage-17: cage r2c4-r2c5 total 7 connected true
cage-18: cage r4c3-r5c3 total 10 connected true
cage-19: cage r7c5-r7c6 total 9 connected true
cage-20: cage r4c6-r5c6 total 12 connected true
cage-21: cage r6c4-r6c5 total 11 connected true
cage-22: cage r7c9-r8c9 total 17 connected true
cage-23: cage r9c8-r9c9 total 13 connected true
cage-24: cage r5c1-r6c1 total 14 connected true
cage-25: cage r7c1-r8c1 total 16 connected true
cage-26: cage r6c7-r7c7 total 12 connected true
cage-27: cage r3c6-r3c7 total 13 connected true
cage-28: cage r3c4-r4c4 total 14 connected true
cage-29: cage r6c3-r7c3 total 11 connected true
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Killer cages: Digits in cages add up to the total in the corner.

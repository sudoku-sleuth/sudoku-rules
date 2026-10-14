---
format: open-rules
title: A Quick Death
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9andbrorpi
case: https://sudoku-sleuth.com/cases/a-quick-death
library: https://rules.sudoku-sleuth.com/
status: read
exported: e7eaa20f68b6af28b7883ccd6d598727
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4-r1c5 total 7 connected true
cage-2: cage r3c9-r4c9-r5c9 total 7 connected true
cage-3: cage r9c5-r9c6-r9c7 total 7 connected true
cage-4: cage r5c1-r6c1-r7c1 total 7 connected true
cage-5: cage r1c6-r1c7-r1c8 total 14 connected true
cage-6: cage r6c9-r7c9-r8c9 total 14 connected true
cage-7: cage r9c2-r9c3-r9c4 total 14 connected true
cage-8: cage r2c1-r3c1-r4c1 total 14 connected true
cage-9: cage r1c2-r2c2 total 8 connected true
cage-10: cage r2c8-r2c9 total 9 connected true
cage-11: cage r8c8-r9c8 total 8 connected true
cage-12: cage r8c1-r8c2 total 9 connected true
cage-13: cage r7c3-r8c3 total 15 connected true
cage-14: cage r2c7-r3c7 total 15 connected true
cage-15: cage r8c6-r8c7 total 17 connected true
cage-16: cage r6c2-r7c2 total 13 connected true
cage-17: cage r2c3-r2c4 total 17 connected true
cage-18: cage r3c8-r4c8 total 13 connected true
cage-19: cage r2c5-r2c6 total 9 connected true
cage-20: cage r8c4-r8c5 total 9 connected true
cage-21: cage r4c2-r5c2 total 11 connected true
cage-22: cage r5c8-r6c8 total 14 connected true
cage-23: cage r4c4-r4c5 total 4 connected true
cage-24: cage r6c5-r6c6 total 8 connected true
cage-25: cage r6c4-r7c4 total 10 connected true
cage-26: cage r3c6-r4c6 total 7 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

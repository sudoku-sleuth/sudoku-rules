---
format: open-rules
title: Tidal Bore (No Marks)
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ec4c85b0h9
case: https://sudoku-sleuth.com/cases/tidal-bore-no-marks
library: https://rules.sudoku-sleuth.com/
status: read
exported: 305eff1ca34c697b10bb1824bfded3be
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 3 connected true
cage-2: cage r1c3-r1c4 total 7 connected true
cage-3: cage r1c5-r1c6 total 11 connected true
cage-4: cage r1c7-r1c8 total 15 connected true
cage-5: cage r2c9-r3c9 total 3 connected true
cage-6: cage r4c9-r5c9 total 7 connected true
cage-7: cage r6c9-r7c9 total 11 connected true
cage-8: cage r9c6-r9c7 total 3 connected true
cage-9: cage r9c4-r9c5 total 7 connected true
cage-10: cage r9c2-r9c3 total 11 connected true
cage-11: cage r8c1-r9c1 total 15 connected true
cage-12: cage r6c1-r7c1 total 10 connected true
cage-13: cage r4c1-r5c1 total 5 connected true
cage-14: cage r2c1-r3c1 total 14 connected true
cage-15: cage r2c2-r2c3 total 9 connected true
cage-16: cage r2c4-r2c5 total 8 connected true
cage-17: cage r2c6-r2c7 total 12 connected true
cage-18: cage r2c8-r3c8 total 8 connected true
cage-19: cage r4c8-r5c8 total 7 connected true
cage-20: cage r6c8-r7c8 total 9 connected true
cage-21: cage r8c7-r8c8 total 7 connected true
cage-22: cage r8c5-r8c6 total 6 connected true
cage-23: cage r8c3-r8c4 total 8 connected true
cage-24: cage r7c2-r8c2 total 12 connected true
cage-25: cage r5c2-r6c2 total 12 connected true
cage-26: cage r3c2-r4c2 total 8 connected true
cage-27: cage r3c3-r3c4 total 10 connected true
cage-28: cage r3c5-r3c6 total 13 connected true
cage-29: cage r3c7-r4c7 total 14 connected true
cage-30: cage r5c7-r6c7 total 11 connected true
cage-31: cage r7c6-r7c7 total 12 connected true
cage-32: cage r7c4-r7c5 total 17 connected true
cage-33: cage r6c3-r7c3 total 10 connected true
cage-34: cage r4c3-r5c3 total 12 connected true
cage-35: cage r4c4-r4c5 total 16 connected true
cage-36: cage r4c6-r5c6 total 10 connected true
cage-37: cage r6c5-r6c6 total 11 connected true
cage-38: cage r9c8-r9c9 total 16 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

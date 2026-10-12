---
format: open-rules
title: Crosshairs
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/spwql1j11w
case: https://sudoku-sleuth.com/cases/crosshairs
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5-r3c5 total 18 connected true
cage-2: cage r5c1-r5c2-r5c3 total 18 connected true
cage-3: cage r5c7-r5c8-r5c9 total 19 connected true
cage-4: cage r7c5-r8c5-r9c5 total 19 connected true
cage-5: cage r3c4-r4c3-r4c4 total 9 connected true
cage-6: cage r3c6-r4c6-r4c7 total 10 connected true
cage-7: cage r6c3-r6c4-r7c4 total 13 connected true
cage-8: cage r6c6-r6c7-r7c6 total 12 connected true
cage-9: cage r2c2-r2c3-r2c4-r3c2-r4c2 total 20 connected true
cage-10: cage r6c8-r7c8-r8c6-r8c7-r8c8 total 20 connected true
cage-11: cage r1c1-r1c2-r2c1 total 8 connected true
cage-12: cage r8c9-r9c8-r9c9 total 10 connected true
cage-13: cage r1c8-r1c9-r2c9 total 9 connected true
cage-14: cage r3c1-r4c1 total 15 connected true
cage-15: cage r6c9-r7c9 total 16 connected true
cage-16: cage r8c1-r9c1-r9c2 total 11 connected true
cage-17: cage r9c3-r9c4 total 14 connected true
cage-18: cage r1c6-r1c7 total 14 connected true
cage-19: cage r1c3-r1c4 total 15 connected true
cage-20: cage r6c1-r7c1 total 11 connected true
cage-21: cage r9c6-r9c7 total 10 connected true
cage-22: cage r3c9-r4c9 total 12 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

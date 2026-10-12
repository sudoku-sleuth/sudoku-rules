---
format: open-rules
title: Quite Cagey
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/p5tsdhy4kn
case: https://sudoku-sleuth.com/cases/quite-cagey
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r3c1 total 12 connected true
cage-2: cage r1c5-r1c6-r2c5-r3c5 total 14 connected true
cage-3: cage r1c9-r2c9-r3c8-r3c9 total 24 connected true
cage-4: cage r7c1-r7c2-r8c1-r9c1 total 19 connected true
cage-5: cage r4c3-r5c2-r5c3 total 10 connected true
cage-6: cage r4c4-r5c4-r5c5 total 13 connected true
cage-7: cage r5c6-r6c5-r6c6 total 9 connected true
cage-8: cage r5c7-r6c7-r6c8 total 24 connected true
cage-9: cage r4c8-r4c9-r5c8 total 12 connected true
cage-10: cage r1c3-r1c4-r2c3 total 12 connected true
cage-11: cage r1c7-r1c8-r2c7 total 12 connected true
cage-12: cage r7c5-r8c5-r9c5-r9c6 total 30 connected true
cage-13: cage r8c8-r9c8-r9c9 total 6 connected true
cage-14: cage r3c2-r3c3 total 13 connected true
cage-15: cage r3c6-r3c7 total 11 connected true
cage-16: cage r8c3-r9c3-r9c4 total 20 connected true
cage-17: cage r7c3-r7c4 total 8 connected true
cage-18: cage r7c6-r7c7-r7c8 total 15 connected true
cage-19: cage r4c1-r5c1 total 13 connected true
cage-20: cage r6c1-r6c2 total 13 connected true
cage-21: cage r4c5-r4c6 total 17 connected true
cage-22: cage r8c7-r9c7 total 12 connected true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

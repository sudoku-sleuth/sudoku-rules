---
format: open-rules
title: Twelve Elevens
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ruy0ra27tb
case: https://sudoku-sleuth.com/cases/twelve-elevens
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5 total 11 connected true
cage-2: cage r4c6-r5c6 total 11 connected true
cage-3: cage r6c5-r6c6 total 11 connected true
cage-4: cage r5c4-r6c4 total 11 connected true
cage-5: cage r1c3-r1c4 total 11 connected true
cage-6: cage r9c6-r9c7 total 11 connected true
cage-7: cage r1c6-r1c7 total 11 connected true
cage-8: cage r9c3-r9c4 total 11 connected true
cage-9: cage r6c1-r7c1 total 11 connected true
cage-10: cage r3c1-r4c1 total 11 connected true
cage-11: cage r3c9-r4c9 total 11 connected true
cage-12: cage r6c9-r7c9 total 11 connected true
cage-13: cage r3c3-r3c4 total 3 connected true
cage-14: cage r3c7-r4c7 total 4 connected true
cage-15: cage r7c6-r7c7 total 3 connected true
cage-16: cage r6c3-r7c3 total 4 connected true
cage-17: cage r2c2-r2c3 total 5 connected true
cage-18: cage r2c8-r3c8 total 6 connected true
cage-19: cage r8c7-r8c8 total 8 connected true
cage-20: cage r7c2-r8c2 total 14 connected true
cage-21: cage r8c1-r9c1 total 3 connected true
cage-22: cage r1c1-r1c2 total 9 connected true
cage-23: cage r1c9-r2c9 total 9 connected true
cage-24: cage r9c8-r9c9 total 8 connected true
cage-25: cage r4c2-r5c2 total 6 connected true
cage-26: cage r5c8-r6c8 total 17 connected true
cage-27: cage r8c4-r8c5 total 17 connected true
cage-28: cage r2c5-r2c6 total 13 connected true
```

**Standard Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more puzzles like these, please visit our website https://missingdeck.net

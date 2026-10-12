---
format: open-rules
title: Turning About
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/doe53uuiv2
case: https://sudoku-sleuth.com/cases/turning-about
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r3c5-r3c6 total 12 connected true
cage-2: cage r3c7-r4c7-r5c7-r6c7 total 12 connected true
cage-3: cage r7c4-r7c5-r7c6-r7c7 total 11 connected true
cage-4: cage r1c2-r2c1-r2c2 total 7 connected true
cage-5: cage r1c8-r2c8-r2c9 total 8 connected true
cage-6: cage r8c8-r8c9-r9c8 total 10 connected true
cage-7: cage r8c1-r8c2-r9c2 total 10 connected true
cage-8: cage r4c3-r5c3-r6c3-r7c3 total 13 connected true
cage-9: cage r9c5-r9c6 total 17 connected true
cage-10: cage r5c1-r6c1 total 17 connected true
cage-11: cage r1c4-r1c5 total 17 connected true
cage-12: cage r4c9-r5c9 total 17 connected true
cage-13: cage r5c4-r6c4 total 16 connected true
cage-14: cage r3c2-r4c2 total 16 connected true
cage-15: cage r6c8-r7c8 total 16 connected true
cage-16: cage r8c3-r8c4 total 15 connected true
cage-17: cage r2c6-r2c7 total 15 connected true
cage-18: cage r6c2-r7c2 total 14 connected true
cage-19: cage r2c3-r2c4 total 11 connected true
cage-20: cage r3c8-r4c8 total 12 connected true
cage-21: cage r1c6-r1c7 total 12 connected true
cage-22: cage r4c6-r5c6 total 9 connected true
cage-23: cage r9c3-r9c4 total 12 connected true
```

**Standard Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more puzzles like these, please visit our website https://missingdeck.net

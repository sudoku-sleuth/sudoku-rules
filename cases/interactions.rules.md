---
format: open-rules
title: Interactions
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f45ejjop9z
case: https://sudoku-sleuth.com/cases/interactions
library: https://rules.sudoku-sleuth.com/
status: read
exported: 891289e649c8c95af9ad9dfc7e00f070
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 9 connected true
cage-2: cage r1c9-r2c9-r3c9 total 9 connected true
cage-3: cage r9c7-r9c8-r9c9 total 9 connected true
cage-4: cage r7c1-r8c1-r9c1 total 9 connected true
cage-5: cage r2c2-r2c3-r2c4 total 10 connected true
cage-6: cage r2c8-r3c8-r4c8 total 10 connected true
cage-7: cage r8c6-r8c7-r8c8 total 10 connected true
cage-8: cage r6c2-r7c2-r8c2 total 10 connected true
cage-9: cage r3c3-r3c4-r3c5 total 11 connected true
cage-10: cage r3c7-r4c7-r5c7 total 11 connected true
cage-11: cage r7c5-r7c6-r7c7 total 11 connected true
cage-12: cage r5c3-r6c3-r7c3 total 11 connected true
cage-13: cage r3c6-r4c6 total 12 connected true
cage-14: cage r6c6-r6c7 total 12 connected true
cage-15: cage r6c4-r7c4 total 12 connected true
cage-16: cage r4c3-r4c4 total 12 connected true
cage-17: cage r1c6-r2c6 total 15 connected true
cage-18: cage r6c8-r6c9 total 14 connected true
cage-19: cage r8c4-r9c4 total 13 connected true
cage-20: cage r4c1-r4c2 total 14 connected true
cage-21: cage r5c8-r5c9 total 15 connected true
cage-22: cage r5c1-r5c2 total 10 connected true
cage-23: cage r8c5-r9c5 total 13 connected true
cage-24: cage r1c5-r2c5 total 11 connected true
```

**Standard Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

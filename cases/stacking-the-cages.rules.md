---
format: open-rules
title: Stacking the Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mt1fim68m8
case: https://sudoku-sleuth.com/cases/stacking-the-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4806b5865c8f53d14ac4e719c22055a8
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 4 connected true
cage-2: cage r1c6-r1c7 total 7 connected true
cage-3: cage r3c9-r4c9 total 4 connected true
cage-4: cage r6c9-r7c9 total 7 connected true
cage-5: cage r9c6-r9c7 total 4 connected true
cage-6: cage r9c3-r9c4 total 7 connected true
cage-7: cage r6c1-r7c1 total 4 connected true
cage-8: cage r3c1-r4c1 total 7 connected true
cage-9: cage r1c1-r1c2-r2c1 total 20 connected true
cage-10: cage r1c8-r1c9-r2c9 total 21 connected true
cage-11: cage r8c9-r9c8-r9c9 total 20 connected true
cage-12: cage r8c1-r9c1-r9c2 total 21 connected true
cage-13: cage r5c1-r5c2 total 5 connected true
cage-14: cage r5c8-r5c9 total 8 connected true
cage-15: cage r1c5-r2c5 total 7 connected true
cage-16: cage r8c5-r9c5 total 10 connected true
cage-17: cage r5c6-r5c7 total 8 connected true
cage-18: cage r5c3-r5c4 total 15 connected true
cage-19: cage r3c4-r4c3-r4c4 total 12 connected true
cage-20: cage r6c6-r6c7-r7c6 total 17 connected true
cage-21: cage r2c3-r2c4 total 10 connected true
cage-22: cage r2c6-r2c7 total 10 connected true
cage-23: cage r8c3-r8c4 total 13 connected true
cage-24: cage r8c6-r8c7 total 7 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

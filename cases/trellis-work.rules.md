---
format: open-rules
title: Trellis Work
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bl0k917aaj
case: https://sudoku-sleuth.com/cases/trellis-work
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4 total 10 connected true
cage-2: cage r1c6-r1c7-r1c8-r1c9 total 30 connected true
cage-3: cage r9c1-r9c2-r9c3-r9c4 total 11 connected true
cage-4: cage r9c6-r9c7-r9c8-r9c9 total 28 connected true
cage-5: cage r2c9-r3c9-r4c9-r5c9 total 10 connected true
cage-6: cage r5c1-r6c1-r7c1-r8c1 total 30 connected true
cage-7: cage r6c9-r7c9-r8c9 total 18 connected true
cage-8: cage r2c1-r3c1-r4c1 total 12 connected true
cage-9: cage r2c3-r2c4 total 17 connected true
cage-10: cage r2c6-r2c7 total 3 connected true
cage-11: cage r8c6-r8c7 total 4 connected true
cage-12: cage r8c3-r8c4 total 16 connected true
cage-13: cage r6c8-r7c8 total 3 connected true
cage-14: cage r3c8-r4c8 total 17 connected true
cage-15: cage r3c2-r4c2 total 16 connected true
cage-16: cage r6c2-r7c2 total 4 connected true
cage-17: cage r6c5-r7c5 total 11 connected true
cage-18: cage r5c3-r5c4 total 3 connected true
cage-19: cage r3c5-r4c5 total 5 connected true
cage-20: cage r5c6-r5c7 total 9 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

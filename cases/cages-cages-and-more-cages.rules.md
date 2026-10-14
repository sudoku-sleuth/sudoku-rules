---
format: open-rules
title: Cages, Cages, and More Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9bqrubv190
case: https://sudoku-sleuth.com/cases/cages-cages-and-more-cages
library: https://rules.sudoku-sleuth.com/
status: read
exported: 74edf0b702d2ea808437cb5b02492a4e
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4-r1c5 total 10 connected true
cage-2: cage r2c9-r3c9-r4c9-r5c9 total 10 connected true
cage-3: cage r9c5-r9c6-r9c7-r9c8 total 24 connected true
cage-4: cage r5c1-r6c1-r7c1-r8c1 total 24 connected true
cage-5: cage r3c1-r3c2-r4c2 total 6 connected true
cage-6: cage r6c8-r7c8-r7c9 total 24 connected true
cage-7: cage r8c3-r8c4-r9c3 total 6 connected true
cage-8: cage r1c7-r2c6-r2c7 total 24 connected true
cage-9: cage r2c3-r3c3-r3c4 total 24 connected true
cage-10: cage r7c6-r7c7-r8c7 total 6 connected true
cage-11: cage r6c3-r7c3-r7c4 total 22 connected true
cage-12: cage r3c7-r4c6-r4c7 total 8 connected true
cage-13: cage r7c5-r8c5 total 6 connected true
cage-14: cage r2c5-r3c5 total 8 connected true
cage-15: cage r8c2-r9c2 total 16 connected true
cage-16: cage r1c8-r2c8 total 7 connected true
cage-17: cage r1c1-r2c1 total 12 connected true
cage-18: cage r8c9-r9c9 total 11 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.


Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

---
format: open-rules
title: Around the Neighbourhood
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/48cvh2dgo1
case: https://sudoku-sleuth.com/cases/around-the-neighbourhood
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r2c4 total 6 connected true
cage-2: cage r2c8-r3c8-r4c8 total 7 connected true
cage-3: cage r8c6-r8c7-r8c8 total 6 connected true
cage-4: cage r6c2-r7c2-r8c2 total 7 connected true
cage-5: cage r1c1-r2c1-r3c1 total 10 connected true
cage-6: cage r7c9-r8c9-r9c9 total 10 connected true
cage-7: cage r9c1-r9c2-r9c3 total 9 connected true
cage-8: cage r1c7-r1c8-r1c9 total 9 connected true
cage-9: cage r2c5-r2c6 total 16 connected true
cage-10: cage r8c4-r8c5 total 16 connected true
cage-11: cage r4c2-r5c2 total 15 connected true
cage-12: cage r5c8-r6c8 total 15 connected true
cage-13: cage r2c7-r3c7 total 15 connected true
cage-14: cage r7c3-r8c3 total 15 connected true
cage-15: cage r3c2-r3c3 total 14 connected true
cage-16: cage r7c7-r7c8 total 14 connected true
cage-17: cage r1c3-r1c4 total 9 connected true
cage-18: cage r9c6-r9c7 total 9 connected true
cage-19: cage r6c1-r7c1 total 13 connected true
cage-20: cage r3c9-r4c9 total 13 connected true
cage-21: cage r6c5-r7c5 total 5 connected true
cage-22: cage r3c4-r4c4 total 10 connected true
cage-23: cage r3c6-r4c6 total 14 connected true
cage-24: cage r5c6-r5c7 total 9 connected true
cage-25: cage r5c3-r5c4 total 9 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

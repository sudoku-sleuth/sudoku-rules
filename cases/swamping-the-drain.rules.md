---
format: open-rules
title: Swamping the Drain
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ly5q4viuv0
case: https://sudoku-sleuth.com/cases/swamping-the-drain
library: https://rules.sudoku-sleuth.com/
status: read
exported: 25170b48f0d5532bb716396534e75587
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4 total 10 connected true
cage-2: cage r1c5-r1c6-r1c7-r1c8 total 30 connected true
cage-3: cage r1c9-r2c9-r3c9-r4c9 total 11 connected true
cage-4: cage r5c9-r6c9-r7c9-r8c9 total 28 connected true
cage-5: cage r9c6-r9c7-r9c8-r9c9 total 12 connected true
cage-6: cage r9c2-r9c3-r9c4-r9c5 total 29 connected true
cage-7: cage r6c1-r7c1-r8c1-r9c1 total 12 connected true
cage-8: cage r2c1-r3c1-r4c1-r5c1 total 30 connected true
cage-9: cage r2c2-r2c3-r2c4 total 8 connected true
cage-10: cage r2c5-r2c6-r2c7 total 22 connected true
cage-11: cage r2c8-r3c8-r4c8 total 10 connected true
cage-12: cage r5c8-r6c8-r7c8 total 20 connected true
cage-13: cage r8c6-r8c7-r8c8 total 10 connected true
cage-14: cage r8c3-r8c4-r8c5 total 20 connected true
cage-15: cage r6c2-r7c2-r8c2 total 10 connected true
cage-16: cage r3c2-r4c2-r5c2 total 20 connected true
cage-17: cage r3c3-r3c4 total 10 connected true
cage-18: cage r3c5-r3c6 total 8 connected true
cage-19: cage r3c7-r4c7 total 10 connected true
cage-20: cage r5c7-r6c7 total 10 connected true
cage-21: cage r7c6-r7c7 total 12 connected true
cage-22: cage r7c4-r7c5 total 10 connected true
cage-23: cage r6c3-r7c3 total 12 connected true
cage-24: cage r4c3-r5c3 total 6 connected true
cage-25: cage r4c4-r4c5 total 15 connected true
cage-26: cage r4c6-r5c6 total 11 connected true
cage-27: cage r6c5-r6c6 total 6 connected true
cage-28: cage r5c4-r6c4 total 12 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

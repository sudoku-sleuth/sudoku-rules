---
format: open-rules
title: Four Cages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nd4lfdgi64
case: https://sudoku-sleuth.com/cases/four-cages
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c7=1 r3c2=7 r7c8=5 r8c3=4
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r1c4 total 10 connected true
cage-2: cage r1c9-r2c9-r3c9-r4c9 total 11 connected true
cage-3: cage r9c6-r9c7-r9c8-r9c9 total 12 connected true
cage-4: cage r6c1-r7c1-r8c1-r9c1 total 13 connected true
cage-5: cage r5c1-r5c2-r5c3-r5c4 total 30 connected true
cage-6: cage r1c5-r2c5-r3c5-r4c5 total 25 connected true
cage-7: cage r5c6-r5c7-r5c8-r5c9 total 10 connected true
cage-8: cage r6c5-r7c5-r8c5-r9c5 total 15 connected true
cage-9: cage r1c7-r2c7-r3c7-r4c7 total 20 connected true
cage-10: cage r7c6-r7c7-r7c8-r7c9 total 20 connected true
cage-11: cage r6c3-r7c3-r8c3-r9c3 total 20 connected true
cage-12: cage r2c1-r2c2-r2c3-r2c4 total 21 connected true
cage-13: cage r1c8-r2c8-r3c8-r4c8 total 26 connected true
cage-14: cage r8c6-r8c7-r8c8-r8c9 total 27 connected true
cage-15: cage r6c2-r7c2-r8c2-r9c2 total 21 connected true
cage-16: cage r3c1-r3c2-r3c3-r3c4 total 25 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

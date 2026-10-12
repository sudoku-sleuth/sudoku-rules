---
format: open-rules
title: Trickle Round
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gprscdgkn0
case: https://sudoku-sleuth.com/cases/trickle-round
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 8 connected true
cage-2: cage r1c3-r1c4 total 6 connected true
cage-3: cage r1c5-r1c6 total 10 connected true
cage-4: cage r1c7-r1c8 total 13 connected true
cage-5: cage r1c9-r2c8-r2c9 total 14 connected true
cage-6: cage r3c9-r4c9 total 9 connected true
cage-7: cage r5c9-r6c9 total 15 connected true
cage-8: cage r7c9-r8c9 total 7 connected true
cage-9: cage r8c8-r9c8-r9c9 total 9 connected true
cage-10: cage r9c6-r9c7 total 7 connected true
cage-11: cage r9c4-r9c5 total 13 connected true
cage-12: cage r9c2-r9c3 total 10 connected true
cage-13: cage r6c1-r7c1 total 7 connected true
cage-14: cage r4c1-r5c1 total 15 connected true
cage-15: cage r3c1-r3c2 total 13 connected true
cage-16: cage r3c3-r3c4 total 11 connected true
cage-17: cage r3c5-r3c6-r3c7 total 8 connected true
cage-18: cage r7c6-r7c7 total 9 connected true
cage-19: cage r7c3-r7c4-r7c5 total 14 connected true
cage-20: cage r6c2-r7c2 total 9 connected true
cage-21: cage r4c2-r5c2 total 6 connected true
cage-22: cage r4c3-r4c4 total 5 connected true
cage-23: cage r4c5-r4c6 total 15 connected true
cage-24: cage r5c6-r6c6 total 12 connected true
cage-25: cage r6c4-r6c5 total 6 connected true
cage-26: cage r8c1-r9c1 total 11 connected true
cage-27: cage r3c8-r4c8 total 13 connected true
cage-28: cage r5c8-r6c8-r7c8 total 16 connected true
```

15-7 CaDS
by FullDeck and Missing a Few Cards
**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

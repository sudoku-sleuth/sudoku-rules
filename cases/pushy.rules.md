---
format: open-rules
title: Pushy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/rv9nqbj0n2
case: https://sudoku-sleuth.com/cases/pushy
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 4 connected true
cage-2: cage r1c9-r2c9-r3c9 total 7 connected true
cage-3: cage r9c8-r9c9 total 5 connected true
cage-4: cage r7c1-r8c1-r9c1 total 7 connected true
cage-5: cage r3c8-r4c8-r5c8 total 8 connected true
cage-6: cage r8c5-r8c6-r8c7 total 8 connected true
cage-7: cage r5c2-r6c2-r7c2 total 9 connected true
cage-8: cage r2c3-r2c4-r2c5 total 8 connected true
cage-9: cage r6c5-r6c6-r6c7 total 8 connected true
cage-10: cage r5c4-r6c4-r7c4 total 9 connected true
cage-11: cage r4c3-r4c4-r4c5 total 12 connected true
cage-12: cage r3c6-r4c6-r5c6 total 14 connected true
cage-13: cage r1c5-r1c6-r1c7 total 23 connected true
cage-14: cage r5c9-r6c9-r7c9 total 24 connected true
cage-15: cage r9c3-r9c4-r9c5 total 22 connected true
cage-16: cage r3c1-r4c1-r5c1 total 22 connected true
cage-17: cage r9c6-r9c7 total 10 connected true
cage-18: cage r1c3-r1c4 total 11 connected true
cage-19: cage r3c3-r3c4 total 13 connected true
cage-20: cage r3c7-r4c7 total 10 connected true
cage-21: cage r6c3-r7c3 total 14 connected true
cage-22: cage r7c6-r7c7 total 14 connected true
```

**Standard Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

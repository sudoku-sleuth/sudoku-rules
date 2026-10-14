---
format: open-rules
title: At Fives and Sixes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/at-fives-and-sixes
case: https://sudoku-sleuth.com/cases/at-fives-and-sixes
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6 r2c2=9 r8c8=7 r9c1=8
exported: 71f030fe0bda1ffb94edf4f0e5d1a991
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 5 connected true
cage-2: cage r1c6-r1c7 total 6 connected true
cage-3: cage r9c3-r9c4 total 5 connected true
cage-4: cage r9c6-r9c7 total 6 connected true
cage-5: cage r3c9-r4c9 total 5 connected true
cage-6: cage r6c9-r7c9 total 6 connected true
cage-7: cage r6c1-r7c1 total 6 connected true
cage-8: cage r3c1-r4c1 total 5 connected true
cage-9: cage r3c6-r3c7 total 10 connected true
cage-10: cage r3c3-r3c4 total 10 connected true
cage-11: cage r7c3-r7c4 total 10 connected true
cage-12: cage r7c6-r7c7 total 9 connected true
cage-13: cage r5c7-r5c8 total 11 connected true
cage-14: cage r5c2-r5c3 total 14 connected true
cage-15: cage r4c4-r4c5-r4c6 total 16 connected true
```

**Sudoku, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.


Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

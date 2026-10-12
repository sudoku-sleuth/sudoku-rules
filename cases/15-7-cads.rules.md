---
format: open-rules
title: 15-7 CaDS
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dcf3ur1wqa
case: https://sudoku-sleuth.com/cases/15-7-cads
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c3=7 r5c8=1 r5c9=5
---

```rules
sudoku 9x9
cage-1: cage r2c7-r3c7-r3c8 total 7 connected true
cage-2: cage r7c7-r7c8-r8c7 total 15 connected true
cage-3: cage r7c2-r7c3-r8c3 total 7 connected true
cage-4: cage r1c1-r1c2-r2c1 total 15 connected true
cage-5: cage r2c5-r3c5 total 7 connected true
cage-6: cage r4c5-r5c5 total 15 connected true
cage-7: cage r6c5-r7c5 total 7 connected true
cage-8: cage r8c5-r9c5 total 7 connected true
cage-9: cage r3c9-r4c9 total 15 connected true
cage-10: cage r3c1-r4c1 total 7 connected true
cage-11: cage r6c9-r7c9 total 7 connected true
cage-12: cage r6c1-r7c1 total 7 connected true
cage-13: cage r9c3-r9c4 total 7 connected true
cage-14: cage r5c6-r5c7 total 15 connected true
cage-15: cage r2c4-r3c4 total 15 connected true
cage-16: cage r6c4-r7c4 total 15 connected true
cage-17: cage r2c2-r3c2 total 7 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 7
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 15
little-killer-3: little-killer r8c1-r9c2 sum 15
little-killer-4: little-killer r8c9-r9c8 sum 7
```

**Sudoku, Cages, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

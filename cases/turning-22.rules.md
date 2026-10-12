---
format: open-rules
title: Turning 22
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zi7q1yubs1
case: https://sudoku-sleuth.com/cases/turning-22
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 22 connected true
cage-2: cage r3c6-r3c7-r4c7 total 8 connected true
cage-3: cage r6c7-r7c6-r7c7 total 22 connected true
cage-4: cage r6c3-r7c3-r7c4 total 8 connected true
cage-5: cage r7c2-r8c2 total 8 connected true
cage-6: cage r2c1-r2c2 total 12 connected true
cage-7: cage r5c6-r5c7-r5c8-r5c9 total 22 connected true
cage-8: cage r5c1-r5c2-r5c3-r5c4 total 22 connected true
cage-9: cage r3c5-r4c5 total 8 connected true
cage-10: cage r8c4-r8c5-r8c6 total 12 connected true
cage-11: cage r2c8-r3c8 total 8 connected true
cage-12: cage r7c1-r8c1-r9c1 total 22 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 22
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 22
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 22
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 22
little-killer-5: little-killer r2c1-r1c2 sum 8
little-killer-6: little-killer r1c8-r2c9 sum 12
little-killer-7: little-killer r8c9-r9c8 sum 8
little-killer-8: little-killer r9c2-r8c1 sum 12
```

**Sudoku, Cages, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

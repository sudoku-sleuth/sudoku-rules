---
format: open-rules
title: Stacks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/udeem0hmh4
case: https://sudoku-sleuth.com/cases/stacks
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 13 connected true
cage-2: cage r6c7-r7c6-r7c7 total 11 connected true
cage-3: cage r6c3-r7c3-r7c4 total 13 connected true
cage-4: cage r3c6-r3c7-r4c7 total 16 connected true
cage-5: cage r4c5-r5c5-r6c5 total 11 connected true
cage-6: cage r2c7-r2c8-r3c8 total 20 connected true
little-killer-1: little-killer r2c1-r1c2 sum 8
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 8
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 8
little-killer-4: little-killer r8c9-r9c8 sum 8
little-killer-5: little-killer r1c4-r2c3-r3c2-r4c1 sum 14
little-killer-6: little-killer r9c6-r8c7-r7c8-r6c9 sum 15
little-killer-7: little-killer r7c1-r8c2-r9c3 sum 8
little-killer-8: little-killer r8c1-r9c2 sum 11
little-killer-9: little-killer r2c9-r1c8 sum 8
little-killer-10: little-killer r3c9-r2c8-r1c7 sum 12
```

**Sudoku, Cages, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

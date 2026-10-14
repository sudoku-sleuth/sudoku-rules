---
format: open-rules
title: Tweener CaDS
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/io0ceke5bu
case: https://sudoku-sleuth.com/cases/tweener-cads
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4105483e5f1a3ae3d3bc7e0d5f914944
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1 total 11 connected true
cage-2: cage r1c2-r1c3 total 11 connected true
cage-3: cage r1c7-r1c8 total 12 connected true
cage-4: cage r1c9-r2c9-r3c9 total 12 connected true
cage-5: cage r7c9-r8c9 total 13 connected true
cage-6: cage r7c1-r8c1 total 14 connected true
cage-7: cage r9c8-r9c9 total 13 connected true
cage-8: cage r9c2-r9c3 total 14 connected true
cage-9: cage r3c4-r4c3-r4c4 total 13 connected true
cage-10: cage r6c6-r6c7-r7c6 total 12 connected true
cage-11: cage r6c3-r6c4-r7c4 total 14 connected true
cage-12: cage r2c6-r3c6 total 11 connected true
cage-13: cage r2c2-r3c2 total 11 connected true
cage-14: cage r2c7-r2c8-r3c8 total 12 connected true
cage-15: cage r7c7-r8c7 total 13 connected true
cage-16: cage r4c5-r4c6 total 14 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 11
little-killer-2: little-killer r1c4-r2c3-r3c2-r4c1 sum 11
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 12
little-killer-4: little-killer r4c9-r3c8-r2c7-r1c6 sum 12
little-killer-5: little-killer r7c9-r8c8-r9c7 sum 13
little-killer-6: little-killer r9c6-r8c7-r7c8-r6c9 sum 13
little-killer-7: little-killer r9c3-r8c2-r7c1 sum 14
little-killer-8: little-killer r6c1-r7c2-r8c3-r9c4 sum 14
```

**Sudoku, Cages, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

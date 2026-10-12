---
format: open-rules
title: Market Square
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/19cd65a2th
case: https://sudoku-sleuth.com/cases/market-square
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r7c5-r8c5 total 13 connected true
cage-2: cage r5c7-r5c8 total 14 connected true
cage-3: cage r5c2-r5c3 total 10 connected true
cage-4: cage r6c1-r6c2-r7c1 total 10 connected true
cage-5: cage r6c3-r6c4-r7c3-r7c4 total 28 connected true
cage-6: cage r3c3-r3c4-r4c3-r4c4 total 26 connected true
cage-7: cage r3c6-r3c7-r4c6-r4c7 total 22 connected true
cage-8: cage r2c5-r3c5 total 12 connected true
cage-9: cage r3c8-r3c9-r4c8 total 12 connected true
cage-10: cage r6c8-r7c8-r7c9 total 10 connected true
cage-11: cage r8c9-r9c9 total 13 connected true
cage-12: cage r9c1-r9c2 total 12 connected true
cage-13: cage r1c1-r2c1 total 13 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 20
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 21
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 20
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 21
little-killer-5: little-killer r2c1-r1c2 sum 15
little-killer-6: little-killer r1c8-r2c9 sum 14
little-killer-7: little-killer r8c9-r9c8 sum 15
little-killer-8: little-killer r9c2-r8c1 sum 14
```

**Sudoku, Cages, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing

---
format: open-rules
title: Fiving and Diming
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0xkj78lqxf
case: https://sudoku-sleuth.com/cases/fiving-and-diming
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=9 r1c9=8 r3c6=7 r4c7=8 r6c2=6 r6c8=7 r8c4=9 r9c1=6 r9c9=7
exported: c00fa43a1661d518071dae7e420bc9e7
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 5 connected true
cage-2: cage r1c5-r1c6-r1c7 total 10 connected true
cage-3: cage r9c6-r9c7 total 5 connected true
cage-4: cage r9c3-r9c4-r9c5 total 10 connected true
cage-5: cage r2c1-r3c1 total 5 connected true
cage-6: cage r2c9-r3c9 total 5 connected true
cage-7: cage r7c9-r8c9 total 5 connected true
cage-8: cage r7c1-r8c1 total 5 connected true
cage-9: cage r5c1-r5c2-r5c3 total 10 connected true
cage-10: cage r5c7-r5c8 total 5 connected true
cage-11: cage r3c4-r4c4 total 5 connected true
cage-12: cage r6c6-r7c6 total 5 connected true
cage-13: cage r4c2-r4c3 total 5 connected true
cage-14: cage r8c2-r8c3 total 10 connected true
cage-15: cage r2c5-r2c6 total 10 connected true
cage-16: cage r8c6-r8c7 total 10 connected true
little-killer-1: little-killer r2c9-r1c8 sum 10
little-killer-2: little-killer r8c1-r9c2 sum 10
little-killer-3: little-killer r2c1-r1c2 sum 10
little-killer-4: little-killer r8c9-r9c8 sum 10
```

**Sudoku, Cages, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

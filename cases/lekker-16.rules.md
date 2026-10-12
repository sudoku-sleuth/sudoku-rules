---
format: open-rules
title: Lekker 16
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wqx20gzd79
case: https://sudoku-sleuth.com/cases/lekker-16
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 24 connected true
cage-2: cage r1c8-r2c8-r2c9 total 22 connected true
cage-3: cage r7c2-r8c2-r8c3 total 6 connected true
cage-4: cage r7c8-r8c7-r8c8 total 7 connected true
cage-5: cage r9c2-r9c3-r9c4 total 20 connected true
cage-6: cage r9c6-r9c7-r9c8 total 15 connected true
cage-7: cage r1c3-r2c3-r2c4 total 9 connected true
cage-8: cage r1c7-r2c6-r2c7 total 14 connected true
cage-9: cage r3c1-r4c1-r5c1 total 11 connected true
cage-10: cage r3c9-r4c9-r5c9 total 11 connected true
cage-11: cage r5c8-r6c8-r6c9 total 13 connected true
cage-12: cage r5c2-r6c1-r6c2 total 14 connected true
cage-13: cage r1c5-r2c5-r3c5 total 12 connected true
cage-14: cage r7c5-r8c5-r9c5 total 18 connected true
cage-15: cage r7c4-r8c4 total 12 connected true
cage-16: cage r7c6-r8c6 total 10 connected true
cage-17: cage r6c3-r6c4 total 9 connected true
cage-18: cage r6c6-r6c7 total 12 connected true
little-killer-1: little-killer r2c9-r1c8 sum 16
little-killer-2: little-killer r9c8-r8c9 sum 16
little-killer-3: little-killer r9c2-r8c1 sum 16
little-killer-4: little-killer r2c1-r1c2 sum 16
little-killer-5: little-killer r3c1-r2c2-r1c3 sum 16
little-killer-6: little-killer r3c9-r2c8-r1c7 sum 16
little-killer-7: little-killer r9c7-r8c8-r7c9 sum 16
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 16
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

---
format: open-rules
title: Lekker 22
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uwtntr8qbm
case: https://sudoku-sleuth.com/cases/lekker-22
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 8 connected true
cage-2: cage r1c8-r2c8-r2c9 total 9 connected true
cage-3: cage r8c8-r8c9-r9c8 total 9 connected true
cage-4: cage r8c1-r8c2-r9c2 total 9 connected true
cage-5: cage r3c1-r4c1-r5c1 total 22 connected true
cage-6: cage r9c3-r9c4 total 13 connected true
cage-7: cage r9c6-r9c7 total 15 connected true
cage-8: cage r6c6-r6c7-r7c6 total 8 connected true
cage-9: cage r6c3-r6c4-r7c4 total 10 connected true
cage-10: cage r3c4-r4c3-r4c4 total 12 connected true
cage-11: cage r3c6-r4c6-r4c7 total 12 connected true
cage-12: cage r5c2-r5c3 total 12 connected true
cage-13: cage r5c7-r5c8 total 13 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 22
little-killer-2: little-killer r4c1-r3c2-r2c3-r1c4 sum 22
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 22
little-killer-4: little-killer r6c9-r7c8-r8c7-r9c6 sum 22
little-killer-5: little-killer r1c6-r2c7-r3c8-r4c9 sum 22
little-killer-6: little-killer r7c1-r8c2-r9c3 sum 22
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 22
little-killer-8: little-killer r9c4-r8c3-r7c2-r6c1 sum 22
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

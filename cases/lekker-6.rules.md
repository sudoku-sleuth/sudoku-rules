---
format: open-rules
title: Lekker 6
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mqfueqqdff
case: https://sudoku-sleuth.com/cases/lekker-6
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 12 connected true
cage-2: cage r8c8-r8c9-r9c8 total 9 connected true
cage-3: cage r8c1-r8c2-r9c2 total 13 connected true
cage-4: cage r7c6-r7c7 total 7 connected true
cage-5: cage r6c3-r7c3 total 6 connected true
cage-6: cage r3c3-r3c4 total 6 connected true
cage-7: cage r3c7-r4c7 total 6 connected true
cage-8: cage r1c8-r2c8-r2c9 total 13 connected true
cage-9: cage r5c2-r5c3 total 14 connected true
cage-10: cage r5c7-r5c8 total 15 connected true
cage-11: cage r7c5-r8c5 total 16 connected true
cage-12: cage r2c5-r3c5 total 11 connected true
cage-13: cage r1c4-r2c4 total 11 connected true
cage-14: cage r8c6-r9c6 total 12 connected true
cage-15: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 16 connected true
little-killer-1: little-killer r2c9-r1c8 sum 6
little-killer-2: little-killer r9c8-r8c9 sum 6
little-killer-3: little-killer r9c2-r8c1 sum 6
little-killer-4: little-killer r2c1-r1c2 sum 6
little-killer-5: little-killer r9c3-r8c2-r7c1 sum 11
little-killer-6: little-killer r3c1-r2c2-r1c3 sum 13
little-killer-7: little-killer r3c9-r2c8-r1c7 sum 11
little-killer-8: little-killer r9c7-r8c8-r7c9 sum 11
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

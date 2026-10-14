---
format: open-rules
title: Lekker 89
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/19azjcwmzs
case: https://sudoku-sleuth.com/cases/lekker-89
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5a4e99676c2a6f2c7f583b94fb195521
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 9 connected true
cage-2: cage r1c8-r1c9 total 8 connected true
cage-3: cage r8c3-r9c3 total 8 connected true
cage-4: cage r3c4-r3c5-r3c6 total 9 connected true
cage-5: cage r7c4-r7c5-r7c6 total 8 connected true
cage-6: cage r8c8-r8c9-r9c9 total 8 connected true
cage-7: cage r7c1-r8c1 total 9 connected true
cage-8: cage r3c8-r3c9 total 9 connected true
cage-9: cage r4c1-r5c1 total 9 connected true
cage-10: cage r4c8-r4c9 total 9 connected true
cage-11: cage r1c4-r2c4 total 9 connected true
cage-12: cage r4c6-r5c6-r6c6 total 9 connected true
cage-13: cage r6c2-r6c3 total 8 connected true
cage-14: cage r5c3-r5c4 total 9 connected true
little-killer-1: little-killer r2c1-r1c2 sum 8
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 8
little-killer-4: little-killer r2c9-r1c8 sum 9
little-killer-5: little-killer r7c9-r8c8-r9c7 sum 8
little-killer-6: little-killer r8c9-r9c8 sum 9
little-killer-7: little-killer r7c1-r8c2-r9c3 sum 9
little-killer-8: little-killer r8c1-r9c2 sum 8
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

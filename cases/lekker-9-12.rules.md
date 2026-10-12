---
format: open-rules
title: Lekker 9/12
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ctdedd5yup
case: https://sudoku-sleuth.com/cases/lekker-9-12
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 9 connected true
cage-2: cage r1c8-r2c8-r2c9 total 12 connected true
cage-3: cage r8c8-r8c9-r9c8 total 9 connected true
cage-4: cage r8c1-r8c2-r9c2 total 12 connected true
cage-5: cage r4c7-r5c7-r6c7 total 9 connected true
cage-6: cage r7c4-r7c5-r7c6 total 12 connected true
cage-7: cage r7c2-r7c3 total 9 connected true
cage-8: cage r3c7-r3c8 total 9 connected true
cage-9: cage r2c3-r2c4 total 12 connected true
cage-10: cage r8c6-r8c7 total 12 connected true
cage-11: cage r8c3-r9c3-r9c4 total 9 connected true
cage-12: cage r1c6-r1c7-r2c7 total 9 connected true
cage-13: cage r1c3-r1c4 total 12 connected true
cage-14: cage r1c5-r2c5 total 12 connected true
cage-15: cage r6c8-r6c9-r7c8 total 12 connected true
cage-16: cage r3c1-r4c1 total 9 connected true
cage-17: cage r3c2-r4c2 total 12 connected true
cage-18: cage r4c5-r5c5 total 12 connected true
cage-19: cage r3c4-r3c5-r4c4 total 12 connected true
cage-20: cage r6c3-r6c4 total 12 connected true
cage-21: cage r5c1-r5c2-r6c2 total 12 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 12
little-killer-2: little-killer r2c9-r1c8 sum 9
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 12
little-killer-4: little-killer r8c1-r9c2 sum 9
little-killer-5: little-killer r7c1-r8c2-r9c3 sum 12
little-killer-6: little-killer r3c9-r2c8-r1c7 sum 12
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

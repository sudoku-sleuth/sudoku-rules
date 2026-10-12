---
format: open-rules
title: Lekker 9
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dtawf2vnox
case: https://sudoku-sleuth.com/cases/lekker-9
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 18 connected true
cage-2: cage r1c8-r2c8-r2c9 total 17 connected true
cage-3: cage r8c1-r8c2-r9c2 total 17 connected true
cage-4: cage r8c8-r8c9-r9c8 total 16 connected true
cage-5: cage r2c3-r3c2-r3c3 total 8 connected true
cage-6: cage r2c7-r3c7-r3c8 total 8 connected true
cage-7: cage r7c7-r7c8-r8c7 total 8 connected true
cage-8: cage r7c2-r7c3-r8c3 total 8 connected true
cage-9: cage r9c4-r9c5-r9c6 total 6 connected true
cage-10: cage r1c4-r1c5-r1c6 total 12 connected true
cage-11: cage r3c4-r4c3-r4c4 total 20 connected true
cage-12: cage r3c6-r4c6-r4c7 total 11 connected true
cage-13: cage r6c6-r6c7-r7c6 total 18 connected true
cage-14: cage r6c3-r6c4-r7c4 total 17 connected true
cage-15: cage r2c5-r3c5 total 11 connected true
cage-16: cage r7c5-r8c5 total 17 connected true
cage-17: cage r4c9-r5c9-r6c9 total 11 connected true
cage-18: cage r4c1-r5c1-r6c1 total 14 connected true
cage-19: cage r5c2-r5c3-r6c2 total 15 connected true
cage-20: cage r4c8-r5c7-r5c8 total 20 connected true
cage-21: cage r5c4-r5c5-r5c6 total 21 connected true
little-killer-1: little-killer r2c1-r1c2 sum 9
little-killer-2: little-killer r2c9-r1c8 sum 9
little-killer-3: little-killer r8c9-r9c8 sum 9
little-killer-4: little-killer r8c1-r9c2 sum 9
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

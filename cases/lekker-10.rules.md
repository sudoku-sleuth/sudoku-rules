---
format: open-rules
title: Lekker 10
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1qu8b7f584
case: https://sudoku-sleuth.com/cases/lekker-10
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 17 connected true
cage-2: cage r1c8-r2c8-r2c9 total 16 connected true
cage-3: cage r8c8-r8c9-r9c8 total 15 connected true
cage-4: cage r8c1-r8c2-r9c2 total 16 connected true
cage-5: cage r2c3-r3c2-r3c3 total 20 connected true
cage-6: cage r2c7-r3c7-r3c8 total 22 connected true
cage-7: cage r7c7-r7c8-r8c7 total 21 connected true
cage-8: cage r7c2-r7c3-r8c3 total 8 connected true
cage-9: cage r4c3-r5c3-r6c3 total 17 connected true
cage-10: cage r3c4-r3c5-r3c6 total 12 connected true
cage-11: cage r4c7-r5c7-r6c7 total 16 connected true
cage-12: cage r7c4-r7c5-r7c6 total 12 connected true
cage-13: cage r3c1-r4c1-r4c2 total 8 connected true
cage-14: cage r3c9-r4c8-r4c9 total 8 connected true
cage-15: cage r6c1-r6c2-r7c1 total 20 connected true
cage-16: cage r6c8-r6c9-r7c9 total 11 connected true
cage-17: cage r1c5-r2c5 total 6 connected true
cage-18: cage r8c5-r9c5 total 6 connected true
cage-19: cage r6c4-r6c5-r6c6 total 14 connected true
cage-20: cage r4c4-r5c4 total 5 connected true
cage-21: cage r4c6-r5c6 total 9 connected true
little-killer-1: little-killer r2c1-r1c2 sum 10
little-killer-2: little-killer r2c9-r1c8 sum 10
little-killer-3: little-killer r8c9-r9c8 sum 10
little-killer-4: little-killer r8c1-r9c2 sum 10
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

---
format: open-rules
title: Lekker 5
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/oy1s16ylh9
case: https://sudoku-sleuth.com/cases/lekker-5
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9620bdb53f11b0c44fe94a094b809b7b
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 6 connected true
cage-2: cage r1c8-r2c8-r2c9 total 7 connected true
cage-3: cage r8c8-r8c9-r9c8 total 8 connected true
cage-4: cage r8c1-r8c2-r9c2 total 9 connected true
cage-5: cage r3c3-r3c4 total 7 connected true
cage-6: cage r3c7-r4c7 total 8 connected true
cage-7: cage r7c6-r7c7 total 9 connected true
cage-8: cage r6c3-r7c3 total 10 connected true
cage-9: cage r6c4-r7c4 total 6 connected true
cage-10: cage r3c6-r4c6 total 5 connected true
cage-11: cage r4c3-r4c4 total 7 connected true
cage-12: cage r6c6-r6c7 total 9 connected true
cage-13: cage r5c6-r5c7-r5c8 total 12 connected true
cage-14: cage r5c2-r5c3-r5c4 total 16 connected true
cage-15: cage r6c5-r7c5 total 12 connected true
cage-16: cage r3c5-r4c5 total 11 connected true
little-killer-1: little-killer r2c1-r1c2 sum 5
little-killer-2: little-killer r2c9-r1c8 sum 5
little-killer-3: little-killer r9c8-r8c9 sum 5
little-killer-4: little-killer r9c2-r8c1 sum 5
little-killer-5: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-6: little-killer r3c9-r2c8-r1c7 sum 11
little-killer-7: little-killer r9c7-r8c8-r7c9 sum 12
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 13
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

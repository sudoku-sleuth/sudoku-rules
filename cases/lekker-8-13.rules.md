---
format: open-rules
title: Lekker 8/13
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qivrkh8uuu
case: https://sudoku-sleuth.com/cases/lekker-8-13
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9ce47f626a5ca0c6010e63250e16abf3
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 13 connected true
cage-2: cage r8c8-r8c9-r9c8 total 13 connected true
cage-3: cage r2c7-r2c8-r3c8 total 8 connected true
cage-4: cage r7c2-r8c2-r8c3 total 8 connected true
cage-5: cage r2c3-r3c3 total 13 connected true
cage-6: cage r7c7-r8c7 total 13 connected true
cage-7: cage r6c9-r7c9 total 8 connected true
cage-8: cage r3c1-r4c1 total 8 connected true
cage-9: cage r6c1-r6c2 total 13 connected true
cage-10: cage r5c8-r5c9 total 13 connected true
cage-11: cage r1c4-r1c5 total 8 connected true
cage-12: cage r3c5-r3c6 total 8 connected true
cage-13: cage r7c4-r7c5 total 8 connected true
cage-14: cage r9c5-r9c6 total 8 connected true
cage-15: cage r5c6-r6c6-r7c6 total 13 connected true
cage-16: cage r6c3-r6c4 total 8 connected true
cage-17: cage r1c6-r2c6 total 13 connected true
little-killer-1: little-killer r2c1-r1c2 sum 8
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 13
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 8
little-killer-4: little-killer r2c9-r1c8 sum 13
little-killer-5: little-killer r8c9-r9c8 sum 8
little-killer-6: little-killer r7c9-r8c8-r9c7 sum 13
little-killer-7: little-killer r7c1-r8c2-r9c3 sum 8
little-killer-8: little-killer r8c1-r9c2 sum 13
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

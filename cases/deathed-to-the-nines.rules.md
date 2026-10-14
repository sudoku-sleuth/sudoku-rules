---
format: open-rules
title: Deathed to the Nines
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/khltfc3ax7
case: https://sudoku-sleuth.com/cases/deathed-to-the-nines
library: https://rules.sudoku-sleuth.com/
status: read
exported: 851cfd2aa2d7f817778d46ade1e0e951
---

```rules
sudoku 9x9
cage-1: cage r8c1-r8c2-r9c2 total 7 connected true
cage-2: cage r1c2-r2c1-r2c2 total 8 connected true
cage-3: cage r1c8-r2c8-r2c9 total 9 connected true
cage-4: cage r8c8-r8c9-r9c8 total 11 connected true
cage-5: cage r6c3-r7c3-r7c4 total 10 connected true
cage-6: cage r3c6-r3c7-r4c7 total 16 connected true
cage-7: cage r4c2-r5c2 total 9 connected true
cage-8: cage r5c8-r6c8 total 13 connected true
little-killer-1: little-killer r9c3-r8c2-r7c1 sum 9
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 9
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 9
little-killer-5: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 37
little-killer-6: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 42
```

- Normal sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

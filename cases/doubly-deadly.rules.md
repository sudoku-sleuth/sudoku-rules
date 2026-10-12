---
format: open-rules
title: Doubly Deadly
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/07e4dii3zp
case: https://sudoku-sleuth.com/cases/doubly-deadly
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=8 r1c9=2 r9c1=5 r9c9=9
---

```rules
sudoku 9x9
cage-1: cage r1c8-r2c8-r2c9 total 14 connected true
cage-2: cage r1c2-r2c1-r2c2 total 9 connected true
cage-3: cage r8c1-r8c2-r9c2 total 14 connected true
cage-4: cage r8c8-r8c9-r9c8 total 9 connected true
cage-5: cage r6c3-r7c3-r7c4 total 6 connected true
cage-6: cage r6c7-r7c6-r7c7 total 16 connected true
cage-7: cage r3c6-r3c7-r4c7 total 11 connected true
cage-8: cage r3c3-r3c4-r4c3 total 21 connected true
cage-9: cage r2c5-r3c5-r4c5 total 17 connected true
cage-10: cage r5c6-r5c7-r5c8 total 13 connected true
cage-11: cage r5c5-r6c5-r7c5 total 12 connected true
cage-12: cage r5c2-r5c3-r5c4 total 14 connected true
cage-13: cage r8c3-r9c3-r9c4 total 17 connected true
cage-14: cage r8c7-r9c6-r9c7 total 16 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 8
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 8
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 8
little-killer-5: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 22
```

- Normal sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

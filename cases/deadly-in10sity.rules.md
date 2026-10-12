---
format: open-rules
title: Deadly In10sity
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/s7g78faryb
case: https://sudoku-sleuth.com/cases/deadly-in10sity
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=4 r4c4=3 r8c6=7 r9c1=9
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 10 connected true
cage-2: cage r3c3-r3c4-r4c3 total 10 connected true
cage-3: cage r1c8-r2c8-r2c9 total 10 connected true
cage-4: cage r3c6-r3c7-r4c7 total 10 connected true
cage-5: cage r8c8-r8c9-r9c8 total 10 connected true
cage-6: cage r6c7-r7c6-r7c7 total 10 connected true
cage-7: cage r8c1-r8c2-r9c2 total 10 connected true
cage-8: cage r6c3-r7c3-r7c4 total 10 connected true
cage-9: cage r1c4-r1c5-r1c6 total 8 connected true
cage-10: cage r9c4-r9c5-r9c6 total 12 connected true
cage-11: cage r4c1-r5c1-r6c1 total 16 connected true
cage-12: cage r4c9-r5c9-r6c9 total 20 connected true
cage-13: cage r5c4-r6c4-r6c5 total 21 connected true
cage-14: cage r4c5-r4c6-r5c6 total 15 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 10
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 10
```

- Normal sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

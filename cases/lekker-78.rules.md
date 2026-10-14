---
format: open-rules
title: Lekker 78
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bpkg4qwmhw
case: https://sudoku-sleuth.com/cases/lekker-78
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=8
exported: 8c41f2f22f6cd0761fd29e6608937377
---

```rules
sudoku 9x9
cage-1: cage r3c3-r4c3 total 7 connected true
cage-2: cage r6c7-r7c7 total 7 connected true
cage-3: cage r4c7-r4c8 total 8 connected true
cage-4: cage r6c2-r6c3 total 8 connected true
cage-5: cage r9c4-r9c5 total 8 connected true
cage-6: cage r1c5-r1c6 total 8 connected true
cage-7: cage r4c4-r4c5 total 7 connected true
cage-8: cage r6c5-r6c6 total 8 connected true
cage-9: cage r2c4-r2c5 total 8 connected true
cage-10: cage r7c5-r7c6 total 7 connected true
cage-11: cage r5c8-r5c9 total 7 connected true
cage-12: cage r3c5-r3c6 total 8 connected true
cage-13: cage r7c4-r8c4 total 7 connected true
little-killer-1: little-killer r2c1-r1c2 sum 8
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 7
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 8
little-killer-4: little-killer r2c9-r1c8 sum 7
little-killer-5: little-killer r7c1-r8c2-r9c3 sum 8
little-killer-6: little-killer r8c1-r9c2 sum 7
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 7
little-killer-8: little-killer r8c9-r9c8 sum 8
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

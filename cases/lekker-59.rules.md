---
format: open-rules
title: Lekker 59
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9cyip8i9st
case: https://sudoku-sleuth.com/cases/lekker-59
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=5 r5c5=9 r8c8=5
exported: 9c122ca6ac6fb8547aaea149894e639b
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 5 connected true
cage-2: cage r1c2-r1c3 total 5 connected true
cage-3: cage r1c7-r1c8 total 5 connected true
cage-4: cage r2c9-r3c9 total 5 connected true
cage-5: cage r9c2-r9c3 total 5 connected true
cage-6: cage r9c7-r9c8 total 5 connected true
cage-7: cage r7c4-r8c4 total 5 connected true
cage-8: cage r7c6-r8c6 total 5 connected true
cage-9: cage r7c1-r7c2 total 9 connected true
cage-10: cage r7c8-r7c9 total 9 connected true
cage-11: cage r1c5-r2c5 total 9 connected true
cage-12: cage r3c5-r4c5 total 5 connected true
cage-13: cage r6c5-r7c5 total 9 connected true
cage-14: cage r4c2-r4c3 total 5 connected true
cage-15: cage r6c7-r6c8 total 5 connected true
cage-16: cage r5c6-r5c7 total 9 connected true
cage-17: cage r2c6-r2c7 total 9 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 9
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 9
little-killer-4: little-killer r7c1-r8c2-r9c3 sum 9
little-killer-5: little-killer r8c9-r9c8 sum 9
little-killer-6: little-killer r8c1-r9c2 sum 9
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

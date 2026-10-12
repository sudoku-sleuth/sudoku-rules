---
format: open-rules
title: Lekker 2025
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ffyjj1o3nf
case: https://sudoku-sleuth.com/cases/lekker-2025
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r3c5=1 r5c2=2 r6c2=5 r7c6=2 r8c7=5
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2 total 20 connected true
cage-2: cage r2c7-r2c8-r3c8 total 20 connected true
cage-3: cage r3c3-r3c4-r4c3-r4c4 total 25 connected true
cage-4: cage r3c6-r3c7-r4c6-r4c7 total 25 connected true
cage-5: cage r7c1-r7c2-r7c3-r8c3-r9c3 total 20 connected true
cage-6: cage r5c4-r5c5-r5c6-r6c5 total 25 connected true
cage-7: cage r6c4-r6c6-r7c4-r7c5-r7c6 total 20 connected true
cage-8: cage r4c9-r5c9-r6c9 total 20 connected true
cage-9: cage r8c6-r9c4-r9c5-r9c6 total 25 connected true
cage-10: cage r8c1-r8c2-r9c2 total 20 connected true
cage-11: cage r7c7-r7c8-r7c9-r8c7-r9c7 total 20 connected true
cage-12: cage r1c3-r1c4-r1c5 total 20 connected true
cage-13: cage r1c6-r1c7-r1c8-r1c9-r2c6-r2c9 total 25 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 20
little-killer-2: little-killer r4c1-r3c2-r2c3-r1c4 sum 25
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 20
little-killer-4: little-killer r4c9-r3c8-r2c7-r1c6 sum 25
little-killer-5: little-killer r9c4-r8c3-r7c2-r6c1 sum 25
little-killer-6: little-killer r9c3-r8c2-r7c1 sum 20
```

**Standard Sudoku, Cages, Little Killers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

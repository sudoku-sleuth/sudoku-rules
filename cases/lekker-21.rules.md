---
format: open-rules
title: Lekker 21
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xnywk3l3fr
case: https://sudoku-sleuth.com/cases/lekker-21
library: https://rules.sudoku-sleuth.com/
status: read
exported: f4c5e8e6ed31e7529b54df59c45037cd
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2 total 21 connected true
cage-2: cage r1c8-r2c8-r2c9 total 21 connected true
cage-3: cage r7c8-r8c7-r8c8 total 21 connected true
cage-4: cage r8c1-r8c2-r9c2 total 21 connected true
cage-5: cage r3c3-r3c4-r4c3 total 21 connected true
cage-6: cage r6c7-r7c6-r7c7 total 21 connected true
cage-7: cage r1c4-r1c5-r1c6 total 21 connected true
cage-8: cage r1c1-r1c2-r1c3 total 14 connected true
cage-9: cage r2c5-r3c5-r4c5 total 16 connected true
cage-10: cage r6c5-r7c5-r8c5 total 10 connected true
cage-11: cage r6c3-r6c4 total 10 connected true
cage-12: cage r4c7-r4c8 total 12 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 21
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 21
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 12
little-killer-4: little-killer r7c1-r8c2-r9c3 sum 21
little-killer-5: little-killer r4c1-r3c2-r2c3-r1c4 sum 21
little-killer-6: little-killer r1c6-r2c7-r3c8-r4c9 sum 21
little-killer-7: little-killer r6c9-r7c8-r8c7-r9c6 sum 21
little-killer-8: little-killer r9c4-r8c3-r7c2-r6c1 sum 21
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

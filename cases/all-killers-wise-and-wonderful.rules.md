---
format: open-rules
title: All Killers Wise and Wonderful
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/h12q852r6q
case: https://sudoku-sleuth.com/cases/all-killers-wise-and-wonderful
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c4=2 r6c3=3 r8c6=3
exported: 561865c58d7c518fdf9cf94f024980b5
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1-r3c1 total 33 connected true
cage-2: cage r1c7-r1c8-r1c9-r2c9-r3c9 total 17 connected true
cage-3: cage r7c9-r8c9-r9c7-r9c8-r9c9 total 33 connected true
cage-4: cage r7c1-r8c1-r9c1-r9c2-r9c3 total 17 connected true
little-killer-1: little-killer r4c1-r3c2-r2c3-r1c4 sum 26
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 20
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 11
little-killer-4: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-5: little-killer r1c6-r2c7-r3c8-r4c9 sum 14
little-killer-6: little-killer r6c9-r7c8-r8c7-r9c6 sum 26
little-killer-7: little-killer r9c4-r8c3-r7c2-r6c1 sum 16
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 19
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal.

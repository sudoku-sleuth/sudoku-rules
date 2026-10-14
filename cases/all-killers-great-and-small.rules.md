---
format: open-rules
title: All Killers Great and Small
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8wwx3bltp9
case: https://sudoku-sleuth.com/cases/all-killers-great-and-small
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c5=4 r5c1=3 r5c9=1
exported: bc7955eb21988fdb38085f1e79c28e68
---

```rules
sudoku 9x9
cage-1: cage r1c7-r2c7-r3c7-r3c8-r3c9 total 23 connected true
cage-2: cage r1c4-r1c5-r1c6 total 15 connected true
cage-3: cage r3c4-r3c5-r3c6 total 15 connected true
cage-4: cage r7c1-r7c2-r7c3-r8c3-r9c3 total 23 connected true
cage-5: cage r7c7-r7c8-r7c9-r8c7-r9c7 total 30 connected true
cage-6: cage r4c4-r4c5 total 9 connected true
cage-7: cage r4c6-r5c6 total 9 connected true
cage-8: cage r6c5-r6c6 total 9 connected true
cage-9: cage r5c4-r6c4 total 9 connected true
cage-10: cage r4c7-r5c7-r6c7 total 13 connected true
cage-11: cage r4c3-r5c3-r6c3 total 15 connected true
cage-12: cage r7c4-r8c4-r9c4 total 8 connected true
cage-13: cage r7c6-r8c6-r9c6 total 24 connected true
cage-14: cage r1c3-r2c3-r3c1-r3c2-r3c3 total 24 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 6
little-killer-2: little-killer r1c2-r2c1 sum 9
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 24
little-killer-4: little-killer r1c8-r2c9 sum 11
little-killer-5: little-killer r7c1-r8c2-r9c3 sum 24
little-killer-6: little-killer r9c2-r8c1 sum 11
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 8
little-killer-8: little-killer r9c8-r8c9 sum 12
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal.

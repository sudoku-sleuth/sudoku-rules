---
format: open-rules
title: Gentle Killers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/8olpv4fdn1
case: https://sudoku-sleuth.com/cases/gentle-killers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2 total 6 connected true
cage-2: cage r2c7-r2c8-r3c8 total 24 connected true
cage-3: cage r7c8-r8c7-r8c8 total 7 connected true
cage-4: cage r7c2-r8c2-r8c3 total 23 connected true
cage-5: cage r3c3-r3c4-r4c3 total 10 connected true
cage-6: cage r3c6-r3c7-r4c7 total 14 connected true
cage-7: cage r6c7-r7c6-r7c7 total 14 connected true
cage-8: cage r6c3-r7c3-r7c4 total 12 connected true
cage-9: cage r1c5-r2c5-r3c5 total 16 connected true
cage-10: cage r7c5-r8c5-r9c5 total 20 connected true
cage-11: cage r5c1-r5c2-r5c3 total 15 connected true
cage-12: cage r5c7-r5c8-r5c9 total 21 connected true
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 20
little-killer-3: little-killer r7c1-r8c2-r9c3 sum 19
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-5: little-killer r1c2-r2c1 sum 14
little-killer-6: little-killer r1c8-r2c9 sum 7
little-killer-7: little-killer r9c2-r8c1 sum 6
little-killer-8: little-killer r9c8-r8c9 sum 12
```

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

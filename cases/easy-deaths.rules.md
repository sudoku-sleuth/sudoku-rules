---
format: open-rules
title: Easy Deaths
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/io5ji4wz7f
case: https://sudoku-sleuth.com/cases/easy-deaths
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 13 connected true
cage-2: cage r9c7-r9c8 total 15 connected true
cage-3: cage r2c9-r3c9 total 17 connected true
cage-4: cage r7c1-r8c1 total 15 connected true
cage-5: cage r1c6-r1c7 total 10 connected true
cage-6: cage r6c9-r7c9 total 13 connected true
cage-7: cage r9c3-r9c4 total 15 connected true
cage-8: cage r3c1-r4c1 total 9 connected true
cage-9: cage r3c3-r3c4-r4c3 total 18 connected true
cage-10: cage r3c6-r3c7-r4c7 total 15 connected true
cage-11: cage r6c7-r7c6-r7c7 total 12 connected true
cage-12: cage r6c3-r7c3-r7c4 total 14 connected true
little-killer-1: little-killer r2c1-r1c2 sum 5
little-killer-2: little-killer r8c9-r9c8 sum 7
little-killer-3: little-killer r1c8-r2c9 sum 9
little-killer-4: little-killer r9c2-r8c1 sum 11
little-killer-5: little-killer r3c1-r2c2-r1c3 sum 22
little-killer-6: little-killer r1c7-r2c8-r3c9 sum 18
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 20
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 16
little-killer-9: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 47
little-killer-10: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 23
```

- Normal sudoku rules apply.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

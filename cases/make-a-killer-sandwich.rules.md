---
format: open-rules
title: Make a Killer Sandwich
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/jwq24w12ds
case: https://sudoku-sleuth.com/cases/make-a-killer-sandwich
library: https://rules.sudoku-sleuth.com/
status: read
exported: 241d2c0880b336d014858e4417b3f6f2
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 11 connected true
cage-2: cage r6c7-r7c6-r7c7 total 10 connected true
cage-3: cage r6c3-r7c3-r7c4 total 24 connected true
cage-4: cage r3c6-r3c7-r4c7 total 18 connected true
cage-5: cage r4c1-r5c1 total 9 connected true
cage-6: cage r4c9-r5c9 total 7 connected true
cage-7: cage r6c5-r7c5-r8c5-r9c5 total 13 connected true
sandwich-1: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 30
sandwich-2: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 30
sandwich-3: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 30
sandwich-4: sandwich r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 30
sandwich-5: sandwich r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 sum 30
sandwich-6: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 20
sandwich-7: sandwich r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 sum 27
sandwich-8: sandwich r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 5
sandwich-9: sandwich r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sum 8
sandwich-10: sandwich r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 7
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
 Sandwich sum: Clues outside the grid indicate the sum of the digits between 1 and 9 in that row or column.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
-

---
format: open-rules
title: Sumthing in the Corner
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ks13sz8ooy
case: https://sudoku-sleuth.com/cases/sumthing-in-the-corner
library: https://rules.sudoku-sleuth.com/
status: read
exported: 13ab2b1a51f98a881d4aed2f80b75783
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 10 connected true
cage-2: cage r1c8-r1c9-r2c8-r2c9 total 20 connected true
cage-3: cage r8c1-r8c2-r9c1-r9c2 total 24 connected true
cage-4: cage r8c8-r8c9-r9c8-r9c9 total 20 connected true
cage-5: cage r3c6-r3c7-r4c6-r4c7 total 10 connected true
cage-6: cage r3c3-r3c4-r4c3-r4c4 total 20 connected true
cage-7: cage r6c3-r6c4-r7c3-r7c4 total 10 connected true
cage-8: cage r6c6-r6c7-r7c6-r7c7 total 20 connected true
cage-9: cage r1c5-r2c5 total 8 connected true
x-sum-1: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 15
x-sum-2: x-sum r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 20
x-sum-3: x-sum r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 20
x-sum-4: x-sum r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 sum 15
x-sum-5: x-sum r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 15
x-sum-6: x-sum r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 19
x-sum-7: x-sum r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 sum 19
x-sum-8: x-sum r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 sum 21
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Clues outside the grid give the sum of the first X digits in the row or column indicated by the clue, where X is the first digit seen along that row or column.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

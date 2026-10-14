---
format: open-rules
title: X-Caged
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ld5aq9iie7
case: https://sudoku-sleuth.com/cases/x-caged
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5e4be000ebd18d37a8544e1abd64d022
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3 total 11 connected true
cage-2: cage r4c4-r5c4 total 7 connected true
cage-3: cage r3c6-r3c7 total 10 connected true
cage-4: cage r8c2-r8c3-r8c4 total 8 connected true
cage-5: cage r6c2-r7c2 total 7 connected true
cage-6: cage r7c8-r8c8 total 15 connected true
cage-7: cage r4c8-r5c8 total 8 connected true
cage-8: cage r5c3-r6c3 total 12 connected true
cage-9: cage r4c5-r4c6 total 15 connected true
cage-10: cage r8c1-r9c1 total 12 connected true
cage-11: cage r7c4-r7c5-r7c6 total 11 connected true
cage-12: cage r1c7-r1c8 total 8 connected true
x-sum-1: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 16
x-sum-2: x-sum r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 23
x-sum-3: x-sum r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 24
x-sum-4: x-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 14
x-sum-5: x-sum r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 28
x-sum-6: x-sum r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 21
x-sum-7: x-sum r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 24
```

- Normal sudoku rules apply.
- Cages: Digits in cages sum to the value shown in the upper left corner of the cage.
- X-Sums: Clues outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.

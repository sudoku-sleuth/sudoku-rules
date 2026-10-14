---
format: open-rules
title: Locked In Place
setter: sujoyku
source: https://sudokupad.app/9cg5mpjixc
case: https://sudoku-sleuth.com/cases/locked-in-place
library: https://rules.sudoku-sleuth.com/
status: read
exported: e2e9ade6c6e6640a0064f79cee260dec
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 8 connected true
cage-2: cage r3c1-r4c1-r5c1 total 7 connected true
cage-3: cage r3c6-r3c7-r3c8 total 12 connected true
cage-4: cage r4c3-r4c4-r4c5 total 8 connected true
cage-5: cage r6c4-r6c5-r7c3-r7c4 total 30 connected true
cage-6: cage r4c7-r4c8-r5c6-r5c7 total 30 connected true
cage-7: cage r8c1-r9c1-r9c2 total 21 connected true
cage-8: cage r8c9-r9c9 total 15 connected true
cage-9: cage r1c8-r1c9-r2c9 total 18 connected true
cage-10: cage r9c6-r9c7 total 15 connected true
quadruple-1: quadruple r2c3-r2c4-r3c3-r3c4 digits [1,2,3,4]
quadruple-2: quadruple r7c6-r7c7-r8c6-r8c7 digits [2,3,4,5]
quadruple-3: quadruple r8c3-r8c4-r9c3-r9c4 digits [2,4,6,8]
quadruple-4: quadruple r1c6-r1c7-r2c6-r2c7 digits [1,2,3,5]
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and sum to the clue in the top left.

- Quadruple: Digits in a circle must appear in the four surrounding cells.

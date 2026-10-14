---
format: open-rules
title: Lucky flower
setter: Chip Sounder
source: https://sudokupad.app/bppjlm45ht
case: https://sudoku-sleuth.com/cases/lucky-flower
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=3 r1c8=4 r2c1=1 r2c9=9 r8c1=6 r8c9=4 r9c2=2 r9c5=1
exported: 88b3329ab80711a52660ea3a3b724264
---

```rules
sudoku 9x9
cage-1: cage r8c3-r8c4 total 17 connected true
cage-2: cage r3c8-r4c8 total 17 connected true
cage-3: cage r8c6-r8c7 total 3 connected true
cage-4: cage r6c8-r7c8 total 3 connected true
cage-5: cage r6c2-r7c2 total 13 connected true
cage-6: cage r2c6-r2c7 total 13 connected true
cage-7: cage r2c3-r2c4 total 7 connected true
cage-8: cage r3c2-r4c2 total 7 connected true
cage-9: cage r5c3-r5c4 total 5 connected true
cage-10: cage r5c6-r5c7 total 5 connected true
cage-11: cage r3c5-r4c5 total 15 connected true
cage-12: cage r6c5-r7c5 total 15 connected true
kropki r3c3-r3c4 white
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage sum to the total given in the top left corner of the cage.
Cells separated by a white dot are consecutive.

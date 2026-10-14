---
format: open-rules
title: Renkilkrop-banlerki
setter: Chip Sounder
source: https://sudokupad.app/g10mlm6iyq
case: https://sudoku-sleuth.com/cases/renkilkrop-banlerki
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=1 r3c7=2 r7c3=2 r7c7=1
exported: e83044e42dd339e4292f59908d03c030
---

```rules
sudoku 9x9
cage-1: cage r8c3-r8c4-r8c5 total 14 connected true
cage-2: cage r3c8-r4c8 total 14 connected true
cage-3: cage r6c2-r7c2 total 14 connected true
cage-4: cage r2c5-r2c6-r2c7 total 14 connected true
cage-5: cage r3c1-r3c2 total 17 connected true
cage-6: cage r1c4-r1c5 total 17 connected true
cage-7: cage r6c9-r7c8-r7c9 total 18 connected true
cage-8: cage r9c3-r9c4-r9c5 total 15 connected true
cage-9: cage r5c1-r6c1-r7c1 total 15 connected true
cage-10: cage r4c1-r4c2 total 9 connected true
cage-11: cage r5c8-r5c9 total 9 connected true
cage-12: cage r8c7-r9c7 total 9 connected true
cage-13: cage r2c3-r2c4 total 9 connected true
cage-14: cage r8c6-r9c6 total 9 connected true
kropki-1: kropki r3c9-r4c9 white
kropki-2: kropki r5c5-r6c5 white
renban-1: renban r3c1-r4c1-r5c1-r6c1-r7c1
renban-2: renban r9c3-r9c4-r9c5-r9c6-r9c7
renban-3: renban r3c9-r4c9-r5c9-r6c9-r7c9
renban-4: renban r1c3-r1c4-r1c5-r1c6-r1c7
renban-5: renban r4c5-r4c4-r5c4-r5c5
renban-6: renban r6c6-r7c5
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage sum to the total given in the top left corner of the cage without repeat.
Cells on a purple line must form a set of consecutive digits in any order without repeat.
Cells separated by a white dot are consecutive.

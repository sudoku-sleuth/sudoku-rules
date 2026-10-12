---
format: open-rules
title: Whispering cages
setter: Chip Sounder
source: https://sudokupad.app/r1lx91snck
case: https://sudoku-sleuth.com/cases/whispering-cages-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c6-r6c7-r6c8-r6c9-r7c6-r8c6-r9c6 total 36 connected true
cage-2: cage r1c5-r2c5-r3c5-r4c5-r5c1-r5c2-r5c3-r5c4-r5c5 connected true
cage-3: cage r7c2-r8c2-r9c2 total 7 connected true
cage-4: cage r1c7-r1c8-r1c9 total 9 connected true
cage-5: cage r2c1-r2c2 total 12 connected true
cage-6: cage r2c8-r2c9 total 9 connected true
cage-7: cage r4c7-r5c7-r5c8-r5c9 total 19 connected true
cage-8: cage r8c8-r8c9-r9c8-r9c9 total 16 connected true
whispers-1: whispers r4c1-r4c2-r4c3-r4c4-r3c4-r2c4-r1c4 gap 5
whispers-2: whispers r6c5-r6c4-r6c3-r6c2 gap 5
whispers-3: whispers r2c6-r3c6-r4c6 gap 5
whispers-4: whispers r1c2-r2c1 gap 5
whispers-5: whispers r5c9-r5c8-r5c7-r4c7 gap 5
whispers-6: whispers r7c8-r7c7-r8c7-r9c7-r9c6 gap 5
whispers-7: whispers r7c6-r8c5-r8c4-r7c3 gap 5
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a dotted cage without repeat, sum to the total in the top left corner (if given).
Adjacent digits along a green line must differ by at least 5.

---
format: open-rules
title: Quietly staring at the dot
setter: Chip Sounder
source: https://sudokupad.app/ls4syrcq52
case: https://sudoku-sleuth.com/cases/quietly-staring-at-the-dot
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c9=6
---

```rules
sudoku 9x9
kropki r9c8-r9c9 colour "black"
whispers r4c9-r3c8-r3c7-r2c6-r1c6-r2c5-r1c4-r1c3-r2c4-r3c5-r4c4-r3c3-r2c2-r2c1-r3c1-r4c2-r5c1-r6c2-r7c1-r8c1-r9c1-r9c2-r9c3-r8c3-r7c3-r8c4-r9c5-r9c6-r8c7-r8c6-r7c6-r7c7-r8c8-r7c9-r6c9-r6c8-r6c7-r5c6-r4c5-r5c4-r5c3-r6c3-r6c4-r5c5 gap 5
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Adjacent digits along a green line must differ by at least 5.
Cells separated by a black dot has one digit double the other (1:2 ratio).
No negative constraints.

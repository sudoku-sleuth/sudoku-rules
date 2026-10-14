---
format: open-rules
title: Outside influencer set puzzle 1
setter: Chip Sounder
source: https://sudokupad.app/hft61pijhz
case: https://sudoku-sleuth.com/cases/outside-influencer-set-puzzle-1
library: https://rules.sudoku-sleuth.com/
status: read
exported: cac9b76d6b8d4e1cff69fc628a63b3a6
---

```rules
sudoku 9x9
little-killer-1: little-killer r7c1-r8c2-r9c3 sum 8
little-killer-2: little-killer r9c4-r8c3-r7c2-r6c1 sum 13
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 20
little-killer-4: little-killer r1c3-r2c2-r3c1 sum 19
little-killer-5: little-killer r4c1-r3c2-r2c3-r1c4 sum 21
little-killer-6: little-killer r8c9-r9c8 sum 8
little-killer-7: little-killer r1c2-r2c1 sum 10
sandwich-1: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 32
sandwich-2: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 35
sandwich-3: sandwich r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 20
sandwich-4: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 20
sandwich-5: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 10
sandwich-6: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 14
sandwich-7: sandwich r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 11
sandwich-8: sandwich r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 19
sandwich-9: sandwich r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 13
sandwich-10: sandwich r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 3
sandwich-11: sandwich r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sum 17
```

All clues in this set must be outside the grid.
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Red clues with an arrow sum the digits on the indicated diagonal, digits may repeat (if other rules allow).
However, blue clues sum the digits between the 1 and 9 in their respective row/column.

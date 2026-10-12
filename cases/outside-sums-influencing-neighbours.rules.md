---
format: open-rules
title: Outside sums influencing neighbours
setter: Chip Sounder
source: https://sudokupad.app/on0zpr4fs2
case: https://sudoku-sleuth.com/cases/outside-sums-influencing-neighbours
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c8-r9c8 colour "white"
kropki-2: kropki r6c1-r7c1 colour "white"
kropki-3: kropki r7c9-r8c9 colour "white"
kropki-4: kropki r7c8-r7c9 colour "white"
kropki-5: kropki r5c9-r6c9 colour "white"
kropki-6: kropki r5c6-r5c7 colour "white"
kropki-7: kropki r3c8-r3c9 colour "white"
kropki-8: kropki r3c4-r4c4 colour "white"
kropki-9: kropki r1c5-r2c5 colour "white"
x-sum-1: x-sum r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 43
x-sum-2: x-sum r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 39
x-sum-3: x-sum r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 38
x-sum-4: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 31
x-sum-5: x-sum r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 17
x-sum-6: x-sum r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 14
x-sum-7: x-sum r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sum 28
x-sum-8: x-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 28
x-sum-9: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 10
x-sum-10: x-sum r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 20
x-sum-11: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 30
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Clues outside the grid show the sum of the first X digits, where X is the first seen digit it the respective row/column.
Cells separated by a white dot are consecutive.
Not all dots are given.

---
format: open-rules
title: Top to Bottom
setter: EPH
source: https://sudokupad.app/xigs1oroyd
case: https://sudoku-sleuth.com/cases/top-to-bottom
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 27
little-killer-2: little-killer r1c3-r2c2-r3c1 sum 11
little-killer-3: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 23
little-killer-4: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 34
little-killer-5: little-killer r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 sum 41
little-killer-6: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 31
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 15
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 22
little-killer-9: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 30
little-killer-10: little-killer r9c7-r8c6-r7c5-r6c4-r5c3-r4c2-r3c1 sum 50
little-killer-11: little-killer r9c9-r8c8-r7c7-r6c6-r5c5-r4c4-r3c3-r2c2-r1c1 sum 57
little-killer-12: little-killer r8c1-r9c2 sum 7
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Numbers outside the grid show the totals of the digits on the indicated diagonals.

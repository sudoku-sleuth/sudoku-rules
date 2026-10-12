---
format: open-rules
title: Extreme Sandwich
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/extreme-sandwich
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c1-r8c2 colour "white"
kropki-2: kropki r4c3-r5c3 colour "white"
kropki-3: kropki r5c6-r6c6 colour "white"
kropki-4: kropki r6c6-r6c7 colour "white"
kropki-5: kropki r7c4-r7c5 colour "white"
kropki-6: kropki r8c8-r9c8 colour "black"
kropki-7: kropki r3c7-r4c7 colour "black"
kropki-8: kropki r4c6-r4c7 colour "black"
kropki-9: kropki r6c3-r7c3 colour "black"
sandwich-1: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 35
sandwich-2: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 30
sandwich-3: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 14
sandwich-4: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 7
sandwich-5: sandwich r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 7
sandwich-6: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 30
sandwich-7: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 35
sandwich-8: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 20
sandwich-9: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 15
sandwich-10: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 17
sandwich-11: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 23
extremum r5c1-r2c3 type "max" exhaustive false
```

Normal Sudoku rules apply. SANDWICH SUMS- Numbers outside the grid are the sum of the numbers BETWEEN THE 1 AND THE 9 in the indicated row or column. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Gray cells with shaded arrows pointing out indicate that the cell is greater than all orthogonally adjacent cells.

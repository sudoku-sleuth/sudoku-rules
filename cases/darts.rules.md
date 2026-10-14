---
format: open-rules
title: Darts
setter: EPH
source: https://tinyurl.com/yurxcna2
case: https://sudoku-sleuth.com/cases/darts
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3ade7a2427351b45cb45c17670aeb25a
---

```rules
sudoku 9x9
cage-1: cage r1c3-r1c4 total 9 connected true
cage-2: cage r3c1-r4c1 total 11 connected true
cage-3: cage r6c3-r6c4-r7c3-r7c4 total 20 connected true
cage-4: cage r3c6-r3c7-r4c6-r4c7 total 20 connected true
cage-5: cage r9c6-r9c7 total 10 connected true
cage-6: cage r6c9-r7c9 total 11 connected true
little-killer-1: little-killer r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 sum 39
little-killer-2: little-killer r5c9-r4c8-r3c7-r2c6-r1c5 sum 39
little-killer-3: little-killer r7c9-r6c8-r5c7-r4c6-r3c5-r2c4-r1c3 sum 38
little-killer-4: little-killer r9c4-r8c5-r7c6-r6c7-r5c8-r4c9 sum 32
little-killer-5: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 34
little-killer-6: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 53
little-killer-7: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 56
little-killer-8: little-killer r4c9-r3c8-r2c7-r1c6 sum 23
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits in each cage must sum to the number in the top left corner of the cage.

Clues outside the grid give the sum of the digits along the indicated diagonal.  Digits may repeat if allowed by other rules.

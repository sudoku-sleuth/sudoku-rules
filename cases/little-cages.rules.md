---
format: open-rules
title: Little Cages
setter: EPH
source: https://tinyurl.com/5jkefnxh
case: https://sudoku-sleuth.com/cases/little-cages
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2 total 6 connected true
cage-2: cage r2c3-r3c3 total 6 connected true
cage-3: cage r2c7-r2c8 total 7 connected true
cage-4: cage r3c7-r3c8 total 7 connected true
cage-5: cage r7c7-r8c7 total 6 connected true
cage-6: cage r7c8-r8c8 total 6 connected true
cage-7: cage r7c2-r7c3 total 5 connected true
cage-8: cage r8c2-r8c3 total 5 connected true
cage-9: cage r5c3-r5c4 total 10 connected true
cage-10: cage r3c5-r4c5 total 11 connected true
cage-11: cage r5c6-r5c7 total 12 connected true
cage-12: cage r6c5-r7c5 total 13 connected true
little-killer-1: little-killer r4c9-r3c8-r2c7-r1c6 sum 21
little-killer-2: little-killer r7c1-r8c2-r9c3 sum 14
little-killer-3: little-killer r9c6-r8c7-r7c8-r6c9 sum 15
little-killer-4: little-killer r1c3-r2c2-r3c1 sum 12
little-killer-5: little-killer r6c1-r7c2-r8c3-r9c4 sum 13
little-killer-6: little-killer r3c9-r2c8-r1c7 sum 13
little-killer-7: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 26
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits in cages must sum to the number in the top left corner of the cage.  Digits are not allowed to repeat in a cage.

Clues outside the grid show the total of the digits on the indicated diagonal.

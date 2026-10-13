---
format: open-rules
title: Primrose
setter: Will Power
source: https://f-puzzles.com/?id=y22ghr9t
case: https://sudoku-sleuth.com/cases/primrose
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair-1: pair r3c3-r4c3 sum 10
pair-2: pair r5c4-r6c4 sum 10
pair-3: pair r7c5-r8c5 sum 10
pair-4: pair r4c4-r4c5 sum 10
pair-5: pair r3c6-r3c7 sum 10
pair-6: pair r5c2-r5c3 sum 10
pair-7: pair r5c7-r5c8 sum 10
pair-8: pair r4c6-r5c6 sum 10
pair-9: pair r6c5-r6c6 sum 10
pair-10: pair r2c3-r2c4 sum 10
pair-11: pair r2c5-r3c5 sum 10
pair-12: pair r3c8-r4c8 sum 10
pair-13: pair r6c7-r7c7 sum 10
pair-14: pair r8c6-r8c7 sum 10
pair-15: pair r7c3-r7c4 sum 10
pair-16: pair r6c2-r7c2 sum 10
quadruple-1: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,4,6,7]
quadruple-2: quadruple r7c7-r7c8-r8c7-r8c8 digits [2,4,7,8]
quadruple-3: quadruple r2c7-r2c8-r3c7-r3c8 digits [3,4,6,9]
quadruple-4: quadruple r2c2-r2c3-r3c2-r3c3 digits [2,5,8,9]
quadruple-5: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,2,4,8]
quadruple-6: quadruple r5c1-r5c2-r6c1-r6c2 digits [3,4,7,9]
quadruple-7: quadruple r1c4-r1c5-r2c4-r2c5 digits [2,3,4,8]
quadruple-8: quadruple r4c8-r4c9-r5c8-r5c9 digits [1,2,7,9]
```

Normal Sudoku rules apply.  Numbers in circles are the values of the four cells surrounding them, in some order.  Numbers with an "X" between sum to 10.

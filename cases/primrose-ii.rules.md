---
format: open-rules
title: Primrose II
setter: Will Power
source: https://f-puzzles.com/?id=y3reukcs
case: https://sudoku-sleuth.com/cases/primrose-ii
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=6 r2c1=7 r8c9=8 r9c2=9
---

```rules
sudoku 9x9
kropki r1c2-r2c2 colour "white"
arrow-1: arrow r9c9-r9c8-r8c8 bulb ["r8c9"]
arrow-2: arrow r9c1-r8c1-r8c2 bulb ["r9c2"]
arrow-3: arrow r1c1-r1c2-r2c2 bulb ["r2c1"]
arrow-4: arrow r1c9-r2c9-r2c8 bulb ["r1c8"]
pair-1: pair r4c6-r4c7 sum 10
pair-2: pair r3c5-r3c6 sum 10
pair-3: pair r3c4-r4c4 sum 10
pair-4: pair r4c3-r5c3 sum 10
pair-5: pair r6c3-r6c4 sum 10
pair-6: pair r7c4-r7c5 sum 10
pair-7: pair r6c6-r7c6 sum 10
pair-8: pair r5c7-r6c7 sum 10
pair-9: pair r1c4-r1c5 sum 10
pair-10: pair r5c1-r6c1 sum 10
pair-11: pair r9c5-r9c6 sum 10
pair-12: pair r4c9-r5c9 sum 10
pair-13: pair r3c6-r3c7 sum 5
pair-14: pair r6c7-r7c7 sum 5
pair-15: pair r7c3-r7c4 sum 5
pair-16: pair r3c3-r4c3 sum 5
```

Normal Sudoku rules apply.  Numbers on arrows sum to the number in the arrow's circle. Numbers with an "X" between them sum to 10.  Numbers with a "V" between them sum to 5.  Numbers with a white dot between them are consecutive.  Not all possible dots, X's and V's are given.

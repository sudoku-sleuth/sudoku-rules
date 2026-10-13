---
format: open-rules
title: "Solver Series: MarthaB"
setter: Tingo
source: https://tinyurl.com/solverseriesmarthabsudoku
case: https://sudoku-sleuth.com/cases/solver-series-marthab
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c2-r9c2 colour "white"
kropki-2: kropki r2c9-r3c9 colour "white"
kropki-3: kropki r1c7-r2c7 colour "white"
whispers-1: whispers r3c1-r2c1-r1c1-r2c2-r1c3-r2c3-r3c3 gap 5
whispers-2: whispers r3c4-r2c4-r1c5-r2c6-r3c6 gap 5
whispers-3: whispers r4c4-r4c5-r4c6 gap 5
whispers-4: whispers r6c5-r5c5-r4c5 gap 5
whispers-5: whispers r9c4-r8c4-r7c5-r8c6-r9c6 gap 5
whispers-6: whispers r6c1-r5c1-r4c1-r4c2-r4c3-r5c3-r5c2-r6c3 gap 2
whispers-7: whispers r7c1-r8c1-r9c1 gap 2
whispers-8: whispers r7c3-r8c3-r9c3 gap 2
whispers-9: whispers r8c1-r8c2-r8c3 gap 2
whispers-10: whispers r4c7-r4c8-r5c9-r6c8-r7c9-r8c8-r8c7-r7c7-r6c7-r5c7 gap 2
whispers-11: whispers r5c7-r4c7 gap 2
pair-1: pair r1c9-r2c9 sum 10
pair-2: pair r3c8-r3c9 sum 10
pair-3: pair r2c7-r3c7 sum 10
pair-4: pair r1c7-r1c8 sum 10
pair-5: pair r7c2-r8c2 sum 10
pair-6: pair r9c5-r9c6 sum 10
pair-7: pair r1c1-r2c1 sum 10
pair-8: pair r1c8-r1c9 sum 5
pair-9: pair r3c7-r3c8 sum 5
pair-10: pair r2c1-r2c2 sum 5
pair-11: pair r4c1-r5c1 sum 5
```

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5.
Black lines are anti-consecutive lines. Adjacent digits along the line must differ by at least 2.
Cells joined by V must sum to 5. Cells joined by X must sum to 10. Not all Vs or Xs are given.
Cells joined by white dots are consecutive. Not all white dots are given.

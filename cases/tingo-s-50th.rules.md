---
format: open-rules
title: Tingo's 50th!
setter: Tingo
source: https://tinyurl.com/tingos50thsudoku
case: https://sudoku-sleuth.com/cases/tingo-s-50th
library: https://rules.sudoku-sleuth.com/
status: read
exported: 52346b6f4487ce3d2ed3f1c1be8e479a
---

```rules
sudoku 9x9
kropki-1: kropki r6c3-r7c3 white
kropki-2: kropki r5c5-r6c5 white
kropki-3: kropki r5c6-r5c7 white
whispers-1: whispers r1c3-r1c2-r1c1-r2c1-r3c1-r3c2-r3c3-r4c3-r5c3-r5c2-r5c1 gap 5
whispers-2: whispers r4c6-r4c5-r4c4-r5c4-r6c4-r6c5-r6c6-r7c6-r8c6-r8c5-r8c4 gap 5
renban-1: renban r1c4-r2c4-r3c4-r3c5-r3c6-r2c6-r1c6-r1c5
renban-2: renban r6c7-r6c8-r6c9-r7c9-r8c9-r7c7-r8c7-r8c8
pair-1: pair r7c8-r8c8 sum 5
pair-2: pair r8c7-r9c7 sum 5
pair-3: pair r9c6-r9c7 sum 5
pair-4: pair r7c2-r8c2 sum 5
pair-5: pair r9c2-r9c3 sum 5
pair-6: pair r1c9-r2c9 sum 5
pair-7: pair r3c9-r4c9 sum 5
pair-8: pair r1c6-r2c6 sum 5
pair-9: pair r2c6-r2c7 sum 5
pair-10: pair r2c4-r3c4 sum 5
pair-11: pair r3c3-r3c4 sum 5
pair-12: pair r4c5-r5c5 sum 5
pair-13: pair r5c3-r5c4 sum 5
pair-14: pair r5c1-r6c1 sum 5
negative relations [{"op":"sum","value":5}] except [["r6c3","r7c3"],["r5c5","r6c5"],["r5c6","r5c7"],["r7c8","r8c8"],["r8c7","r9c7"],["r9c6","r9c7"],["r7c2","r8c2"],["r9c2","r9c3"],["r1c9","r2c9"],["r3c9","r4c9"],["r1c6","r2c6"],["r2c6","r2c7"],["r2c4","r3c4"],["r3c3","r3c4"],["r4c5","r5c5"],["r5c3","r5c4"],["r5c1","r6c1"]]
```

This is the 50th puzzle I've set. Thanks for playing!

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5.
Pink lines are Renban lines. All digits along a given Renban line are consecutive in any order, and may not repeat.
Cells separated by white dots are consecutive in value. Not all white dots are given.
Cells separated by Vs sum to 5. All Vs are given!

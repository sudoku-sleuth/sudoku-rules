---
format: open-rules
title: The Knight Who Says Meh
setter: Tingo
source: https://tinyurl.com/theknightwhosaysmehsudoku
case: https://sudoku-sleuth.com/cases/the-knight-who-says-meh
library: https://rules.sudoku-sleuth.com/
status: read
exported: b0309f3b72d21c0060bcf5226a1f3183
---

```rules
sudoku 9x9
anti-knight
kropki r2c2-r2c3 black
pair-1: pair r1c3-r2c3 sum 10
pair-2: pair r1c2-r2c2 sum 10
pair-3: pair r4c3-r5c3 sum 10
pair-4: pair r4c1-r5c1 sum 10
pair-5: pair r8c3-r8c4 sum 10
pair-6: pair r2c3-r3c3 sum 5
pair-7: pair r5c1-r6c1 sum 5
pair-8: pair r7c7-r8c7 sum 5
pair-9: pair r4c8-r5c8 sum 5
negative relations [{"op":"difference","value":1}] except [["r2c2","r2c3"],["r2c3","r3c3"],["r1c3","r2c3"],["r1c2","r2c2"],["r4c3","r5c3"],["r4c1","r5c1"],["r5c1","r6c1"],["r8c3","r8c4"],["r7c7","r8c7"],["r4c8","r5c8"]]
```

Normal Sudoku Rules Apply
Cells separated by a knight's move (in chess) cannot contain the same value.
Orthogonally adjacent cells may not contain consecutive values (anti-kropki)
Cells connected by Xs sum to 10. Cells connected by Vs sum to 5. Not all Xs or Vs are given.
Cells separated by black dots have a value ratio of 2:1. Not all dots are given.

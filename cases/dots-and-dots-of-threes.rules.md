---
format: open-rules
title: Dots and Dots of Threes
setter: EPH
source: https://f-puzzles.com/?id=2mo9gwcr
case: https://sudoku-sleuth.com/cases/dots-and-dots-of-threes
library: https://rules.sudoku-sleuth.com/
status: read
exported: f2b00490b9e36211b5e339c2a949548d
---

```rules
sudoku 9x9
pair-1: pair r3c2-r4c2 difference 3
pair-2: pair r6c1-r7c1 difference 3
pair-3: pair r8c2-r8c3 difference 3
pair-4: pair r9c3-r9c4 difference 3
pair-5: pair r2c3-r2c4 difference 3
pair-6: pair r3c6-r4c6 difference 3
pair-7: pair r5c5-r6c5 difference 3
pair-8: pair r7c4-r8c4 difference 3
pair-9: pair r8c7-r9c7 difference 3
pair-10: pair r6c6-r6c7 difference 3
pair-11: pair r2c8-r2c9 difference 3
pair-12: pair r1c7-r1c8 difference 3
pair-13: pair r9c7-r9c8 difference 3
pair-14: pair r1c3-r2c3 ratio 3
pair-15: pair r2c4-r2c5 ratio 3
pair-16: pair r1c6-r2c6 ratio 3
pair-17: pair r1c6-r1c7 ratio 3
pair-18: pair r1c8-r1c9 ratio 3
pair-19: pair r5c6-r5c7 ratio 3
pair-20: pair r4c6-r5c6 ratio 3
pair-21: pair r5c4-r6c4 ratio 3
pair-22: pair r6c2-r7c2 ratio 3
pair-23: pair r8c1-r8c2 ratio 3
pair-24: pair r7c5-r8c5 ratio 3
pair-25: pair r4c8-r5c8 ratio 3
pair-26: pair r3c1-r3c2 ratio 3
negative relations [{"op":"ratio","value":3}] except [["r3c2","r4c2"],["r6c1","r7c1"],["r8c2","r8c3"],["r9c3","r9c4"],["r2c3","r2c4"],["r3c6","r4c6"],["r5c5","r6c5"],["r7c4","r8c4"],["r8c7","r9c7"],["r6c6","r6c7"],["r2c8","r2c9"],["r1c7","r1c8"],["r9c7","r9c8"],["r1c3","r2c3"],["r2c4","r2c5"],["r1c6","r2c6"],["r1c6","r1c7"],["r1c8","r1c9"],["r5c6","r5c7"],["r4c6","r5c6"],["r5c4","r6c4"],["r6c2","r7c2"],["r8c1","r8c2"],["r7c5","r8c5"],["r4c8","r5c8"],["r3c1","r3c2"]]
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits in cells separated by a white dot have a difference of 3.

Digits in cells separated by a black dot are in a 1:3 ratio.

All possible black dots are given.  It is not necessarily the case that all possible white dots are given.

---
format: open-rules
title: Roman Ratios
setter: Tingo
source: https://tinyurl.com/3n923z6f
case: https://sudoku-sleuth.com/cases/roman-ratios
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r2c2 colour "black"
kropki-2: kropki r2c1-r3c1 colour "black"
kropki-3: kropki r4c7-r4c8 colour "black"
kropki-4: kropki r7c8-r7c9 colour "black"
kropki-5: kropki r5c9-r6c9 colour "black"
kropki-6: kropki r6c4-r7c4 colour "black"
pair-1: pair r7c1-r7c2 sum 10
pair-2: pair r7c5-r8c5 sum 10
pair-3: pair r7c8-r8c8 sum 10
pair-4: pair r7c9-r8c9 sum 10
pair-5: pair r4c1-r5c1 sum 10
pair-6: pair r1c2-r1c3 sum 10
pair-7: pair r3c2-r3c3 sum 10
pair-8: pair r5c3-r6c3 sum 10
pair-9: pair r5c4-r6c4 sum 10
pair-10: pair r5c7-r6c7 sum 10
pair-11: pair r4c8-r5c8 sum 10
pair-12: pair r4c9-r5c9 sum 10
pair-13: pair r4c6-r4c7 sum 10
pair-14: pair r1c7-r1c8 sum 10
pair-15: pair r1c1-r1c2 sum 5
pair-16: pair r3c1-r3c2 sum 5
pair-17: pair r4c2-r4c3 sum 5
pair-18: pair r2c7-r2c8 sum 5
pair-19: pair r5c8-r5c9 sum 5
pair-20: pair r3c1-r4c1 sum 5
```

Normal Sudoku Rules Apply
Cells separated by a V sum to 5. Not all Vs are given.
Cells separated by an X sum to 10. Not all Xs are given.
Cells separated by a black dot are a ratio of 2:1. Not all black dots are given.

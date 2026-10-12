---
format: open-rules
title: The Knight That Sees Spots
setter: Tingo
source: https://tinyurl.com/theknightthatseesspots
case: https://sudoku-sleuth.com/cases/the-knight-that-sees-spots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r5c4-r6c4 colour "white"
kropki-3: kropki r5c2-r5c3 colour "white"
kropki-4: kropki r4c2-r4c3 colour "white"
kropki-5: kropki r4c1-r5c1 colour "white"
kropki-6: kropki r5c1-r6c1 colour "white"
kropki-7: kropki r6c1-r7c1 colour "white"
kropki-8: kropki r5c1-r5c2 colour "black"
kropki-9: kropki r5c3-r6c3 colour "black"
kropki-10: kropki r4c3-r5c3 colour "black"
kropki-11: kropki r4c7-r5c7 colour "black"
kropki-12: kropki r5c7-r5c8 colour "black"
kropki-13: kropki r3c8-r4c8 colour "black"
kropki-14: kropki r6c2-r7c2 colour "black"
kropki-15: kropki r7c1-r7c2 colour "black"
kropki-16: kropki r8c8-r9c8 colour "black"
kropki-17: kropki r8c7-r9c7 colour "black"
```

Normal Sudoku Rules Apply
Any two cells separated by a knight's move (in chess) cannot contain the same digit.
Cells connected by black dots have a value ratio of 2:1. Cells connected by white dots are consecutive. Not all black or white dots are given.

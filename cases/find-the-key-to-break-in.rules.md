---
format: open-rules
title: Find the Key to Break In
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/find-the-key-to-break-in
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r1c3 colour "white"
kropki-2: kropki r1c3-r2c3 colour "white"
kropki-3: kropki r2c3-r2c4 colour "white"
kropki-4: kropki r2c4-r2c5 colour "white"
kropki-5: kropki r4c3-r4c4 colour "white"
kropki-6: kropki r4c4-r5c4 colour "white"
kropki-7: kropki r5c4-r5c5 colour "white"
kropki-8: kropki r5c5-r5c6 colour "white"
kropki-9: kropki r7c4-r7c5 colour "white"
kropki-10: kropki r7c5-r8c5 colour "white"
kropki-11: kropki r8c5-r8c6 colour "white"
kropki-12: kropki r8c6-r8c7 colour "white"
kropki-13: kropki r8c1-r8c2 colour "white"
kropki-14: kropki r3c5-r4c5 colour "white"
kropki-15: kropki r3c4-r4c4 colour "black"
pair-1: pair r2c1-r2c2 sum 5
pair-2: pair r4c5-r4c6 sum 5
pair-3: pair r6c8-r6c9 sum 5
pair-4: pair r5c2-r5c3 sum 5
pair-5: pair r8c3-r8c4 sum 5
pair-6: pair r7c6-r7c7 sum 5
pair-7: pair r3c7-r3c8 sum 5
pair-8: pair r1c4-r1c5 sum 5
pair-9: pair r5c7-r5c8 sum 5
pair-10: pair r6c4-r6c5 sum 5
pair-11: pair r2c6-r2c7 sum 5
```

Normal Sudoku rules apply. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all V and dots are given.

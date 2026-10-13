---
format: open-rules
title: Mingling at the Dinner Party?
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/mingling-at-the-dinner-party
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c6-r4c7 colour "white"
kropki-2: kropki r4c5-r4c6 colour "white"
kropki-3: kropki r4c4-r4c5 colour "white"
kropki-4: kropki r4c3-r4c4 colour "white"
kropki-5: kropki r7c1-r8c1 colour "white"
kropki-6: kropki r8c1-r9c1 colour "white"
kropki-7: kropki r7c2-r8c2 colour "white"
kropki-8: kropki r8c2-r8c3 colour "white"
kropki-9: kropki r9c1-r9c2 colour "white"
kropki-10: kropki r9c2-r9c3 colour "white"
kropki-11: kropki r8c8-r9c8 colour "black"
kropki-12: kropki r9c8-r9c9 colour "black"
pair-1: pair r4c7-r5c7 sum 10
pair-2: pair r6c7-r7c7 sum 10
pair-3: pair r7c5-r7c6 sum 10
pair-4: pair r7c3-r7c4 sum 10
pair-5: pair r5c3-r6c3 sum 10
pair-6: pair r3c3-r4c3 sum 10
pair-7: pair r3c4-r3c5 sum 10
pair-8: pair r3c6-r3c7 sum 10
pair-9: pair r3c8-r3c9 sum 10
pair-10: pair r1c9-r2c9 sum 10
pair-11: pair r1c7-r1c8 sum 10
pair-12: pair r3c3-r3c4 sum 5
pair-13: pair r6c3-r7c3 sum 5
pair-14: pair r7c6-r7c7 sum 5
pair-15: pair r3c7-r4c7 sum 5
pair-16: pair r5c6-r6c6 sum 5
pair-17: pair r5c5-r6c5 sum 5
```

Normal Sudoku rules apply. XV PAIRS- Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all Xs, Vs, and dots are given.

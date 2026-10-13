---
format: open-rules
title: Speed Dial
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/speed-dial
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c9-r5c9 colour "white"
kropki-2: kropki r1c1-r1c2 colour "white"
pair-1: pair r1c3-r2c3 sum 10
pair-2: pair r4c3-r5c3 sum 10
pair-3: pair r7c1-r7c2 sum 10
pair-4: pair r6c4-r7c4 sum 10
pair-5: pair r9c4-r9c5 sum 10
pair-6: pair r6c5-r6c6 sum 10
pair-7: pair r5c8-r6c8 sum 10
pair-8: pair r8c8-r8c9 sum 10
pair-9: pair r2c5-r3c5 sum 10
pair-10: pair r1c5-r1c6 sum 10
pair-11: pair r7c5-r8c5 sum 10
pair-12: pair r5c1-r5c2 sum 5
pair-13: pair r5c3-r6c3 sum 5
pair-14: pair r5c3-r5c4 sum 5
pair-15: pair r4c8-r4c9 sum 5
pair-16: pair r3c5-r3c6 sum 5
pair-17: pair r3c6-r4c6 sum 5
```

Normal Sudoku rules apply. There are 4 orthogonally continuous clones of the numbers 1-9 in the grid (numbers are in the same position in all clones). A clone does not touch any other clone adjacent or diagonally. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. X, V and white dots can be outside of, or touching a clone, but never between numbers inside a clone. Not all X, V and dots are necessarily given.

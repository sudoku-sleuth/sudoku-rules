---
format: open-rules
title: Flexibility Is Key to Success
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/flexibility-is-key-to-success
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c1-r8c2 total 12 connected true
cage-2: cage r1c8-r2c8 total 13 connected true
kropki-1: kropki r5c2-r5c3 colour "white"
kropki-2: kropki r8c7-r9c7 colour "white"
kropki-3: kropki r8c7-r8c8 colour "white"
kropki-4: kropki r1c9-r2c9 colour "white"
kropki-5: kropki r2c9-r3c9 colour "white"
kropki-6: kropki r5c2-r6c2 colour "white"
kropki-7: kropki r8c3-r9c3 colour "white"
kropki-8: kropki r9c3-r9c4 colour "white"
kropki-9: kropki r4c5-r4c6 colour "white"
kropki-10: kropki r4c6-r4c7 colour "white"
kropki-11: kropki r2c2-r2c3 colour "black"
whispers-1: whispers r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 gap 4
whispers-2: whispers r7c9-r6c8-r5c7-r4c6-r3c5-r2c4-r1c3 gap 4
whispers-3: whispers r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 gap 4
whispers-4: whispers r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 gap 4
renban r3c5-r4c5-r5c5-r6c5-r7c5-r5c3-r5c4-r5c6-r5c7
pair-1: pair r5c4-r6c4 sum 10
pair-2: pair r4c6-r5c6 sum 10
pair-3: pair r4c4-r4c5 sum 10
pair-4: pair r6c5-r6c6 sum 10
pair-5: pair r2c4-r3c4 sum 5
pair-6: pair r5c8-r6c8 sum 5
pair-7: pair r7c5-r7c6 sum 5
pair-8: pair r5c3-r6c3 sum 5
```

Normal Sudoku rules apply. Dutch Whispers Lines- Numbers on red lines are at least 4 apart from their neighbors on the line. RENBAN- Numbers on the purple line are a complete set of the numbers 1-9, once each, in any order. Numbers in cages sum to the number in the top left corner of the cage. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a black dot between them are in a ratio of 2:1. Not all X, V and black dots are given. Numbers with white dots between them are the same three consecutive numbers, in order. The direction of this order must be discovered by the solver.

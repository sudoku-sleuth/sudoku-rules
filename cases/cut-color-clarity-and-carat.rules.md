---
format: open-rules
title: Cut, Color, Clarity and Carat
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/cut-color-clarity-and-carat
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0fc6b810322b253bcc915374dc2c7941
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c3 black
kropki-2: kropki r3c3-r3c4 black
kropki-3: kropki r7c6-r7c7 black
kropki-4: kropki r6c2-r6c3 black
whispers-1: whispers r3c4-r3c5-r3c6 gap 5
whispers-2: whispers r4c7-r5c7-r6c7 gap 5
whispers-3: whispers r7c6-r7c5-r7c4 gap 5
whispers-4: whispers r4c3-r5c3-r6c3 gap 5
whispers-5: whispers r3c5-r2c4 gap 5
whispers-6: whispers r3c5-r2c6 gap 5
whispers-7: whispers r7c5-r8c6 gap 5
whispers-8: whispers r7c5-r8c4 gap 5
whispers-9: whispers r2c4-r1c5-r2c6 gap 5
whispers-10: whispers r8c4-r9c5-r8c6 gap 5
whispers-11: whispers r5c3-r4c2-r5c1-r6c2 gap 5
whispers-12: whispers r6c2-r5c3 gap 5
whispers-13: whispers r5c7-r4c8-r5c9-r6c8 gap 5
whispers-14: whispers r6c8-r5c7 gap 5
renban-1: renban r7c6-r7c7-r6c7-r6c3-r7c3-r7c4-r6c5-r8c2-r8c8
renban-2: renban r4c7-r3c7-r3c6-r3c4-r3c3-r4c3-r4c5-r2c2-r2c8
pair-1: pair r4c4-r4c5 sum 10
pair-2: pair r5c4-r5c5 sum 10
pair-3: pair r8c2-r9c2 sum 10
pair-4: pair r2c6-r3c6 sum 5
pair-5: pair r5c6-r6c6 sum 5
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers on purple lines are a set of non-repeating, consecutive numbers, in any order. Numbers with a black dot between them are in a ratio of 2:1. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all possible dots, X and V are given.

---
format: open-rules
title: Silent Lightning
setter: Tingo
source: https://tinyurl.com/silentlightningsudoku
case: https://sudoku-sleuth.com/cases/silent-lightning
library: https://rules.sudoku-sleuth.com/
status: read
exported: 00ccb7d2ef1e501dd4934136b2a6ab33
---

```rules
sudoku 9x9
kropki-1: kropki r7c8-r7c9 white
kropki-2: kropki r3c6-r4c6 white
kropki-3: kropki r8c3-r8c4 black
kropki-4: kropki r8c8-r8c9 black
whispers-1: whispers r1c1-r1c2-r1c3-r2c4-r3c5-r3c4 gap 5
whispers-2: whispers r3c4-r4c5-r5c6-r6c7-r6c6 gap 5
whispers-3: whispers r6c6-r7c7-r8c7-r9c7 gap 5
whispers-4: whispers r1c1-r2c2-r3c3-r3c2-r4c3-r5c4-r6c5-r6c4 gap 5
whispers-5: whispers r9c7-r8c6-r7c5 gap 5
whispers-6: whispers r6c4-r7c5 gap 5
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r4c1-r5c1 sum 10
pair-3: pair r2c6-r2c7 sum 10
pair-4: pair r3c8-r4c8 sum 10
pair-5: pair r7c8-r8c8 sum 10
pair-6: pair r1c1-r2c1 sum 5
```

Normal Sudoku Rules Apply
Green lines are German Whisper lines. Values of adjacent cells on the line must differ by at least 5. Values may repeat on a line if allowed by other rules.
Cells connected by Xs sum to 10. Cells connected by Vs sum to 5. Not all Xs or Vs are given.
Cells separated by white dots are consecutive. Cells separated by black dots have a value ratio of 2:1. Not all dots are given.

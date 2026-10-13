---
format: open-rules
title: Kropki Paperclip
setter: Tingo
source: ""
case: https://sudoku-sleuth.com/cases/kropki-paperclip
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r7c5 colour "white"
kropki-2: kropki r7c4-r8c4 colour "white"
kropki-3: kropki r1c4-r2c4 colour "white"
kropki-4: kropki r3c5-r3c6 colour "white"
kropki-5: kropki r5c1-r5c2 colour "black"
kropki-6: kropki r2c1-r3c1 colour "black"
whispers-1: whispers r2c4-r3c4-r4c4-r5c4-r6c4-r7c4 gap 5
whispers-2: whispers r7c4-r8c5-r8c6 gap 5
whispers-3: whispers r8c6-r7c7-r6c7-r5c7-r4c7 gap 5
whispers-4: whispers r2c7-r3c7-r4c7 gap 5
whispers-5: whispers r2c7-r1c6-r1c5-r1c4-r2c3 gap 5
whispers-6: whispers r2c3-r3c3-r4c3-r5c3-r6c3-r7c3 gap 5
whispers-7: whispers r7c3-r8c4-r9c5 gap 5
whispers-8: whispers r9c5-r9c6 gap 5
whispers-9: whispers r9c6-r8c7-r7c8 gap 5
whispers-10: whispers r5c8-r6c8-r7c8 gap 5
pair-1: pair r4c4-r5c4 sum 10
pair-2: pair r4c3-r5c3 sum 10
pair-3: pair r7c7-r7c8 sum 10
pair-4: pair r7c7-r8c7 sum 5
```

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5.
Cells joined by white dots are consecutive in value. Cells joined by black dots have values in ratio of 2 to 1. Not all dots are given.
Cells joined by Vs sum to 5. Cells joined by X sum to 10. Not all Vs or Xs are given.

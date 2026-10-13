---
format: open-rules
title: The Snoring Roman
setter: Tingo
source: https://tinyurl.com/thesnoringromansudoku
case: https://sudoku-sleuth.com/cases/the-snoring-roman
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r1c2-r1c3-r2c2-r3c1-r3c2-r3c3 gap 5
whispers-2: whispers r2c4-r2c5-r2c6-r3c5-r4c4-r4c5-r4c6 gap 5
whispers-3: whispers r3c7-r3c8-r3c9-r4c8-r5c7-r5c8-r5c9 gap 5
whispers-4: whispers r5c2-r5c3-r5c4-r6c3-r7c2-r7c3-r7c4 gap 5
whispers-5: whispers r6c5-r6c6-r6c7-r7c6-r8c5-r8c6-r8c7 gap 5
pair-1: pair r3c3-r4c3 sum 10
pair-2: pair r3c3-r3c4 sum 10
pair-3: pair r4c4-r5c4 sum 10
pair-4: pair r5c5-r5c6 sum 10
pair-5: pair r7c7-r8c7 sum 10
pair-6: pair r9c7-r9c8 sum 10
pair-7: pair r1c2-r2c2 sum 5
pair-8: pair r9c1-r9c2 sum 5
pair-9: pair r6c7-r6c8 sum 5
pair-10: pair r8c8-r9c8 sum 5
pair-11: pair r6c3-r7c3 sum 5
```

Normal Sudoku Rules Apply
Cells connected by Xs sum to 10. Cells connected by Vs sum to 5. Not all Xs or Vs are given.
Green lines are German Whisper lines. Values of adjacent cells on the line must differ by at least 5. Values may repeat on a line if allowed by other rules.

---
format: open-rules
title: Roman Crossword
setter: Tingo
source: https://tinyurl.com/romancrosswordsudoku
case: https://sudoku-sleuth.com/cases/roman-crossword
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r6c1-r5c1-r4c2-r5c3-r6c3 gap 5
whispers-2: whispers r7c3-r7c2-r7c1 gap 5
whispers-3: whispers r9c2-r8c2-r7c2 gap 5
whispers-4: whispers r3c1-r2c1-r1c1-r1c2-r1c3-r2c3-r2c2-r3c3 gap 5
whispers-5: whispers r3c4-r2c4-r1c5-r2c6-r3c6 gap 5
whispers-6: whispers r6c4-r5c4-r4c4-r5c5-r6c6-r5c6-r4c6 gap 5
whispers-7: whispers r1c7-r1c8-r1c9 gap 5
whispers-8: whispers r3c8-r2c8-r1c8 gap 5
whispers-9: whispers r9c7-r8c7-r7c8-r8c9-r9c9 gap 5
pair-1: pair r9c6-r9c7 sum 10
pair-2: pair r7c8-r7c9 sum 10
pair-3: pair r9c7-r9c8 sum 5
pair-4: pair r4c9-r5c9 sum 5
pair-5: pair r3c8-r3c9 sum 5
```

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits must have a difference of 5 or more.
Cells separated by Xs sum to 10. Not all Xs are given.
Cells separated by Vs sum to 5. Not all Vs are given.

---
format: open-rules
title: Ave Maria
setter: Tingo
source: https://tinyurl.com/avemariasudoku
case: https://sudoku-sleuth.com/cases/ave-maria
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r3c1-r2c1-r1c2-r2c3-r3c3 gap 5
whispers-2: whispers r1c4-r2c4-r3c5-r2c6-r1c6 gap 5
whispers-3: whispers r1c9-r1c8-r1c7-r2c8-r3c7-r3c8-r3c9 gap 5
whispers-4: whispers r6c1-r5c1-r4c1-r5c2-r4c3-r5c3-r6c3 gap 5
whispers-5: whispers r9c1-r8c1-r7c2-r8c3-r9c3 gap 5
whispers-6: whispers r8c4-r7c4-r6c4-r6c5-r6c6-r7c6-r7c5-r8c6 gap 5
whispers-7: whispers r9c7-r8c7-r7c8-r8c9-r9c9 gap 5
renban r4c8-r5c8-r6c8
pair-1: pair r6c2-r6c3 relation {"op":"sum","value":10}
pair-2: pair r6c3-r7c3 relation {"op":"sum","value":10}
pair-3: pair r9c4-r9c5 relation {"op":"sum","value":10}
pair-4: pair r8c6-r9c6 relation {"op":"sum","value":10}
pair-5: pair r5c7-r5c8 relation {"op":"sum","value":10}
pair-6: pair r4c8-r4c9 relation {"op":"sum","value":10}
pair-7: pair r7c2-r7c3 relation {"op":"sum","value":5}
```

Normal Sudoku Rules Apply
Green lines are German Whisper lines. Adjacent digits must differ by at least 5.
Pink Links are Renban lines. All digits on the line are consecutive in any order.
Cells joined by "V" sum to 5. Cells joined by "X" sum to 10. Not all Xs and Vs are given.

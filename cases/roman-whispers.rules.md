---
format: open-rules
title: Roman Whispers
setter: Tingo
source: https://tinyurl.com/romanwhisperssudoku
case: https://sudoku-sleuth.com/cases/roman-whispers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c3-r1c2-r1c1-r2c2-r3c1-r3c2-r3c3 gap 5
whispers-2: whispers r2c5-r3c5-r2c4-r1c5-r2c6 gap 5
whispers-3: whispers r3c7-r2c8-r3c9 gap 5
whispers-4: whispers r8c3-r7c4-r8c5 gap 5
whispers-5: whispers r6c7-r5c7-r4c8-r5c9-r6c9 gap 5
whispers-6: whispers r4c3-r5c3-r6c3 gap 5
whispers-7: whispers r7c3-r6c2-r7c1 gap 5
whispers-8: whispers r4c5-r5c5-r5c6-r6c6-r7c6-r8c6-r7c5 gap 5
whispers-9: whispers r8c8-r7c7-r7c8 gap 5
pair-1: pair r8c9-r9c9 relation {"op":"sum","value":10}
pair-2: pair r8c8-r9c8 relation {"op":"sum","value":10}
pair-3: pair r8c7-r9c7 relation {"op":"sum","value":10}
pair-4: pair r8c3-r9c3 relation {"op":"sum","value":10}
pair-5: pair r9c1-r9c2 relation {"op":"sum","value":10}
pair-6: pair r7c2-r7c3 relation {"op":"sum","value":10}
pair-7: pair r7c1-r8c1 relation {"op":"sum","value":10}
pair-8: pair r3c4-r4c4 relation {"op":"sum","value":10}
pair-9: pair r3c5-r4c5 relation {"op":"sum","value":10}
pair-10: pair r3c6-r4c6 relation {"op":"sum","value":10}
pair-11: pair r2c6-r2c7 relation {"op":"sum","value":10}
pair-12: pair r5c9-r6c9 relation {"op":"sum","value":10}
pair-13: pair r5c6-r5c7 relation {"op":"sum","value":10}
pair-14: pair r7c4-r7c5 relation {"op":"sum","value":10}
pair-15: pair r7c6-r7c7 relation {"op":"sum","value":5}
pair-16: pair r6c1-r6c2 relation {"op":"sum","value":5}
pair-17: pair r4c6-r5c6 relation {"op":"sum","value":5}
pair-18: pair r5c2-r5c3 relation {"op":"sum","value":5}
```

Normal Sudoku Rules Apply
Green lines are German Whisper lines. All adjacent digits along a green line must differ by a value of at least 5.
Cells connected by Xs sum to 10. Cells connected by Vs sum to 5. Not all Xs or Vs are given.

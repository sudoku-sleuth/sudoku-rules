---
format: open-rules
title: Candy Ropes
setter: Tingo
source: https://tinyurl.com/candyropessudoku
case: https://sudoku-sleuth.com/cases/candy-ropes
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r6c5 colour "white"
kropki-2: kropki r7c7-r7c8 colour "white"
kropki-3: kropki r7c5-r8c5 colour "black"
kropki-4: kropki r8c7-r9c7 colour "black"
kropki-5: kropki r3c2-r4c2 colour "black"
whispers-1: whispers r8c4-r9c4-r8c5-r9c6-r8c6-r9c5 gap 5
whispers-2: whispers r9c5-r8c4 gap 5
whispers-3: whispers r7c1-r8c1-r7c2-r8c3-r7c3-r8c2 gap 5
whispers-4: whispers r8c2-r7c1 gap 5
whispers-5: whispers r7c7-r6c7-r7c8-r6c9-r7c9-r6c8 gap 5
whispers-6: whispers r6c8-r7c7 gap 5
whispers-7: whispers r5c6-r6c6-r5c5-r6c4-r5c4-r6c5 gap 5
whispers-8: whispers r6c5-r5c6 gap 5
whispers-9: whispers r4c3-r5c3-r4c2-r5c1-r4c1-r5c2 gap 5
whispers-10: whispers r4c3-r5c2 gap 5
whispers-11: whispers r4c7-r3c7-r4c8-r3c9-r4c9-r3c8 gap 5
whispers-12: whispers r3c8-r4c7 gap 5
whispers-13: whispers r3c6-r2c6-r3c5-r2c4-r3c4-r2c5 gap 5
whispers-14: whispers r3c6-r2c5 gap 5
whispers-15: whispers r1c3-r2c3-r1c2-r2c1-r1c1-r2c2 gap 5
whispers-16: whispers r1c3-r2c2 gap 5
pair-1: pair r5c3-r5c4 relation {"op":"sum","value":10}
pair-2: pair r8c3-r8c4 relation {"op":"sum","value":10}
pair-3: pair r3c3-r4c3 relation {"op":"sum","value":5}
pair-4: pair r4c4-r5c4 relation {"op":"sum","value":5}
pair-5: pair r1c5-r2c5 relation {"op":"sum","value":5}
pair-6: pair r6c1-r7c1 relation {"op":"sum","value":5}
pair-7: pair r2c7-r3c7 relation {"op":"sum","value":5}
pair-8: pair r5c9-r6c9 relation {"op":"sum","value":5}
```

Normal Sudoku Rules Apply
Green lines are German Whispers lines. All adjacent digits must differ in value by at least 5.
Cells joined by V sum to 5. Cells joined by X sum to 10. Not all Vs and Xs are given.
Cells joined by white dots are consecutive in value.  Cells joined by black dots have values in a ratio of 2:1. Not all dots are given.

---
format: open-rules
title: X Marks The Spot
setter: Tingo
source: https://tinyurl.com/xmarksthespotsudoku
case: https://sudoku-sleuth.com/cases/x-marks-the-spot
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c8-r5c8 colour "white"
kropki-2: kropki r4c5-r4c6 colour "white"
kropki-3: kropki r5c7-r5c8 colour "black"
kropki-4: kropki r7c4-r7c5 colour "black"
whispers-1: whispers r1c4-r2c3-r3c2 gap 5
whispers-2: whispers r1c2-r2c3-r3c4 gap 5
whispers-3: whispers r4c3-r5c3 gap 5
whispers-4: whispers r6c2-r7c1 gap 5
whispers-5: whispers r8c1-r9c1 gap 5
whispers-6: whispers r9c2-r9c3 gap 5
whispers-7: whispers r8c4-r7c5 gap 5
whispers-8: whispers r8c6-r9c7 gap 5
whispers-9: whispers r9c8-r9c9 gap 5
whispers-10: whispers r8c9-r7c9 gap 5
whispers-11: whispers r6c9-r5c8 gap 5
whispers-12: whispers r5c7-r5c6 gap 5
whispers-13: whispers r4c6-r3c6 gap 5
whispers-14: whispers r2c7-r1c8 gap 5
pair-1: pair r4c4-r5c4 relation {"op":"sum","value":10}
pair-2: pair r7c4-r8c4 relation {"op":"sum","value":10}
pair-3: pair r9c7-r9c8 relation {"op":"sum","value":10}
pair-4: pair r9c1-r9c2 relation {"op":"sum","value":10}
pair-5: pair r3c3-r4c3 relation {"op":"sum","value":10}
pair-6: pair r7c2-r8c2 relation {"op":"sum","value":10}
pair-7: pair r4c6-r5c6 relation {"op":"sum","value":5}
pair-8: pair r8c9-r9c9 relation {"op":"sum","value":5}
pair-9: pair r7c1-r8c1 relation {"op":"sum","value":5}
pair-10: pair r4c2-r5c2 relation {"op":"sum","value":5}
```

Follow the route in the map to discover the buried treasure (the solution to the puzzle).

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits must differ by at least 5.
Cells joined by white dots are consecutive in value. Cells joined by black dots contain values in a ratio of 2:1. Not all dots are given.
Cells joined by Vs sum to 5. Cells joined by Xs sum to 10. Not all Vs or Xs are given.

---
format: open-rules
title: Silence Down the Drain
setter: The Bard
source: https://sudokupad.app/deutai2ugw
case: https://sudoku-sleuth.com/cases/silence-down-the-drain
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c8-r2c9-r3c9-r4c9-r5c9-r6c9-r7c8-r8c7-r9c6-r9c5-r9c4-r8c3-r7c2-r6c1-r5c1-r4c1-r3c2-r2c3-r2c4-r2c5-r2c6-r3c7-r4c7-r5c7-r6c6-r6c5-r6c4-r5c3-r4c3-r4c4-r4c5 gap 5
whispers-2: whispers r7c4-r7c5-r7c6 gap 5
pair-1: pair r8c2-r9c2 relation {"op":"sum","value":10}
pair-2: pair r2c2-r3c2 relation {"op":"sum","value":10}
pair-3: pair r7c8-r8c8 relation {"op":"sum","value":10}
pair-4: pair r4c5-r5c5 relation {"op":"sum","value":10}
pair-5: pair r6c4-r7c4 relation {"op":"sum","value":10}
pair-6: pair r5c2-r6c2 relation {"op":"sum","value":10}
pair-7: pair r6c7-r7c7 relation {"op":"sum","value":10}
pair-8: pair r1c8-r2c8 relation {"op":"sum","value":5}
pair-9: pair r3c2-r3c3 relation {"op":"sum","value":5}
pair-10: pair r2c6-r2c7 relation {"op":"sum","value":5}
pair-11: pair r7c9-r8c9 relation {"op":"sum","value":5}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
German Whispers: Adjacent digits along the green line must have a difference of at least 5. 
XY: digits with an X between them add to ten, and digits with a V between them add to 5.

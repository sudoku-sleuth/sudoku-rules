---
format: open-rules
title: Flawed Emerald
setter: The Bard
source: https://sudokupad.app/xqcnepy5z0
case: https://sudoku-sleuth.com/cases/flawed-emerald
library: https://rules.sudoku-sleuth.com/
status: read
exported: 263fe6162c135ad640a6b6b13156029a
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c3 white
kropki-2: kropki r3c7-r4c7 white
kropki-3: kropki r4c5-r4c6 white
kropki-4: kropki r9c8-r9c9 white
kropki-5: kropki r7c5-r7c6 white
kropki-6: kropki r3c5-r3c6 white
kropki-7: kropki r6c7-r7c7 black
kropki-8: kropki r7c6-r8c6 black
kropki-9: kropki r7c4-r8c4 black
kropki-10: kropki r6c3-r7c3 black
kropki-11: kropki r8c5-r9c5 black
kropki-12: kropki r5c8-r5c9 black
kropki-13: kropki r5c1-r5c2 black
kropki-14: kropki r1c2-r2c2 black
kropki-15: kropki r2c7-r2c8 black
whispers-1: whispers r9c5-r8c6 gap 5
whispers-2: whispers r5c9-r6c8-r7c7-r8c6 gap 5
whispers-3: whispers r1c5-r2c6-r3c7-r4c8-r5c9 gap 5
whispers-4: whispers r5c1-r4c2-r3c3-r2c4-r1c5 gap 5
whispers-5: whispers r9c5-r8c4-r7c3-r6c2-r5c1 gap 5
```

Normal sudoku rules apply, place the digits 1-9 in each row, column, and box.
German Whisper: Adjacent digits on a green line must be at least 5 apart.
Kropki: Digits with white dots between them are consecutive. Digits with black dots between them have a ratio of 1:2.

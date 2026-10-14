---
format: open-rules
title: Two Cubes
setter: The Bard
source: https://sudokupad.app/z4xlsresz9
case: https://sudoku-sleuth.com/cases/two-cubes
library: https://rules.sudoku-sleuth.com/
status: read
exported: 774fd83812dd162d05c920c428a3fead
---

```rules
sudoku 9x9
kropki-1: kropki r8c1-r8c2 black
kropki-2: kropki r1c8-r2c8 black
kropki-3: kropki r3c2-r3c3 black
kropki-4: kropki r5c5-r6c5 black
kropki-5: kropki r5c2-r5c3 black
kropki-6: kropki r3c1-r4c1 black
kropki-7: kropki r8c3-r9c3 black
kropki-8: kropki r6c3-r6c4 white
kropki-9: kropki r5c9-r6c9 white
kropki-10: kropki r8c9-r9c9 white
kropki-11: kropki r1c4-r2c4 white
whispers-1: whispers r6c8-r7c8-r8c7-r8c6-r8c5-r7c5-r6c5-r6c6-r6c7-r7c7-r8c7 gap 5
whispers-2: whispers r6c8-r5c8-r6c7 gap 5
whispers-3: whispers r6c5-r5c6-r5c7-r5c8 gap 5
whispers-4: whispers r2c5-r3c5-r4c4-r4c3-r4c2-r3c2-r2c2-r2c3-r2c4-r3c4-r4c4 gap 5
whispers-5: whispers r2c5-r1c5-r2c4 gap 5
whispers-6: whispers r2c2-r1c3-r1c4-r1c5 gap 5
whispers-7: whispers r6c2-r7c2 gap 4
whispers-8: whispers r7c3-r8c4 gap 4
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
German Whispers: Adjacent digits on a green line must have a difference of at least 5.
Dutch Whispers: Adjacent digits on a orange line must have a difference of at least 4.
Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.

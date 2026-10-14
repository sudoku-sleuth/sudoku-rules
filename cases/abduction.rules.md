---
format: open-rules
title: Abduction
setter: The Bard
source: https://sudokupad.app/qs0hdd8o3f
case: https://sudoku-sleuth.com/cases/abduction
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c5=6
exported: 0ead9169d026d362f03011fc2eea5404
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r2c3 white
kropki-2: kropki r1c5-r2c5 white
kropki-3: kropki r5c7-r6c7 white
kropki-4: kropki r6c7-r6c8 white
kropki-5: kropki r8c3-r9c3 white
kropki-6: kropki r8c2-r9c2 white
kropki-7: kropki r8c7-r9c7 white
kropki-8: kropki r8c8-r9c8 white
kropki-9: kropki r5c4-r5c5 white
whispers-1: whispers r4c1-r3c2-r3c3-r2c4-r2c5-r2c6-r3c7 gap 5
whispers-2: whispers r5c3-r5c2-r4c1 gap 5
whispers-3: whispers r6c4-r6c5-r6c6-r5c7-r5c8-r4c9-r3c8-r3c7 gap 5
whispers-4: whispers r9c8-r8c7-r7c6-r6c5 gap 5
whispers-5: whispers r9c2-r8c3-r7c4-r6c5 gap 5
whispers-6: whispers r9c5-r8c5-r7c5-r6c5 gap 5
whispers-7: whispers r5c3-r6c4 gap 5
```

Normal sudoku rules apply, place the digits 1-9 in each row, column, and box.
German Whisper: Adjacent digits on a green line must be at least 5 apart.
Kropki: Digits with white dots between them are consecutive.

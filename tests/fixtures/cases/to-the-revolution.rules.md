---
format: open-rules
title: To the Revolution
setter: John Laurens
source: https://sudokupad.app/ojcyzzd3zw
case: https://sudoku-sleuth.com/cases/to-the-revolution
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c8=1
---

```rules
sudoku 9x9
anti-king
whispers-1: whispers r2c3-r3c3-r3c2-r3c1-r2c1-r1c1-r1c2-r1c3 gap 5
whispers-2: whispers r1c4-r1c5 gap 5
whispers-3: whispers r5c4-r4c4-r4c5-r4c6-r5c6-r6c6-r6c5-r6c4 gap 5
whispers-4: whispers r7c9-r7c8-r7c7-r8c7-r9c7-r9c8-r9c9-r8c9 gap 5
whispers-5: whispers r6c8-r6c9-r5c9 gap 5
whispers-6: whispers r9c5-r9c6 gap 5
whispers-7: whispers r4c1-r5c1-r5c2 gap 5
```

- Normal Sudoku rules apply.
- Cells that are a King's move apart (in chess) may not contain the same digit.
- On green German Whisper Lines adjacent digits must have a difference of at least 5.

---
format: open-rules
title: P(ol)arity
setter: FastSandals
source: https://sudokupad.app/hr1ya3rivi
case: https://sudoku-sleuth.com/cases/p-ol-arity
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
parity-1: parity r3c1-r4c2-r3c3-r2c4-r2c5-r2c6
whispers-1: whispers r3c1-r4c2-r3c3-r2c4-r2c5-r2c6 gap 5
parity-2: parity r1c9-r2c8-r3c9-r4c8-r5c7-r4c6
whispers-2: whispers r1c9-r2c8-r3c9-r4c8-r5c7-r4c6 gap 5
parity-3: parity r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r8c5
whispers-3: whispers r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r8c5 gap 5
parity-4: parity r6c4-r7c3-r8c3-r9c2-r9c1
whispers-4: whispers r6c4-r7c3-r8c3-r9c2-r9c1 gap 5
parity-5: parity r8c6-r7c6-r7c5-r7c4
whispers-5: whispers r8c6-r7c6-r7c5-r7c4 gap 5
parity-6: parity r5c3-r6c2
whispers-6: whispers r5c3-r6c2 gap 5
parity-7: parity r4c4-r5c5
whispers-7: whispers r4c4-r5c5 gap 5
parity-8: parity r3c1-r4c2-r3c3-r2c4-r2c5-r2c6
whispers-8: whispers r3c1-r4c2-r3c3-r2c4-r2c5-r2c6 gap 5
parity-9: parity r4c6-r5c7-r4c8-r3c9-r2c8-r1c9
whispers-9: whispers r4c6-r5c7-r4c8-r3c9-r2c8-r1c9 gap 5
parity-10: parity r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r8c5
whispers-10: whispers r6c9-r7c9-r8c8-r9c7-r9c6-r9c5-r8c5 gap 5
parity-11: parity r9c1-r9c2-r8c3-r7c3-r6c4
whispers-11: whispers r9c1-r9c2-r8c3-r7c3-r6c4 gap 5
parity-12: parity r8c6-r7c6-r7c5-r7c4
whispers-12: whispers r8c6-r7c6-r7c5-r7c4 gap 5
parity-13: parity r5c3-r6c2
whispers-13: whispers r5c3-r6c2 gap 5
parity-14: parity r4c4-r5c5
whispers-14: whispers r4c4-r5c5 gap 5
pair-1: pair r5c8-r6c8 less
pair-2: pair r6c8-r6c7 less
```

• Normal Sudoku rules apply: Place the digits 1 to 9 once each in every row, column, and box.
• All lines are both Whisper-5 lines and Parity lines
• Whisper-5: Adjacent digits on a line must have a difference of at least 5.
• Parity: Where two digits are adjacent on a line, one will be even and one will be odd.
• A > symbol between two cells points to the smaller digit.

---
format: open-rules
title: A Long Whisper's Night
setter: Meggen033
source: https://sudokupad.app/zsma18vvzp
case: https://sudoku-sleuth.com/cases/a-long-whisper-s-night
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r6c5-r6c6-r6c7 bulb ["r6c4"]
arrow-2: arrow r1c1-r1c2-r1c3 bulb ["r2c2"]
arrow-3: arrow r8c2-r7c3 bulb ["r9c2"]
arrow-4: arrow r9c4-r8c4 bulb ["r9c5"]
arrow-5: arrow r3c8-r2c7-r2c8 bulb ["r3c9"]
whispers-1: whispers r2c5-r2c4-r2c3-r3c2-r4c2-r5c2 gap 5
whispers-2: whispers r3c4-r2c5 gap 5
whispers-3: whispers r3c3-r3c4 gap 5
whispers-4: whispers r4c4-r3c3 gap 5
whispers-5: whispers r5c5-r4c4 gap 5
whispers-6: whispers r4c5-r5c5 gap 5
whispers-7: whispers r3c6-r4c5 gap 5
whispers-8: whispers r3c7-r3c6 gap 5
whispers-9: whispers r4c8-r3c7 gap 5
whispers-10: whispers r5c9-r4c8 gap 5
whispers-11: whispers r5c8-r5c9 gap 5
whispers-12: whispers r6c7-r5c8 gap 5
whispers-13: whispers r7c7-r6c7 gap 5
whispers-14: whispers r8c6-r7c7 gap 5
whispers-15: whispers r9c5-r8c6 gap 5
whispers-16: whispers r6c2-r5c2 gap 5
whispers-17: whispers r7c2-r6c2 gap 5
whispers-18: whispers r8c1-r7c2 gap 5
whispers-19: whispers r9c1-r8c1 gap 5
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

•	Normal Sudoku rules apply. 
•	Disjoint Set: Digits must not repeat at corresponding box positions.
•       Adjacent digits along a green German Whisper line must have a difference of at least 5.
•       The digits along each arrow must sum to the digit in the circled cell.

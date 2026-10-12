---
format: open-rules
title: Crumpled balls of paper
setter: gUBBLOR
source: https://sudokupad.app/02wp9crk7b
case: https://sudoku-sleuth.com/cases/crumpled-balls-of-paper
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r7c8-r8c7 bulb ["r7c7"]
arrow-2: arrow r9c7-r8c6 bulb ["r8c8"]
arrow-3: arrow r9c2-r9c1 bulb ["r9c3"]
arrow-4: arrow r5c7-r4c6 bulb ["r5c8"]
arrow-5: arrow r4c3-r3c4 bulb ["r5c3"]
arrow-6: arrow r6c2-r6c1 bulb ["r7c2"]
arrow-7: arrow r1c6-r1c7 bulb ["r2c6"]
arrow-8: arrow r2c2-r1c3 bulb ["r2c3"]
whispers-1: whispers r7c7-r8c6 gap 5
whispers-2: whispers r9c1-r8c2-r9c2 gap 5
whispers-3: whispers r5c6-r6c7-r5c8-r4c8-r4c7 gap 5
whispers-4: whispers r7c2-r6c1-r6c2 gap 5
whispers-5: whispers r2c5-r3c6-r2c6 gap 5
whispers-6: whispers r1c2-r1c1-r2c2 gap 5
whispers-7: whispers r4c3-r5c4-r4c5-r3c4 gap 5 loop true
whispers-8: whispers r9c3-r8c4-r7c4 gap 4
whispers-9: whispers r3c8-r4c7-r5c7 gap 4
whispers-10: whispers r5c3-r4c4-r5c4 gap 4
whispers-11: whispers r6c1-r7c1-r7c2 gap 4
whispers-12: whispers r1c7-r2c6-r2c7 gap 4
whispers-13: whispers r2c1-r2c2-r3c1 gap 4
whispers-14: whispers r8c7-r8c8-r7c8 gap 4 loop true
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

German Whispers: Adjacent digits along each German Whisper line must have a difference of at least 5. Digits may repeat on the line.

Dutch Whispers: Adjacent digits along each Dutch Whisper line must have a difference of at least 4. Digits may repeat on the line.

Arrows: The digits along each arrow must sum to the digit in the circled cell. Digits may repeat on arrows.

There is a setting (under Visual) called "Draw Arrows Above Lines", and we'd recommend you set that to "On".

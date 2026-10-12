---
format: open-rules
title: The Silent Shaft
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3iod1hf5ll
case: https://sudoku-sleuth.com/cases/the-silent-shaft
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r3c3-r4c4 bulb ["r1c1"]
arrow-2: arrow r3c6-r4c7-r5c8 bulb ["r2c5"]
arrow-3: arrow r2c8-r1c7 bulb ["r3c9"]
arrow-4: arrow r6c2-r5c3 bulb ["r7c1"]
arrow-5: arrow r7c3-r6c4 bulb ["r8c2"]
arrow-6: arrow r7c6-r6c7 bulb ["r8c5"]
arrow-7: arrow r8c7-r7c8 bulb ["r9c6"]
whispers-1: whispers r2c2-r3c3-r4c4-r5c3-r6c2-r7c1-r8c1 gap 5
whispers-2: whispers r6c4-r7c3 gap 5
whispers-3: whispers r8c2-r9c3 gap 5
whispers-4: whispers r8c5-r7c6-r6c7-r5c8-r4c7-r3c6 gap 5
whispers-5: whispers r1c7-r2c8 gap 5
whispers-6: whispers r3c8-r4c9 gap 5
whispers-7: whispers r9c6-r8c7-r7c8 gap 5
whispers-8: whispers r5c6-r6c5 gap 5
whispers-9: whispers r4c6-r5c5 gap 5
whispers-10: whispers r4c1-r5c2 gap 5
whispers-11: whispers r3c2-r4c3 gap 5
```

**Standard Sudoku, Arrow, German Whispers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. 
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.

Clarification in case cosmetics render poorly on your device: None of the arrows intersect.

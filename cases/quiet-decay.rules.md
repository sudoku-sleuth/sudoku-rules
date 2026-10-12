---
format: open-rules
title: Quiet Decay
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9rpop7ta2i
case: https://sudoku-sleuth.com/cases/quiet-decay
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 colour "black"
kropki-2: kropki r4c2-r5c2 colour "black"
kropki-3: kropki r4c6-r5c6 colour "black"
kropki-4: kropki r2c6-r2c7 colour "black"
kropki-5: kropki r9c6-r9c7 colour "black"
kropki-6: kropki r8c3-r9c3 colour "black"
whispers-1: whispers r3c2-r2c2-r2c3-r3c3-r4c3-r4c2-r4c1-r3c1-r2c1 gap 5
whispers-2: whispers r5c2-r5c1-r6c1 gap 5
whispers-3: whispers r2c9-r1c9-r1c8-r2c8 gap 5
whispers-4: whispers r1c4-r1c5 gap 5
whispers-5: whispers r3c4-r4c4 gap 5
whispers-6: whispers r4c9-r3c9 gap 5
whispers-7: whispers r7c2-r7c1-r8c1 gap 5
whispers-8: whispers r8c6-r8c5 gap 5
whispers-9: whispers r6c9-r7c9 gap 5
whispers-10: whispers r5c4-r6c4 gap 5
whispers-11: whispers r5c3-r5c4-r6c4 gap 5
whispers-12: whispers r2c5-r2c6-r3c6-r4c6-r4c7-r4c8-r5c8 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Usually shown as green lines, adjacent digits along a German Whispers line must differ by at least five.
- Ratio pairs: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

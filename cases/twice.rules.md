---
format: open-rules
title: TWICE
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9qwll4iako
case: https://sudoku-sleuth.com/cases/twice
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 colour "black"
kropki-2: kropki r5c5-r5c6 colour "black"
kropki-3: kropki r3c5-r4c5 colour "black"
kropki-4: kropki r8c1-r8c2 colour "black"
kropki-5: kropki r8c8-r8c9 colour "black"
kropki-6: kropki r3c2-r4c2 colour "black"
kropki-7: kropki r1c8-r2c8 colour "black"
kropki-8: kropki r1c5-r2c5 colour "black"
kropki-9: kropki r9c4-r9c5 colour "black"
kropki-10: kropki r5c3-r6c3 colour "black"
kropki-11: kropki r7c4-r8c4 colour "black"
whispers-1: whispers r3c2-r2c2-r1c2 gap 5
whispers-2: whispers r1c1-r1c2-r1c3 gap 5
whispers-3: whispers r1c7-r2c7-r3c7-r2c8-r3c9-r2c9-r1c9 gap 5
whispers-4: whispers r7c3-r7c2-r8c1-r9c2-r9c3 gap 5
whispers-5: whispers r4c5-r5c5-r6c5 gap 5
whispers-6: whispers r7c9-r7c8-r8c7-r9c8-r9c9 gap 5
whispers-7: whispers r8c7-r8c8 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

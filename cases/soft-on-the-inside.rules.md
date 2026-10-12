---
fog:
  initiallyLit:
    - 13
    - 29
    - 49
format: open-rules
title: Soft on the Inside
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/riovoxhtzl
case: https://sudoku-sleuth.com/cases/soft-on-the-inside
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r4c3 colour "white"
kropki-2: kropki r6c2-r7c2 colour "white"
kropki-3: kropki r8c2-r9c2 colour "white"
kropki-4: kropki r2c2-r3c2 colour "white"
kropki-5: kropki r8c8-r8c9 colour "white"
kropki-6: kropki r3c3-r4c3 colour "black"
kropki-7: kropki r4c3-r4c4 colour "black"
kropki-8: kropki r2c5-r3c5 colour "black"
kropki-9: kropki r5c5-r6c5 colour "black"
kropki-10: kropki r5c3-r5c4 colour "black"
kropki-11: kropki r7c3-r8c3 colour "black"
kropki-12: kropki r8c6-r8c7 colour "black"
kropki-13: kropki r2c8-r3c8 colour "black"
whispers-1: whispers r5c2-r4c3-r3c4-r2c5-r1c6 gap 5
whispers-2: whispers r3c2-r4c3-r5c4-r6c5-r7c6 gap 5
whispers-3: whispers r4c4-r4c5 gap 5
whispers-4: whispers r3c3-r2c3 gap 5
whispers-5: whispers r6c1-r5c2 gap 5
whispers-6: whispers r2c1-r3c2 gap 5
whispers-7: whispers r9c8-r8c7-r7c6 gap 5
whispers-8: whispers r5c3-r6c3 gap 5
whispers-9: whispers r4c2-r4c1 gap 5
whispers-10: whispers r4c6-r4c5 gap 5
whispers-11: whispers r4c7-r5c6 gap 5
whispers-12: whispers r6c7-r5c6 gap 5
whispers-13: whispers r8c9-r7c8-r6c7 gap 5
whispers-14: whispers r2c9-r3c8-r4c7 gap 5
```

Standard Sudoku, Fog, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Fog: Part of the grid is covered with fog. As correct digits are placed, the fog will clear from cells surrounding the correct digit, revealing additional clues.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

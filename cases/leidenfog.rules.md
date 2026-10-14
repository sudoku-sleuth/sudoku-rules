---
fog:
  initiallyLit:
    - r5c5
format: open-rules
title: Leidenfog
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/710vjy4vuv
case: https://sudoku-sleuth.com/cases/leidenfog
library: https://rules.sudoku-sleuth.com/
status: read
exported: dd14ba86862fefdd43681acd2e3e2e91
---

```rules
sudoku 9x9
kropki-1: kropki r5c7-r5c8 white
kropki-2: kropki r5c2-r5c3 white
kropki-3: kropki r3c4-r3c5 white
kropki-4: kropki r7c4-r8c4 white
kropki-5: kropki r7c7-r8c7 white
kropki-6: kropki r5c5-r5c6 black
kropki-7: kropki r5c5-r6c5 black
kropki-8: kropki r8c5-r9c5 black
kropki-9: kropki r3c5-r3c6 black
kropki-10: kropki r6c3-r7c3 black
whispers-1: whispers r5c4-r5c5-r5c6 gap 4
whispers-2: whispers r3c5-r4c4-r5c3-r6c4-r7c5-r6c6-r5c7-r4c6 gap 4
whispers-3: whispers r2c5-r3c5 gap 4
whispers-4: whispers r9c4-r9c5-r9c6 gap 4
whispers-5: whispers r7c3-r8c4-r9c3-r8c2 gap 4
whispers-6: whispers r7c7-r8c6-r9c7-r8c8 gap 4
whispers-7: whispers r4c2-r4c3-r3c4-r2c4 gap 4
whispers-8: whispers r2c6-r3c6-r4c7-r4c8 gap 4
whispers-9: whispers r5c9-r6c8 gap 4
whispers-10: whispers r5c1-r6c2-r7c3 gap 4
whispers-11: whispers r7c9-r8c8 gap 4
whispers-12: whispers r7c1-r8c2 gap 4
whispers-13: whispers r2c7-r1c8 gap 4
whispers-14: whispers r2c3-r1c2 gap 4
whispers-15: whispers r8c1-r9c1 gap 4
whispers-16: whispers r6c1-r7c1 gap 4
```

**Standard Sudoku, Fog, Dutch Whispers, Kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Fog: Part of the grid is covered with fog. As correct digits are placed, the fog will clear from surrounding cells.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

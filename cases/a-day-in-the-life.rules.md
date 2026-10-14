---
format: open-rules
title: A Day in the Life
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/naj30f3gpm
case: https://sudoku-sleuth.com/cases/a-day-in-the-life
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1e333beecccde32f98df79f0edac0179
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r2c1 white
kropki-2: kropki r1c8-r2c8 white
kropki-3: kropki r7c8-r8c8 white
kropki-4: kropki r4c8-r5c8 white
kropki-5: kropki r4c9-r5c9 white
kropki-6: kropki r3c7-r3c8 white
kropki-7: kropki r3c5-r3c6 white
kropki-8: kropki r6c5-r7c5 white
kropki-9: kropki r4c2-r4c3 black
kropki-10: kropki r4c3-r5c3 black
kropki-11: kropki r4c5-r4c6 black
kropki-12: kropki r5c8-r5c9 black
kropki-13: kropki r7c4-r8c4 black
kropki-14: kropki r1c6-r1c7 black
kropki-15: kropki r1c4-r1c5 black
kropki-16: kropki r4c1-r4c2 black
kropki-17: kropki r7c2-r8c2 black
kropki-18: kropki r6c6-r7c6 black
whispers-1: whispers r1c2-r2c2-r3c2-r3c3 gap 4
whispers-2: whispers r2c3-r2c2 gap 4
whispers-3: whispers r1c5-r2c5-r3c5 gap 4
whispers-4: whispers r3c6-r2c6-r2c5 gap 4
whispers-5: whispers r3c9-r3c8-r2c7-r2c8 gap 4
whispers-6: whispers r6c1-r5c1-r4c1-r4c2-r5c2-r6c2 gap 4
whispers-7: whispers r5c2-r5c1 gap 4
whispers-8: whispers r5c4-r5c3-r6c3-r6c4 gap 4
whispers-9: whispers r4c4-r5c4-r6c4 gap 4
whispers-10: whispers r6c7-r5c6-r5c5-r6c5-r6c6 gap 4
whispers-11: whispers r5c8-r6c8-r6c9 gap 4
whispers-12: whispers r5c9-r6c9-r7c9-r7c8 gap 4
whispers-13: whispers r7c1-r8c1-r9c1-r9c2 gap 4
whispers-14: whispers r8c4-r9c4 gap 4
whispers-15: whispers r7c6-r7c5-r8c5-r9c5 gap 4
whispers-16: whispers r8c6-r8c5 gap 4
whispers-17: whispers r9c9-r9c8-r8c7-r8c8 gap 4
```

**Sudoku, dutch whispers, kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

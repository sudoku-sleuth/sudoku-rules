---
format: open-rules
title: Pickleball
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/335ktqfho8
case: https://sudoku-sleuth.com/cases/pickleball
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c3-r7c3 colour "white"
kropki-2: kropki r4c5-r4c6 colour "white"
kropki-3: kropki r3c3-r3c4 colour "black"
kropki-4: kropki r7c6-r7c7 colour "black"
kropki-5: kropki r3c7-r4c7 colour "black"
kropki-6: kropki r1c5-r2c5 colour "black"
whispers-1: whispers r5c3-r4c3-r3c4-r3c5-r3c6-r4c7-r5c7-r6c7-r7c6-r7c5-r7c4-r6c3 gap 5 loop true
whispers-2: whispers r5c4-r6c5-r5c6-r4c5 gap 5 loop true
whispers-3: whispers r5c9-r6c8-r7c7-r8c6-r9c5 gap 5
whispers-4: whispers r5c1-r4c2-r3c3-r2c4-r1c5 gap 5
whispers-5: whispers r1c5-r2c6-r3c7-r4c8-r5c9 gap 5
whispers-6: whispers r6c2-r7c3-r8c4 gap 5
whispers-7: whispers r7c2-r8c1-r9c2-r8c3 gap 5
whispers-8: whispers r2c1-r1c2 gap 5
whispers-9: whispers r9c8-r8c9 gap 5
```

**Standard Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

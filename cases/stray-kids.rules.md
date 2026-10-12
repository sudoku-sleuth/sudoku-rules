---
format: open-rules
title: Stray Kids
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/150f92rvz9
case: https://sudoku-sleuth.com/cases/stray-kids
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 colour "white"
kropki-2: kropki r7c1-r8c1 colour "white"
kropki-3: kropki r1c5-r1c6 colour "white"
kropki-4: kropki r1c7-r1c8 colour "white"
kropki-5: kropki r5c5-r5c6 colour "black"
kropki-6: kropki r2c1-r3c1 colour "black"
kropki-7: kropki r8c8-r8c9 colour "black"
kropki-8: kropki r7c2-r7c3 colour "black"
kropki-9: kropki r8c2-r9c2 colour "black"
kropki-10: kropki r2c4-r3c4 colour "black"
kropki-11: kropki r4c2-r5c2 colour "black"
kropki-12: kropki r5c7-r5c8 colour "black"
kropki-13: kropki r1c6-r2c6 colour "black"
kropki-14: kropki r3c7-r3c8 colour "black"
kropki-15: kropki r8c1-r9c1 colour "black"
kropki-16: kropki r4c1-r4c2 colour "black"
whispers-1: whispers r1c3-r1c2-r2c2-r2c3-r3c3-r3c2 gap 5
whispers-2: whispers r4c4-r5c4-r6c4 gap 5
whispers-3: whispers r4c6-r5c5-r5c4 gap 5
whispers-4: whispers r6c6-r5c5 gap 5
whispers-5: whispers r7c7-r7c8-r7c9-r8c8-r9c7-r9c8-r9c9 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Usually shown as green lines, adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

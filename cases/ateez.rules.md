---
format: open-rules
title: ATEEZ
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pbw3umrmb9
case: https://sudoku-sleuth.com/cases/ateez
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c8-r4c9 colour "white"
kropki-2: kropki r3c9-r4c9 colour "white"
kropki-3: kropki r7c4-r8c4 colour "white"
kropki-4: kropki r8c4-r9c4 colour "white"
kropki-5: kropki r1c1-r2c1 colour "white"
kropki-6: kropki r3c8-r3c9 colour "white"
kropki-7: kropki r8c8-r8c9 colour "white"
kropki-8: kropki r5c1-r5c2 colour "white"
kropki-9: kropki r4c8-r5c8 colour "black"
kropki-10: kropki r5c9-r6c9 colour "black"
kropki-11: kropki r7c8-r7c9 colour "black"
kropki-12: kropki r8c6-r8c7 colour "black"
kropki-13: kropki r5c5-r6c5 colour "black"
kropki-14: kropki r2c9-r3c9 colour "black"
kropki-15: kropki r4c1-r5c1 colour "black"
kropki-16: kropki r8c8-r9c8 colour "black"
kropki-17: kropki r7c3-r8c3 colour "black"
kropki-18: kropki r9c1-r9c2 colour "black"
kropki-19: kropki r1c9-r2c9 colour "black"
whispers-1: whispers r3c1-r2c1-r1c2-r2c3-r3c3 gap 5
whispers-2: whispers r2c1-r2c2-r2c3 gap 5
whispers-3: whispers r1c7-r1c8-r1c9 gap 5
whispers-4: whispers r1c8-r2c8-r3c8 gap 5
whispers-5: whispers r4c4-r4c3-r5c3-r6c3-r6c4 gap 5
whispers-6: whispers r5c4-r5c3 gap 5
whispers-7: whispers r4c7-r4c6-r5c6-r6c6-r6c7 gap 5
whispers-8: whispers r5c7-r5c6 gap 5
whispers-9: whispers r7c5-r7c6-r8c5-r9c5-r9c6 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Usually shown as green lines, adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

---
format: open-rules
title: Portugal
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3xr3kdujau
case: https://sudoku-sleuth.com/cases/portugal
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r6c2 colour "white"
kropki-2: kropki r4c2-r5c2 colour "white"
kropki-3: kropki r4c2-r4c3 colour "white"
kropki-4: kropki r9c1-r9c2 colour "white"
kropki-5: kropki r8c1-r9c1 colour "white"
kropki-6: kropki r1c3-r1c4 colour "white"
kropki-7: kropki r3c5-r4c5 colour "white"
kropki-8: kropki r5c5-r6c5 colour "white"
kropki-9: kropki r6c5-r7c5 colour "white"
kropki-10: kropki r3c8-r4c8 colour "white"
kropki-11: kropki r8c8-r9c8 colour "white"
kropki-12: kropki r8c7-r8c8 colour "white"
kropki-13: kropki r1c3-r2c3 colour "black"
kropki-14: kropki r2c2-r3c2 colour "black"
whispers-1: whispers r3c1-r2c1-r1c1-r1c2-r2c2 gap 5
whispers-2: whispers r2c2-r2c1 gap 5
whispers-3: whispers r3c5-r3c4-r2c4-r2c5 gap 5 loop true
whispers-4: whispers r3c7-r2c7-r2c8 gap 5
whispers-5: whispers r4c3-r5c3-r6c3-r6c4 gap 5
whispers-6: whispers r5c4-r5c3 gap 5
whispers-7: whispers r5c6-r6c6-r6c7-r5c7 gap 5
whispers-8: whispers r9c2-r9c3-r8c3-r7c3-r7c2-r8c2 gap 5
whispers-9: whispers r8c2-r8c3 gap 5
whispers-10: whispers r9c6-r8c5-r8c4-r9c4-r9c5 gap 5
whispers-11: whispers r7c7-r8c7-r9c7-r8c8 gap 5
```

**Sudoku,  GW, Kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

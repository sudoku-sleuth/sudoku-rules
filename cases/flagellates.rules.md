---
format: open-rules
title: Flagellates
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wwgb3avkie
case: https://sudoku-sleuth.com/cases/flagellates
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c4-r8c4 colour "white"
kropki-2: kropki r5c7-r6c7 colour "white"
kropki-3: kropki r4c1-r4c2 colour "white"
kropki-4: kropki r8c2-r9c2 colour "black"
kropki-5: kropki r3c6-r4c6 colour "black"
kropki-6: kropki r5c4-r5c5 colour "black"
kropki-7: kropki r2c1-r2c2 colour "black"
kropki-8: kropki r7c8-r8c8 colour "black"
kropki-9: kropki r1c7-r2c7 colour "black"
kropki-10: kropki r4c2-r5c2 colour "black"
kropki-11: kropki r6c7-r6c8 colour "black"
kropki-12: kropki r4c7-r5c7 colour "black"
kropki-13: kropki r7c4-r7c5 colour "black"
kropki-14: kropki r4c3-r5c3 colour "black"
whispers-1: whispers r4c2-r3c2-r2c3-r2c4-r3c4-r4c3 gap 4 loop true
whispers-2: whispers r5c5-r6c5-r7c6-r7c7-r6c7-r5c6 gap 4 loop true
whispers-3: whispers r6c2-r6c3-r7c3-r8c2-r8c1-r7c1 gap 4 loop true
whispers-4: whispers r4c8-r4c9-r3c9-r2c8-r2c7-r3c7 gap 4 loop true
whispers-5: whispers r8c8-r7c7 gap 4
whispers-6: whispers r5c1-r4c2 gap 4
whispers-7: whispers r1c5-r2c4 gap 4
whispers-8: whispers r1c6-r2c7 gap 4
whispers-9: whispers r9c9-r8c8 gap 4
whispers-10: whispers r2c1-r3c2 gap 4
whispers-11: whispers r1c2-r2c3 gap 4
whispers-12: whispers r5c4-r4c3 gap 4
whispers-13: whispers r4c5-r3c4 gap 4
whispers-14: whispers r9c2-r8c2 gap 4
whispers-15: whispers r7c4-r7c3 gap 4
whispers-16: whispers r5c2-r6c2 gap 4
whispers-17: whispers r6c4-r6c5 gap 4
whispers-18: whispers r4c6-r5c6 gap 4
whispers-19: whispers r8c6-r7c6 gap 4
whispers-20: whispers r6c8-r6c7 gap 4
whispers-21: whispers r4c7-r4c8 gap 4
whispers-22: whispers r2c9-r3c9 gap 4
whispers-23: whispers r1c8-r2c8 gap 4
whispers-24: whispers r3c6-r3c7 gap 4
```

**Normal Sudoku, Dutch Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, visit https://missingdeck.net

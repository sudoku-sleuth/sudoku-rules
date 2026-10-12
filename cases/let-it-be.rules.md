---
format: open-rules
title: Let It Be
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/phrz2wb720
case: https://sudoku-sleuth.com/cases/let-it-be
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c1-r6c2 colour "white"
kropki-2: kropki r5c1-r6c1 colour "white"
kropki-3: kropki r3c3-r4c3 colour "black"
kropki-4: kropki r3c8-r4c8 colour "black"
kropki-5: kropki r6c7-r7c7 colour "black"
kropki-6: kropki r6c2-r7c2 colour "black"
kropki-7: kropki r3c3-r3c4 colour "black"
kropki-8: kropki r2c5-r2c6 colour "black"
kropki-9: kropki r1c2-r1c3 colour "black"
kropki-10: kropki r8c8-r9c8 colour "black"
whispers-1: whispers r1c1-r2c1-r3c1-r3c2-r3c3 gap 5
whispers-2: whispers r1c5-r1c4-r2c4-r3c4-r3c5 gap 5
whispers-3: whispers r2c5-r2c4 gap 5
whispers-4: whispers r1c7-r1c8-r1c9 gap 5
whispers-5: whispers r3c8-r2c8-r1c8 gap 5
whispers-6: whispers r4c2-r4c3-r4c4 gap 5
whispers-7: whispers r6c4-r6c3-r6c2 gap 5
whispers-8: whispers r6c3-r5c3 gap 5
whispers-9: whispers r5c3-r4c3 gap 5
whispers-10: whispers r4c6-r4c7-r4c8 gap 5
whispers-11: whispers r6c7-r5c7-r4c7 gap 5
whispers-12: whispers r7c7-r7c6-r8c6-r9c6-r9c7 gap 5
whispers-13: whispers r8c7-r8c6 gap 5
whispers-14: whispers r9c1-r8c1-r7c1-r7c2-r7c3-r8c2-r9c3-r9c2 gap 5
```

**Standard Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net

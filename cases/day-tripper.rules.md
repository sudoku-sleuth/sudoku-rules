---
format: open-rules
title: Day Tripper
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r8ct2ikzg5
case: https://sudoku-sleuth.com/cases/day-tripper
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r2c3 colour "white"
kropki-2: kropki r4c8-r4c9 colour "white"
kropki-3: kropki r4c8-r5c8 colour "white"
kropki-4: kropki r3c4-r4c4 colour "white"
kropki-5: kropki r3c1-r3c2 colour "white"
kropki-6: kropki r2c2-r2c3 colour "black"
kropki-7: kropki r4c5-r5c5 colour "black"
kropki-8: kropki r7c1-r8c1 colour "black"
kropki-9: kropki r1c7-r2c7 colour "black"
kropki-10: kropki r1c3-r1c4 colour "black"
kropki-11: kropki r8c4-r9c4 colour "black"
kropki-12: kropki r6c9-r7c9 colour "black"
kropki-13: kropki r7c8-r7c9 colour "black"
whispers-1: whispers r1c1-r2c1-r3c1-r2c2 gap 5 loop true
whispers-2: whispers r3c4-r3c3-r2c3-r2c4-r3c5 gap 5
whispers-3: whispers r2c6-r3c6-r3c7 gap 5
whispers-4: whispers r2c7-r3c7-r4c7-r4c6 gap 5
whispers-5: whispers r4c1-r4c2-r4c3 gap 5
whispers-6: whispers r6c2-r5c2-r4c2 gap 5
whispers-7: whispers r6c3-r5c3-r5c4 gap 5
whispers-8: whispers r5c5-r6c5 gap 5
whispers-9: whispers r7c6-r6c6-r5c6-r5c7-r6c7 gap 5
whispers-10: whispers r6c7-r6c6 gap 5
whispers-11: whispers r7c8-r6c8-r5c8-r5c9-r6c9 gap 5
whispers-12: whispers r6c9-r6c8 gap 5
whispers-13: whispers r9c4-r8c3-r8c4-r8c5 gap 5
whispers-14: whispers r9c5-r9c4-r8c5 gap 5
whispers-15: whispers r9c7-r8c7-r8c8 gap 5
```

**Standard sudoku, german whispers, kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, visit https://missingdeck.net

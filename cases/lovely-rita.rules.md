---
format: open-rules
title: Lovely Rita
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/whhedp6cvm
case: https://sudoku-sleuth.com/cases/lovely-rita
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c6-r2c7 colour "white"
kropki-2: kropki r3c6-r4c6 colour "white"
kropki-3: kropki r8c3-r9c3 colour "white"
kropki-4: kropki r6c4-r7c4 colour "white"
kropki-5: kropki r7c8-r8c8 colour "white"
kropki-6: kropki r8c8-r8c9 colour "white"
kropki-7: kropki r7c8-r7c9 colour "white"
kropki-8: kropki r6c9-r7c9 colour "white"
kropki-9: kropki r5c8-r5c9 colour "white"
kropki-10: kropki r3c2-r3c3 colour "black"
kropki-11: kropki r4c3-r4c4 colour "black"
kropki-12: kropki r8c3-r8c4 colour "black"
kropki-13: kropki r9c1-r9c2 colour "black"
kropki-14: kropki r5c9-r6c9 colour "black"
kropki-15: kropki r5c8-r6c8 colour "black"
kropki-16: kropki r2c7-r3c7 colour "black"
whispers-1: whispers r1c1-r2c1-r3c1-r3c2 gap 5
whispers-2: whispers r2c3-r2c4-r3c4-r3c3 gap 5 loop true
whispers-3: whispers r2c5-r3c6-r2c7 gap 5
whispers-4: whispers r2c9-r2c8-r1c7-r1c8-r1c9 gap 5
whispers-5: whispers r1c9-r2c8 gap 5
whispers-6: whispers r4c1-r5c1-r6c1-r6c2 gap 5
whispers-7: whispers r4c3-r5c3-r5c4-r4c4 gap 5
whispers-8: whispers r6c3-r6c4-r5c4 gap 5
whispers-9: whispers r6c6-r5c6-r4c6-r4c7-r4c8-r5c7-r6c8 gap 5
whispers-10: whispers r8c2-r9c2 gap 5
whispers-11: whispers r7c5-r8c5-r9c5-r9c6 gap 5
whispers-12: whispers r8c6-r8c5 gap 5
whispers-13: whispers r9c8-r9c7-r8c7-r8c8-r9c9 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net

---
format: open-rules
title: This Boy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zt32c5gwhu
case: https://sudoku-sleuth.com/cases/this-boy
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r2c4 colour "white"
kropki-2: kropki r3c6-r3c7 colour "white"
kropki-3: kropki r7c7-r7c8 colour "white"
kropki-4: kropki r5c3-r6c3 colour "white"
kropki-5: kropki r6c6-r6c7 colour "white"
kropki-6: kropki r2c6-r3c6 colour "black"
kropki-7: kropki r3c7-r3c8 colour "black"
kropki-8: kropki r7c1-r8c1 colour "black"
kropki-9: kropki r9c6-r9c7 colour "black"
kropki-10: kropki r2c2-r2c3 colour "black"
whispers-1: whispers r2c1-r2c2-r2c3 gap 4
whispers-2: whispers r1c2-r2c2-r3c2-r4c2-r5c3 gap 4
whispers-3: whispers r1c4-r2c4-r3c4-r4c4 gap 4
whispers-4: whispers r3c4-r2c5-r3c5-r4c5 gap 4
whispers-5: whispers r3c6-r4c6-r5c6 gap 4
whispers-6: whispers r3c9-r2c8-r3c7-r3c8-r4c9-r5c8-r4c7 gap 4
whispers-7: whispers r6c1-r7c1-r8c1-r9c1 gap 4
whispers-8: whispers r8c1-r7c2-r8c2-r9c2-r9c1 gap 4
whispers-9: whispers r7c4-r8c3-r9c4-r8c5 gap 4 loop true
whispers-10: whispers r7c6-r8c6-r7c7-r8c7-r9c7-r9c6 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

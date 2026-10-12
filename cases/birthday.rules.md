---
format: open-rules
title: Birthday
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ga6btad90t
case: https://sudoku-sleuth.com/cases/birthday
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r3c3 colour "white"
kropki-2: kropki r9c3-r9c4 colour "white"
kropki-3: kropki r9c6-r9c7 colour "white"
kropki-4: kropki r6c8-r7c8 colour "white"
kropki-5: kropki r5c7-r5c8 colour "white"
kropki-6: kropki r7c5-r8c5 colour "white"
kropki-7: kropki r5c1-r6c1 colour "white"
kropki-8: kropki r2c5-r3c5 colour "black"
kropki-9: kropki r4c1-r5c1 colour "black"
kropki-10: kropki r7c1-r7c2 colour "black"
kropki-11: kropki r6c4-r7c4 colour "black"
whispers-1: whispers r1c1-r2c1-r3c1-r4c1 gap 5
whispers-2: whispers r3c1-r2c2-r3c2-r4c1 gap 5
whispers-3: whispers r3c3-r4c3-r5c3 gap 5
whispers-4: whispers r2c4-r3c4-r4c4 gap 5
whispers-5: whispers r3c4-r2c5 gap 5
whispers-6: whispers r2c6-r3c6-r4c6-r5c6-r5c7 gap 5
whispers-7: whispers r3c6-r3c7 gap 5
whispers-8: whispers r3c5-r3c6 gap 5
whispers-9: whispers r6c8-r5c8-r4c8-r3c8 gap 5
whispers-10: whispers r5c8-r4c9-r5c9 gap 5
whispers-11: whispers r6c3-r7c3-r8c3-r9c3 gap 5
whispers-12: whispers r7c3-r8c2-r9c2-r8c3 gap 5
whispers-13: whispers r9c6-r8c5-r8c4-r9c4-r9c5 gap 5
whispers-14: whispers r7c7-r8c7-r7c8 gap 5
whispers-15: whispers r7c8-r8c8-r9c7 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a Dutch Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

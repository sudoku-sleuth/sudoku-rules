---
format: open-rules
title: Something
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5sg0oreuqx
case: https://sudoku-sleuth.com/cases/something
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8b0cf3077bf15ff6a9726f604f355731
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r2c1 white
kropki-2: kropki r1c1-r1c2 white
kropki-3: kropki r2c2-r2c3 black
kropki-4: kropki r3c5-r3c6 black
kropki-5: kropki r5c3-r6c3 black
kropki-6: kropki r6c8-r7c8 black
kropki-7: kropki r3c8-r3c9 black
kropki-8: kropki r7c3-r8c3 black
kropki-9: kropki r6c8-r6c9 black
whispers-1: whispers r1c3-r1c2-r2c2-r2c3-r3c3-r3c2 gap 4
whispers-2: whispers r2c5-r3c5-r3c6-r2c6 gap 4 loop true
whispers-3: whispers r3c7-r2c7-r3c8-r2c9-r3c9 gap 4
whispers-4: whispers r6c3-r6c2-r5c1-r5c2-r5c3 gap 4
whispers-5: whispers r5c3-r6c2 gap 4
whispers-6: whispers r4c5-r5c5-r6c5-r6c6 gap 4
whispers-7: whispers r5c6-r5c5 gap 4
whispers-8: whispers r4c8-r5c8-r6c8 gap 4
whispers-9: whispers r6c9-r5c9-r5c8 gap 4
whispers-10: whispers r8c3-r9c3 gap 4
whispers-11: whispers r9c5-r8c5-r8c6-r9c6 gap 4
whispers-12: whispers r8c9-r8c8-r7c8-r7c9 gap 4
whispers-13: whispers r7c9-r8c9-r9c9-r9c8 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

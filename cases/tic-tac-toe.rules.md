---
format: open-rules
title: Tic Tac Toe
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2ldjlh3wrs
case: https://sudoku-sleuth.com/cases/tic-tac-toe
library: https://rules.sudoku-sleuth.com/
status: read
exported: 40631f7a4938b66e07511b7c0fba1ba1
---

```rules
sudoku 9x9
kropki-1: kropki r5c9-r6c9 white
kropki-2: kropki r1c3-r2c3 white
kropki-3: kropki r1c7-r1c8 white
kropki-4: kropki r3c9-r4c9 white
kropki-5: kropki r4c9-r5c9 white
kropki-6: kropki r8c8-r9c8 white
kropki-7: kropki r3c2-r3c3 white
kropki-8: kropki r2c3-r3c3 white
kropki-9: kropki r6c3-r7c3 white
kropki-10: kropki r1c5-r2c5 black
kropki-11: kropki r2c2-r3c2 black
kropki-12: kropki r6c4-r6c5 black
kropki-13: kropki r6c6-r6c7 black
kropki-14: kropki r6c2-r6c3 black
kropki-15: kropki r7c3-r8c3 black
kropki-16: kropki r2c6-r3c6 black
kropki-17: kropki r1c4-r1c5 black
kropki-18: kropki r4c4-r5c4 black
kropki-19: kropki r2c8-r3c8 black
kropki-20: kropki r9c7-r9c8 black
whispers-1: whispers r1c1-r1c2-r1c3 gap 4
whispers-2: whispers r3c2-r2c2-r1c2 gap 4
whispers-3: whispers r4c1-r4c2-r4c3 gap 4
whispers-4: whispers r6c2-r5c2-r4c2 gap 4
whispers-5: whispers r7c1-r7c2-r7c3 gap 4
whispers-6: whispers r9c2-r8c2-r7c2 gap 4
whispers-7: whispers r2c5-r3c5 gap 4
whispers-8: whispers r2c8-r2c7-r3c7-r3c8 gap 4
whispers-9: whispers r6c5-r6c4-r5c4-r5c5-r6c6 gap 4
whispers-10: whispers r5c8-r5c7-r6c7-r6c8 gap 4
whispers-11: whispers r8c5-r8c4-r9c4-r9c5 gap 4 loop true
whispers-12: whispers r9c9-r9c8-r8c7-r8c8-r8c9 gap 4
whispers-13: whispers r8c9-r9c8 gap 4
```

**Sudoku, Dutch Whispers, Kropki Pairs**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

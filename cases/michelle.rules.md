---
format: open-rules
title: Michelle
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/brchk95fd2
case: https://sudoku-sleuth.com/cases/michelle
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7c7b014da8810e985ba9cf03bd5f7a80
---

```rules
sudoku 9x9
kropki-1: kropki r8c6-r8c7 white
kropki-2: kropki r3c8-r4c8 white
kropki-3: kropki r1c5-r2c5 white
kropki-4: kropki r5c7-r6c7 white
kropki-5: kropki r3c1-r3c2 white
kropki-6: kropki r3c1-r4c1 black
kropki-7: kropki r6c2-r7c2 black
kropki-8: kropki r5c4-r6c4 black
kropki-9: kropki r1c1-r1c2 black
kropki-10: kropki r7c1-r7c2 black
kropki-11: kropki r9c6-r9c7 black
kropki-12: kropki r4c1-r4c2 black
whispers-1: whispers r3c1-r2c1-r1c1-r2c2-r1c3-r2c3-r3c3 gap 5
whispers-2: whispers r2c5-r3c5 gap 5
whispers-3: whispers r2c8-r2c7-r3c7-r3c8 gap 5
whispers-4: whispers r4c1-r5c1-r6c1 gap 5
whispers-5: whispers r6c2-r5c2-r5c1 gap 5
whispers-6: whispers r6c5-r5c6-r5c5-r5c4 gap 5
whispers-7: whispers r6c6-r6c5-r5c4 gap 5
whispers-8: whispers r7c2-r8c2-r9c2-r9c3 gap 5
whispers-9: whispers r7c5-r8c5-r9c5-r9c6 gap 5
whispers-10: whispers r9c8-r8c9-r8c8-r8c7 gap 5
whispers-11: whispers r9c9-r9c8-r8c7 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a Dutch Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

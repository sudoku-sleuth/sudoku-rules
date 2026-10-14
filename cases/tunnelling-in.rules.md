---
format: open-rules
title: Tunnelling In
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/rvjsk1ftw1
case: https://sudoku-sleuth.com/cases/tunnelling-in
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5fb84dc3f1159f1b6e3f5953278b44dc
---

```rules
sudoku 9x9
kropki-1: kropki r5c5-r6c5 white
kropki-2: kropki r7c5-r7c6 white
kropki-3: kropki r7c2-r8c2 black
kropki-4: kropki r9c8-r9c9 black
kropki-5: kropki r2c1-r3c1 black
kropki-6: kropki r1c2-r2c2 black
kropki-7: kropki r4c3-r4c4 black
kropki-8: kropki r7c6-r8c6 black
kropki-9: kropki r3c5-r4c5 black
whispers-1: whispers r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2 gap 4 loop true
whispers-2: whispers r3c1-r2c1-r1c1-r1c2-r1c3 gap 4
whispers-3: whispers r7c9-r8c9-r9c9-r9c8-r9c7 gap 4
whispers-4: whispers r3c5-r3c6-r3c7-r4c7-r5c7 gap 4
whispers-5: whispers r5c3-r6c3-r7c3-r7c4-r7c5 gap 4
whispers-6: whispers r8c1-r9c1-r9c2 gap 4
whispers-7: whispers r1c8-r1c9-r2c9 gap 4
whispers-8: whispers r5c4-r6c4-r6c5 gap 4
whispers-9: whispers r4c5-r4c6-r5c6 gap 4
```

**Sudoku, Whisper-4, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

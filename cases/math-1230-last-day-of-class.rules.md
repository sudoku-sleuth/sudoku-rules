---
format: open-rules
title: "MATH 1230: Last Day of Class"
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vdeojf0r0l
case: https://sudoku-sleuth.com/cases/math-1230-last-day-of-class
library: https://rules.sudoku-sleuth.com/
status: read
exported: 64155f28b78a25abf2c2f7a258c01b04
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r3c4 white
kropki-2: kropki r5c4-r6c4 white
kropki-3: kropki r5c9-r6c9 white
kropki-4: kropki r4c9-r5c9 white
kropki-5: kropki r3c2-r4c2 white
kropki-6: kropki r2c2-r3c2 black
kropki-7: kropki r4c7-r4c8 black
kropki-8: kropki r6c2-r7c2 black
kropki-9: kropki r6c3-r6c4 black
kropki-10: kropki r7c5-r8c5 black
kropki-11: kropki r1c5-r1c6 black
kropki-12: kropki r2c8-r3c8 black
kropki-13: kropki r5c8-r6c8 black
kropki-14: kropki r6c1-r6c2 black
whispers-1: whispers r2c1-r1c2-r2c2-r3c2 gap 4
whispers-2: whispers r1c3-r1c4-r2c4-r2c3-r3c3-r3c4 gap 4
whispers-3: whispers r1c5-r1c6-r2c6-r3c6-r3c5 gap 4
whispers-4: whispers r2c5-r2c6 gap 4
whispers-5: whispers r1c7-r2c7-r3c7-r3c8-r2c8-r1c8 gap 4 loop true
whispers-6: whispers r4c2-r5c2-r6c2-r6c3-r6c4 gap 4
whispers-7: whispers r4c6-r5c6-r6c6-r6c7-r5c8-r4c7 gap 4 loop true
whispers-8: whispers r7c4-r7c3-r7c2-r8c2-r9c2-r9c3-r9c4-r8c4 gap 4 loop true
whispers-9: whispers r7c8-r7c7-r7c6-r8c6-r9c6-r9c7-r9c8 gap 4
```

**Sudoku, Whisper-4, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

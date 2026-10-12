---
format: open-rules
title: Love To You
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qxtau14302
case: https://sudoku-sleuth.com/cases/love-to-you
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c5-r3c6 colour "white"
kropki-2: kropki r5c7-r6c7 colour "white"
kropki-3: kropki r4c4-r4c5 colour "black"
kropki-4: kropki r6c4-r6c5 colour "black"
kropki-5: kropki r5c1-r6c1 colour "black"
kropki-6: kropki r9c3-r9c4 colour "black"
kropki-7: kropki r7c9-r8c9 colour "black"
kropki-8: kropki r6c9-r7c9 colour "black"
kropki-9: kropki r2c8-r2c9 colour "black"
kropki-10: kropki r4c1-r4c2 colour "black"
whispers-1: whispers r2c3-r1c2-r1c1-r2c1-r3c1-r4c2-r5c3-r4c4-r3c5-r2c5-r1c5-r1c4 gap 5 loop true
whispers-2: whispers r4c5-r3c6-r3c7-r4c8-r5c7-r5c6-r6c5-r6c6-r6c7-r6c8 gap 5
whispers-3: whispers r9c4-r8c4 gap 5
whispers-4: whispers r6c1-r7c1-r8c1-r9c2-r9c3-r8c4-r7c4-r6c4 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

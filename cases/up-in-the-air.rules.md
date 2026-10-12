---
format: open-rules
title: Up In The Air
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6p5hor0fln
case: https://sudoku-sleuth.com/cases/up-in-the-air
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c5-r3c6 colour "white"
kropki-2: kropki r4c7-r5c7 colour "white"
kropki-3: kropki r9c1-r9c2 colour "white"
kropki-4: kropki r5c8-r6c8 colour "white"
kropki-5: kropki r8c9-r9c9 colour "white"
kropki-6: kropki r3c2-r4c2 colour "black"
kropki-7: kropki r8c6-r8c7 colour "black"
kropki-8: kropki r6c4-r6c5 colour "black"
kropki-9: kropki r5c5-r5c6 colour "black"
kropki-10: kropki r1c1-r1c2 colour "black"
kropki-11: kropki r1c9-r2c9 colour "black"
kropki-12: kropki r5c4-r5c5 colour "black"
whispers-1: whispers r2c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2 gap 5
whispers-2: whispers r2c8-r3c8-r4c7-r5c6 gap 5
whispers-3: whispers r5c6-r6c5-r7c4-r8c3 gap 5
whispers-4: whispers r7c2-r6c1-r7c1-r8c1-r8c2-r9c3-r8c3 gap 5
whispers-5: whispers r3c5-r3c4-r3c3 gap 5
whispers-6: whispers r3c2-r4c3 gap 5
whispers-7: whispers r5c7-r6c7-r7c7 gap 5
whispers-8: whispers r8c7-r7c6 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

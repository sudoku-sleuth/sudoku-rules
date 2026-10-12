---
format: open-rules
title: Streaks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f6lxu7s20t
case: https://sudoku-sleuth.com/cases/streaks
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c3=4
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r1c3 colour "black"
kropki-2: kropki r2c1-r3c1 colour "black"
kropki-3: kropki r9c7-r9c8 colour "black"
kropki-4: kropki r7c9-r8c9 colour "black"
kropki-5: kropki r9c5-r9c6 colour "black"
kropki-6: kropki r5c9-r6c9 colour "black"
kropki-7: kropki r1c4-r1c5 colour "black"
kropki-8: kropki r4c1-r5c1 colour "black"
kropki-9: kropki r7c1-r8c1 colour "black"
kropki-10: kropki r2c9-r3c9 colour "black"
kropki-11: kropki r9c3-r9c4 colour "black"
kropki-12: kropki r1c7-r1c8 colour "black"
kropki-13: kropki r5c3-r6c3 colour "black"
kropki-14: kropki r3c8-r4c8 colour "black"
whispers-1: whispers r2c1-r1c2 gap 5
whispers-2: whispers r4c1-r3c2 gap 5
whispers-3: whispers r2c3-r1c4 gap 5
whispers-4: whispers r6c1-r5c2 gap 5
whispers-5: whispers r4c3-r3c4 gap 5
whispers-6: whispers r2c5-r1c6 gap 5
whispers-7: whispers r8c1-r7c2 gap 5
whispers-8: whispers r6c3-r5c4 gap 5
whispers-9: whispers r4c5-r3c6 gap 5
whispers-10: whispers r2c7-r1c8 gap 5
whispers-11: whispers r9c2-r8c3 gap 5
whispers-12: whispers r7c4-r6c5 gap 5
whispers-13: whispers r5c6-r4c7 gap 5
whispers-14: whispers r3c8-r2c9 gap 5
whispers-15: whispers r9c4-r8c5 gap 5
whispers-16: whispers r7c6-r6c7 gap 5
whispers-17: whispers r5c8-r4c9 gap 5
whispers-18: whispers r9c6-r8c7 gap 5
whispers-19: whispers r7c8-r6c9 gap 5
whispers-20: whispers r9c8-r8c9 gap 5
```

**Sudoku, Whisper-5 Lines, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

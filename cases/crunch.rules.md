---
format: open-rules
title: Crunch
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0jlf1bqnfi
case: https://sudoku-sleuth.com/cases/crunch
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c2=2
---

```rules
sudoku 9x9
kropki-1: kropki r2c6-r3c6 colour "white"
kropki-2: kropki r2c4-r3c4 colour "white"
kropki-3: kropki r8c7-r9c7 colour "white"
kropki-4: kropki r2c2-r3c2 colour "black"
kropki-5: kropki r2c8-r3c8 colour "black"
kropki-6: kropki r8c3-r9c3 colour "black"
kropki-7: kropki r4c5-r5c5 colour "black"
kropki-8: kropki r7c5-r8c5 colour "black"
whispers-1: whispers r4c1-r3c2-r4c3-r3c4-r4c5-r3c6-r4c7-r3c8-r4c9 gap 4
whispers-2: whispers r1c1-r2c2-r1c3-r2c4-r1c5-r2c6-r1c7-r2c8-r1c9 gap 4
whispers-3: whispers r7c1-r6c2-r7c3-r6c4-r7c5-r6c6-r7c7-r6c8-r7c9 gap 4
whispers-4: whispers r9c2-r8c3-r9c4-r8c5-r9c6-r8c7-r9c8 gap 4
```

**Sudoku, Whisper-4, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

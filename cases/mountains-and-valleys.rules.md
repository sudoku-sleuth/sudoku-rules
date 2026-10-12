---
format: open-rules
title: Mountains and Valleys
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/eg552nk31d
case: https://sudoku-sleuth.com/cases/mountains-and-valleys
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=4 r4c1=8
---

```rules
sudoku 9x9
kropki-1: kropki r3c8-r3c9 colour "white"
kropki-2: kropki r2c8-r3c8 colour "white"
kropki-3: kropki r6c5-r6c6 colour "white"
kropki-4: kropki r5c6-r6c6 colour "white"
whispers-1: whispers r6c6-r7c7-r6c8-r5c9 gap 5
whispers-2: whispers r5c1-r6c2-r7c3-r6c4-r5c5-r6c6 gap 5
whispers-3: whispers r3c1-r4c2-r5c3-r4c4-r3c5-r4c6-r5c7-r4c8-r3c9 gap 5
whispers-4: whispers r3c3-r2c4-r1c5-r2c6-r3c7 gap 5
whispers-5: whispers r2c8-r3c7 gap 5
whispers-6: whispers r2c2-r3c3 gap 5
whispers-7: whispers r9c3-r8c4-r7c5-r8c6-r9c7 gap 5
whispers-8: whispers r8c8-r9c9 gap 5
whispers-9: whispers r9c1-r8c2 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Consecutive pairs: Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

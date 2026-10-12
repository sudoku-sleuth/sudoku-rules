---
format: open-rules
title: Physics is Fun?!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hqbw6740v9
case: https://sudoku-sleuth.com/cases/physics-is-fun
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=9 r1c8=8 r1c9=1
---

```rules
sudoku 9x9
kropki-1: kropki r4c3-r4c4 colour "white"
kropki-2: kropki r8c6-r8c7 colour "white"
kropki-3: kropki r2c6-r2c7 colour "white"
kropki-4: kropki r5c6-r5c7 colour "white"
kropki-5: kropki r4c5-r5c5 colour "white"
kropki-6: kropki r7c3-r7c4 colour "white"
kropki-7: kropki r6c6-r7c6 colour "white"
kropki-8: kropki r7c6-r7c7 colour "white"
kropki-9: kropki r8c1-r9c1 colour "white"
kropki-10: kropki r7c1-r8c1 colour "white"
kropki-11: kropki r8c3-r9c3 colour "white"
kropki-12: kropki r3c9-r4c9 colour "white"
kropki-13: kropki r1c6-r1c7 colour "black"
kropki-14: kropki r9c6-r9c7 colour "black"
kropki-15: kropki r7c7-r8c7 colour "black"
kropki-16: kropki r6c7-r7c7 colour "black"
kropki-17: kropki r5c2-r6c2 colour "black"
whispers-1: whispers r6c1-r5c1-r4c1-r3c1-r2c1-r2c2-r2c3 gap 5
whispers-2: whispers r4c3-r4c2-r4c1 gap 5
whispers-3: whispers r4c4-r4c5 gap 5
whispers-4: whispers r5c4-r5c5 gap 5
whispers-5: whispers r9c4-r8c4-r8c5-r8c6-r9c6 gap 5
whispers-6: whispers r9c5-r8c5 gap 5
whispers-7: whispers r9c8-r9c7-r8c7-r8c8-r9c9 gap 5
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

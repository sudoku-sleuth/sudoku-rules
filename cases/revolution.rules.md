---
format: open-rules
title: Revolution
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xlbg7uvxt7
case: https://sudoku-sleuth.com/cases/revolution
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c2=9
---

```rules
sudoku 9x9
kropki-1: kropki r6c3-r7c3 colour "white"
kropki-2: kropki r2c4-r2c5 colour "white"
kropki-3: kropki r2c3-r2c4 colour "white"
kropki-4: kropki r7c3-r8c3 colour "white"
kropki-5: kropki r8c3-r8c4 colour "white"
kropki-6: kropki r8c4-r8c5 colour "white"
kropki-7: kropki r8c5-r8c6 colour "white"
kropki-8: kropki r2c2-r2c3 colour "white"
kropki-9: kropki r2c2-r3c2 colour "white"
kropki-10: kropki r5c8-r6c8 colour "white"
kropki-11: kropki r4c8-r5c8 colour "white"
kropki-12: kropki r4c7-r4c8 colour "white"
kropki-13: kropki r5c2-r6c2 colour "black"
kropki-14: kropki r6c8-r7c8 colour "black"
kropki-15: kropki r2c5-r2c6 colour "black"
whispers-1: whispers r3c2-r4c1-r5c1-r6c2-r6c3-r5c4-r4c4-r3c3 gap 5 loop true
whispers-2: whispers r4c6-r3c5-r2c5-r1c6-r1c7-r2c8-r3c8-r4c7 gap 5 loop true
whispers-3: whispers r9c7-r8c6-r7c6-r6c7-r6c8-r7c9-r8c9-r9c8 gap 5 loop true
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

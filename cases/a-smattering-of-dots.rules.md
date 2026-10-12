---
format: open-rules
title: A Smattering of Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9xw1os15hl
case: https://sudoku-sleuth.com/cases/a-smattering-of-dots
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=8
---

```rules
sudoku 9x9
kropki-1: kropki r9c2-r9c3 colour "white"
kropki-2: kropki r1c2-r1c3 colour "white"
kropki-3: kropki r7c9-r8c9 colour "white"
kropki-4: kropki r9c8-r9c9 colour "white"
kropki-5: kropki r2c9-r3c9 colour "white"
kropki-6: kropki r1c1-r2c1 colour "white"
kropki-7: kropki r7c1-r8c1 colour "white"
kropki-8: kropki r3c1-r4c1 colour "white"
kropki-9: kropki r1c5-r1c6 colour "white"
kropki-10: kropki r5c9-r6c9 colour "white"
kropki-11: kropki r4c6-r5c6 colour "white"
kropki-12: kropki r3c3-r4c3 colour "white"
kropki-13: kropki r1c1-r1c2 colour "black"
kropki-14: kropki r1c8-r1c9 colour "black"
kropki-15: kropki r1c9-r2c9 colour "black"
kropki-16: kropki r8c9-r9c9 colour "black"
kropki-17: kropki r8c1-r9c1 colour "black"
kropki-18: kropki r9c1-r9c2 colour "black"
kropki-19: kropki r1c6-r1c7 colour "black"
kropki-20: kropki r4c1-r5c1 colour "black"
kropki-21: kropki r7c6-r8c6 colour "black"
kropki-22: kropki r3c6-r4c6 colour "black"
kropki-23: kropki r4c2-r4c3 colour "black"
kropki-24: kropki r6c5-r6c6 colour "black"
kropki-25: kropki r5c4-r6c4 colour "black"
kropki-26: kropki r6c8-r7c8 colour "black"
```

**Sudoku, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

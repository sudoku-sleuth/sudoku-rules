---
format: open-rules
title: Striking Center
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0adyfm67wy
case: https://sudoku-sleuth.com/cases/striking-center
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6 r8c2=8
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 colour "white"
kropki-2: kropki r2c6-r3c6 colour "white"
kropki-3: kropki r6c5-r7c5 colour "white"
kropki-4: kropki r5c3-r5c4 colour "white"
kropki-5: kropki r4c1-r5c1 colour "white"
kropki-6: kropki r8c5-r9c5 colour "white"
kropki-7: kropki r1c1-r1c2 colour "black"
kropki-8: kropki r6c6-r7c6 colour "black"
kropki-9: kropki r2c7-r3c7 colour "black"
kropki-10: kropki r7c7-r7c8 colour "black"
kropki-11: kropki r8c7-r8c8 colour "black"
kropki-12: kropki r3c6-r4c6 colour "black"
kropki-13: kropki r2c5-r3c5 colour "black"
kropki-14: kropki r5c1-r5c2 colour "black"
kropki-15: kropki r7c2-r7c3 colour "black"
arrow-1: arrow r2c3-r3c3-r4c4 bulb ["r1c2"]
arrow-2: arrow r2c7-r3c7-r4c6 bulb ["r1c8"]
arrow-3: arrow r8c3-r7c3-r6c4 bulb ["r9c2"]
arrow-4: arrow r8c7-r7c7-r6c6 bulb ["r9c8"]
```

**Sudoku, Arrow, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

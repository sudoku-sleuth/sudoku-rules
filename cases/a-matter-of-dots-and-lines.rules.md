---
format: open-rules
title: A Matter of Dots and Lines
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cbcp2164wy
case: https://sudoku-sleuth.com/cases/a-matter-of-dots-and-lines
library: https://rules.sudoku-sleuth.com/
status: read
exported: 50b1752e6b864fba7ee02bfaa72f909a
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r3c5 white
kropki-2: kropki r3c5-r4c5 white
kropki-3: kropki r8c3-r8c4 white
kropki-4: kropki r1c4-r1c5 white
kropki-5: kropki r7c4-r8c4 black
kropki-6: kropki r7c6-r8c6 black
kropki-7: kropki r2c4-r3c4 black
kropki-8: kropki r4c3-r5c3 black
region-sum-1: region-sum r2c1-r3c2-r4c3-r3c4-r2c3-r1c2 segments [["r2c1","r3c2"],["r4c3"],["r3c4"],["r2c3","r1c2"]]
region-sum-2: region-sum r1c8-r2c7-r3c6-r4c7-r3c8-r2c9 segments [["r1c8","r2c7"],["r3c6"],["r4c7"],["r3c8","r2c9"]]
region-sum-3: region-sum r8c1-r7c2-r6c3-r7c4-r8c3-r9c2 segments [["r8c1","r7c2"],["r6c3"],["r7c4"],["r8c3","r9c2"]]
region-sum-4: region-sum r9c8-r8c7-r7c6-r6c7-r7c8-r8c9 segments [["r9c8","r8c7"],["r7c6"],["r6c7"],["r7c8","r8c9"]]
renban-1: renban r4c5-r5c4-r6c5-r5c6
renban-2: renban r7c5-r8c4-r9c5-r8c6
renban-3: renban r4c8-r5c7-r6c8-r5c9
renban-4: renban r1c5-r2c4-r3c5-r2c6
renban-5: renban r4c2-r5c1-r6c2-r5c3
```

**Sudoku, Sum Lines, Renban Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. If a line has multiple sections within a box, these sections are summed separately.
- Renban Lines: Digits along a pink Renban line must form a set of non-repeating consecutive digits in any order.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Note for clarity: the thinner lines contained completely within boxes 2, 4, 6, and 8 are renban lines. The other, thicker, lines are region sum lines.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

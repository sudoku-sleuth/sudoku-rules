---
format: open-rules
title: Unknown Doubles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/39noaaesuy
case: https://sudoku-sleuth.com/cases/unknown-doubles
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 colour "black"
kropki-2: kropki r2c4-r3c4 colour "black"
kropki-3: kropki r3c8-r3c9 colour "black"
kropki-4: kropki r5c8-r5c9 colour "black"
kropki-5: kropki r5c5-r6c5 colour "black"
kropki-6: kropki r6c2-r7c2 colour "black"
kropki-7: kropki r8c6-r8c7 colour "black"
kropki-8: kropki r6c1-r6c2 colour "black"
kropki-9: kropki r6c4-r7c4 colour "black"
x-sum-1: x-sum r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 15
x-sum-2: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 27
x-sum-3: x-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 18
x-sum-4: x-sum r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 15
x-sum-5: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 22
x-sum-6: x-sum r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 sum 27
x-sum-7: x-sum r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 16
x-sum-8: x-sum r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 12
x-sum-9: x-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 15
x-sum-10: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 15
```

**Sudoku, X-Sums, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Clues outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.
- Ratio pairs: Cells separated by a black dot are in a 2:1 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing

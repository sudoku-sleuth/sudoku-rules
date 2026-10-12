---
format: open-rules
title: Diagadots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/lqthyhi3pf
case: https://sudoku-sleuth.com/cases/diagadots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 colour "black"
kropki-2: kropki r1c3-r2c3 colour "black"
kropki-3: kropki r1c7-r2c7 colour "black"
kropki-4: kropki r3c8-r3c9 colour "black"
kropki-5: kropki r8c7-r9c7 colour "black"
kropki-6: kropki r7c8-r7c9 colour "black"
kropki-7: kropki r7c1-r7c2 colour "black"
kropki-8: kropki r8c3-r9c3 colour "black"
kropki-9: kropki r4c7-r5c7 colour "black"
kropki-10: kropki r6c2-r6c3 colour "black"
kropki-11: kropki r4c3-r4c4 colour "black"
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 6
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-3: little-killer r9c3-r8c2-r7c1 sum 9
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 21
little-killer-5: little-killer r5c1-r4c2-r3c3-r2c4-r1c5 sum 18
little-killer-6: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 23
little-killer-7: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 21
little-killer-8: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 11
```

**Sudoku, Diagonal Sums, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

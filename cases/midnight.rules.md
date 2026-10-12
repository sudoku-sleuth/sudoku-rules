---
format: open-rules
title: Midnight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ax41p33g53
case: https://sudoku-sleuth.com/cases/midnight
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c3 colour "white"
kropki-2: kropki r7c3-r7c4 colour "white"
kropki-3: kropki r4c7-r5c7 colour "white"
kropki-4: kropki r8c5-r8c6 colour "white"
kropki-5: kropki r3c8-r4c8 colour "white"
kropki-6: kropki r6c4-r6c5 colour "white"
kropki-7: kropki r3c5-r4c5 colour "white"
kropki-8: kropki r4c1-r4c2 colour "white"
kropki-9: kropki r5c6-r6c6 colour "white"
kropki-10: kropki r6c1-r7c1 colour "black"
kropki-11: kropki r3c1-r4c1 colour "black"
kropki-12: kropki r1c3-r1c4 colour "black"
kropki-13: kropki r1c6-r1c7 colour "black"
kropki-14: kropki r3c9-r4c9 colour "black"
kropki-15: kropki r6c9-r7c9 colour "black"
kropki-16: kropki r9c6-r9c7 colour "black"
kropki-17: kropki r9c3-r9c4 colour "black"
kropki-18: kropki r2c3-r3c3 colour "black"
kropki-19: kropki r7c2-r8c2 colour "black"
kropki-20: kropki r2c8-r3c8 colour "black"
kropki-21: kropki r8c6-r8c7 colour "black"
kropki-22: kropki r4c6-r4c7 colour "black"
kropki-23: kropki r6c4-r7c4 colour "black"
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 7
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 6
little-killer-3: little-killer r9c3-r8c2-r7c1 sum 6
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 7
```

**Sudoku, Kropki, Diagonal Sums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

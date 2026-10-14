---
format: open-rules
title: Diagonal Dalmatians
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ui2lhhr6yn
case: https://sudoku-sleuth.com/cases/diagonal-dalmatians
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8f2459a2f964fd8cdbf7e5860c58d399
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 white
kropki-2: kropki r3c1-r3c2 white
kropki-3: kropki r2c2-r3c2 white
kropki-4: kropki r2c2-r2c3 white
kropki-5: kropki r6c9-r7c9 white
kropki-6: kropki r7c8-r7c9 white
kropki-7: kropki r7c8-r8c8 white
kropki-8: kropki r8c7-r8c8 white
kropki-9: kropki r2c7-r2c8 white
kropki-10: kropki r2c8-r3c8 white
kropki-11: kropki r8c2-r8c3 white
kropki-12: kropki r7c2-r8c2 white
kropki-13: kropki r8c5-r8c6 white
kropki-14: kropki r3c9-r4c9 white
kropki-15: kropki r9c2-r9c3 white
kropki-16: kropki r4c4-r4c5 black
kropki-17: kropki r5c4-r6c4 black
kropki-18: kropki r5c6-r6c6 black
kropki-19: kropki r5c7-r5c8 black
kropki-20: kropki r1c5-r1c6 black
kropki-21: kropki r1c3-r1c4 black
little-killer-1: little-killer r4c1-r3c2-r2c3-r1c4 sum 13
little-killer-2: little-killer r3c1-r2c2-r1c3 sum 10
little-killer-3: little-killer r6c9-r7c8-r8c7-r9c6 sum 27
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 20
little-killer-5: little-killer r1c6-r2c7-r3c8-r4c9 sum 12
little-killer-6: little-killer r9c4-r8c3-r7c2-r6c1 sum 18
little-killer-7: little-killer r1c7-r2c8-r3c9 sum 16
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 15
```

**Sudoku, Diagonal Sums, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal Sums: Clues with arrows outside the grid give the sum of the digits along the indicated diagonal.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html

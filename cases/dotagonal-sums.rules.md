---
format: open-rules
title: Dotagonal Sums
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/b001o3nh0i
case: https://sudoku-sleuth.com/cases/dotagonal-sums
library: https://rules.sudoku-sleuth.com/
status: read
exported: 41d4889e0b38fb6c53e0d66a85a2483a
---

```rules
sudoku 9x9
kropki-1: kropki r1c7-r1c8 white
kropki-2: kropki r1c1-r2c1 white
kropki-3: kropki r6c9-r7c9 white
kropki-4: kropki r2c6-r2c7 white
kropki-5: kropki r6c3-r7c3 white
kropki-6: kropki r2c1-r3c1 black
kropki-7: kropki r1c2-r1c3 black
kropki-8: kropki r1c7-r2c7 black
kropki-9: kropki r3c8-r3c9 black
kropki-10: kropki r7c9-r8c9 black
kropki-11: kropki r9c7-r9c8 black
kropki-12: kropki r8c3-r9c3 black
kropki-13: kropki r7c1-r7c2 black
kropki-14: kropki r1c4-r1c5 black
kropki-15: kropki r9c5-r9c6 black
kropki-16: kropki r5c9-r6c9 black
kropki-17: kropki r4c1-r5c1 black
kropki-18: kropki r1c6-r1c7 black
kropki-19: kropki r9c3-r9c4 black
kropki-20: kropki r5c5-r6c5 black
kropki-21: kropki r4c5-r4c6 black
little-killer-1: little-killer r2c1-r1c2 sum 8
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-3: little-killer r8c9-r9c8 sum 9
little-killer-4: little-killer r9c3-r8c2-r7c1 sum 9
```

**Sudoku, Diagonal Sums, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal.
- Kropki: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

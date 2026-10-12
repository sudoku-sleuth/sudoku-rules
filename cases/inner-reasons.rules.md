---
format: open-rules
title: Inner Reasons
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/inner-reasons
case: https://sudoku-sleuth.com/cases/inner-reasons
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=5 r4c7=2 r5c1=7
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 colour "black"
kropki-2: kropki r8c8-r8c9 colour "black"
kropki-3: kropki r1c9-r2c9 colour "black"
kropki-4: kropki r7c1-r7c2 colour "black"
kropki-5: kropki r5c3-r5c4 colour "black"
kropki-6: kropki r5c6-r5c7 colour "black"
kropki-7: kropki r3c5-r4c5 colour "black"
kropki-8: kropki r8c5-r9c5 colour "black"
kropki-9: kropki r6c6-r7c6 colour "black"
little-killer-1: little-killer r2c1-r1c2 sum 4
little-killer-2: little-killer r1c8-r2c9 sum 6
little-killer-3: little-killer r8c9-r9c8 sum 3
little-killer-4: little-killer r9c2-r8c1 sum 5
little-killer-5: little-killer r3c9-r2c8-r1c7 sum 10
little-killer-6: little-killer r7c1-r8c2-r9c3 sum 11
little-killer-7: little-killer r1c3-r2c2-r3c1 sum 11
little-killer-8: little-killer r9c7-r8c8-r7c9 sum 12
```

**Sudoku, Diagonal Sums, Ratio Dots**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Diagonal Sums: Clues outside the grid give the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Ratio Pairs: Digits separated by a black dot are in a 2:1 ratio.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

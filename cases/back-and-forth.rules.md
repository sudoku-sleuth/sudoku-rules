---
format: open-rules
title: Back and Forth
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r9sc7uq5il
case: https://sudoku-sleuth.com/cases/back-and-forth
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c4=2 r4c7=3 r5c5=3 r6c3=6 r8c6=7
---

```rules
sudoku 9x9
little-killer-1: little-killer r2c1-r1c2 sum 4
little-killer-2: little-killer r1c8-r2c9 sum 3
little-killer-3: little-killer r8c9-r9c8 sum 16
little-killer-4: little-killer r9c2-r8c1 sum 17
little-killer-5: little-killer r1c3-r2c2-r3c1 sum 11
little-killer-6: little-killer r3c9-r2c8-r1c7 sum 12
little-killer-7: little-killer r9c7-r8c8-r7c9 sum 19
little-killer-8: little-killer r7c1-r8c2-r9c3 sum 18
little-killer-9: little-killer r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9 sum 32
```

**Sudoku, Diagonal Sums**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Diagonal Sums: Clues outside the grid WITH an arrow are the sum of the digits along the indicated diagonal. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

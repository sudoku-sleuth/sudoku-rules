---
format: open-rules
title: On The Bias
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dnh33nvt91
case: https://sudoku-sleuth.com/cases/on-the-bias
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c2=2 r6c8=4
exported: cb54af6d5ac5dca4c5adf7b15f0f5e37
---

```rules
sudoku 9x9
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 22
little-killer-2: little-killer r7c1-r8c2-r9c3 sum 22
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 8
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 8
little-killer-5: little-killer r2c9-r1c8 sum 10
little-killer-6: little-killer r8c9-r9c8 sum 12
little-killer-7: little-killer r2c1-r1c2 sum 6
little-killer-8: little-killer r8c1-r9c2 sum 9
sandwich-1: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 30
sandwich-2: sandwich r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 27
sandwich-3: sandwich r9c9-r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2-r9c1 sum 12
sandwich-4: sandwich r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 sum 13
sandwich-5: sandwich r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 8
sandwich-6: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 5
sandwich-7: sandwich r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 7
```

**Sudoku, Sandwich Sums, Diagonal Sums**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Sandwich sum: Clues outside the grid WITHOUT an arrow indicate the sum of the digits between 1 and 9 in that row or column.
- Diagonal Sums: Clues outside the grid WITH an arrow are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

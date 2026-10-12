---
format: open-rules
title: Subway Sums
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/81443k0mdf
case: https://sudoku-sleuth.com/cases/subway-sums
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
little-killer-1: little-killer r9c5-r8c6-r7c7-r6c8-r5c9 sum 37
little-killer-2: little-killer r9c6-r8c7-r7c8-r6c9 sum 35
little-killer-3: little-killer r1c4-r2c3-r3c2-r4c1 sum 5
little-killer-4: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 13
little-killer-5: little-killer r7c1-r6c2-r5c3-r4c4-r3c5-r2c6-r1c7 sum 42
little-killer-6: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 46
sandwich-1: sandwich r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 19
sandwich-2: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 30
sandwich-3: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 15
sandwich-4: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 11
sandwich-5: sandwich r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 sum 9
```

**Sudoku, Sandwich, Diagonal Sums**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Sandwich sum: Clues outside the grid WITHOUT an arrow indicate the sum of the digits between 1 and 9 in that row or column.
- Diagonal sum: Clues outside the grid WITH an arrow give the sum of the digits along the indicated diagonal.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

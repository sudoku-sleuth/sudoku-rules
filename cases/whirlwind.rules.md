---
format: open-rules
title: Whirlwind
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/whirlwind
case: https://sudoku-sleuth.com/cases/whirlwind
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3f406eb4aac1d8bc4176a7a8fc3ab562
---

```rules
sudoku 9x9
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 7
little-killer-2: little-killer r2c1-r1c2 sum 9
little-killer-3: little-killer r4c1-r3c2-r2c3-r1c4 sum 15
little-killer-4: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-5: little-killer r1c8-r2c9 sum 8
little-killer-6: little-killer r1c6-r2c7-r3c8-r4c9 sum 18
little-killer-7: little-killer r8c9-r9c8 sum 6
little-killer-8: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-9: little-killer r6c9-r7c8-r8c7-r9c6 sum 19
little-killer-10: little-killer r9c2-r8c1 sum 8
little-killer-11: little-killer r9c3-r8c2-r7c1 sum 11
little-killer-12: little-killer r9c4-r8c3-r7c2-r6c1 sum 29
little-killer-13: little-killer r9c9-r8c8-r7c7-r6c6-r5c5-r4c4-r3c3-r2c2-r1c1 sum 48
little-killer-14: little-killer r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9 sum 43
```

Inner Reasons
by FullDeck and Missing a Few Cards
**Sudoku, Diagonal Sums**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Diagonal Sums: Clues outside the grid give the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

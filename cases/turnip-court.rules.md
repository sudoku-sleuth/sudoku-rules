---
format: open-rules
title: Turnip Court
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/03diakygjp
case: https://sudoku-sleuth.com/cases/turnip-court
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c6=2 r6c8=1 r8c4=9
---

```rules
sudoku 9x9
anti-knight
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 7
little-killer-2: little-killer r7c9-r8c8-r9c7 sum 6
little-killer-3: little-killer r4c1-r3c2-r2c3-r1c4 sum 11
little-killer-4: little-killer r1c7-r2c8-r3c9 sum 14
little-killer-5: little-killer r1c8-r2c9 sum 10
little-killer-6: little-killer r6c9-r7c8-r8c7-r9c6 sum 13
little-killer-7: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 50
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 8
little-killer-9: little-killer r9c2-r8c1 sum 11
little-killer-10: little-killer r1c6-r2c7-r3c8-r4c9 sum 30
little-killer-11: little-killer r8c9-r9c8 sum 13
little-killer-12: little-killer r2c1-r1c2 sum 17
little-killer-13: little-killer r9c4-r8c3-r7c2-r6c1 sum 24
little-killer-14: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 29
```

**Sudoku, Diagonal Sums, Anti-knight**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

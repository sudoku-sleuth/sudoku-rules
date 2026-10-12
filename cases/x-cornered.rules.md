---
format: open-rules
title: X-Cornered
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/urliqj4bkk
case: https://sudoku-sleuth.com/cases/x-cornered
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=4
---

```rules
sudoku 9x9
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [4]
quadruple-2: quadruple r7c7-r7c8-r8c7-r8c8 digits [5]
quadruple-3: quadruple r7c2-r7c3-r8c2-r8c3 digits [3]
quadruple-4: quadruple r2c7-r2c8-r3c7-r3c8 digits [2]
quadruple-5: quadruple r8c1-r8c2-r9c1-r9c2 digits [9]
quadruple-6: quadruple r3c3-r3c4-r4c3-r4c4 digits [8]
quadruple-7: quadruple r3c6-r3c7-r4c6-r4c7 digits [8]
quadruple-8: quadruple r1c8-r1c9-r2c8-r2c9 digits [8]
quadruple-9: quadruple r6c3-r6c4-r7c3-r7c4 digits [9]
quadruple-10: quadruple r6c6-r6c7-r7c6-r7c7 digits [9]
quadruple-11: quadruple r8c8-r8c9-r9c8-r9c9 digits [2]
quadruple-12: quadruple r1c1-r1c2-r2c1-r2c2 digits [2]
x-sum-1: x-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 15
x-sum-2: x-sum r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 15
x-sum-3: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 16
x-sum-4: x-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 16
x-sum-5: x-sum r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 20
x-sum-6: x-sum r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 20
x-sum-7: x-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 17
x-sum-8: x-sum r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 17
```

**Sudoku, X-Sums, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Clues outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

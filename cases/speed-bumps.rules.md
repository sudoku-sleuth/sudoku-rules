---
format: open-rules
title: Speed Bumps
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f6fvrnvkar
case: https://sudoku-sleuth.com/cases/speed-bumps
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4edad4726f43b17bd3aa177de61e33a4
---

```rules
sudoku 9x9
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [3]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [2]
quadruple-3: quadruple r7c7-r7c8-r8c7-r8c8 digits [4]
quadruple-4: quadruple r7c2-r7c3-r8c2-r8c3 digits [2]
quadruple-5: quadruple r4c1-r4c2-r5c1-r5c2 digits [5]
quadruple-6: quadruple r4c8-r4c9-r5c8-r5c9 digits [4]
quadruple-7: quadruple r8c4-r8c5-r9c4-r9c5 digits [3]
quadruple-8: quadruple r1c5-r1c6-r2c5-r2c6 digits [2]
quadruple-9: quadruple r5c3-r5c4-r6c3-r6c4 digits [1,4]
quadruple-10: quadruple r4c6-r4c7-r5c6-r5c7 digits [7,8]
quadruple-11: quadruple r6c5-r6c6-r7c5-r7c6 digits [4,9]
quadruple-12: quadruple r3c4-r3c5-r4c4-r4c5 digits [1,6]
x-sum-1: x-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 16
x-sum-2: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 12
x-sum-3: x-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 27
x-sum-4: x-sum r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 9
x-sum-5: x-sum r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sum 20
x-sum-6: x-sum r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sum 15
x-sum-7: x-sum r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 sum 9
x-sum-8: x-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 13
x-sum-9: x-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 17
x-sum-10: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 15
```

**Sudoku, X-Sums, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X-Sums: Clues outside the grid give the sum of the first X numbers placed in the corresponding row or column, where X is digit in the cell next to the X-sum clue.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

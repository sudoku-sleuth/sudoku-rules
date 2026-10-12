---
format: open-rules
title: Dante's Quads
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cbehhe0221
case: https://sudoku-sleuth.com/cases/dante-s-quads
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=6 r1c9=1 r9c1=1 r9c9=2
---

```rules
sudoku 9x9
quadruple-1: quadruple r4c3-r4c4-r5c3-r5c4 digits [1,2,3]
quadruple-2: quadruple r3c4-r3c5-r4c4-r4c5 digits [1,2,3]
quadruple-3: quadruple r6c5-r6c6-r7c5-r7c6 digits [1,2,3]
quadruple-4: quadruple r5c6-r5c7-r6c6-r6c7 digits [1,2,3]
quadruple-5: quadruple r5c3-r5c4-r6c3-r6c4 digits [1,2,4]
quadruple-6: quadruple r6c4-r6c5-r7c4-r7c5 digits [1,2,4]
quadruple-7: quadruple r3c5-r3c6-r4c5-r4c6 digits [1,2,5]
quadruple-8: quadruple r4c6-r4c7-r5c6-r5c7 digits [1,2,5]
quadruple-9: quadruple r7c3-r7c4-r8c3-r8c4 digits [4,5,6]
quadruple-10: quadruple r6c2-r6c3-r7c2-r7c3 digits [4,5,6]
quadruple-11: quadruple r3c2-r3c3-r4c2-r4c3 digits [3,4,5]
quadruple-12: quadruple r2c3-r2c4-r3c3-r3c4 digits [5,6,8]
quadruple-13: quadruple r2c6-r2c7-r3c6-r3c7 digits [2,4,6]
quadruple-14: quadruple r3c7-r3c8-r4c7-r4c8 digits [6,7,8]
quadruple-15: quadruple r6c7-r6c8-r7c7-r7c8 digits [3,5,7]
quadruple-16: quadruple r7c6-r7c7-r8c6-r8c7 digits [7,8,9]
quadruple-17: quadruple r3c1-r3c2-r4c1-r4c2 digits [7]
quadruple-18: quadruple r1c6-r1c7-r2c6-r2c7 digits [8]
quadruple-19: quadruple r6c8-r6c9-r7c8-r7c9 digits [9]
quadruple-20: quadruple r8c3-r8c4-r9c3-r9c4 digits [8]
```

**Standard Sudoku, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

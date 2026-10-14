---
format: open-rules
title: Quadcopter
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fgdqijumwu
case: https://sudoku-sleuth.com/cases/quadcopter
library: https://rules.sudoku-sleuth.com/
status: read
exported: fb90b3dfe6645e8b964c82af9717fa8c
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r1c4-r2c1-r2c2-r3c1-r4c1 total 28 connected true
cage-2: cage r6c9-r7c9-r8c8-r8c9-r9c6-r9c7-r9c8 total 28 connected true
cage-3: cage r6c1-r7c1-r8c1-r8c2-r9c2-r9c3-r9c4 total 28 connected true
cage-4: cage r1c6-r1c7-r1c8-r2c8-r2c9-r3c9-r4c9 total 28 connected true
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [6,7,9]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,6,7]
quadruple-3: quadruple r7c7-r7c8-r8c7-r8c8 digits [2,6,7]
quadruple-4: quadruple r7c2-r7c3-r8c2-r8c3 digits [3,6,7]
quadruple-5: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,1]
quadruple-6: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,2]
quadruple-7: quadruple r6c6-r6c7-r7c6-r7c7 digits [3,3]
quadruple-8: quadruple r6c3-r6c4-r7c3-r7c4 digits [4,4]
quadruple-9: quadruple r4c4-r4c5-r5c4-r5c5 digits [5]
quadruple-10: quadruple r5c5-r5c6-r6c5-r6c6 digits [8]
quadruple-11: quadruple r4c8-r4c9-r5c8-r5c9 digits [6]
quadruple-12: quadruple r5c1-r5c2-r6c1-r6c2 digits [7]
quadruple-13: quadruple r5c4-r5c5-r6c4-r6c5 digits [9]
quadruple-14: quadruple r4c5-r4c6-r5c5-r5c6 digits [4]
```

**Standard Sudoku, Quadruples, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

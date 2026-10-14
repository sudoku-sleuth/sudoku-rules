---
format: open-rules
title: Quages
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fk4mmssugp
case: https://sudoku-sleuth.com/cases/quages
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9e84506141c9d720e6f55fdc0cba660c
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 6 connected true
cage-2: cage r1c8-r1c9-r2c9 total 24 connected true
cage-3: cage r8c1-r9c1-r9c2 total 23 connected true
cage-4: cage r2c3-r3c2-r3c3 total 23 connected true
cage-5: cage r2c7-r3c7-r3c8 total 7 connected true
cage-6: cage r7c7-r7c8-r8c7 total 24 connected true
cage-7: cage r7c2-r7c3-r8c3 total 6 connected true
cage-8: cage r3c4-r4c3-r4c4 total 7 connected true
cage-9: cage r6c6-r6c7-r7c6 total 6 connected true
cage-10: cage r3c6-r4c6-r4c7 total 23 connected true
cage-11: cage r6c3-r6c4-r7c4 total 24 connected true
cage-12: cage r8c8-r9c8-r9c9 total 8 connected true
quadruple-1: quadruple r2c1-r2c2-r3c1-r3c2 digits [2,4,6,7]
quadruple-2: quadruple r2c8-r2c9-r3c8-r3c9 digits [2,3,5,7]
quadruple-3: quadruple r7c8-r7c9-r8c8-r8c9 digits [4,5,6,8]
quadruple-4: quadruple r7c1-r7c2-r8c1-r8c2 digits [2,5,6,7]
quadruple-5: quadruple r4c2-r4c3-r5c2-r5c3 digits [1,2,6,8]
quadruple-6: quadruple r7c4-r7c5-r8c4-r8c5 digits [1,2,4,9]
```

**Sudoku, Quadrilaterals, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

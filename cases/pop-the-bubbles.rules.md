---
format: open-rules
title: Pop the Bubbles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/l1i1ahci5v
case: https://sudoku-sleuth.com/cases/pop-the-bubbles
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r3c8 total 18 connected true
cage-2: cage r4c3-r4c4-r5c4 total 15 connected true
cage-3: cage r5c6-r6c6-r6c7 total 15 connected true
cage-4: cage r7c2-r8c2-r8c3 total 12 connected true
cage-5: cage r7c8-r8c7-r8c8 total 9 connected true
cage-6: cage r2c2-r2c3-r3c2 total 21 connected true
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3,4]
quadruple-2: quadruple r2c3-r2c4-r3c3-r3c4 digits [1,2,5,9]
quadruple-3: quadruple r2c6-r2c7-r3c6-r3c7 digits [3,4,6]
quadruple-4: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,3,5,7]
quadruple-5: quadruple r4c2-r4c3-r5c2-r5c3 digits [1,2,3,5]
quadruple-6: quadruple r5c7-r5c8-r6c7-r6c8 digits [5,7,8,9]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [3,5,7,9]
quadruple-8: quadruple r7c3-r7c4-r8c3-r8c4 digits [4,6,7]
quadruple-9: quadruple r7c6-r7c7-r8c6-r8c7 digits [1,5,8,9]
quadruple-10: quadruple r8c8-r8c9-r9c8-r9c9 digits [6,7,8,9]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

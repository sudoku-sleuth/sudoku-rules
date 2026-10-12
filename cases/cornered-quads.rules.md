---
format: open-rules
title: Cornered Quads
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ml6vdmxuxo
case: https://sudoku-sleuth.com/cases/cornered-quads
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 14 connected true
cage-2: cage r2c7-r3c7-r3c8 total 14 connected true
cage-3: cage r7c2-r8c2-r8c3 total 12 connected true
cage-4: cage r7c8-r8c7-r8c8 total 18 connected true
cage-5: cage r4c2-r5c2-r6c2 total 19 connected true
cage-6: cage r4c5-r5c5-r6c5 total 12 connected true
cage-7: cage r4c8-r5c8-r6c8 total 10 connected true
cage-8: cage r2c4-r2c5-r2c6 total 18 connected true
cage-9: cage r8c4-r8c5-r8c6 total 22 connected true
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,3,4,5]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,2,3,9]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,3,4,5]
quadruple-4: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,2,3,9]
quadruple-5: quadruple r1c8-r1c9-r2c8-r2c9 digits [5,6,7,8]
quadruple-6: quadruple r6c3-r6c4-r7c3-r7c4 digits [2,3]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2,3,9]
quadruple-8: quadruple r3c6-r3c7-r4c6-r4c7 digits [7,8]
quadruple-9: quadruple r5c1-r5c2-r6c1-r6c2 digits [5,8]
quadruple-10: quadruple r4c8-r4c9-r5c8-r5c9 digits [3,7]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

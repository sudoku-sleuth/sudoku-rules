---
format: open-rules
title: Oxford Ramble
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9u3me83yj9
case: https://sudoku-sleuth.com/cases/oxford-ramble
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 16 connected true
cage-2: cage r8c8-r8c9-r9c8-r9c9 total 25 connected true
cage-3: cage r1c8-r1c9-r2c8-r2c9 total 21 connected true
cage-4: cage r8c1-r8c2-r9c1-r9c2 total 14 connected true
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [2,7]
quadruple-2: quadruple r2c8-r2c9-r3c8-r3c9 digits [1,2,3,5]
quadruple-3: quadruple r2c4-r2c5-r3c4-r3c5 digits [3,8]
quadruple-4: quadruple r3c3-r3c4-r4c3-r4c4 digits [3,4,6,7]
quadruple-5: quadruple r3c6-r3c7-r4c6-r4c7 digits [3,4,6,7]
quadruple-6: quadruple r6c3-r6c4-r7c3-r7c4 digits [3,4,6,7]
quadruple-7: quadruple r6c6-r6c7-r7c6-r7c7 digits [3,4,6,7]
quadruple-8: quadruple r3c7-r3c8-r4c7-r4c8 digits [1,6]
quadruple-9: quadruple r5c5-r5c6-r6c5-r6c6 digits [1,4]
quadruple-10: quadruple r6c1-r6c2-r7c1-r7c2 digits [5,9]
quadruple-11: quadruple r6c2-r6c3-r7c2-r7c3 digits [3,8]
quadruple-12: quadruple r7c1-r7c2-r8c1-r8c2 digits [1,2,4,5]
quadruple-13: quadruple r7c7-r7c8-r8c7-r8c8 digits [2,6]
quadruple-14: quadruple r8c7-r8c8-r9c7-r9c8 digits [2,4]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

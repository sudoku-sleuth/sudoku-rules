---
format: open-rules
title: Oxford Dungeon
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/p6irrhbk65
case: https://sudoku-sleuth.com/cases/oxford-dungeon
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 11 connected true
cage-2: cage r1c5-r2c5-r3c5 total 14 connected true
cage-3: cage r1c8-r1c9-r2c8-r2c9 total 14 connected true
cage-4: cage r3c3-r3c4-r4c3-r4c4 total 10 connected true
cage-5: cage r3c6-r3c7-r4c6-r4c7 total 12 connected true
cage-6: cage r5c1-r5c2-r5c3 total 16 connected true
cage-7: cage r5c7-r5c8-r5c9 total 16 connected true
cage-8: cage r6c3-r6c4-r7c3-r7c4 total 12 connected true
cage-9: cage r6c6-r6c7-r7c6-r7c7 total 10 connected true
cage-10: cage r8c1-r8c2-r9c1-r9c2 total 14 connected true
cage-11: cage r7c5-r8c5-r9c5 total 13 connected true
cage-12: cage r8c8-r8c9-r9c8-r9c9 total 11 connected true
quadruple-1: quadruple r2c3-r2c4-r3c3-r3c4 digits [8,9]
quadruple-2: quadruple r2c8-r2c9-r3c8-r3c9 digits [1,7]
quadruple-3: quadruple r4c2-r4c3-r5c2-r5c3 digits [1,2,5]
quadruple-4: quadruple r4c7-r4c8-r5c7-r5c8 digits [2,4,6]
quadruple-5: quadruple r7c2-r7c3-r8c2-r8c3 digits [4,5,7]
quadruple-6: quadruple r7c7-r7c8-r8c7-r8c8 digits [1,8,9]
```

Oxford Dungeon
by FullDeck and Missing a Few Cards
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

---
format: open-rules
title: Magistratum
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/magistratum
case: https://sudoku-sleuth.com/cases/magistratum
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2133e87a988f51e5cc8077d4caa19a34
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 7 connected true
cage-2: cage r2c1-r3c1 total 9 connected true
cage-3: cage r7c1-r8c1 total 13 connected true
cage-4: cage r6c2-r6c3 total 9 connected true
cage-5: cage r4c2-r4c3 total 11 connected true
cage-6: cage r9c7-r9c8 total 6 connected true
cage-7: cage r7c9-r8c9 total 15 connected true
cage-8: cage r2c9-r3c9 total 7 connected true
cage-9: cage r1c7-r1c8 total 9 connected true
cage-10: cage r4c7-r4c8 total 6 connected true
cage-11: cage r6c7-r6c8 total 14 connected true
cage-12: cage r3c4-r4c4 total 12 connected true
cage-13: cage r3c6-r4c6 total 9 connected true
cage-14: cage r6c6-r7c6 total 8 connected true
cage-15: cage r6c4-r7c4 total 6 connected true
cage-16: cage r9c2-r9c3 total 10 connected true
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3,4]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2,3,5]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,3,5,6]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [2,3,4,5]
```

**Standard Sudoku, Cages, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

---
format: open-rules
title: Orbital Maneuvers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ouu6f7l39g
case: https://sudoku-sleuth.com/cases/orbital-maneuvers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [1,2,3]
quadruple-2: quadruple r2c1-r2c2-r3c1-r3c2 digits [4,5,6]
quadruple-3: quadruple r2c8-r2c9-r3c8-r3c9 digits [4,5,6]
quadruple-4: quadruple r1c7-r1c8-r2c7-r2c8 digits [7,8,9]
quadruple-5: quadruple r8c2-r8c3-r9c2-r9c3 digits [1,2,3]
quadruple-6: quadruple r7c1-r7c2-r8c1-r8c2 digits [7,8,9]
quadruple-7: quadruple r8c7-r8c8-r9c7-r9c8 digits [1,2,3]
quadruple-8: quadruple r7c8-r7c9-r8c8-r8c9 digits [7,8,9]
quadruple-9: quadruple r5c1-r5c2-r6c1-r6c2 digits [1,4,7]
quadruple-10: quadruple r1c5-r1c6-r2c5-r2c6 digits [2,3,4]
quadruple-11: quadruple r8c4-r8c5-r9c4-r9c5 digits [4,5,7]
quadruple-12: quadruple r4c8-r4c9-r5c8-r5c9 digits [2,5,6]
quadruple-13: quadruple r7c5-r7c6-r8c5-r8c6 digits [2,3]
quadruple-14: quadruple r2c4-r2c5-r3c4-r3c5 digits [2,8]
quadruple-15: quadruple r4c2-r4c3-r5c2-r5c3 digits [6,8]
quadruple-16: quadruple r5c7-r5c8-r6c7-r6c8 digits [3,7]
```

**Sudoku, Diagonal, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Diagonals: digits cannot repeat along the marked diagonals.
- Quadruples: Each digit shown in a Quadruple circle must appear at least once in the four surrounding cells.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html

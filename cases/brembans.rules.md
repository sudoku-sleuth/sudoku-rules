---
format: open-rules
title: BremBans
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ajaif8n9xs
case: https://sudoku-sleuth.com/cases/brembans
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,9]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [8]
quadruple-3: quadruple r1c5-r1c6-r2c5-r2c6 digits [5,9]
quadruple-4: quadruple r3c6-r3c7-r4c6-r4c7 digits [1,2,3,4]
quadruple-5: quadruple r6c3-r6c4-r7c3-r7c4 digits [1,2,3,4]
quadruple-6: quadruple r7c1-r7c2-r8c1-r8c2 digits [2,6,8]
quadruple-7: quadruple r8c2-r8c3-r9c2-r9c3 digits [5]
quadruple-8: quadruple r8c3-r8c4-r9c3-r9c4 digits [9]
quadruple-9: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,7]
quadruple-10: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,8]
quadruple-11: quadruple r7c7-r7c8-r8c7-r8c8 digits [7,9]
quadruple-12: quadruple r4c8-r4c9-r5c8-r5c9 digits [6]
quadruple-13: quadruple r2c8-r2c9-r3c8-r3c9 digits [5]
quadruple-14: quadruple r5c1-r5c2-r6c1-r6c2 digits [4,5]
quadruple-15: quadruple r4c2-r4c3-r5c2-r5c3 digits [6,7]
bremban-1: bremban r3c1-r2c1-r2c2-r1c2-r1c3
bremban-2: bremban r7c3-r6c3-r5c3-r5c4-r4c5-r3c5-r3c6-r3c7
bremban-3: bremban r2c7-r1c7-r2c8-r3c9-r3c8
bremban-4: bremban r6c4-r6c5-r5c5-r5c6-r4c6
bremban-5: bremban r7c1-r7c2-r8c3-r9c3-r9c2-r9c1
bremban-6: bremban r9c8-r9c9
bremban-7: bremban r6c6-r7c6-r8c6-r8c7-r8c8-r7c8-r6c8-r6c7
bremban-8: bremban r3c2-r4c1-r4c2-r4c3-r4c4-r3c4-r2c4-r1c4-r2c3-r3c3
```

**Sudoku, Quads, BremBans**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- BremBan Lines: Digits along a BremBan line form a set of POSSIBLY REPEATING consecutive digits in some order.

---
format: open-rules
title: Monads
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/plqgxc3p1w
case: https://sudoku-sleuth.com/cases/monads
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3b2da60b34f5cadcef29db625fdd9034
---

```rules
sudoku 9x9
renban-1: renban r2c1-r1c1-r1c2-r1c3
renban-2: renban r3c1-r3c2-r3c3-r2c3
renban-3: renban r1c7-r1c8-r1c9-r2c9
renban-4: renban r2c7-r3c7-r3c8-r3c9
renban-5: renban r7c1-r7c2-r7c3-r8c3
renban-6: renban r8c1-r9c1-r9c2-r9c3
renban-7: renban r8c7-r7c7-r7c8-r7c9
renban-8: renban r8c9-r9c9-r9c8-r9c7
renban-9: renban r4c7-r5c7-r6c7-r6c8-r6c9
renban-10: renban r6c1-r6c2-r6c3-r5c3-r4c3
renban-11: renban r5c1-r5c2-r4c2
renban-12: renban r4c8-r5c8-r5c9
quadruple-1: quadruple r8c8-r8c9-r9c8-r9c9 digits [4]
quadruple-2: quadruple r8c1-r8c2-r9c1-r9c2 digits [6]
quadruple-3: quadruple r1c1-r1c2-r2c1-r2c2 digits [6]
quadruple-4: quadruple r1c8-r1c9-r2c8-r2c9 digits [4]
quadruple-5: quadruple r1c3-r1c4-r2c3-r2c4 digits [1]
quadruple-6: quadruple r8c3-r8c4-r9c3-r9c4 digits [9]
quadruple-7: quadruple r8c6-r8c7-r9c6-r9c7 digits [9]
quadruple-8: quadruple r1c6-r1c7-r2c6-r2c7 digits [1]
quadruple-9: quadruple r6c1-r6c2-r7c1-r7c2 digits [9]
quadruple-10: quadruple r3c1-r3c2-r4c1-r4c2 digits [1]
quadruple-11: quadruple r3c8-r3c9-r4c8-r4c9 digits [1]
quadruple-12: quadruple r6c8-r6c9-r7c8-r7c9 digits [9]
quadruple-13: quadruple r3c3-r3c4-r4c3-r4c4 digits [9]
quadruple-14: quadruple r6c3-r6c4-r7c3-r7c4 digits [1]
quadruple-15: quadruple r6c6-r6c7-r7c6-r7c7 digits [1]
quadruple-16: quadruple r3c6-r3c7-r4c6-r4c7 digits [9]
quadruple-17: quadruple r5c5-r5c6-r6c5-r6c6 digits [3]
quadruple-18: quadruple r5c4-r5c5-r6c4-r6c5 digits [7]
quadruple-19: quadruple r4c4-r4c5-r5c4-r5c5 digits [2]
quadruple-20: quadruple r8c5-r8c6-r9c5-r9c6 digits [7]
quadruple-21: quadruple r7c4-r7c5-r8c4-r8c5 digits [8]
quadruple-22: quadruple r7c5-r7c6-r8c5-r8c6 digits [4]
quadruple-23: quadruple r8c4-r8c5-r9c4-r9c5 digits [3]
quadruple-24: quadruple r1c4-r1c5-r2c4-r2c5 digits [7]
quadruple-25: quadruple r2c4-r2c5-r3c4-r3c5 digits [4]
quadruple-26: quadruple r1c5-r1c6-r2c5-r2c6 digits [8]
quadruple-27: quadruple r2c5-r2c6-r3c5-r3c6 digits [6]
quadruple-28: quadruple r4c5-r4c6-r5c5-r5c6 digits [8]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Usually shown as purple lines, digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

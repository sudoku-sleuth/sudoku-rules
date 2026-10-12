---
format: open-rules
title: Central Braid
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ihc71v7riu
case: https://sudoku-sleuth.com/cases/central-braid
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r4c3-r4c2-r3c2-r2c2-r1c2
renban-2: renban r9c2-r8c2-r7c2-r6c2-r6c1
renban-3: renban r4c7-r4c8-r3c8-r2c8-r1c8
renban-4: renban r6c9-r6c8-r7c8-r8c8-r9c8
renban-5: renban r7c4-r6c4-r5c5-r4c6-r3c6
renban-6: renban r6c6-r7c5-r8c5
renban-7: renban r4c4-r3c5-r2c5-r1c5
renban-8: renban r3c1-r2c1-r1c1
renban-9: renban r3c4-r2c4
renban-10: renban r7c6-r8c6
quadruple-1: quadruple r3c2-r3c3-r4c2-r4c3 digits [1,7]
quadruple-2: quadruple r6c1-r6c2-r7c1-r7c2 digits [1,7]
quadruple-3: quadruple r3c7-r3c8-r4c7-r4c8 digits [2,8]
quadruple-4: quadruple r6c8-r6c9-r7c8-r7c9 digits [2,8]
quadruple-5: quadruple r6c4-r6c5-r7c4-r7c5 digits [3,6]
quadruple-6: quadruple r8c5-r8c6-r9c5-r9c6 digits [3]
quadruple-7: quadruple r1c4-r1c5-r2c4-r2c5 digits [2]
quadruple-8: quadruple r3c5-r3c6-r4c5-r4c6 digits [3,6,9]
```

**Sudoku, Renban, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html

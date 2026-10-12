---
format: open-rules
title: Displacement
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/displacement
case: https://sudoku-sleuth.com/cases/displacement
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r2c1-r3c1-r3c2
renban-2: renban r1c2-r1c3-r2c3
renban-3: renban r1c8-r1c9-r2c9
renban-4: renban r2c7-r3c7-r3c8
renban-5: renban r8c1-r7c1-r7c2
renban-6: renban r9c2-r9c3-r8c3
renban-7: renban r8c7-r7c7-r7c8
renban-8: renban r9c8-r9c9-r8c9
renban-9: renban r7c3-r6c4-r5c3-r4c4-r3c3
renban-10: renban r1c7-r1c6-r2c5-r3c5-r4c6
renban-11: renban r3c9-r4c9-r5c8-r5c7-r5c6
renban-12: renban r7c9-r6c9-r6c8
renban-13: renban r9c6-r8c5-r7c5
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [6,8]
quadruple-2: quadruple r2c1-r2c2-r3c1-r3c2 digits [2,4]
quadruple-3: quadruple r1c7-r1c8-r2c7-r2c8 digits [2,4]
quadruple-4: quadruple r2c8-r2c9-r3c8-r3c9 digits [6,8]
quadruple-5: quadruple r7c1-r7c2-r8c1-r8c2 digits [6,8]
quadruple-6: quadruple r8c2-r8c3-r9c2-r9c3 digits [2,4]
quadruple-7: quadruple r7c7-r7c8-r8c7-r8c8 digits [1,3]
quadruple-8: quadruple r8c8-r8c9-r9c8-r9c9 digits [7,9]
quadruple-9: quadruple r4c3-r4c4-r5c3-r5c4 digits [1,9]
quadruple-10: quadruple r5c3-r5c4-r6c3-r6c4 digits [4,6]
quadruple-11: quadruple r3c6-r3c7-r4c6-r4c7 digits [1,2,3]
quadruple-12: quadruple r5c8-r5c9-r6c8-r6c9 digits [2,3,5]
quadruple-13: quadruple r8c5-r8c6-r9c5-r9c6 digits [3]
quadruple-14: quadruple r1c4-r1c5-r2c4-r2c5 digits [5]
quadruple-15: quadruple r5c1-r5c2-r6c1-r6c2 digits [1]
quadruple-16: quadruple r2c5-r2c6-r3c5-r3c6 digits [4]
```

**Sudoku, Renban, Quadruples**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Renban Line: Digits along a renban line must form a set of non-repeating consecutive digits in some order.
- Quadruples: Digits in a quadruple circle must be placed at least once in the four cells touching that circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

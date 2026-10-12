---
format: open-rules
title: Support Structures
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/support-structures
case: https://sudoku-sleuth.com/cases/support-structures
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
renban-1: renban r1c3-r1c4-r1c5-r1c6-r1c7
renban-2: renban r2c3-r2c4-r2c5-r2c6-r2c7
renban-3: renban r3c3-r3c4-r3c5-r3c6-r3c7
renban-4: renban r3c2-r4c2-r5c2-r6c2-r7c2
renban-5: renban r3c8-r4c8-r5c8-r6c8-r7c8
renban-6: renban r7c3-r7c4-r7c5-r7c6-r7c7
renban-7: renban r9c3-r8c3-r8c4-r9c4
renban-8: renban r9c6-r8c6-r8c7-r9c7
renban-9: renban r4c5-r5c5-r6c5
renban-10: renban r4c6-r4c7
renban-11: renban r4c3-r4c4
renban-12: renban r5c3-r5c4
renban-13: renban r5c6-r5c7
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1]
quadruple-2: quadruple r1c2-r1c3-r2c2-r2c3 digits [2]
quadruple-3: quadruple r2c1-r2c2-r3c1-r3c2 digits [3]
quadruple-4: quadruple r2c2-r2c3-r3c2-r3c3 digits [4]
quadruple-5: quadruple r1c7-r1c8-r2c7-r2c8 digits [5]
quadruple-6: quadruple r1c8-r1c9-r2c8-r2c9 digits [6]
quadruple-7: quadruple r2c7-r2c8-r3c7-r3c8 digits [7]
quadruple-8: quadruple r2c8-r2c9-r3c8-r3c9 digits [8]
quadruple-9: quadruple r7c7-r7c8-r8c7-r8c8 digits [1]
quadruple-10: quadruple r7c8-r7c9-r8c8-r8c9 digits [4]
quadruple-11: quadruple r8c7-r8c8-r9c7-r9c8 digits [8]
quadruple-12: quadruple r8c8-r8c9-r9c8-r9c9 digits [5]
quadruple-13: quadruple r7c1-r7c2-r8c1-r8c2 digits [2]
quadruple-14: quadruple r7c2-r7c3-r8c2-r8c3 digits [3]
quadruple-15: quadruple r8c1-r8c2-r9c1-r9c2 digits [6]
quadruple-16: quadruple r8c2-r8c3-r9c2-r9c3 digits [7]
quadruple-17: quadruple r1c5-r1c6-r2c5-r2c6 digits [8]
quadruple-18: quadruple r2c4-r2c5-r3c4-r3c5 digits [2]
quadruple-19: quadruple r5c1-r5c2-r6c1-r6c2 digits [7]
quadruple-20: quadruple r5c8-r5c9-r6c8-r6c9 digits [7]
quadruple-21: quadruple r3c3-r3c4-r4c3-r4c4 digits [9]
quadruple-22: quadruple r3c6-r3c7-r4c6-r4c7 digits [9]
quadruple-23: quadruple r6c3-r6c4-r7c3-r7c4 digits [5]
quadruple-24: quadruple r6c6-r6c7-r7c6-r7c7 digits [5]
```

Support Structures
by FullDeck and Missing a Few Cards
**Sudoku, Renban, Quadruples**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Renban Line: Digits along a renban line must form a set of non-repeating consecutive digits in some order.
- Quadruples: Digits in a quadruple circle must be placed at least once in the four cells touching that circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

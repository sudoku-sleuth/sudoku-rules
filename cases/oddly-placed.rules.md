---
format: open-rules
title: Oddly Placed
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/p29mv2hfgu
case: https://sudoku-sleuth.com/cases/oddly-placed
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=9 r1c9=7 r9c1=3 r9c9=5
exported: 6359a6d1121b672217c58af8dd26bb37
---

```rules
sudoku 9x9
renban-1: renban r3c1-r4c1-r4c2-r3c2
renban-2: renban r2c3-r1c3-r1c4-r2c4
renban-3: renban r1c6-r2c6-r2c7-r1c7
renban-4: renban r4c8-r3c8-r3c9-r4c9
renban-5: renban r6c8-r6c9-r7c9-r7c8
renban-6: renban r9c6-r8c6-r8c7-r9c7
renban-7: renban r9c3-r8c3-r8c4-r9c4
renban-8: renban r7c1-r7c2-r6c2-r6c1
renban-9: renban r5c3-r6c3-r6c4-r5c4
renban-10: renban r5c6-r4c6-r4c7-r5c7
quadruple-1: quadruple r3c1-r3c2-r4c1-r4c2 digits [2]
quadruple-2: quadruple r1c3-r1c4-r2c3-r2c4 digits [2]
quadruple-3: quadruple r1c6-r1c7-r2c6-r2c7 digits [3]
quadruple-4: quadruple r3c8-r3c9-r4c8-r4c9 digits [3]
quadruple-5: quadruple r6c8-r6c9-r7c8-r7c9 digits [4]
quadruple-6: quadruple r8c6-r8c7-r9c6-r9c7 digits [4]
quadruple-7: quadruple r8c3-r8c4-r9c3-r9c4 digits [5]
quadruple-8: quadruple r6c1-r6c2-r7c1-r7c2 digits [5]
quadruple-9: quadruple r4c6-r4c7-r5c6-r5c7 digits [5]
quadruple-10: quadruple r5c3-r5c4-r6c3-r6c4 digits [4]
quadruple-11: quadruple r6c4-r6c5-r7c4-r7c5 digits [7]
quadruple-12: quadruple r7c5-r7c6-r8c5-r8c6 digits [6]
quadruple-13: quadruple r2c4-r2c5-r3c4-r3c5 digits [8]
quadruple-14: quadruple r3c5-r3c6-r4c5-r4c6 digits [8]
quadruple-15: quadruple r4c2-r4c3-r5c2-r5c3 digits [4]
quadruple-16: quadruple r5c7-r5c8-r6c7-r6c8 digits [8]
quadruple-17: quadruple r4c4-r4c5-r5c4-r5c5 digits [4]
quadruple-18: quadruple r5c5-r5c6-r6c5-r6c6 digits [5]
quadruple-19: quadruple r7c2-r7c3-r8c2-r8c3 digits [8]
quadruple-20: quadruple r7c7-r7c8-r8c7-r8c8 digits [8]
quadruple-21: quadruple r2c7-r2c8-r3c7-r3c8 digits [6]
quadruple-22: quadruple r2c2-r2c3-r3c2-r3c3 digits [6]
```

**Sudoku, Renban Lines, Quadruples**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

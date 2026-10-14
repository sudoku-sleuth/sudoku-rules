---
format: open-rules
title: Radiant
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7s1a7cf5jv
case: https://sudoku-sleuth.com/cases/radiant
library: https://rules.sudoku-sleuth.com/
status: read
exported: cf516b2894a689b69e9a9b30f557608f
---

```rules
sudoku 9x9
renban-1: renban r4c3-r4c4-r3c4
renban-2: renban r3c6-r4c6-r4c7
renban-3: renban r6c7-r6c6-r7c6
renban-4: renban r6c3-r6c4-r7c4
renban-5: renban r4c2-r3c2-r2c2-r2c3-r2c4
renban-6: renban r2c6-r2c7-r2c8-r3c8-r4c8
renban-7: renban r8c6-r8c7-r8c8-r7c8-r6c8
renban-8: renban r8c4-r8c3-r8c2-r7c2-r6c2
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,9]
quadruple-2: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,8]
quadruple-3: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,9]
quadruple-4: quadruple r6c3-r6c4-r7c3-r7c4 digits [2,8]
quadruple-5: quadruple r4c4-r4c5-r5c4-r5c5 digits [2]
quadruple-6: quadruple r4c5-r4c6-r5c5-r5c6 digits [9]
quadruple-7: quadruple r5c4-r5c5-r6c4-r6c5 digits [1]
quadruple-8: quadruple r5c5-r5c6-r6c5-r6c6 digits [8]
quadruple-9: quadruple r4c2-r4c3-r5c2-r5c3 digits [3]
quadruple-10: quadruple r5c2-r5c3-r6c2-r6c3 digits [7]
quadruple-11: quadruple r4c7-r4c8-r5c7-r5c8 digits [7]
quadruple-12: quadruple r5c7-r5c8-r6c7-r6c8 digits [3]
quadruple-13: quadruple r2c2-r2c3-r3c2-r3c3 digits [8]
quadruple-14: quadruple r2c7-r2c8-r3c7-r3c8 digits [1]
quadruple-15: quadruple r7c7-r7c8-r8c7-r8c8 digits [4]
quadruple-16: quadruple r7c2-r7c3-r8c2-r8c3 digits [9]
quadruple-17: quadruple r8c8-r8c9-r9c8-r9c9 digits [3]
quadruple-18: quadruple r8c1-r8c2-r9c1-r9c2 digits [2]
quadruple-19: quadruple r1c1-r1c2-r2c1-r2c2 digits [7]
quadruple-20: quadruple r1c8-r1c9-r2c8-r2c9 digits [8]
```

**Sudoku, Renban, Quadruples**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Renban Lines: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

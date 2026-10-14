---
format: open-rules
title: Stand By Me
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/iymomvmnf0
case: https://sudoku-sleuth.com/cases/stand-by-me
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9e7244313800c0103b13810be2012a18
---

```rules
sudoku 9x9
renban-1: renban r2c1-r1c2
renban-2: renban r3c1-r2c2-r1c3
renban-3: renban r4c1-r3c2-r2c3-r1c4
renban-4: renban r1c6-r2c7-r3c8-r4c9
renban-5: renban r1c7-r2c8-r3c9
renban-6: renban r1c8-r2c9
renban-7: renban r9c8-r8c9
renban-8: renban r9c7-r8c8-r7c9
renban-9: renban r9c6-r8c7-r7c8-r6c9
renban-10: renban r8c1-r9c2
renban-11: renban r7c1-r8c2-r9c3
renban-12: renban r6c1-r7c2-r8c3-r9c4
renban-13: renban r3c4-r4c4-r5c4
renban-14: renban r3c5-r4c5-r5c5
renban-15: renban r3c6-r4c6-r5c6
renban-16: renban r6c4-r7c4
renban-17: renban r6c5-r7c5-r8c5
renban-18: renban r6c6-r7c6
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [1,2]
quadruple-2: quadruple r1c7-r1c8-r2c7-r2c8 digits [8,9]
quadruple-3: quadruple r8c7-r8c8-r9c7-r9c8 digits [3,4]
quadruple-4: quadruple r8c2-r8c3-r9c2-r9c3 digits [5,6]
quadruple-5: quadruple r7c8-r7c9-r8c8-r8c9 digits [2,5]
quadruple-6: quadruple r2c8-r2c9-r3c8-r3c9 digits [5,7]
quadruple-7: quadruple r2c1-r2c2-r3c1-r3c2 digits [3,5]
quadruple-8: quadruple r7c1-r7c2-r8c1-r8c2 digits [3,7]
quadruple-9: quadruple r5c4-r5c5-r6c4-r6c5 digits [2,9]
quadruple-10: quadruple r5c5-r5c6-r6c5-r6c6 digits [3,8]
quadruple-11: quadruple r7c5-r7c6-r8c5-r8c6 digits [3,8]
quadruple-12: quadruple r2c4-r2c5-r3c4-r3c5 digits [2,9]
quadruple-13: quadruple r3c4-r3c5-r4c4-r4c5 digits [1,7]
quadruple-14: quadruple r3c5-r3c6-r4c5-r4c6 digits [5,6]
quadruple-15: quadruple r5c2-r5c3-r6c2-r6c3 digits [1,7]
quadruple-16: quadruple r4c7-r4c8-r5c7-r5c8 digits [5,6]
```

**Sudoku, Renban Lines, Quadruples**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

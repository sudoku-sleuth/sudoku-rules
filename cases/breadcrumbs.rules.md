---
format: open-rules
title: Breadcrumbs
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wkx2hfnfl9
case: https://sudoku-sleuth.com/cases/breadcrumbs
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3,4]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,2,3]
quadruple-3: quadruple r2c4-r2c5-r3c4-r3c5 digits [5,6,7]
quadruple-4: quadruple r1c5-r1c6-r2c5-r2c6 digits [2,3,4]
quadruple-5: quadruple r1c8-r1c9-r2c8-r2c9 digits [7,8,9]
quadruple-6: quadruple r3c6-r3c7-r4c6-r4c7 digits [6,7]
quadruple-7: quadruple r4c7-r4c8-r5c7-r5c8 digits [1,8,9]
quadruple-8: quadruple r5c8-r5c9-r6c8-r6c9 digits [2,4,7]
quadruple-9: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,3,6,8]
quadruple-10: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,2,4]
quadruple-11: quadruple r7c7-r7c8-r8c7-r8c8 digits [7]
quadruple-12: quadruple r8c4-r8c5-r9c4-r9c5 digits [1,6,7]
quadruple-13: quadruple r7c5-r7c6-r8c5-r8c6 digits [3,4]
quadruple-14: quadruple r6c3-r6c4-r7c3-r7c4 digits [2,5,6]
quadruple-15: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,6]
quadruple-16: quadruple r8c1-r8c2-r9c1-r9c2 digits [9]
quadruple-17: quadruple r2c2-r2c3-r3c2-r3c3 digits [5,7]
```

**Sudoku, Quadruples**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

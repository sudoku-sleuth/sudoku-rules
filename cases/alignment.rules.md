---
format: open-rules
title: Alignment
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3wrvh8evlb
case: https://sudoku-sleuth.com/cases/alignment
library: https://rules.sudoku-sleuth.com/
status: read
exported: ab1da04047264bcecc33b094f1f4f326
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2]
quadruple-2: quadruple r2c2-r2c3-r3c2-r3c3 digits [3,4]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [8,9]
quadruple-4: quadruple r2c7-r2c8-r3c7-r3c8 digits [6,7]
quadruple-5: quadruple r8c1-r8c2-r9c1-r9c2 digits [8,9]
quadruple-6: quadruple r7c2-r7c3-r8c2-r8c3 digits [6,7]
quadruple-7: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,2]
quadruple-8: quadruple r7c7-r7c8-r8c7-r8c8 digits [3,4]
quadruple-9: quadruple r4c1-r4c2-r5c1-r5c2 digits [2,3]
quadruple-10: quadruple r5c2-r5c3-r6c2-r6c3 digits [5,8]
quadruple-11: quadruple r4c8-r4c9-r5c8-r5c9 digits [5,8]
quadruple-12: quadruple r5c7-r5c8-r6c7-r6c8 digits [2,3]
quadruple-13: quadruple r6c3-r6c4-r7c3-r7c4 digits [3]
quadruple-14: quadruple r6c6-r6c7-r7c6-r7c7 digits [3]
quadruple-15: quadruple r3c6-r3c7-r4c6-r4c7 digits [3]
quadruple-16: quadruple r3c3-r3c4-r4c3-r4c4 digits [3]
quadruple-17: quadruple r2c4-r2c5-r3c4-r3c5 digits [2,4]
quadruple-18: quadruple r2c5-r2c6-r3c5-r3c6 digits [8,9]
quadruple-19: quadruple r7c4-r7c5-r8c4-r8c5 digits [1,3]
quadruple-20: quadruple r7c5-r7c6-r8c5-r8c6 digits [5,6]
index r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 axis "column"
```

**Sudoku, Column Indexing, Quadruples**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
Column Indexing: Digits placed in red cells (columns 1, 5, 9) indicate the position of the corresponding column number in that row. For example, if r2c5 is a 3, then the 5 in row 2 appears in column 3.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

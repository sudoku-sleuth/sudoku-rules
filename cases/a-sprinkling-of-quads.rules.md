---
format: open-rules
title: A Sprinkling of Quads
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kjo9ixh6ug
case: https://sudoku-sleuth.com/cases/a-sprinkling-of-quads
library: https://rules.sudoku-sleuth.com/
status: read
exported: f5fb0b5ec80431a66cb6cb0d8e5eb5a9
---

```rules
sudoku 9x9
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,1,2,2]
quadruple-2: quadruple r3c6-r3c7-r4c6-r4c7 digits [3,3,4,4]
quadruple-3: quadruple r6c6-r6c7-r7c6-r7c7 digits [5,5,6,6]
quadruple-4: quadruple r6c3-r6c4-r7c3-r7c4 digits [7,7,8,8]
quadruple-5: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,3]
quadruple-6: quadruple r8c8-r8c9-r9c8-r9c9 digits [4,5]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [6,7]
quadruple-8: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,8]
quadruple-9: quadruple r4c7-r4c8-r5c7-r5c8 digits [2,4]
quadruple-10: quadruple r5c2-r5c3-r6c2-r6c3 digits [6,8]
quadruple-11: quadruple r8c4-r8c5-r9c4-r9c5 digits [1,2]
quadruple-12: quadruple r1c5-r1c6-r2c5-r2c6 digits [6,9]
quadruple-13: quadruple r2c4-r2c5-r3c4-r3c5 digits [5,6]
quadruple-14: quadruple r7c5-r7c6-r8c5-r8c6 digits [2,8]
quadruple-15: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,3,4]
quadruple-16: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,2,6]
```

**Sudoku, Quadruples**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

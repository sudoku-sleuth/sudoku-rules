---
format: open-rules
title: Renning Round The Court
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3oxhng1ep6
case: https://sudoku-sleuth.com/cases/renning-round-the-court
library: https://rules.sudoku-sleuth.com/
status: read
exported: e48b899231d1a8f9f0132fcb3cbdca3b
---

```rules
sudoku 9x9
renban-1: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-2: renban r1c7-r1c8-r1c9-r2c9-r3c9
renban-3: renban r7c9-r8c9-r9c9-r9c8-r9c7
renban-4: renban r9c3-r9c2-r9c1-r8c1-r7c1
renban-5: renban r6c2-r6c3-r6c4-r7c4-r8c4
renban-6: renban r4c2-r4c3-r4c4-r3c4-r2c4
renban-7: renban r2c6-r3c6-r4c6-r4c7-r4c8
renban-8: renban r6c8-r6c7-r6c6-r7c6-r8c6
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,5,6]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,3,6,7]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [3,4,7,8]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [4,5,8,9]
quadruple-5: quadruple r3c3-r3c4-r4c3-r4c4 digits [5,6,8,9]
quadruple-6: quadruple r3c6-r3c7-r4c6-r4c7 digits [1,3,5,7]
quadruple-7: quadruple r6c3-r6c4-r7c3-r7c4 digits [1,2,3,4]
quadruple-8: quadruple r5c1-r5c2-r6c1-r6c2 digits [2,4,7,9]
quadruple-9: quadruple r2c5-r2c6-r3c5-r3c6 digits [1,2,4,5]
```

**Sudoku, Quadruples, Renban Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
- Renban line: Digits along a Renban line must form a non-repeating set of consecutive digits in some order.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

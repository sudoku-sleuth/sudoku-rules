---
format: open-rules
title: Quad Ripples
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/as252kfkpb
case: https://sudoku-sleuth.com/cases/quad-ripples
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,2,3,4]
quadruple-2: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,3,4,5]
quadruple-3: quadruple r6c6-r6c7-r7c6-r7c7 digits [3,4,5,6]
quadruple-4: quadruple r6c3-r6c4-r7c3-r7c4 digits [4,5,6,7]
quadruple-5: quadruple r2c2-r2c3-r3c2-r3c3 digits [4,5,6,7]
quadruple-6: quadruple r2c7-r2c8-r3c7-r3c8 digits [5,6,7,8]
quadruple-7: quadruple r7c7-r7c8-r8c7-r8c8 digits [6,7,8,9]
quadruple-8: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,7,8,9]
quadruple-9: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3,6]
quadruple-10: quadruple r1c8-r1c9-r2c8-r2c9 digits [3,4,8,9]
quadruple-11: quadruple r8c8-r8c9-r9c8-r9c9 digits [3,4,5,7]
quadruple-12: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,4,5,6]
quadruple-13: quadruple r5c6-r5c7-r6c6-r6c7 digits [3,5,8,9]
quadruple-14: quadruple r4c8-r4c9-r5c8-r5c9 digits [2,5,6,7]
quadruple-15: quadruple r4c2-r4c3-r5c2-r5c3 digits [1,3,4,9]
```

**Standard Sudoku, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html

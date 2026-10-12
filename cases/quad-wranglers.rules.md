---
format: open-rules
title: Quad Wranglers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/quad-wranglers
case: https://sudoku-sleuth.com/cases/quad-wranglers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r4c3-r4c2-r4c1-r3c2-r2c3-r1c4-r2c4-r3c4 segments [["r4c3","r4c2","r4c1"],["r3c2","r2c3"],["r1c4","r2c4","r3c4"]]
region-sum-2: region-sum r3c6-r2c6-r1c6-r2c7-r3c8-r4c9-r4c8-r4c7 segments [["r3c6","r2c6","r1c6"],["r2c7","r3c8"],["r4c9","r4c8","r4c7"]]
region-sum-3: region-sum r6c7-r6c8-r6c9-r7c8-r8c7-r9c6-r8c6-r7c6 segments [["r6c7","r6c8","r6c9"],["r7c8","r8c7"],["r9c6","r8c6","r7c6"]]
region-sum-4: region-sum r7c4-r8c4-r9c4-r8c3-r7c2-r6c1-r6c2-r6c3 segments [["r7c4","r8c4","r9c4"],["r8c3","r7c2"],["r6c1","r6c2","r6c3"]]
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,2,3,4]
quadruple-2: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,2,3,4]
quadruple-3: quadruple r3c6-r3c7-r4c6-r4c7 digits [3,4,5,6]
quadruple-4: quadruple r6c3-r6c4-r7c3-r7c4 digits [3,4,5,6]
quadruple-5: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,3,8,9]
quadruple-6: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,5,8,9]
quadruple-7: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,4,6,9]
quadruple-8: quadruple r7c7-r7c8-r8c7-r8c8 digits [1,4,8,9]
quadruple-9: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,4,5]
quadruple-10: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2,3,4]
quadruple-11: quadruple r7c4-r7c5-r8c4-r8c5 digits [2,3,5,8]
```

**Sudoku, Region Sum Lines, Quadruples**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing

---
fog:
  initiallyLit:
    - 10
format: open-rules
title: Oxford Fog
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3m8l0xadnd
case: https://sudoku-sleuth.com/cases/oxford-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c2-r1c3-r2c2-r2c3 digits [1,7,8]
quadruple-2: quadruple r2c1-r2c2-r3c1-r3c2 digits [3,5,6]
quadruple-3: quadruple r2c2-r2c3-r3c2-r3c3 digits [4,5,7]
quadruple-4: quadruple r1c4-r1c5-r2c4-r2c5 digits [2,4,5]
quadruple-5: quadruple r1c5-r1c6-r2c5-r2c6 digits [1,4,6]
quadruple-6: quadruple r2c4-r2c5-r3c4-r3c5 digits [7,8,9]
quadruple-7: quadruple r1c8-r1c9-r2c8-r2c9 digits [3,5,9]
quadruple-8: quadruple r2c7-r2c8-r3c7-r3c8 digits [4,6,8]
quadruple-9: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,2,3,3]
quadruple-10: quadruple r3c3-r3c4-r4c3-r4c4 digits [6,9,9]
quadruple-11: quadruple r4c2-r4c3-r5c2-r5c3 digits [1,7,9]
quadruple-12: quadruple r5c1-r5c2-r6c1-r6c2 digits [3,4,8]
quadruple-13: quadruple r4c7-r4c8-r5c7-r5c8 digits [1,2,5]
quadruple-14: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,5,7]
quadruple-15: quadruple r6c3-r6c4-r7c3-r7c4 digits [1,4,5]
quadruple-16: quadruple r7c2-r7c3-r8c2-r8c3 digits [2,4,5]
quadruple-17: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2,7]
quadruple-18: quadruple r7c4-r7c5-r8c4-r8c5 digits [2,3,4]
quadruple-19: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,5,9]
quadruple-20: quadruple r8c7-r8c8-r9c7-r9c8 digits [5,6,7]
quadruple-21: quadruple r7c8-r7c9-r8c8-r8c9 digits [3,7,9]
quadruple-22: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,4]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Fog: Part of the grid is covered with fog. As correct digits are placed, the fog will clear from cells surrounding the correct digit, revealing additional clues. Digits can be placed within the fog.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

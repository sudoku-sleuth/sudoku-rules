---
format: open-rules
title: GAS Bubbles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/evkj6h5tcy
case: https://sudoku-sleuth.com/cases/gas-bubbles
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3,4]
quadruple-2: quadruple r1c3-r1c4-r2c3-r2c4 digits [1,2,5,6]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [6,7,8,9]
quadruple-4: quadruple r1c6-r1c7-r2c6-r2c7 digits [3,4,8,9]
quadruple-5: quadruple r3c1-r3c2-r4c1-r4c2 digits [1,2,7,8]
quadruple-6: quadruple r3c8-r3c9-r4c8-r4c9 digits [1,2,3,4]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [3,4,5,6]
quadruple-8: quadruple r6c1-r6c2-r7c1-r7c2 digits [5,6,8,9]
quadruple-9: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,3,4,8]
quadruple-10: quadruple r6c8-r6c9-r7c8-r7c9 digits [2,5,7,9]
quadruple-11: quadruple r8c6-r8c7-r9c6-r9c7 digits [1,6,7,9]
quadruple-12: quadruple r8c3-r8c4-r9c3-r9c4 digits [2,5,7,8]
quadruple-13: quadruple r2c2-r2c3-r3c2-r3c3 digits [3,5]
quadruple-14: quadruple r7c2-r7c3-r8c2-r8c3 digits [5,8]
quadruple-15: quadruple r7c7-r7c8-r8c7-r8c8 digits [3,5]
quadruple-16: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,9]
quadruple-17: quadruple r2c4-r2c5-r3c4-r3c5 digits [1,3]
quadruple-18: quadruple r7c5-r7c6-r8c5-r8c6 digits [4,6]
quadruple-19: quadruple r5c4-r5c5-r6c4-r6c5 digits [1]
quadruple-20: quadruple r4c5-r4c6-r5c5-r5c6 digits [1]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

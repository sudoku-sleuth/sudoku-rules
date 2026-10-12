---
format: open-rules
title: Quadrentropy
setter: Timotab
source: https://sudokupad.app/usqp1b60dr
case: https://sudoku-sleuth.com/cases/quadrentropy
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,2,4]
quadruple-2: quadruple r1c1-r1c2-r2c1-r2c2 digits [4,8,9]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,3,7]
quadruple-4: quadruple r2c7-r2c8-r3c7-r3c8 digits [4,5,7]
quadruple-5: quadruple r7c7-r7c8-r8c7-r8c8 digits [1,7,8]
quadruple-6: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,4,5]
quadruple-7: quadruple r7c2-r7c3-r8c2-r8c3 digits [5,6,9]
quadruple-8: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2,9]
quadruple-9: quadruple r4c4-r4c5-r5c4-r5c5 digits [1,4,5]
quadruple-10: quadruple r5c5-r5c6-r6c5-r6c6 digits [1,9,8]
window-classes classes "entropy"
```

• Normal Sudoku rules apply: Place the digits 1 to 9 in every row, column, and box, once each.
• A digit inside a white circle must appear in one of the four cells surrounding that circle.
• Every 2x2 square must contain a low digit (1, 2, 3), a middle digit (4, 5, 6), and a high digit (7, 8, 9)

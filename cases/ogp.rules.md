---
format: open-rules
title: OGP
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/u8016evqy9
case: https://sudoku-sleuth.com/cases/ogp
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3,4]
quadruple-2: quadruple r1c2-r1c3-r2c2-r2c3 digits [3,4,5,6]
quadruple-3: quadruple r2c1-r2c2-r3c1-r3c2 digits [1,3,7,8]
quadruple-4: quadruple r4c1-r4c2-r5c1-r5c2 digits [3,4,7,9]
quadruple-5: quadruple r5c1-r5c2-r6c1-r6c2 digits [3,5,6,7]
quadruple-6: quadruple r5c2-r5c3-r6c2-r6c3 digits [1,2,5,7]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2,5,8]
quadruple-8: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,3,4,6]
quadruple-9: quadruple r8c3-r8c4-r9c3-r9c4 digits [3,5,7,8]
quadruple-10: quadruple r7c4-r7c5-r8c4-r8c5 digits [1,2,5,6]
quadruple-11: quadruple r6c4-r6c5-r7c4-r7c5 digits [1,2,3,9]
quadruple-12: quadruple r4c4-r4c5-r5c4-r5c5 digits [1,4,5,7]
quadruple-13: quadruple r5c5-r5c6-r6c5-r6c6 digits [1,2,3,8]
quadruple-14: quadruple r2c3-r2c4-r3c3-r3c4 digits [2,5,6,9]
quadruple-15: quadruple r1c4-r1c5-r2c4-r2c5 digits [2,3,7,8]
quadruple-16: quadruple r2c5-r2c6-r3c5-r3c6 digits [1,4,8,9]
quadruple-17: quadruple r1c6-r1c7-r2c6-r2c7 digits [1,5,6,9]
quadruple-18: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,4,5,6]
quadruple-19: quadruple r5c8-r5c9-r6c8-r6c9 digits [4,6,8,9]
quadruple-20: quadruple r7c7-r7c8-r8c7-r8c8 digits [3,7,8,9]
```

Standard sudoku constraints apply: every row, column, and box must contain a complete set of the digits 1-9.

Quadruples: Digits in large circles must appear in one of the four cells surrounding the circle.

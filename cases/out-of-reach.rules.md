---
format: open-rules
title: Out of Reach
setter: sujoyku
source: https://sudokupad.app/lsgol1u6f7
case: https://sudoku-sleuth.com/cases/out-of-reach
library: https://rules.sudoku-sleuth.com/
status: read
exported: c94fe0ac1163a121e98e8c08ca99a431
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,7]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [3,9]
quadruple-3: quadruple r5c3-r5c4-r6c3-r6c4 digits [3,5]
quadruple-4: quadruple r6c5-r6c6-r7c5-r7c6 digits [4,6]
quadruple-5: quadruple r4c6-r4c7-r5c6-r5c7 digits [6,8]
quadruple-6: quadruple r2c2-r2c3-r3c2-r3c3 digits [2,6]
quadruple-7: quadruple r2c7-r2c8-r3c7-r3c8 digits [4,8]
quadruple-8: quadruple r3c4-r3c5-r4c4-r4c5 digits [1,3]
quadruple-9: quadruple r7c7-r7c8-r8c7-r8c8 digits [3,7]
quadruple-10: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,9]
quadruple-11: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,5]
quadruple-12: quadruple r8c1-r8c2-r9c1-r9c2 digits [4,8]
quadruple-13: quadruple r8c5-r8c6-r9c5-r9c6 digits [1,8]
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 box has to contain the digits from 1 to 9 once each. 

- Minmax Quads: Digits in a circle must appear in one of the four surrounding cells and either be the lowest or the highest digit in these four cells. (If there is no conflict with other rules, digits around a quad clue may repeat. In particular, the minimum and maximum may appear more than once.)

---
format: open-rules
title: Twins
setter: Jobo
source: https://sudokupad.app/om2xdwos26
case: https://sudoku-sleuth.com/cases/twins
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
between-1: between r2c4-r3c3-r4c2 ends ["r1c5","r5c1"]
between-2: between r6c2-r7c3-r8c4 ends ["r5c1","r9c5"]
between-3: between r8c6-r7c7-r6c8 ends ["r9c5","r5c9"]
between-4: between r4c8-r3c7-r2c6 ends ["r5c9","r1c5"]
quadruple-1: quadruple r1c3-r1c4-r2c3-r2c4 digits [1,1]
quadruple-2: quadruple r1c6-r1c7-r2c6-r2c7 digits [9,9]
quadruple-3: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,2]
quadruple-4: quadruple r6c8-r6c9-r7c8-r7c9 digits [2,2]
quadruple-5: quadruple r3c8-r3c9-r4c8-r4c9 digits [5,5]
quadruple-6: quadruple r3c1-r3c2-r4c1-r4c2 digits [6,6]
quadruple-7: quadruple r6c6-r6c7-r7c6-r7c7 digits [6,6]
quadruple-8: quadruple r3c3-r3c4-r4c3-r4c4 digits [8,8]
quadruple-9: quadruple r6c3-r6c4-r7c3-r7c4 digits [9,9]
quadruple-10: quadruple r6c1-r6c2-r7c1-r7c2 digits [7,7]
quadruple-11: quadruple r8c3-r8c4-r9c3-r9c4 digits [2,2]
quadruple-12: quadruple r8c6-r8c7-r9c6-r9c7 digits [3,3]
```

Normal sudoku rules apply.

Digits on between lines must be between the digits in the attached circles.

Digits in a quadruple clue must all appear in the four surrounding cells.

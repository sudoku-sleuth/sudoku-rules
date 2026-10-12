---
format: open-rules
title: Reduce
setter: Blobz
source: https://sudokupad.app/blobz/reduce
case: https://sudoku-sleuth.com/cases/reduce
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r6c3-r6c4-r7c4 gap 5
whispers-2: whispers r7c2-r7c3-r8c3 gap 5
whispers-3: whispers r8c1-r8c2-r9c2 gap 5
whispers-4: whispers r3c6-r4c6-r4c7 gap 5
whispers-5: whispers r2c7-r3c7-r3c8 gap 5
whispers-6: whispers r1c8-r2c8-r2c9 gap 5
whispers-7: whispers r2c1-r2c2-r1c2 gap 5
whispers-8: whispers r3c2-r3c3-r2c3 gap 5
whispers-9: whispers r4c3-r4c4-r3c4 gap 5
whispers-10: whispers r6c7-r6c6-r7c6 gap 5
whispers-11: whispers r7c8-r7c7-r8c7 gap 5
whispers-12: whispers r8c9-r8c8-r9c8 gap 5
whispers-13: whispers r5c1-r5c2 gap 5
whispers-14: whispers r1c5-r2c5 gap 5
whispers-15: whispers r5c8-r5c9 gap 5
whispers-16: whispers r8c5-r9c5 gap 5
quadruple-1: quadruple r8c1-r8c2-r9c1-r9c2 digits [2,6]
quadruple-2: quadruple r7c7-r7c8-r8c7-r8c8 digits [2,6]
quadruple-3: quadruple r2c2-r2c3-r3c2-r3c3 digits [3,8]
quadruple-4: quadruple r3c6-r3c7-r4c6-r4c7 digits [4,7]
quadruple-5: quadruple r6c3-r6c4-r7c3-r7c4 digits [2,3]
quadruple-6: quadruple r6c6-r6c7-r7c6-r7c7 digits [2,7]
quadruple-7: quadruple r3c3-r3c4-r4c3-r4c4 digits [7,8]
quadruple-8: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,9]
```

Normal sudoku rules apply. 

Along green lines, adjacent digits differ by 5 or more.

Digits in circles must appear in a cell touching the circle.

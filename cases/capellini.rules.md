---
format: open-rules
title: Capellini
setter: Blobz
source: https://sudokupad.app/blobz/capellini
case: https://sudoku-sleuth.com/cases/capellini
library: https://rules.sudoku-sleuth.com/
status: read
exported: e29eba46e78f677bcf92f2e56b373789
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7 gap 5
whispers-2: whispers r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3 gap 5
whispers-3: whispers r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8 gap 5
whispers-4: whispers r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8 gap 5
whispers-5: whispers r7c3-r7c4-r8c5-r9c6-r9c7 gap 5
whispers-6: whispers r3c1-r3c2-r3c3 gap 5
whispers-7: whispers r7c1-r8c2-r9c3 gap 5
whispers-8: whispers r8c8-r9c9 gap 5
quadruple-1: quadruple r5c6-r5c7-r6c6-r6c7 digits [4]
quadruple-2: quadruple r4c3-r4c4-r5c3-r5c4 digits [6]
quadruple-3: quadruple r6c1-r6c2-r7c1-r7c2 digits [2]
quadruple-4: quadruple r3c8-r3c9-r4c8-r4c9 digits [8]
quadruple-5: quadruple r2c1-r2c2-r3c1-r3c2 digits [1]
quadruple-6: quadruple r7c8-r7c9-r8c8-r8c9 digits [3]
quadruple-7: quadruple r8c3-r8c4-r9c3-r9c4 digits [5]
quadruple-8: quadruple r1c5-r1c6-r2c5-r2c6 digits [7]
```

Normal sudoku rules apply.

Along green lines, adjacent digits differ by 5 or more.

Digits in circles must be placed in (at least) one cell touching the circle.

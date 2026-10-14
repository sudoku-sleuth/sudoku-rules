---
format: open-rules
title: Enhance
setter: Blobz
source: https://sudokupad.app/blobz/enhance
case: https://sudoku-sleuth.com/cases/enhance
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4b45ad35591a56b9e69b5b0c30f1cda1
---

```rules
sudoku 9x9
renban-1: renban r2c1-r1c1-r1c2
renban-2: renban r8c1-r9c1-r9c2
renban-3: renban r9c8-r9c9-r8c9
renban-4: renban r1c8-r1c9-r2c9
renban-5: renban r7c2-r8c2-r8c3
renban-6: renban r2c7-r2c8-r3c8
renban-7: renban r2c3-r2c2-r3c2
renban-8: renban r8c7-r8c8-r7c8
renban-9: renban r6c3-r7c3-r7c4
renban-10: renban r4c3-r3c3-r3c4
renban-11: renban r3c6-r3c7-r4c7
renban-12: renban r7c6-r7c7-r6c7
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,8]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [3,7]
quadruple-3: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,9]
quadruple-4: quadruple r8c8-r8c9-r9c8-r9c9 digits [4,6]
quadruple-5: quadruple r3c6-r3c7-r4c6-r4c7 digits [1,9]
quadruple-6: quadruple r6c3-r6c4-r7c3-r7c4 digits [2,8]
quadruple-7: quadruple r6c6-r6c7-r7c6-r7c7 digits [4,6]
quadruple-8: quadruple r3c3-r3c4-r4c3-r4c4 digits [3,7]
quadruple-9: quadruple r2c2-r2c3-r3c2-r3c3 digits [9,6]
quadruple-10: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,4]
quadruple-11: quadruple r7c2-r7c3-r8c2-r8c3 digits [3,4]
quadruple-12: quadruple r7c7-r7c8-r8c7-r8c8 digits [5,7]
```

Normal sudoku rules apply.

Pink lines contain a set of non-repeating consecutive digits in any order.

Digits in circles must appear in a cell touching the circle.

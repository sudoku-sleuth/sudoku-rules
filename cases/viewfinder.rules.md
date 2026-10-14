---
format: open-rules
title: Viewfinder
setter: Blobz
source: https://sudokupad.app/blobz/viewfinder
case: https://sudoku-sleuth.com/cases/viewfinder
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c1=1
exported: e4ca316d07470ea0c23744714f0fe3ec
---

```rules
sudoku 9x9
renban-1: renban r5c7-r5c6-r5c5-r6c5-r7c5-r5c3-r5c4-r4c5-r3c5
renban-2: renban r6c9-r7c9-r8c9-r9c8-r9c7-r9c6-r9c5
renban-3: renban r9c4-r9c3-r9c2-r8c1-r7c1-r6c1-r5c1
renban-4: renban r4c1-r3c1-r2c1-r1c2-r1c3-r1c4-r1c5
renban-5: renban r1c6-r1c7-r1c8-r2c9-r3c9-r4c9-r5c9
renban-6: renban r8c7-r8c8-r7c8-r7c7
renban-7: renban r7c2-r8c2-r8c3-r7c3
renban-8: renban r2c7-r3c7-r3c8-r2c8
renban-9: renban r2c2-r2c3-r3c3-r3c2
quadruple-1: quadruple r8c1-r8c2-r9c1-r9c2 digits [2,5,9]
quadruple-2: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,5,8]
quadruple-3: quadruple r1c8-r1c9-r2c8-r2c9 digits [4,5,9]
quadruple-4: quadruple r8c8-r8c9-r9c8-r9c9 digits [3,7,9]
quadruple-5: quadruple r5c2-r5c3-r6c2-r6c3 digits [1,9]
quadruple-6: quadruple r4c6-r4c7-r5c6-r5c7 digits [2,8]
quadruple-7: quadruple r2c5-r2c6-r3c5-r3c6 digits [7]
```

Normal sudoku rules apply.

Pink lines contain a (non-repeating) set of consecutive digits in any order.

Digits in circles must appear in the surrounding 2x2 cells.

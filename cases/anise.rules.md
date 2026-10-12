---
format: open-rules
title: Anise
setter: Blobz
source: https://sudokupad.app/blobz/anise
case: https://sudoku-sleuth.com/cases/anise
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=1 r2c5=2 r2c8=3 r5c2=4 r5c5=5 r5c8=6 r8c2=7 r8c5=8 r8c8=9
---

```rules
sudoku 9x9
renban-1: renban r2c1-r1c2-r1c3
renban-2: renban r2c4-r1c5-r2c6
renban-3: renban r2c7-r3c7-r3c8-r3c9-r4c9
renban-4: renban r3c4-r4c3
renban-5: renban r2c3-r3c3-r3c2-r3c1-r4c1
renban-6: renban r6c1-r7c1-r7c2-r7c3-r8c3
renban-7: renban r8c4-r9c5-r8c6
renban-8: renban r9c7-r9c8-r8c9
renban-9: renban r8c7-r7c7-r7c8-r7c9-r6c9
renban-10: renban r6c7-r7c6
renban-11: renban r4c5-r5c4-r6c5-r5c6
quadruple-1: quadruple r8c1-r8c2-r9c1-r9c2 digits [8]
quadruple-2: quadruple r6c4-r6c5-r7c4-r7c5 digits [2]
quadruple-3: quadruple r5c2-r5c3-r6c2-r6c3 digits [7]
quadruple-4: quadruple r3c5-r3c6-r4c5-r4c6 digits [2]
quadruple-5: quadruple r4c7-r4c8-r5c7-r5c8 digits [3]
quadruple-6: quadruple r1c8-r1c9-r2c8-r2c9 digits [2]
```

Normal sudoku rules apply.

Pink lines contain a non-repeating set of consecutive digits in any order.

Digits in circles must appear in a cell touching the circle.

---
format: open-rules
title: Ninety-Six
setter: Blobz
source: https://sudokupad.app/blobz/ninety-six
case: https://sudoku-sleuth.com/cases/ninety-six
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6 r9c1=9
exported: 33c0ae55f96a093792584b9ca88c676d
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5-r6c5 total 10 connected true
cage-2: cage r1c4-r1c5-r1c6 total 13 connected true
cage-3: cage r9c4-r9c5-r9c6 total 13 connected true
cage-4: cage r5c1-r5c2 total 9 connected true
cage-5: cage r5c8-r5c9 total 6 connected true
anti-knight
renban-1: renban r7c3-r6c4-r5c4-r5c3-r4c2-r3c3-r4c4
renban-2: renban r3c7-r4c6-r5c6-r5c7-r6c8-r7c7-r6c6
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [9,6]
quadruple-2: quadruple r8c8-r8c9-r9c8-r9c9 digits [9,6]
quadruple-3: quadruple r3c7-r3c8-r4c7-r4c8 digits [9,6]
quadruple-4: quadruple r6c2-r6c3-r7c2-r7c3 digits [9,6]
```

Normal sudoku rules apply.

Pink lines contain a non-repeating consecutive sequence, in any order.

Digits in circles must appear in a cell touching the circle.

Digits in cages sum to the given total.

Cells separated by a chess knight's move cannot contain the same digit.

---
format: open-rules
title: Iris
setter: Blobz
source: https://sudokupad.app/blobz/iris
case: https://sudoku-sleuth.com/cases/iris
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=3 r3c6=4 r5c7=5 r8c7=7
exported: c67e54669a67636e62f1f2d705cc03b0
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5-r2c6 total 24 connected true
cage-2: cage r4c2-r5c2-r6c2 total 9 connected true
cage-3: cage r8c4-r8c5-r8c6 total 8 connected true
cage-4: cage r4c8-r5c8-r6c8 total 9 connected true
renban-1: renban r4c1-r3c1-r2c1-r1c2-r1c3
renban-2: renban r1c6-r1c7-r1c8-r2c9-r3c9
renban-3: renban r6c9-r7c9-r8c9-r9c8-r9c7
renban-4: renban r9c4-r9c3-r9c2-r8c1-r7c1
renban-5: renban r8c6-r8c5-r8c4-r7c3
renban-6: renban r6c2-r5c2-r4c2-r3c3
renban-7: renban r2c4-r2c5-r2c6-r3c7
renban-8: renban r4c8-r5c8-r6c8-r7c7
renban-9: renban r4c4-r4c5-r4c6-r5c6-r6c6-r6c5-r6c4-r5c4
counting-circles r1c1-r1c3-r1c6-r1c8-r2c2-r2c4-r2c6-r3c1-r3c8-r4c2-r4c3-r4c5-r5c1-r5c4-r5c6-r5c9-r6c5-r6c7-r6c8-r6c9-r7c4-r8c2-r8c3-r8c9-r9c5-r9c6
```

Normal sudoku rules apply.

Digits in cages sum to the value shown.

Pink lines contain a set of non-repeating consecutive digits in any order.

A digit in a circle indicates how many circles contain that digit.
